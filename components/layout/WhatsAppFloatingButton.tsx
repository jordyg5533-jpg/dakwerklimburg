import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/32456191360?text=Hallo%2C%20ik%20heb%20een%20vraag%20over%20dakwerken%20in%20Limburg.';

function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur ons een bericht via WhatsApp"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center h-[60px] w-[60px] md:h-16 md:w-16 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-200"
      style={{ backgroundColor: '#25D366' }}
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8 text-white" aria-hidden="true" />
    </a>
  );
}

export default WhatsAppFloatingButton;
