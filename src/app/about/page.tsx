import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { ValuesSection } from '@/components/about/ValuesSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About Us | Our Story & Mission | Jacob Tax Solutions',
  description:
    'Learn about Jacob Tax Solutions - 22+ years of trusted tax services for Indian-Americans. Discover our mission, values, and commitment to excellence.',
  keywords: [
    'about Jacob Tax Solutions',
    'tax company',
    'Indian-American tax services',
    'trusted tax firm',
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            About Jacob Tax Solutions
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700">
            Your trusted tax partner for over two decades
          </p>
        </div>
      </Section>

      {/* Company Story */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-lg text-neutral-700">
            <p>
              Since 2003, Jacob Tax Solutions has been dedicated to providing
              exceptional tax services to individuals and businesses across the
              United States. Our journey began with a simple mission: to make
              tax compliance easier and more accessible for Indian-Americans
              navigating the complex US tax system.
            </p>
            <p>
              Over the years, Jacob Tax Solutions has grown from a small
              practice to a comprehensive tax consulting firm, serving over
              10,000 clients and filing more than 50,000 tax returns. Our
              success is built on trust, expertise, and an unwavering commitment
              to our clients&apos; financial well-being.
            </p>
            <p>
              Today, we continue to serve the Indian-American community with the
              same dedication and personalized attention that has defined us
              from the beginning. With 100% online services, we make professional
              tax preparation accessible from anywhere in the USA.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-neutral-700">
              At Jacob Tax Solutions, our mission is to provide professional,
              accurate, and timely tax services while building lasting
              relationships with our clients through integrity, expertise, and
              exceptional service. We believe everyone deserves access to
              quality tax preparation.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-neutral-700">
              To be the most trusted tax consulting partner for Indian-Americans
              nationwide, leveraging technology and expertise to deliver
              seamless, stress-free tax solutions. Jacob Tax Solutions aims to
              set the standard for online tax services.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <ValuesSection />

      {/* Why Choose Us */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
            Why Choose Jacob Tax Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold font-display text-lg mb-2">
                  IRS-Certified Professionals
                </h3>
                <p className="text-neutral-600">
                  Our team includes Enrolled Agents and registered tax preparers
                  with decades of combined experience
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold font-display text-lg mb-2">
                  22+ Years Experience
                </h3>
                <p className="text-neutral-600">
                  Proven track record with over 50,000 successful filings and
                  10,000+ satisfied clients
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold font-display text-lg mb-2">
                  100% Online Service
                </h3>
                <p className="text-neutral-600">
                  Secure portal access from anywhere in the USA - no office
                  visits required
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold font-display text-lg mb-2">
                  Free Draft in 24 Hours
                </h3>
                <p className="text-neutral-600">
                  Review your tax return draft within 24 hours at no cost before
                  you commit
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
