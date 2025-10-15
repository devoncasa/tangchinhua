import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDailyContent } from '../../hooks/useDailyContent';

const CulturalHighlights = () => {
  const { culturalTips } = useAppContext();
  const dailyTip = useDailyContent(culturalTips);
  const { t, getMultilingual } = useLanguage();
  
  if (!dailyTip) return null;

  return (
    <section className="py-24" data-aos="fade-up">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red mb-8">{t('culturalHighlights')}</h2>
        <div className="max-w-3xl mx-auto bg-white/50 p-8 rounded-lg shadow-lg border border-brand-dark-gold">
           <p className="text-lg md:text-xl text-light-text italic">
            "{getMultilingual(dailyTip.tip)}"
           </p>
           <p className="mt-4 font-semibold text-brand-dark-gold">
            - {getMultilingual(dailyTip.sourceDynasty)} -
           </p>
        </div>
      </div>
    </section>
  );
};

export default CulturalHighlights;