
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { MultilingualString } from '../../types';

interface CategoryInfo {
  name: MultilingualString;
  imageUrl: string;
}

const CategoryShowcase = () => {
  const { products } = useAppContext();
  const { getMultilingual, t } = useLanguage();

  const categoriesToShow = [
    "Bride's Attire",
    "Groom's Attire",
    "Accessories",
    "Tea Ceremony Items"
  ];

  const categoryData: CategoryInfo[] = categoriesToShow
    .map(catName => {
        const productInCategory = products.find(p => p.category.en === catName);
        if (!productInCategory) return null;
        return {
            name: productInCategory.category,
            imageUrl: productInCategory.imageUrls[0],
        };
    })
    .filter((cat): cat is CategoryInfo => cat !== null);

  return (
    <div className="bg-antique-cream/50">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red text-center mb-12" data-aos="fade-up">{t('shopByCategory')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categoryData.map((cat, index) => (
            <Link to="/shop" key={cat.name.en} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="group aspect-square relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-legacy-gold">
                <img src={cat.imageUrl} alt={getMultilingual(cat.name)} className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold font-serif-en text-center p-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>{getMultilingual(cat.name)}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;