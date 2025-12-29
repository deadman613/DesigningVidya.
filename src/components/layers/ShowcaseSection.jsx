import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";
import styles from "./ShowcaseSection.module.css";

const projects = [
  {
    id: 1,
    title: "Mythical Quest",
    category: "3D Animation",
    image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&q=80",
    student: "Rahul Sharma",
  },
  {
    id: 2,
    title: "Cosmic Warfare",
    category: "VFX",
    image: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=600&q=80",
    student: "Priya Patel",
  },
  {
    id: 3,
    title: "Neon Cityscape",
    category: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    student: "Amit Kumar",
  },
  {
    id: 4,
    title: "Fantasy Realm",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b0b0b?w=600&q=80",
    student: "Sneha Gupta",
  },
  {
    id: 5,
    title: "Brand Identity",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    student: "Vikram Singh",
  },
  {
    id: 6,
    title: "Mobile App UI",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80",
    student: "Neha Verma",
  },
];

export default function ShowcaseSection() {
  return (
    <section id="showcase" className={styles.section}>
      {/* Background */}
      <div className={styles.backgroundGradient} />
      <div className={styles.glowCircle1} />
      <div className={styles.glowCircle2} />
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>
            Student Portfolio
          </span>
          <h2 className={styles.heading}>
            <span className={styles.headingWhite}>Stunning Work by</span>
            <br />
            <span className={styles.headingGradient}>Our Creative Students</span>
          </h2>
          <p className={styles.description}>
            Explore the incredible projects created by our talented students
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              {/* Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.projectImage}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 90vw"
                  priority={false}
                />
              </div>

              {/* Overlay */}
              <div className={styles.overlay} />

              {/* Content */}
              <div className={styles.content}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.studentName}>by {project.student}</p>
                
                <div className={styles.actionButtons}>
                  <button className={styles.actionBtn}>
                    <Play className={styles.actionIcon} />
                  </button>
                  <button className={styles.actionBtn}>
                    <ExternalLink className={styles.actionIcon} />
                  </button>
                </div>
              </div>

              {/* Badge */}
              <div className={styles.badge}>
                {project.category}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={styles.viewMoreWrapper}>
          <button className={styles.viewMoreBtn}>
            View Full Gallery
            <ExternalLink className={styles.viewMoreIcon} />
          </button>
        </div>
      </div>
    </section>
  );
}
