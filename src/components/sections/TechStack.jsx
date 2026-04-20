import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React', 'Tailwind CSS', 'Redux', 'HTML/CSS', 'JavaScript (ES6+)'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'RESTful APIs'] },
  { category: 'Database & Cloud', items: ['MongoDB', 'AWS', 'Docker', 'Git/GitHub'] }
];

export const TechStack = () => {
  return (
    <Section id="tech" title="Tech Stack" className="bg-slate-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/30 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <h3 className="text-xl font-bold text-slate-200 mb-6">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <span 
                  key={item} 
                  className="px-3 py-1.5 bg-slate-900 text-sky-400 text-sm font-medium rounded-lg border border-slate-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
