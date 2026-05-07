import type { Metadata } from 'next';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';
import LeadForm from '@/components/forms/LeadForm';

export const metadata: Metadata = {
  title: 'Hoe herken je een daklek? Oorzaken, signalen en oplossingen (2025)',
  description: 'Daklek herkennen: ontdek de 8 waarschuwingssignalen, de meest voorkomende oorzaken en wat u zelf kunt doen — voordat er gevolgschade ontstaat.',
  alternates: { canonical: 'https://dakwerklimburg.be/kennis/hoe-herken-je-een-daklek' },
  openGraph: {
    title: 'Hoe herken je een daklek? Signalen, oorzaken & oplossingen | Dakwerk Limburg',
    description: 'Ontdek de 8 signalen van een daklek en wat u moet doen om gevolgschade te voorkomen.',
    type: 'article',
    url: 'https://dakwerklimburg.be/kennis/hoe-herken-je-een-daklek',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', title: 'Hoe herken je een daklek?', description: '8 signalen en wat u moet doen.', images: DEFAULT_TWITTER_IMAGES },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Hoe herken je een daklek? Oorzaken, signalen en oplossingen',
  datePublished: '2025-05-07', dateModified: '2025-05-07',
  author: { '@type': 'Organization', name: 'Dakwerk Limburg' },
  publisher: { '@type': 'Organization', name: 'Dakwerk Limburg', url: 'https://dakwerklimburg.be' },
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe weet ik of mijn dak lekt?', acceptedAnswer: { '@type': 'Answer', text: 'De meest duidelijke signalen zijn vochtplekken of verkleuringen op uw plafond, schimmelvorming in de hoeken van kamers op de bovenverdieping, een muffe geur op zolder, of zichtbaar vocht op de dakspanten. Ook losse of verschoven dakpannen zichtbaar van buiten kunnen wijzen op een lek.' } },
    { '@type': 'Question', name: 'Kan ik een daklek zelf herstellen?', acceptedAnswer: { '@type': 'Answer', text: 'Kleine herstellingen zoals het terugleggen van een losse dakpan kunt u zelf doen als u veilig op uw dak kunt. Voor lekken aan loodafdichtingen, naden of meerlagige dakbedekkingen is een erkende dakwerker aangeraden — fouten kunnen de schade verergeren.' } },
    { '@type': 'Question', name: 'Hoe snel moet ik een daklek laten herstellen?', acceptedAnswer: { '@type': 'Answer', text: 'Zo snel mogelijk. Een daklek dat niet behandeld wordt veroorzaakt vochtschade aan de dakstructuur, isolatie, muren en elektrische installaties. Wat begint als een kleine herstelling van €200-€500 kan snel oplopen tot duizenden euro\'s gevolgschade.' } },
    { '@type': 'Question', name: 'Dekt mijn verzekering een daklek?', acceptedAnswer: { '@type': 'Answer', text: 'Stormschade en plotse dakschade worden doorgaans gedekt door uw brandverzekering. Een lek door slijtage of achterstallig onderhoud valt meestal niet onder de dekking. Dien altijd een attest in bij uw verzekeraar en neem foto\'s van de schade.' } },
    { '@type': 'Question', name: 'Wat kost het herstellen van een daklek?', acceptedAnswer: { '@type': 'Answer', text: 'Een eenvoudige herstelling (een paar losse pannen, een kleine naad) kost €150 tot €500 inclusief plaatsbezoek. Een loodafdichting herstellen kost €300 tot €800. Voor uitgebreide herstellingen na stormschade loopt dat op tot €1.500 of meer.' } },
  ],
};

const FAQ_ITEMS = [
  { q: 'Hoe weet ik of mijn dak lekt?', a: 'De meest duidelijke signalen zijn vochtplekken of verkleuringen op uw plafond, schimmelvorming in de hoeken van kamers op de bovenverdieping, een muffe geur op zolder, of zichtbaar vocht op de dakspanten. Ook losse of verschoven dakpannen zichtbaar van buiten kunnen wijzen op een lek.' },
  { q: 'Kan ik een daklek zelf herstellen?', a: 'Kleine herstellingen zoals het terugleggen van een losse dakpan kunt u zelf doen als u veilig op uw dak kunt. Voor lekken aan loodafdichtingen, naden of meerlagige dakbedekkingen is een erkende dakwerker aangeraden — fouten kunnen de schade verergeren.' },
  { q: 'Hoe snel moet ik een daklek laten herstellen?', a: 'Zo snel mogelijk. Een daklek dat niet behandeld wordt veroorzaakt vochtschade aan de dakstructuur, isolatie, muren en elektrische installaties. Wat begint als een kleine herstelling van €200-€500 kan snel oplopen tot duizenden euro\'s gevolgschade.' },
  { q: 'Dekt mijn verzekering een daklek?', a: 'Stormschade en plotse dakschade worden doorgaans gedekt door uw brandverzekering. Een lek door slijtage of achterstallig onderhoud valt meestal niet onder de dekking. Dien altijd een attest in bij uw verzekeraar en neem foto\'s van de schade.' },
  { q: 'Wat kost het herstellen van een daklek?', a: 'Een eenvoudige herstelling (een paar losse pannen, een kleine naad) kost €150 tot €500 inclusief plaatsbezoek. Een loodafdichting herstellen kost €300 tot €800. Voor uitgebreide herstellingen na stormschade loopt dat op tot €1.500 of meer.' },
];

