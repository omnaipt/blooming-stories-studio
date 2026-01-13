import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import vitoriaImage from "@/assets/vitoria.jpg";

const About = () => {
  const { t, language } = useLanguage();

  const stats = [
    { value: "37+", label: language === "pt" ? "Anos de Experiência" : "Years of Experience" },
    { value: "2000+", label: language === "pt" ? "Casamentos" : "Weddings" },
    { value: "100%", label: language === "pt" ? "Satisfação" : "Satisfaction" },
  ];

  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Visual Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={vitoriaImage} 
                alt="Vitória - A Minha Florinha" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Simple caption below image */}
            <p className="text-center text-sm text-muted-foreground italic mt-4">
              {language === "pt" ? "Desde 1988" : "Since 1988"}
            </p>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
              {t("about.label")}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              {language === "pt" ? (
                <>
                  A História de
                  <br />
                  <span className="italic text-green-moss">A Minha Florinha</span>
                </>
              ) : (
                <>
                  The Story of
                  <br />
                  <span className="italic text-green-moss">A Minha Florinha</span>
                </>
              )}
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              {language === "pt" ? (
                <>
                  <p>
                    Desde 1988, a <strong className="text-foreground">Vitória</strong> dedica-se à criação de arranjos florais 
                    únicos que contam histórias. A partir da sua loja na Malveira, transformou uma paixão 
                    por flores num legado de mais de três décadas ao serviço da região.
                  </p>
                  <p>
                    Cada bouquet é um ato de amor, cada decoração uma obra de arte. Especializamo-nos em 
                    <strong className="text-foreground"> casamentos</strong>, <strong className="text-foreground">eventos especiais</strong> e 
                    <strong className="text-foreground"> presentes especiais</strong>, sempre com atenção 
                    meticulosa aos detalhes e às preferências de cada cliente.
                  </p>
                  <p>
                    Servimos as zonas de <strong className="text-foreground">Mafra, Loures e Lisboa</strong>, 
                    levando a beleza das flores a cada celebração com pontualidade e profissionalismo.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Since 1988, <strong className="text-foreground">Vitória</strong> has dedicated herself to creating unique floral 
                    arrangements that tell stories. From her shop in Malveira, she transformed a passion 
                    for flowers into a legacy of over three decades serving the region.
                  </p>
                  <p>
                    Each bouquet is an act of love, each decoration a work of art. We specialize in 
                    <strong className="text-foreground"> weddings</strong>, <strong className="text-foreground">special events</strong> and 
                    <strong className="text-foreground"> special gifts</strong>, always with meticulous attention 
                    to details and each client's preferences.
                  </p>
                  <p>
                    We serve the areas of <strong className="text-foreground">Mafra, Loures and Lisbon</strong>, 
                    bringing the beauty of flowers to each celebration with punctuality and professionalism.
                  </p>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-card rounded-xl shadow-soft">
                  <span className="font-serif text-2xl lg:text-3xl font-bold text-primary block">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            <Button variant="coral" size="lg" asChild>
              <a href="#contacto">
                {language === "pt" ? "Fale Connosco" : "Contact Us"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
