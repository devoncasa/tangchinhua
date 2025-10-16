
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOManager from '../components/SEOManager';
import SectionBackground from '../components/SectionBackground';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';

const ContactPage = () => {
    const { t } = useLanguage();

    const breadcrumbLinks: BreadcrumbLink[] = [
        { name: t('home'), to: '/' },
        { name: t('contact'), to: '/contact' },
    ];

    return (
        <>
            <SEOManager 
                title={t('meta_title_contact')}
                description={t('meta_desc_contact')}
            />
            <Breadcrumbs links={breadcrumbLinks} />
            <SectionBackground>
                <div className="container mx-auto px-6 py-16">
                    <h1 className="text-4xl md:text-5xl font-serif-zh font-bold text-brand-red text-center mb-16">{t('contact')}</h1>
                    
                    <div className="max-w-4xl mx-auto bg-light-bg/60 backdrop-blur-sm p-12 rounded-lg shadow-lg mb-12 border border-legacy-gold/30">
                         <h2 className="text-3xl font-serif-zh font-bold text-brand-red mb-4 text-center">{t('storeIntroTitle')}</h2>
                         <p className="text-lg text-light-text leading-loose text-center">{t('storeIntroBody')}</p>
                    </div>


                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-light-bg/60 backdrop-blur-sm p-12 rounded-lg shadow-lg border border-legacy-gold/30">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-brand-red mb-6">{t('getInTouch')}</h2>
                            <div className="space-y-6 text-lg text-light-text">
                                <p>
                                    <strong className="text-brand-red">{t('addressTitle')}:</strong><br/>
                                    {t('storeAddress')}
                                    <span className="block text-sm opacity-80 mt-1">{t('locationDirections')}</span>
                                </p>
                                <div>
                                    <strong className="text-brand-red">{t('openingHoursTitle')}:</strong><br/>
                                    <p>{t('openingHoursDays')}</p>
                                    <p>{t('openingHoursTimes')}</p>
                                </div>
                                <p>
                                    <strong className="text-brand-red">{t('phoneTitle')}:</strong><br/>
                                    <a href="tel:+6622238164" className="text-brand-dark-gold hover:underline">0-2223-8164</a>, <a href="tel:+66837895896" className="text-brand-dark-gold hover:underline">08-3789-5896</a>
                                </p>
                                 <p>
                                    <strong className="text-brand-red">{t('socialMedia')}:</strong><br/>
                                    <a href="https://www.facebook.com/tangchinhua" target="_blank" rel="noopener noreferrer" className="text-brand-dark-gold hover:underline">Facebook</a>, <a href="https://www.instagram.com/tangchinhuawedding" target="_blank" rel="noopener noreferrer" className="text-brand-dark-gold hover:underline">Instagram</a>
                                 </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-brand-gold/30">
                                 <h3 className="text-2xl font-bold text-brand-red mb-4">{t('connectWithUs')}</h3>
                                 <div className="flex space-x-4">
                                    <img src="https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.32.webp" alt="LINE QR Code" className="w-32 h-32 rounded object-cover" />
                                    <img src="https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.53.webp" alt="WeChat QR Code" className="w-32 h-32 rounded object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full h-full rounded-lg overflow-hidden min-h-[400px] border-2 border-legacy-gold/40">
                             <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.633312662837!2d100.50973917621609!3d13.740636486650063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29921516faec5%3A0xc8edb4f67c7793dd!2z4LiV4Lix4LmJ4LiH4LiI4Li04LmJ4LiZ4Liu4Lix4LmJ4Lin!5e0!3m2!1sen!2sth!4v1760311432244!5m2!1sen!2sth"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Tang Chin Hua Location"
                             ></iframe>
                        </div>
                    </div>
                </div>
            </SectionBackground>
        </>
    );
};

export default ContactPage;