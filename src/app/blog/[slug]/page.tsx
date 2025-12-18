import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { CTASection } from '@/components/home/CTASection';
import { getBlogBySlug, blogPosts, type BlogPost } from '@/data/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const categoryLabels: Record<BlogPost['category'], string> = {
  individual: 'Individual Tax',
  business: 'Business Tax',
  'tax-help': 'Tax Help',
};

const categoryColors: Record<BlogPost['category'], string> = {
  individual: 'bg-primary-100 text-primary-700',
  business: 'bg-accent-100 text-accent-700',
  'tax-help': 'bg-amber-100 text-amber-700',
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found - Jacob Tax Solutions',
    };
  }

  return {
    title: `${post.title} - Jacob Tax Solutions`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Split content into paragraphs
  const paragraphs = post.content.split('\n\n');

  return (
    <>
      {/* Page Hero */}
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto py-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-neutral-600">
            <span className="flex items-center">
              <Calendar size={18} className="mr-2" />
              {formattedDate}
            </span>
            <span
              className={`flex items-center text-sm font-semibold px-3 py-1 rounded-full ${categoryColors[post.category]}`}
            >
              <Tag size={14} className="mr-1" />
              {categoryLabels[post.category]}
            </span>
          </div>
        </div>
      </Section>

      {/* Blog Content */}
      <Section>
        <article className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-neutral max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-6 text-neutral-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Topics */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h3 className="text-xl font-semibold font-display mb-4">
              Need Help With Your Taxes?
            </h3>
            <p className="text-neutral-600 mb-6">
              Our team of experienced tax professionals is here to help. Whether
              you need assistance with tax filing, IRS issues, or tax planning,
              we&apos;re ready to support you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Get a Free Consultation
            </Link>
          </div>
        </article>
      </Section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
