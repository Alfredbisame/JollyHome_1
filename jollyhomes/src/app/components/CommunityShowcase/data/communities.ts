import { CommunityData } from '@/app/components/CommunityShowcase/types';

export const oyarifaCottageData: CommunityData = {
  id: 'oyarifa-cottage',
  name: 'Oyarifa Cottage',
  title: 'Oyarifa Cottage',
  location: 'Greater Accra, Ghana',
  image: 'https://storage.googleapis.com/a1aa/image/b5ba588e-9cb1-410b-9187-5d8012754279.jpg',
  imageAlt: 'Modern street view with white houses on both sides, cars parked along the street, blue sky with clouds and birds flying',
  description: [
    'The community offers expansive vistas of the Aburi mountains along with a great selection including luxury features all in an award-worthy community. With a brand-new offering of single story and 2-story homes for sale and with unique, well-built home designs, Oyarifa Cottage is an ideal place to live at an attainable price.',
    'Jolly B Homes prides itself on being one of the finest homebuilders in the region, and it\'s easy to see why: Jolly B Homes thoughtfully designs each house with living spaces to be enjoyed by residents of every age and stage of life. Homebuyers love simple but classy architecture designed with your comfort in mind.',
    'Residents at Oyarifa Cottage will enjoy a wonderful community, with spring-like warm weather. It\'s easy to make new friends at the community\'s indoor games centre and playground.'
  ],
  features: [
    'Mountain Views of Aburi',
    'Single & 2-Story Homes',
    'Award-Winning Community',
    'Indoor Games Centre',
    'Children\'s Playground',
    'Premium Architecture',
    'Year-Round Comfort',
    'Family-Friendly Design'
  ],
  priceRange: {
    min: 85000,
    max: 180000,
    currency: 'USD'
  },
  amenities: [
    'Indoor Games Centre',
    'Children\'s Playground',
    '24/7 Security',
    'Mountain Views',
    'Community Center',
    'Landscaped Gardens'
  ]
};

// You can add more communities here
export const communities = [
  oyarifaCottageData,
  // Add more community data objects here
];
