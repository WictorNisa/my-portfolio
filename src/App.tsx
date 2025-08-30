import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./App.css";
import SectionBreaker from "./components/SectionBreaker/SectionBreaker";

function App() {
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
