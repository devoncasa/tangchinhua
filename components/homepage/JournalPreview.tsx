
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { useLanguage } from '../../contexts/LanguageContext';

const JournalPreview = () => {
  const { blogEntries } = useAppContext();
  const latestPosts = [...blogEntries].reverse().slice(0, 2);
  const { t, getMultilingual } = useLanguage();

  return (
    <section className="bg-brand-soft-pink bg-lattice py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red" data-aos="fade-up">{t('fromOurJournal')}</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {latestPosts.map((entry, index) => (
            <div key={entry.id} className="bg-light-bg p-8 rounded-lg shadow-lg border border-legacy-gold/30 text-center flex flex-col justify-between" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <h3 className="text-2xl font-serif-en font-bold text-brand-red mb-4 flex-grow flex items-center justify-center">
                    {getMultilingual(entry.title)}
                </h3>
                <Link to="/blog" className="font-bold text-brand-rose-pink hover:underline mt-4">
                    {t('readArticle')}
                </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-16" data-aos="fade-up">
            <Link
                to="/blog"
                className="inline-block px-8 py-3 bg-legacy-gold text-brand-red font-bold text-lg rounded-full hover:bg-brand-dark-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
                {t('visitKnowledgeHub')}
            </Link>
        </div>
      </div>
    </section>
  );
};

export default JournalPreview;
