import Link from 'next/link';
import { Chrome as Home, Layers, Thermometer, Droplets, Zap, ClipboardCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Service {
  Icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  href: string;
  image?: ServiceImage;
}

const services: Service[] = [
  {
    Icon: Home,
    title: 'Dakrenovatie',
    description:
      'Volledige of gedeeltelijke renovatie van uw hellend of plat dak. Leien, dakpannen, EPDM of bitumen — wij zorgen voor een waterdicht en duurzaam resultaat in heel Limburg.',
    linkText: 'Meer over dakrenovatie →',
    href: '/diensten/dakrenovatie',
    image: {
      src: '/images/dakrenovatie-kaart.png',
      alt: 'Volledige dakrenovatie van een woning in Limburg',
      width: 800,
      height: 533,
    },
  },
  {
    Icon: Layers,
    title: 'Plat Dak',
    description:
      'Plaatsing, herstelling of volledige vervanging van uw plat dak. EPDM, PVC of bitumineuze membranen met minimaal 10 jaar garantie op waterdichtheid.',
    linkText: 'Meer over platte daken →',
    href: '/diensten/plat-dak',
    image: {
      src: '/images/plat-dak-kaart.png',
      alt: 'Vakman plaatst EPDM-bedekking op een plat dak',
      width: 800,
      height: 600,
    },
  },
  {
    Icon: Thermometer,
    title: 'Dakisolatie',
    description:
      'Bespaar tot 30% op uw energiefactuur met professionele dakisolatie. Combineerbaar met de Vlaamse Mijn VerbouwPremie 2026. Advies en plaatsing door gecertificeerde vakmensen.',
    linkText: 'Meer over dakisolatie →',
    href: '/diensten/dakisolatie',
    image: {
      src: '/images/dakisolatie-kaart.png',
      alt: 'Dakisolatie wordt aangebracht onder de pannen',
      width: 800,
      height: 600,
    },
  },
  {
    Icon: Droplets,
    title: 'Goten & Zinkwerk',
    description:
      'Plaatsing, reiniging of vervanging van dakgoten en zinkwerk. Voorkom waterinsijpeling en vochtproblemen aan uw gevel. Regelmatig onderhoud verlengt de levensduur.',
    linkText: 'Meer over goten →',
    href: '/diensten/goten-zinkwerk',
    image: {
      src: '/images/goten-kaart.png',
      alt: 'Nieuwe zinken dakgoot wordt geplaatst langs een dakrand',
      width: 800,
      height: 533,
    },
  },
  {
    Icon: Zap,
    title: 'Stormschade',
    description:
      'Spoedservice bij stormschade aan uw dak. Wij sturen dezelfde dag een dakwerker langs voor een eerste noodingreep en tijdelijke afdekking. 24/7 bereikbaar.',
    linkText: 'Meer over stormschade →',
    href: '/diensten/stormschade',
    image: {
      src: '/images/stormschade-kaart.png',
      alt: 'Dakwerker herstelt stormschade aan een hellend dak',
      width: 800,
      height: 533,
    },
  },
  {
    Icon: ClipboardCheck,
    title: 'Gratis Dakscreening',
    description:
      'Twijfelt u over de staat van uw dak? Laat het gratis inspecteren door een vakman. U ontvangt een helder rapport met advies en een vrijblijvende offerte.',
    linkText: 'Gratis screening aanvragen →',
    href: '/contact',
  },
];

function DienstenSection() {
  return (
    <section id="diensten" className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center">
          Onze dakwerkdiensten in Limburg
        </h2>
        <p className="text-sub text-center mt-4 max-w-2xl mx-auto">
          Van dakrenovatie tot spoedherstellingen — wij verbinden u met de juiste vakman voor elke klus aan uw dak.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map(({ Icon, title, description, linkText, href, image }) => (
            <div
              key={title}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-accent hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {image && (
                <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-background">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <Icon className="h-8 w-8 text-accent mb-4" />

                <h3 className="text-primary font-bold text-lg mb-2">
                  {title}
                </h3>

                <p className="text-main text-sm leading-relaxed mb-4">
                  {description}
                </p>

                <Link
                  href={href}
                  className="text-accent font-semibold text-sm hover:underline inline-flex items-center gap-1 mt-auto"
                >
                  {linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DienstenSection;
