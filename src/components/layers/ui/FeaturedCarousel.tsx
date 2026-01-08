import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselItem {
  id: string | number;
  image: string;
  title: string;
  subtitle?: string;
  category?: string;
}

interface FeaturedCarouselProps {
  items: CarouselItem[];
  autoplayDelay?: number;
  className?: string;
}

export function FeaturedCarousel({
  items,
  autoplayDelay = 4000,
  className,
}: FeaturedCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={cn('relative group z-0 isolation-isolate', className)}>
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-2xl bg-neutral-950 z-0" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 first:pl-0"
            >
              <div className="relative overflow-hidden rounded-xl glass-card group/card cursor-pointer h-full">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative bg-neutral-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                    priority={false}
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500 ease-out">
                  {item.category && (
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary mb-2">
                      {item.category}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>
                  )}
                </div>

                {/* Category Badge (visible when not hovered) */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full glass-card text-xs font-semibold text-foreground group-hover/card:opacity-0 transition-opacity duration-300">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-card opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-card opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              index === selectedIndex
                ? 'bg-primary w-8 shadow-md shadow-primary/30'
                : 'bg-muted hover:bg-muted-foreground w-2'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
