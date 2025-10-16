
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SectionBackground from '../SectionBackground';

const Testimonials = () => {
    const { t, getMultilingual } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        { quote: {en: "The most beautiful Qun Kwa I've ever seen. The quality is exceptional!", th: "ชุดคุนขวาสวยที่สุดเท่าที่เคยเห็นมา คุณภาพยอดเยี่ยมมากค่ะ!", zh: "我见过的最美的裙褂，质量非常出色！"}, author: "Mei & Li" },
        { quote: {en: "Excellent service and deep knowledge of traditions. Highly recommended!", th: "บริการดีเยี่ยมและมีความรู้เรื่องประเพณีอย่างลึกซึ้ง แนะนำเลยค่ะ!", zh: "服务周到，对传统文化有深入的了解。强烈推荐！"}, author: "Chen Family" },
        { quote: {en: "Their attention to detail is amazing. They made our day perfect.", th: "ความใส่ใจในรายละเอียดของพวกเขาน่าทึ่งมาก พวกเขาทำให้วันของเราสมบูรณ์แบบ", zh: "他们对细节的关注令人惊叹。他们让我们的日子变得完美。"}, author: "David & Wei" }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change testimonial every 5 seconds
        return () => clearTimeout(timer);
    }, [currentIndex, testimonials.length]);

    return (
        <SectionBackground>
            <div className="container mx-auto px-6 py-16">
                <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red text-center mb-12" data-aos="fade-up">{t('testimonials')}</h2>
                
                <div className="relative max-w-3xl mx-auto h-48 mb-16 text-center flex items-center justify-center" data-aos="fade-up">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`absolute w-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="bg-blush-silk/30 p-8 rounded-lg border border-legacy-gold/50">
                                <p className="italic text-light-text text-xl">"{getMultilingual(testimonial.quote)}"</p>
                                <p className="mt-4 font-bold text-brand-red text-lg">- {testimonial.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-light-bg/60 backdrop-blur-sm p-8 sm:p-12 rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-legacy-gold/50" data-aos="fade-up" data-aos-delay="200">
                    <div className="text-center lg:text-left">
                        <h3 className="text-2xl font-bold text-brand-red mb-4">{t('visitUs')}</h3>
                        <p className="text-lg opacity-90">{t('locationDirections')}</p>
                        <p className="mt-6 text-lg opacity-90">{t('connectWithUs')}</p>
                        <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                            <img src="https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.32.webp" alt="LINE QR Code" className="w-28 h-28 rounded object-cover shadow-md" />
                            <img src="https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.53.webp" alt="WeChat QR Code" className="w-28 h-28 rounded object-cover shadow-md" />
                        </div>
                    </div>
                    <div>
                         <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.633312662837!2d100.50973917621609!3d13.740636486650063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29921516faec5%3A0xc8edb4f67c7793dd!2z4LiV4Lix4LmJ4LiH4LiI4Li04LmJ4LiZ4Liu4Lix4LmJ4Lin!5e0!3m2!1sen!2sth!4v1760311432244!5m2!1sen!2sth"
                            width="100%"
                            height="300px"
                            className="rounded-lg border-2 border-legacy-gold/50"
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
    );
};

export default Testimonials;