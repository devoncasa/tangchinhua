import React from 'react';
import HeroBanner from '../components/homepage/HeroBanner';
import SEOManager from '../components/SEOManager';
import { useLanguage } from '../contexts/LanguageContext';
import FeaturedCollections from '../components/homepage/FeaturedCollections';
import DiscoverTraditions from '../components/homepage/DiscoverTraditions';
import OurLegacyPreview from '../components/homepage/OurLegacyPreview';
import JournalPreview from '../components/homepage/JournalPreview';
import VisitBoutique from '../components/homepage/VisitBoutique';
import ConstructionBanner from '../components/ConstructionBanner';

const HomePage = () => {
  const { t } = useLanguage();
  return (
    <>
      <ConstructionBanner />
      <SEOManager
        title={t('meta_title_home')}
        description={t('meta_desc_home')}
      />
      <HeroBanner />
      <FeaturedCollections />
      <DiscoverTraditions />
      <OurLegacyPreview />
      <JournalPreview />
      <VisitBoutique />
    </>
  );
};

export default HomePage;
