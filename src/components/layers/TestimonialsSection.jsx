"use client";

import { useState } from "react";
import { Quote, ChevronDown } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

const badges = [
  "98% project completion",
  "Global cohorts in 12 cities",
  "Mentors from product teams",
];

const testimonials = [
  {
    name: "Arjun Nair",
    title: "Compositor, VFX",
    location: "Mumbai",
    tag: "Film & OTT",
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
    quote:
      "The motion briefs were nothing like templates—real brand problems, real constraints. Learned to pitch boards, animate clean, and hand off with tidy files.",
    bottomPrimary: "Booked 5 freelance gigs",
    bottomSecondary: "Motion Sprint",
  },
];

export default function TestimonialsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.backdrop} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>People-first outcomes</span>
          <h2 className={styles.heading}>Stories from the Designing Vidya community</h2>
          <p className={styles.subhead}>
            Curated notes from learners who tested bold ideas, shipped real work, and grew in public with mentors who tell it straight.
          </p>

          <div className={styles.badgeRow}>
            {badges.map((badge) => (
              <span key={badge} className={styles.badgeChip}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {testimonials.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={item.name} className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}>
                <button
                  type="button"
                  className={styles.cardTop}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.avatar}>{item.name.charAt(0)}</div>
                  <div className={styles.meta}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.role}>{item.title}</div>
                  </div>
                  <ChevronDown className={`${styles.toggleIcon} ${isOpen ? styles.toggleIconOpen : ""}`} />
                </button>

                <div className={`${styles.cardBody} ${isOpen ? styles.cardBodyOpen : ""}`}>
                  <div className={styles.metaRow}>
                    <div className={styles.location}>{item.location}</div>
                    <span className={styles.tag}>{item.tag}</span>
                  </div>
                  <div className={styles.quoteRow}>
                    <Quote className={styles.quoteMark} />
                    <p className={styles.quote}>{item.quote}</p>
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.footerPrimary}>{item.bottomPrimary}</span>
                    <span className={styles.footerSecondary}>{item.bottomSecondary}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
