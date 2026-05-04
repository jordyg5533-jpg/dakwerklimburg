'use client';

function ResetConsentButton() {
  const resetConsent = () => {
    try {
      localStorage.removeItem('consent_v1');
    } catch (e) {}
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={resetConsent}
      className="bg-accent hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
    >
      Cookie-voorkeuren resetten
    </button>
  );
}

export default ResetConsentButton;
