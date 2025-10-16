import React from 'react';
import { useRecentlyViewed } from '../hooks/useRecentlyViewed';
import { useAppContext } from '../contexts/AppContext';
import { useLanguage } from '../contexts/LanguageContext';
import ProductCard from './ProductCard';

interface RecentlyViewedProductsProps {
  currentProductId: string;
}

const RecentlyViewedProducts: React.FC<RecentlyViewedProductsProps> = ({ currentProductId }) => {
  const { recentlyViewedProductIds } = useRecentlyViewed();
  const { products } = useAppContext();
  const { t } = useLanguage();

  const viewedProducts = recentlyViewedProductIds
    .filter(id => id !== currentProductId) // Exclude the current product
    .map(id => products.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, 8); // Limit to 8 products

  if (viewedProducts.length === 0) {
    return null;
  }

  return (
    <div className="bg-antique-cream/50 mt-16">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red text-center mb-12">{t('recentlyViewed')}</h2>
        <div className="flex space-x-8 overflow-x-auto pb-6 -mb-6">
          {viewedProducts.map(p => (
            <div key={p.id} className="flex-shrink-0 w-64 sm:w-72">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewedProducts;
