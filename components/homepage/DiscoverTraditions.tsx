
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAppContext } from '../../contexts/AppContext';

const DiscoverTraditions = () => {
    const { t, getMultilingual } = useLanguage();
    const { traditions } = useAppContext();
    const traditionsToShow = traditions.slice(0, 3);

    return (
        <section className="bg-brand-soft-pink bg-lattice py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red" data-aos="fade-up">
                        {t('discoverOurTraditions')}
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {traditionsToShow.map((tradition, index) => (
                        <Link to="/traditions" key={tradition.id} className="group block bg-light-bg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                            <div className="relative h-64">
                                <img
                                    src={tradition.imageUrl}
                                    alt={getMultilingual(tradition.title)}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-serif-en font-bold text-brand-red mb-2">
                                    {getMultilingual(tradition.title)}
                                </h3>
                                <p className="text-charcoal-ink/80 line-clamp-3">
                                    {getMultilingual(tradition.shortDescription)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-16" data-aos="fade-up">
                    <Link
                        to="/traditions"
                        className="inline-block px-8 py-3 bg-legacy-gold text-brand-red font-bold text-lg rounded-full hover:bg-brand-dark-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        {t('learnMoreHeritage')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DiscoverTraditions;
