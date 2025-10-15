
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useLanguage();

    const navLinks = [
        { to: '/', text: t('home') },
        { to: '/shop', text: t('shop') },
        { to: '/traditions', text: t('traditions') },
        { to: '/checklist', text: t('weddingChecklist')},
        { to: '/blog', text: t('blog') },
        { to: '/about', text: t('about') },
        { to: '/faq', text: t('faq') },
        { to: '/contact', text: t('contact') },
    ];

  return (
    <footer className="bg-brand-red text-blush-silk mt-24 border-t-4 border-legacy-gold">
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/tangchinhua-logo-sml.png" alt="Tang Chin Hua Logo" className="h-12 mr-3" />
              <div>
                <div className="text-xl font-serif-zh font-bold tracking-wider">
                    <span className="text-legacy-gold">{t('brand_name_header_part1')}</span>{t('brand_name_header_part2')}
                </div>
                <p className="hidden md:block text-xs text-blush-silk opacity-80 mt-1">
                    {t('header_tagline')}
                </p>
              </div>
            </div>
            <p className="opacity-80">
              {t('visitUs')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-base text-white mb-4 uppercase tracking-wider">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="opacity-80 hover:opacity-100 hover:text-legacy-gold transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold text-base text-white mb-4 uppercase tracking-wider">{t('contact')}</h3>
            <div className="space-y-2 opacity-80">
              <p>{t('storeAddress')}</p>
              <p className="pt-2">
                 <a href="tel:+6622238164" className="hover:text-legacy-gold">0-2223-8164</a>, <a href="tel:+66837895896" className="hover:text-legacy-gold">08-3789-5896</a>
              </p>
              <div className="pt-2">
                <p className="font-semibold text-white">{t('openingHoursTitle')}</p>
                <p>{t('openingHoursDays')}</p>
                <p>{t('openingHoursTimes')}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-bold text-base text-white mb-4 uppercase tracking-wider">{t('followUs')}</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/tangchinhua" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blush-silk hover:text-legacy-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
              </a>
              <a href="https://www.instagram.com/tangchinhuawedding" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-blush-silk hover:text-legacy-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-legacy-gold/20 text-center text-xs opacity-70">
          <p>
            © {new Date().getFullYear()} Tang Chin Hua. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
