import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Toolbox from "./components/Toolbox";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-ground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Toolbox />
        <Experience />
        <Work />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
