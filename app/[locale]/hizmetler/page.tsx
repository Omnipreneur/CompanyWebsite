'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations('services');

  const services = [
    {
      key: 'digital',
      badges: ['Üretimde', 'KVKK'],
    },
    {
      key: 'ai',
      badges: ['AI', 'B2B'],
    },
    {
      key: 'rag',
      badges: ['AI', 'Gözlemlenebilir'],
    },
    {
      key: 'observability',
      badges: ['Gözlemlenebilir', 'Operasyon'],
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

        <div className="mt-16 space-y-24">
          {services.map((service) => (
            <ServiceBlock key={service.key} serviceKey={service.key} badges={service.badges} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceBlock({ serviceKey, badges }: { serviceKey: string; badges: string[] }) {
  const t = useTranslations(`services.${serviceKey}`);

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <h2 className="text-3xl font-bold tracking-tight text-ink">
          {t('title')}
        </h2>
        <div className="flex gap-2">
          {badges.map((badge) => (
            <Badge key={badge} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
      </div>

      <p className="mb-8 text-lg text-gray-600">{t('overview')}</p>

      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{t('outcomes')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">{t('outcome1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">{t('outcome2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">{t('outcome3')}</span>
              </li>
              {t('outcome4') && (
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-gray-600">{t('outcome4')}</span>
                </li>
              )}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{t('deliverables')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">{t('deliverable1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">{t('deliverable2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">{t('deliverable3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">{t('deliverable4')}</span>
              </li>
              {t('deliverable5') && (
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-gray-600">{t('deliverable5')}</span>
                </li>
              )}
              {t('deliverable6') && (
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-gray-600">{t('deliverable6')}</span>
                </li>
              )}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{t('addons')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">{t('addon1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">{t('addon2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">{t('addon3')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

