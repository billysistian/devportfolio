import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { getTranslations } from '../translations';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  const { language, setLanguage } = context;
  const t = getTranslations(language);

  return { language, setLanguage, t };
};
