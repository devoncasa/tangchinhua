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
                                    {filteredPosts.map(entry => {
                                        const blogPageUrl = encodeURIComponent(window.location.href);
                                        const postTitle = encodeURIComponent(getMultilingual(entry.title));
                                        const postImage = encodeURIComponent(entry.imageUrl);

                                        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${blogPageUrl}`;
                                        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${blogPageUrl}&text=${postTitle}`;
                                        const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${blogPageUrl}&media=${postImage}&description=${postTitle}`;

                                        return (
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
                                                    <div className="mt-auto pt-4 border-t border-legacy-gold/20 flex justify-between items-center">
                                                        <button className="font-bold text-brand-dark-gold hover:text-brand-red transition-colors">{t('readMore')}</button>
                                                        <div className="flex items-center space-x-3">
                                                            <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="text-gray-400 hover:text-blue-600 transition-colors">
                                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path></svg>
                                                            </a>
                                                            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className="text-gray-400 hover:text-sky-500 transition-colors">
                                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.067.087.606 1.885 2.364 3.264 4.449 3.303-1.771 1.39-4.012 2.216-6.452 2.216-.42 0-.834-.025-1.242-.074 2.286 1.465 5.003 2.312 7.913 2.312 9.492 0 14.688-7.868 14.688-14.688 0-.224-.005-.447-.015-.668.995-.718 1.858-1.62 2.548-2.643z"></path></svg>
                                                            </a>
                                                            <a href={pinterestShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest" className="text-gray-400 hover:text-red-700 transition-colors">
                                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.198-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.56-5.409 5.199 0 .962.373 1.982.836 2.518.086.105.091.207.069.332-.073.415-.245.994-.288 1.133l-.053.162c-.183.565-.552.733-.926.542-1.371-.784-2.26-2.65-2.26-4.226 0-3.328 2.454-6.423 6.883-6.423 3.596 0 6.227 2.583 6.227 5.831 0 3.554-2.296 6.347-5.334 6.347-1.079 0-2.062-.566-2.408-1.215l-.482 1.849c-.439 1.696-1.493 3.962-2.274 5.271.753.385 1.564.6 2.422.6 6.607 0 11.958-5.368 11.958-11.987C23.97 5.368 18.626 0 12.017 0z"></path></svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
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