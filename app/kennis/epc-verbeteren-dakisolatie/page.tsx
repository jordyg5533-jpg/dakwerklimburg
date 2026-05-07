import type { Metadata } from 'next';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';
import LeadForm from '@/components/forms/LeadForm';

export const metadata: Metadata = {
  title: 'EPC verbeteren met dakisolatie — Hoeveel scheelt het? (2025)',
  description: 'Hoe verbetert dakisolatie uw EPC-label? Ontdek hoeveel labels u kunt winnen, wat het financieel oplevert en welke premies u kunt combineren.',
  alternates: { canonical: 'https://dakwerklimburg.be/kennis/epc-verbeteren-dakisolatie' },
  openGraph: {
    title: 'EPC verbeteren met dakisolatie — Hoeveel scheelt het? | Dakwerk Limburg',
    description: 'Hoeveel labels wint u met dakisolatie? Financieel voordeel, premies en verplichtingen voor Limburgse woningen.',
    type: 'article', url: 'https://dakwerklimburg.be/kennis/epc-verbeteren-dakisolatie', images: DEFAULT_OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', title: 'EPC verbeteren met dakisolatie (2025)', description: 'Hoeveel labels wint u en wat levert het op?', images: DEFAULT_TWITTER_IMAGES },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'EPC verbeteren met dakisolatie: hoeveel scheelt het?',
  datePublished: '2025-05-07', dateModified: '2025-05-07',
  author: { '@type': 'Organization', name: 'Dakwerk Limburg' },
  publisher: { '@type': 'Organization', name: 'Dakwerk Limburg', url: 'https://dakwerklimburg.be' },
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoeveel verbetert dakisolatie mijn EPC-label?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van de beginsituatie. Een woning zonder dakisolatie kan met goede dakisolatie (R=4,5 of hoger) gemiddeld 1 tot 2 EPC-labels winnen. Van label E naar label C is realistisch bij een gemiddelde Limburgse woning uit de jaren \'70.' } },
    { '@type': 'Question', name: 'Welk EPC-label heb ik nodig om mijn woning te kunnen verhuren?', acceptedAnswer: { '@type': 'Answer', text: 'Vanaf 2028 moeten huurwoningen in Vlaanderen minimaal label D hebben. Vanaf 2033 is label C verplicht. Woningen met label E of F mogen dan niet meer verhuurd worden zonder renovatie.' } },
    { '@type': 'Question', name: 'Wat is de beste maatregel om mijn EPC te verbeteren?', acceptedAnswer: { '@type': 'Answer', text: 'Dakisolatie heeft de beste prijs-kwaliteitsverhouding voor EPC-verbetering. Via het dak gaat 25-30% van de warmte verloren in een slecht geïsoleerde woning. Dakisolatie is ook goedkoper dan gevelisolatie en heeft meer effect dan raamisolatie.' } },
    { '@type': 'Question', name: 'Moet ik een nieuw EPC-attest laten opmaken na dakisolatie?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Na de renovatiewerken laat u een energiedeskundige een nieuw EPC opmaken. Dit kost €150-€300 maar is verplicht als u het nieuwe label wil laten registreren. Bewaar ook alle facturen van de dakwerken.' } },
    { '@type': 'Question', name: 'Wat is een EPC-attest en hoe lees ik het?', acceptedAnswer: { '@type': 'Answer', text: 'Een EPC (Energieprestatiecertificaat) geeft de energiezuinigheid van uw woning weer op een schaal van A+ tot G. Het wordt uitgedrukt in kWh/m² per jaar. Hoe lager het getal, hoe beter. Label A+ = zeer energiezuinig, label G = erg energieverslindend.' } },
  ],
};

