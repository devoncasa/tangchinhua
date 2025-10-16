
import React, { useState, useMemo } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { useLanguage } from '../contexts/LanguageContext';
import ProductCard from '../components/ProductCard';
import SEOManager from '../components/SEOManager';
import SectionBackground from '../components/SectionBackground';
import ChecklistItemCard from '../components/ChecklistItemCard';
import { MultilingualString } from '../types';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';

const ShopPage = () => {
    const { products, checklistData } = useAppContext();
    const { t, getMultilingual } = useLanguage();
    
    // State for main product filtering and sorting
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedSize, setSelectedSize] = useState<string>('all');
    const [selectedColor, setSelectedColor] = useState<string>('all');
    const [sortBy, setSortBy] = useState<string>('popularity');
    
    // State for checklist section
    const [selectedChecklistCategory, setSelectedChecklistCategory] = useState<string>('all');

    // Get unique product categories with images for the filter
    const uniqueCategoriesWithImages = useMemo(() => {
        const categoriesMap = new Map<string, { name: MultilingualString, imageUrl: string }>();
        products.forEach(p => {
            if (!categoriesMap.has(p.category.en)) {
                categoriesMap.set(p.category.en, {
                    name: p.category,
                    imageUrl: p.imageUrls[0]
                });
            }
        });
        return Array.from(categoriesMap.values());
    }, [products]);

    // Get unique sizes from all products
    const uniqueSizes = useMemo(() => {
        const allSizes = products.flatMap(p => p.sizes);
        return Array.from(new Set(allSizes));
    }, [products]);

    // Get unique colors from all products
    const uniqueColors = useMemo(() => {
        const colorsMap = new Map<string, MultilingualString>();
        products.forEach(p => {
            if (!colorsMap.has(p.specifications.color.en)) {
                colorsMap.set(p.specifications.color.en, p.specifications.color);
            }
        });
        return Array.from(colorsMap.values());
    }, [products]);

    // Apply filtering and sorting to products
    const filteredAndSortedProducts = useMemo(() => {
        let items = [...products];

        // Filter by category
        if (selectedCategory !== 'all') {
            items = items.filter(p => p.category.en === selectedCategory);
        }
        
        // Filter by size
        if (selectedSize !== 'all') {
            items = items.filter(p => p.sizes.includes(selectedSize));
        }

        // Filter by color
        if (selectedColor !== 'all') {
            items = items.filter(p => p.specifications.color.en === selectedColor);
        }

        // Sort items
        switch (sortBy) {
            case 'price-asc':
                items.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                items.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                items.sort((a, b) => getMultilingual(a.name).localeCompare(getMultilingual(b.name)));
                break;
            case 'name-desc':
                items.sort((a, b) => getMultilingual(b.name).localeCompare(getMultilingual(a.name)));
                break;
            case 'popularity':
            default:
                // The default order is considered 'popularity'
                break;
        }

        return items;
    }, [products, selectedCategory, selectedSize, selectedColor, sortBy, getMultilingual]);

    const filteredChecklistCategories = useMemo(() => {
        if (selectedChecklistCategory === 'all') {
            return checklistData;
        }
        return checklistData.filter(category => category.id === selectedChecklistCategory);
    }, [checklistData, selectedChecklistCategory]);

    const sortOptions = [
        { value: 'popularity', label: t('sortByPopularity') },
        { value: 'price-asc', label: t('sortByPriceAsc') },
        { value: 'price-desc', label: t('sortByPriceDesc') },
        { value: 'name-asc', label: t('sortByNameAsc') },
        { value: 'name-desc', label: t('sortByNameDesc') },
    ];
    
    const customSelectStyles = "bg-light-bg/80 border border-legacy-gold/50 text-light-text rounded-lg focus:ring-legacy-gold focus:border-legacy-gold block w-full p-2.5";

    const breadcrumbLinks: BreadcrumbLink[] = [
        { name: t('home'), to: '/' },
        { name: t('shop'), to: '/shop' },
    ];

    const filterButtonStyle = (isActive: boolean) => 
        `px-4 py-2 rounded-full font-semibold transition-all duration-300 border-2 text-sm ${
            isActive
            ? 'bg-brand-red text-white border-brand-red shadow-md'
            : 'bg-white text-brand-red border-legacy-gold/50 hover:border-brand-red hover:bg-blush-silk/50'
        }`;

    return (
        <>
            <SEOManager 
                title={t('meta_title_shop')}
                description={t('meta_desc_shop')}
            />
            <Breadcrumbs links={breadcrumbLinks} />
            <SectionBackground>
                <div className="container mx-auto px-6 pt-16 pb-10">
                    <h1 className="text-4xl md:text-5xl font-serif-zh font-bold text-brand-red text-center mb-4">{t('shop')}</h1>
                    <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-light-text opacity-90">
                        {t('shopIntro')}
                    </p>

                    {/* Visual Category Filter */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-brand-red mb-4 text-center md:text-left">{t('filterByCategoryLabel')}</h2>
                        <div className="flex items-center space-x-3 sm:space-x-4 overflow-x-auto pb-4 -mb-4">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`flex-shrink-0 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 border-2 text-sm sm:text-base ${
                                    selectedCategory === 'all'
                                    ? 'bg-brand-red text-white border-brand-red shadow-lg'
                                    : 'bg-white text-brand-red border-legacy-gold/50 hover:border-brand-red hover:bg-blush-silk/50'
                                }`}
                            >
                                {t('allProducts')}
                            </button>
                            {uniqueCategoriesWithImages.map(cat => (
                                <button
                                    key={cat.name.en}
                                    onClick={() => setSelectedCategory(cat.name.en)}
                                    className={`flex-shrink-0 w-36 h-20 sm:w-40 sm:h-24 rounded-lg overflow-hidden relative group transition-all duration-300 border-2 shadow-md ${
                                        selectedCategory === cat.name.en
                                        ? 'border-brand-red ring-2 ring-brand-red/50 scale-105'
                                        : 'border-transparent hover:border-brand-red/50'
                                    }`}
                                >
                                    <img src={cat.imageUrl} alt={getMultilingual(cat.name)} className="absolute w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center p-2">
                                        <h3 className="text-white text-center text-sm sm:text-base font-bold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                                            {getMultilingual(cat.name)}
                                        </h3>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Size and Color Filters */}
                    <div className="mb-10 space-y-6 bg-light-bg/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-md border border-legacy-gold/30">
                        <div>
                            <h3 className="text-xl font-bold text-brand-red mb-3">{t('filterBySizeLabel')}</h3>
                            <div className="flex flex-wrap items-center gap-2">
                                <button onClick={() => setSelectedSize('all')} className={filterButtonStyle(selectedSize === 'all')}>
                                    {t('allSizes')}
                                </button>
                                {uniqueSizes.map(size => (
                                    <button key={size} onClick={() => setSelectedSize(size)} className={filterButtonStyle(selectedSize === size)}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-brand-red mb-3">{t('filterByColorLabel')}</h3>
                            <div className="flex flex-wrap items-center gap-2">
                                <button onClick={() => setSelectedColor('all')} className={filterButtonStyle(selectedColor === 'all')}>
                                    {t('allColors')}
                                </button>
                                {uniqueColors.map(color => (
                                    <button key={color.en} onClick={() => setSelectedColor(color.en)} className={filterButtonStyle(selectedColor === color.en)}>
                                        {getMultilingual(color)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Sort Controls & Results Count */}
                    <div className="bg-light-bg/60 backdrop-blur-sm p-4 rounded-lg shadow-md mb-8 border border-legacy-gold/30 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="font-semibold text-light-text text-sm">{t('productCount', { count: filteredAndSortedProducts.length })}</p>
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <label htmlFor="sort-by" className="text-sm font-bold text-brand-red flex-shrink-0">{t('sortByLabel')}</label>
                            <select 
                                id="sort-by"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className={`${customSelectStyles} text-sm w-full`}
                            >
                                {sortOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredAndSortedProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </SectionBackground>
            
            <SectionBackground>
                <div className="container mx-auto px-6 py-16">
                    <h2 className="text-4xl md:text-5xl font-serif-zh font-bold text-brand-red text-center mb-4">{t('ceremonialItemsTitle')}</h2>
                     <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-light-text opacity-90">
                        {t('ceremonialItemsIntro')}
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                        <button 
                            onClick={() => setSelectedChecklistCategory('all')}
                             className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                                selectedChecklistCategory === 'all' 
                                ? 'bg-brand-red text-white shadow-md' 
                                : 'bg-light-bg/60 text-brand-red hover:bg-brand-red/10'
                            }`}
                        >
                            {t('allCategories')}
                        </button>
                        {checklistData.map(category => (
                            <button 
                                key={category.id} 
                                onClick={() => setSelectedChecklistCategory(category.id)}
                                className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                                    selectedChecklistCategory === category.id 
                                    ? 'bg-brand-red text-white shadow-md' 
                                    : 'bg-light-bg/60 text-brand-red hover:bg-brand-red/10'
                                }`}
                            >
                                {getMultilingual(category.category)}
                            </button>
                        ))}
                    </div>

                    {/* Checklist Items Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                        {filteredChecklistCategories.flatMap(category => category.tasks).map(task => (
                            <ChecklistItemCard key={task.id} task={task} />
                        ))}
                    </div>
                </div>
            </SectionBackground>
        </>
    );
};

export default ShopPage;