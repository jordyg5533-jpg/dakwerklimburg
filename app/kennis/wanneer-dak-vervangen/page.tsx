import type { Metadata } from 'next';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';
import LeadForm from '@/components/forms/LeadForm';

export const metadata: Metadata = {
  title: 'Wanneer moet je je dak vervangen? 7 signalen + levensduur per type',
  description: 'Hoe weet u wanneer uw dak aan vervanging toe is? Ontdek de 7 signalen, de gemiddelde levensduur per daktype en het verschil tussen herstellen en vervangen.',
  alternates: { canonical: 'https://dakwerklimburg.be/kennis/wanneer-dak-vervangen' },
  openGraph: {
    title: 'Wanneer moet je je dak vervangen? 7 signalen | Dakwerk Limburg',
    description: '7 signalen dat uw dak aan vervanging toe is + levensduur per daktype.',
    type: 'article', url: 'https://dakwerklimburg.be/kennis/wanneer-dak-vervangen', images: DEFAULT_OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', title: 'Wanneer dak vervangen?', description: '7 signalen + levensduur per daktype.', images: DEFAULT_TWITTER_IMAGES },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Wanneer moet je je dak vervangen? 7 signalen + levensduur per type',
  datePublished: '2025-05-07', dateModified: '2025-05-07',
  author: { '@type': 'Organization', name: 'Dakwerk Limburg' },
  publisher: { '@type': 'Organization', name: 'Dakwerk Limburg', url: 'https://dakwerklimburg.be' },
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe lang gaat een dak mee?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van het materiaal. Dakpannen (beton/klei) gaan 40-60 jaar mee. Kunstleien 50-80 jaar, natuurleien tot 100 jaar. Een EPDM plat dak houdt 30-50 jaar stand. Bitumen gaat 15-25 jaar mee. Goten in zink gaan 25-40 jaar mee.' } },
    { '@type': 'Question', name: 'Kan ik een dak laten herstellen in plaats van vervangen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, als het dak jonger is dan 25-30 jaar en de dakstructuur intact is. Gedeeltelijke herstellingen zijn zinvol bij lokale schade. Maar als meer dan 30% van de dakbedekking beschadigd is, is een volledige renovatie economisch voordeliger.' } },
    { '@type': 'Question', name: 'Wat zijn de gevolgen van te lang wachten met dakrenovatie?', acceptedAnswer: { '@type': 'Answer', text: 'Water dat binnendringt tast dakspanten, isolatie en muren aan. Houtrot in de dakstructuur kan leiden tot een instabiel dak. De kosten van gevolgschade overstijgen vaak de kostprijs van een tijdige renovatie.' } },
    { '@type': 'Question', name: 'Wanneer is een dak te oud om te herstellen?', acceptedAnswer: { '@type': 'Answer', text: 'Als een dak ouder is dan 35-40 jaar en al meerdere herstellingen heeft gehad, is vervanging doorgaans voordeliger. Een dakwerker kan na inspectie adviseren of een partiële herstelling nog rendabel is.' } },
    { '@type': 'Question', name: 'Heeft de leeftijd van mijn dak invloed op mijn premie?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Dakisolatie die tegelijk met een dakrenovatie geplaatst wordt, geeft recht op de Mijn VerbouwPremie. Een oud, niet-geïsoleerd dak heeft ook een negatief effect op uw EPC-label, wat de verkoopwaarde van uw woning verlaagt.' } },
  ],
};

