import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';
import LeadForm from '@/components/forms/LeadForm';

export const metadata: Metadata = {
  title: 'EPDM of PVC plat dak: vergelijking, prijs en beste keuze (2025)',
  description:
    'EPDM of PVC voor uw plat dak? Vergelijk beide materialen op prijs, levensduur en onderhoud. Ontdek welke dakbedekking het beste past bij uw situatie.',
  alternates: {
    canonical: 'https://dakwerklimburg.be/kennis/epdm-of-pvc-plat-dak',
  },
  openGraph: {
    title: 'EPDM of PVC plat dak — vergelijking & beste keuze 2025 | Dakwerk Limburg',
    description:
      'EPDM of PVC voor uw plat dak? Vergelijk prijs, levensduur en onderhoud. Welke dakbedekking past bij uw situatie?',
    type: 'article',
    url: 'https://dakwerklimburg.be/kennis/epdm-of-pvc-plat-dak',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EPDM of PVC plat dak — vergelijking 2025',
    description: 'Vergelijk EPDM en PVC voor uw plat dak op prijs, levensduur en onderhoud.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'EPDM of PVC voor uw plat dak: wat is de beste keuze?',
  description:
    'Vergelijking van EPDM en PVC dakbedekking op prijs, levensduur, onderhoud en toepassing.',
  datePublished: '2025-05-07',
  dateModified: '2025-05-07',
  author: { '@type': 'Organization', name: 'Dakwerk Limburg' },
  publisher: {
    '@type': 'Organization',
    name: 'Dakwerk Limburg',
    url: 'https://dakwerklimburg.be',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is goedkoper: EPDM of PVC voor een plat dak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EPDM is gemiddeld iets goedkoper: €50-80 per m² tegenover €60-90 per m² voor PVC. Het prijsverschil wordt kleiner bij complexe daken met veel details, omdat EPDM daar moeilijker te verwerken is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een EPDM plat dak mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een correct geplaatst EPDM dak gaat 30 tot 50 jaar mee. EPDM is zeer UV-bestendig en verweert nauwelijks. De levensduur hangt sterk af van de kwaliteit van de plaatsing — met name de naadafwerking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik op een PVC dak lopen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, PVC is harder en slijtvaster dan EPDM en daardoor geschikter voor een doorloopbaar dak of terras. Voor intensief gebruik kunt u ook een PVC-terrassysteem kiezen met houtcomposite tegels bovenop de dakbedekking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is EPDM of PVC beter voor het milieu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EPDM heeft een lichtere milieu-impact: het is op basis van synthetisch rubber, duurt langer mee en is recyclebaar. PVC bevat weekmakers (ftalaten) en chloor, wat bij productie en verbranding milieubelastend is. Echter, goede kwaliteit PVC met lange levensduur compenseert een deel van dit verschil.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen EPDM, PVC en bitumen voor een plat dak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bitumen is het traditionele materiaal: goedkoper (€40-70/m²) maar kortere levensduur (15-25 jaar) en minder milieuvriendelijk. EPDM is duurzamer (30-50 jaar) en milieuvriendelijker. PVC is het stevigste en meest chemisch-resistente materiaal. Voor nieuwe dakbedekkingen kiezen de meeste dakwerkers in Limburg vandaag voor EPDM of PVC.',
      },
    },
  ],
};

const FAQ_ITEMS = [
  {
    q: 'Wat is goedkoper: EPDM of PVC voor een plat dak?',
    a: 'EPDM is gemiddeld iets goedkoper: €50-80 per m² tegenover €60-90 per m² voor PVC. Het prijsverschil wordt kleiner bij complexe daken met veel details, omdat EPDM daar moeilijker te verwerken is.',
  },
  {
    q: 'Hoe lang gaat een EPDM plat dak mee?',
    a: 'Een correct geplaatst EPDM dak gaat 30 tot 50 jaar mee. EPDM is zeer UV-bestendig en verweert nauwelijks. De levensduur hangt sterk af van de kwaliteit van de plaatsing — met name de naadafwerking.',
  },
  {
    q: 'Kan ik op een PVC dak lopen?',
    a: 'Ja, PVC is harder en slijtvaster dan EPDM en daardoor geschikter voor een doorloopbaar dak of terras. Voor intensief gebruik kunt u ook een PVC-terrassysteem kiezen met houtcomposite tegels bovenop de dakbedekking.',
  },
  {
    q: 'Is EPDM of PVC beter voor het milieu?',
    a: 'EPDM heeft een lichtere milieu-impact: het is op basis van synthetisch rubber, duurt langer mee en is recyclebaar. PVC bevat weekmakers (ftalaten) en chloor, wat bij productie en verbranding milieubelastend is. Echter, goede kwaliteit PVC met lange levensduur compenseert een deel van dit verschil.',
  },
  {
    q: 'Wat is het verschil tussen EPDM, PVC en bitumen voor een plat dak?',
    a: 'Bitumen is het traditionele materiaal: goedkoper (€40-70/m²) maar kortere levensduur (15-25 jaar) en minder milieuvriendelijk. EPDM is duurzamer (30-50 jaar) en milieuvriendelijker. PVC is het stevigste en meest chemisch-resistente materiaal. Voor nieuwe dakbedekkingen kiezen de meeste dakwerkers in Limburg vandaag voor EPDM of PVC.',
  },
];

