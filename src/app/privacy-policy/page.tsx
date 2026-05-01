import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jacob Tax Solutions',
  description:
    'Learn how Jacob Tax Solutions collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700">
            We value your privacy and are committed to protecting your personal
            information.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto prose prose-lg prose-neutral">
          <div className="space-y-8 text-neutral-700">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                Information We Collect
              </h2>
              <p>
                We may collect personal details such as name, email, phone
                number, billing information, and financial/tax-related data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                How We Use Information
              </h2>
              <p className="mb-2">Your information is used to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide tax and consulting services</li>
                <li>Process payments securely</li>
                <li>Communicate with you regarding services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                Data Protection
              </h2>
              <p>
                We implement industry-standard security measures to protect
                your data. Payment details are processed securely through
                Stripe and are not stored on our servers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                Sharing of Information
              </h2>
              <p>
                We do not sell or rent your personal data. Information may be
                shared only with trusted partners or authorities if required
                by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                Cookies
              </h2>
              <p>Our website may use cookies to improve user experience.</p>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                reach out to us at{' '}
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
