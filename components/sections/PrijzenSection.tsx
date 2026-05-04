const PRICING_ROWS: Array<[string, string]> = [
  ['Dakrenovatie hellend dak', '€80 — €150 per m²'],
  ['Dakrenovatie plat dak', '€60 — €120 per m²'],
  ['Dakisolatie (buitenzijde)', '€40 — €80 per m²'],
  ['Dakisolatie (binnenzijde)', '€25 — €50 per m²'],
  ['Nieuwe dakpannen', '€30 — €60 per m²'],
  ['Leien dak', '€90 — €180 per m²'],
  ['EPDM plat dak', '€50 — €90 per m²'],
  ['Dakgoten vervangen', '€25 — €50 per lopende meter'],
  ['Zinkwerk', '€40 — €75 per lopende meter'],
  ['Stormschade noodingreep', '€150 — €500 (forfait)'],
];

function PrijzenSection() {
  return (
    <section id="prijzen" className="py-16 lg:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Wat kosten dakwerken in Limburg? — Prijzengids 2026
        </h2>

        <p className="text-main leading-relaxed mb-8">
          De prijs van dakwerken hangt af van het type werk, de gebruikte materialen, de oppervlakte en de bereikbaarheid van uw dak. Hieronder vindt u een overzicht van gemiddelde prijzen voor dakwerken in Limburg.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Type dakwerk
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Richtprijs (incl. BTW)
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICING_ROWS.map(([type, prijs], idx) => (
                <tr
                  key={type}
                  className={`border-b border-gray-200 ${idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <td className="py-3 px-4 text-main text-sm">{type}</td>
                  <td className="py-3 px-4 text-primary font-semibold text-sm">{prijs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sub text-xs mb-8">
          * Bovenstaande prijzen zijn richtprijzen voor de regio Limburg (2026). De werkelijke prijs hangt af van uw specifieke situatie. Vraag altijd een gratis offerte aan voor een exacte prijsberekening.
        </p>

        <h3 className="text-xl font-bold text-primary mt-10 mb-4">
          Factoren die de prijs beïnvloeden
        </h3>

        <ul className="space-y-2 mb-6 ml-1">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="text-main text-sm">De oppervlakte van uw dak — hoe groter, hoe lager de prijs per m²</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="text-main text-sm">De bereikbaarheid — is er stelling nodig? Moeilijke toegang verhoogt de prijs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="text-main text-sm">De staat van de bestaande dakstructuur — zijn er herstellingen nodig?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="text-main text-sm">Uw keuze van materialen — standaard versus premium kwaliteit</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="text-main text-sm">Eventuele asbestverwijdering — verplicht bij oudere woningen met asbesthoudende materialen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="text-main text-sm">Seizoen — voorjaar en zomer zijn duurder door hogere vraag bij dakwerkers</span>
          </li>
        </ul>

        <h3 className="text-xl font-bold text-primary mt-10 mb-4">
          Hoe bespaart u op dakwerken?
        </h3>

        <p className="text-main leading-relaxed mb-4 text-sm">
          Drie manieren om kosten te beperken:
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="bg-accent text-white font-bold h-7 w-7 rounded-full flex items-center justify-center text-sm flex-shrink-0">
              1
            </span>
            <p className="text-main text-sm">
              <strong>Vraag meerdere offertes aan</strong> — vergelijking bespaart gemiddeld 15 tot 20 procent
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-accent text-white font-bold h-7 w-7 rounded-full flex items-center justify-center text-sm flex-shrink-0">
              2
            </span>
            <p className="text-main text-sm">
              <strong>Combineer dakwerken met isolatie</strong> — de Vlaamse VerbouwPremie dekt een deel van de kosten
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-accent text-white font-bold h-7 w-7 rounded-full flex items-center justify-center text-sm flex-shrink-0">
              3
            </span>
            <p className="text-main text-sm">
              <strong>Plan buiten het hoogseizoen</strong> — dakwerkers bieden soms kortingen aan in de herfst en winter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrijzenSection;
