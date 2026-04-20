import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-sky-400">CS.</a>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors">About</a>
          <a href="#tech" className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors">Tech Stack</a>
          <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors">Projects</a>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <a href="https://github.com/Chandraveer7389" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/chandraveersingh7389/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chandraveer7389@gmail.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};