const INTERNE_SIGNALEN = [
  { nr: '1', titel: 'Vochtplekken of gele vlekken op het plafond', tekst: 'Kring- of vlekvorming op het plafond van uw bovenverdieping of in de dakkapel is een klassiek teken. De vlek hoeft niet direct onder het lek te zitten — water verplaatst zich langs dakspanten.' },
  { nr: '2', titel: 'Schimmel in hoeken of op muren', tekst: 'Zwarte of groene schimmel die terugkeert ondanks reiniging duidt op structureel vocht. Dit is niet alleen een dakprobleem maar ook een gezondheidsrisico.' },
  { nr: '3', titel: 'Muffe geur op zolder of bovenverdieping', tekst: 'Een aanhoudende vochtgeur, zelfs zonder zichtbare vlekken, kan wijzen op vocht in de isolatie of dakstructuur dat niet zichtbaar is van binnenuit.' },
  { nr: '4', titel: 'Zichtbaar vocht of rot aan dakspanten', tekst: 'Ga regelmatig uw zolder op en controleer de dakspanten visueel. Donkere vlekken, zacht hout of witte kalkafzetting zijn alarmsignalen.' },
];

const EXTERNE_SIGNALEN = [
  { nr: '5', titel: 'Losse, gebroken of verschoven dakpannen', tekst: 'Dakpannen die niet meer in lijn liggen of waaronder u daglicht ziet, laten water door bij elke regenbui. Visuele inspectie met een verrekijker volstaat.' },
  { nr: '6', titel: 'Mosgroei of algen op het dak', tekst: 'Mos houdt vocht vast en tast de dakbedekking aan. Concentraties van mos duiden op plekken waar water slecht wegloopt — vaak een voorbode van lekkage.' },
  { nr: '7', titel: 'Beschadigde of verouderde loodafdichting', tekst: 'Rond dakramen, schoorstenen en naden zit loodslabbe. Deze loodafdichting verhardt en scheurt na 20-30 jaar. Inspecteer ze jaarlijks — een barst van enkele millimeter is genoeg voor waterinfiltratie.' },
  { nr: '8', titel: 'Verzakte of doorbuigende dakrand', tekst: 'Een gootsteen of dakrand die zichtbaar scheef hangt of doorbuigt wijst op rot hout achter de zinken dakgoot — water is al binnengedrongen in de dakstructuur.' },
];

