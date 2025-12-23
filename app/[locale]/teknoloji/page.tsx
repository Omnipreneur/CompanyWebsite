'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, TrendingUp, Zap, CheckCircle } from 'lucide-react';

export default function TechnologyPage() {
  const t = useTranslations('technology');

  const principles = [
    { key: 'reliability', icon: Shield },
    { key: 'measurable', icon: TrendingUp },
    { key: 'security', icon: CheckCircle },
    { key: 'integration', icon: Zap },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {t('title')}
          </h1>
        </div>

        <div className="mt-16">
          <section>
            <h2 className="mb-8 text-2xl font-bold text-ink">
              {t('principles.title')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {principles.map(({ key, icon: Icon }) => (
                <Card key={key}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {t(`principles.${key}.title`)}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {t(`principles.${key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-ink">
              {t('architecture.title')}
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('architecture.modular')}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('architecture.event')}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('architecture.audit')}</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-ink">
              {t('observability.title')}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600">{t('observability.description')}</p>
              </CardContent>
            </Card>
          </section>

          <section className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-ink">
              {t('governance.title')}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('governance.kvkk')}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('governance.access')}</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-ink">
              {t('environments.title')}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('environments.cicd')}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('environments.parity')}</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

