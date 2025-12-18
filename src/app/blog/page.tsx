import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { BlogCard } from '@/components/blog/BlogCard';
import { CTASection } from '@/components/home/CTASection';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Tax Blog | Expert Tax Tips & Guides | Jacob Tax Solutions',
  description:
    'Expert tax insights, tips, and guides from Jacob Tax Solutions. Stay informed about USA tax filing, IRS help, and tax planning strategies for Indian-Americans.',
  keywords: [
    'Jacob Tax Solutions blog',
    'tax blog',
    'tax tips',
    'tax guides',
    'IRS tax help',
    'USA tax filing services',
    'tax planning advice',
  ],
};

export default function BlogPage() {
  return (
    <>
      {/* Page Hero */}
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Tax Blog
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700">
            Expert insights and guides to help you navigate tax season with
            confidence
          </p>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