const FAQ_ITEMS = [
  { q: 'Hoe lang gaat een dak mee?', a: 'Dat hangt af van het materiaal. Dakpannen (beton/klei) gaan 40-60 jaar mee. Kunstleien 50-80 jaar, natuurleien tot 100 jaar. Een EPDM plat dak houdt 30-50 jaar stand. Bitumen gaat 15-25 jaar mee. Goten in zink gaan 25-40 jaar mee.' },
  { q: 'Kan ik een dak laten herstellen in plaats van vervangen?', a: 'Ja, als het dak jonger is dan 25-30 jaar en de dakstructuur intact is. Gedeeltelijke herstellingen zijn zinvol bij lokale schade. Maar als meer dan 30% van de dakbedekking beschadigd is, is een volledige renovatie economisch voordeliger.' },
  { q: 'Wat zijn de gevolgen van te lang wachten met dakrenovatie?', a: 'Water dat binnendringt tast dakspanten, isolatie en muren aan. Houtrot in de dakstructuur kan leiden tot een instabiel dak. De kosten van gevolgschade overstijgen vaak de kostprijs van een tijdige renovatie.' },
  { q: 'Wanneer is een dak te oud om te herstellen?', a: 'Als een dak ouder is dan 35-40 jaar en al meerdere herstellingen heeft gehad, is vervanging doorgaans voordeliger. Een dakwerker kan na inspectie adviseren of een partiële herstelling nog rendabel is.' },
  { q: 'Heeft de leeftijd van mijn dak invloed op mijn premie?', a: 'Ja. Dakisolatie die tegelijk met een dakrenovatie geplaatst wordt, geeft recht op de Mijn VerbouwPremie. Een oud, niet-geïsoleerd dak heeft ook een negatief effect op uw EPC-label, wat de verkoopwaarde van uw woning verlaagt.' },
];

const SIGNALEN = [
  { nr: 1, titel: 'Uw dak is ouder dan 30-35 jaar', tekst: 'De meeste dakbedekkingen bereiken hun einde na 30-40 jaar. Als u de installatiedatum niet kent, kunt u de bouwjaarvermelding op uw eigendomsakte of kadaster raadplegen.' },
  { nr: 2, titel: 'U heeft al meerdere herstellingen laten uitvoeren', tekst: 'Eén herstelling is normaal. Als u om de 2-3 jaar terugkerende problemen heeft, betaalt u uiteindelijk meer dan bij één grondige renovatie.' },
  { nr: 3, titel: 'Meer dan 30% van de dakpannen is beschadigd', tekst: 'Gebroken, gebarsten of geërodeerde pannen laten water door bij elke regenbui. Als een groot deel van het dak aangetast is, is partieel vervangen niet meer rendabel.' },
  { nr: 4, titel: 'De onderdakfolie is versleten of afwezig', tekst: 'Achter de dakpannen zit een onderdakfolie als tweede waterbeveiliging. Woningen gebouwd voor 1980 hebben die soms niet. Zonder folie is er geen buffer als een pan breekt.' },
  { nr: 5, titel: 'De dakisolatie voldoet niet meer aan de normen', tekst: 'Isolatienormen zijn sterk aangescherpt. Een dak met te weinig isolatie kost u jaarlijks honderden euro\'s extra aan verwarmingskosten en drukt uw EPC-label omlaag.' },
  { nr: 6, titel: 'Er is houtrot zichtbaar in de dakstructuur', tekst: 'Zachte of donker verkleurde dakspanten en gordingen wijzen op langdurige vochtinfiltratie. Structureel houtrot vereist vervanging van de rotte elementen — uitstel vergroot het probleem.' },
  { nr: 7, titel: 'Uw energiefactuur stijgt zonder andere verklaring', tekst: 'Warmteverlies via het dak is verantwoordelijk voor 25-30% van het totale energieverlies in een woning. Een stijgende factuur zonder andere oorzaak kan direct gekoppeld zijn aan een verouderd of slecht geïsoleerd dak.' },
];

