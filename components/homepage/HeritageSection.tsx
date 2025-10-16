
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAppContext } from '../../contexts/AppContext';

const HeritageSection = () => {
    const { t, getMultilingual } = useLanguage();
    const { traditions } = useAppContext();
    const heritageToShow = traditions.slice(0, 5); // Show first 5 traditions

    return (
        <section className="bg-brand-soft-pink bg-lattice py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red" data-aos="fade-up">
                        {t('heritageTitle')}
                    </h2>
                </div>
                <div className="flex space-x-8 overflow-x-auto pb-8 -mb-8 snap-x snap-mandatory" data-aos="fade-up" data-aos-delay="100">
                    {heritageToShow.map((tradition) => (
                        <div key={tradition.id} className="flex-shrink-0 w-80 snap-center">
                            <Link to="/traditions" className="group block bg-light-bg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                                <div className="relative h-56">
                                    <img
                                        src={tradition.imageUrl}
                                        alt={getMultilingual(tradition.title)}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-4 text-white text-2xl font-serif-en font-bold p-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                                        {getMultilingual(tradition.title)}
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-charcoal-ink/80 mb-4 h-24 line-clamp-4">
                                        {getMultilingual(tradition.shortDescription)}
                                    </p>
                                    <div className="text-brand-rose-pink font-bold group-hover:underline">
                                        {t('learnMore')}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeritageSection;