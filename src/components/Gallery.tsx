import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: gallery1, alt: "Bouquet de rosas cor-de-rosa", category: "Arranjos" },
  { src: gallery2, alt: "Arco de casamento com flores", category: "Casamentos" },
  { src: gallery3, alt: "Centro de mesa com velas e rosas", category: "Eventos" },
  { src: gallery4, alt: "Peónia branca em detalhe", category: "Arranjos" },
  { src: gallery5, alt: "Bouquet de noiva rústico", category: "Casamentos" },
  { src: gallery6, alt: "Arranjo em jarra de vidro", category: "Arranjos" },
];

const categories = ["Todos", "Casamentos", "Arranjos", "Eventos"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
                onClick={() => setActiveCategory(category)}
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
          {filteredImages.map((image, index) => (
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
