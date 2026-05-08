import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomBar from '@/components/layout/MobileBottomBar';
import ChatWidget from '@/components/layout/ChatWidget';
import OfferteModalProvider from '@/components/providers/OfferteModalProvider';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dakwerklimburg.be'),
  title: {
    default: 'Dakwerk Limburg — Vakkundige Dakwerkers in heel Limburg',
    template: '%s | Dakwerk Limburg',
  },
  description:
    'Op zoek naar een betrouwbare dakwerker in Limburg? Wij verbinden u met gecertificeerde vakmensen voor dakrenovatie, plat dak, dakisolatie en goten. Gratis offerte binnen 24 uur in Hasselt, Genk, Sint-Truiden en heel Limburg.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Dakwerk Limburg — Vakkundige Dakwerkers in heel Limburg',
    description:
      'Betrouwbare dakwerkers in Limburg voor dakrenovatie, plat dak, dakisolatie en goten. Gratis offerte binnen 24 uur.',
    url: 'https://dakwerklimburg.be',
    siteName: 'Dakwerk Limburg',
    locale: 'nl_BE',
    type: 'website',
    images: [
      {
        url: '/images/dakrenovatie-hero.png',
        width: 1536,
        height: 1024,
        alt: 'Erkende dakwerker renoveert een hellend dak in Limburg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dakwerk Limburg — Vakkundige Dakwerkers in heel Limburg',
    description:
      'Betrouwbare dakwerkers in Limburg voor dakrenovatie, plat dak, dakisolatie en goten. Gratis offerte binnen 24 uur.',
    images: ['/images/dakrenovatie-hero.png'],
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.png',
  },
  verification: {
    google: 'o3rSaw8fv4CGl-EmvCbVnL5yWtq7K_7toPVSuZ5pcuQ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>

        <script
          id="consent-default"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'granted',
                'security_storage': 'granted',
                'wait_for_update': 500
              });
              try {
                var saved = localStorage.getItem('consent_v1');
                if (saved) {
                  var c = JSON.parse(saved);
                  if (c.analytics === true) {
                    gtag('consent', 'update', { 'analytics_storage': 'granted' });
                  }
                }
              } catch (e) {}
              window.gtag = gtag;
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W3QMJ7EQ36"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-W3QMJ7EQ36', {
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
        <OfferteModalProvider>
          <Header />
          <main className="flex-1 pt-16 md:pt-20 pb-20 lg:pb-0">{children}</main>
          <Footer />
          <CookieBanner />
          <MobileBottomBar />
          <ChatWidget />
        </OfferteModalProvider>
      </body>
    </html>
  );
}
