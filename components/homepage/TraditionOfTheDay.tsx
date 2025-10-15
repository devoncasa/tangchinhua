

import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDailyContent } from '../../hooks/useDailyContent';

const TraditionOfTheDay = () => {
  const { culturalTips } = useAppContext();
  // We can reuse culturalTips for this section
  const dailyTradition = useDailyContent([...culturalTips].reverse()); // Use a different sequence
  const { t, getMultilingual } = useLanguage();

  if (!dailyTradition) return null;
  
  return (
    <section className="py-24 bg-cover bg-center bg-fixed text-white relative" style={{backgroundImage: "url('homepage-tradition-of-the-day-background-16x9.jpg')"}}>
        <div className="absolute inset-0 bg-brand-red/80"></div>
        <div className="relative container mx-auto px-6 text-center" data-aos="fade-in">
            <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-gold mb-8" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.5)'}}>{t('traditionOfTheDay')}</h2>
            <div className="max-w-3xl mx-auto bg-black/20 p-8 rounded-lg backdrop-blur-sm border border-brand-dark-gold">
                <p className="text-lg md:text-xl italic">
                    "{getMultilingual(dailyTradition.tip)}"
                </p>
            </div>
        </div>
    </section>
  );
};

export default TraditionOfTheDay;