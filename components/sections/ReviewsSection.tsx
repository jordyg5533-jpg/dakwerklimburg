import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Jan V.',
    city: 'Hasselt',
    text: 'Na de storm hadden we dringend iemand nodig. Via Dakwerk Limburg had ik binnen 24 uur een vakman ter plaatse. Eerlijke prijs, proper afgewerkt.',
    stars: 5,
  },
  {
    name: 'Petra M.',
    city: 'Genk',
    text: 'Twee offertes ontvangen via het platform — €700 verschil. Gekozen voor de lokale dakwerker uit Genk. Plaatsbezoek was gratis, werkzaamheden vlot verlopen.',
    stars: 5,
  },
  {
    name: 'Mark D.',
    city: 'Sint-Truiden',
    text: 'Eindelijk een manier om snel een betrouwbare dakwerker te vinden zonder zelf alle bedrijven te moeten afbellen. Gratis offerte, duidelijke afspraken.',
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center">
          Wat klanten zeggen
        </h2>
        <p className="text-sub text-center mt-4 max-w-2xl mx-auto">
          Ervaringen van huiseigenaars in Limburg die via ons platform een erkende dakwerker vonden.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {REVIEWS.map(({ name, city, text, stars }) => (
            <div
              key={name}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <Stars count={stars} />
              <p className="text-main text-sm leading-relaxed mb-4">"{text}"</p>
              <div className="flex items-center gap-2 mt-auto">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {name[0]}
                </div>
                <div>
                  <div className="text-primary font-semibold text-sm">{name}</div>
                  <div className="text-sub text-xs">{city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
