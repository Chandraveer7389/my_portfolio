import { motion } from 'framer-motion';
import { FiArrowRight, FiCode } from 'react-icons/fi';

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-sm font-medium mb-6">
            <FiCode size={16} />
            <span>Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-100">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Chandraveer Singh</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed">
            Full-Stack Developer | <span className="text-slate-200">AWS Certified Cloud & AI Practitioner</span>
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm flex-1">
              <p className="text-sm text-slate-400 mb-1">Education</p>
              <p className="font-semibold text-slate-200">SRM IST '27, B.Tech CSE</p>
              <p className="text-sm text-sky-400">(Software Engineering) · CGPA: 9.16/10</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm flex-1">
              <p className="text-sm text-slate-400 mb-1">Problem Solving</p>
              <p className="font-semibold text-slate-200">180+ LeetCode</p>
              <a href="https://leetcode.com/u/Chandraveer7389/" target="_blank" rel="noreferrer" className="text-sm text-sky-400 hover:underline inline-flex items-center gap-1 mt-1">
                View Profile <FiArrowRight size={14} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors">
              View Projects
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chandraveer7389@gmail.com" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3 rounded-lg border border-slate-700 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
