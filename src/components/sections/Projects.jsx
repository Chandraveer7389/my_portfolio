import { Section } from '../ui/Section';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'CineStream AI (MovieGPT)',
    description: 'A React-based platform leveraging OpenAI\'s GPT API and TMDB API for intelligent, natural language movie discovery and recommendations.',
    tags: ['React', 'OpenAI API', 'TMDB API', 'Tailwind CSS'],
    github: 'https://github.com/Chandraveer7389/MovieGpt'
  },
  {
    title: 'DevConnect',
    description: 'A comprehensive MERN-stack professional networking hub featuring JWT authentication, real-time interactions, and secure custom request workflows.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    github: 'https://github.com/Chandraveer7389/DevConnect_fronyend',
    backendGithub: 'https://github.com/Chandraveer7389/DevGraph-Connect'
  }
];

export const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-slate-800/40 rounded-3xl p-8 border border-slate-700 hover:border-sky-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed min-h-[80px]">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-900/50 text-slate-300 text-xs font-medium rounded-full border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 flex-wrap">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 text-sm font-medium">
                    <FiGithub size={18} /> {project.backendGithub ? 'Frontend Code' : 'Code'}
                  </a>
                )}
                {project.backendGithub && (
                  <a href={project.backendGithub} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 text-sm font-medium">
                    <FiGithub size={18} /> Backend Code
                  </a>
                )}
                {project.demo && project.demo !== '#' && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 text-sm font-medium">
                    <FiExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
