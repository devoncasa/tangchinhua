
import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDailyShuffledArray } from '../../hooks/useDailyContent';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';

const FeaturedCollections = () => {
  const { products } = useAppContext();
  const featured = useDailyShuffledArray(products, 4);
  const { t } = useLanguage();

  return (
    <section className="bg-light-bg py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red" data-aos="fade-up">
                {t('collectionsTitle')}
            </h2>
        </div>
        <div className="flex space-x-8 overflow-x-auto pb-6 -mb-6" data-aos="fade-up" data-aos-delay="100">
            {featured.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-72">
                <ProductCard product={product} />
            </div>
            ))}
        </div>
        <div className="text-center mt-16" data-aos="fade-up">
            <Link
                to="/shop"
                className="inline-block px-8 py-3 bg-legacy-gold text-brand-red font-bold text-lg rounded-full hover:bg-brand-dark-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
                {t('exploreAllProducts')}
            </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
