
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAppContext } from '../contexts/AppContext';
import SEOManager from '../components/SEOManager';
import { type FaqItem } from '../types';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';

const FAQ_CATEGORIES = {
  ALL: 'all',
  PRODUCTS_CEREMONIES: 'products_ceremonies',
  STORE_SERVICES: 'store_services',
  KNOWLEDGE_CULTURE: 'knowledge_culture',
};

interface FaqAccordionItemProps {
    faq: FaqItem;
    isOpen: boolean;
    onToggle: () => void;
}

const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({ faq, isOpen, onToggle }) => {
    const { getMultilingual } = useLanguage();

    return (
        <div className="mb-4 rounded-lg shadow-sm transition-shadow duration-300 overflow-hidden border border-legacy-gold/20 bg-light-bg/50 hover:border-brand-rose-pink/50">
            <button
                onClick={onToggle}
                className="flex justify-between items-center w-full p-5 sm:p-6 text-left text-lg sm:text-xl font-semibold text-brand-red transition-colors duration-300 hover:bg-brand-soft-pink/50"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
            >
                <span className="flex-grow pr-4">{getMultilingual(faq.question)}</span>
                <span className="flex-shrink-0 text-brand-rose-pink">
                   <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                 id={`faq-answer-${faq.id}`}
                 className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <div className="pt-0 pb-6 px-5 sm:px-6 text-light-text text-base sm:text-lg leading-relaxed bg-white/50">
                    <p>{getMultilingual(faq.answer)}</p>
                </div>
            </div>
        </div>
    );
};


const FaqPage = () => {
    const { t, getMultilingual } = useLanguage();
    const { faqData } = useAppContext();
    
    const [openFaqId, setOpenFaqId] = useState<string | null>(faqData[0]?.id || null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(FAQ_CATEGORIES.ALL);

    const handleToggle = (id: string) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    const filteredFaqs = useMemo(() => {
        return faqData
            .filter(faq => {
                if (selectedCategory === FAQ_CATEGORIES.ALL) return true;
                return faq.category === selectedCategory;
            })
            .filter(faq => {
                if (!searchTerm.trim()) return true;
                const lowercasedTerm = searchTerm.toLowerCase();
                return (
                    getMultilingual(faq.question).toLowerCase().includes(lowercasedTerm) ||
                    getMultilingual(faq.answer).toLowerCase().includes(lowercasedTerm)
                );
            });
    }, [faqData, searchTerm, selectedCategory, getMultilingual]);

    const breadcrumbLinks: BreadcrumbLink[] = [
        { name: t('home'), to: '/' },
        { name: t('faq'), to: '/faq' },
    ];
    
    const categoryButtons = [
        { key: FAQ_CATEGORIES.ALL, label: t('faq_cat_all') },
        { key: FAQ_CATEGORIES.PRODUCTS_CEREMONIES, label: t('faq_cat_products_ceremonies') },
        { key: FAQ_CATEGORIES.STORE_SERVICES, label: t('faq_cat_store_services') },
        { key: FAQ_CATEGORIES.KNOWLEDGE_CULTURE, label: t('faq_cat_knowledge_culture') },
    ];

    return (
        <>
            <SEOManager
                title={t('meta_title_faq')}
                description={t('faqIntro')}
            />
            <Breadcrumbs links={breadcrumbLinks} />
            <div className="bg-light-bg">
                <div className="container mx-auto px-6 py-16">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif-zh font-bold text-brand-red mb-4" data-aos="fade-down">{t('faqTitle')}</h1>
                        <p className="text-lg max-w-2xl mx-auto opacity-90" data-aos="fade-down" data-aos-delay="100">{t('faqIntro')}</p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-8 max-w-3xl mx-auto" data-aos="fade-up">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder={t('faq_search_placeholder')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full py-4 pl-12 pr-4 text-lg border-2 border-legacy-gold/50 rounded-full focus:ring-2 focus:ring-brand-rose-pink focus:border-brand-rose-pink transition-colors duration-300"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
                        {categoryButtons.map(cat => (
                            <button
                                key={cat.key}
                                onClick={() => setSelectedCategory(cat.key)}
                                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 border-2 ${
                                    selectedCategory === cat.key
                                        ? 'bg-brand-rose-pink text-white border-brand-rose-pink shadow-md'
                                        : 'bg-white text-brand-red border-legacy-gold/50 hover:border-brand-rose-pink'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq) => (
                               <FaqAccordionItem 
                                    key={faq.id}
                                    faq={faq}
                                    isOpen={openFaqId === faq.id}
                                    onToggle={() => handleToggle(faq.id)}
                               />
                            ))
                        ) : (
                            <div className="text-center py-16 bg-light-bg/50 rounded-lg border border-legacy-gold/30">
                                <p className="text-xl text-gray-600">{t('faq_no_results')}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqPage;