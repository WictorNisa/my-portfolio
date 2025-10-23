import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import styles from "./Projects.module.css";
import animeRankerImage from "../../assets/images/rankimeProject.png";
import pokeDexImage from "../../assets/images/pokeDexProject.png";
import cocktailImage from "../../assets/images/cocktailProject.png";
import triviaImage from "../../assets/images/triviaMasterProject.png";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  liveDemo: string;
  github: string;
  color: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Anime Ranker",
      description: "Interactive anime ranking and discovery platform",
      fullDescription:
        "A comprehensive anime ranking application that allows users to discover, rate, and create personalized anime lists. Built with modern React and TypeScript, featuring dynamic filtering, real-time search, and interactive ranking systems. Users can explore trending anime, create custom tier lists, and compare ratings with the community.",
      technologies: [
        "React",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "API Integration",
      ],
      image: animeRankerImage,
      liveDemo: "https://anime-ranker-app-u2xq.vercel.app/",
      github: "https://github.com/WictorNisa/anime-ranker",
      color: "#c82360",
    },
    {
      id: 2,
      title: "Pokédex App",
      description: "Interactive Pokémon database explorer",
      fullDescription:
        "A comprehensive Pokédex application that allows users to explore and discover Pokémon information. Built with React and integrated with the Pokémon API, featuring detailed Pokémon stats, abilities, and evolution chains. Users can search, filter, and browse through the complete Pokémon database with smooth animations and responsive design.",
      technologies: ["React", "Pokedex API", "Axios", "Vanilla JS"],
      image: pokeDexImage,
      liveDemo: "https://pokedex-five-bice.vercel.app/pages/pokedex",
      github: "https://github.com/WictorNisa/pokedex",
      color: "#551c48",
    },
    {
      id: 3,
      title: "Cocktail Explorer",
      description: "Interactive cocktail recipe discovery app",
      fullDescription:
        "A comprehensive cocktail discovery application that allows users to explore and discover cocktail recipes. Built with modern web technologies and integrated with cocktail APIs, featuring detailed recipe information, ingredient lists, and preparation instructions. Users can search, filter, and browse through an extensive cocktail database.",
      technologies: ["JavaScript", "API Integration", "HTML", "CSS"],
      image: cocktailImage,
      liveDemo: "https://api-grade-exam.vercel.app/",
      github: "https://github.com/WictorNisa/Api-grade-exam",
      color: "#830a26",
    },
    {
      id: 4,
      title: "Trivia Master",
      description: "Interactive trivia quiz application",
      fullDescription:
        "An engaging trivia quiz application that challenges users with questions across various categories. Built with modern web technologies, featuring dynamic question generation, score tracking, and interactive user interface. Players can test their knowledge across different difficulty levels and compete for high scores.",
      technologies: ["React", "JavaScript", "API Integration", "CSS"],
      image: triviaImage,
      liveDemo: "https://trivia-project-six.vercel.app/",
      github: "https://github.com/WictorNisa/trivia-project",
      color: "#c82360",
    },
  ];

  return (
    <>
      {/* Projects section with vertical scrolling */}
      <div className={styles.projectsSection} id="projects">
        <motion.div
          className={styles.projectsHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.sectionLabel}>Portfolio</span>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionDescription}>
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              style={{ "--accent-color": project.color } as React.CSSProperties}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className={`${styles.projectContent} ${
                  index % 2 === 0 ? styles.contentLeft : styles.contentRight
                }`}
              >
                <motion.div
                  className={styles.projectImageContainer}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <div className={styles.projectOverlay}>
                    <motion.button
                      className={styles.viewDetailsButton}
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>

                <div className={styles.projectInfo}>
                  <motion.span
                    className={styles.projectNumber}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>

                  <motion.h3
                    className={styles.projectTitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className={styles.projectDescription}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className={styles.projectTechnologies}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    className={styles.projectButtons}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectButton}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectButtonSecondary}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalOverlay}
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              style={
                {
                  "--accent-color": selectedProject.color,
                } as React.CSSProperties
              }
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.button
                className={styles.closeButton}
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>

              <div className={styles.modalImage}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={styles.modalImageActual}
                />
              </div>

              <div className={styles.modalInfo}>
                <h3>{selectedProject.title}</h3>
                <p className={styles.modalDescription}>
                  {selectedProject.fullDescription}
                </p>

                <div className={styles.modalTechnologies}>
                  <h4>Technologies Used:</h4>
                  <div className={styles.techList}>
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className={styles.modalTechTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.modalButtons}>
                  <motion.a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalButtonSecondary}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
