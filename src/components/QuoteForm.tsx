import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const serviceOptions = [
  "Casamento",
  "Buquê de Noiva",
  "Arranjo Personalizado",
  "Evento Empresarial",
  "Batizado",
  "Serviço Fúnebre",
  "Outro",
];

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Atenção",
        description: "Por favor, aceite a política de privacidade.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Mensagem enviada! 🌸",
      description: "Entraremos em contacto consigo em breve.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
      privacy: false,
    });
    setIsSubmitting(false);
  };

  return (
    <section id="orcamento" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Orçamento
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Cada Projeto é Único
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Os preços variam consoante a complexidade, tipos de flores, tamanho e data do evento. 
              Contacte-nos para um orçamento personalizado e gratuito.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="O seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="email@exemplo.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="+351 900 000 000"
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Tipo de Serviço *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                >
                  <option value="">Selecione um serviço</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Event Date */}
              <div className="md:col-span-2">
                <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                  Data do Evento / Entrega
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Descrição / Preferências Florais *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Descreva o que procura: tipo de flores, cores preferidas, estilo desejado, orçamento aproximado..."
                />
              </div>

              {/* Privacy */}
              <div className="md:col-span-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-border text-accent focus:ring-accent/50"
                  />
                  <span className="text-sm text-muted-foreground">
                    Concordo com a <a href="#" className="text-accent hover:underline">política de privacidade</a> e autorizo o tratamento dos meus dados para resposta a este pedido.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                type="submit"
                variant="coral"
                size="xl"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? "A enviar..." : "Enviar Pedido de Orçamento"}
              </Button>
              <span className="text-sm text-muted-foreground">
                ou ligue para{" "}
                <a href="tel:+351914975475" className="text-accent hover:underline font-medium">
                  914 975 475
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
