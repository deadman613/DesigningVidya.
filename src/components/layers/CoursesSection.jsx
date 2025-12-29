"use client";

import { useState } from "react";
import { 
  Film, 
  Sparkles, 
  Palette, 
  MonitorPlay, 
  Wand2,
  ArrowRight 
} from "lucide-react";
import styles from "./CoursesSection.module.css";

const courseCategories = [
  {
    icon: MonitorPlay,
    title: "Animation",
    description: "Bring stories to life through animation. Learn the art of movement, storytelling, and character animation using industry-standard tools.",
    gradient: styles.gradientPrimaryNeon,
    courses: ["Character Animation", "Storyboarding", "Rigging"],
  },
  {
    icon: Sparkles,
    title: "VFX",
    description: "Create what the camera can’t capture. Master visual effects from green screen to cinematic compositing and make imagination believable.",
    gradient: styles.gradientNeonCyber,
    courses: ["Green Screen", "Compositing", "CG Integration"],
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    description: "Design that moves. Messages that stick. Combine design, animation, and storytelling to create powerful motion visuals for digital media.",
    gradient: styles.gradientPrimaryElectric,
    courses: ["Kinetic Typography", "Visual Storytelling", "Brand Spots"],
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description: "Design visuals that speak for brands. Learn fundamentals of design, branding, and visual communication to build systems that get noticed.",
    gradient: styles.gradientAccentVibrant,
    courses: ["Branding", "Layout & Typography", "Visual Identity"],
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Turn raw footage into impactful stories. Edit videos with pacing, emotion, and pro workflows used across YouTube, ads, and films.",
    gradient: styles.gradientVibrantPrimary,
    courses: ["Story Editing", "Transitions & FX", "Sound & Color"],
  },
];

export default function CoursesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="courses" className={styles.section}>
      {/* Background */}
      <div className={styles.backgroundGlow} />
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>
            Our Programs
          </span>
          <h2 className={styles.heading}>
            <span className={styles.headingWhite}>Kickstart Your Career</span>
            <br />
            <span className={styles.headingGradient}>Choose Your Path</span>
          </h2>
          <p className={styles.description}>
            Industry-aligned courses designed to transform your passion into a thriving career
          </p>
        </div>

        {/* Course Grid */}
        <div className={styles.courseGrid}>
          {courseCategories.map((course, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={course.title}
                className={`${styles.courseCard} ${isOpen ? styles.courseCardOpen : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  type="button"
                  className={styles.cardHead}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className={`${styles.iconWrapper} ${course.gradient}`}>
                    <course.icon className={styles.icon} />
                  </div>
                  <div className={styles.headings}>
                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    <span className={styles.mobileSubline}>Tap to see details</span>
                  </div>
                  <ArrowRight className={`${styles.toggleIcon} ${isOpen ? styles.toggleIconOpen : ""}`} />
                </button>

                <div className={`${styles.cardBody} ${isOpen ? styles.cardBodyOpen : ""}`}>
                  <p className={styles.courseDesc}>{course.description}</p>

                  <div className={styles.skillsWrapper}>
                    {course.courses.map((skill) => (
                      <span key={skill} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className={styles.courseBtn}>
                    Explore Courses
                    <ArrowRight className={styles.btnIcon} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
