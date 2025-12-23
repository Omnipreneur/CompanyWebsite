'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Check, TrendingUp, Shield, Activity, Zap } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from '@/i18n/routing';
import { FadeIn } from '@/components/animations/FadeIn';

export default function HomePage() {
  const t = useTranslations('home');
  const router = useRouter();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-white py-24 sm:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              {t('hero.subtitle')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => router.push('/iletisim')}
              >
                {t('hero.ctaPrimary')}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => router.push('/cozumler')}
              >
                {t('hero.ctaSecondary')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t('whatWeDo.title')}
            </h2>
          </FadeIn>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <ServiceCard
              title={t('whatWeDo.services.digital.title')}
              bullets={[
                t('whatWeDo.services.digital.bullet1'),
                t('whatWeDo.services.digital.bullet2'),
                t('whatWeDo.services.digital.bullet3'),
              ]}
              linkText={t('whatWeDo.services.digital.link')}
              href="/hizmetler"
            />
            <ServiceCard
              title={t('whatWeDo.services.ai.title')}
              bullets={[
                t('whatWeDo.services.ai.bullet1'),
                t('whatWeDo.services.ai.bullet2'),
                t('whatWeDo.services.ai.bullet3'),
              ]}
              linkText={t('whatWeDo.services.ai.link')}
              href="/hizmetler"
            />
            <FadeIn delay={0.2}>
              <ServiceCard
                title={t('whatWeDo.services.observability.title')}
                bullets={[
                  t('whatWeDo.services.observability.bullet1'),
                  t('whatWeDo.services.observability.bullet2'),
                  t('whatWeDo.services.observability.bullet3'),
                ]}
                linkText={t('whatWeDo.services.observability.link')}
                href="/hizmetler"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Omnipreneur Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t('why.title')}
            </h2>
            <p className="mt-4 text-xl font-semibold text-primary">
              {t('why.headline')}
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { key: 'performance', icon: Zap },
                { key: 'cost', icon: TrendingUp },
                { key: 'observability', icon: Activity },
                { key: 'security', icon: Shield },
                { key: 'continuity', icon: Check },
              ].map(({ key, icon: Icon }) => (
                <div key={key} className="flex flex-col items-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="mt-4 text-sm font-medium text-ink">
                    {t(`why.points.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t('useCase.title')}
            </h2>
          </div>
          <div className="mt-16">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {t('useCase.step1')}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {t('useCase.step1Desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {t('useCase.step2')}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {t('useCase.step2Desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {t('useCase.step3')}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {t('useCase.step3Desc')}
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" onClick={() => router.push('/iletisim')}>
                {t('useCase.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Observability Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t('observability.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('observability.description')}
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { key: 'metrics', icon: Activity },
              { key: 'logs', icon: TrendingUp },
              { key: 'tracing', icon: Zap },
              { key: 'kpis', icon: Shield },
            ].map(({ key, icon: Icon }) => (
              <Card key={key}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      {t(`observability.${key}`)}
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t('process.title')}
          </h2>
          <div className="mt-16">
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <span className="text-lg font-bold">{step}</span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-ink">
                    {t(`process.step${step}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* References Teaser */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t('references.title')}
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('references.ref1.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('references.ref1.description')}</p>
                <Link
                  href="/referanslar"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Detayları gör <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('references.ref2.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('references.ref2.description')}</p>
                <Link
                  href="/referanslar"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Detayları gör <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t('finalCta.title')}
            </h2>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" onClick={() => router.push('/iletisim')}>
                {t('finalCta.ctaPrimary')}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => router.push('/iletisim')}
              >
                {t('finalCta.ctaSecondary')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  title,
  bullets,
  linkText,
  href,
}: {
  title: string;
  bullets: string[];
  linkText: string;
  href: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-sm text-gray-600">{bullet}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          {linkText} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

