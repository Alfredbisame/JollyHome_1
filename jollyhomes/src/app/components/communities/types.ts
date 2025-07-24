export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  featured?: boolean;
}

export interface GalleryProject {
  id: string;
  name: string;
  slug: string;
  description: string;
  location: string;
  images: GalleryImage[];
  completionYear: string;
  totalUnits: number;
}

export interface GalleryTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  projects: GalleryProject[];
}

export interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

export interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: GalleryImage | null;
  images: GalleryImage[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}
