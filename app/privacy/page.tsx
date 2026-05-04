import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';

export const metadata = {
  title: 'Privacyverklaring',
  description: 'Privacyverklaring van Dakwerk Limburg.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://dakwerklimburg.be/privacy',
  },
  openGraph: {
    title: 'Privacyverklaring',
    description: 'Privacyverklaring van Dakwerk Limburg.',
    url: 'https://dakwerklimburg.be/privacy',
    siteName: 'Dakwerk Limburg',
    locale: 'nl_BE',
    type: 'website',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacyverklaring',
    description: 'Privacyverklaring van Dakwerk Limburg.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-primary mb-8">Privacyverklaring</h1>
      <div className="prose prose-sm text-main">
        <p>
          Dakwerk Limburg respecteert uw privacy en verwerkt persoonsgegevens conform de Algemene Verordening Gegevensbescherming (AVG/GDPR).
        </p>
        <h2>Welke gegevens verzamelen wij?</h2>
        <p>
          Wanneer u het offerteformulier invult, verzamelen wij: uw naam, telefoonnummer, e-mailadres, het type gewenste dakwerken en eventueel een bericht. Deze gegevens worden uitsluitend gebruikt om u in contact te brengen met gekwalificeerde dakwerkers in uw regio.
        </p>
        <h2>Met wie delen wij uw gegevens?</h2>
        <p>
          Uw gegevens worden gedeeld met maximaal één geselecteerde dakwerker in uw regio, uitsluitend voor het opmaken van een offerte. Wij verkopen uw gegevens niet aan derden.
        </p>
        <h2>Hoe lang bewaren wij uw gegevens?</h2>
        <p>
          Uw gegevens worden maximaal 12 maanden na uw aanvraag bewaard, tenzij u eerder verzoekt om verwijdering.
        </p>
        <h2>Uw rechten</h2>
        <p>
          U heeft het recht om uw gegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact op via info@dakwerklimburg.be.
        </p>
        <h2>Cookies</h2>
        <p>
          Deze website maakt gebruik van functionele cookies die noodzakelijk zijn voor de werking van de website. Er worden geen tracking- of advertentiecookies geplaatst.
        </p>
        <h2>Contact</h2>
        <p>
          Voor vragen over uw privacy kunt u contact opnemen via info@dakwerklimburg.be.
        </p>
      </div>
    </main>
  );
}
