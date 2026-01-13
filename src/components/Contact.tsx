import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { language, t } = useLanguage();

  return (
    <section id="contacto" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-medium text-rose-medium uppercase tracking-widest mb-4">
              {t("contact.label")}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              {language === "pt" ? (<>Vamos Criar Algo<br /><span className="italic">Especial Juntos</span></>) : (<>Let's Create Something<br /><span className="italic">Special Together</span></>)}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              {language === "pt" ? "Estamos prontos para transformar as suas ideias em realidade. Entre em contacto connosco para discutir o seu próximo evento ou encomenda." : "We are ready to transform your ideas into reality. Contact us to discuss your next event or order."}
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center"><Phone className="w-5 h-5" /></div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">{t("contact.phone")}</p>
                  <a href="tel:+351219660333" className="font-medium hover:text-rose-medium transition-colors">+351 219 660 33</a>
                  <span className="mx-2 text-primary-foreground/40">|</span>
                  <a href="tel:+351914975475" className="font-medium hover:text-rose-medium transition-colors">914 975 475</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center"><Mail className="w-5 h-5" /></div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">Email</p>
                  <a href="mailto:geral@aminhaflorinha.pt" className="font-medium hover:text-rose-medium transition-colors">geral@aminhaflorinha.pt</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center"><MapPin className="w-5 h-5" /></div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">{language === "pt" ? "Localização" : "Location"}</p>
                  <p className="font-medium">Malveira, Portugal</p>
                  <p className="text-sm text-primary-foreground/60">{language === "pt" ? "Entregas: Mafra, Loures, Lisboa" : "Deliveries: Mafra, Loures, Lisbon"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center"><Clock className="w-5 h-5" /></div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">{language === "pt" ? "Horário" : "Hours"}</p>
                  <p className="font-medium">{language === "pt" ? "Seg - Sáb: 9h - 19h" : "Mon - Sat: 9am - 7pm"}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" size="lg" asChild><a href="https://wa.me/351914975475?text=Olá%20Vitória,%20gostaria%20de%20saber%20mais%20sobre%20os%20vossos%20serviços%20de%20decoração%20floral." target="_blank" rel="noopener noreferrer">💬 WhatsApp</a></Button>
              <Button variant="heroOutline" size="lg" asChild><a href="#orcamento">{t("nav.quote")}</a></Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elevated h-[400px] lg:h-[500px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.0!2d-9.2588467!3d38.9310354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ed5d19b924f83%3A0xee442e83188764d9!2sA%20Minha%20Florinha!5e0!3m2!1spt!2spt!4v1704672000000!5m2!1spt!2spt" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização A Minha Florinha - Malveira" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
