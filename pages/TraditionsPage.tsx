
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAppContext } from '../contexts/AppContext';
import { type Tradition } from '../types';
import SEOManager from '../components/SEOManager';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';

// An interactive accordion component for displaying each tradition.
interface TraditionAccordionItemProps {
    tradition: Tradition;
    isOpen: boolean;
    onToggle: () => void;
}

const TraditionAccordionItem: React.FC<TraditionAccordionItemProps> = ({ tradition, isOpen, onToggle }) => {
    const { getMultilingual } = useLanguage();
    
    return (
        <div className="bg-brand-soft-pink rounded-lg shadow-sm transition-shadow duration-300 overflow-hidden border border-brand-rose-pink/20 hover:shadow-md">
            <button
                onClick={onToggle}
                className="flex justify-between items-center w-full p-6 text-left"
                aria-expanded={isOpen}
            >
                <div className="flex-grow pr-4">
                    <h2 className="text-xl font-serif-zh font-bold text-brand-rose-pink mb-2">{getMultilingual(tradition.title)}</h2>
                    <p className="text-sm text-light-text/80">{getMultilingual(tradition.shortDescription)}</p>
                </div>
                <span className="flex-shrink-0 text-brand-rose-pink">
                   <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                 className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <div className="pt-0 pb-6 px-6 text-light-text text-base leading-relaxed space-y-4">
                    {getMultilingual(tradition.longDescription).split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};


const TraditionsPage = () => {
    const { t } = useLanguage();
    const { traditions } = useAppContext();
    const [openTraditionId, setOpenTraditionId] = useState<string | null>(traditions.length > 0 ? traditions[0].id : null);

    const breadcrumbLinks: BreadcrumbLink[] = [
        { name: t('home'), to: '/' },
        { name: t('traditions'), to: '/traditions' },
    ];
    
    const handleToggle = (id: string) => {
        setOpenTraditionId(openTraditionId === id ? null : id);
    };

    return (
        <>
            <SEOManager 
                title={t('meta_title_traditions')}
                description={t('meta_desc_traditions')}
            />
            <Breadcrumbs links={breadcrumbLinks} />
            <div className="bg-light-bg bg-lattice">
                <div className="container mx-auto px-6 py-16">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif-zh font-bold text-brand-rose-pink mb-6" data-aos="fade-down">{t('traditions')}</h1>
                        <div className="text-lg text-light-text space-y-4" data-aos="fade-down" data-aos-delay="100">
                           <p>{t('traditions_intro_p1')}</p>
                           <p>{t('traditions_intro_p2')}</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {traditions.map(trad => (
                            <TraditionAccordionItem 
                                key={trad.id}
                                tradition={trad}
                                isOpen={openTraditionId === trad.id}
                                onToggle={() => handleToggle(trad.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TraditionsPage;
