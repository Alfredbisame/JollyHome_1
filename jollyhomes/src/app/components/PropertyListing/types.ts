export interface Property {
  id: string;
  title: string;
  price: number;
  currency: string;
  status: 'For Sale' | 'For Rent' | 'Sold';
  beds: number;
  baths: number;
  sqft: number;
  location: string;
  image: string;
  featured?: boolean;
  description?: string;
}

export interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
  onToggleFavorite: (propertyId: string) => void;
  isFavorite?: boolean;
  className?: string;
}

export interface PropertyListingProps {
  properties?: Property[];
  title?: string;
  className?: string;
  onViewDetails?: (property: Property) => void;
  onToggleFavorite?: (propertyId: string) => void;
  favoriteProperties?: string[];
}

export interface PropertyListingHeaderProps {
  title?: string;
  subtitle?: string;
  propertyCount?: number;
}
