import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Product } from '../types';

interface StickyAddToCartBarProps {
    product: Product;
    selectedSize: string | null;
    onSizeSelect: (size: string) => void;
    onAddToCart: () => void;
}

const StickyAddToCartBar: React.FC<StickyAddToCartBarProps> = ({ product, selectedSize, onSizeSelect, onAddToCart }) => {
    const { t, getMultilingual } = useLanguage();
    const hasSizes = product.sizes.length > 1 && product.sizes[0] !== 'N/A' && product.sizes[0] !== 'One Size';

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-light-bg/95 backdrop-blur-sm p-3 border-t-2 border-legacy-gold/50 shadow-[0_-4px_15px_rgba(0,0,0,0.1)] z-40">
            <div className="flex flex-col gap-3">
                {hasSizes && (
                    <div>
                        <label className="text-sm font-bold text-brand-red mb-1 block">{t('selectSize')}</label>
                        <div className="flex space-x-2 overflow-x-auto pb-2 -mb-2">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => onSizeSelect(size)}
                                    className={`flex-shrink-0 px-4 py-1.5 border-2 rounded-lg font-semibold transition-all text-sm ${
                                        selectedSize === size
                                            ? 'bg-brand-red text-white border-brand-red'
                                            : 'bg-white text-brand-red border-legacy-gold'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                        <p className="text-xl font-bold text-brand-dark-gold">
                            {new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 0 }).format(product.price)}
                        </p>
                    </div>
                    <button
                        onClick={onAddToCart}
                        className="w-full flex-grow px-6 py-3 bg-legacy-gold text-brand-red font-bold text-lg rounded-lg hover:bg-brand-dark-gold transition-colors shadow-lg"
                    >
                        {t('addToCart')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StickyAddToCartBar;