const FAQ_ITEMS = [
  { q: 'Hoeveel verbetert dakisolatie mijn EPC-label?', a: 'Dat hangt af van de beginsituatie. Een woning zonder dakisolatie kan met goede dakisolatie (R=4,5 of hoger) gemiddeld 1 tot 2 EPC-labels winnen. Van label E naar label C is realistisch bij een gemiddelde Limburgse woning uit de jaren \'70.' },
  { q: 'Welk EPC-label heb ik nodig om mijn woning te kunnen verhuren?', a: 'Vanaf 2028 moeten huurwoningen in Vlaanderen minimaal label D hebben. Vanaf 2033 is label C verplicht. Woningen met label E of F mogen dan niet meer verhuurd worden zonder renovatie.' },
  { q: 'Wat is de beste maatregel om mijn EPC te verbeteren?', a: 'Dakisolatie heeft de beste prijs-kwaliteitsverhouding voor EPC-verbetering. Via het dak gaat 25-30% van de warmte verloren in een slecht geïsoleerde woning. Dakisolatie is ook goedkoper dan gevelisolatie en heeft meer effect dan raamisolatie.' },
  { q: 'Moet ik een nieuw EPC-attest laten opmaken na dakisolatie?', a: 'Ja. Na de renovatiewerken laat u een energiedeskundige een nieuw EPC opmaken. Dit kost €150-€300 maar is verplicht als u het nieuwe label wil laten registreren. Bewaar ook alle facturen van de dakwerken.' },
  { q: 'Wat is een EPC-attest en hoe lees ik het?', a: 'Een EPC (Energieprestatiecertificaat) geeft de energiezuinigheid van uw woning weer op een schaal van A+ tot G. Het wordt uitgedrukt in kWh/m² per jaar. Hoe lager het getal, hoe beter. Label A+ = zeer energiezuinig, label G = erg energieverslindend.' },
];

