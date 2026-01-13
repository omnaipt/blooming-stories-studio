import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sofia & João",
      event: language === "pt" ? "Casamento" : "Wedding",
      date: language === "pt" ? "Junho 2024" : "June 2024",
      rating: 5,
      text: language === "pt"
        ? "A Vitória foi fantástica! Decoração perfeita para o nosso casamento. Cada detalhe foi pensado com carinho e o resultado superou todas as expectativas. Recomendamos de olhos fechados!"
        : "Vitória was fantastic! Perfect decoration for our wedding. Every detail was thought with care and the result exceeded all expectations. We recommend with eyes closed!",
    },
    {
      id: 2,
      name: "Maria Fernandes",
      event: language === "pt" ? "Batizado" : "Baptism",
      date: language === "pt" ? "Março 2024" : "March 2024",
      rating: 5,
      text: language === "pt"
        ? "Arranjos delicados e elegantes para o batizado da minha filha. A Vitória entendeu exatamente o que queríamos. Profissionalismo e dedicação impecáveis!"
        : "Delicate and elegant arrangements for my daughter's baptism. Vitória understood exactly what we wanted. Impeccable professionalism and dedication!",
    },
    {
      id: 3,
      name: language === "pt" ? "Entidade Bancária" : "Banking Entity",
      event: language === "pt" ? "Evento Corporativo" : "Corporate Event",
      date: language === "pt" ? "Novembro 2023" : "November 2023",
      rating: 5,
      text: language === "pt"
        ? "Decoração sofisticada para a nossa gala anual. Ficou tudo perfeito e os nossos convidados adoraram. Parceria que pretendemos manter por muitos anos."
        : "Sophisticated decoration for our annual gala. Everything was perfect and our guests loved it. A partnership we intend to maintain for many years.",
    },
    {
      id: 4,
      name: "Ana & Pedro",
      event: language === "pt" ? "Casamento" : "Wedding",
      date: language === "pt" ? "Setembro 2023" : "September 2023",
      rating: 5,
      text: language === "pt"
        ? "O bouquet de noiva era exatamente o que sonhei! A Vitória captou a minha visão e transformou-a em realidade. Flores frescas, cores perfeitas, tudo impecável."
        : "The bridal bouquet was exactly what I dreamed of! Vitória captured my vision and turned it into reality. Fresh flowers, perfect colors, everything impeccable.",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
            {t("testimonials.label")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            {t("testimonials.title")}
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card text-center">
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold-accent text-gold-accent" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="font-serif text-xl lg:text-2xl text-foreground italic mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.event} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-2 bg-card rounded-full shadow-soft hover:shadow-card transition-all"
            aria-label={language === "pt" ? "Anterior" : "Previous"}
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-2 bg-card rounded-full shadow-soft hover:shadow-card transition-all"
            aria-label={language === "pt" ? "Próximo" : "Next"}
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`${language === "pt" ? "Ir para testemunho" : "Go to testimonial"} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
