import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerHeader}>
          <span className={styles.footerSubtitle}>Let's collaborate</span>
          <h2 className={styles.footerTitle}>Get in touch</h2>
          <p className={styles.footerDescription}>
            Do you want to see more of what I've done or what I'm working on at
            the moment? Looking forward to your message!
          </p>
        </div>

        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <a
                href="mailto:wictornisa@hotmail.com"
                className={styles.contactLink}
              >
                wictornisa@hotmail.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone</span>
              <a href="tel:+1234567890" className={styles.contactLink}>
                0733 407 437
              </a>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/wictornisa"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/WictorNisa"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/wictornisa"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Twitter</span>
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerDivider}></div>
          <div className={styles.footerMeta}>
            <p className={styles.copyright}>
              © 2025 Wictor Nisa. All rights reserved.
            </p>
            <p className={styles.location}>Based in Sweden</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
