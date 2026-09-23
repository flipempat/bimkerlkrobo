export interface Product {
  id: string;
  name: string;
  category: 'perak' | 'bakery' | 'garmen' | 'kayu' | 'hidroponik' | 'dupa' | 'sablon' | 'peternakan' | 'perikanan' | 'lukisan' | 'daur_ulang' | 'batik' | 'perkebunan' | string;
  categoryLabel: string;
  price: number;
  formattedPrice: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  galleryImages?: string[];
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
  galleryImages?: string[];
  highlights: string[];
  icon: string;
}

export interface NewsItem {
  id: string;
  title: string;
  titleEn?: string;
  date: string;
  dateEn?: string;
  category: string;
  categoryEn?: string;
  excerpt: string;
  excerptEn?: string;
  content: string[];
  contentEn?: string[];
  author: string;
  authorEn?: string;
  image: string;
  galleryImages?: string[];
  readTime: string;
  readTimeEn?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  roleEn?: string;
  program: string;
  programEn?: string;
  quote: string;
  quoteEn?: string;
  avatar: string;
  year?: string;
  yearEn?: string;
}

export interface StatItem {
  number: string;
  label: string;
  description: string;
}
