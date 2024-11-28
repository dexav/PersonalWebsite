
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <footer className="bg-black py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Xavier Nursiwat.</p>
      </footer>
    </div>
  );
}

export default App;