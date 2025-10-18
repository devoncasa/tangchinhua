import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ConstructionBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const { t } = useLanguage();

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4" aria-modal="true" role="dialog">
            <div 
                className="bg-light-bg rounded-xl shadow-2xl p-8 max-w-md w-full text-center relative border-4 border-legacy-gold/80" 
                data-aos="zoom-in"
            >
                <button 
                    onClick={() => setIsVisible(false)} 
                    className="absolute top-3 right-3 text-gray-400 hover:text-brand-red transition-colors"
                    aria-label="Close construction notice"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <div className="text-brand-rose-pink mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                
                <h2 className="text-2xl font-serif-zh font-bold text-brand-red mb-4">{t('underConstructionTitle')}</h2>
                <p className="text-light-text/90 mb-6">{t('underConstructionMessage')}</p>

                <Link
                    to="/contact"
                    onClick={() => setIsVisible(false)}
                    className="inline-block px-8 py-3 bg-legacy-gold text-brand-red font-bold text-lg rounded-full hover:bg-brand-dark-gold transition-transform transform hover:scale-105 shadow-xl"
                >
                    {t('contact')}
                </Link>
            </div>
        </div>
    );
};

export default ConstructionBanner;
