
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useLanguage();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { to: '/', text: t('home') },
    { to: '/shop', text: t('shop') },
    { to: '/traditions', text: t('traditions') },
    { to: '/blog', text: t('blog') },
    { to: '/about', text: t('about') },
    { to: '/faq', text: t('faq') },
    { to: '/contact', text: t('contact') },
  ];

  const activeLinkStyle = {
    color: '#D4AF37',
    textShadow: '0 0 5px rgba(212, 175, 55, 0.7)',
  };

  return (
    <header className="bg-brand-red/95 text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm relative border-t border-b border-legacy-gold/70">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/tangchinhua-logo-sml.png" alt="Tang Chin Hua Logo" className="h-[3.25rem] mr-3" />
            <div className="flex flex-col">
                <div className="text-2xl font-serif-zh font-bold tracking-wider">
                    <span className="text-legacy-gold">{t('brand_name_header_part1')}</span>{t('brand_name_header_part2')}
                </div>
                <span className="hidden md:block text-xs font-sans-th text-blush-silk opacity-90 mt-1">
                    {t('header_tagline')}
                </span>
            </div>
        </NavLink>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="hover:text-legacy-gold transition-colors duration-300 font-medium pb-1 border-b-2 border-transparent"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <NavLink to="/cart" className="relative cursor-pointer p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white hover:text-legacy-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {totalItems > 0 && (
                    <span className="absolute top-0 right-0 bg-legacy-gold text-brand-red text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {totalItems}
                    </span>
                )}
            </NavLink>
            <div className="md:hidden">
              <button ref={buttonRef} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? (
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
        </div>
      </div>
      {/* Mobile dropdown menu */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-full right-4 mt-2 w-72 origin-top-right rounded-md shadow-lg bg-brand-red/95 ring-1 ring-black ring-opacity-5 z-40
                    transition ease-out duration-200 transform
                    ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <div className="px-6 py-4">
          <div className="mb-4 pb-3 border-b border-legacy-gold/30">
              <LanguageSwitcher />
          </div>
          <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
              <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg py-2 px-2 rounded hover:bg-white/10 transition-colors duration-300"
                  style={({ isActive }) => isActive ? activeLinkStyle : {}}
              >
                  {link.text}
              </NavLink>
              ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;