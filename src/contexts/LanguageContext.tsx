import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    "nav.home": "Home",
    "nav.services": "Serviços",
    "nav.gallery": "Galeria",
    "nav.about": "Sobre Nós",
    "nav.contact": "Contacto",
    "nav.quote": "Pedir Orçamento",

    // Hero
    "hero.subtitle": "Florista desde 1988",
    "hero.title": "Criamos Momentos com Flores",
    "hero.description": "Com mais de 35 anos de experiência, transformamos os seus eventos mais especiais em memórias inesquecíveis através de arranjos florais únicos e personalizados.",
    "hero.cta": "Pedir Orçamento",
    "hero.gallery": "Ver Galeria",

    // Services
    "services.label": "Serviços",
    "services.title": "Os Nossos Serviços",
    "services.description": "Oferecemos uma gama completa de serviços florais para tornar cada momento especial.",
    "services.wedding.title": "Casamentos",
    "services.wedding.description": "Bouquets de noiva, decoração de cerimónia e receção, arranjos de mesa e muito mais para o seu dia especial.",
    "services.baptism.title": "Batizados",
    "services.baptism.description": "Arranjos delicados e elegantes para celebrar este momento sagrado.",
    "services.funeral.title": "Funerais",
    "services.funeral.description": "Coroas, ramos e arranjos para prestar a última homenagem com dignidade.",
    "services.corporate.title": "Eventos Empresariais",
    "services.corporate.description": "Decoração floral para conferências, inaugurações e eventos corporativos.",
    "services.bridal.title": "Bouquets de Noiva",
    "services.bridal.description": "Criações únicas e personalizadas para o momento mais especial.",
    "services.custom.title": "Arranjos Personalizados",
    "services.custom.description": "Criações únicas feitas à medida das suas preferências e ocasiões.",

    // Gallery
    "gallery.label": "Galeria",
    "gallery.title": "Os Nossos Trabalhos",
    "gallery.description": "Cada criação é única, feita com amor e atenção aos mais pequenos detalhes.",
    "gallery.all": "Todos",
    "gallery.weddings": "Casamentos",
    "gallery.arrangements": "Arranjos",
    "gallery.events": "Eventos",
    "gallery.showMore": "Ver Mais",
    "gallery.showLess": "Ver Menos",
    "gallery.photos": "fotos",
    "gallery.instagram": "Veja mais no nosso Instagram @aminhaflorinha",

    // About
    "about.label": "Sobre Nós",
    "about.title": "Uma História de Amor pelas Flores",
    "about.description1": "Desde 1988, a Minha Florinha tem sido sinónimo de qualidade, criatividade e dedicação no mundo da floricultura em Portugal.",
    "about.description2": "A nossa paixão pelas flores começou como um pequeno negócio familiar e cresceu para se tornar uma referência no setor, sempre mantendo a mesma atenção aos detalhes e o carinho em cada criação.",
    "about.owner": "Vitória Santos",
    "about.ownerRole": "Fundadora & Florista Principal",
    "about.stat1.value": "+35",
    "about.stat1.label": "Anos de Experiência",
    "about.stat2.value": "+2000",
    "about.stat2.label": "Casamentos Realizados",
    "about.stat3.value": "+10000",
    "about.stat3.label": "Arranjos Criados",

    // Testimonials
    "testimonials.label": "Testemunhos",
    "testimonials.title": "O Que Dizem os Nossos Clientes",
    "testimonials.description": "A satisfação dos nossos clientes é o nosso maior orgulho.",

    // Quote Form
    "quote.label": "Orçamento",
    "quote.title": "Peça o Seu Orçamento",
    "quote.description": "Conte-nos sobre o seu evento e entraremos em contacto consigo brevemente.",
    "quote.name": "Nome Completo",
    "quote.namePlaceholder": "O seu nome",
    "quote.email": "Email",
    "quote.emailPlaceholder": "o.seu@email.pt",
    "quote.phone": "Telefone",
    "quote.phonePlaceholder": "+351 900 000 000",
    "quote.eventType": "Tipo de Evento",
    "quote.eventTypePlaceholder": "Selecione o tipo de evento",
    "quote.wedding": "Casamento",
    "quote.baptism": "Batizado",
    "quote.funeral": "Funeral",
    "quote.corporate": "Evento Empresarial",
    "quote.other": "Outro",
    "quote.date": "Data do Evento",
    "quote.datePlaceholder": "Selecione uma data",
    "quote.message": "Mensagem",
    "quote.messagePlaceholder": "Descreva o que procura...",
    "quote.submit": "Enviar Pedido",
    "quote.sending": "A enviar...",
    "quote.success": "Pedido enviado com sucesso!",
    "quote.successMessage": "Entraremos em contacto consigo brevemente.",

    // Contact
    "contact.label": "Contacto",
    "contact.title": "Entre em Contacto",
    "contact.description": "Estamos aqui para ajudar a tornar os seus momentos especiais ainda mais memoráveis.",
    "contact.address": "Morada",
    "contact.addressValue": "Portugal",
    "contact.phone": "Telefone",
    "contact.email": "Email",
    "contact.hours": "Horário",
    "contact.hoursValue1": "Segunda a Sexta: 9h - 19h",
    "contact.hoursValue2": "Sábado: 9h - 13h",

    // Footer
    "footer.description": "Florista desde 1988, criando momentos especiais com amor e dedicação.",
    "footer.quickLinks": "Links Rápidos",
    "footer.services": "Serviços",
    "footer.contact": "Contacto",
    "footer.rights": "Todos os direitos reservados.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.quote": "Get Quote",

    // Hero
    "hero.subtitle": "Florist since 1988",
    "hero.title": "Creating Moments with Flowers",
    "hero.description": "With over 35 years of experience, we transform your most special events into unforgettable memories through unique and personalized floral arrangements.",
    "hero.cta": "Get Quote",
    "hero.gallery": "View Gallery",

    // Services
    "services.label": "Services",
    "services.title": "Our Services",
    "services.description": "We offer a complete range of floral services to make every moment special.",
    "services.wedding.title": "Weddings",
    "services.wedding.description": "Bridal bouquets, ceremony and reception decoration, table arrangements and much more for your special day.",
    "services.baptism.title": "Baptisms",
    "services.baptism.description": "Delicate and elegant arrangements to celebrate this sacred moment.",
    "services.funeral.title": "Funerals",
    "services.funeral.description": "Wreaths, bouquets and arrangements to pay the last tribute with dignity.",
    "services.corporate.title": "Corporate Events",
    "services.corporate.description": "Floral decoration for conferences, openings and corporate events.",
    "services.bridal.title": "Bridal Bouquets",
    "services.bridal.description": "Unique and personalized creations for the most special moment.",
    "services.custom.title": "Custom Arrangements",
    "services.custom.description": "Unique creations tailored to your preferences and occasions.",

    // Gallery
    "gallery.label": "Gallery",
    "gallery.title": "Our Work",
    "gallery.description": "Each creation is unique, made with love and attention to the smallest details.",
    "gallery.all": "All",
    "gallery.weddings": "Weddings",
    "gallery.arrangements": "Arrangements",
    "gallery.events": "Events",
    "gallery.showMore": "Show More",
    "gallery.showLess": "Show Less",
    "gallery.photos": "photos",
    "gallery.instagram": "See more on our Instagram @aminhaflorinha",

    // About
    "about.label": "About Us",
    "about.title": "A Story of Love for Flowers",
    "about.description1": "Since 1988, A Minha Florinha has been synonymous with quality, creativity and dedication in the world of floristry in Portugal.",
    "about.description2": "Our passion for flowers started as a small family business and grew to become a reference in the sector, always maintaining the same attention to detail and care in every creation.",
    "about.owner": "Vitória Santos",
    "about.ownerRole": "Founder & Lead Florist",
    "about.stat1.value": "+35",
    "about.stat1.label": "Years of Experience",
    "about.stat2.value": "+2000",
    "about.stat2.label": "Weddings Done",
    "about.stat3.value": "+10000",
    "about.stat3.label": "Arrangements Created",

    // Testimonials
    "testimonials.label": "Testimonials",
    "testimonials.title": "What Our Clients Say",
    "testimonials.description": "Our clients' satisfaction is our greatest pride.",

    // Quote Form
    "quote.label": "Quote",
    "quote.title": "Request Your Quote",
    "quote.description": "Tell us about your event and we will contact you shortly.",
    "quote.name": "Full Name",
    "quote.namePlaceholder": "Your name",
    "quote.email": "Email",
    "quote.emailPlaceholder": "your@email.com",
    "quote.phone": "Phone",
    "quote.phonePlaceholder": "+351 900 000 000",
    "quote.eventType": "Event Type",
    "quote.eventTypePlaceholder": "Select event type",
    "quote.wedding": "Wedding",
    "quote.baptism": "Baptism",
    "quote.funeral": "Funeral",
    "quote.corporate": "Corporate Event",
    "quote.other": "Other",
    "quote.date": "Event Date",
    "quote.datePlaceholder": "Select a date",
    "quote.message": "Message",
    "quote.messagePlaceholder": "Describe what you are looking for...",
    "quote.submit": "Send Request",
    "quote.sending": "Sending...",
    "quote.success": "Request sent successfully!",
    "quote.successMessage": "We will contact you shortly.",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Get in Touch",
    "contact.description": "We are here to help make your special moments even more memorable.",
    "contact.address": "Address",
    "contact.addressValue": "Portugal",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Hours",
    "contact.hoursValue1": "Monday to Friday: 9am - 7pm",
    "contact.hoursValue2": "Saturday: 9am - 1pm",

    // Footer
    "footer.description": "Florist since 1988, creating special moments with love and dedication.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
  },
};

// Detect browser language
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("pt")) {
    return "pt";
  }
  if (browserLang.startsWith("en")) {
    return "en";
  }
  return "pt"; // Default to Portuguese
};

// Get stored language or detect from browser
const getInitialLanguage = (): Language => {
  const stored = localStorage.getItem("language") as Language | null;
  if (stored && (stored === "pt" || stored === "en")) {
    return stored;
  }
  return detectBrowserLanguage();
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
