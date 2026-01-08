import Header from "@/components/layers/Header";
import HeroSection from "@/components/layers/HeroSection";
import AboutSection from "@/components/layers/AboutSection";
import StatsSection from "@/components/layers/StatsSection";
import CoursesSection from "@/components/layers/CoursesSection";
import PlacementsSection from "@/components/layers/PlacementsSection";
import ShowcaseSection from "@/components/layers/ShowcaseSection";
import CarouselShowcase from "@/components/layers/CarouselShowcase";
import BlogSection from "@/components/layers/BlogSection";
import TestimonialsSection from "@/components/layers/TestimonialsSection";
import Footer from "@/components/layers/Footer";
import WhatsAppWidget from "@/components/layers/WhatsAppWidget";
import ProcessInfrastructure from "@/components/layers/ProcessInfrastructure";

export default function Home() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <Header />
      <main id="main-content" className="relative">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProcessInfrastructure />
        <TestimonialsSection />
        <CoursesSection />
        <PlacementsSection />
        <ShowcaseSection />
        <CarouselShowcase />
        <BlogSection />
        {/* <TestimonialsSection /> */}
        {/* <BranchesSection /> */}
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
