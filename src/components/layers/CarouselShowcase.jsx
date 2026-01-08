"use client";

import { FeaturedCarousel } from "@/components/layers/ui/FeaturedCarousel";

const slides = [
  {
    id: 1,
    title: "Mythical Quest",
    subtitle: "Cinematic creature animation in Unreal",
    category: "3D Animation",
    image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Cosmic Warfare",
    subtitle: "Procedural VFX with Houdini",
    category: "VFX",
    image: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Neon Cityscape",
    subtitle: "Motion design reel with cel transitions",
    category: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Fantasy Realm",
    subtitle: "Environment art for AAA RPGs",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Brand Identity",
    subtitle: "Minimal logo + system for fintech",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Mobile App UI",
    subtitle: "Product design sprint prototype",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&q=80&auto=format&fit=crop",
  },
];

export default function CarouselShowcase() {
  return (
    <section className="relative bg-neutral-950 text-white py-16 md:py-24 z-0" id="carousel">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-6 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Student Highlights</p>
            <h2 className="text-3xl md:text-4xl font-black mt-2 leading-tight">
              Featured Work from Our Creators
            </h2>
            <p className="text-neutral-300 mt-3 max-w-2xl">
              A fast-moving reel of the projects our students build across animation, VFX, gaming, motion, and design.
              Swipe to explore the breadth of what you can ship here.
            </p>
          </div>
          <div className="hidden md:block text-right text-sm text-neutral-400 max-w-xs">
            Looping autoplay. Hover to pause. Click a card to focus a slide. Optimized with Embla for buttery smooth scrolling.
          </div>
        </div>

        <FeaturedCarousel items={slides} autoplayDelay={4200} />
      </div>
    </section>
  );
}
