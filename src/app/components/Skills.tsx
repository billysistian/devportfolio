import { motion, AnimatePresence } from 'motion/react';
import { Code, Server, Database, Wrench } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useState } from 'react';
import { TechBadge } from './TechBadge';
import { techIcons } from './techIcons';

export function Skills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    {
      key: 'frontend',
      category: t.skills.categories.frontend,
      icon: Code,
      items: t.skills.items.frontend,
    },
    {
      key: 'backend',
      category: t.skills.categories.backend,
      icon: Server,
      items: t.skills.items.backend,
    },
    {
      key: 'database',
      category: t.skills.categories.database,
      icon: Database,
      items: t.skills.items.database,
    },
    {
      key: 'tools',
      category: t.skills.categories.tools,
      icon: Wrench,
      items: t.skills.items.tools,
    }
  ];

  const activeCategoryData = skillCategories.find(cat => cat.key === activeCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">{t.skills.sectionLabel}</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 font-['Poppins']">{t.skills.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            {t.skills.description}
          </p>
        </div>

        <div className="flex sm:flex-wrap justify-start sm:justify-center gap-3 mb-12 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeCategory === category.key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <Icon size={18} />
                <span>{category.category}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeCategoryData && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center"
            >
              {activeCategoryData.items.map((skill: string) => (
                <TechBadge
                  key={skill}
                  name={skill}
                  icon={techIcons[skill] || null}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
