
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const OurLegacy = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-light-bg">
            <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <img src="https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.40.webp" alt="Historical photo of Tang Chin Hua store" className="rounded-lg shadow-xl border-4 border-legacy-gold/50 w-full h-auto object-cover" />
                </div>
                <div className="text-center md:text-left" data-aos="fade-left">
                    <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red mb-6">{t('ourLegacy')}</h2>
                    <p className="text-lg leading-relaxed mb-8 text-charcoal-ink/80">
                        {t('fiftyYears')}
                    </p>
                    <Link 
                        to="/about"
                        className="font-bold text-brand-dark-gold hover:text-brand-red transition-colors duration-300 text-lg group"
                    >
                        {t('readOurStory')}
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurLegacy;