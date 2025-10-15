import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAppContext } from '../../contexts/AppContext';

const HeroBanner = () => {
  const { heroPresets } = useAppContext();
  const { getMultilingual, t } = useLanguage();

  const heroContent = heroPresets.find(p => p.id === 4) || heroPresets[0];
  const newImageUrl = 'https://cdn.jsdelivr.net/gh/devoncasa/VickyLuxGems@main/main+photo.webp';

  if (!heroContent) {
    return (
        <div className="h-[60vh] bg-gray-200 flex items-center justify-center">
            <p>Loading...</p>
        </div>
    );
  }

  // Reusable text content block.
  const TextContent = () => (
    <>
        <div className="max-w-5xl">
            <h1 data-aos="fade-down" data-aos-delay="100" className="text-3xl md:text-4xl lg:text-5xl font-serif-en font-bold text-brand-red leading-tight md:leading-normal">
                {getMultilingual(heroContent.slogan)}
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" className="mt-4 md:mt-6 text-lg md:text-xl max-w-3xl mx-auto text-brand-red font-medium">
                {t('heroSubtitle')}
            </p>
        </div>
        <Link
            to="/shop"
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-8 md:mt-10 inline-block px-8 py-3 bg-legacy-gold text-brand-red font-bold text-lg rounded-full hover:bg-brand-dark-gold transition-transform transform hover:scale-105 shadow-xl"
        >
            {getMultilingual(heroContent.cta)}
        </Link>
    </>
  );

  return (
    <section>
      {/* Desktop Hero: uses blurred background */}
      <div className="hidden md:block relative h-[85vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed blur-[2px]"
          style={{ backgroundImage: `url(${newImageUrl})` }}
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12">
          <div
            data-aos="zoom-in"
            className="bg-white/[.65] backdrop-blur-[3px] rounded-xl p-6 sm:p-8 md:p-10 shadow-lg"
          >
            <TextContent />
          </div>
        </div>
      </div>

      {/* Mobile Hero: shows full image and text below */}
      <div className="md:hidden w-full bg-antique-cream/50 pb-12">
        <div data-aos="fade-in" className="shadow-lg">
             <img 
                src={newImageUrl} 
                alt={getMultilingual(heroContent.slogan)} 
                className="w-full h-auto" 
            />
        </div>
        <div 
            className="bg-white/[.65] backdrop-blur-[3px] p-6 -mt-16 sm:-mt-24 relative z-10 mx-4 rounded-lg shadow-lg text-center" 
            data-aos="zoom-in"
            data-aos-delay="200"
        >
          <TextContent />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
