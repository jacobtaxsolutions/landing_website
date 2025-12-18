import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { USPSection } from '@/components/home/USPSection';
import { StatsSection } from '@/components/home/StatsSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'USA Tax Filing Services | Fast, Accurate & Affordable | Jacob Tax Solutions',
  description:
    'Jacob Tax Solutions provides professional USA tax filing services for Indian-Americans. File federal and state taxes accurately with 22+ years of expert support.',
  keywords: [
    'Jacob Tax Solutions',
    'USA tax filing services',
    'tax preparation',
    'federal tax filing',
    'state tax filing',
    'tax accountant near me USA',
    'Indian-American tax services',
  ],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <USPSection />
      <StatsSection />
      <CTASection />
    </>
  );
}
