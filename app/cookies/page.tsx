import type { Metadata } from 'next';
import ResetConsentButton from './ResetConsentButton';

export const metadata: Metadata = {
  title: 'Cookiebeleid — welke cookies we gebruiken',
  description:
    'Cookiebeleid van Dakwerk Limburg. Welke cookies we plaatsen, waarom, en hoe je je toestemming kan intrekken of aanpassen.',
  alternates: { canonical: 'https://dakwerklimburg.be/cookies' },
};

export default function CookiesPage() {
  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto px-4 py-16 lg:py-24">
        <h1 className="text-primary font-bold text-3xl lg:text-5xl mb-6">
          Cookiebeleid
        </h1>

        <h2 className="text-primary font-bold text-2xl mt-10 mb-3">
          Welke cookies gebruiken we?
        </h2>
        <p className="text-main leading-relaxed mb-6">
          We gebruiken zo min mogelijk cookies. Concreet zijn er twee
          categorieën:
        </p>

        <h3 className="text-primary font-semibold text-xl mt-8 mb-2">
          1. Essentiële cookies (altijd actief)
        </h3>
        <p className="text-main leading-relaxed mb-6">
          Deze cookies zijn nodig om de site correct te laten werken: het
          onthouden van je cookie-voorkeur, beveiliging tegen spam en robots,
          en het correct afhandelen van het contactformulier. Voor deze
          cookies is geen toestemming nodig — zonder werken essentiële delen
          van de site niet. We delen deze data niet met derden.
        </p>

        <h3 className="text-primary font-semibold text-xl mt-8 mb-2">
          2. Analytische cookies (enkel met toestemming)
        </h3>
        <p className="text-main leading-relaxed mb-6">
          We gebruiken Google Analytics 4 om geanonimiseerd bij te houden
          hoeveel bezoekers de site heeft, welke pagina&apos;s populair zijn,
          en hoe mensen onze diensten vinden (Google, sociale media, directe
          link, …). IP-adressen worden geanonimiseerd. Deze cookies plaatsen
          we enkel als je expliciet &apos;Accepteer alle&apos; of
          &apos;Analytische cookies&apos; aanvinkt in de cookie-banner.
          Weiger je, dan ontvangen we enkel anonieme, cookieless modellering
          die Google ons aanlevert — geen persoonsgegevens.
        </p>

        <h2 className="text-primary font-bold text-2xl mt-10 mb-3">
          Hoe pas ik mijn toestemming aan?
        </h2>
        <p className="text-main leading-relaxed mb-6">
          Wil je je keuze wijzigen? Verwijder dan in je browser de cookie
          &apos;consent_v1&apos; van deze site (Instellingen → Privacy →
          Cookies → dakwerklimburg.be) en herlaad de pagina. De banner
          verschijnt opnieuw.
        </p>

        <ResetConsentButton />

        <h2 className="text-primary font-bold text-2xl mt-10 mb-3">
          Geen marketing- of advertentiecookies
        </h2>
        <p className="text-main leading-relaxed mb-6">
          We gebruiken op dit moment geen Meta Pixel, Google Ads remarketing
          of andere marketing-cookies. Mocht dat in de toekomst wijzigen, dan
          passen we dit cookiebeleid aan en vragen we opnieuw je toestemming.
        </p>

        <h2 className="text-primary font-bold text-2xl mt-10 mb-3">Vragen?</h2>
        <p className="text-main leading-relaxed mb-6">
          Heb je vragen over dit cookiebeleid? Stuur een bericht via het
          contactformulier of bel naar +32 456 19 13 60.
        </p>
      </section>
    </main>
  );
}
