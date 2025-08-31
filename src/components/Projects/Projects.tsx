import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
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
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isInHorizontalSection, setIsInHorizontalSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !sliderRef.current) return;

      const section = sectionRef.current;
      const slider = sliderRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if we're in the horizontal section
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const inSection = sectionTop <= 0 && sectionBottom >= windowHeight;

      setIsInHorizontalSection(inSection);

      if (inSection) {
        // Calculate scroll progress within the section
        const sectionHeight = section.offsetHeight;
        const scrollProgress =
          Math.abs(sectionTop) / (sectionHeight - windowHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        // Calculate horizontal transform
        const maxTransform = (projects.length - 1) * 100;
        const translateX = clampedProgress * maxTransform;

        // Apply horizontal scroll transform
        slider.style.transform = `translateX(-${translateX}vw)`;

        // Update current project index
        const newIndex = Math.round(clampedProgress * (projects.length - 1));
        if (newIndex !== currentProjectIndex) {
          setCurrentProjectIndex(newIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects.length, currentProjectIndex]);

  // Snap to specific project
  const snapToProject = (index: number) => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;

    // Calculate target scroll position
    const progress = index / (projects.length - 1);
    const targetScroll =
      window.pageYOffset + rect.top + progress * (sectionHeight - windowHeight);

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Projects section with horizontal scrolling */}
      <div ref={sectionRef} className={styles.projectsSection} id="projects">
        <div className={styles.projectsContainer}>
          <div ref={sliderRef} className={styles.projectsSlider}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={styles.projectSlide}
                style={
                  { "--accent-color": project.color } as React.CSSProperties
                }
              >
                <div className={styles.projectContent}>
                  <motion.div
                    className={styles.projectInfo}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                      opacity: index === currentProjectIndex ? 1 : 0.3,
                      x: index === currentProjectIndex ? 0 : -30,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <motion.span
                      className={styles.projectNumber}
                      animate={{
                        opacity: index === currentProjectIndex ? 1 : 0.5,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>

                    <motion.h2 className={styles.projectTitle}>
                      {project.title}
                    </motion.h2>

                    <motion.p className={styles.projectDescription}>
                      {project.fullDescription}
                    </motion.p>

                    <motion.div className={styles.projectTechnologies}>
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    <motion.div className={styles.projectButtons}>
                      <motion.button
                        className={styles.projectButton}
                        onClick={() => setSelectedProject(project)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectButtonSecondary}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className={styles.projectVisual}
                    animate={{
                      opacity: index === currentProjectIndex ? 1 : 0.3,
                      scale: index === currentProjectIndex ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={styles.projectImageContainer}>
                      {/* Updated this part to show actual images */}
                      {project.image.startsWith("/api/placeholder") ? (
                        <div className={styles.projectImagePlaceholder}>
                          {project.title}
                        </div>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className={styles.projectImage}
                        />
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation indicators */}
          <div className={styles.projectIndicators}>
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className={`${styles.indicator} ${
                  index === currentProjectIndex ? styles.indicatorActive : ""
                }`}
                onClick={() => snapToProject(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          {/* Scroll hint */}
          <motion.div
            className={styles.scrollHint}
            animate={{
              opacity: isInHorizontalSection ? 1 : 0.7,
              y: isInHorizontalSection ? 0 : 10,
            }}
          >
            <span>Scroll to explore projects</span>
            <motion.div
              className={styles.scrollArrow}
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
          </motion.div>
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
                {/* Updated modal image too */}
                {selectedProject.image.startsWith("/api/placeholder") ? (
                  <div className={styles.modalImagePlaceholder}>
                    {selectedProject.title}
                  </div>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className={styles.modalImageActual}
                  />
                )}
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
