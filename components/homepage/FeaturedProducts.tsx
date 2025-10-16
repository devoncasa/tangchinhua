
import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDailyShuffledArray } from '../../hooks/useDailyContent';
import ProductCard from '../ProductCard';
import SectionBackground from '../SectionBackground';

const FeaturedProducts = () => {
  const { products } = useAppContext();
  const featured = useDailyShuffledArray(products, 4);
  const { t } = useLanguage();

  return (
    <SectionBackground>
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red text-center mb-12" data-aos="fade-up">{t('featuredProducts')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product, index) => (
            <div key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
};

export default FeaturedProducts;