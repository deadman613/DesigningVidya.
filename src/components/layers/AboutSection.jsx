import { Award, Users, Briefcase, Trophy, Monitor, GraduationCap } from "lucide-react";
import styles from "./AboutSection.module.css";

const highlights = [
  { icon: Award, title: "8+ Years", desc: "Industry Experience" },
  { icon: Users, title: "200+ Faculty", desc: "Expert Mentors" },
  { icon: Briefcase, title: "1,500+", desc: "Students Placed" },
  { icon: Trophy, title: "10+", desc: "Industry Awards" },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      {/* Background Elements */}
      <div className={styles.backgroundGradient} />
      
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left - Content */}
          <div className={styles.leftContent}>
            <div>
              <button className={styles.label}>
                About Us
              </button>
              <h2 className={styles.heading}>
                <span className={styles.headingWhite}>Shaping Creative</span>
                <br />
                <span className={styles.headingGradient}>Futures Since 2018</span>
              </h2>
              <p className={styles.description}>
                Designing Vidya is India&apos;s leading animation, VFX, gaming, and multimedia training institute. 
                With over 25 years of excellence, we&apos;ve been at the forefront of creative education, 
                producing industry-ready professionals who work in top studios worldwide.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={`${styles.featureIconWrapper} ${styles.featureIconPrimary}`}>
                  <Monitor className={`${styles.featureIcon} ${styles.iconPrimary}`} />
                </div>
                <div>
                  <h4 className={styles.featureTitle}>State-of-the-Art Infrastructure</h4>
                  <p className={styles.featureDesc}>Industry-standard labs with latest software and hardware for hands-on learning.</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={`${styles.featureIconWrapper} ${styles.featureIconAccent}`}>
                  <GraduationCap className={`${styles.featureIcon} ${styles.iconAccent}`} />
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Industry-Experienced Faculty</h4>
                  <p className={styles.featureDesc}>Learn from professionals who have worked on Hollywood blockbusters and AAA games.</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={`${styles.featureIconWrapper} ${styles.featureIconNeon}`}>
                  <Briefcase className={`${styles.featureIcon} ${styles.iconNeon}`} />
                </div>
                <div>
                  <h4 className={styles.featureTitle}>100% Placement Assistance</h4>
                  <p className={styles.featureDesc}>Strong industry connections ensuring excellent job opportunities for all students.</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaWrapper}>
              <button className={styles.ctaButton}>
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className={styles.statsGrid}>
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={styles.statCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.statIconWrapper}>
                  <item.icon className={styles.statIcon} />
                </div>
                <h3 className={styles.statTitle}>{item.title}</h3>
                <p className={styles.statDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
