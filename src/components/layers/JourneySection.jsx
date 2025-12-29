import { MessageSquare, UserPlus, BookOpen, Trophy, Briefcase, Rocket } from "lucide-react";
import styles from "./JourneySection.module.css";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Enquire",
    description: "Connect with our counselors",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Enroll",
    description: "Complete your admission",
  },
  {
    icon: BookOpen,
    step: "03",
    title: "Learn",
    description: "Learn from industry experts",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Participate",
    description: "Join events & competitions",
  },
  {
    icon: Briefcase,
    step: "05",
    title: "Portfolio",
    description: "Build industry-ready projects",
  },
  {
    icon: Rocket,
    step: "06",
    title: "Get Placed",
    description: "Land your dream job",
  },
];

export default function JourneySection() {
  return (
    <section className={styles.section}>
      {/* Background Elements */}
      <div className={styles.topBorder} />
      <div className={styles.bottomBorder} />
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>
            Your Path to Success
          </span>
          <h2 className={styles.heading}>
            <span className={styles.headingWhite}>How Your Journey</span>
            <br />
            <span className={styles.headingGradient}>Unfolds With Us</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className={styles.stepsGrid}>
          {steps.map((item, index) => (
            <div key={item.step} className={styles.stepWrapper}>
              {/* Card */}
              <div className={styles.stepCard}>
                {/* Step Number */}
                <div className={styles.stepNumber}>
                  {item.step}
                </div>

                {/* Icon */}
                <div className={styles.iconWrapper}>
                  <item.icon className={styles.icon} />
                </div>

                {/* Content */}
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className={styles.connector} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
