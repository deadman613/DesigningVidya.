import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import styles from "./BlogSection.module.css";

const blogPosts = [
  {
    title: "The Future of AI in Animation",
    excerpt: "Discover how AI is revolutionizing the animation industry...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    category: "Industry Trends",
    date: "Dec 20, 2025",
  },
  {
    title: "Student Spotlight: Rahul's Journey",
    excerpt: "From beginner to VFX artist at a top studio...",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&q=80",
    category: "Success Stories",
    date: "Dec 18, 2025",
  },
  {
    title: "Top 10 Motion Graphics Tools",
    excerpt: "Master these essential tools for motion design...",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    category: "Tips & Tutorials",
    date: "Dec 15, 2025",
  },
  {
    title: "Students Win Animation Award 2025",
    excerpt: "Our students bagged top honors at the festival...",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&q=80",
    category: "News",
    date: "Dec 12, 2025",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className={styles.section}>
      {/* Background */}
      <div className={styles.backgroundGradient} />
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.label}>
              Latest Updates
            </span>
            <h2 className={styles.heading}>
              <span className={styles.headingWhite}>News &</span>
              <span className={styles.headingGradient}> Insights</span>
            </h2>
          </div>
          <button className={styles.viewAllBtn}>
            View All
            <ArrowRight className={styles.btnIcon} />
          </button>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article key={post.title} className={styles.blogCard}>
              {/* Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className={styles.blogImage}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 90vw"
                  priority={false}
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Content */}
              <div className={styles.content}>
                {/* Category Badge */}
                <span className={styles.categoryBadge}>
                  {post.category}
                </span>

                {/* Title */}
                <h3 className={styles.blogTitle}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className={styles.excerpt}>
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className={styles.meta}>
                  <Calendar className={styles.metaIcon} />
                  {post.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