export default function EpdmOfPvcPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white">
        {/* Header */}
        <section className="bg-primary text-white py-10 lg:py-14">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/kennis" className="hover:text-white transition-colors">
                Kenniscentrum
              </Link>
              <span>/</span>
              <span className="text-white">EPDM of PVC plat dak</span>
            </div>
            <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
              Materialen & Technieken
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              EPDM of PVC voor uw plat dak:<br />
              <span className="text-accent">wat is de beste keuze?</span>
            </h1>
            <p className="text-blue-200 mt-4 text-lg">
              6 min leestijd · Bijgewerkt mei 2025
            </p>
          </div>
        </section>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-6 py-10 lg:py-14">

          <p className="text-main text-lg leading-relaxed mb-8">
            Een plat dak moet perfect waterdicht zijn — en de keuze van de dakbedekking bepaalt niet alleen de prijs, maar ook de levensduur, het onderhoud en de duurzaamheid van uw investering. EPDM en PVC zijn de twee populairste moderne materialen, maar ze hebben elk hun sterke en zwakke punten. Hier leest u het complete verhaal.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Wat is EPDM?
          </h2>
          <p className="text-main leading-relaxed mb-4">
            EPDM staat voor Ethylene Propylene Diene Monomer — een synthetisch rubber. De dakbedekking wordt als één groot, naadloos vel geleverd en kan over grote oppervlakken worden aangebracht zonder of met minimale naden. Minder naden betekent minder risico op lekkage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <h3 className="font-bold text-green-800 mb-2 text-sm">Voordelen EPDM</h3>
              <ul className="space-y-1 text-sm text-main">
                <li>✓ Levensduur 30 – 50 jaar</li>
                <li>✓ Naadloos over grote vlakken</li>
                <li>✓ UV-bestendig — verweert nauwelijks</li>
                <li>✓ Flexibel bij temperatuurschommelingen</li>
                <li>✓ Milieuvriendelij­ker dan PVC</li>
                <li>✓ Goedkoper: €50 – €80/m²</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <h3 className="font-bold text-red-800 mb-2 text-sm">Nadelen EPDM</h3>
              <ul className="space-y-1 text-sm text-main">
                <li>✗ Minder geschikt voor complexe details</li>
                <li>✗ Niet doorloopbaar bij intensief gebruik</li>
                <li>✗ Kleefnaad kan bij slechte plaatsing loslaten</li>
                <li>✗ Zwart — absorbeert warmte in de zomer</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Wat is PVC dakbedekking?
          </h2>
          <p className="text-main leading-relaxed mb-4">
            PVC-dakbedekking (polyvinylchloride) is een kunststofmembraan dat in rollen wordt geleverd en met hete lucht wordt gelast. De gelaste naden zijn extreem sterk — bij een vakkundige plaatsing sterker dan het membraan zelf. PVC is harder en slijtvaster dan EPDM.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <h3 className="font-bold text-green-800 mb-2 text-sm">Voordelen PVC</h3>
              <ul className="space-y-1 text-sm text-main">
                <li>✓ Sterke gelaste naden</li>
                <li>✓ Doorloopbaar — geschikt als terras</li>
                <li>✓ Chemisch resistent (bijv. vet, olie)</li>
                <li>✓ Verkrijgbaar in meerdere kleuren</li>
                <li>✓ Geschikt voor complexe dakvlakken</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <h3 className="font-bold text-red-800 mb-2 text-sm">Nadelen PVC</h3>
              <ul className="space-y-1 text-sm text-main">
                <li>✗ Kortere levensduur: 20 – 35 jaar</li>
                <li>✗ Duurder: €60 – €90/m²</li>
                <li>✗ Minder milieuvriendelijk</li>
                <li>✗ Kan bros worden bij extreme kou</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            EPDM vs PVC vs Bitumen — vergelijkingstabel
          </h2>
          <div className="overflow-x-auto mb-8 rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Eigenschap</th>
                  <th className="text-center px-4 py-3 font-semibold">EPDM</th>
                  <th className="text-center px-4 py-3 font-semibold">PVC</th>
                  <th className="text-center px-4 py-3 font-semibold">Bitumen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-center">
                <tr className="odd:bg-white even:bg-background">
                  <td className="px-4 py-3 text-left font-medium text-primary">Prijs per m²</td>
                  <td className="px-4 py-3 text-main">€50 – €80</td>
                  <td className="px-4 py-3 text-main">€60 – €90</td>
                  <td className="px-4 py-3 text-main">€40 – €70</td>
                </tr>
                <tr className="odd:bg-white even:bg-background">
                  <td className="px-4 py-3 text-left font-medium text-primary">Levensduur</td>
                  <td className="px-4 py-3 font-semibold text-green-700">30 – 50 jaar</td>
                  <td className="px-4 py-3 text-main">20 – 35 jaar</td>
                  <td className="px-4 py-3 text-red-600">15 – 25 jaar</td>
                </tr>
                <tr className="odd:bg-white even:bg-background">
                  <td className="px-4 py-3 text-left font-medium text-primary">Doorloopbaar</td>
                  <td className="px-4 py-3 text-sub">Beperkt</td>
                  <td className="px-4 py-3 font-semibold text-green-700">Ja</td>
                  <td className="px-4 py-3 text-sub">Beperkt</td>
                </tr>
                <tr className="odd:bg-white even:bg-background">
                  <td className="px-4 py-3 text-left font-medium text-primary">Milieu</td>
                  <td className="px-4 py-3 font-semibold text-green-700">Goed</td>
                  <td className="px-4 py-3 text-sub">Matig</td>
                  <td className="px-4 py-3 text-red-600">Slecht</td>
                </tr>
                <tr className="odd:bg-white even:bg-background">
                  <td className="px-4 py-3 text-left font-medium text-primary">Groot vlak</td>
                  <td className="px-4 py-3 font-semibold text-green-700">Ideaal</td>
                  <td className="px-4 py-3 text-sub">Goed</td>
                  <td className="px-4 py-3 text-sub">Goed</td>
                </tr>
                <tr className="odd:bg-white even:bg-background">
                  <td className="px-4 py-3 text-left font-medium text-primary">Complexe details</td>
                  <td className="px-4 py-3 text-sub">Moeilijker</td>
                  <td className="px-4 py-3 font-semibold text-green-700">Eenvoudig</td>
                  <td className="px-4 py-3 text-sub">Matig</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Wanneer kiest u voor EPDM?
          </h2>
          <ul className="space-y-2 mb-8">
            {[
              'U heeft een groot, eenvoudig dakvlak (> 60 m²) zonder veel details',
              'U wilt de langste levensduur voor de laagste prijs per jaar gebruik',
              'Duurzaamheid en milieu zijn voor u een prioriteit',
              'Het dak wordt niet of nauwelijks belopen',
              'U heeft een budget van €50-80/m² beschikbaar',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-main text-sm">
                <span className="h-5 w-5 rounded-full bg-accent text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Wanneer kiest u voor PVC?
          </h2>
          <ul className="space-y-2 mb-8">
            {[
              'Het dak dient als terras of wordt regelmatig belopen',
              'Er zijn veel dakramen, ventilatiekokers of andere obstakels',
              'In de omgeving zijn chemische stoffen aanwezig (vet, olie, solventen)',
              'U wilt een kleur die past bij uw woning',
              'Het gaat om een klein, gedetailleerd dakvlak',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-main text-sm">
                <span className="h-5 w-5 rounded-full bg-accent text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5 mb-10">
            <p className="text-main text-sm leading-relaxed">
              <strong>Advies van de vakman:</strong> Voor een standaard uitbouw of garage in Limburg met een eenvoudig plat dak van 30-80 m² kiezen de meeste dakwerkers vandaag voor <strong>EPDM</strong>. Het biedt de beste prijs-kwaliteitsverhouding over de volledige levensduur. Voor een dakterras of een dak met veel details is <strong>PVC</strong> de betere keuze.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Veelgestelde vragen over EPDM en PVC plat dak
          </h2>
          <Accordion type="single" collapsible className="mb-10">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-primary font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-main leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-wrap gap-3 text-sm text-sub pt-6 border-t border-gray-100">
            <span>Gerelateerd:</span>
            <Link href="/diensten/plat-dak" className="text-accent hover:underline">
              Plat dak Limburg
            </Link>
            <Link href="/kennis/kosten-dakrenovatie-limburg" className="text-accent hover:underline">
              Kosten dakrenovatie
            </Link>
            <Link href="/diensten/dakisolatie" className="text-accent hover:underline">
              Dakisolatie
            </Link>
          </div>
        </article>

        {/* CTA */}
        <section className="bg-primary py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-3">
                  Welke dakbedekking past bij uw situatie?
                </h2>
                <p className="text-blue-200 leading-relaxed">
                  Een erkende dakwerker in Limburg bekijkt uw dak en adviseert u over het beste materiaal voor uw specifieke situatie. Gratis offerte binnen 24 uur.
                </p>
              </div>
              <LeadForm source="kennis-epdm-pvc" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
