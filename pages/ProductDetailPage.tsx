import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';
import SEOManager from '../components/SEOManager';
import SectionBackground from '../components/SectionBackground';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';
import { type Review } from '../types';

// StarRating component for displaying reviews
const StarRating: React.FC<{ rating: number; totalStars?: number }> = ({ rating, totalStars = 5 }) => (
  <div className="flex items-center">
    {[...Array(totalStars)].map((_, index) => {
      const starValue = index + 1;
      return (
        <svg
          key={index}
          className={`w-5 h-5 ${starValue <= rating ? 'text-legacy-gold' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.539 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.35 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      );
    })}
  </div>
);


export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useAppContext();
  const { t, getMultilingual } = useLanguage();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(product?.imageUrls[0] || '');
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');
  const [notification, setNotification] = useState('');
  const [error, setError] = useState('');

  // Update active image if product changes
  React.useEffect(() => {
    if (product) {
      setActiveImage(product.imageUrls[0]);
      setSelectedSize(null); // Reset size on product change
    }
  }, [product]);

  const averageRating = useMemo(() => {
    if (!product?.reviews || product.reviews.length === 0) return 0;
    const total = product.reviews.reduce((acc, review) => acc + review.rating, 0);
    return total / product.reviews.length;
  }, [product?.reviews]);


  if (!product) {
    return (
      <>
        <SEOManager title={t('productNotFound')} description="" />
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-brand-red">{t('productNotFound')}</h2>
          <Link to="/shop" className="mt-8 inline-block px-8 py-3 bg-legacy-gold text-brand-red font-bold text-lg rounded-full hover:bg-brand-dark-gold transition-transform transform hover:scale-105 shadow-lg">
            {t('backToShop')}
          </Link>
        </div>
      </>
    );
  }
  
  const relatedProducts = products.filter(
    p => p.category.en === product.category.en && p.id !== product.id
  ).slice(0, 8); // Show more related products for carousel

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      setError(t('sizeRequired'));
      setTimeout(() => setError(''), 3000);
      return;
    }
    setError('');
    addToCart(product, quantity, selectedSize || undefined);
    const message = t('addedToCart', { quantity, productName: getMultilingual(product.name) });
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };
  
  const productName = getMultilingual(product.name);
  const pageTitle = `${productName} | ${t('brand_name')}`;
  const productDescription = t('meta_desc_product', {
    productName: productName,
    category: getMultilingual(product.category),
    material: getMultilingual(product.specifications.material),
  }).substring(0, 160);
  
  const breadcrumbLinks: BreadcrumbLink[] = [
    { name: t('home'), to: '/' },
    { name: t('shop'), to: '/shop' },
    { name: productName, to: `/product/${product.id}` },
  ];
  
  const tabButtonStyle = (isActive: boolean) => 
    `px-6 py-3 font-bold text-lg border-b-4 transition-colors duration-300 ${
        isActive 
        ? 'border-brand-red text-brand-red' 
        : 'border-transparent text-gray-500 hover:border-brand-red/50 hover:text-brand-red'
    }`;


  return (
    <>
      <SEOManager title={pageTitle} description={productDescription} />
      <Breadcrumbs links={breadcrumbLinks} />
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Image Gallery */}
                <div className="flex flex-col gap-4">
                    <div className="border border-legacy-gold/30 rounded-lg shadow-lg overflow-hidden aspect-square">
                        <img src={activeImage} alt={getMultilingual(product.name)} className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.imageUrls.map((url, index) => (
                            <button 
                                key={index} 
                                onClick={() => setActiveImage(url)}
                                className={`aspect-square border-2 rounded-md overflow-hidden transition-all duration-200 ${
                                    activeImage === url ? 'border-brand-red scale-105 shadow-md' : 'border-legacy-gold/30 hover:border-brand-red/70'
                                }`}
                            >
                                <img src={url} alt={`${getMultilingual(product.name)} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info & Actions */}
                <div>
                    <h1 className="text-4xl font-serif-zh font-bold text-brand-red mb-4">{getMultilingual(product.name)}</h1>
                    
                    {product.reviews && product.reviews.length > 0 && (
                      <div className="flex items-center gap-2 mb-4">
                        <StarRating rating={averageRating} />
                        <span className="text-light-text/80">{t('basedOnReviews', { count: product.reviews.length })}</span>
                      </div>
                    )}

                    <p className="text-3xl font-bold text-brand-dark-gold mb-6">
                        {new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(product.price)}
                    </p>
                    <p className="text-light-text mb-8 leading-relaxed text-lg">{getMultilingual(product.description).split('.')[0]}.</p>

                    {/* Size Selector */}
                    {product.sizes.length > 1 && product.sizes[0] !== 'N/A' && product.sizes[0] !== 'One Size' && (
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-brand-red mb-3">{t('selectSize')}:</h3>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map(size => (
                                    <button 
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-5 py-2 border-2 rounded-full font-semibold transition-all duration-200 ${
                                            selectedSize === size 
                                            ? 'bg-brand-red text-white border-brand-red scale-105 shadow-md'
                                            : 'bg-white text-brand-red border-legacy-gold hover:border-brand-red'
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                        {/* Quantity Selector */}
                        <div className="flex items-center border-2 border-legacy-gold rounded-full">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-5 py-3 text-xl font-bold text-brand-red rounded-l-full hover:bg-blush-silk/50 transition">-</button>
                            <input type="number" value={quantity} readOnly className="w-16 text-center text-lg font-bold bg-transparent focus:outline-none" />
                            <button onClick={() => setQuantity(q => q + 1)} className="px-5 py-3 text-xl font-bold text-brand-red rounded-r-full hover:bg-blush-silk/50 transition">+</button>
                        </div>
                        {/* Add to Cart Button */}
                        <button onClick={handleAddToCart} className="w-full sm:w-auto flex-grow px-8 py-4 bg-legacy-gold text-brand-red font-bold text-lg rounded-full hover:bg-brand-dark-gold transition-transform transform hover:scale-105 shadow-xl">
                            {t('addToCart')}
                        </button>
                    </div>

                    {error && <div className="text-center text-red-600 font-semibold bg-red-100 p-3 rounded-lg mb-4">{error}</div>}
                    {notification && <div className="text-center text-green-700 font-semibold bg-green-100 p-3 rounded-lg mb-4">{notification}</div>}

                </div>
            </div>

            {/* Detailed Info Tabs */}
            <div className="mt-20">
                <div className="border-b border-legacy-gold/30 mb-8">
                    <nav className="flex items-center -mb-px space-x-6">
                        <button onClick={() => setActiveTab('description')} className={tabButtonStyle(activeTab === 'description')}>{t('description')}</button>
                        <button onClick={() => setActiveTab('specs')} className={tabButtonStyle(activeTab === 'specs')}>{t('specifications')}</button>
                        <button onClick={() => setActiveTab('reviews')} className={tabButtonStyle(activeTab === 'reviews')}>{t('reviews')} ({product.reviews?.length || 0})</button>
                    </nav>
                </div>

                <div className="bg-light-bg/50 p-8 sm:p-12 rounded-lg shadow-inner border border-legacy-gold/20">
                    {activeTab === 'description' && (
                        <div className="prose prose-lg max-w-none text-light-text leading-relaxed">
                            <p>{getMultilingual(product.description)}</p>
                        </div>
                    )}
                    {activeTab === 'specs' && (
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                            <div className="flex justify-between border-b border-legacy-gold/20 py-2"><strong>{t('category')}:</strong> <span>{getMultilingual(product.category)}</span></div>
                            <div className="flex justify-between border-b border-legacy-gold/20 py-2"><strong>{t('color')}:</strong> <span>{getMultilingual(product.specifications.color)}</span></div>
                            <div className="flex justify-between border-b border-legacy-gold/20 py-2"><strong>{t('material')}:</strong> <span>{getMultilingual(product.specifications.material)}</span></div>
                            <div className="flex justify-between border-b border-legacy-gold/20 py-2"><strong>{t('pattern')}:</strong> <span>{getMultilingual(product.specifications.pattern)}</span></div>
                            <div className="flex justify-between border-b border-legacy-gold/20 py-2"><strong>{t('era')}:</strong> <span>{getMultilingual(product.specifications.era)}</span></div>
                         </div>
                    )}
                    {activeTab === 'reviews' && (
                        <div>
                            <h2 className="text-2xl font-bold text-brand-red mb-6">{t('customerReviews')}</h2>
                            {(!product.reviews || product.reviews.length === 0) ? (
                                <p>{t('noReviews')}</p>
                            ) : (
                                <div className="space-y-8">
                                    {product.reviews.map((review: Review) => (
                                        <div key={review.id} className="border-b border-legacy-gold/20 pb-6">
                                            <div className="flex items-center mb-2">
                                                <StarRating rating={review.rating} />
                                                <h3 className="ml-4 font-bold text-lg">{review.author}</h3>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-3">{new Date(review.date).toLocaleDateString()}</p>
                                            <p className="text-light-text leading-relaxed">{getMultilingual(review.comment)}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
        
      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <SectionBackground className="mt-28">
          <div className="container mx-auto px-6 py-24">
            <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red text-center mb-12">{t('youMightAlsoLike')}</h2>
            <div className="flex space-x-8 overflow-x-auto pb-6 -mb-6">
              {relatedProducts.map(p => (
                <div key={p.id} className="flex-shrink-0 w-64 sm:w-72">
                   <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </SectionBackground>
      )}
    </>
  );
};
