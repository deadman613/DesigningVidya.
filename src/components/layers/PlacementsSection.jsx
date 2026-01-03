import styles from "./PlacementsSection.module.css";

const companyLogos = [
  {
    name: "Netflix",
    src: "https://cdn.worldvectorlogo.com/logos/netflix-4.svg",
  },
  {
    name: "Amazon",
    src: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg",
  },
  {
    name: "Walt Disney",
    src: "https://cdn.worldvectorlogo.com/logos/disney-2.svg",
  },
  {
    name: "Sony",
    src: "https://cdn.worldvectorlogo.com/logos/sony-2.svg",
  },
  {
    name: "Ubisoft",
    src: "https://cdn.worldvectorlogo.com/logos/ubisoft.svg",
  },
  {
    name: "EA Games",
    src: "https://cdn.worldvectorlogo.com/logos/ea-sports-1.svg",
  },
  {
    name: "Rockstar Games",
    src: "https://cdn.worldvectorlogo.com/logos/rockstar-games.svg",
  },
  {
    name: "Pixar",
    src: "https://cdn.worldvectorlogo.com/logos/pixar.svg",
  },
  {
    name: "DreamWorks",
    src: "https://cdn.worldvectorlogo.com/logos/dreamworks.svg",
  },
  {
    name: "DNEG",
    src: "https://cdn.worldvectorlogo.com/logos/dneg.svg",
  },
  {
    name: "Technicolor",
    src: "https://cdn.worldvectorlogo.com/logos/technicolor.svg",
  },
  {
    name: "Framestore",
    src: "https://cdn.worldvectorlogo.com/logos/framestore.svg",
  },
];

export default function PlacementsSection() {
  const midpoint = Math.ceil(companyLogos.length / 2);
  const firstRow = companyLogos.slice(0, midpoint);
  const secondRow = companyLogos.slice(midpoint);

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

      {/* Company Logos (2 lines) */}
      <div className={styles.container}>
        <div className={styles.logosWrapper} aria-label="Recruiter company logos">
          <div className={styles.logosRow}>
            {firstRow.map((logo) => (
              <div key={logo.name} className={styles.logoBadge}>
                <img
                  className={styles.logoImg}
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className={styles.logosRow}>
            {secondRow.map((logo) => (
              <div key={logo.name} className={styles.logoBadge}>
                <img
                  className={styles.logoImg}
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
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
