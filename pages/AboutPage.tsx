import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOManager from '../components/SEOManager';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';

const AboutPage = () => {
    const { t } = useLanguage();

    const breadcrumbLinks: BreadcrumbLink[] = [
        { name: t('home'), to: '/' },
        { name: t('about'), to: '/about' },
    ];

    return (
        <>
            <SEOManager
                title={t('meta_title_about')}
                description={t('meta_desc_about')}
            />
            <Breadcrumbs links={breadcrumbLinks} />
            <div className="bg-light-bg">
                <div className="container mx-auto px-6 py-20">
                    <h1 className="text-4xl md:text-5xl font-serif-zh font-bold text-brand-red text-center mb-16" data-aos="fade-down">{t('about')}</h1>
                    
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        <div className="md:col-span-1" data-aos="fade-right">
                             <img src="https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.40.webp" alt="Founder of Tang Chin Hua" className="rounded-lg shadow-xl border-4 border-legacy-gold/50 w-full h-auto object-cover" />
                        </div>
                        <div className="md:col-span-2 bg-blush-silk/20 p-8 rounded-lg shadow-inner border border-legacy-gold/30" data-aos="fade-left">
                            <h2 className="text-2xl font-serif-en font-bold text-brand-red mb-4">{t('about_subtitle')}</h2>
                            <div className="prose prose-lg max-w-none text-light-text space-y-6">
                                <p>
                                    {t('about_p1')}
                                </p>
                                <p>
                                    {t('about_p2')}
                                </p>
                                <p>
                                    {t('about_p3')}
                                </p>
                                <p>
                                    {t('about_p4')}
                                </p>
                                <p>
                                    {t('about_p5')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;