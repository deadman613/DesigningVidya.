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
   "Animation",
    "VFX",
  "Motion Graphics",
   "Graphic Design",
    // { name: "UI/UX Design", icon: Layout, href: "#courses" },
    "Video Editing"
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
              <a href="mailto:designingvidya3@gmail.com" className={styles.contactLink}>
                <Mail className={styles.contactIcon} />
                designingvidya3@gmail.com
              </a>
              <a href="tel:+917827250823" className={styles.contactLink}>
                <Phone className={styles.contactIcon} />
                +91 78272 50823
              </a>
              <p className={styles.contactText}>
                <MapPin className={`${styles.contactIcon} ${styles.contactIconTop}`} />
               2 Floor, Savitri Cinema Complex, Block E, Greater Kailash II, Greater Kailash, New Delhi, Delhi 110048
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

          {/* Visit Us / Map */}
          <div className={styles.mapColumn}>
            <h4>Visit Us</h4>
            <div className={styles.mapCard}>
             
              <div className={styles.mapEmbedWrapper}>
                <iframe
                  className={styles.mapEmbed}
                  src="https://maps.google.com/maps?q=2%20Floor%2C%20Savitri%20Cinema%20Complex%2C%20Block%20E%2C%20Greater%20Kailash%20II%2C%20Greater%20Kailash%2C%20New%20Delhi%2C%20Delhi%20110048&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Designing Vidya Location"
                />
              </div>
              <a
                className={styles.mapLink}
                href="https://www.google.com/search?q=Designing+Vidya&stick=H4sIAAAAAAAA_-NgU1I1qDC2NEhONTYxTzFPs0gxtzC3AgoZJhuZGZuaJpmapqRaGlguYuV3SS3OTM_LzEtXCMtMqUwEAHv0yr47AAAA&hl=en&mat=CdOJ-9BEGHdJElcBTVDHnqQC4tgS2YBqNycnmO88gK_Zb5_wQXXwHR92YIwxm2hURmL2dvW3-rCBDoypwIgWGTD9MJo5k6k1GVR0HvKV7-DEcO_MHBAQESIPQtEsaBqSUsU&authuser=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </div>
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
