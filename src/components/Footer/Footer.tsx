import { motion } from "motion/react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer} id="contact">
      <motion.div
        className={styles.footerContent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className={styles.footerHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.span
            className={styles.footerSubtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let's collaborate
          </motion.span>
          <motion.h2
            className={styles.footerTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Get in touch
          </motion.h2>
          <motion.p
            className={styles.footerDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Do you want to see more of what I've done or what I'm working on at
            the moment? Looking forward to your message!
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.contactSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={styles.contactItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <span className={styles.contactLabel}>Email</span>
              <a
                href="mailto:wictornisa@hotmail.com"
                className={styles.contactLink}
              >
                wictornisa@hotmail.com
              </a>
            </motion.div>
            <motion.div
              className={styles.contactItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <span className={styles.contactLabel}>Phone</span>
              <a href="tel:+1234567890" className={styles.contactLink}>
                0733 407 437
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.socialLinks}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.linkedin.com/in/wictor-nis%C3%A5-9b8bab183/"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/WictorNisa"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={styles.footerDivider}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.div
            className={styles.footerMeta}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <p className={styles.copyright}>
              © 2025 Wictor Nisa. All rights reserved.
            </p>
            <p className={styles.location}>Based in Sweden</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
