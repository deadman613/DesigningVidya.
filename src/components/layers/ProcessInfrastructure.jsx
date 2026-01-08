"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  Monitor,
  Video,
  Users,
  MessageSquare,
  Coffee,
  Briefcase,
} from "lucide-react";
import styles from "./ProcessInfrastructure.module.css";

const publicImage = (filename) => `/uploads/compressed/${encodeURIComponent(filename)}`;

const processSteps = [
  {
    number: "01",
    title: "Discovery & Skill Mapping",
    description:
      "We understand your background and goals to align a personalized learning path.",
  },
  {
    number: "02",
    title: "Structured Skill Training",
    description:
      "Learn fundamentals, tools, and workflows through sequenced, instructor-led sessions.",
  },
  {
    number: "03",
    title: "Real-World Projects & Mentorship",
    description:
      "Build portfolio-ready work with continuous mentor feedback and industry-style reviews.",
  },
  {
    number: "04",
    title: "Portfolio, Interview & Career Support",
    description:
      "Refine your portfolio, practice interviews, and get guided toward roles that fit you.",
  },
];

const infrastructure = [
  {
    icon: Monitor,
    title: "Modern Workstations",
    description: "Learn video editing, animation, motion graphics, and VFX on high-performance systems.",
    imageSrc: publicImage("18.webp"),
    imageAlt: "Studio workstation setup",
  },
  {
    icon: Video,
    title: "Studio-Style Classrooms",
    description: "Hands-on learning in studio-style classrooms with real creative tools.",
    imageSrc: publicImage("classes with gulshan sir.webp"),
    imageAlt: "Classroom infrastructure",
  },
  {
    icon: Users,
    title: "Small Batch Learning",
    description: "Small batches for personal attention and better learning results.",
    imageSrc: publicImage("WhatsApp Image 2026-01-04 at 10.29.19.webp"),
    imageAlt: "Students learning together",
  },
  {
    icon: MessageSquare,
    title: "Creative Collaboration Spaces",
    description: "Work together on video editing, animation, and motion graphics projects through team activities and reviews.",
    imageSrc: publicImage("WhatsApp Image 2026-01-04 at 10.29.20.webp"),
    imageAlt: "Collaboration space",
  },
  {
    icon: Coffee,
    title: "Comfortable Creative Spaces",
    description: "Well-lit rooms and calm spaces that help you focus on editing, animation, and VFX practice.",
    imageSrc: publicImage("WhatsApp Image 2026-01-04 at 10.29.21.webp"),
    imageAlt: "Comfortable creative lounge",
  },
  {
    icon: Briefcase,
    title: "Industry Work Environment",
    description:
      "Experience a real agency-style workflow that prepares you for creative industry jobs.",
    imageSrc: publicImage("WhatsApp Image 2025-03-27 at 3.42.30 PM.webp"),
    imageAlt: "Office-style environment",
  },
];

function useRevealAnimation() {
  const [visibleIndexes, setVisibleIndexes] = useState(new Set());
  const refs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const toAdd = [];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(idx)) {
              toAdd.push(idx);
              observer.unobserve(entry.target); // stop observing once visible
            }
          }
        });

        if (toAdd.length) {
          setVisibleIndexes((prev) => {
            const next = new Set(prev);
            toAdd.forEach((i) => next.add(i));
            return next;
          });
        }
      },
      { threshold: 0.2 }
    );

    observerRef.current = observer;

    // Observe any refs that already exist
    refs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const registerRef = useCallback((index) => (node) => {
    refs.current[index] = node;
    if (node && observerRef.current) {
      observerRef.current.observe(node);
    }
  }, []);

  return { registerRef, visibleIndexes };
}

function StepCard({ step, index, isVisible, registerRef }) {
  return (
    <article
      className={`${styles.stepCard} ${
        isVisible ? styles.stepCardVisible : ""
      }`}
      data-index={index}
      ref={registerRef(index)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={styles.stepContent}>
        <div className={styles.stepHeader}>
          <div className={styles.stepNumber}>{step.number}</div>
          <h3 className={styles.stepTitle}>{step.title}</h3>
        </div>
        <p className={styles.stepDesc}>{step.description}</p>
      </div>
    </article>
  );
}

function InfraCard({ item, index }) {
  const Icon = item.icon;
  return (
    <article
      className={styles.infraCard}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className={styles.infraMedia} aria-hidden="true">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          className={styles.infraMediaImage}
          sizes="(max-width: 719px) 100vw, (max-width: 1039px) 50vw, 33vw"
        />

        <div className={styles.infraBadge} aria-hidden="true">
          <Icon className={styles.infraBadgeIcon} />
        </div>
      </div>

      <div className={styles.infraBody}>
        <h4 className={styles.infraTitle}>{item.title}</h4>
        <p className={styles.infraDesc}>{item.description}</p>
      </div>
    </article>
  );
}

export default function ProcessInfrastructure() {
  const { registerRef, visibleIndexes } = useRevealAnimation();

  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className={styles.container}>
        <div className={styles.intro}>
          <button className={styles.kicker}>Our Process</button>
          <h2 id="process-heading" className={styles.heading}>
            How We Take You from Beginner to Job-<span>Ready Professional</span>
          </h2>
          <p className={styles.subheading}>
            A structured, mentor-led track that moves you from foundations to
            portfolio-ready work, then supports you through hiring.
          </p>
        </div>

        <div className={styles.gridSingle}>
          {processSteps.map((step, idx) => (
            <StepCard
              key={step.number}
              step={step}
              index={idx}
              registerRef={registerRef}
              isVisible={visibleIndexes.has(idx)}
            />
          ))}
        </div>

        <div className={styles.infraHeader}>
          <button className={styles.kicker}>Our Infrastructure</button>
          <h3 className={styles.infraHeading}>
            Our learning environment
          </h3>
        </div>

        <div className={styles.infraGrid}>
          {infrastructure.map((item, idx) => (
            <InfraCard key={item.title} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
