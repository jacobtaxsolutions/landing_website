import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
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

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full group">
      <Card hover className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category]}`}
          >
            {categoryLabels[post.category]}
          </span>
          <span className="flex items-center text-sm text-neutral-500">
            <Calendar size={14} className="mr-1" />
            {formattedDate}
          </span>
        </div>

        <h3 className="text-xl font-semibold font-display mb-3 text-neutral-900 group-hover:text-primary-600 transition-colors">
          {post.title}
        </h3>

        <p className="text-neutral-600 mb-4 flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
          Read More
          <ArrowRight
            size={16}
            className="ml-1 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </Card>
    </Link>
  );
}
