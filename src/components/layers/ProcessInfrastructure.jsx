"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Monitor,
  Video,
  Users,
  MessageSquare,
  Coffee,
  Briefcase,
} from "lucide-react";
import styles from "./ProcessInfrastructure.module.css";

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
    description: "High-spec systems tuned for VFX, design, and editing.",
  },
  {
    icon: Video,
    title: "Studio-Style Classrooms",
    description: "Immersive, production-like environments for hands-on learning.",
  },
  {
    icon: Users,
    title: "Small Batch Learning",
    description: "Focused cohorts so mentors can go deep on your work.",
  },
  {
    icon: MessageSquare,
    title: "Collaboration Zones",
    description: "Spaces built for pair sessions, critiques, and team builds.",
  },
  {
    icon: Coffee,
    title: "Creative Comforts",
    description: "Acoustic-treated rooms, lounge corners, and good lighting.",
  },
  {
    icon: Briefcase,
    title: "Real Office Vibe",
    description:
      "Processes that mirror agency and studio delivery rhythms.",
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
      <div className={styles.infraIcon} aria-hidden="true">
        <Icon className={styles.infraIconSvg} />
      </div>
      <div>
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
          <p className={styles.kicker}>Our Process</p>
          <h2 id="process-heading" className={styles.heading}>
            How We Take You from Beginner to Job-Ready Professional
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
          <p className={styles.kicker}>Our Infrastructure</p>
          <h3 className={styles.infraHeading}>
            Spaces built for real production work
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