export default function EpcDakisolatiePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-white">
        <section className="bg-primary text-white py-10 lg:py-14">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/kennis" className="hover:text-white transition-colors">Kenniscentrum</Link>
              <span>/</span><span className="text-white">EPC verbeteren</span>
            </div>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">Premies & Subsidies</span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              EPC verbeteren met dakisolatie<br /><span className="text-accent">Hoeveel scheelt het? (2025)</span>
            </h1>
            <p className="text-blue-200 mt-4 text-lg">6 min leestijd · Bijgewerkt mei 2025</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
          <p className="text-main text-lg leading-relaxed mb-8">
            Een slecht EPC-label kost u geld bij verkoop én verhuur. De snelste manier om dat label te verbeteren in een Limburgse woning uit de jaren '60-'80? Dakisolatie. Via het dak verdwijnt 25 tot 30% van uw warmte — meer dan via gevel of ramen. Dit artikel legt uit hoeveel labels u kunt winnen, wat het financieel oplevert en welke premies u kunt combineren.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Wat is een EPC-label?</h2>
          <p className="text-main leading-relaxed mb-6">
            Het Energieprestatiecertificaat (EPC) geeft de energiezuinigheid van uw woning op een schaal van <strong>A+</strong> (zeer zuinig) tot <strong>G</strong> (energieverslindend). Het wordt uitgedrukt in kWh per m² per jaar. Hoe lager het getal, hoe beter het label.
          </p>
          <div className="overflow-x-auto mb-8 rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Label</th>
                  <th className="text-left px-4 py-3 font-semibold">kWh/m²/jaar</th>
                  <th className="text-left px-4 py-3 font-semibold">Wat betekent dit?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { label: 'A+', kwh: '< 45', wat: 'Bijna energieneutraal (nieuwbouw)', color: 'text-green-700 font-bold' },
                  { label: 'A', kwh: '45 – 85', wat: 'Zeer energiezuinig', color: 'text-green-600 font-bold' },
                  { label: 'B', kwh: '85 – 170', wat: 'Goed geïsoleerd', color: 'text-green-500' },
                  { label: 'C', kwh: '170 – 255', wat: 'Gemiddeld — verhuur norm 2033', color: 'text-amber-600' },
                  { label: 'D', kwh: '255 – 340', wat: 'Matig — verhuur norm 2028', color: 'text-amber-500' },
                  { label: 'E', kwh: '340 – 425', wat: 'Slecht — veel Limburgse woningen jaren \'70', color: 'text-red-500' },
                  { label: 'F / G', kwh: '> 425', wat: 'Zeer slecht — urgent renoveren', color: 'text-red-700 font-bold' },
                ].map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-background">
                    <td className={`px-4 py-3 font-bold ${row.color}`}>{row.label}</td>
                    <td className="px-4 py-3 text-main">{row.kwh}</td>
                    <td className="px-4 py-3 text-sub">{row.wat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Hoeveel labels wint u met dakisolatie?</h2>
          <p className="text-main leading-relaxed mb-4">
            De impact van dakisolatie op uw EPC hangt af van de beginsituatie — maar de effecten zijn substantieel:
          </p>
          <div className="space-y-3 mb-8">
            {[
              { van: 'Geen isolatie', naar: 'R=4,5 dakisolatie', winst: '1 à 2 labels', besparing: '€400 – €800/jaar', color: 'bg-green-50 border-green-200' },
              { van: 'Dunne isolatie (R=1,5)', naar: 'R=4,5 dakisolatie', winst: '0,5 à 1 label', besparing: '€200 – €450/jaar', color: 'bg-blue-50 border-blue-200' },
              { van: 'Geen isolatie', naar: 'R=6 dakisolatie', winst: '2 labels', besparing: '€600 – €1.000/jaar', color: 'bg-green-50 border-green-200' },
            ].map((row, i) => (
              <div key={i} className={`p-4 rounded-xl border ${row.color} flex flex-col sm:flex-row sm:items-center gap-3`}>
                <div className="flex-1">
                  <p className="text-sm text-sub">Van: <span className="font-medium text-main">{row.van}</span></p>
                  <p className="text-sm text-sub">Naar: <span className="font-medium text-main">{row.naar}</span></p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">+{row.winst}</p>
                  <p className="text-sm text-green-700 font-medium">{row.besparing} energiebesparing</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Wettelijke verplichtingen in Vlaanderen</h2>
          <div className="space-y-3 mb-8">
            {[
              { jaar: '2022', regel: 'Asbestattest verplicht bij verkoop van woning.' },
              { jaar: '2023', regel: 'EPC-label verplicht bij elke verhuur, ook korte termijn.' },
              { jaar: '2028', regel: 'Huurwoningen moeten minimaal label D hebben.' },
              { jaar: '2033', regel: 'Huurwoningen moeten minimaal label C hebben.' },
              { jaar: '2040', regel: 'Streefnorm: alle woningen minimaal label B.' },
            ].map((item) => (
              <div key={item.jaar} className="flex gap-4 items-start p-4 bg-background rounded-xl border border-gray-100">
                <span className="font-bold text-accent flex-shrink-0 w-12">{item.jaar}</span>
                <p className="text-main text-sm">{item.regel}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Financieel voordeel: meer dan alleen energiebesparing</h2>
          <p className="text-main leading-relaxed mb-4">Dakisolatie levert meer op dan enkel lagere energiefacturen:</p>
          <ul className="space-y-2 mb-8">
            {[
              'Hogere verkoopwaarde: een label C-woning is gemiddeld €10.000-€25.000 meer waard dan een label E-woning in Limburg.',
              'Lagere energiefactuur: €400 tot €1.000 per jaar minder verwarmingskosten.',
              'Verhuurbaar houden: vermijd het risico dat uw pand niet meer verhuurd mag worden na 2028/2033.',
              'Mijn VerbouwPremie: 20-30% terugbetaling op de isolatiekosten.',
              'Betere luchtkwaliteit en thermisch comfort in de woning.',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-main text-sm">
                <span className="h-5 w-5 rounded-full bg-accent text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Veelgestelde vragen over EPC en dakisolatie</h2>
          <Accordion type="single" collapsible className="mb-10">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-primary font-semibold">{item.q}</AccordionTrigger>
                <AccordionContent className="text-main leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-wrap gap-3 text-sm text-sub pt-6 border-t border-gray-100">
            <span>Gerelateerd:</span>
            <Link href="/diensten/dakisolatie" className="text-accent hover:underline">Dakisolatie Limburg</Link>
            <Link href="/kennis/dakrenovatie-premie-limburg" className="text-accent hover:underline">Premies dakrenovatie</Link>
            <Link href="/kennis/kosten-dakrenovatie-limburg" className="text-accent hover:underline">Kosten dakrenovatie</Link>
          </div>
        </article>

        <section className="bg-primary py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-3">EPC verbeteren met dakisolatie in Limburg?</h2>
                <p className="text-blue-200 leading-relaxed">Vraag een gratis offerte aan bij een erkende dakwerker. Wij adviseren u over het beste isolatiepakket voor uw EPC-doelstelling — inclusief premies.</p>
              </div>
              <LeadForm source="kennis-epc-dakisolatie" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
