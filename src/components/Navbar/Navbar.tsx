import { motion } from "motion/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.navContainer}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <button
            onClick={() => scrollToSection("hero")}
            className={styles.navLogo}
          >
            WN
          </button>
        </motion.div>
        <motion.ul
          className={styles.navMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { name: "About", id: "about" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <motion.li
              key={item.name}
              className={styles.navItem}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={styles.navLink}
              >
                {item.name}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
