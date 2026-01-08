import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "351914975475";
  const message = encodeURIComponent(
    "Olá Vitória, gostaria de saber mais sobre os vossos serviços de decoração floral. Pode ajudar?"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contactar via WhatsApp"
    >
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-transform duration-300">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-foreground text-primary-foreground text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-elevated">
            Fale connosco no WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-foreground" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
