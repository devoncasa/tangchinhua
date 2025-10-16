
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const VisitBoutique = () => {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 bg-cover bg-center text-white" style={{backgroundImage: "url('https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.53.webp')"}}>
            <div className="absolute inset-0 bg-brand-red/80 backdrop-blur-sm"></div>
            <div className="relative container mx-auto px-6 text-center" data-aos="fade-in">
                <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-legacy-gold mb-6" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>
                    {t('visitOurBoutique')}
                </h2>
                <div className="max-w-2xl mx-auto text-lg space-y-2 mb-8">
                    <p>{t('storeAddress')}</p>
                    <p><strong>{t('openingHoursTitle')}:</strong> {t('openingHoursDays')}, {t('openingHoursTimes')}</p>
                    <p><strong>{t('phoneTitle')}:</strong> <a href="tel:+6622238164" className="hover:text-legacy-gold">0-2223-8164</a></p>
                </div>
                 <Link
                    to="/contact"
                    className="inline-block px-8 py-3 bg-legacy-gold text-brand-red font-bold text-lg rounded-full hover:bg-brand-dark-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                    {t('getDirectionsContact')}
                </Link>
            </div>
        </section>
    );
};

export default VisitBoutique;
