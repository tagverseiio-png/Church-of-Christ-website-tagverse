import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ContactMessage } from '@/types/gallery';

const CONTACT_COLLECTION = 'contacts';

export const submitContactForm = async (
  name: string,
  email: string,
  phone: string,
  message: string
): Promise<void> => {
  try {
    await addDoc(collection(db, CONTACT_COLLECTION), {
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
      read: false,
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

export const getContactMessages = async (): Promise<ContactMessage[]> => {
  try {
    const q = query(collection(db, CONTACT_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
    })) as ContactMessage[];
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    throw error;
  }
};

export const markMessageAsRead = async (messageId: string): Promise<void> => {
  try {
    await updateDoc(doc(db, CONTACT_COLLECTION, messageId), {
      read: true,
    });
  } catch (error) {
    console.error('Error marking message as read:', error);
    throw error;
  }
};

export const deleteContactMessage = async (messageId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, CONTACT_COLLECTION, messageId));
  } catch (error) {
    console.error('Error deleting message:', error);
    throw error;
  }
};
