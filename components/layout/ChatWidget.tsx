'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, ChevronRight, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Step = 'welcome' | 'type' | 'stad' | 'contact' | 'sending' | 'success' | 'faq';

const DISMISSED_KEY = 'chat_dismissed';
const AUTO_OPEN_DELAY = 5000;

const DIENSTEN = [
  { label: 'Dakrenovatie', value: 'dakrenovatie' },
  { label: 'Plat dak', value: 'plat-dak' },
  { label: 'Dakisolatie', value: 'dakisolatie' },
  { label: 'Goten & Zinkwerk', value: 'goten' },
  { label: 'Stormschade (spoed)', value: 'stormschade' },
  { label: 'Andere', value: 'andere' },
];

const FAQ_LINKS = [
  { label: 'Wat kost een dakrenovatie?', href: '/kennis/kosten-dakrenovatie-limburg' },
  { label: 'Welke premies zijn er?', href: '/kennis/dakrenovatie-premie-limburg' },
  { label: 'EPDM of PVC — wat kiezen?', href: '/kennis/epdm-of-pvc-plat-dak' },
  { label: 'Hoe herken ik een daklek?', href: '/kennis/hoe-herken-je-een-daklek' },
  { label: 'Wanneer dak vervangen?', href: '/kennis/wanneer-dak-vervangen' },
];

interface ChatData {
  type: string;
  stad: string;
  naam: string;
  telefoon: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>('welcome');
  const [data, setData] = useState<ChatData>({ type: '', stad: '', naam: '', telefoon: '' });
  const [errors, setErrors] = useState<Partial<ChatData>>({});
  const stadRef = useRef<HTMLInputElement>(null);
  const naamRef = useRef<HTMLInputElement>(null);

