'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const locale = (params?.locale as string) || (typeof window !== 'undefined' && window.location.pathname.startsWith('/en') ? 'en' : 'tr');
  const t = useTranslations('blog');
  const isEn = locale === 'en';

  const posts: Record<
    string,
    {
      category: string;
      readTime: number;
      title: { tr: string; en: string };
      content: { tr: string; en: string };
    }
  > = {
    'tahsilat-gecikme-nedenleri': {
      category: 'b2b',
      readTime: 5,
      title: {
        tr: 'Toptan satışta tahsilat neden gecikir?',
        en: 'Why do collections delay in wholesale sales?',
      },
      content: {
        tr: 'Toptan satış firmalarında tahsilat gecikmeleri sık karşılaşılan bir sorundur. Bu yazıda, tahsilat gecikmelerinin temel nedenlerini ve çözüm yollarını inceliyoruz.',
        en: 'Collection delays are a common problem in wholesale companies. In this article, we examine the main causes of collection delays and solution approaches.',
      },
    },
    'whatsapp-email-musteri-insight': {
      category: 'ai',
      readTime: 7,
      title: {
        tr: 'WhatsApp ve e-posta verisinden müşteri içgörüsü',
        en: 'Customer insights from WhatsApp and email data',
      },
      content: {
        tr: 'Müşteri iletişim kanallarından gelen veriler, işletmeler için değerli içgörüler sunar. AI destekli analiz ile bu verilerden anlamlı sonuçlar çıkarabilirsiniz.',
        en: 'Data from customer communication channels offers valuable insights for businesses. With AI-powered analysis, you can extract meaningful results from this data.',
      },
    },
    'gozlemlenebilirlik-ai-uretim': {
      category: 'observability',
      readTime: 6,
      title: {
        tr: 'Gözlemlenebilirlik olmadan AI üretime çıkmaz',
        en: 'AI cannot go to production without observability',
      },
      content: {
        tr: 'AI sistemlerinin üretim ortamında güvenilir çalışması için gözlemlenebilirlik kritiktir. Metrik, log ve tracing altyapısı olmadan AI sistemleri risklidir.',
        en: 'Observability is critical for AI systems to work reliably in production. AI systems are risky without metrics, logs, and tracing infrastructure.',
      },
    },
  };

  const post = posts[slug];

  if (!post) {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <p>Post not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Blog'a dön
        </Link>

        <article className="mx-auto max-w-3xl">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              {t(`categories.${post.category}`)}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              {post.title[isEn ? 'en' : 'tr']}
            </h1>
            <p className="mt-4 text-gray-600">
              {post.readTime} {t('readTime')}
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">{post.content[isEn ? 'en' : 'tr']}</p>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  );
}

