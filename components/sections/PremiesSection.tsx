function PremiesSection() {
  return (
    <section id="premies" className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Premies en subsidies voor dakwerken in Limburg (2026)
        </h2>

        <p className="text-main leading-relaxed mb-8">
          Als u uw dak laat isoleren of renoveren in Limburg, kunt u mogelijk aanspraak maken op financiële steun van de Vlaamse overheid en uw gemeente.
        </p>

        <h3 className="text-xl font-bold text-primary mt-10 mb-4">
          Mijn VerbouwPremie (Vlaanderen)
        </h3>

        <p className="text-main leading-relaxed mb-4">
          De Vlaamse Mijn Verbouwpremie biedt financiële steun voor dakisolatie en energetische renovatie. Aanvraag via mijnverbouwpremie.be na uitvoering van de werken. U kunt een aanzienlijk deel van de factuur terugkrijgen voor:
        </p>

        <ul className="space-y-2 mb-6 ml-1">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="text-main text-sm">Dakisolatie met een minimum R-waarde van 4,5 m²K/W</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="text-main text-sm">Combinatie van dak- en muurisolatie voor extra besparing</span>
          </li>
        </ul>

        <div className="bg-background rounded-xl p-6 mb-8 border border-gray-100">
          <h4 className="text-primary font-bold text-base mb-3">
            Voorwaarden Mijn VerbouwPremie:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-0.5">✓</span>
              <span className="text-main text-sm">Uw woning is minstens 15 jaar oud</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-0.5">✓</span>
              <span className="text-main text-sm">De werken worden uitgevoerd door een geregistreerd aannemer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-0.5">✓</span>
              <span className="text-main text-sm">Aanvraag via mijnverbouwpremie.be na uitvoering van de werken</span>
            </li>
          </ul>
          <p className="text-sub text-xs mt-4">
            Het premiebedrag hangt af van uw gezinsinkomen en het type werk. De basispremie voor dakisolatie bedraagt €8 per m², met hogere bedragen voor lagere inkomensgroepen.
          </p>
        </div>

        <h3 className="text-xl font-bold text-primary mt-10 mb-4">
          Gemeentelijke premies in Limburg
        </h3>

        <p className="text-main leading-relaxed mb-4">
          Naast de Vlaamse premie bieden sommige Limburgse gemeenten aanvullende lokale premies aan:
        </p>

        <ul className="space-y-2 mb-6 ml-1">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="text-main text-sm">
              <strong>Hasselt:</strong> stedelijke energiepremie voor dakisolatie
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="text-main text-sm">
              <strong>Genk:</strong> premie voor energetische renovatie in bepaalde wijken
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="text-main text-sm">
              <strong>Sint-Truiden:</strong> premie voor isolatie bij woningen ouder dan 20 jaar
            </span>
          </li>
        </ul>

        <p className="text-main leading-relaxed">
          Neem contact op met uw gemeentebestuur voor de actuele voorwaarden, of vraag het aan de dakwerker tijdens het plaatsbezoek — onze partners zijn op de hoogte van alle beschikbare premies in uw gemeente.
        </p>
      </div>
    </section>
  );
}

export default PremiesSection;
