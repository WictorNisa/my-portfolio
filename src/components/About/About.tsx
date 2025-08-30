import { motion } from "motion/react";
import styles from "./About.module.css";

const About = () => {
  const skills = [
    "TypeScript",
    "React",
    "Node.js",
    "Tailwind",
    "Git",
    "Java",
    "Spring Boot",
  ];

  return (
    <section id="about" className={styles.aboutContainer}>
      <motion.div
        className={styles.aboutContent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className={styles.aboutTextContainer}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Things you would like to know
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            About me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            I am a passionate full-stack developer with a focus on creating
            dynamic and responsive web applications. My journey in tech has
            equipped me with a diverse skill set, enabling me to tackle
            challenges across the stack and deliver solutions that make a real
            impact.
          </motion.p>

          <p>
            Working through the whole stack, I've developed a strong
            understanding of both front-end and back-end and database
            technologies. My mission is that this list will continuously grow
            and expand
          </p>
          <motion.div
            className={styles.skillsCarousel}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={styles.carouselTrack}
              animate={{
                x: [0, -100 * skills.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {skills.map((skill, index) => (
                <div key={`first-${index}`} className={styles.skillItem}>
                  {skill}
                </div>
              ))}

              {skills.map((skill, index) => (
                <div key={`second-${index}`} className={styles.skillItem}>
                  {skill}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
