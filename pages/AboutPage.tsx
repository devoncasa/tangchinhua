import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOManager from '../components/SEOManager';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';

const ParallaxSection: React.FC<{ imageUrl: string; children: React.ReactNode; className?: string }> = ({ imageUrl, children, className = '' }) => (
    <div className={`relative ${className}`}>
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="absolute inset-0 bg-brand-red/80" />
        <div className="relative z-10 container mx-auto px-6 py-20 text-white">
            {children}
        </div>
    </div>
);

const AboutPage = () => {
    const { t } = useLanguage();

    const breadcrumbLinks: BreadcrumbLink[] = [
        { name: t('home'), to: '/' },
        { name: t('about'), to: '/about' },
    ];

    const milestones = [
        {
            year: t('about_milestone1_year'),
            title: t('about_milestone1_title'),
            description: t('about_milestone1_desc'),
            imageUrl: 'https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.40.webp',
        },
        {
            year: t('about_milestone2_year'),
            title: t('about_milestone2_title'),
            description: t('about_milestone2_desc'),
            imageUrl: 'https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.53.webp',
        },
        {
            year: t('about_milestone3_year'),
            title: t('about_milestone3_title'),
            description: t('about_milestone3_desc'),
            imageUrl: 'https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.32.webp',
        },
    ];

    const philosophies = [
        { title: t('about_philosophy1_title'), description: t('about_philosophy1_desc') },
        { title: t('about_philosophy2_title'), description: t('about_philosophy2_desc') },
        { title: t('about_philosophy3_title'), description: t('about_philosophy3_desc') },
    ];

    return (
        <>
            <SEOManager
                title={t('meta_title_about')}
                description={t('meta_desc_about')}
            />
            <Breadcrumbs links={breadcrumbLinks} />
            
            {/* Hero Introduction */}
            <div className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center filter brightness-50"
                    style={{ backgroundImage: "url('https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.40.webp')" }}
                ></div>
                <div className="relative z-10 p-6" data-aos="fade-in">
                    <h1 className="text-4xl md:text-6xl font-serif-en font-bold text-white leading-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
                        {t('about_hero_title')}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto opacity-90" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
                        {t('about_hero_subtitle')}
                    </p>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-light-bg py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif-zh font-bold text-brand-red text-center mb-16" data-aos="fade-up">{t('about_timeline_title')}</h2>
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div className="absolute h-full border-2 border-legacy-gold/50" style={{ left: '50%' }}></div>
                        
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-brand-red shadow-xl w-12 h-12 rounded-full">
                                    <h3 className="mx-auto font-bold text-lg text-white">{milestone.year}</h3>
                                </div>
                                <div className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 border-t-4 ${index % 2 === 0 ? 'border-brand-rose-pink' : 'border-legacy-gold'}`} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                                    <h4 className="font-bold text-xl text-brand-red mb-3">{milestone.title}</h4>
                                    <img src={milestone.imageUrl} alt={milestone.title} className="w-full h-40 object-cover rounded-md mb-3" />
                                    <p className="text-sm leading-snug tracking-wide text-light-text/90">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Philosophy Section */}
            <ParallaxSection imageUrl="https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.53.webp">
                <div className="text-center">
                    <h2 className="text-4xl font-serif-zh font-bold text-white mb-12" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.5)'}} data-aos="fade-up">{t('about_philosophy_title')}</h2>
                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {philosophies.map((item, index) => (
                             <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                <h3 className="text-2xl font-serif-en font-bold text-legacy-gold mb-4">{item.title}</h3>
                                <p className="opacity-90">{item.description}</p>
                             </div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            {/* Closing Section */}
             <div className="bg-light-bg py-20 text-center">
                <div className="container mx-auto px-6">
                    <img src="https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/tangchinhua-logo-sml.png" alt="Tang Chin Hua Logo" className="mx-auto h-24 mb-6" data-aos="zoom-in" />
                    <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red mb-6" data-aos="fade-up">{t('about_closing_title')}</h2>
                    <p className="text-lg text-light-text max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        {t('about_closing_desc')}
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
