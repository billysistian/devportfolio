import { motion } from 'motion/react';
import { Code, Server, Database, Layers, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import pasFoto from '../../assets/images/pas-photo.png';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 max-w-md mx-auto md:mr-auto relative">
                 <img 
                  src={pasFoto}
                  className="w-full h-full object-cover"
                />
            </div>
             <div className="absolute -bottom-6 -right-6 md:right-12 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                  4+
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.about.yearsOfExperience}</p>
                  <p className="text-sm text-slate-500">{t.about.buildingApps}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">{t.about.sectionLabel}</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 font-['Poppins']">
              {t.about.title}
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              {t.about.description2}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.expertise.map((item: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
