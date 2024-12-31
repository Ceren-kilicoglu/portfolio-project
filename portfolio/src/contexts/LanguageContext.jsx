import { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Varsayılan dil: 'en', ancak localStorage'dan yüklenirse onu kullan
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const newLanguage = prev === 'en' ? 'tr' : 'en';
            localStorage.setItem('language', newLanguage); // Yeni dili kaydet
            return newLanguage;
        });
    };

    useEffect(() => {
        // Dil seçeneği localStorage'da güncellenmiş mi kontrol eder
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

