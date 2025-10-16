
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAppContext } from '../contexts/AppContext';
import { type Tradition } from '../types';
import SEOManager from '../components/SEOManager';
import SectionBackground from '../components/SectionBackground';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';

// Fix: Use an explicit props interface and React.FC to ensure proper handling of the `key` prop by TypeScript.
interface TraditionCardProps {
    tradition: Tradition;
}

const TraditionCard: React.FC<TraditionCardProps> = ({ tradition }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { getMultilingual, t } = useLanguage();

    return (
        <div className="bg-light-bg shadow-xl rounded-lg overflow-hidden flex flex-col mb-12 border border-legacy-gold/40 transition-shadow duration-300 hover:shadow-2xl">
            <img src={tradition.imageUrl} alt={getMultilingual(tradition.title)} className="w-full h-64 object-cover" />
            <div className="p-8 flex-grow flex flex-col">
                <h2 className="text-3xl font-serif-zh font-bold text-brand-red mb-4">{getMultilingual(tradition.title)}</h2>
                <p className={`text-lg text-light-text flex-grow ${isExpanded ? 'leading-loose' : 'leading-relaxed'}`}>
                    {getMultilingual(isExpanded ? tradition.longDescription : tradition.shortDescription)}
                </p>
                <div className="mt-6">
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)} 
                        className="font-bold text-brand-dark-gold hover:text-brand-red transition-colors duration-300"
                    >
                        {isExpanded ? t('readLess') : t('readMore')}
                    </button>
                </div>
            </div>
        </div>
    );
};


const TraditionsPage = () => {
    const { t } = useLanguage();
    const { traditions } = useAppContext();

    const breadcrumbLinks: BreadcrumbLink[] = [
        { name: t('home'), to: '/' },
        { name: t('traditions'), to: '/traditions' },
    ];

    return (
        <>
            <SEOManager 
                title={t('meta_title_traditions')}
                description={t('meta_desc_traditions')}
            />
            <Breadcrumbs links={breadcrumbLinks} />
            <SectionBackground>
                <div className="container mx-auto px-6 py-16">
                    <h1 className="text-4xl md:text-5xl font-serif-zh font-bold text-brand-red text-center mb-16">{t('traditions')}</h1>
                    
                    <div className="max-w-4xl mx-auto">
                        {traditions.map(trad => (
                            <TraditionCard key={trad.id} tradition={trad} />
                        ))}
                    </div>
                </div>
            </SectionBackground>
        </>
    );
};

export default TraditionsPage;