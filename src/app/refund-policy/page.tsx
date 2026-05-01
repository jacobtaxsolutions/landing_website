import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Refund Policy | Jacob Tax Solutions',
  description:
    'Understand the refund policy for tax preparation, consulting, and lead generation services from Jacob Tax Solutions.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Refund Policy
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700">
            We strive to provide high-quality services to all our clients.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-neutral-700">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                Service Fees (Tax &amp; Consulting)
              </h2>
              <p>
                All fees for tax preparation, filing, and consulting services
                are non-refundable once the service has been initiated or
                completed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                Eligibility for Refunds
              </h2>
              <p className="mb-2">Refunds may only be considered if:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The service has not yet started, or</li>
                <li>A duplicate payment was made in error</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                Lead Generation / Marketing Services
              </h2>
              <p>
                Payments made for lead generation or customer acquisition
                services are non-refundable, as these are performance-based
                services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                Processing Time
              </h2>
              <p>
                If a refund is approved, it will be processed within 5–10
                business days to the original payment method.
              </p>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                Request a Refund
              </h2>
              <p>
                To request a refund or ask about eligibility, email us at{' '}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {contactInfo.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
