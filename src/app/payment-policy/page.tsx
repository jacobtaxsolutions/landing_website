import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Payment Policy | Jacob Tax Solutions',
  description:
    'Review the payment terms and accepted methods for services from Jacob Tax Solutions.',
};

export default function PaymentPolicyPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Payment Policy
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700">
            Simple, secure, and transparent payment terms.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg text-neutral-700">
            <ul className="list-disc pl-6 space-y-4">
              <li>
                All payments must be made in advance unless otherwise agreed.
              </li>
              <li>
                We accept payments via secure payment gateways including
                Stripe.
              </li>
              <li>
                By making a payment, you agree to our{' '}
                <Link
                  href="/refund-policy"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  refund policy
                </Link>
                .
              </li>
            </ul>

            <div className="border-t border-neutral-200 pt-6">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                Billing Questions
              </h2>
              <p>
                For billing or payment questions, contact us at{' '}
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
