import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';
import SEOManager from '../components/SEOManager';
import SectionBackground from '../components/SectionBackground';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';
import { type Review, type Product } from '../types';
import { useRecentlyViewed } from '../hooks/useRecentlyViewed';
import RecentlyViewedProducts from '../components/RecentlyViewedProducts';
import StickyAddToCartBar from '../components/StickyAddToCartBar';

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

// ImageZoom component for the main product image
const ImageZoom: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
    const [zoom, setZoom] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (imageRef.current) {
            const { left, top, width, height } = imageRef.current.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            setMousePosition({ x, y });
        }
    };

    return (
        <div 
            ref={imageRef}
            className="relative overflow-hidden cursor-zoom-in"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onMouseMove={handleMouseMove}
        >
            <img src={src} alt={alt} className="w-full h-full object-cover transition-opacity duration-300" style={{ opacity: zoom ? 0 : 1 }} />
            {zoom && (
                <div
                    className="absolute inset-0 bg-no-repeat bg-center pointer-events-none"
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: '200%',
                        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                    }}
                />
            )}
        </div>
    );
};


export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useAppContext();
  const { t, getMultilingual } = useLanguage();
  const { addToCart } = useCart();
  const { addProductToRecentlyViewed } = useRecentlyViewed();
  
  const product = products.find(p => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(product?.imageUrls[0] || '');
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');
  const [notification, setNotification] = useState('');
  const [error, setError] = useState('');
  const [reviewSort, setReviewSort] = useState<'newest' | 'rating-high' | 'rating-low'>('newest');

  const [showStickyBar, setShowStickyBar] = useState(false);
  const mainAddToCartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      addProductToRecentlyViewed(product.id);
      setActiveImage(product.imageUrls[0]);
      setSelectedSize(null);
    }
  }, [product, addProductToRecentlyViewed]);

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              setShowStickyBar(!entry.isIntersecting);
          },
          { rootMargin: "0px", threshold: 0 }
      );

      const currentRef = mainAddToCartRef.current;
      if (currentRef) {
          observer.observe(currentRef);
      }

      return () => {
          if (currentRef) {
              observer.unobserve(currentRef);
          }
      };
  }, []);

  const averageRating = useMemo(() => {
    if (!product?.reviews || product.reviews.length === 0) return 0;
    const total = product.reviews.reduce((acc, review) => acc + review.rating, 0);
    return total / product.reviews.length;
  }, [product?.reviews]);

  const sortedReviews = useMemo(() => {
    if (!product?.reviews) return [];
    return [...product.reviews].sort((a, b) => {
        switch (reviewSort) {
            case 'rating-high': return b.rating - a.rating;
            case 'rating-low': return a.rating - b.rating;
            case 'newest':
            default:
                return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
    });
  }, [product?.reviews, reviewSort]);


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
  ).slice(0, 8);

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize && product.sizes[0] !== 'N/A' && product.sizes[0] !== 'One Size') {
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
  
  const { pageTitle, productDescription } = useMemo(() => {
    const title = `${productName} | ${t('brand_name')}`;
    const description = t('meta_desc_product', {
        productName: productName,
        category: getMultilingual(product.category),
        material: getMultilingual(product.specifications.material),
    }).substring(0, 160);
    return { pageTitle: title, productDescription: description };
  }, [product, productName, t, getMultilingual]);
  
  const breadcrumbLinks: BreadcrumbLink[] = [
    { name: t('home'), to: '/' },
    { name: t('shop'), to: '/shop' },
    { name: productName, to: `/product/${product.id}` },
  ];
  
  const tabButtonStyle = (isActive: boolean) => 
    `px-4 sm:px-6 py-3 font-bold text-base sm:text-lg border-b-4 transition-colors duration-300 ${
        isActive 
        ? 'border-brand-red text-brand-red' 
        : 'border-transparent text-gray-500 hover:border-brand-red/50 hover:text-brand-red'
    }`;


  return (
    <>
      <SEOManager title={pageTitle} description={productDescription} />
      <Breadcrumbs links={breadcrumbLinks} />
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Image Gallery */}
                <div className="flex flex-col gap-4 sticky top-28">
                    <div className="border border-legacy-gold/30 rounded-lg shadow-lg overflow-hidden aspect-square">
                        <ImageZoom src={activeImage} alt={getMultilingual(product.name)} />
                    </div>
                    <div className="grid grid-cols-5 gap-4">
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
                    <h1 className="text-4xl lg:text-5xl font-serif-zh font-bold text-brand-red mb-3">{getMultilingual(product.name)}</h1>
                    
                    {product.reviews && product.reviews.length > 0 && (
                      <div className="flex items-center gap-2 mb-4">
                        <StarRating rating={averageRating} />
                        <a href="#reviews" className="text-light-text/80 hover:underline">{t('basedOnReviews', { count: product.reviews.length })}</a>
                      </div>
                    )}

                    <p className="text-4xl font-bold text-brand-dark-gold mb-6">
                        {new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(product.price)}
                    </p>
                    
                    <div className="text-green-600 font-semibold mb-6 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        {t('inStock')}
                    </div>

                    <p className="text-light-text mb-8 leading-relaxed text-lg">{getMultilingual(product.description).split('.')[0]}.</p>

                    {product.sizes.length > 1 && product.sizes[0] !== 'N/A' && product.sizes[0] !== 'One Size' && (
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-brand-red mb-3">{t('selectSize')}: <span className="text-light-text font-medium">{selectedSize}</span></h3>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map(size => (
                                    <button 
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-5 py-2 border-2 rounded-lg font-semibold transition-all duration-200 min-w-[50px] text-center ${
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
                
                    <div ref={mainAddToCartRef} className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                        <div className="flex items-center border-2 border-legacy-gold rounded-full">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-5 py-3 text-xl font-bold text-brand-red rounded-l-full hover:bg-blush-silk/50 transition">-</button>
                            <input type="number" value={quantity} readOnly className="w-16 text-center text-lg font-bold bg-transparent focus:outline-none" />
                            <button onClick={() => setQuantity(q => q + 1)} className="px-5 py-3 text-xl font-bold text-brand-red rounded-r-full hover:bg-blush-silk/50 transition">+</button>
                        </div>
                        <button onClick={handleAddToCart} className="w-full sm:w-auto flex-grow px-8 py-4 bg-legacy-gold text-brand-red font-bold text-xl rounded-full hover:bg-brand-dark-gold transition-transform transform hover:scale-105 shadow-xl">
                            {t('addToCart')}
                        </button>
                    </div>

                    {error && <div className="text-center text-red-600 font-semibold bg-red-100 p-3 rounded-lg mb-4">{error}</div>}
                    {notification && <div className="text-center text-green-700 font-semibold bg-green-100 p-3 rounded-lg mb-4">{notification}</div>}

                </div>
            </div>

            <div id="reviews" className="mt-16 pt-8">
                <div className="border-b border-legacy-gold/30 mb-8">
                    <nav className="flex items-center -mb-px space-x-2 sm:space-x-6">
                        <button onClick={() => setActiveTab('description')} className={tabButtonStyle(activeTab === 'description')}>{t('description')}</button>
                        <button onClick={() => setActiveTab('specs')} className={tabButtonStyle(activeTab === 'specs')}>{t('specifications')}</button>
                        <button onClick={() => setActiveTab('reviews')} className={tabButtonStyle(activeTab === 'reviews')}>{t('reviews')} ({product.reviews?.length || 0})</button>
                    </nav>
                </div>

                <div className="bg-light-bg/50 p-6 sm:p-12 rounded-lg shadow-inner border border-legacy-gold/20 min-h-[300px]">
                    {activeTab === 'description' && (
                        <div className="prose prose-lg max-w-none text-light-text leading-relaxed">
                            {getMultilingual(product.description).split('\n').map((para, index) => <p key={index}>{para}</p>)}
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
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                                <h2 className="text-2xl font-bold text-brand-red mb-4 sm:mb-0">{t('customerReviews')}</h2>
                                <div className="flex items-center gap-2">
                                    <label htmlFor="sort-reviews" className="font-semibold text-light-text">{t('sortBy')}:</label>
                                    <select
                                        id="sort-reviews"
                                        value={reviewSort}
                                        onChange={(e) => setReviewSort(e.target.value as any)}
                                        className="bg-white border border-legacy-gold/50 rounded-md p-2"
                                    >
                                        <option value="newest">{t('sortNewest')}</option>
                                        <option value="rating-high">{t('sortRatingHigh')}</option>
                                        <option value="rating-low">{t('sortRatingLow')}</option>
                                    </select>
                                </div>
                            </div>
                            {(!sortedReviews || sortedReviews.length === 0) ? (
                                <p>{t('noReviews')}</p>
                            ) : (
                                <div className="space-y-8">
                                    {sortedReviews.map((review: Review) => (
                                        <div key={review.id} className="border-b border-legacy-gold/20 pb-6 last:border-b-0">
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
        
      <RecentlyViewedProducts currentProductId={product.id} />

      {relatedProducts.length > 0 && (
        <SectionBackground className="mt-16">
          <div className="container mx-auto px-6 py-16">
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

      {showStickyBar && (
          <StickyAddToCartBar 
              product={product}
              selectedSize={selectedSize}
              onSizeSelect={setSelectedSize}
              onAddToCart={handleAddToCart}
          />
      )}
    </>
  );
};
