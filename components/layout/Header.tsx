'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useOfferteModal } from '@/components/providers/OfferteModalProvider';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Diensten', href: '/diensten' },
  { label: 'Kennis', href: '/kennis' },
  { label: 'Over Ons', href: '/over-ons' },
  { label: 'Contact', href: '/contact' },
];

const PHONE_DISPLAY = '+32 456 19 13 60';
const PHONE_HREF = 'tel:+32456191360';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 8;
  const { openModal } = useOfferteModal();

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200',
        isScrolled && 'shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
          aria-label="Dakwerk Limburg — homepagina"
        >
          <span className="text-primary font-bold">Dakwerk</span>{' '}
          <span className="text-accent font-bold">Limburg</span>
        </Link>

        <nav
          aria-label="Hoofdnavigatie"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded',
                  active
                    ? 'text-accent font-semibold'
                    : 'text-main hover:text-accent'
                )}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <a
            href={PHONE_HREF}
            aria-label={`Bel ons op ${PHONE_DISPLAY}`}
            className="hidden md:inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>

          <Button
            type="button"
            variant="cta"
            onClick={() => openModal('header-cta')}
            className="text-sm py-2 px-4 h-auto md:h-11 md:px-6 md:py-3"
          >
            Gratis Offerte
          </Button>

          <a
            href={PHONE_HREF}
            aria-label="Bel ons direct"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-primary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>

          <a
            href="https://wa.me/32456191360?text=Hallo%2C%20ik%20heb%20een%20vraag%20over%20dakwerken%20in%20Limburg."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stuur een bericht via WhatsApp"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            style={{ color: '#25D366' }}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-primary hover:text-accent hover:bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label="Menu openen/sluiten"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'md:hidden fixed inset-x-0 top-16 bottom-0 bg-white border-t border-border transition-all duration-200 ease-out',
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
        aria-hidden={!isOpen}
      >
        <nav
          aria-label="Mobiele navigatie"
          className="flex flex-col h-full px-4 py-6 overflow-y-auto"
        >
          <ul className="flex flex-col divide-y divide-border">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block py-4 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded',
                      active
                        ? 'text-accent font-semibold'
                        : 'text-main hover:text-accent'
                    )}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href={PHONE_HREF}
            aria-label={`Bel ons op ${PHONE_DISPLAY}`}
            className="mt-8 flex items-center justify-center gap-3 py-4 text-xl font-bold text-primary hover:text-accent transition-colors rounded border border-border"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>

          <Button
            type="button"
            variant="cta"
            size="xl"
            className="mt-4 w-full"
            onClick={() => {
              setIsOpen(false);
              openModal('header-mobile-menu');
            }}
          >
            Gratis Offerte
          </Button>
        </nav>
      </div>
    </header>
  );
}


export default Header;