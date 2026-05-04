import Link from 'next/link';

export const metadata = {
  title: 'Pagina niet gevonden',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold text-primary mb-4">
        Pagina niet gevonden
      </h2>
      <p className="text-main text-lg mb-8 max-w-md">
        Deze pagina bestaat niet of is verplaatst. Ga terug naar de homepage of vraag direct uw gratis offerte aan.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="bg-primary hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-all"
        >
          ← Terug naar home
        </Link>
        <Link
          href="/#hero"
          className="bg-accent hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all"
        >
          Gratis offerte aanvragen
        </Link>
      </div>
    </main>
  );
}
