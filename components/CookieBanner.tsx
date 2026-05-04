'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('consent_v1');
      if (saved === null) setVisible(true);
    } catch (e) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (analytics: boolean) => {
    try {
      localStorage.setItem(
        'consent_v1',
        JSON.stringify({
          analytics,
          essential: true,
          timestamp: Date.now(),
        })
      );
    } catch (e) {}

    if (analytics && typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
    setVisible(false);
  };

  const acceptAll = () => saveConsent(true);
  const essentialOnly = () => saveConsent(false);
  const confirmPrefs = () => saveConsent(analyticsChecked);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-voorkeuren"
      className="fixed z-50 bg-white border-2 border-primary shadow-2xl rounded-xl p-5 bottom-0 left-0 right-0 md:bottom-6 md:right-6 md:left-auto md:max-w-md md:rounded-2xl"
    >
      <h3 className="text-primary font-bold text-lg mb-2">Cookies op deze site</h3>
      <p className="text-main text-sm leading-relaxed mb-4">
        We gebruiken essentiële cookies om de site te laten werken, en
        analytische cookies (Google Analytics) om te begrijpen hoe bezoekers
        de site gebruiken. Analytische cookies plaatsen we enkel met jouw
        toestemming. Geen marketing- of advertentie-cookies.
      </p>

      {showPrefs && (
        <div className="bg-bg-alt rounded-lg p-3 mb-4 space-y-2 border border-gray-200">
          <label className="flex items-start gap-2 text-sm text-main cursor-not-allowed opacity-80">
            <input
              type="checkbox"
              checked
              disabled
              className="mt-0.5 accent-accent"
            />
            <span>
              <strong>Essentiële cookies</strong> — altijd actief, nodig voor
              de werking van de site.
            </span>
          </label>
          <label className="flex items-start gap-2 text-sm text-main cursor-pointer">
            <input
              type="checkbox"
              checked={analyticsChecked}
              onChange={(e) => setAnalyticsChecked(e.target.checked)}
              className="mt-0.5 accent-accent cursor-pointer"
            />
            <span>
              <strong>Analytische cookies</strong> — Google Analytics, om het
              bezoekersverkeer te meten.
            </span>
          </label>
          <button
            type="button"
            onClick={confirmPrefs}
            className="mt-2 w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
          >
            Bevestig voorkeuren
          </button>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-2">
        <button
          type="button"
          onClick={essentialOnly}
          className="flex-1 border border-gray-300 hover:border-primary text-main font-medium py-2 px-3 rounded-lg text-sm transition-colors"
        >
          Enkel essentiële
        </button>
        <button
          type="button"
          onClick={() => setShowPrefs((v) => !v)}
          className="flex-1 border border-gray-300 hover:border-primary text-main font-medium py-2 px-3 rounded-lg text-sm transition-colors"
        >
          Voorkeuren {showPrefs ? '↑' : '↓'}
        </button>
        <button
          type="button"
          onClick={acceptAll}
          className="flex-1 bg-accent hover:bg-amber-600 text-white font-bold py-2 px-3 rounded-lg text-sm transition-colors"
        >
          Accepteer alle
        </button>
      </div>

      <p className="text-sub text-xs mt-3 text-center">
        <Link href="/cookies" className="hover:underline">
          Lees onze cookiebeleid
        </Link>
      </p>
    </div>
  );
}

export default CookieBanner;
