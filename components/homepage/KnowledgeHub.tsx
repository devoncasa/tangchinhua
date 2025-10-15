
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { useLanguage } from '../../contexts/LanguageContext';
import SectionBackground from '../SectionBackground';

const KnowledgeHub = () => {
  const { blogEntries } = useAppContext();
  const latestPosts = [...blogEntries].reverse().slice(0, 3);
  const { t, getMultilingual } = useLanguage();

  return (
    <SectionBackground>
      <div className="container mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red text-center mb-12" data-aos="fade-up">{t('knowledgeHub')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((entry, index) => (
            <Link to="/blog" key={entry.id} className="bg-light-bg dark:bg-dark-card shadow-lg rounded-lg overflow-hidden group border border-legacy-gold/30 dark:border-dark-border flex flex-col transform hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="overflow-hidden relative pb-[75%]">
                <img src={entry.imageUrl} alt={getMultilingual(entry.title)} className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif-zh font-bold text-brand-red mb-3 flex-grow">{getMultilingual(entry.title)}</h3>
                <p className="text-sm opacity-80 mb-4 line-clamp-3">
                  {getMultilingual(entry.content)}
                </p>
                <div className="mt-auto font-bold text-brand-dark-gold group-hover:text-brand-red transition-colors duration-300 self-start">
                  {t('readMore')}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
};

export default KnowledgeHub;
