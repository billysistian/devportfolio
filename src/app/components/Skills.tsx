import { motion } from 'motion/react';
import { Circle, Code, Server, Database, Wrench } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: t.skills.categories.frontend,
      icon: Code,
      items: t.skills.items.frontend,
    },
    {
      category: t.skills.categories.backend,
      icon: Server,
      items: t.skills.items.backend,
    },
    {
      category: t.skills.categories.database,
      icon: Database,
      items: t.skills.items.database,
    },
    {
      category: t.skills.categories.tools,
      icon: Wrench,
      items: t.skills.items.tools,
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {category.category}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((skill: string) => (
                    <li key={skill} className="flex items-center gap-3 text-slate-600">
                      <Circle size={6} className="text-blue-400 fill-blue-400 flex-shrink-0" />
                      <span className="text-sm font-medium hover:text-slate-900 transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
