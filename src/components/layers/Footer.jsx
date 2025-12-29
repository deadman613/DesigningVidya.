import Link from "next/link";
import { 
  Instagram, 
  Youtube, 
  Linkedin,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import styles from "./Footer.module.css";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Placements", href: "#placements" },
  { name: "Showcase", href: "#showcase" },
  { name: "Contact", href: "#contact" },
];

const courseCategories = [
  "3D Animation",
  "VFX & Compositing",
  "Gaming & AR/VR",
  "Graphic Design",
  "UI/UX Design",
  "Video Editing",
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/designingvidya", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@designingvidya", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/company/designingvidya", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>
                <span className={styles.logoWhite}>Designing</span>
                <span className={styles.logoPrimary}>Vidya</span>
              </span>
            </Link>
            
            <p className={styles.description}>
              India&apos;s premier institute for Animation, VFX, Gaming & Design education. 
              Transforming creative passion into successful careers.
            </p>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <a href="mailto:info@designingvidya.com" className={styles.contactLink}>
                <Mail className={styles.contactIcon} />
                info@designingvidya.com
              </a>
              <a href="tel:+918287763710" className={styles.contactLink}>
                <Phone className={styles.contactIcon} />
                +91 82877 63710
              </a>
              <p className={styles.contactText}>
                <MapPin className={`${styles.contactIcon} ${styles.contactIconTop}`} />
                Rohini, Delhi, India
              </p>
            </div>

            {/* Social Links */}
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={styles.socialLink}
                >
                  <social.icon className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksColumn}>
            <h4>Quick Links</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={styles.linkItem}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Categories */}
          <div className={styles.linksColumn}>
            <h4>Courses</h4>
            <ul className={styles.linksList}>
              {courseCategories.map((category) => (
                <li key={category}>
                  <a href="#courses" className={styles.linkItem}>
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarInner}>
          <p className={styles.copyright}>
            © 2025 Designing Vidya. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Terms</a>
            <a href="#" className={styles.legalLink}>Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