export default function DaklekPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-white">
        <section className="bg-primary text-white py-10 lg:py-14">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/kennis" className="hover:text-white transition-colors">Kenniscentrum</Link>
              <span>/</span><span className="text-white">Daklek herkennen</span>
            </div>
            <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">Dakproblemen</span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Hoe herken je een daklek?<br /><span className="text-accent">8 signalen die u niet mag missen</span>
            </h1>
            <p className="text-blue-200 mt-4 text-lg">5 min leestijd · Bijgewerkt mei 2025</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
          <p className="text-main text-lg leading-relaxed mb-8">
            Een daklek ontdekken op het juiste moment bespaart u duizenden euro's. Water dat ongemerkt binnendringt tast de dakstructuur, isolatie en muren aan — gevolgschade die vaak pas na maanden of jaren zichtbaar wordt. In dit artikel leert u de 8 signalen herkennen die aangeven dat uw dak lekt of binnenkort gaat lekken.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Signalen van binnenuit</h2>
          <p className="text-main leading-relaxed mb-6">Controleer regelmatig uw zolder en de kamers op de bovenverdieping. Dit zijn de vier inwendige alarmsignalen:</p>
          <div className="space-y-4 mb-10">
            {INTERNE_SIGNALEN.map((s) => (
              <div key={s.nr} className="flex gap-4 p-4 bg-background rounded-xl border border-gray-100">
                <span className="h-8 w-8 rounded-full bg-red-500 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">{s.nr}</span>
                <div><p className="font-semibold text-primary text-sm">{s.titel}</p><p className="text-main text-sm leading-relaxed mt-1">{s.tekst}</p></div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Signalen van buitenuit</h2>
          <p className="text-main leading-relaxed mb-6">Een visuele inspectie van buiten — met een verrekijker of vanuit een bovenraam — onthult vaak al veel:</p>
          <div className="space-y-4 mb-10">
            {EXTERNE_SIGNALEN.map((s) => (
              <div key={s.nr} className="flex gap-4 p-4 bg-background rounded-xl border border-gray-100">
                <span className="h-8 w-8 rounded-full bg-accent text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">{s.nr}</span>
                <div><p className="font-semibold text-primary text-sm">{s.titel}</p><p className="text-main text-sm leading-relaxed mt-1">{s.tekst}</p></div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Meest voorkomende oorzaken van een daklek</h2>
          <div className="overflow-x-auto mb-8 rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Oorzaak</th>
                  <th className="text-left px-4 py-3 font-semibold">Hoe herkennen</th>
                  <th className="text-left px-4 py-3 font-semibold">Urgentie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { oorzaak: 'Losse of gebroken dakpannen', hoe: 'Zichtbaar van buiten', urgentie: 'Hoog', color: 'text-red-600' },
                  { oorzaak: 'Beschadigde loodafdichting', hoe: 'Rond dakraam / schoorsteen', urgentie: 'Hoog', color: 'text-red-600' },
                  { oorzaak: 'Verstopte dakgoten', hoe: 'Overlopend water bij regen', urgentie: 'Matig', color: 'text-amber-600' },
                  { oorzaak: 'Versleten onderdakfolie', hoe: 'Vocht bij zware regen', urgentie: 'Hoog', color: 'text-red-600' },
                  { oorzaak: 'Stormschade', hoe: 'Na hevige wind', urgentie: 'Spoed', color: 'text-red-700 font-bold' },
                  { oorzaak: 'Verouderd plat dak', hoe: 'Naad- of blaasvorming', urgentie: 'Hoog', color: 'text-red-600' },
                ].map((row) => (
                  <tr key={row.oorzaak} className="odd:bg-white even:bg-background">
                    <td className="px-4 py-3 text-main font-medium">{row.oorzaak}</td>
                    <td className="px-4 py-3 text-sub">{row.hoe}</td>
                    <td className={`px-4 py-3 ${row.color}`}>{row.urgentie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Wat moet u doen bij een daklek?</h2>
          <ol className="space-y-3 mb-8">
            {[
              'Documenteer de schade met foto\'s — belangrijk voor uw verzekeraar.',
              'Bescherm uw interieur: zet emmers, dek meubels af, verwijder natte isolatie.',
              'Contacteer uw verzekeraar als de schade door storm of plotse beschadiging is veroorzaakt.',
              'Bel een dakwerker voor een spoedbezoek. Wacht niet tot de volgende droge periode.',
              'Vraag na of de herstelling volstaat of dat een bredere inspectie nodig is.',
            ].map((stap, i) => (
              <li key={i} className="flex gap-3 text-main text-sm">
                <span className="h-6 w-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                {stap}
              </li>
            ))}
          </ol>

          <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5 mb-10">
            <p className="text-main text-sm leading-relaxed">
              <strong>Tip:</strong> Een jaarlijkse dakcontrole in het najaar — vóór het stormseizoen — is de goedkoopste verzekering tegen dure dakschade. Veel Limburgse dakwerkers bieden een gratis visuele dakcheck aan als onderdeel van hun offertebezoek.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Veelgestelde vragen over daklekken</h2>
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
            <Link href="/diensten/stormschade" className="text-accent hover:underline">Stormschade herstellen</Link>
            <Link href="/diensten/dakrenovatie" className="text-accent hover:underline">Dakrenovatie</Link>
            <Link href="/kennis/wanneer-dak-vervangen" className="text-accent hover:underline">Wanneer dak vervangen?</Link>
          </div>
        </article>

        <section className="bg-primary py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-3">Daklek ontdekt? Wacht niet.</h2>
                <p className="text-blue-200 leading-relaxed">Een erkende dakwerker in Limburg komt dezelfde dag of binnen 24u langs. Gratis offerte, geen verplichtingen.</p>
              </div>
              <LeadForm source="kennis-daklek" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
