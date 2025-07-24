import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wishlist - Jolly B Homes',
  description: 'View and manage your wishlist items for Jolly B Homes properties.',
};

export default function WishListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 