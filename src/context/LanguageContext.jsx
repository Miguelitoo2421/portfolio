import { createContext, useState, useContext } from 'react';
import { translations } from '../locales/translations';
import { HashLoader } from 'react-spinners';
import './LanguageContext.css';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);

  const changeLanguage = (newLanguage) => {
    if (newLanguage !== language) {
      setIsLoading(true);
      setTimeout(() => {
        setLanguage(newLanguage);
        setIsLoading(false);
      }, 1500);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value[k];
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {isLoading && (
        <div className="language-loader-overlay">
          <HashLoader
            color="#2563eb"
            loading={isLoading}
            size={80}
            aria-label="Loading Spinner"
            speedMultiplier={1.5}
          />
        </div>
      )}
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 