import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import hero from '../../assets/images/pas-foto.png';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 bg-slate-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              {t.hero.availableForWork}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 font-['Poppins'] leading-tight mb-6">
              {t.hero.greeting} <br />
              <span className="text-blue-600">{t.hero.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-600 mb-6 font-medium">
              {t.hero.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 group"
              >
                {t.hero.contactMe}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#experience"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
              >
                <Download className="mr-2 w-4 h-4" />
                {t.hero.downloadCV}
              </a>
            </div>
            
            {/* <div className="mt-12 flex items-center space-x-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                   <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden`}>
                     <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${i}`} alt="avatar" />
                   </div>
                ))}
              </div>
              <p>Trusted by clients worldwide</p>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={hero}
                alt="hero"
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
            {/* Abstract decorative elements behind image */}
            <div className="absolute top-10 right-10 w-full h-full border-2 border-blue-600/20 rounded-2xl -z-10 transform translate-x-4 translate-y-4" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
