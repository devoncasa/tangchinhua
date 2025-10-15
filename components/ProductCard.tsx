
import React from 'react';
import { Link } from 'react-router-dom';
import { type Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { getMultilingual } = useLanguage();

  return (
    <Link to={`/product/${product.id}`} className="group block bg-light-bg shadow-lg hover:shadow-xl rounded-lg overflow-hidden transform hover:-translate-y-1.5 transition-all duration-300 border border-legacy-gold/30">
      <div className="relative pb-[100%] overflow-hidden">
        <img src={product.imageUrls[0]} alt={getMultilingual(product.name)} className="absolute h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-light-text truncate">{getMultilingual(product.name)}</h3>
        <p className="mt-1 text-brand-dark-gold font-bold">
          {new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