export default function WanneerDakVervangenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-white">
        <section className="bg-primary text-white py-10 lg:py-14">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/kennis" className="hover:text-white transition-colors">Kenniscentrum</Link>
              <span>/</span><span className="text-white">Wanneer dak vervangen</span>
            </div>
            <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">Dakproblemen</span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Wanneer moet je je dak vervangen?<br /><span className="text-accent">7 signalen + levensduur per type</span>
            </h1>
            <p className="text-blue-200 mt-4 text-lg">6 min leestijd · Bijgewerkt mei 2025</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
          <p className="text-main text-lg leading-relaxed mb-8">
            Weten wanneer uw dak echt aan vervanging toe is, bespaart u zowel geld als onnodige renovatiewerken. Veel Limburgse woningen hebben daken uit de jaren '60 tot '80 die hun maximale levensduur naderen. Dit zijn de zeven signalen die u niet mag negeren.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-6">7 signalen dat uw dak aan vervanging toe is</h2>
          <div className="space-y-4 mb-10">
            {SIGNALEN.map((s) => (
              <div key={s.nr} className="flex gap-4 p-5 bg-background rounded-xl border border-gray-100">
                <span className="h-8 w-8 rounded-full bg-accent text-white font-bold flex items-center justify-center flex-shrink-0">{s.nr}</span>
                <div><p className="font-semibold text-primary">{s.titel}</p><p className="text-main text-sm leading-relaxed mt-1">{s.tekst}</p></div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Levensduur per daktype</h2>
          <div className="overflow-x-auto mb-8 rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Daktype</th>
                  <th className="text-left px-4 py-3 font-semibold">Levensduur</th>
                  <th className="text-left px-4 py-3 font-semibold">Vervanging aan te raden na</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { type: 'Betondakpannen', leven: '40 – 60 jaar', aangeraden: '40 jaar' },
                  { type: 'Kleipannen', leven: '50 – 80 jaar', aangeraden: '50 jaar' },
                  { type: 'Kunstleien', leven: '50 – 80 jaar', aangeraden: '50 jaar' },
                  { type: 'Natuurleien', leven: '80 – 100+ jaar', aangeraden: '80 jaar' },
                  { type: 'EPDM (plat dak)', leven: '30 – 50 jaar', aangeraden: '35 jaar' },
                  { type: 'Bitumen (plat dak)', leven: '15 – 25 jaar', aangeraden: '20 jaar' },
                  { type: 'Zinkgoten', leven: '25 – 40 jaar', aangeraden: '30 jaar' },
                ].map((row) => (
                  <tr key={row.type} className="odd:bg-white even:bg-background">
                    <td className="px-4 py-3 font-medium text-primary">{row.type}</td>
                    <td className="px-4 py-3 text-main">{row.leven}</td>
                    <td className="px-4 py-3 text-accent font-semibold">{row.aangeraden}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Herstellen of vervangen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-background rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-primary mb-3">Herstellen is zinvol als:</h3>
              <ul className="space-y-2 text-sm text-main">
                {['Het dak jonger is dan 25 jaar', 'Maximaal 20-25% van de dakbedekking is aangetast', 'De dakstructuur intact en droog is', 'Het een plaatselijke schade is (storm, mechanisch)'].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-green-600 font-bold">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-accent/5 rounded-xl p-5 border border-accent/20">
              <h3 className="font-bold text-primary mb-3">Vervangen is beter als:</h3>
              <ul className="space-y-2 text-sm text-main">
                {['Het dak ouder is dan 30-35 jaar', 'Er al meerdere herstellingen zijn uitgevoerd', 'De dakstructuur beschadigd of verrot is', 'U ook wil isoleren (combineer in één fase)'].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-accent font-bold">→</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Veelgestelde vragen</h2>
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
            <Link href="/diensten/dakrenovatie" className="text-accent hover:underline">Dakrenovatie Limburg</Link>
            <Link href="/kennis/kosten-dakrenovatie-limburg" className="text-accent hover:underline">Kosten dakrenovatie</Link>
            <Link href="/kennis/hoe-herken-je-een-daklek" className="text-accent hover:underline">Daklek herkennen</Link>
          </div>
        </article>

        <section className="bg-primary py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-3">Twijfelt u of uw dak aan vervanging toe is?</h2>
                <p className="text-blue-200 leading-relaxed">Een erkende dakwerker inspecteert uw dak gratis en adviseert u eerlijk — herstelling of renovatie. Binnen 24u antwoord.</p>
              </div>
              <LeadForm source="kennis-wanneer-vervangen" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
