
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAppContext } from '../../contexts/AppContext';

const CollectionsSection = () => {
    const { t } = useLanguage();
    const { products } = useAppContext();

    const collections = [
        {
            key: 'collection_attire',
            image: products.find(p => p.id === 'bride-002')?.imageUrls[0] || '',
        },
        {
            key: 'collection_tea_sets',
            image: products.find(p => p.id === 'tea-001')?.imageUrls[0] || '',
        },
        {
            key: 'collection_gifts',
            image: products.find(p => p.id === 'bed-001')?.imageUrls[0] || '',
        },
    ];

    return (
        <section className="py-20 bg-light-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red" data-aos="fade-up">
                        {t('collectionsTitle')}
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {collections.map((collection, index) => (
                        <div key={collection.key} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                            <Link to="/shop" className="group block relative h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    src={collection.image}
                                    alt={t(collection.key)}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center p-4">
                                    <h3 className="text-white text-3xl font-serif-en font-bold text-center" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                                        {t(collection.key)}
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionsSection;