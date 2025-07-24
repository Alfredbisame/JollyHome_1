import AboutUsPage from '@/app/components/AboutUs/AboutUsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Jolly B Homes',
  description: 'Learn about Jolly B Homes and our mission to create exceptional living spaces in premium communities like Oyarifa Cottage.',
};

export default function AboutPage() {
  return <AboutUsPage />;
}
