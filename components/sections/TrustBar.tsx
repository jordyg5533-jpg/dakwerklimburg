import { Star, Users, Clock, ShieldCheck, MapPin } from 'lucide-react';

const items = [
  { Icon: Star, number: '4.9/5', label: 'Gemiddelde beoordeling' },
  { Icon: Users, number: '200+', label: 'Tevreden klanten' },
  { Icon: Clock, number: '24u', label: 'Reactietijd gegarandeerd' },
  { Icon: ShieldCheck, number: '100%', label: 'Gecertificeerde vakmensen' },
  { Icon: MapPin, number: '8+', label: 'Limburgse steden' },
];

function TrustBar() {
  return (
    <section className="bg-primary py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {items.map(({ Icon, number, label }, idx) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center text-white ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <Icon className="h-6 w-6 lg:h-7 lg:w-7 text-accent mb-2" />
              <span className="text-xl lg:text-3xl font-bold text-accent">
                {number}
              </span>
              <span className="text-blue-200 text-[10px] lg:text-xs mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
