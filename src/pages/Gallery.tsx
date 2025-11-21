import { useEffect, useState } from "react";
import { getGalleryImages } from "@/services/galleryService";
import { GalleryImage } from "@/types/gallery";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const IMAGES_PER_PAGE = 6;

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = await getGalleryImages();
        // Sort by createdAt descending (latest first)
        const sortedImages = fetchedImages.sort((a, b) => 
          b.createdAt.getTime() - a.createdAt.getTime()
        );
        setImages(sortedImages);
      } catch (error) {
        console.error("Error loading gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const currentImages = images.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground">
            Moments of faith, worship, and God's grace
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">No images in gallery yet.</p>
              </div>
            ) : (
              currentImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elevated transition-all duration-500 bg-card"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-lg font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="icon"
                    onClick={() => goToPage(page)}
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Page Info */}
          {images.length > 0 && (
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(endIndex, images.length)} of {images.length} images
            </div>
          )}
        </div>

        {/* Inspirational Quote */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-soft text-center">
            <blockquote className="text-xl md:text-2xl text-primary font-medium italic mb-4">
              "Let us hold fast the confession of our hope without wavering, for He who promised is faithful."
            </blockquote>
            <footer className="text-accent font-medium">— Hebrews 10:23</footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
