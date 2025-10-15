import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAppContext } from '../contexts/AppContext';
import SEOManager from '../components/SEOManager';
import SectionBackground from '../components/SectionBackground';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';

const BlogPage = () => {
    const { t, getMultilingual } = useLanguage();
    const { blogEntries } = useAppContext();
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const categories = useMemo(() => {
        const allCategories = blogEntries.flatMap(entry => entry.categories);
        return ['all', ...Array.from(new Set(allCategories))];
    }, [blogEntries]);

    const filteredPosts = useMemo(() => {
        if (selectedCategory === 'all') {
            return blogEntries;
        }
        return blogEntries.filter(entry => entry.categories.includes(selectedCategory));
    }, [blogEntries, selectedCategory]);

    // Fix: Use an explicit props interface and React.FC to ensure proper handling of the `key` prop by TypeScript.
    interface FilterButtonProps {
        filterKey: string;
        label: string;
    }

    const FilterButton: React.FC<FilterButtonProps> = ({ filterKey, label }) => (
        <button
            onClick={() => setSelectedCategory(filterKey)}
            className={`w-full text-left px-4 py-2 rounded-md transition-colors text-lg ${
                selectedCategory === filterKey
                    ? 'bg-brand-red text-white font-bold'
                    : 'text-light-text hover:bg-brand-red/10'
            }`}
        >
            {label}
        </button>
    );
    
    const breadcrumbLinks: BreadcrumbLink[] = [
        { name: t('home'), to: '/' },
        { name: t('blog'), to: '/blog' },
    ];

    return (
        <>
            <SEOManager
                title={t('meta_title_blog')}
                description={t('meta_desc_blog')}
            />
            <Breadcrumbs links={breadcrumbLinks} />
            <SectionBackground>
                <div className="container mx-auto px-6 py-20">
                    <h1 className="text-4xl md:text-5xl font-serif-zh font-bold text-brand-red text-center mb-16">{t('blog')}</h1>
                    
                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Filter Sidebar */}
                        <aside className="md:w-1/4 lg:w-1/5">
                            <div className="sticky top-28 bg-light-bg/50 p-6 rounded-lg shadow-lg border border-legacy-gold/30">
                                <h2 className="text-2xl font-bold text-brand-red mb-4 border-b border-brand-red/30 pb-2">{t('filterByCategory')}</h2>
                                <div className="space-y-2">
                                    {categories.map(category => (
                                        <FilterButton 
                                            key={category}
                                            filterKey={category}
                                            label={category === 'all' ? t('allCategories') : t(category)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* Blog Grid */}
                        <main className="md:w-3/4 lg:w-4/5">
                            {filteredPosts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                    {filteredPosts.map(entry => (
                                        <div key={entry.id} className="bg-light-bg shadow-lg hover:shadow-xl rounded-lg overflow-hidden group border border-legacy-gold/30 flex flex-col transform hover:-translate-y-1 transition-all duration-300">
                                            <div className="overflow-hidden">
                                            <img src={entry.imageUrl} alt={getMultilingual(entry.title)} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="p-8 flex flex-col flex-grow">
                                                <p className="text-sm opacity-70 mb-2">{entry.date}</p>
                                                <h2 className="text-2xl font-serif-zh font-bold text-brand-red mb-4 flex-grow">{getMultilingual(entry.title)}</h2>
                                                <div className="mb-4">
                                                    {entry.tags.map(tag => (
                                                         <span key={tag} className="inline-block bg-blush-silk text-brand-red text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                                                            #{tag}
                                                         </span>
                                                    ))}
                                                </div>
                                                <p className="text-light-text mb-4 text-ellipsis overflow-hidden leading-relaxed line-clamp-3">
                                                    {getMultilingual(entry.content)}
                                                </p>
                                                <button className="font-bold text-brand-dark-gold hover:text-brand-red transition-colors mt-auto self-start">{t('readMore')}</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16 bg-light-bg/50 rounded-lg border border-legacy-gold/30">
                                    <p className="text-xl text-gray-600">{t('noResults')}</p>
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </SectionBackground>
        </>
    );
};

export default BlogPage;