import React, { createContext, useContext, ReactNode } from 'react';
import { type Product, type CulturalTip, type BlogEntry, type HeroPreset, type Tradition, type ChecklistItem, type FaqItem } from '../types';
import { products, culturalTips, blogEntries, heroPresets, traditions, checklistData, faqData } from '../services/data';

interface AppContextType {
  products: Product[];
  culturalTips: CulturalTip[];
  blogEntries: BlogEntry[];
  heroPresets: HeroPreset[];
  traditions: Tradition[];
  checklistData: ChecklistItem[];
  faqData: FaqItem[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Fix: Use an explicit props interface and React.FC for the provider component to ensure proper type checking for children.
interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const value = {
    products,
    culturalTips,
    blogEntries,
    heroPresets,
    traditions,
    checklistData,
    faqData
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};