export interface City {
  name: string;
  slug: string;
  description: string;
  population: string;
  postalCodes: string;
}

export const cities: City[] = [
  {
    name: 'Hasselt',
    slug: 'hasselt',
    description:
      'Hoofdstad van Limburg. Veel jaren \'50-\'70 woningen met hellende daken die aan renovatie toe zijn.',
    population: '~80.000',
    postalCodes: '3500-3512',
  },
  {
    name: 'Genk',
    slug: 'genk',
    description:
      'Voormalige mijnstad met veel eengezinswoningen. Typische platte en hellende daken uit de jaren \'60.',
    population: '~67.000',
    postalCodes: '3600',
  },
  {
    name: 'Sint-Truiden',
    slug: 'sint-truiden',
    description:
      'Historische stad met mix van oude herenhuizen en moderne nieuwbouw. Leien daken zijn hier populair.',
    population: '~40.000',
    postalCodes: '3800',
  },
  {
    name: 'Beringen',
    slug: 'beringen',
    description:
      'Groeiende stad met veel recente verkavelingen. Moderne dakisolatie en platte daken in opkomst.',
    population: '~45.000',
    postalCodes: '3580-3583',
  },
  {
    name: 'Maasmechelen',
    slug: 'maasmechelen',
    description:
      'Grensgemeente met diverse architectuur. Veel rijwoningen waar dakrenovatie frequent nodig is.',
    population: '~37.000',
    postalCodes: '3630',
  },
  {
    name: 'Bilzen',
    slug: 'bilzen',
    description:
      'Landelijke gemeente met veel vrijstaande woningen. Hellende daken met dakpannen zijn de standaard.',
    population: '~32.000',
    postalCodes: '3740',
  },
  {
    name: 'Tongeren',
    slug: 'tongeren',
    description:
      'Oudste stad van België met veel monumentale panden. Restauratie van leien en natuurstenen daken.',
    population: '~30.000',
    postalCodes: '3700',
  },
  {
    name: 'Lommel',
    slug: 'lommel',
    description:
      'Noord-Limburgse stad met veel villawijken. Moderne dakconstructies en groendaken in opkomst.',
    population: '~35.000',
    postalCodes: '3920',
  },
];
