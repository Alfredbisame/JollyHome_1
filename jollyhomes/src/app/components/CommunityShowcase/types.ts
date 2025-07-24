export interface CommunityData {
  id: string;
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string[];
  features: string[];
  location: string;
  priceRange?: {
    min: number;
    max: number;
    currency: string;
  };
  amenities?: string[];
}

export interface CommunityShowcaseProps {
  community: CommunityData;
  className?: string;
  onLearnMore?: () => void;
  onViewProperties?: () => void;
}

export interface CommunityImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface CommunityContentProps {
  community: CommunityData;
  onLearnMore?: () => void;
  onViewProperties?: () => void;
}
