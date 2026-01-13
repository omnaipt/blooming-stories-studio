import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBouquet from "@/assets/hero-bouquet.jpg";

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBouquet}
          alt="Bouquet de noiva elegante com rosas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl animate-fade-up">

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
            {language === "pt" ? (
              <>
                Cada Flor Conta
                <br />
                <span className="italic text-rose-medium">uma História</span>
              </>
            ) : (
              <>
                Every Flower Tells
                <br />
                <span className="italic text-rose-medium">a Story</span>
              </>
            )}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
            {language === "pt" 
              ? "Decoração floral para casamentos, eventos e momentos especiais. Criações únicas com a arte e dedicação da Vitória."
              : "Floral decoration for weddings, events and special moments. Unique creations with the art and dedication of Vitória."
            }
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#servicos">
                {language === "pt" ? "Explorar Serviços" : "Explore Services"}
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/351914975475?text=Olá%20Vitória,%20gostaria%20de%20saber%20mais%20sobre%20os%20vossos%20serviços%20de%20decoração%20floral." target="_blank" rel="noopener noreferrer">
                {language === "pt" ? "Enviar Mensagem" : "Send Message"}
              </a>
            </Button>
          </div>

          {/* Delivery Areas & Since */}
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 text-primary-foreground/80">
            <span className="text-sm italic font-serif">
              {language === "pt" ? "Desde 1988" : "Since 1988"}
            </span>
            <span className="hidden sm:block text-primary-foreground/40">•</span>
            <div className="flex items-center gap-2">
              <span className="text-sm">
                {language === "pt" ? "Entregas em:" : "Deliveries to:"}
              </span>
              <div className="flex gap-2">
                {["Mafra", "Loures", "Lisboa"].map((area) => (
                  <span
                    key={area}
                    className="text-sm bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 py-1"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#servicos" className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">
            {language === "pt" ? "Explorar" : "Explore"}
          </span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
