"use client";
import { useEffect, useState, useRef } from "react";
import { Calendar, Users, GraduationCap, Trophy, Briefcase, Target } from "lucide-react";
import styles from "./StatsSection.module.css";

const stats = [
  { icon: Calendar, value: 2018, suffix: "", label: "Established Since", prefix: "" },
  { icon: Users, value: 1500, suffix: "+", label: "Alumni Placed", prefix: "" },
  { icon: GraduationCap, value: 100, suffix: "+", label: "Expert Mentors", prefix: "" },
  { icon: Trophy, value: 10, suffix: "+", label: "Industry Awards", prefix: "" },
  { icon: Briefcase, value: 50, suffix: "+", label: "Hiring Partners", prefix: "" },
  { icon: Target, value: 98, suffix: "%", label: "Success Rate", prefix: "" },
];

function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

function StatCard({ stat, index, isVisible }) {
  const count = useCountUp(stat.value, 2500, isVisible);

  return (
    <div
      className={styles.statCard}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.iconWrapper}>
        <stat.icon className={styles.icon} />
      </div>
      <div className={styles.statValue}>
        {stat.prefix}
        <span className={styles.valueGradient}>{isVisible ? count : 0}</span>
        {stat.suffix}
      </div>
      <p className={styles.statLabel}>{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Background */}
      <div className={styles.backgroundGradient} />
      <div className={styles.glowCircle1} />
      <div className={styles.glowCircle2} />
      
      {/* Top border glow */}
      <div className={styles.topBorder} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <button className={styles.label}>
            Our Achievements
          </button>
          <h2 className={styles.heading}>
            <span className={styles.headingWhite}>Numbers That</span>
            <span className={styles.headingGradient}> Speak Success</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div 
          className={`${styles.statsGrid} ${isVisible ? styles.statsGridVisible : styles.statsGridHidden}`}
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
      
      {/* Bottom border glow */}
      <div className={styles.bottomBorder} />
    </section>
  );
}
