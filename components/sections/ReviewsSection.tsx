import { ShieldCheck, MapPin, Gift } from 'lucide-react';

const CARDS = [
  {
    icon: ShieldCheck,
    title: 'Erkend netwerk',
    text: 'Elk van onze partners is een geregistreerde aannemer met BTW-nummer en verzekering. Geen klusjesmannen, geen onaangekondigde onderaannemers — gewoon vakmensen die hun werk kennen.',
  },
  {
    icon: MapPin,
    title: 'Lokale dakwerker',
    text: 'U krijgt iemand uit uw eigen regio die uw type woning kent — geen ploeg uit een andere provincie. Een Genker dak vraagt een andere aanpak dan een leien dak in Tongeren, en daar selecteren wij op.',
  },
  {
    icon: Gift,
    title: 'Geen kosten, geen druk',
    text: 'Het plaatsbezoek en de offerte zijn altijd gratis. Beslist u uiteindelijk om niet door te gaan? Ook geen probleem — geen verborgen kosten, geen pushy verkopers.',
  },
];

function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center">
          Wat u kunt verwachten
        </h2>
        <p className="text-sub text-center mt-4 max-w-2xl mx-auto">
          Geen praatjes — alleen een werkwijze die uw tijd en stress bespaart.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {CARDS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-primary font-bold text-lg mb-2">{title}</h3>
              <p className="text-main text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
