// PlacementsSection.jsx
import styles from "./PlacementsSection.module.css";

// Using well-known company logos from online sources
const companyLogos = [
  {
    name: "prime-vedio",
    src: "/uploads/dv-logo/amazon_prime_video-logo-brandlogo.net.png"
  },
  {
    name: "bbc",
    src: "/uploads/dv-logo/BBC.png"
  },
  {
    name: "indian-today",
    src: "/uploads/dv-logo/India Today.png"
  },
  {
    name: "jio-star",
    src: "/uploads/dv-logo/JS (1).png"
  },
  {
    name: "Max",
    src: "/uploads/dv-logo/Max.png"
  },
  {
    name: "meta",
    src: "/uploads/dv-logo/Meta.png"
  },
  {
    name: "microsoft",
    src: "/uploads/dv-logo/microsoft-logo_brandlogos.net_y0fjb.png"
  },
  {
    name: "mx",
    src: "/uploads/dv-logo/MTV.png"
  },
  {
    name: "reliance",
    src: "/uploads/dv-logo/Reliance.png"
  },
  {
    name: "vediacom",
    src: "/uploads/dv-logo/Viacom 18.png"
  },
  {
    name: "youtube",
    src: "/uploads/dv-logo/youtube_icon_2013-logo_brandlogos.net_m9dkf.png"
  },
  {
    name: "zee",
    src: "/uploads/dv-logo/Zee.png"
  }
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
          <button className={styles.label}>
            Our Recruiters
          </button>
          <h2 className={styles.heading}>
            <span className={styles.headingWhite}>Built for the Industry</span>
            <br />
            <span className={styles.headingGradient}>You Want to Work In</span>
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
              <img
                key={logo.name}
                className={styles.logoImg}
                src={logo.src}
                alt={`${logo.name} logo`}
                loading="lazy"
              />
            ))}
          </div>

          <div className={styles.logosRow}>
            {secondRow.map((logo) => (
              <img
                key={logo.name}
                className={styles.logoImg}
                src={logo.src}
                alt={`${logo.name} logo`}
                loading="lazy"
              />
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