import React, { useState } from 'react';
import { backgroundImages } from '../services/data';

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ children, className = '' }) => {
  // Pick a random image on mount and keep it stable for the component's lifecycle
  const [bgImage] = useState(() => backgroundImages[Math.floor(Math.random() * backgroundImages.length)]);

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Faded & Blurred Overlay Layer */}
      <div className="absolute inset-0 bg-light-bg/80 backdrop-blur-[5px]" />

      {/* Content Layer */}
      <div className="relative">
        {children}
      </div>
    </section>
  );
};

export default SectionBackground;