'use client';

import { useOfferteModal } from '@/components/providers/OfferteModalProvider';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Aanvraag indienen',
    description:
      'Vul het formulier in of bel ons direct. Wij bevestigen uw aanvraag binnen 24 uur en plannen een vrijblijvend plaatsbezoek.',
  },
  {
    number: '2',
    title: 'Gratis plaatsbezoek & offerte',
    description:
      'Een gecertificeerde dakwerker komt ter plaatse en bezorgt u een transparante offerte. Geen verborgen kosten, geen verplichtingen.',
  },
  {
    number: '3',
    title: 'Vakkundige uitvoering',
    description:
      'Uw dak wordt hersteld of gerenoveerd met kwalitatieve materialen en volledige garantie. Wij staan garant voor een waterdicht resultaat.',
  },
];

function WerkwijzeSection() {
  const { openModal } = useOfferteModal();

  return (
    <section id="werkwijze" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center">
          Zo werkt het — snel en eenvoudig
        </h2>
        <p className="text-sub text-center mt-4 max-w-2xl mx-auto">
          Van uw eerste contact tot een waterdicht dak — transparant en zonder verrassingen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-accent flex items-center justify-center text-white text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-primary font-bold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-main text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => openModal('werkwijze-cta')}
            className="bg-accent hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-md transition-all"
          >
            Start met stap 1 — Gratis offerte
          </button>
        </div>
      </div>
    </section>
  );
}

export default WerkwijzeSection;
