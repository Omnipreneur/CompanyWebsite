'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SolutionsPage() {
  const t = useTranslations('solutions');

  const solutions = ['wholesale', 'federation', 'operations', 'catalog'];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {t('title')}
          </h1>
        </div>

        <div className="mt-16 space-y-16">
          {solutions.map((solutionKey) => (
            <SolutionBlock key={solutionKey} solutionKey={solutionKey} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SolutionBlock({ solutionKey }: { solutionKey: string }) {
  const t = useTranslations(`solutions.${solutionKey}`);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{t('title')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-ink">
            {t('problem')}
          </h3>
          <p className="text-gray-600">{t('problemText')}</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-ink">
            {t('approach')}
          </h3>
          <p className="text-gray-600">{t('approachText')}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-ink">
              {t('measured')}
            </h3>
            <p className="text-gray-600">{t('measuredText')}</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-ink">
              {t('improves')}
            </h3>
            <p className="text-gray-600">{t('improvesText')}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

