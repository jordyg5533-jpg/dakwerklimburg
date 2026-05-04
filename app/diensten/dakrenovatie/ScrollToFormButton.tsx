'use client';

interface Props {
  children: React.ReactNode;
}

export default function ScrollToFormButton({ children }: Props) {
  const scrollToForm = () => {
    const el = document.getElementById('offerte-formulier');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button
      onClick={scrollToForm}
      className="inline-block bg-accent hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-md transition-all"
    >
      {children}
    </button>
  );
}
