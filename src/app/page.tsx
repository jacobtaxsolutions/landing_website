import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { USPSection } from '@/components/home/USPSection';
import { StatsSection } from '@/components/home/StatsSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'USA Tax Filing Services | Fast, Accurate & Affordable - YourTax Services',
  description:
    'Professional USA tax filing services for individuals and businesses. File federal and state taxes accurately with expert support. 22+ years of experience.',
  keywords: [
    'USA tax filing services',
    'tax preparation',
    'federal tax filing',
    'state tax filing',
    'tax accountant near me USA',
    'affordable tax preparation USA',
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
