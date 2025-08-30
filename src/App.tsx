import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SectionBreaker from "./components/SectionBreaker/SectionBreaker";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    });

    let animationId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationId = requestAnimationFrame(raf);
    }

    animationId = requestAnimationFrame(raf);

    // Optional: Add scroll event listener for debugging
    lenis.on("scroll", (_e: any) => {
      // console.log(_e) // Uncomment for debugging
    });

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      lenis.destroy();
    };
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <SectionBreaker />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
