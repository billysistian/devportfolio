import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">{t.experience.sectionLabel}</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 font-['Poppins']">{t.experience.title}</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200" />

          <div className="space-y-12">
            {t.experience.items.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-6 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-white shadow-sm z-10" />

                {/* Content */}
                <div className="md:w-1/2 ml-6 md:ml-0">
                  <div className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative ${
                    idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    {/* Arrow for desktop */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45 ${
                       idx % 2 === 0 ? '-right-2 border-r-0 border-b-0' : '-left-2 border-t-0 border-l-0 border-r border-b'
                    }`} />
                    
                    <div className="flex items-center gap-2 mb-2">
                       <Briefcase className="w-4 h-4 text-blue-600" />
                       <span className="text-sm font-semibold text-blue-600">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.position}</h3>
                    <h4 className="text-base font-medium text-slate-700 mb-4">{exp.company}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
