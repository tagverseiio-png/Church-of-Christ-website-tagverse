import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { compressImage } from '@/lib/imageCompression';
import { GalleryImage } from '@/types/gallery';

const GALLERY_COLLECTION = 'gallery';

// Convert file to base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

export const uploadGalleryImage = async (
  file: File,
  alt: string,
  caption: string
): Promise<void> => {
  try {
    // Compress image
    const compressedFile = await compressImage(file);
    
    // Convert to base64
    const base64Image = await fileToBase64(compressedFile);

    // Get current max order
    const imagesSnapshot = await getDocs(collection(db, GALLERY_COLLECTION));
    const maxOrder = imagesSnapshot.docs.reduce((max, doc) => {
      const order = doc.data().order || 0;
      return order > max ? order : max;
    }, 0);

    // Save to Firestore with base64 image
    await addDoc(collection(db, GALLERY_COLLECTION), {
      imageData: base64Image,
      alt,
      caption,
      createdAt: new Date(),
      order: maxOrder + 1,
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const getGalleryImages = async (): Promise<GalleryImage[]> => {
  try {
    // Order by createdAt descending (latest first)
    const q = query(collection(db, GALLERY_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        url: data.imageData, // base64 image data
        alt: data.alt,
        caption: data.caption,
        createdAt: data.createdAt?.toDate(),
        order: data.order,
      };
    }) as GalleryImage[];
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    throw error;
  }
};

export const deleteGalleryImage = async (imageId: string): Promise<void> => {
  try {
    // Delete from Firestore
    await deleteDoc(doc(db, GALLERY_COLLECTION, imageId));
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
};

export const updateImageOrder = async (imageId: string, newOrder: number): Promise<void> => {
  try {
    await updateDoc(doc(db, GALLERY_COLLECTION, imageId), {
      order: newOrder,
    });
  } catch (error) {
    console.error('Error updating image order:', error);
    throw error;
  }
};
