'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const t = useTranslations('blog');

  const posts = [
    {
      slug: 'tahsilat-gecikme-nedenleri',
      category: 'b2b',
      readTime: 5,
    },
    {
      slug: 'whatsapp-email-musteri-insight',
      category: 'ai',
      readTime: 7,
    },
    {
      slug: 'gozlemlenebilirlik-ai-uretim',
      category: 'observability',
      readTime: 6,
    },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {t('title')}
          </h1>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogPostCard({ post }: { post: { slug: string; category: string; readTime: number } }) {
  const t = useTranslations('blog');
  const locale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'tr';
  const isEn = locale === 'en';

  const titles: Record<string, { tr: string; en: string }> = {
    'tahsilat-gecikme-nedenleri': {
      tr: 'Toptan satışta tahsilat neden gecikir?',
      en: 'Why do collections delay in wholesale sales?',
    },
    'whatsapp-email-musteri-insight': {
      tr: 'WhatsApp ve e-posta verisinden müşteri içgörüsü',
      en: 'Customer insights from WhatsApp and email data',
    },
    'gozlemlenebilirlik-ai-uretim': {
      tr: 'Gözlemlenebilirlik olmadan AI üretime çıkmaz',
      en: 'AI cannot go to production without observability',
    },
  };

  const title = titles[post.slug]?.[isEn ? 'en' : 'tr'] || post.slug;

  return (
    <Card>
      <CardHeader>
        <Badge variant="secondary" className="mb-2 w-fit">
          {t(`categories.${post.category}`)}
        </Badge>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>
          {post.readTime} {t('readTime')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Devamını oku <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

