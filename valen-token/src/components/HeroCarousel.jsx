import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "AHORA PUEDES INVERTIR EN TU DEPORTISTA FAVORITO",
    highlight: "DESDE USD $20",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QsGoBdMDZ2IgZnN5OUHEnu3W3CyMlg.png",
  },
  {
    id: 2,
    title: "FORMAR PARTE DE SU COMUNIDAD Y ACCEDER A",
    highlight: "EXPERIENCIAS, BENEFICIOS Y CONTENIDOS EXCLUSIVOS",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QsGoBdMDZ2IgZnN5OUHEnu3W3CyMlg.png",
  },
  {
    id: 3,
    title: "GANA CONLA REVALORIZACIÓN DE LOS TOKENS Y",
    highlight: "VÉNDELOS CUANDO QUIERAS",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QsGoBdMDZ2IgZnN5OUHEnu3W3CyMlg.png",
  },
  {
    id: 3,
    title: "BIENVENIDOS A LA REVOLUCIÓN DEL FINANCIAMIENTO DEPORTIVO.",
    highlight: "BIENVENIDOS A VALEN TOKEN",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QsGoBdMDZ2IgZnN5OUHEnu3W3CyMlg.png",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const autoplayTimer = setInterval(nextSlide, 5000);
    return () => clearInterval(autoplayTimer);
  }, []);

  return (
    <div
      // className='relative min-h-[500px] overflow-hidden pt-16 md:pt-20'
      className="relative bg-purple-700 min-h-[350px] lg:min-h-screen overflow-hidden pt-16 md:pt-20"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,26,11,1) 0%, rgba(0,77,33,1) 45%, rgba(0,179,78,1) 100%)",
      }}
    >
      {/* Flechas izquierda/derecha */}
      <div className='absolute inset-0 flex items-center justify-between px-2 md:px-4 z-20'>
        <button
          onClick={prevSlide}
          className='p-1 md:p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors'
          aria-label='Previous slide'
        >
          <ChevronLeft className='w-4 h-4 md:w-6 md:h-6' />
        </button>
        <button
          onClick={nextSlide}
          className='p-1 md:p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors'
          aria-label='Next slide'
        >
          <ChevronRight className='w-4 h-4 md:w-6 md:h-6' />
        </button>
      </div>

      {/* Slides */}
      <div className='relative h-full'>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out
            ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <div className='max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20 h-full'>
              <div className='w-full sm:w-1/2 sd:space-y-2 space-y md:space-y-2 ml-8'>
                <h1 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semi-bold leading-tight'>
                  {slide.title}
                </h1>
                <div className='space-y-2'>
                  <p className='text-[rgb(146,93,238)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
                    {slide.highlight}
                  </p>
                </div>
              </div>
            </div>
            <div className='absolute top-1/2 -translate-y-1/2 right-0 w-full md:w-1/2 h-full'>
              <img
                src={slide.image || "/placeholder.svg"}
                alt={`Slide ${slide.id}`}
                className='h-full w-full object-contain object-right-top md:object-right-center'
              />
            </div>
          </div>
          //
        ))}
      </div>

      {/* Indicadores de paginación */}
      <div className='absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center gap-2 z-20'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300
              ${
                index === currentSlide
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
