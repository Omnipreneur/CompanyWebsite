'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ReferencesPage() {
  const t = useTranslations('references');

  const references = ['federation', 'b2b'];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {t('title')}
          </h1>
        </div>

        <div className="mt-16 space-y-16">
          {references.map((refKey) => (
            <ReferenceBlock key={refKey} refKey={refKey} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReferenceBlock({ refKey }: { refKey: string }) {
  const t = useTranslations(`references.${refKey}`);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{t('title')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-ink">
            {t('context')}
          </h3>
          <p className="text-gray-600">{t('contextText')}</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-ink">
            {t('built')}
          </h3>
          <p className="text-gray-600">{t('builtText')}</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-ink">
            {t('measured')}
          </h3>
          <p className="text-gray-600">{t('measuredText')}</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-ink">
            {t('operations')}
          </h3>
          <p className="text-gray-600">{t('operationsText')}</p>
        </div>
      </CardContent>
    </Card>
  );
}

