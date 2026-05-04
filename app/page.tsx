import HeroSection from '@/components/sections/HeroSection';
import StedenSection from '@/components/sections/StedenSection';
import TrustBar from '@/components/sections/TrustBar';
import WaaromSection from '@/components/sections/WaaromSection';
import DienstenSection from '@/components/sections/DienstenSection';
import WerkwijzeSection from '@/components/sections/WerkwijzeSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import FAQSection from '@/components/sections/FAQSection';
import PrijzenSection from '@/components/sections/PrijzenSection';
import PremiesSection from '@/components/sections/PremiesSection';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';

const HOME_TITLE = 'Dakwerken Limburg — Erkende Dakwerker | Dakwerk Limburg';
const HOME_DESCRIPTION =
  'Erkende dakwerker nodig in Limburg? Wij verbinden u met lokale vakmensen voor dakrenovatie, plat dak, dakisolatie en goten. Gratis offerte binnen 24u.';

export const metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: 'https://dakwerklimburg.be',
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: 'https://dakwerklimburg.be',
    siteName: 'Dakwerk Limburg',
    locale: 'nl_BE',
    type: 'website',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dakwerk Limburg',
  description:
    'Betrouwbare dakwerkers in Limburg voor dakrenovatie, plat dak, dakisolatie en goten.',
  url: 'https://dakwerklimburg.be',
  telephone: '+32456191360',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Limburg, Belgium',
  },
  serviceType: [
    'Dakrenovatie',
    'Plat dak',
    'Dakisolatie',
    'Goten en zinkwerk',
    'Stormschade',
  ],
  priceRange: '€€',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dakwerken in Limburg',
  serviceType: 'Dakwerken',
  description:
    'Erkende dakwerkers voor dakrenovatie, plat dak, dakisolatie, goten en stormschade in heel Limburg.',
  areaServed: [
    { '@type': 'City', name: 'Hasselt' },
    { '@type': 'City', name: 'Genk' },
    { '@type': 'City', name: 'Sint-Truiden' },
    { '@type': 'City', name: 'Tongeren' },
    { '@type': 'City', name: 'Maasmechelen' },
    { '@type': 'City', name: 'Lommel' },
    { '@type': 'City', name: 'Beringen' },
    { '@type': 'City', name: 'Bilzen' },
  ],
  provider: {
    '@type': 'Organization',
    name: 'Dakwerk Limburg',
    url: 'https://dakwerklimburg.be/',
    telephone: '+32456191360',
    email: 'info@dakwerklimburg.be',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost een dakrenovatie in Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De prijs van een dakrenovatie hangt af van het dakoppervlak, de gebruikte materialen en de staat van uw huidig dak. Gemiddeld rekent u voor een hellend dak tussen €80 en €150 per m², inclusief materialen en plaatsing. Voor een plat dak ligt de prijs tussen €60 en €120 per m². Wij bezorgen u altijd een gratis offerte na plaatsbezoek.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt een dakrenovatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een gemiddelde dakrenovatie duurt 3 tot 7 werkdagen, afhankelijk van de omvang en het type dak. Een eenvoudige herstelling kan al op één dag worden afgerond.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heb ik recht op premies voor dakwerken in Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Via de Vlaamse Mijn VerbouwPremie kunt u tot 30% terugkrijgen op dakisolatiewerken. Sommige Limburgse gemeenten bieden ook aanvullende lokale premies aan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doe ik bij een dringend daklek of stormschade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij spoedgevallen kunt u ons direct bellen. Wij zorgen dat dezelfde dag of binnen 24 uur een dakwerker bij u is voor een eerste noodingreep.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn de dakwerkers gecertificeerd en verzekerd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Wij werken uitsluitend met dakwerkers die beschikken over de vereiste erkenningen en een geldige beroepsaansprakelijkheidsverzekering.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welke steden in Limburg zijn jullie actief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij zijn actief in heel Limburg, waaronder Hasselt, Genk, Sint-Truiden, Beringen, Maasmechelen, Bilzen, Tongeren, Lommel en alle omliggende gemeenten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vraag ik een gratis offerte aan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U kunt ons bereiken via het offerteformulier op deze website of door ons te bellen. Na uw aanvraag contacteren wij u binnen 24 uur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een hellend en een plat dak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een hellend dak heeft een dakhelling van meer dan 15 graden en wordt bedekt met dakpannen of leien. Een plat dak heeft minder dan 15 graden helling en wordt afgewerkt met EPDM, PVC of bitumen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik een bouwvergunning aanvragen voor dakwerken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor de meeste dakrenovaties in Vlaanderen is geen bouwvergunning nodig, zolang het volume en het uitzicht van de woning niet wijzigen. Bij dakkapellen of nokverhoging kan wel een vergunning vereist zijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een nieuw dak mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dakpannen gaan 40 tot 60 jaar mee, leien 80 tot 100 jaar, en een EPDM plat dak 30 tot 50 jaar. Regelmatig onderhoud verlengt de levensduur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik mijn dak laten renoveren terwijl ik in mijn woning blijf wonen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Bij de meeste dakrenovaties kunt u gewoon in uw woning blijven. De dakwerker werkt aan de buitenzijde.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het beste seizoen voor dakwerken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voorjaar en zomer zijn ideaal voor dakwerken. Spoedherstellingen kunnen het hele jaar door. In herfst en winter zijn dakwerkers vaak beter beschikbaar.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeroSection />
      <StedenSection />
      <TrustBar />
      <WaaromSection />
      <DienstenSection />
      <PrijzenSection />
      <WerkwijzeSection />
      <ReviewsSection />
      <PremiesSection />
      <FAQSection />
    </>
  );
}
