import { useState, useEffect } from "react";
import { getGalleryImages, uploadGalleryImage, deleteGalleryImage } from "@/services/galleryService";
import { GalleryImage } from "@/types/gallery";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, Trash2, Loader2, Image as ImageIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const GalleryManager = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [alt, setAlt] = useState("");
  const [caption, setCaption] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchImages = async () => {
    try {
      const fetchedImages = await getGalleryImages();
      setImages(fetchedImages);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load images",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile || !alt || !caption) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields and select an image",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    try {
      await uploadGalleryImage(selectedFile, alt, caption);
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
      
      // Reset form
      setSelectedFile(null);
      setAlt("");
      setCaption("");
      const fileInput = document.getElementById("image-upload") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      
      // Refresh images
      await fetchImages();
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "Failed to upload image",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await deleteGalleryImage(deleteId);
      toast({
        title: "Success",
        description: "Image deleted successfully",
      });
      await fetchImages();
    } catch (error) {
      toast({
        title: "Delete Failed",
        description: "Failed to delete image",
        variant: "destructive",
      });
    } finally {
      setDeleteId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Upload Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload New Image
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="image-upload">Image File</Label>
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
              <p className="text-xs text-muted-foreground">
                Image will be automatically compressed before upload
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="alt">Alt Text</Label>
              <Input
                id="alt"
                placeholder="Description for accessibility"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="caption">Caption</Label>
              <Input
                id="caption"
                placeholder="Caption to display on hover"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit" disabled={uploading}>
              {uploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Gallery Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            Gallery Images ({images.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {images.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No images uploaded yet</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <div key={image.id} className="group relative aspect-square rounded-lg overflow-hidden bg-muted">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2">
                    <p className="text-white text-xs text-center mb-2 line-clamp-2">{image.caption}</p>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => setDeleteId(image.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Image</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this image? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default GalleryManager;
