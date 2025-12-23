'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { useRouter } from '@/i18n/routing';

export function Footer() {
  const t = useTranslations('footer');
  const router = useRouter();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-container px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/brand/logo.png"
                alt="Omnipreneur"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm text-gray-600">
              {t('statement')}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-ink">
              {t('links')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hizmetler"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  {t('links')}
                </Link>
              </li>
              <li>
                <Link
                  href="/cozumler"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Çözümler
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-ink">
              {t('legal')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  {t('terms')}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  {t('privacy')}
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://linkedin.com/company/omnipreneur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            {t('copyright')}
          </p>
          <p className="mt-2 text-center text-sm text-gray-600">
            info@omnipreneur.io · Ankara, Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}