  // Auto-open after delay, but only if user hasn't dismissed before
  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISSED_KEY)) return;
    } catch {
      return;
    }
    const timer = setTimeout(() => setOpen(true), AUTO_OPEN_DELAY);
    return () => clearTimeout(timer);
  }, []);

  // Closing always marks as dismissed — never auto-reopens in this session
  const handleClose = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISSED_KEY, '1');
    } catch {}
  };

  const handleOpen = () => setOpen(true);

  const handleReset = () => {
    setStep('welcome');
    setData({ type: '', stad: '', naam: '', telefoon: '' });
    setErrors({});
  };

  const handleTypeSelect = (value: string) => {
    setData((d) => ({ ...d, type: value }));
    setStep('stad');
    setTimeout(() => stadRef.current?.focus(), 100);
  };

  const handleStadSubmit = () => {
    if (!data.stad.trim()) {
      setErrors({ stad: 'Vul uw gemeente in' });
      return;
    }
    setErrors({});
    setStep('contact');
    setTimeout(() => naamRef.current?.focus(), 100);
  };

  const handleContactSubmit = async () => {
    const newErrors: Partial<ChatData> = {};
    if (!data.naam.trim()) newErrors.naam = 'Vul uw naam in';
    if (!data.telefoon.trim()) newErrors.telefoon = 'Vul uw telefoonnummer in';
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStep('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '849a8a4b-f519-4bac-9e4f-c3b412f5883b',
          subject: `Chatbot lead — ${data.naam} (${data.type} in ${data.stad})`,
          from_name: 'Dakwerk Limburg Chatbot',
          naam: data.naam,
          telefoon: data.telefoon,
          type_werk: data.type,
          gemeente: data.stad,
          bron: 'chatbot-widget',
          tijdstip: new Date().toISOString(),
        }),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.success) {
        setStep('success');
      } else {
        throw new Error('failed');
      }
    } catch {
      setErrors({ naam: 'Versturen mislukt. Probeer opnieuw of bel +32 456 19 13 60.' });
      setStep('contact');
    }
  };

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-36 right-4 md:bottom-24 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          style={{ maxHeight: '520px' }}
        >
          {/* Header */}
          <div className="bg-primary px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Dakwerk Limburg</p>
                <p className="text-blue-300 text-xs">Antwoord binnen 24u</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-blue-300 hover:text-white transition-colors p-1 rounded"
              aria-label="Chat sluiten"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {step === 'welcome' && (
              <>
                <BotMessage>Hallo! Waarmee kan ik u helpen?</BotMessage>
                <div className="flex flex-col gap-2">
                  <OptionButton onClick={() => setStep('type')}>
                    📋 Gratis offerte aanvragen
                  </OptionButton>
                  <OptionButton onClick={() => setStep('faq')}>
                    ❓ Veelgestelde vragen
                  </OptionButton>
                </div>
              </>
            )}

            {step === 'type' && (
              <>
                <BotMessage>Welk type dakwerk heeft u nodig?</BotMessage>
                <div className="flex flex-col gap-2">
                  {DIENSTEN.map((d) => (
                    <OptionButton key={d.value} onClick={() => handleTypeSelect(d.value)}>
                      {d.label}
                    </OptionButton>
                  ))}
                </div>
                <BackButton onClick={() => setStep('welcome')} />
              </>
            )}

            {step === 'stad' && (
              <>
                <BotMessage>In welke gemeente bent u gelegen?</BotMessage>
                <div className="space-y-2">
                  <input
                    ref={stadRef}
                    type="text"
                    placeholder="bijv. Hasselt, Genk, Lommel…"
                    value={data.stad}
                    onChange={(e) => setData((d) => ({ ...d, stad: e.target.value }))}
                    onKeyDown={(e) => e.key === 'Enter' && handleStadSubmit()}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent text-main"
                  />
                  {errors.stad && <p className="text-red-500 text-xs">{errors.stad}</p>}
                  <button
                    onClick={handleStadSubmit}
                    className="w-full bg-accent hover:bg-amber-600 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-1"
                  >
                    Volgende <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <BackButton onClick={() => setStep('type')} />
              </>
            )}

            {step === 'contact' && (
              <>
                <BotMessage>
                  Bijna klaar! Laat uw gegevens achter en wij bellen u terug binnen 24u.
                </BotMessage>
                <div className="space-y-2">
                  <div>
                    <input
                      ref={naamRef}
                      type="text"
                      placeholder="Uw naam"
                      value={data.naam}
                      onChange={(e) => setData((d) => ({ ...d, naam: e.target.value }))}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent text-main"
                    />
                    {errors.naam && <p className="text-red-500 text-xs mt-1">{errors.naam}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefoonnummer"
                      value={data.telefoon}
                      onChange={(e) => setData((d) => ({ ...d, telefoon: e.target.value }))}
                      onKeyDown={(e) => e.key === 'Enter' && handleContactSubmit()}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent text-main"
                    />
                    {errors.telefoon && <p className="text-red-500 text-xs mt-1">{errors.telefoon}</p>}
                  </div>
                  <button
                    onClick={handleContactSubmit}
                    className="w-full bg-accent hover:bg-amber-600 text-white font-bold py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Offerte aanvragen →
                  </button>
                  <p className="text-xs text-sub text-center">🔒 Geen spam. Gratis en vrijblijvend.</p>
                </div>
                <BackButton onClick={() => setStep('stad')} />
              </>
            )}

            {step === 'sending' && (
              <div className="flex flex-col items-center justify-center py-8 gap-3">
                <Loader2 className="h-8 w-8 text-accent animate-spin" />
                <p className="text-sub text-sm">Aanvraag versturen…</p>
              </div>
            )}

            {step === 'success' && (
              <>
                <div className="flex flex-col items-center text-center py-4 gap-3">
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                  <p className="font-bold text-primary">Bedankt, {data.naam}!</p>
                  <p className="text-main text-sm leading-relaxed">
                    Uw aanvraag is ontvangen. We nemen binnen 24u contact met u op voor een gratis offerte.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="w-full text-center text-accent text-sm font-medium hover:underline"
                >
                  Nieuwe vraag stellen
                </button>
              </>
            )}

            {step === 'faq' && (
              <>
                <BotMessage>Hier zijn onze meest gestelde vragen:</BotMessage>
                <div className="flex flex-col gap-2">
                  {FAQ_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleClose}
                      className="flex items-center justify-between px-3 py-2.5 bg-background rounded-lg border border-gray-100 hover:border-accent hover:text-accent text-main text-sm transition-colors group"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0 text-sub group-hover:text-accent" />
                    </Link>
                  ))}
                </div>
                <div className="pt-1">
                  <OptionButton onClick={() => setStep('type')}>
                    📋 Toch een offerte aanvragen
                  </OptionButton>
                </div>
                <BackButton onClick={() => setStep('welcome')} />
              </>
            )}
          </div>
        </div>
      )}

      {/* Trigger button — always visible so user can reopen */}
      <button
        onClick={open ? handleClose : handleOpen}
        aria-label={open ? 'Chat sluiten' : 'Chat openen'}
        className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center"
      >
        {open ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>
    </>
  );
}

function BotMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-start">
      <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
        <MessageSquare className="h-3 w-3 text-white" />
      </div>
      <div className="bg-background rounded-2xl rounded-tl-none px-4 py-2.5 text-main text-sm leading-relaxed max-w-[85%]">
        {children}
      </div>
    </div>
  );
}

function OptionButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-2.5 bg-primary/5 hover:bg-accent hover:text-white text-primary rounded-xl text-sm font-medium transition-colors border border-primary/10 hover:border-accent"
    >
      {children}
    </button>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 text-sub text-xs hover:text-primary transition-colors mt-1"
    >
      <ArrowLeft className="h-3 w-3" /> Vorige stap
    </button>
  );
}
