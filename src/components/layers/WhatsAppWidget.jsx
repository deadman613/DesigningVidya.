import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppWidget.module.css";

export default function WhatsAppWidget() {
  const phoneNumber = "918287763710";
  const message = encodeURIComponent("Hi! I'm interested in learning more about your courses at Designing Vidya.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.widget}
      aria-label="Chat on WhatsApp"
    >
      <div className={styles.container}>
        {/* Pulse Animation */}
        <div className={styles.pulse} />
        
        {/* Button */}
        <div className={styles.button}>
          <MessageCircle className={styles.icon} />
        </div>

        {/* Tooltip - Hidden on mobile */}
        <div className={styles.tooltip}>
          Chat with us
          <div className={styles.tooltipArrow} />
        </div>
      </div>
    </a>
  );
}
