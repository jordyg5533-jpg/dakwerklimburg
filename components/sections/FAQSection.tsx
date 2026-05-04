'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Wat kost een dakrenovatie in Limburg?',
    answer:
      'De prijs van een dakrenovatie hangt af van het dakoppervlak, de gebruikte materialen en de staat van uw huidig dak. Gemiddeld rekent u voor een hellend dak tussen €80 en €150 per m², inclusief materialen en plaatsing. Voor een plat dak ligt de prijs tussen €60 en €120 per m². Wij bezorgen u altijd een gratis offerte na plaatsbezoek, zodat u exact weet waar u aan toe bent.',
  },
  {
    question: 'Hoe lang duurt een dakrenovatie?',
    answer:
      'Een gemiddelde dakrenovatie duurt 3 tot 7 werkdagen, afhankelijk van de omvang en het type dak. Een eenvoudige herstelling of gootreparatie kan al op één dag worden afgerond. Een volledige renovatie met isolatie duurt doorgaans een week. Wij bezorgen u altijd een duidelijke planning vooraf.',
  },
  {
    question: 'Heb ik recht op premies voor dakwerken in Limburg?',
    answer:
      'Ja. Via de Vlaamse Mijn VerbouwPremie kunt u tot 30% terugkrijgen op dakisolatiewerken. De premie geldt voor woningen ouder dan 15 jaar. Sommige Limburgse gemeenten bieden ook aanvullende lokale premies aan. Onze dakwerkers informeren u hierover tijdens het plaatsbezoek en helpen u met de aanvraag.',
  },
  {
    question: 'Wat doe ik bij een dringend daklek of stormschade?',
    answer:
      'Bij spoedgevallen kunt u ons direct bellen. Wij zorgen dat dezelfde dag of binnen 24 uur een dakwerker bij u is voor een eerste noodingreep. Tijdelijk afdekken voorkomt verdere schade aan uw woning. Na de noodingreep ontvangt u een offerte voor de definitieve herstelling.',
  },
  {
    question: 'Zijn de dakwerkers gecertificeerd en verzekerd?',
    answer:
      'Ja. Wij werken uitsluitend met dakwerkers die beschikken over de vereiste erkenningen en een geldige beroepsaansprakelijkheidsverzekering. Zo bent u altijd beschermd bij eventuele schade tijdens de werken.',
  },
  {
    question: 'In welke steden in Limburg zijn jullie actief?',
    answer:
      'Wij zijn actief in heel Limburg, waaronder Hasselt, Genk, Sint-Truiden, Beringen, Maasmechelen, Bilzen, Tongeren, Lommel, Diepenbeek, Houthalen-Helchteren, Leopoldsburg en alle omliggende gemeenten. Waar u ook woont in Limburg, wij vinden een dakwerker bij u in de buurt.',
  },
  {
    question: 'Hoe vraag ik een gratis offerte aan?',
    answer:
      'U kunt ons bereiken via het offerteformulier op deze website of door ons te bellen. Na uw aanvraag contacteren wij u binnen 24 uur om een vrijblijvend plaatsbezoek in te plannen. Na het plaatsbezoek ontvangt u een transparante offerte zonder verborgen kosten.',
  },
  {
    question: 'Wat is het verschil tussen een hellend en een plat dak?',
    answer:
      'Een hellend dak heeft een dakhelling van meer dan 15 graden en wordt doorgaans bedekt met dakpannen of leien. Een plat dak heeft een helling van minder dan 15 graden en wordt afgewerkt met EPDM, PVC of bitumen. Beide daktypes vereisen specifieke expertise. Onze dakwerkers zijn ervaren in zowel hellende als platte daken.',
  },
  {
    question: 'Moet ik een bouwvergunning aanvragen voor dakwerken?',
    answer:
      'Voor de meeste dakrenovaties in Vlaanderen is geen bouwvergunning nodig, zolang het volume en het uitzicht van de woning niet wijzigen. Bij het plaatsen van dakkapellen of het verhogen van de nok kan wel een vergunning vereist zijn. Uw dakwerker of gemeente kan u hierover adviseren.',
  },
  {
    question: 'Hoe lang gaat een nieuw dak mee?',
    answer:
      'De levensduur hangt af van het materiaal. Dakpannen gaan 40 tot 60 jaar mee, leien zelfs 80 tot 100 jaar. Een plat dak met EPDM heeft een levensduur van 30 tot 50 jaar. Regelmatig onderhoud zoals het reinigen van goten en het verwijderen van mos verlengt de levensduur aanzienlijk.',
  },
  {
    question: 'Kan ik mijn dak laten renoveren terwijl ik in mijn woning blijf wonen?',
    answer:
      'Ja. Bij de meeste dakrenovaties kunt u gewoon in uw woning blijven. De dakwerker werkt aan de buitenzijde en er is doorgaans geen overlast in huis. Bij volledige renovaties met structurele aanpassingen kan tijdelijke hinder optreden, maar dit wordt altijd vooraf besproken.',
  },
  {
    question: 'Wat is het beste seizoen voor dakwerken?',
    answer:
      'Dakwerken worden idealiter uitgevoerd in het voorjaar of de zomer, wanneer het droog weer is. Spoedherstellingen en kleinere werken kunnen echter het hele jaar door worden uitgevoerd. In de herfst en winter zijn dakwerkers vaak beter beschikbaar en kunt u sneller een afspraak krijgen.',
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center">
          Veelgestelde vragen over dakwerken in Limburg
        </h2>
        <p className="text-sub text-center mt-4">
          Alles wat u moet weten over dakwerken, prijzen en premies.
        </p>

        <div className="mt-10 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left gap-4 group"
                aria-expanded={openIndex === index}
              >
                <span className="text-primary font-semibold text-base group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-accent flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="text-main text-sm leading-relaxed mt-3 pr-10">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
