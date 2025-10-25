import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { MenuIcon, XIcon } from './icons/MenuIcons';
import { Language } from '../types';

interface HeaderProps {
    isSidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
}

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <div className="flex items-center space-x-1 bg-slate-200 p-1 rounded-full">
            <button 
                onClick={() => handleLanguageChange('vi')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${language === 'vi' ? 'bg-white text-slate-800 shadow-sm' : 'bg-transparent text-slate-600 hover:bg-slate-300/50'}`}
            >
                VI
            </button>
            <button 
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${language === 'en' ? 'bg-white text-slate-800 shadow-sm' : 'bg-transparent text-slate-600 hover:bg-slate-300/50'}`}
            >
                EN
            </button>
        </div>
    );
};


export const Header: React.FC<HeaderProps> = ({ isSidebarOpen, setSidebarOpen }) => {
    const { language } = useContext(LanguageContext);
    
    const uiText = {
        title: {
            en: 'Arduino Learning Hub',
            vi: 'Trung tâm Học Arduino'
        }
    }

    return (
        <header className="flex-shrink-0 bg-white/80 backdrop-blur-sm border-b border-slate-200 p-3 flex justify-between items-center sticky top-0 z-20">
            <div className="flex items-center">
                <button
                    className="lg:hidden p-2 -ml-2 text-slate-600 hover:text-slate-900"
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    >
                    {isSidebarOpen ? <XIcon /> : <MenuIcon />}
                </button>
                 <div className="hidden lg:block">
                    <h1 className="text-lg font-semibold text-slate-700">{uiText.title[language]}</h1>
                </div>
            </div>
            
            <LanguageSwitcher />
        </header>
    );
};
