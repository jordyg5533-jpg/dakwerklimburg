'use client';

import { Phone } from 'lucide-react';
import { useOfferteModal } from '@/components/providers/OfferteModalProvider';

export default function MobileBottomBar() {
  const { openModal } = useOfferteModal();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg p-2">
      <div className="flex gap-2">
        <a
          href="tel:+32456191360"
          aria-label="Bel direct naar +32 456 19 13 60"
          className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-blue-900 text-white font-bold rounded-lg py-3 transition-colors"
        >
          <Phone className="h-5 w-5" />
          Bel direct
        </a>
        <button
          onClick={() => openModal('mobile-bottom-bar')}
          aria-label="Vraag gratis offerte aan"
          className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-amber-600 text-white font-bold rounded-lg py-3 transition-colors"
        >
          Gratis offerte
        </button>
      </div>
    </div>
  );
}
