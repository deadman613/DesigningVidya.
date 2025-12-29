"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone,
  Palette,
  Film,
  Gamepad2,
  MonitorPlay,
  Layout,
  Scissors
} from "lucide-react";
import styles from "./Header.module.css";

const courses = [
  { name: "3D Animation", icon: Film, href: "#courses" },
  { name: "VFX & Compositing", icon: MonitorPlay, href: "#courses" },
  { name: "Gaming & AR/VR", icon: Gamepad2, href: "#courses" },
  { name: "Graphic Design", icon: Palette, href: "#courses" },
  { name: "UI/UX Design", icon: Layout, href: "#courses" },
  { name: "Video Editing", icon: Scissors, href: "#courses" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Scrolling Announcement Bar */}
      <div className={styles.announcementBar}>
        <div className={styles.marqueeContent}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className={styles.marqueeText}>
              🎉 Designing Vidya Presents Exclusive Offers for a Limited Time! • 
              ✨ Admissions Open 2025 • 🏆 100% Placement Assistance • 
              📞 Call: +91 82877 63710
            </span>
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navInner}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <Image
                src="/uploads/Logo-W.png"
                alt="Designing Vidya"
                width={160}
                height={48}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className={styles.desktopNav}>
                  <Link href="/" className={styles.navLink}>
                Home
              </Link>
              
              {/* Courses Dropdown */}
              <div 
                className={styles.coursesDropdown}
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              >
                <button className={styles.dropdownTrigger}>
                  Courses
                  <ChevronDown className={`${styles.dropdownIcon} ${isCoursesOpen ? styles.dropdownIconOpen : ''}`} />
                </button>
                
                {isCoursesOpen && (
                  <div className={styles.dropdownMenu}>
                    {courses.map((course) => (
                      <a
                        key={course.name}
                        href={course.href}
                        className={styles.dropdownItem}
                      >
                        <course.icon className={styles.dropdownIcon} />
                        <span>{course.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#showcase" className={styles.navLink}>
                Showcase
              </a>
              <a href="#about" className={styles.navLink}>
                Learn with us
              </a>
              <a href="#placements" className={styles.navLink}>
                Placements
              </a>
              <a href="#blog" className={styles.navLink}>
                Life At Vidya
              </a>
            </div>

            {/* CTA Buttons */}
            <div className={styles.ctaSection}>
              <a href="tel:+918287763710" className={styles.phoneLink}>
                <Phone className={styles.phoneIcon} />
                <span className={styles.phoneText}>+91 82877 63710</span>
              </a>
              <button className={styles.applyBtn}>
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuInner}>
                  <Link href="/" className={styles.mobileNavLink}>Home</Link>
              <div>
                <p className={styles.mobileCourseLabel}>Courses</p>
                {courses.map((course) => (
                  <a
                    key={course.name}
                    href={course.href}
                    className={styles.mobileCourseItem}
                  >
                    <course.icon className={styles.mobileCourseIcon} />
                    {course.name}
                  </a>
                ))}
              </div>
              <a href="#showcase" className={styles.mobileNavLink}>Showcase</a>
              <a href="#placements" className={styles.mobileNavLink}>Placements</a>
              <a href="#about" className={styles.mobileNavLink}>Learn with us</a>
              <a href="#blog" className={styles.mobileNavLink}>Life At Vidya</a>
              <button className={styles.mobileApplyBtn}>Apply Now</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
