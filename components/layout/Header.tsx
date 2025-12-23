'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useRouter, usePathname } from '@/i18n/routing';

export function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'services', href: '/hizmetler' },
    { key: 'solutions', href: '/cozumler' },
    { key: 'technology', href: '/teknoloji' },
    { key: 'references', href: '/referanslar' },
    { key: 'blog', href: '/blog' },
    { key: 'contact', href: '/iletisim' },
  ];

  const toggleLocale = () => {
    const currentPath = pathname || '/';
    const currentLocale = typeof window !== 'undefined' && window.location.pathname.startsWith('/en') ? 'en' : 'tr';
    const newLocale = currentLocale === 'en' ? 'tr' : 'en';
    router.push(currentPath, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/brand/logo.png"
              alt="Omnipreneur"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-ink transition-colors hover:text-primary"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => router.push('/iletisim')}
            >
              {t('schedule')}
            </Button>
            <button
              onClick={toggleLocale}
              className="hidden rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-gray-50 md:inline-flex"
            >
              {typeof window !== 'undefined' && window.location.pathname.startsWith('/en') ? 'TR' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-ink transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <Button
                variant="default"
                size="sm"
                className="w-full"
                onClick={() => {
                  router.push('/iletisim');
                  setMobileMenuOpen(false);
                }}
              >
                {t('schedule')}
              </Button>
              <button
                onClick={toggleLocale}
                className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-gray-50"
              >
                {typeof window !== 'undefined' && window.location.pathname.startsWith('/en') ? 'TR' : 'EN'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

