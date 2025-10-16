import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAppContext } from '../contexts/AppContext';
import { type Tradition, type Product } from '../types';
import SEOManager from '../components/SEOManager';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';

// An interactive accordion component for displaying each tradition.
interface TraditionAccordionItemProps {
    tradition: Tradition;
    isOpen: boolean;
    onToggle: () => void;
    products: Product[];
}

const TraditionAccordionItem: React.FC<TraditionAccordionItemProps> = ({ tradition, isOpen, onToggle, products }) => {
    const { getMultilingual, t } = useLanguage();

    const relevantProducts = useMemo(() => {
        return products.filter(p => p.traditionTags?.includes(tradition.id));
    }, [products, tradition.id]);
    
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

                {isOpen && relevantProducts.length > 0 && (
                    <div className="px-6 pb-6 mt-4 border-t border-brand-rose-pink/30 pt-6">
                        <h3 className="text-lg font-serif-zh font-bold text-brand-red mb-4">{t('essentialItemsForCeremony')}</h3>
                        <div className="flex space-x-4 overflow-x-auto pb-4 -mb-4">
                            {relevantProducts.map(product => (
                                <div key={product.id} className="flex-shrink-0 w-48">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link
                                to={`/shop?tradition=${tradition.id}`}
                                className="inline-block px-6 py-2 bg-brand-rose-pink text-white font-bold rounded-full hover:bg-brand-red transition-colors shadow-md hover:shadow-lg"
                            >
                                {t('shopAllForCeremony')}
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


const TraditionsPage = () => {
    const { t } = useLanguage();
    const { traditions, products } = useAppContext();
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
                    
                    <div className="max-w-4xl mx-auto space-y-4">
                        {traditions.map(trad => (
                            <TraditionAccordionItem 
                                key={trad.id}
                                tradition={trad}
                                isOpen={openTraditionId === trad.id}
                                onToggle={() => handleToggle(trad.id)}
                                products={products}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TraditionsPage;
