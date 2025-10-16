
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import SEOManager from '../components/SEOManager';
import SectionBackground from '../components/SectionBackground';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { t, getMultilingual } = useLanguage();

  const handleQuantityChange = (id: string, currentQuantity: number, amount: number) => {
    const newQuantity = currentQuantity + amount;
    updateQuantity(id, newQuantity);
  };
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(amount);
  };

  const breadcrumbLinks: BreadcrumbLink[] = [
    { name: t('home'), to: '/' },
    { name: t('shoppingCart'), to: '/cart' },
  ];

  if (cartItems.length === 0) {
    return (
      <>
        <SEOManager
            title={t('meta_title_cart')}
            description={t('meta_desc_cart')}
        />
        <Breadcrumbs links={breadcrumbLinks} />
        <SectionBackground>
            <div className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl font-serif-zh font-bold text-brand-red mb-4">{t('shoppingCart')}</h1>
                <p className="text-xl text-light-text mb-8">{t('emptyCart')}</p>
                <Link 
                    to="/shop"
                    className="px-8 py-3 bg-legacy-gold text-brand-red font-bold text-lg rounded-full hover:bg-brand-dark-gold transition-transform transform hover:scale-105 shadow-lg"
                >
                {t('continueShopping')}
                </Link>
            </div>
        </SectionBackground>
      </>
    );
  }

  return (
    <>
        <SEOManager
            title={t('meta_title_cart')}
            description={t('meta_desc_cart')}
        />
        <Breadcrumbs links={breadcrumbLinks} />
        <SectionBackground>
            <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-serif-zh font-bold text-brand-red text-center mb-16">{t('shoppingCart')}</h1>
            
            <div className="bg-light-bg/60 backdrop-blur-sm shadow-lg rounded-lg p-6 sm:p-10 border border-legacy-gold/30">
                {/* Cart Header */}
                <div className="hidden md:grid grid-cols-6 gap-4 font-bold text-brand-red border-b border-legacy-gold/40 pb-4 mb-4">
                <div className="col-span-2">{t('product')}</div>
                <div className="text-center">{t('price')}</div>
                <div className="text-center">{t('quantity')}</div>
                <div className="text-right">{t('total')}</div>
                <div></div>
                </div>

                {/* Cart Items */}
                {cartItems.map(item => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center border-b border-legacy-gold/20 py-6">
                    <div className="col-span-2 flex items-center space-x-4">
                    <img src={item.imageUrl} alt={getMultilingual(item.name)} className="w-20 h-24 object-cover rounded"/>
                    <div>
                        <p className="font-bold text-light-text">{getMultilingual(item.name)}</p>
                    </div>
                    </div>
                    <div className="text-center text-brand-dark-gold font-semibold">{formatCurrency(item.price)}</div>
                    <div className="flex justify-center items-center">
                    <div className="flex items-center border border-legacy-gold rounded-full">
                        <button onClick={() => handleQuantityChange(item.id, item.quantity, -1)} className="px-3 py-1 text-lg font-bold text-brand-red rounded-l-full hover:bg-blush-silk/50 transition">-</button>
                        <span className="px-4 py-1 text-md font-bold">{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.id, item.quantity, 1)} className="px-3 py-1 text-lg font-bold text-brand-red rounded-r-full hover:bg-blush-silk/50 transition">+</button>
                    </div>
                    </div>
                    <div className="text-right text-brand-dark-gold font-bold">{formatCurrency(item.price * item.quantity)}</div>
                    <div className="text-center">
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-brand-red transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                </div>
                ))}
                
                {/* Cart Summary */}
                <div className="mt-12 flex flex-col items-end">
                    <div className="w-full md:w-1/2 lg:w-1/3 bg-antique-cream p-6 rounded-lg border border-legacy-gold/50">
                        <h2 className="text-2xl font-bold text-brand-red mb-4">{t('cartSummary')}</h2>
                        <div className="flex justify-between text-xl font-bold text-light-text mb-6 border-t border-brand-red/20 pt-4">
                            <span>{t('subtotal')}:</span>
                            <span>{formatCurrency(cartTotal)}</span>
                        </div>
                        <button className="w-full px-8 py-4 bg-legacy-gold text-brand-red font-bold text-lg rounded-full hover:bg-brand-dark-gold transition-transform transform hover:scale-105 shadow-xl">
                            {t('checkout')}
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </SectionBackground>
    </>
  );
};

export default CartPage;