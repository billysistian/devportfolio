import { en } from './en';
import { id } from './id';
import type { Language } from '../context/LanguageContext';

const translations: Record<Language, typeof en> = {
  en,
  id,
};

export const getTranslations = (language: Language) => {
  return translations[language];
};

export type Translations = typeof en;
