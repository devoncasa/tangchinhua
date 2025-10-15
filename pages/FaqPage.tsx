import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAppContext } from '../contexts/AppContext';
import SEOManager from '../components/SEOManager';
import SectionBackground from '../components/SectionBackground';
import { FaqItem } from '../types';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';

interface FaqAccordionItemProps {
    faq: FaqItem;
    isOpen: boolean;
    onToggle: () => void;
}

const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({ faq, isOpen, onToggle }) => {
    const { getMultilingual } = useLanguage();

    return (
        <div className="border-b border-legacy-gold/30">
            <button
                onClick={onToggle}
                className="flex justify-between items-center w-full py-5 text-left text-xl font-semibold text-brand-red"
                aria-expanded={isOpen}
            >
                <span className="flex-grow pr-4">{getMultilingual(faq.question)}</span>
                <span className="flex-shrink-0">
                   <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                 className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <div className="pt-2 pb-5 text-light-text text-lg leading-relaxed">
                    <p>{getMultilingual(faq.answer)}</p>
                </div>
            </div>
        </div>
    );
};


const FaqPage = () => {
    const { t } = useLanguage();
    const { faqData } = useAppContext();
    const [openFaqId, setOpenFaqId] = useState<string | null>(null);

    // Safely set the first item as open once data is available.
    useEffect(() => {
        if (faqData && faqData.length > 0 && openFaqId === null) {
            setOpenFaqId(faqData[0].id);
        }
    }, [faqData, openFaqId]);

    const handleToggle = (id: string) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    // Guard clause to prevent rendering with incomplete data
    if (!faqData || faqData.length === 0) {
        return (
            <SectionBackground>
                <div className="container mx-auto px-6 py-40 text-center">
                    <h1 className="text-2xl font-bold text-brand-red">Loading FAQs...</h1>
                </div>
            </SectionBackground>
        );
    }
    
    const breadcrumbLinks: BreadcrumbLink[] = [
        { name: t('home'), to: '/' },
        { name: t('faq'), to: '/faq' },
    ];

    return (
        <>
            <SEOManager
                title={t('meta_title_faq')}
                description={t('faqIntro')}
            />
            <Breadcrumbs links={breadcrumbLinks} />
            <SectionBackground>
                <div className="container mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif-zh font-bold text-brand-red mb-4" data-aos="fade-down">{t('faqTitle')}</h1>
                        <p className="text-lg max-w-2xl mx-auto opacity-90" data-aos="fade-down" data-aos-delay="100">{t('faqIntro')}</p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-light-bg/60 backdrop-blur-sm p-6 sm:p-10 rounded-lg shadow-lg border border-legacy-gold/30" data-aos="fade-up">
                        {faqData.map((faq) => (
                           <FaqAccordionItem 
                                key={faq.id}
                                faq={faq}
                                isOpen={openFaqId === faq.id}
                                onToggle={() => handleToggle(faq.id)}
                           />
                        ))}
                    </div>
                </div>
            </SectionBackground>
        </>
    );
};

export default FaqPage;