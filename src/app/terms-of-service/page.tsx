import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Terms of Service | Jacob Tax Solutions',
  description:
    'Read the terms and conditions governing the use of Jacob Tax Solutions services.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700">
            By using our services, you agree to the following terms.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg text-neutral-700">
            <ul className="list-disc pl-6 space-y-4">
              <li>
                We provide tax preparation, consulting, and advisory services
                based on the information provided by clients.
              </li>
              <li>
                Clients are responsible for the accuracy of information
                submitted.
              </li>
              <li>
                We are not liable for penalties arising from incorrect or
                incomplete data provided by the client.
              </li>
              <li>
                Services are delivered digitally or through consultation
                unless otherwise specified.
              </li>
              <li>Prices and services may change without prior notice.</li>
            </ul>

            <div className="border-t border-neutral-200 pt-6">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-neutral-900">
                Questions?
              </h2>
              <p>
                For questions regarding these terms, contact us at{' '}
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
