import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBouquet from "@/assets/hero-bouquet.jpg";

const Hero = () => {
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-secondary-foreground">
              🌿 Florista desde 1988 • Malveira
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
            Cada Flor Conta
            <br />
            <span className="italic text-rose-medium">uma História</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
            Decoração floral para casamentos, eventos e momentos especiais. 
            Criações únicas com a arte e dedicação de Vitória.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#servicos">
                Explorar Serviços
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/351914975475?text=Olá%20Vitória,%20gostaria%20de%20saber%20mais%20sobre%20os%20vossos%20serviços%20de%20decoração%20floral." target="_blank" rel="noopener noreferrer">
                Enviar Mensagem
              </a>
            </Button>
          </div>

          {/* Delivery Areas */}
          <div className="mt-12 flex items-center gap-4 text-primary-foreground/80">
            <span className="text-sm">Entregas em:</span>
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#servicos" className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">Explorar</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
