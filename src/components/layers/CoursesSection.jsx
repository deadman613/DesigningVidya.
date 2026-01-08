"use client";

import { useState } from "react";
import Image from "next/image";
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
    imageSrc: "/uploads/web%20p/rh31c6rw5qyj7tha0kv6.webp",
    imageAlt: "Animation course",
    description:
      "Bring stories to life with our animation course. Learn 2D animation, character animation, storyboarding, and animation principles using industry-standard tools. This course is ideal for beginners who want a career in animation.",
    gradient: styles.gradientPrimaryNeon,
    courses: ["animation course", "2D animation", "character animation"],
  },
  {
    icon: Sparkles,
    title: "VFX",
    imageSrc:
      "/uploads/web%20p/ghxqqxlgematwrkjrywf.webp",
    imageAlt: "VFX course",
    description:
      "Learn professional VFX techniques and visual effects that go beyond the camera. Our VFX course covers green screen, compositing, CG integration, and cinematic visual effects used in films and digital media.",
    gradient: styles.gradientNeonCyber,
    courses: ["VFX course", "visual effects", "green screen", "compositing"],
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    imageSrc:
      "/uploads/web%20p/g5qhpmctapzpwjjgpmlf.webp",
    imageAlt: "Motion graphics course",
    description:
      "Master motion graphics design and create visuals that move and communicate clearly. This motion graphics course teaches kinetic typography, visual storytelling, logo animation, and brand videos for digital platforms.",
    gradient: styles.gradientPrimaryElectric,
    courses: ["motion graphics course", "motion graphics design", "logo animation"],
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    imageSrc:
      "/uploads/web%20p/uw5apddwgglibwox2j9n.webp",
    imageAlt: "Graphic designing course",
    description:
      "Learn graphic designing from scratch and create visuals that build strong brands. This graphic design course covers branding, logo design, layout design, typography, and visual identity using professional design tools.",
    gradient: styles.gradientAccentVibrant,
    courses: ["graphic designing course", "graphic design course", "logo design", "branding"],
  },
  {
    icon: Film,
    title: "Video Editing",
    imageSrc:
      "/uploads/web%20p/yo98tajyhjnsd4rr9fex.webp",
    imageAlt: "Video editing course",
    description:
      "Master video editing and turn raw footage into professional videos. This video editing course teaches story editing, transitions, sound design, color correction, and editing workflows used for YouTube, ads, and films.",
    gradient: styles.gradientVibrantPrimary,
    courses: ["video editing course", "professional video editing", "color correction", "sound design"],
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
          <button className={styles.label}>
            Our Programs
          </button>
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
                <div className={styles.cardMedia}>
                  <Image
                    src={course.imageSrc}
                    alt={course.imageAlt}
                    fill
                    className={styles.cardMediaImage}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <button
                  type="button"
                  className={styles.cardHead}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
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
