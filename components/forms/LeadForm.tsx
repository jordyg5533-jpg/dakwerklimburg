'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LeadFormProps {
  source?: string;
}

function LeadForm({ source = 'unknown' }: LeadFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    naam: '',
    telefoon: '',
    email: '',
    type: '',
    bericht: '',
    gdpr: false,
    botcheck: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-main';
  const labelClass = 'text-main text-sm font-medium mb-1 block';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const payload = {
        access_key: '849a8a4b-f519-4bac-9e4f-c3b412f5883b',
        subject: `Nieuwe offerte-aanvraag — ${formData.naam} (${source || 'geen gemeente opgegeven'})`,
        from_name: 'Dakwerk Limburg',
        replyto: formData.email,
        botcheck: formData.botcheck ? 'true' : '',
        naam: formData.naam,
        telefoon: formData.telefoon,
        email: formData.email,
        type_werk: formData.type,
        bericht: formData.bericht,
        gdpr_consent: formData.gdpr ? 'ja' : 'nee',
        pagina_oorsprong:
          typeof window !== 'undefined' ? window.location.pathname : '',
        tijdstip: new Date().toISOString(),
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data && data.success === true) {
        router.push('/bedankt');
        return;
      }

      throw new Error('Submit failed');
    } catch (err) {
      setErrorMsg(
        'Er ging iets mis bij het versturen — probeer opnieuw, of bel ons rechtstreeks op +32 456 19 13 60.'
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
      <h2 className="text-primary font-bold text-2xl">Ontvang uw gratis offerte</h2>
      <p className="text-sub text-sm mt-1 mb-6">
        Binnen 24 uur antwoord gegarandeerd
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="naam" className={labelClass}>
            Naam *
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            required
            placeholder="Uw volledige naam"
            value={formData.naam}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telefoon" className={labelClass}>
            Telefoon *
          </label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            required
            placeholder="04XX XX XX XX"
            value={formData.telefoon}
            onChange={handleChange}
            className={inputClass}
          />
          <p className="text-sub text-xs mt-1">Wij bellen u terug binnen 24u</p>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className={labelClass}>
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="uw@email.be"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className={labelClass}>
            Type werk *
          </label>
          <select
            id="type"
            name="type"
            required
            value={formData.type}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Kies een dienst...</option>
            <option value="dakrenovatie">Dakrenovatie</option>
            <option value="plat-dak">Plat dak</option>
            <option value="dakisolatie">Dakisolatie</option>
            <option value="goten">Goten & Zinkwerk</option>
            <option value="stormschade">Stormschade (spoed)</option>
            <option value="andere">Andere</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="bericht" className={labelClass}>
            Bericht (optioneel)
          </label>
          <textarea
            id="bericht"
            name="bericht"
            rows={3}
            placeholder="Beschrijf kort uw dakprobleem of wens..."
            value={formData.bericht}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="flex items-start gap-2 mt-4 mb-2">
          <input
            type="checkbox"
            id="gdpr"
            name="gdpr"
            required
            checked={formData.gdpr}
            onChange={handleChange}
            className="mt-1 accent-accent cursor-pointer"
          />
          <label htmlFor="gdpr" className="text-sub text-sm cursor-pointer">
            Ik ga akkoord met de{' '}
            <a href="/privacy" className="underline hover:text-accent">
              privacyverklaring
            </a>{' '}
            en geef toestemming mijn gegevens te delen met dakwerkers in mijn regio.
          </label>
        </div>

        <input type="hidden" name="source" value={source} />

        <input
          type="checkbox"
          name="botcheck"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        {errorMsg && <p className="text-red-600 text-sm mb-3">{errorMsg}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Bezig met verzenden…' : 'Verstuur mijn aanvraag →'}
        </button>

        <p className="text-sub text-xs text-center mt-3">
          🔒 Uw gegevens zijn veilig. Geen spam, geen verplichtingen.
        </p>
      </form>
    </div>
  );
}

export default LeadForm;
