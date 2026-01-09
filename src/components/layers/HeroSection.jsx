"use client";
import { openApplyNowForm } from "@/lib/apply-now";

import { ArrowRight, MessageCircle } from "lucide-react";
import styles from "./HeroSection.module.css";


export default function HeroSection() {


  return (
    <section className={styles.section}>
      {/* Pure Black Background with Geometric Shapes */}
      <div className={styles.background}>
        {/* Purple/Magenta Geometric Shapes */}
        <div className={styles.shapeSquare1} />
        <div className={styles.shapeSquare2} />
        <div className={styles.shapeSquare3} />
        <div className={styles.glowCircle1} />
        <div className={styles.glowCircle2} />
        {/* Triangle shapes */}
        <svg className={styles.triangleSvg1} viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className={styles.triangleSvg2} viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        {/* Dots pattern */}
        <div className={styles.dotsGrid}>
          {[...Array(24)].map((_, i) => (
            <div key={i} className={styles.dot} />
          ))}
        </div>
        {/* Cross/Plus shapes */}
        <div className={`${styles.plusSign} ${styles.plusSign1}`}>+</div>
        <div className={`${styles.plusSign} ${styles.plusSign2}`}>+</div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            {/* Main Heading */}
            <h1 className={styles.mainHeading}>
              Build a Career in Creative, Media & Technology — Not Just Skills
            </h1>
            <p className={styles.description}>
              Trusted by 25,000+ aspiring creators. We don&apos;t just teach software. We mentor you through real
              projects, portfolios, and career paths that actually get you hired.
            </p>

            {/* CTA Button */}
            <div className={styles.ctaWrapper}>
              <button
                className={styles.ctaButtonPrimary}
                onClick={openApplyNowForm}
              >
                Get Free Career Guidance
                <ArrowRight className={styles.ctaIcon} />
              </button>
              <a
                href="https://wa.me/917827250823"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonSecondary}
              >
                <MessageCircle className={styles.ctaIcon} />
                Talk to a Career Expert
              </a>
            </div>

            <p className={styles.trustLine}>Trusted by 25,000+ aspiring creators</p>
          </div>

          {/* Right - Enquiry */}
          <div className={styles.rightContent}>
            <button
              type="button"
              className={styles.mobileFormButton}
              onClick={openApplyNowForm}
            >
              Request Call Back
              <ArrowRight className={styles.ctaIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
