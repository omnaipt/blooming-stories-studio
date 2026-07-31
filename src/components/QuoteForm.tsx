import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";


const QuoteForm = () => {
  const { language } = useLanguage();
  
  const serviceOptions = language === "pt" 
    ? ["Casamento", "Bouquet de Noiva", "Presente Especial", "Evento Empresarial", "Batizado", "Serviço Fúnebre", "Outro"]
    : ["Wedding", "Bridal Bouquet", "Special Gift", "Corporate Event", "Baptism", "Funeral Service", "Other"];

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", date: "", message: "", privacy: false, company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast({ title: language === "pt" ? "Atenção" : "Attention", description: language === "pt" ? "Por favor, aceite a política de privacidade." : "Please accept the privacy policy.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: formData.date,
          message: formData.message,
          language: language,
          company: formData.company,
        }),
      });

      if (!response.ok) {
        throw new Error(`Falha no envio: ${response.status}`);
      }

      toast({ title: language === "pt" ? "Mensagem enviada! 🌸" : "Message sent! 🌸", description: language === "pt" ? "Entraremos em contacto consigo em breve." : "We will contact you shortly." });
      setFormData({ name: "", email: "", phone: "", service: "", date: "", message: "", privacy: false, company: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({ 
        title: language === "pt" ? "Erro" : "Error", 
        description: language === "pt" ? "Não foi possível enviar a mensagem. Por favor, tente novamente." : "Could not send the message. Please try again.", 
        variant: "destructive" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="orcamento" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
              {language === "pt" ? "Orçamento" : "Quote"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              {language === "pt" ? "Cada Projeto é Único" : "Every Project is Unique"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {language === "pt" ? "Os preços variam consoante a complexidade, tipos de flores, tamanho e data do evento. Contacte-nos para um orçamento personalizado e gratuito." : "Prices vary according to complexity, types of flowers, size and event date. Contact us for a personalized and free quote."}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Honeypot anti-spam: invisível para humanos, preenchido por bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">{language === "pt" ? "Nome *" : "Name *"}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder={language === "pt" ? "O seu nome" : "Your name"} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder="email@exemplo.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">{language === "pt" ? "Telefone *" : "Phone *"}</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder="+351 900 000 000" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">{language === "pt" ? "Tipo de Serviço *" : "Service Type *"}</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                  <option value="">{language === "pt" ? "Selecione um serviço" : "Select a service"}</option>
                  {serviceOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">{language === "pt" ? "Data do Evento / Entrega" : "Event / Delivery Date"}</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">{language === "pt" ? "Descrição / Preferências Florais *" : "Description / Floral Preferences *"}</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none" placeholder={language === "pt" ? "Descreva o que procura: tipo de flores, cores preferidas, estilo desejado, orçamento aproximado..." : "Describe what you are looking for: type of flowers, preferred colors, desired style, approximate budget..."} />
              </div>
              <div className="md:col-span-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} className="mt-1 w-4 h-4 rounded border-border text-accent focus:ring-accent/50" />
                  <span className="text-sm text-muted-foreground">
                    {language === "pt" ? <>Concordo com a <a href="#" className="text-accent hover:underline">política de privacidade</a> e autorizo o tratamento dos meus dados para resposta a este pedido.</> : <>I agree with the <a href="#" className="text-accent hover:underline">privacy policy</a> and authorize the processing of my data to respond to this request.</>}
                  </span>
                </label>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button type="submit" variant="coral" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? (language === "pt" ? "A enviar..." : "Sending...") : (language === "pt" ? "Enviar Pedido de Orçamento" : "Send Quote Request")}
              </Button>
              <span className="text-sm text-muted-foreground">
                {language === "pt" ? "ou ligue para " : "or call "}
                <a href="tel:+351914975475" className="text-accent hover:underline font-medium">914 975 475</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
