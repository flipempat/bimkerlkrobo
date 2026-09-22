import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { NewsDetailModal } from './components/NewsDetailModal';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ProgramsView } from './views/ProgramsView';
import { ProductsView } from './views/ProductsView';
import { NewsView } from './views/NewsView';
import { PartnershipView } from './views/PartnershipView';
import { ContactView } from './views/ContactView';

import { Product, Program, NewsItem } from './types';
import { LanguageProvider } from './context/LanguageContext';

function MainApp() {
  const [activeTab, setActiveTab] = useState<string>('beranda');

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Sync hash routing if user opens with #produk or clicks browser back
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['beranda', 'tentang', 'program', 'produk', 'berita', 'kemitraan', 'kontak'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    // On initial mount check hash
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when activeTab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab === 'beranda' ? '' : `#${tab}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-slate-800 font-sans">
      {/* Sticky Header Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main View Container */}
      <main className="flex-1">
        {activeTab === 'beranda' && (
          <HomeView
            setActiveTab={handleTabChange}
            onOpenProductDetail={(prod) => setSelectedProduct(prod)}
            onOpenProgramDetail={(prog) => setSelectedProgram(prog)}
          />
        )}

        {activeTab === 'tentang' && (
          <AboutView setActiveTab={handleTabChange} />
        )}

        {activeTab === 'program' && (
          <ProgramsView
            onOpenProgramDetail={(prog) => setSelectedProgram(prog)}
            setActiveTab={handleTabChange}
          />
        )}

        {activeTab === 'produk' && (
          <ProductsView
            onOpenProductDetail={(prod) => setSelectedProduct(prod)}
          />
        )}

        {activeTab === 'berita' && (
          <NewsView
            onOpenNewsDetail={(news) => setSelectedNews(news)}
          />
        )}

        {activeTab === 'kemitraan' && (
          <PartnershipView />
        )}

        {activeTab === 'kontak' && (
          <ContactView />
        )}
      </main>

      {/* Comprehensive Footer */}
      <Footer setActiveTab={handleTabChange} />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Program Detail Modal */}
      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onExploreProducts={() => {
          setSelectedProgram(null);
          handleTabChange('produk');
        }}
      />

      {/* News Article Detail Modal */}
      <NewsDetailModal
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
