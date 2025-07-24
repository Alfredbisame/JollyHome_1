import TermsPage from '@/app/components/Terms/TermsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Jolly B Homes',
  description: 'Read the terms and conditions for using Jolly B Homes services and website.',
};

export default function Terms() {
  return <TermsPage />;
} 