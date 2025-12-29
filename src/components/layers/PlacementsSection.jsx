import styles from "./PlacementsSection.module.css";

const companies = [
  "Prime Focus", "DNEG", "Red Chillies VFX", "Technicolor", "MPC", 
  "Framestore", "Pixar", "DreamWorks", "Ubisoft", "EA Games",
  "Rockstar Games", "Sony Pictures", "Walt Disney", "Netflix", "Amazon Studios"
];

export default function PlacementsSection() {
  return (
    <section id="placements" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>
            Our Recruiters
          </span>
          <h2 className={styles.heading}>
            <span className={styles.headingWhite}>Students Get Placed at</span>
            <br />
            <span className={styles.headingGradient}>World&apos;s Top Studios</span>
          </h2>
          <p className={styles.description}>
            Our alumni work at leading VFX studios, gaming companies, and creative agencies worldwide
          </p>
        </div>
      </div>

      {/* Scrolling Logos - Full Width Edge to Edge */}
      <div className={styles.marqueeWrapper}>
        {/* First Row */}
        <div className={styles.marqueeRow}>
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div key={`${company}-${index}`} className={styles.companyBadge}>
              <span className={styles.companyName}>{company}</span>
            </div>
          ))}
        </div>

        {/* Second Row - Reverse Direction */}
        <div className={styles.marqueeRowReverse}>
          {[...companies].reverse().concat([...companies].reverse()).concat([...companies].reverse()).map((company, index) => (
            <div key={`${company}-rev-${index}`} className={styles.companyBadge}>
              <span className={styles.companyName}>{company}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className={styles.container}>
        <div className={styles.statsWrapper}>
          <div className={styles.statItem}>
            <p className={styles.statValue}>98%</p>
            <p className={styles.statLabel}>Placement Rate</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>₹8 LPA</p>
            <p className={styles.statLabel}>Avg. Starting Salary</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>500+</p>
            <p className={styles.statLabel}>Hiring Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
