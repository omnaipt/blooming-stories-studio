import { useState } from "react";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";
import wedding7 from "@/assets/wedding-7.jpg";
import wedding8 from "@/assets/wedding-8.jpg";
import wedding9 from "@/assets/wedding-9.jpg";
import wedding10 from "@/assets/wedding-10.jpg";
import wedding11 from "@/assets/wedding-11.jpg";
import wedding12 from "@/assets/wedding-12.jpg";
import wedding13 from "@/assets/wedding-13.jpg";
import wedding14 from "@/assets/wedding-14.jpg";
import wedding15 from "@/assets/wedding-15.jpg";
import wedding16 from "@/assets/wedding-16.jpg";
import wedding17 from "@/assets/wedding-17.jpg";
import wedding18 from "@/assets/wedding-18.jpg";
import wedding19 from "@/assets/wedding-19.jpg";
import wedding20 from "@/assets/wedding-20.jpg";
import wedding21 from "@/assets/wedding-21.jpg";
import wedding22 from "@/assets/wedding-22.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import arranjo1 from "@/assets/arranjo-1.jpg";
import arranjo2 from "@/assets/arranjo-2.jpg";
import arranjo3 from "@/assets/arranjo-3.jpg";
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const INITIAL_VISIBLE_COUNT = 6;

const galleryImages = [
  // Casamentos - 22 fotos do portfolio
  { src: wedding1, alt: "Mesa de noivos com decoração elegante", category: "Casamentos" },
  { src: wedding2, alt: "Centros de mesa com flores brancas e eucalipto", category: "Casamentos" },
  { src: wedding3, alt: "Arranjos de gipsófila e eucalipto", category: "Casamentos" },
  { src: wedding4, alt: "Decoração outonal com romãs e flores secas", category: "Casamentos" },
  { src: wedding5, alt: "Centro de mesa criativo com gomas", category: "Casamentos" },
  { src: wedding6, alt: "Arco floral exterior com tecido terracota", category: "Casamentos" },
  { src: wedding7, alt: "Placa de boas-vindas decorada com flores", category: "Casamentos" },
  { src: wedding8, alt: "Centro de mesa azul e branco com velas", category: "Casamentos" },
  { src: wedding9, alt: "Corredor de flores com hortênsias coloridas", category: "Casamentos" },
  { src: wedding10, alt: "Arranjo alto com hortênsias em estrutura dourada", category: "Casamentos" },
  { src: wedding11, alt: "Corredor de cerimónia com lanternas e flores", category: "Casamentos" },
  { src: wedding12, alt: "Detalhe de banco decorado com eucalipto", category: "Casamentos" },
  { src: wedding13, alt: "Mesa de cerimónia com arranjo rústico", category: "Casamentos" },
  { src: wedding14, alt: "Mesa de noivos com jarras e copos de leite", category: "Casamentos" },
  { src: wedding15, alt: "Mesa rústica com flores coloridas em jarras", category: "Casamentos" },
  { src: wedding16, alt: "Cerimónia ao ar livre com arco florido", category: "Casamentos" },
  { src: wedding17, alt: "Placa de boas-vindas com eucalipto e gipsófila", category: "Casamentos" },
  { src: wedding18, alt: "Vespa vintage decorada com hortênsias", category: "Casamentos" },
  { src: wedding19, alt: "Mesa redonda com centro de hortênsias", category: "Casamentos" },
  { src: wedding20, alt: "Mesa de entrada com arranjo de rosas e velas", category: "Casamentos" },
  { src: wedding21, alt: "Noiva com bouquet de flores brancas", category: "Casamentos" },
  { src: wedding22, alt: "Noiva com bouquet de rosas cor-de-rosa", category: "Casamentos" },
  // Eventos empresariais - 5 fotos
  { src: event1, alt: "Arco de eucalipto e gipsófila com velas", category: "Eventos" },
  { src: event2, alt: "Mesa de buffet com arranjos florais elegantes", category: "Eventos" },
  { src: event3, alt: "Moldura decorativa com girassóis e eucalipto", category: "Eventos" },
  { src: event4, alt: "Centro de mesa com flores secas e velas", category: "Eventos" },
  { src: event5, alt: "Decoração de mesa com flores em tons terrosos", category: "Eventos" },
  // Arranjos - 3 fotos
  { src: arranjo1, alt: "Bouquet com rosas e dálias em tons rosa e bordô", category: "Arranjos" },
  { src: arranjo2, alt: "Bouquet rústico com crisântemos e eucalipto", category: "Arranjos" },
  { src: arranjo3, alt: "Bouquet campestre com margaridas e craspédias", category: "Arranjos" },
];

const categories = ["Todos", "Casamentos", "Arranjos", "Eventos"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredImages =
    activeCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const visibleImages = showAll 
    ? filteredImages 
    : filteredImages.slice(0, INITIAL_VISIBLE_COUNT);

  const hasMoreImages = filteredImages.length > INITIAL_VISIBLE_COUNT;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goToPrev = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
    );
  const goToNext = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredImages.length : null
    );

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
            Galeria
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Os Nossos Trabalhos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Cada criação é única, feita com amor e atenção aos mais pequenos detalhes.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <p className="text-primary-foreground font-medium text-lg">{image.alt}</p>
                  <span className="text-primary-foreground/80 text-sm">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMoreImages && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="gap-2"
            >
              {showAll ? (
                <>
                  Ver Menos <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Ver Mais ({filteredImages.length - INITIAL_VISIBLE_COUNT} fotos) <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/aminhaflorinha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            <span>📸</span>
            Veja mais no nosso Instagram @aminhaflorinha
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={filteredImages[lightboxIndex].src}
            alt={filteredImages[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-primary-foreground font-medium">{filteredImages[lightboxIndex].alt}</p>
            <p className="text-primary-foreground/60 text-sm">{filteredImages[lightboxIndex].category}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
