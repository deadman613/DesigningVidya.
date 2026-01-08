"use client";

import { useEffect, useMemo, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Arjun Nair",
    title: "Compositor, VFX",
    location: "Mumbai",
    tag: "Film & OTT",
    rating: 5,
    quote:
      "I joined to fix my roto and keying fundamentals. Three months later I was delivering clean comps for a streaming series. The mentor notes felt like a studio dailies room.",
    bottomPrimary: "Onboarded at Red Chillies",
    bottomSecondary: "VFX Pro Track",
  },
  {
    name: "Riya Kulkarni",
    title: "Video Editor",
    location: "Bengaluru",
    tag: "YouTube & Ads",
    rating: 5,
    quote:
      "Tight turnarounds used to break me. The edit labs drilled pacing, audio polish, and feedback loops. Now I ship 3 edits a week without losing quality.",
    bottomPrimary: "3x faster delivery",
    bottomSecondary: "Editing Accelerator",
  },
  {
    name: "Sohan D’Souza",
    title: "Motion Designer",
    location: "Goa",
    tag: "Motion & Titles",
    rating: 5,
    quote:
      "The motion briefs were nothing like templates—real brand problems, real constraints. Learned to pitch boards, animate clean, and hand off with tidy files.",
    bottomPrimary: "Booked 5 freelance gigs",
    bottomSecondary: "Motion Sprint",
  },
  {
    name: "Meera Iyer",
    title: "Graphic Designer",
    location: "Chennai",
    tag: "Brand & Social",
    rating: 5,
    quote:
      "The critique culture was the biggest upgrade. I learned how to explain decisions, iterate fast, and keep my typography consistent across a full campaign.",
    bottomPrimary: "Portfolio refresh in 21 days",
    bottomSecondary: "Brand Foundations",
  },
  {
    name: "Kabir Singh",
    title: "Junior Animator",
    location: "Delhi",
    tag: "2D & Story",
    rating: 4,
    quote:
      "I used to over-animate everything. The assignments taught restraint—timing, spacing, and clean arcs. My shots finally feel intentional.",
    bottomPrimary: "First studio test cleared",
    bottomSecondary: "Animation Lab",
  },
  {
    name: "Ananya Shah",
    title: "Content Creator",
    location: "Pune",
    tag: "Short-form",
    rating: 5,
    quote:
      "We didn’t just learn tools—we learned a workflow. From story beats to sound design, my reels started retaining viewers till the end.",
    bottomPrimary: "Avg watch time up 42%",
    bottomSecondary: "Creator Editing",
  },
  {
    name: "Farhan Qureshi",
    title: "3D Generalist",
    location: "Hyderabad",
    tag: "3D & Lighting",
    rating: 4,
    quote:
      "Lighting reviews were brutal (in a good way). I fixed exposure, values, and render passes. Now my renders look production-ready.",
    bottomPrimary: "Improved render quality",
    bottomSecondary: "3D Pipeline",
  },
  {
    name: "Priya Menon",
    title: "UI Designer",
    location: "Kochi",
    tag: "UI & Systems",
    rating: 5,
    quote:
      "The mentor feedback was specific—spacing, hierarchy, and component logic. My designs stopped being pretty screens and started becoming systems.",
    bottomPrimary: "Designed a full design system",
    bottomSecondary: "UI Systems",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const total = testimonials.length;
  const active = testimonials[activeIndex];

  const goPrev = () => setActiveIndex((current) => (current - 1 + total) % total);
  const goNext = () => setActiveIndex((current) => (current + 1) % total);
  const goTo = (index) => setActiveIndex(index);

  useEffect(() => {
    const resolveCardsPerView = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) return 3;
      if (window.matchMedia("(min-width: 768px)").matches) return 2;
      return 1;
    };

    const update = () => setCardsPerView(resolveCardsPerView());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const visibleTestimonials = useMemo(() => {
    const slice = [];
    const count = Math.min(cardsPerView, total);
    for (let offset = 0; offset < count; offset += 1) {
      const index = (activeIndex + offset) % total;
      slice.push({ index, data: testimonials[index] });
    }
    return slice;
  }, [activeIndex, cardsPerView, total]);

  return (
    <section className={styles.section}>
      <div className={styles.backdrop} />

      <div className={styles.container}>
        <div className={styles.header}>
          <button className={styles.label}>Testimonials</button>
          <h2 className={styles.heading}>
            <span className={styles.headingWhite}>What Our Students Say</span>
            <br />
            <span className={styles.headingGradient}>About Designing Vidya</span>
          </h2>
          <p className={styles.description}>
            Curated notes from learners who tested bold ideas, shipped real work, and grew in public with mentors who tell it straight.
          </p>
        </div>

        <div className={styles.carousel} aria-roledescription="carousel">
          <div className={styles.cardsViewport} aria-live="polite">
            <button
              type="button"
              className={`${styles.navButton} ${styles.sideNav} ${styles.sideNavLeft}`}
              onClick={goPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className={styles.navIcon} />
            </button>

            <div className={styles.cardsRow} style={{ gridTemplateColumns: `repeat(${visibleTestimonials.length}, minmax(0, 1fr))` }}>
            {visibleTestimonials.map(({ index: itemIndex, data }) => (
              <article key={`${itemIndex}-${data.name}`} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.stars} aria-label={`${data.rating ?? 5} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, starIndex) => {
                      const filled = starIndex < (data.rating ?? 5);
                      return <Star key={starIndex} className={`${styles.star} ${filled ? styles.starFilled : ""}`} />;
                    })}
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.tag}>{data.tag}</span>
                    <span className={styles.location}>{data.location}</span>
                  </div>
                </div>

                <div className={styles.quoteBlock}>
                  <Quote className={styles.quoteMark} aria-hidden="true" />
                  <p className={styles.quote}>{data.quote}</p>
                </div>

                <div className={styles.authorRow}>
                  <div className={styles.avatar} aria-hidden="true">
                    {data.name.charAt(0)}
                  </div>
                  <div className={styles.meta}>
                    <div className={styles.name}>{data.name}</div>
                    <div className={styles.role}>{data.title}</div>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.footerPrimary}>{data.bottomPrimary}</span>
                  <span className={styles.footerSecondary}>{data.bottomSecondary}</span>
                </div>
              </article>
            ))}
            </div>

            <button
              type="button"
              className={`${styles.navButton} ${styles.sideNav} ${styles.sideNavRight}`}
              onClick={goNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className={styles.navIcon} />
            </button>
          </div>

          <div className={styles.carouselControls}>
            <div className={styles.dots} role="tablist" aria-label="Testimonials">
              {testimonials.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.name}
                    type="button"
                    className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
                    onClick={() => goTo(index)}
                    aria-label={`Go to testimonial ${index + 1} of ${total}`}
                    aria-current={isActive ? "true" : undefined}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
