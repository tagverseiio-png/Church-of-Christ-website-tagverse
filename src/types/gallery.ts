export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
  createdAt: Date;
  order: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: Date;
  read: boolean;
}
