export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  currency: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  status: 'For Sale' | 'For Rent' | 'Sold';
  featured: boolean;
  description?: string;
}

export interface PropertySliderProps {
  properties: Property[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
  onToggleFavorite: (propertyId: number) => void;
  onShuffle: () => void;
  isFavorite?: boolean;
}
