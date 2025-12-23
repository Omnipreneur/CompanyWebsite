import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Omnipreneur - Dijital ve AI Destekli Kurumsal İş Sistemleri',
  description: 'Satış, müşteri ve operasyon süreçlerinizi; üretimde çalışan, ölçülebilir ve gözlemlenebilir sistemlerle dönüştürüyoruz.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

