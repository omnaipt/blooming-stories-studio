import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import serviceWedding from "@/assets/service-wedding-new.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import serviceCustom from "@/assets/service-custom.jpg";
import serviceCorporate from "@/assets/service-corporate-new.jpg";
import serviceBaptism from "@/assets/service-baptism.jpg";
import serviceFuneral from "@/assets/service-funeral.jpg";

const Services = () => {
  const { language, t } = useLanguage();

  const services = [
    {
      id: "casamentos",
      title: language === "pt" ? "Decoração de Casamentos" : "Wedding Decoration",
      description: language === "pt" 
        ? "Cenários florais românticos que transformam o vosso dia especial em memórias eternas."
        : "Romantic floral settings that transform your special day into eternal memories.",
      image: serviceWedding,
      icon: "💒",
    },
    {
      id: "bouquets",
      title: language === "pt" ? "Bouquets de Noiva" : "Bridal Bouquets",
      description: language === "pt"
        ? "Criações personalizadas que complementam o vestido e a personalidade da noiva."
        : "Personalized creations that complement the dress and the bride's personality.",
      image: serviceBridal,
      icon: "💐",
    },
    {
      id: "presentes",
      title: language === "pt" ? "Presentes Especiais" : "Special Gifts",
      description: language === "pt"
        ? "Composições únicas adaptadas ao vosso gosto, ocasião e ambiente."
        : "Unique compositions adapted to your taste, occasion and environment.",
      image: serviceCustom,
      icon: "🌸",
    },
    {
      id: "empresas",
      title: language === "pt" ? "Eventos Empresariais" : "Corporate Events",
      description: language === "pt"
        ? "Ambientação sofisticada para conferências, inaugurações e celebrações corporativas."
        : "Sophisticated setting for conferences, openings and corporate celebrations.",
      image: serviceCorporate,
      icon: "🏢",
    },
    {
      id: "batizados",
      title: language === "pt" ? "Batizados e Festas" : "Baptisms & Parties",
      description: language === "pt"
        ? "Decoração delicada para batizados, comunhões e celebrações familiares."
        : "Delicate decoration for baptisms, communions and family celebrations.",
      image: serviceBaptism,
      icon: "🕊️",
    },
    {
      id: "funerarios",
      title: language === "pt" ? "Serviços Fúnebres" : "Funeral Services",
      description: language === "pt"
        ? "Tributos florais respeitosos e elegantes para homenagear os que partiram."
        : "Respectful and elegant floral tributes to honor those who have passed.",
      image: serviceFuneral,
      icon: "🤍",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
            {t("services.label")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            {language === "pt" ? "A Arte de Vitória" : "The Art of Vitória"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "pt"
              ? "Desde 1988, criamos arranjos florais únicos que transformam cada momento em memórias especiais. Cada composição é uma obra de arte feita com amor e dedicação."
              : "Since 1988, we create unique floral arrangements that transform every moment into special memories. Each composition is a work of art made with love and dedication."
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-accent hover:text-accent/80 font-medium" asChild>
                  <a href="#orcamento">
                    {t("nav.quote")} →
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
