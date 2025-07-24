import Gallery from '@/app/components/communities/Gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Gallery | Jolly B Homes - Explore Our Stunning Developments',
  description: 'Browse through our impressive collection of completed and ongoing real estate projects including Oyarifa Cottage, Oyarifa Cottage Annex, and Lake View Estate.',
  keywords: 'Jolly B Homes gallery, real estate projects Ghana, Oyarifa Cottage, Lake View Estate, property gallery, luxury homes Ghana',
  openGraph: {
    title: 'Project Gallery | Jolly B Homes',
    description: 'Explore our stunning collection of real estate projects and developments in Ghana',
    type: 'website',
    images: [
      {
        url: 'https://storage.googleapis.com/a1aa/image/5f7eeb7a-4beb-4041-9fc8-6faf18c1b8aa.jpg',
        width: 1200,
        height: 630,
        alt: 'Jolly B Homes Project Gallery'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Gallery | Jolly B Homes',
    description: 'Explore our stunning collection of real estate projects and developments in Ghana',
    images: ['https://storage.googleapis.com/a1aa/image/5f7eeb7a-4beb-4041-9fc8-6faf18c1b8aa.jpg']
  }
};

const GalleryPage = () => {
  return <Gallery />;
};

export default GalleryPage;
