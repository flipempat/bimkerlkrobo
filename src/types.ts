export interface Product {
  id: string;
  name: string;
  category: 'perak' | 'bakery' | 'garmen' | 'kayu' | 'hidroponik' | 'dupa' | 'sablon';
  categoryLabel: string;
  price: number;
  formattedPrice: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  shopeeUrl?: string;
  tokopediaUrl?: string;
  isFeatured: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
  material?: string;
  madeBy: string;
  specifications: { label: string; value: string }[];
}

export interface Program {
  id: string;
  title: string;
  titleEn?: string;
  category: 'umkm' | 'ketahanan_pangan' | string;
  categoryLabel: string;
  categoryLabelEn?: string;
  shortDesc: string;
  shortDescEn?: string;
  fullDesc: string;
  fullDescEn?: string;
  participantsCount: number;
  duration: string;
  durationEn?: string;
  certification: string;
  outputProducts: string[];
  image: string;
  highlights: string[];
  icon: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
  author: string;
  image: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  program: string;
  quote: string;
  avatar: string;
  year?: string;
}

export interface StatItem {
  number: string;
  label: string;
  description: string;
}
