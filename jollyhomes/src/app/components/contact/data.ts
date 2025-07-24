import { ContactInfoItem } from './types';

export const contactInfoItems: ContactInfoItem[] = [
  {
    id: 'location',
    icon: 'location',
    title: 'Visit Us',
    content: 'Oyarifa, Accra - Ghana',
    href: 'https://maps.google.com/?q=Oyarifa,Accra,Ghana'
  },
  {
    id: 'email',
    icon: 'email',
    title: 'Email Us',
    content: 'info@jollybghana.com',
    href: 'mailto:info@jollybghana.com'
  },
  {
    id: 'phone',
    icon: 'phone',
    title: 'Call Us',
    content: '0532370448 || 0594571292',
    href: 'tel:+233532370448'
  },
  {
    id: 'whatsapp',
    icon: 'phone',
    title: 'WhatsApp',
    content: '0532370449',
    href: 'https://wa.me/233532370449'
  }
];
