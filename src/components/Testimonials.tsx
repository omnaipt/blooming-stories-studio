import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sofia & João",
    event: "Casamento",
    date: "Junho 2024",
    rating: 5,
    text: "A Vitória foi fantástica! Decoração perfeita para o nosso casamento. Cada detalhe foi pensado com carinho e o resultado superou todas as expectativas. Recomendamos de olhos fechados!",
  },
  {
    id: 2,
    name: "Maria Fernandes",
    event: "Batizado",
    date: "Março 2024",
    rating: 5,
    text: "Arranjos delicados e elegantes para o batizado da minha filha. A Vitória entendeu exatamente o que queríamos. Profissionalismo e dedicação impecáveis!",
  },
  {
    id: 3,
    name: "Empresa ABC",
    event: "Evento Corporativo",
    date: "Novembro 2023",
    rating: 5,
    text: "Decoração sofisticada para a nossa gala anual. Ficou tudo perfeito e os nossos convidados adoraram. Parceria que pretendemos manter por muitos anos.",
  },
  {
    id: 4,
    name: "Ana & Pedro",
    event: "Casamento",
    date: "Setembro 2023",
    rating: 5,
    text: "O bouquet de noiva era exatamente o que sonhei! A Vitória captou a minha visão e transformou-a em realidade. Flores frescas, cores perfeitas, tudo impecável.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
            Testemunhos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            O Que Dizem os Nossos Clientes
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
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-2 bg-card rounded-full shadow-soft hover:shadow-card transition-all"
            aria-label="Próximo"
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
                aria-label={`Ir para testemunho ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
