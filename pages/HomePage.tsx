
import React from 'react';
import HeroBanner from '../components/homepage/HeroBanner';
import OurLegacy from '../components/homepage/OurLegacy';
import CategoryShowcase from '../components/homepage/CategoryShowcase';
import FeaturedProducts from '../components/homepage/FeaturedProducts';
import KnowledgeHub from '../components/homepage/KnowledgeHub';
import Testimonials from '../components/homepage/Testimonials';
import SEOManager from '../components/SEOManager';
import { useLanguage } from '../contexts/LanguageContext';
import CulturalHighlights from '../components/homepage/CulturalHighlights';

const HomePage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SEOManager
        title={t('meta_title_home')}
        description={t('meta_desc_home')}
      />
      <HeroBanner />
      <OurLegacy />
      <CategoryShowcase />
      <FeaturedProducts />
      <CulturalHighlights />
      <KnowledgeHub />
      <Testimonials />
    </>
  );
};

export default HomePage;
