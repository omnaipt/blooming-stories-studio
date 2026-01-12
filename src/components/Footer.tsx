import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logoTransparent from "@/assets/logo-transparent.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#servicos", label: "Serviços" },
    { href: "#galeria", label: "Galeria" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#orcamento", label: "Orçamento" },
    { href: "#contacto", label: "Contacto" },
  ];

  const services = [
    "Decoração de Casamentos",
    "Bouquets de Noiva",
    "Presentes Especiais",
    "Eventos Empresariais",
    "Batizados e Festas",
    "Serviços Fúnebres",
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img 
                src={logoTransparent} 
                alt="A Minha Florinha" 
                className="h-16 w-auto brightness-0 invert opacity-90"
              />
              <span className="text-xs text-primary-foreground/60 block mt-1">Desde 1988</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Decoração floral para casamentos, eventos e momentos especiais. 
              Criações únicas com a arte e dedicação de Vitória.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/aminhaflorinha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-rose-medium transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/aminhaflorinha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-rose-medium transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary-foreground/50" />
                <div className="text-sm text-primary-foreground/70">
                  <a href="tel:+351219660333" className="hover:text-primary-foreground block">
                    +351 219 660 33
                  </a>
                  <a href="tel:+351914975475" className="hover:text-primary-foreground block">
                    +351 914 975 475
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary-foreground/50" />
                <a
                  href="mailto:geral@aminhaflorinha.pt"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                >
                  geral@aminhaflorinha.pt
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-foreground/50" />
                <div className="text-sm text-primary-foreground/70">
                  <span className="block">Malveira, Portugal</span>
                  <span className="text-xs text-primary-foreground/50">
                    Entregas: Mafra, Loures, Lisboa
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50 text-center sm:text-left">
            © {currentYear} A Minha Florinha. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/50 flex items-center gap-1">
            Desenhado com <span className="text-rose-medium">❤️</span> em Portugal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
