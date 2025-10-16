// Fix: Replaced entire file content with correct type definitions to serve as the single source of truth for types.
export type Language = 'en' | 'th' | 'zh';

export interface MultilingualString {
  en: string;
  th: string;
  zh: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number; // 1 to 5
  comment: MultilingualString;
  date: string;
}

export interface Product {
  id: string;
  name: MultilingualString;
  price: number;
  imageUrls: string[];
  description: MultilingualString;
  specifications: {
    color: MultilingualString;
    material: MultilingualString;
    pattern: MultilingualString;
    era: MultilingualString;
  };
  sizes: string[];
  category: MultilingualString;
  reviews?: Review[];
}

export interface CulturalTip {
  id: number;
  tip: MultilingualString;
  sourceDynasty: MultilingualString;
}

export interface BlogEntry {
  id: number;
  title: MultilingualString;
  content: MultilingualString;
  imageUrl: string;
  date: string;
  categories: string[];
  tags: string[];
}

export interface HeroPreset {
  id: number;
  imageUrl: string;
  slogan: MultilingualString;
  cta: MultilingualString;
}

export interface Tradition {
  id: string;
  title: MultilingualString;
  shortDescription: MultilingualString;
  longDescription: MultilingualString;
  imageUrl: string;
}

export interface ChecklistTask {
    id: string;
    name: MultilingualString;
    description: MultilingualString;
    imageUrl: string;
    productId?: string;
}

export interface ChecklistItem {
    id: string;
    category: MultilingualString;
    tasks: ChecklistTask[];
}

export interface FaqItem {
    id: string;
    question: MultilingualString;
    answer: MultilingualString;
    category: string;
}

export interface CartItem {
    id: string;
    name: MultilingualString;
    price: number;
    quantity: number;
    imageUrl: string;
    size?: string;
}