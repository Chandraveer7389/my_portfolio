import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen selection:bg-sky-500/30 selection:text-sky-200 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
      </main>
      
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800 bg-slate-900">
        <p className="text-sm">
          © {new Date().getFullYear()} Chandraveer Singh. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
