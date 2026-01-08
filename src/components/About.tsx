import { Button } from "@/components/ui/button";
import vitoriaImage from "@/assets/vitoria.jpg";

const About = () => {
  const stats = [
    { value: "37+", label: "Anos de Experiência" },
    { value: "2000+", label: "Casamentos" },
    { value: "100%", label: "Satisfação" },
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
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-elevated">
              <div className="text-center">
                <span className="font-serif text-3xl font-bold text-primary block">1988</span>
                <span className="text-sm text-muted-foreground">Desde</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Sobre Nós
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              A História de
              <br />
              <span className="italic text-green-moss">A Minha Florinha</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
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
              <a href="#contacto">Fale Connosco</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
