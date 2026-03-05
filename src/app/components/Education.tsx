import { motion } from 'motion/react';
import { Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function Education() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
               <div className="flex items-center gap-3 mb-8">
                 <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <GraduationCap size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">{t.education.education}</h2>
               </div>
               
               <div className="space-y-8">
                  <div className="border-l-2 border-slate-200 pl-6 relative">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full" />
                     <h3 className="text-lg font-bold text-slate-900">{t.education.degree}</h3>
                     <p className="text-blue-600 font-medium">{t.education.university}</p>
                     <p className="text-sm text-slate-500 mb-2">{t.education.period}</p>
                     <p className="text-slate-600">
                       {t.education.degreeDescription}
                     </p>
                  </div>
               </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
               <div className="flex items-center gap-3 mb-8">
                 <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Award size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">{t.education.certifications}</h2>
               </div>
               
               <div className="space-y-6">
                 {t.education.certList.map((cert: any, idx: number) => (
                   <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex justify-between items-center hover:bg-slate-100 transition-colors">
                      <div>
                        <h3 className="font-bold text-slate-900">{cert.name}</h3>
                        <p className="text-sm text-slate-600">{cert.issuer}</p>
                      </div>
                      <span className="text-xs font-medium px-2 py-1 bg-white border border-slate-200 rounded text-slate-500">
                        {cert.date}
                      </span>
                   </div>
                 ))}
               </div>
            </motion.div>
         </div>
       </div>
    </section>
  )
}
