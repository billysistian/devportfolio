import { Heart } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold font-['Poppins'] text-white tracking-tighter mb-4 inline-block">
              Dev<span className="text-blue-500">Portfolio</span>.
            </a>
            <p className="max-w-xs text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.connect}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.linkedin.com/in/billy-sistian-putra/" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/billysistian" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://instagram.com/billysistian" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} DevPortfolio. {t.footer.copyright}</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>{t.footer.madeWith}</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>{t.footer.usingTech}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
