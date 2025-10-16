
import React from 'react';
import HeroBanner from '../components/homepage/HeroBanner';
import SEOManager from '../components/SEOManager';
import { useLanguage } from '../contexts/LanguageContext';
import GuideSection from '../components/homepage/GuideSection';
import HeritageSection from '../components/homepage/HeritageSection';
import CollectionsSection from '../components/homepage/CollectionsSection';
import CommunitySection from '../components/homepage/CommunitySection';

const HomePage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SEOManager
        title={t('meta_title_home')}
        description={t('meta_desc_home')}
      />
      <HeroBanner />
      <GuideSection />
      <HeritageSection />
      <CollectionsSection />
      <CommunitySection />
    </>
  );
};

export default HomePage;