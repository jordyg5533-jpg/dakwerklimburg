export interface City {
  name: string;
  slug: string;
  description: string;
  population: string;
  postalCodes: string;
  // Extended fields — used by [stad] template for cities without a dedicated page
  deelgemeenten?: Array<{ naam: string; postcode: string; info: string }>;
  bouwprofiel?: string;
  typischeProblemen?: string[];
  lokaleContext?: string;
  buurgemeenten?: string[];
}

export const cities: City[] = [
  // ── Bestaande steden — hebben eigen dedicated pagina's ──────────────────
  {
    name: 'Hasselt',
    slug: 'hasselt',
    description:
      "Hoofdstad van Limburg. Veel jaren '50–'70 woningen met hellende daken die aan renovatie toe zijn.",
    population: '~80.000',
    postalCodes: '3500–3512',
  },
  {
    name: 'Genk',
    slug: 'genk',
    description:
      "Voormalige mijnstad met veel eengezinswoningen. Typische platte en hellende daken uit de jaren '60.",
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
    postalCodes: '3580–3583',
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
      "Noord-Limburgse stad met veel villawijken. Moderne dakconstructies en groendaken in opkomst.",
    population: '~35.000',
    postalCodes: '3920',
  },

  // ── Nieuwe steden — gebruiken [stad] template ────────────────────────────
  {
    name: 'Heusden-Zolder',
    slug: 'heusden-zolder',
    description:
      "Voormalige mijnstad in de Kempen met veel naoorlogse woningen en mijnarbeiderswijken. Verouderde daken en gebrekkige isolatie zijn hier veelvoorkomend.",
    population: '~31.000',
    postalCodes: '3550',
    deelgemeenten: [
      { naam: 'Heusden', postcode: '3550', info: 'residentieel centrum, mix van rijwoningen en half-open bebouwing' },
      { naam: 'Zolder', postcode: '3550', info: "voormalige mijnkern, naoorlogse mijnwerkerswoningen, Circuit Zolder" },
      { naam: 'Eversel', postcode: '3550', info: 'landelijk gehucht, vrijstaande woningen en hoeves' },
      { naam: 'Koersel', postcode: '3582', info: 'klassiek dorp aan grens Beringen, hoeves en boerderijen' },
    ],
    bouwprofiel:
      "Heusden-Zolder draagt het mijnverleden zichtbaar in zijn woningbestand. De mijn van Zolder (gesloten 1992) liet een cluster mijnwerkerswoningen na in de Kolonie-wijken — vergelijkbaar met Beringen-Mijn maar zonder beschermde erfgoedstatus. Dat betekent meer vrijheid in materiaalkeuze, maar ook meer verwaarlozing: pannendaken uit de jaren '50 met zinken goten die al decennia niet werden aangepakt. In Heusden zelf vind je meer residentiële bebouwing uit de jaren '70–'90. Koersel, geografisch grenzend aan Beringen, heeft het landelijke profiel van de Kempische landbouwgemeenten.",
    typischeProblemen: [
      "Mijnwerkerswoningen Zolder — pannendaken uit de jaren '50–'60 met originele zinken bakgoten die corrosie vertonen en metselwerk bevochten.",
      "Naoorlogse rijwoningen Heusden — weinig tot geen dakisolatie, klassiek pannendak met verborgen lekkagepunten aan schoorsteen en dakkapel.",
      "Koersel-hoeves — grote dakoppervlaktes, mix van pannen en golfplaten op stallen, soms asbest-eternit op bijgebouwen.",
      "Verkavelingen jaren '80–'90 — EPDM of bitumen op platte dakdelen van uitbouwen en veranda's die hun levensduur bereiken.",
    ],
    lokaleContext:
      "Heusden-Zolder ligt in het hart van de Kempische mijngordel, tussen Beringen en Genk. Het Circuit van Zolder trekt jaarlijks duizenden bezoekers, maar de woonkern is residentieel en relatief rustig. Veel eigenaars zijn gepensioneerde mijnwerkers of hun erfgenamen, en de renovatie-achterstand op daken is significant. De Mijn VerbouwPremie is volop van toepassing — een lokale dakwerker helpt gratis met de aanvraag.",
    buurgemeenten: [
      'Beringen (3580)',
      'Lummen (3560)',
      'Tessenderlo (3980)',
      'Houthalen-Helchteren (3530)',
      'Zonhoven (3520)',
      'Genk (3600)',
    ],
  },
  {
    name: 'Houthalen-Helchteren',
    slug: 'houthalen-helchteren',
    description:
      'Gemeente in de Kempen met mijnverleden en uitgestrekte natuurgebieden. Mix van naoorlogse woningbouw en landelijke kernen aan het Nationaal Park Hoge Kempen.',
    population: '~29.000',
    postalCodes: '3530',
    deelgemeenten: [
      { naam: 'Houthalen', postcode: '3530', info: 'voormalige mijnkern, veel naoorlogse rijwoningen en sociale woningbouw' },
      { naam: 'Houthalen-West', postcode: '3530', info: "nieuwere wijken, mix van rijwoningen en jaren '80–'90 verkavelingen" },
      { naam: 'Helchteren', postcode: '3530', info: 'landelijk karakter, vrijstaande woningen, grenst aan Nationaal Park Hoge Kempen' },
      { naam: 'Meeuwen', postcode: '3530', info: 'grensdorp, landelijk, vrijstaande bebouwing en hoeves' },
    ],
    bouwprofiel:
      "Houthalen heeft twee gezichten: de mijnkern met compacte rijwoningen uit de jaren '50–'70 en het landelijke Helchteren dat aan het Nationaal Park Hoge Kempen grenst. Houthalen heeft weinig tot geen dakisolatie in het oudere woningbestand — platte dakgedeelten op stallen en garages met verouderd bitumen zijn veelvoorkomend. Helchteren heeft vrijstaande woningen en boerderijen met klassieke hellende pannendaken. Houthalen-West bouwde verder in de jaren '80–'90 met gewone verkavelingen waarvan de dakbedekking nu onderhoud vraagt.",
    typischeProblemen: [
      "Naoorlogse rijwoningen Houthalen — pannendaken uit de jaren '50–'70 met originele zinken bakgoten die corrosie vertonen, dakisolatie ontbreekt.",
      "Garages en bergingen — asbest-leien of -golfplaten op bijgebouwen; verwijdering via erkende asbestverwijderaar is verplicht, OVAM-premie beschikbaar.",
      "Helchteren vrijstaande woningen — hellende daken met weinig isolatie, zinken bakgoten aan vervanging toe, schoorsteenomsluiting versleten.",
      "Verkavelingen Houthalen-West — EPDM op platte dakgedeelten van uitbouwen bereikt einde levensduur, naadafdichting opgegeven.",
    ],
    lokaleContext:
      "Houthalen-Helchteren grenst aan het enige nationale park van België. De mijnsite van Houthalen werd deels omgevormd, maar de mijnwerkerswijken zijn karakteristiek voor de Kempische industriegemeenten. De private woningmarkt is actief: jonge eigenaars pakken dakisolatie, ramen en verwarmingssystemen aan, geholpen door de Mijn VerbouwPremie.",
    buurgemeenten: [
      'Heusden-Zolder (3550)',
      'Beringen (3580)',
      'Tessenderlo (3980)',
      'Zonhoven (3520)',
      'Genk (3600)',
      'As (3665)',
    ],
  },
  {
    name: 'Pelt',
    slug: 'pelt',
    description:
      'Noord-Limburgse fusiegemeente van Neerpelt en Overpelt. Mix van industrieel erfgoed, residentiële verkavelingen en landelijke kernen aan de Nederlandse grens.',
    population: '~23.500',
    postalCodes: '3900–3910',
    deelgemeenten: [
      { naam: 'Neerpelt', postcode: '3910', info: 'historische kern, rijwoningen en mix van bouwjaren' },
      { naam: 'Overpelt', postcode: '3900', info: 'industrieel karakter (Nyrstar-site), naoorlogse arbeiderswoningen' },
      { naam: 'Kleine-Brogel', postcode: '3990', info: 'militaire luchtmachtbasis, gemengd residentieel' },
      { naam: 'Grote-Brogel', postcode: '3990', info: 'landelijk, vrijstaande woningen en hoeves' },
    ],
    bouwprofiel:
      "Pelt is de fusiegemeente van Neerpelt en Overpelt (samengevoegd in 2019). Overpelt droeg lang de zinkfabriek van Nyrstar — dat liet een ring van arbeiderswoningen na die sterk lijken op mijnwerkerswijken. Neerpelt heeft een meer residentieel profiel met zijn historische kern langs de Dommel. De gemeente grenst aan Nederland, wat leidt tot een mix van Vlaamse en Brabantse bouwstijlen aan de grenszone. Grote-Brogel heeft de luchtmachtbasis en gemengde bebouwing.",
    typischeProblemen: [
      "Arbeiderswoningen Overpelt — naoorlogse rijwoningen met weinig dakisolatie, zinken goten aan het einde van hun levensduur.",
      "Historische kern Neerpelt — rijwoningen van voor 1975 met pannendaken die nooit systematisch vernieuwd werden.",
      "Hoeves en vrijstaande woningen Grote-Brogel — grote dakoppervlaktes, bijgebouwen met golfplaten of asbest-leien.",
      "Recente verkavelingen — EPDM en bitumen op platte dakgedeelten bereiken 15–20 jaar en vragen onderhoud of vervanging.",
    ],
    lokaleContext:
      "Pelt is een ambitieuze fusiegemeente die de erfenis van haar industrieel verleden actief omvormt. Noord-Limburg heeft historisch lagere vastgoedprijzen dan Hasselt, wat eigenaars soms remt in renovatie-investeringen. Tegelijk zijn de energiepremies — Mijn VerbouwPremie, dakisolatiepremie Fluvius — hier even interessant als elders in Vlaanderen.",
    buurgemeenten: [
      'Lommel (3920)',
      'Hamont-Achel (3930)',
      'Hechtel-Eksel (3940)',
      'Peer (3990)',
      'Bree (3960)',
      'Valkenswaard / Budel (NL)',
    ],
  },
  {
    name: 'Diepenbeek',
    slug: 'diepenbeek',
    description:
      'Groeiende slaapgemeente van Hasselt langs de E313. Mix van landelijke dorpskern, moderne verkavelingen en UHasselt-campus.',
    population: '~22.000',
    postalCodes: '3590',
    deelgemeenten: [
      { naam: 'Diepenbeek-centrum', postcode: '3590', info: 'historische dorpskern langs de Demer, rijwoningen en handelspanden' },
      { naam: 'Jeuk', postcode: '3590', info: 'landelijke deelgemeente, vrijstaande woningen en hoeves' },
      { naam: 'Beverst', postcode: '3590', info: "rustig woongebied, verkavelingen jaren '80–'00" },
      { naam: 'Wimmertingen', postcode: '3590', info: 'grenst aan Hasselt, snel groeiende nieuwbouwzone' },
    ],
    bouwprofiel:
      "Diepenbeek heeft in de afgelopen twee decennia een groeigolf van nieuwe verkavelingen gezien door zijn ligging direct naast Hasselt (E313-afrit). Dat resulteert in een tweeledig profiel: de historische dorpskern langs de Demer met oudere rijwoningen en herenhuizen die dringend dakwerk nodig hebben, en de moderne verkavelingen met woningen die nu hun eerste onderhoudscyclus ingaan. De UHasselt campus brengt dynamiek maar ook jonge gezinnen die voor het eerst renoveren.",
    typischeProblemen: [
      "Historische kern — rijwoningen en herenhuizen van voor 1960 met zinken goten die corrosie vertonen en pannendaken waar pannen los liggen.",
      "Jaren '80–'90 verkavelingen Beverst — standaard pannendaken met zinken bakgoten aan einde levensduur, dakisolatie dikwijls ondermaats.",
      "Nieuwere woningen (na 2000) — EPDM op platte dakdelen van veranda's en carports; naden en aansluitingen vragen periodiek onderhoud.",
      "Hoeves Jeuk — bijgebouwen met golfplaten of asbest-leien, asbestverwijdering via OVAM-premie aantrekkelijk.",
    ],
    lokaleContext:
      "Diepenbeek is typisch voor de suburbanisatie rond Hasselt: families die de stad verlaten voor ruimere woningen maar toch vlak bij de E313-aansluiting willen zitten. Het oudere woningbestand in de kern en Jeuk heeft achterstand in energierenovatie. De nabijheid van Hasselt betekent dat dakwerkers snel ter plaatse kunnen — zonder extra reiskosten in de offerte.",
    buurgemeenten: [
      'Hasselt (3500)',
      'Bilzen (3740)',
      'Hoeselt (3730)',
      'Alken (3570)',
      'Wellen (3830)',
      'Tongeren (3700)',
    ],
  },
  {
    name: 'Maaseik',
    slug: 'maaseik',
    description:
      'Historische Maasstad en geboorteplaats van de gebroeders Van Eyck. Mix van beschermde stadswoningen, Maasvallei-architectuur en landelijke deelgemeenten.',
    population: '~22.000',
    postalCodes: '3680',
    deelgemeenten: [
      { naam: 'Maaseik-centrum', postcode: '3680', info: 'historisch centrum, beschermd stadsgezicht, stadswoningen en herenhuizen' },
      { naam: 'Aldeneik', postcode: '3680', info: 'landelijk, abdijsite, vrijstaande woningen langs de Maas' },
      { naam: 'Neeroeteren', postcode: '3680', info: 'Maasvallei, gemengd residentieel, vrijstaande woningen' },
      { naam: 'Opoeteren', postcode: '3680', info: 'landelijk, vrijstaande woningen, grenst aan Maasmechelen' },
    ],
    bouwprofiel:
      "Maaseik heeft een uniek profiel door zijn ligging in de Maasvallei en zijn rijke stadsgeschiedenis. Het historische centrum is een beschermd stadsgezicht — rijhuizen en herenhuizen van voor 1900 met leien of keramische pannendaken waarbij restauratiewerk specifieke materialen en soms een toelating Onroerend Erfgoed vereist. Buiten de kern zijn de deelgemeenten landelijker: vrijstaande woningen en hoeves langs de Maas en in de polders.",
    typischeProblemen: [
      "Historisch centrum — beschermd stadsgezicht vraagt specifieke materialen (leien, natuurpannen) en soms toelating Onroerend Erfgoed; kennis van erfgoedregels is vereist.",
      "Maasvallei-woningen — vochtigheid vanuit de Maas beïnvloedt dakconstructies; extra aandacht voor ventilatie, onderdak en waterdichting bij goten.",
      "Hoeves Aldeneik en Opoeteren — grote dakoppervlaktes met mix van pannen, golfplaten en soms asbest-eternit op stallen en bijgebouwen.",
      "Naoorlogse woningen Neeroeteren — pannendaken met zinken goten aan einde cyclus, isolatie-upgrade via Mijn VerbouwPremie.",
    ],
    lokaleContext:
      "Maaseik is de historische hoofdstad van het Maasland en grenst aan Nederland (Roermond). De toeristische aantrekkingskracht zorgt voor een actieve woningrenovatiemarkt in het centrum. Voor erfgoedwoningen zijn er naast de gewone premies soms extra subsidiemogelijkheden via Onroerend Erfgoed Vlaanderen.",
    buurgemeenten: [
      'Bree (3960)',
      'Kinrooi (3640)',
      'Dilsen-Stokkem (3650)',
      'Maasmechelen (3630)',
      'Peer (3990)',
      'Roermond (NL)',
    ],
  },
  {
    name: 'Leopoldsburg',
    slug: 'leopoldsburg',
    description:
      'Compacte garnizoensstad in de Kempen. Homogeen woningbestand uit de militaire periode met een actieve renovatiemarkt bij jonge eigenaars.',
    population: '~14.500',
    postalCodes: '3970–3971',
    deelgemeenten: [
      { naam: 'Leopoldsburg', postcode: '3970', info: 'compacte kern, garnizoenswoningen en residentiële rijwoningen' },
      { naam: 'Heppen', postcode: '3971', info: 'landelijke deelgemeente, vrijstaande woningen en boerderijen' },
    ],
    bouwprofiel:
      "Leopoldsburg is als garnizoensstad opgezet rond Camp Beverlo — een van de grootste militaire basissen van België. De burgerwoningen rondom zijn grotendeels rijwoningen en half-open bebouwing uit de jaren '50–'70, gebouwd voor militairen en hun families. Dat geeft een opmerkelijke homogeniteit: veel panden van hetzelfde bouwjaar met dezelfde renovatievraag — dakisolatie ontbreekt, zinken goten zijn versleten, pannendaken hebben nooit een grote renovatie gehad. Heppen is kleiner en landelijker.",
    typischeProblemen: [
      "Naoorlogse garnizoenswoningen — pannendaken uit de jaren '50–'70 met originele zinken goten die corrosie vertonen en aan vervanging toe zijn.",
      "Homogene bouwperiode — veel woningen bereiken tegelijk het punt van dakrenovatie; vroeg ingrijpen vermijdt noodherstellingen en hogere kosten.",
      "Geen of onvoldoende dakisolatie — woningen van voor 1975 halen de minimale R-waarde niet; Mijn VerbouwPremie maakt dit betaalbaar aanpakken.",
      "Heppen hoeves — grote dakoppervlaktes, bijgebouwen met asbestleien of golfplaten; asbestverwijdering en nieuwe dakbedekking in één traject.",
    ],
    lokaleContext:
      "Leopoldsburg grenst aan Beringen en Hechtel-Eksel in de Kempische mijngordel. De woningmarkt is relatief betaalbaar vergeleken met Hasselt of Genk, wat jonge families aantrekt die willen renoveren. De garnizoenswoningen zien een generatiewissel: nieuwe eigenaars pakken dakisolatie, ramen en verwarming aan en profiteren van de lopende Vlaamse premies.",
    buurgemeenten: [
      'Beringen (3580)',
      'Ham (3945)',
      'Hechtel-Eksel (3940)',
      'Tessenderlo (3980)',
    ],
  },
];
