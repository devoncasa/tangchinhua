
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MultilingualString } from '../../types';

interface Testimonial {
    quote: MultilingualString;
    author: string;
    event: MultilingualString;
}

const CommunitySection = () => {
    const { t, getMultilingual } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: Testimonial[] = [
        { 
            quote: {en: "The most beautiful Qun Kwa I've ever seen. The quality is exceptional!", th: "ชุดคุนขวาสวยที่สุดเท่าที่เคยเห็นมา คุณภาพยอดเยี่ยมมากค่ะ!", zh: "我见过的最美的裙褂，质量非常出色！"}, 
            author: "Mei & Li",
            event: { en: t('event_wedding'), th: t('event_wedding'), zh: t('event_wedding') }
        },
        { 
            quote: {en: "Excellent service and deep knowledge of traditions. Highly recommended!", th: "บริการดีเยี่ยมและมีความรู้เรื่องประเพณีอย่างลึกซึ้ง แนะนำเลยค่ะ!", zh: "服务周到，对传统文化有深入的了解。强烈推荐！"}, 
            author: "Chen Family",
            event: { en: t('event_consultation'), th: t('event_consultation'), zh: t('event_consultation') }
        },
        { 
            quote: {en: "Their attention to detail is amazing. They made our day perfect.", th: "ความใส่ใจในรายละเอียดของพวกเขาน่าทึ่งมาก พวกเขาทำให้วันของเราสมบูรณ์แบบ", zh: "他们对细节的关注令人惊叹。他们让我们的日子变得完美。"}, 
            author: "David & Wei",
            event: { en: t('event_wedding'), th: t('event_wedding'), zh: t('event_wedding') }
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);
        return () => clearTimeout(timer);
    }, [currentIndex, testimonials.length]);

    return (
        <section className="bg-brand-soft-pink bg-lattice py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red mb-12" data-aos="fade-up">
                    {t('communityTitle')}
                </h2>
                
                <div className="relative max-w-3xl mx-auto h-48 flex items-center justify-center" data-aos="fade-up" data-aos-delay="100">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`absolute w-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-2xl italic text-charcoal-ink/90 leading-relaxed">"{getMultilingual(testimonial.quote)}"</p>
                            <p className="mt-6 font-bold text-brand-rose-pink text-lg">- {testimonial.author}</p>
                            <p className="text-charcoal-ink/60">{getMultilingual(testimonial.event)}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center space-x-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-brand-rose-pink' : 'bg-brand-rose-pink/30'}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;