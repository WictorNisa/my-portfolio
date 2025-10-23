import { motion } from "motion/react";
import styles from "./SectionBreaker.module.css";

const SectionBreaker = () => {
  return (
    <div className={styles.sectionBreakerContainer}>
      <motion.div
        className={styles.sectionBreakerInnerContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span>Animations and visual design</span>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore My Creative Journey
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Visual storytelling through web design is what drives me. I believe
          great websites should be both beautiful and functional.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          In the future I have a plan to create a website where I can showcase
          more of my creative side.
        </motion.p>
        <motion.button
          disabled
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          Work in progress
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SectionBreaker;
