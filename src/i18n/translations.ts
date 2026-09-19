export type Language = 'id' | 'en';

export interface Translations {
  // Navigation
  navHome: string;
  navAbout: string;
  navPrograms: string;
  navProducts: string;
  navNews: string;
  navPartnership: string;
  navContact: string;
  hotline: string;
  officialTokopedia: string;
  viewCatalog: string;

  // Branding
  brandTagline: string;
  brandSub: string;
  verifiedOfficialStore: string;
  visitTokopediaStore: string;
  tokopediaDescription: string;
  buyOnTokopedia: string;

  // General Actions
  seeAll: string;
  readMore: string;
  close: string;
  searchPlaceholder: string;
  sortBy: string;
  featured: string;
  lowestPrice: string;
  highestPrice: string;
  nameAZ: string;
  resetFilter: string;
  details: string;
  viewDetails: string;
  bestSeller: string;
  categoryAll: string;
  categorySilver: string;
  categoryBakery: string;
  categoryGarment: string;
  categoryWood: string;
  categoryIncense: string;
  categoryHydroponic: string;
  orderDirectTokopedia: string;
  stockReady: string;

  // Home Page
  heroBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDesc: string;
  heroExploreBtn: string;
  heroShopBtn: string;
  statsParticipants: string;
  statsPrograms: string;
  statsSold: string;
  statsPartners: string;
  featuredProductsTitle: string;
  featuredProductsDesc: string;
  quoteTitle: string;
  quoteDesc: string;
  quoteAuthor: string;
  storiesTitle: string;
  storiesDesc: string;
  partnerCtaTitle: string;
  partnerCtaDesc: string;
  partnerCtaBtn: string;

  // About Page
  aboutHeaderBadge: string;
  aboutHeaderTitle: string;
  aboutHeaderDesc: string;
  aboutVisionTitle: string;
  aboutMissionTitle: string;
  aboutValuesTitle: string;
  workflowTitle: string;
  workflowDesc: string;

  // Programs Page
  programsHeaderBadge: string;
  programsHeaderTitle: string;
  programsHeaderDesc: string;
  allCategories: string;
  craftsCategory: string;
  culinaryCategory: string;
  manufacturingCategory: string;
  agribusinessCategory: string;
  servicesCategory: string;
  programCapacity: string;
  programCertification: string;
  programFeaturedOutputs: string;
  viewSyllabusBtn: string;
  collaborateOfferTitle: string;
  collaborateOfferDesc: string;
  collaborateOfferBtn: string;

  // Products Page
  productsHeaderBadge: string;
  productsHeaderTitle: string;
  productsHeaderDesc: string;
  showingProductsCount: string;
  clickToBuyNotice: string;
  productNotFound: string;
  productNotFoundDesc: string;
  howTokopediaHelps: string;
  howTokopediaHelpsDesc: string;
  secureTransactionTitle: string;
  secureTransactionDesc: string;
  fastShippingTitle: string;
  fastShippingDesc: string;
  inmateWageTitle: string;
  inmateWageDesc: string;

  // News Page
  newsHeaderBadge: string;
  newsHeaderTitle: string;
  newsHeaderDesc: string;

  // Partnership Page
  partnershipHeaderBadge: string;
  partnershipHeaderTitle: string;
  partnershipHeaderDesc: string;
  partnershipSchemesTitle: string;
  partnershipSchemesDesc: string;
  partnershipFormBadge: string;
  partnershipFormTitle: string;
  partnershipFormDesc: string;
  partnerHeaderBadge: string;
  partnerHeaderTitle: string;
  partnerHeaderDesc: string;
  schemesTitle: string;
  schemesDesc: string;
  partnerFormTitle: string;
  partnerFormDesc: string;
  formCompany: string;
  formPIC: string;
  formScheme: string;
  formCompanyName: string;
  formPicName: string;
  formEmail: string;
  formPhone: string;
  formType: string;
  formNotes: string;
  formSubmitBtn: string;
  formPrivacyNote: string;
  formSuccessTitle: string;
  formSuccessDesc: string;
  formSuccessWa: string;
  formSuccessNew: string;

  // Contact Page
  contactHeaderBadge: string;
  contactHeaderTitle: string;
  contactHeaderDesc: string;
  officeAddress: string;
  officeAddressTitle: string;
  openInMaps: string;
  openGoogleMaps: string;
  directChannels: string;
  directChannelsTitle: string;
  officePhone: string;
  whatsappCenter: string;
  officialEmail: string;
  workingHours: string;
  operatingHoursTitle: string;
  contactFormTitle: string;
  contactFormDesc: string;
  sendMessageTitle: string;
  sendMessageDesc: string;
  formName: string;
  formFullName: string;
  formSubject: string;
  formMessage: string;
  sendMessageBtn: string;
  formSendBtn: string;
  formSentSuccessTitle: string;
  formSentSuccessDesc: string;
  sendAnotherBtn: string;
  locationMapTitle: string;
  locationMapSubtitle: string;

  // Floating WA
  waHeaderTitle: string;
  waGreeting: string;
  waGreetingBody: string;
  waQuickOptions: string;
  waAskProduct: string;
  waAskPartnership: string;
  waOpenChat: string;
  waOnlineText: string;

  // Footer
  footerAbout: string;
  footerQuickLinks: string;
  footerPrograms: string;
  footerContact: string;
  footerRights: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  id: {
    // Navigation
    navHome: 'Beranda',
    navAbout: 'Tentang Kami',
    navPrograms: 'Program Keterampilan',
    navProducts: 'Produk Kami',
    navNews: 'Berita & Kegiatan',
    navPartnership: 'Mitra & Kerja Sama',
    navContact: 'Kontak',
    hotline: 'Hotline Bimker:',
    officialTokopedia: 'Toko Resmi di Tokopedia',
    viewCatalog: 'Lihat Katalog',

    // Branding
    brandTagline: 'Karya Nyata di Balik Terali • Membangun Harapan Melalui Keterampilan',
    brandSub: 'Lapas Kelas IIA Kerobokan Bali',
    verifiedOfficialStore: 'Official Store Terverifikasi',
    visitTokopediaStore: 'Kunjungi Toko di Tokopedia',
    tokopediaDescription: 'Nikmati kemudahan transaksi, proteksi pembeli, dan aneka promo bebas ongkir langsung di aplikasi Tokopedia Anda.',
    buyOnTokopedia: 'Beli di Tokopedia',

    // General Actions
    seeAll: 'Lihat Semua',
    readMore: 'Baca Selengkapnya',
    close: 'Tutup',
    searchPlaceholder: 'Cari produk perak, bakery, kemeja endek, talenan kayu...',
    sortBy: 'Urutkan:',
    featured: 'Pilihan & Terlaris',
    lowestPrice: 'Harga Terendah',
    highestPrice: 'Harga Tertinggi',
    nameAZ: 'Nama Produk (A-Z)',
    resetFilter: 'Reset Semua Filter',
    details: 'Detail',
    viewDetails: 'Info Lengkap',
    bestSeller: 'Terlaris',
    categoryAll: 'Semua Produk',
    categorySilver: 'Kerajinan Perak 925',
    categoryBakery: 'Bakery & Pastry',
    categoryGarment: 'Garmen & Busana',
    categoryWood: 'Pertukangan Kayu',
    categoryIncense: 'Dupa Aromaterapi',
    categoryHydroponic: 'Pertanian Hidroponik',
    orderDirectTokopedia: 'Pesan Sekarang di Tokopedia',
    stockReady: 'Produk Ready Stock',

    // Home Page
    heroBadge: 'Pembinaan Kemandirian Lapas Kelas IIA Kerobokan Bali',
    heroTitle: 'Karya Nyata di Balik Terali,',
    heroTitleHighlight: 'Membangun Harapan Melalui Keterampilan',
    heroDesc: 'Wadah resmi pelatihan kerja dan pemberdayaan narapidana. Menghasilkan karya kriya, busana, kuliner, dan agribisnis berkualitas tinggi yang dipasarkan secara transparan melalui Tokopedia.',
    heroExploreBtn: 'Jelajahi Produk Kami',
    heroShopBtn: 'Toko Resmi Tokopedia',
    statsParticipants: 'Warga Binaan Terlatih',
    statsPrograms: 'Bidang Keterampilan',
    statsSold: 'Produk Terjual di Tokopedia',
    statsPartners: 'Mitra Usaha & Industri',
    featuredProductsTitle: 'Produk Pilihan & Terlaris Warga Binaan',
    featuredProductsDesc: 'Dibuat dengan dedikasi tinggi dan pengawasan ketat instruktur bersertifikasi. Seluruh pembelian diproses aman melalui Tokopedia.',
    quoteTitle: 'Prinsip Pembinaan Pemasyarakatan',
    quoteDesc: 'Narapidana bukan semata-mata dihukum, melainkan dibina dan dipersiapkan agar kembali menjadi manusia seutuhnya yang mandiri, bermartabat, dan bermanfaat bagi masyarakat luas.',
    quoteAuthor: 'Direktorat Jenderal Pemasyarakatan Kemenkumham RI',
    storiesTitle: 'Cerita Perubahan & Suara Mitra',
    storiesDesc: 'Mendengar langsung pengalaman warga binaan yang terampil dan testimoni mitra yang merasakan manfaat kolaborasi nyata.',
    partnerCtaTitle: 'Buka Peluang Kerja Sama dengan BIMKER LKROBO',
    partnerCtaDesc: 'Kami membuka peluang maklon garmen, pasokan rutin kafe & restoran, pengadaan souvenir kriya perak, serta program CSR perusahaan.',
    partnerCtaBtn: 'Pelajari Skema Kemitraan',

    // About Page
    aboutHeaderBadge: 'Profil & Komitmen Pemasyarakatan',
    aboutHeaderTitle: 'Tentang BIMKER LKROBO',
    aboutHeaderDesc: 'Mengenal lebih dekat sejarah, filosofi pembinaan humanis, dan alur pemberdayaan narapidana di Lapas Kelas IIA Kerobokan Bali.',
    aboutVisionTitle: 'Visi Bimbingan Kerja',
    aboutMissionTitle: 'Misi Utama Kami',
    aboutValuesTitle: 'Nilai-Nilai Kerja Kami',
    workflowTitle: '5 Tahap Alur Pembinaan Mandiri',
    workflowDesc: 'Proses terstruktur dari asesmen minat hingga pembagian hak upah premi bagi warga binaan.',

    // Programs Page
    programsHeaderBadge: 'Kurikulum Pembinaan Berstandar Industri',
    programsHeaderTitle: 'Program Keterampilan BIMKER LKROBO',
    programsHeaderDesc: 'Mempersiapkan warga binaan menjadi tenaga kerja terampil, bersertifikat BNSP, dan siap berwirausaha mandiri dengan 8 sektor keahlian produktif.',
    allCategories: 'Semua Bidang',
    craftsCategory: 'Kriya & Kerajinan',
    culinaryCategory: 'Tata Boga & Bakery',
    manufacturingCategory: 'Garmen & Konveksi',
    agribusinessCategory: 'Agribisnis & Ternak',
    servicesCategory: 'Layanan Jasa',
    programCapacity: 'Kapasitas:',
    programCertification: 'Sertifikasi:',
    programFeaturedOutputs: 'Produk Unggulan:',
    viewSyllabusBtn: 'Lihat Detail Program & Silabus',
    collaborateOfferTitle: 'Ingin Bekerja Sama Melatih atau Menyerap Tenaga Kerja?',
    collaborateOfferDesc: 'Kami menyambut kolaborasi bersama lembaga sertifikasi, asosiasi profesi, maupun perusahaan yang ingin menjadi bapak angkat program kemandirian warga binaan.',
    collaborateOfferBtn: 'Ajukan Kerja Sama',

    // Products Page
    productsHeaderBadge: 'Etalase Resmi Warga Binaan',
    productsHeaderTitle: 'Produk Hasil Karya BIMKER LKROBO',
    productsHeaderDesc: 'Seluruh transaksi penjualan produk kami difasilitasi dengan aman, cepat, dan transparan melalui toko resmi Tokopedia.',
    showingProductsCount: 'Menampilkan produk karya warga binaan',
    clickToBuyNotice: 'Klik "Beli di Tokopedia" untuk langsung memesan',
    productNotFound: 'Produk Tidak Ditemukan',
    productNotFoundDesc: 'Tidak ada produk yang cocok dengan pencarian Anda. Coba gunakan kata kunci lain atau reset filter.',
    howTokopediaHelps: 'Bagaimana Transaksi Tokopedia Mendukung Warga Binaan?',
    howTokopediaHelpsDesc: 'Membeli karya warga binaan di Tokopedia memberikan dampak langsung dan terukur.',
    secureTransactionTitle: '1. Transaksi Mudah & Terproteksi',
    secureTransactionDesc: 'Anda bertransaksi menggunakan platform Tokopedia dengan metode pembayaran lengkap serta jaminan proteksi pembeli.',
    fastShippingTitle: '2. Pengemasan & Pengiriman Cepat',
    fastShippingDesc: 'Produk dikemas rapi langsung dari bengkel kerja Lapas Kerobokan Badung Bali menuju alamat Anda.',
    inmateWageTitle: '3. Hak Premi Tabungan Warga Binaan',
    inmateWageDesc: 'Sesuai regulasi Ditjen Pemasyarakatan, bagian keuntungan disalurkan sebagai premi upah warga binaan yang ditabung untuk kebutuhan pasca bebas.',

    // News Page
    newsHeaderBadge: 'Kabar Pemasyarakatan & Kemandirian',
    newsHeaderTitle: 'Berita & Kegiatan BIMKER LKROBO',
    newsHeaderDesc: 'Ikuti dokumentasi terkini seputar pelatihan keahlian, uji sertifikasi BNSP, pameran UMKM Bali, hingga panen raya karya warga binaan.',

    // Partnership Page
    partnershipHeaderBadge: 'Kolaborasi Saling Memberdayakan',
    partnershipHeaderTitle: 'Kemitraan & Kerja Sama Industri',
    partnershipHeaderDesc: 'Wujudkan efisiensi rantai pasok bisnis Anda sekaligus berkontribusi nyata dalam pemulihan martabat dan kemandirian warga binaan.',
    partnershipSchemesTitle: 'Pilihan Skema Kolaborasi Bersama Kami',
    partnershipSchemesDesc: 'Kami siap menyesuaikan kebutuhan spesifik instansi atau bisnis Anda dengan kontrak kerja yang legal, transparan, dan terukur.',
    partnershipFormBadge: 'Formulir Resmi',
    partnershipFormTitle: 'Ajukan Rencana Kerja Sama',
    partnershipFormDesc: 'Tim Bimbingan Kerja Lapas Kelas IIA Kerobokan akan meninjau proposal Anda dan merespons dalam 1x24 jam kerja.',
    partnerHeaderBadge: 'Kolaborasi Saling Memberdayakan',
    partnerHeaderTitle: 'Kemitraan & Kerja Sama Industri',
    partnerHeaderDesc: 'Wujudkan efisiensi rantai pasok bisnis Anda sekaligus berkontribusi nyata dalam pemulihan martabat dan kemandirian warga binaan.',
    schemesTitle: 'Pilihan Skema Kolaborasi Bersama Kami',
    schemesDesc: 'Kami siap menyesuaikan kebutuhan spesifik instansi atau bisnis Anda dengan kontrak kerja yang legal, transparan, dan terukur.',
    partnerFormTitle: 'Ajukan Rencana Kerja Sama',
    partnerFormDesc: 'Tim Bimbingan Kerja Lapas Kelas IIA Kerobokan akan meninjau proposal Anda dan merespons dalam 1x24 jam kerja.',
    formCompany: 'Nama Perusahaan / Instansi *',
    formPIC: 'Nama Narahubung (PIC) *',
    formScheme: 'Jenis Kemitraan yang Diminati *',
    formCompanyName: 'Nama Perusahaan / Instansi *',
    formPicName: 'Nama Narahubung (PIC) *',
    formEmail: 'Email Resmi *',
    formPhone: 'Nomor Telepon / WhatsApp *',
    formType: 'Jenis Kemitraan yang Diminati *',
    formNotes: 'Deskripsi Kebutuhan / Catatan Tambahan',
    formSubmitBtn: 'Kirim Pengajuan Kerja Sama',
    formPrivacyNote: 'Data Anda dijaga kerahasiaannya dan hanya digunakan untuk keperluan koordinasi kemitraan bimbingan kerja.',
    formSuccessTitle: 'Pengajuan Berhasil Terkirim!',
    formSuccessDesc: 'Terima kasih atas minat bermitra bersama BIMKER LKROBO. Tim kami akan segera mempelajari kebutuhan Anda dan menghubungi melalui kontak yang dicantumkan.',
    formSuccessWa: 'Konfirmasi Cepat via WhatsApp',
    formSuccessNew: 'Kirim Pengajuan Baru',

    // Contact Page
    contactHeaderBadge: 'Layanan Informasi Publik',
    contactHeaderTitle: 'Hubungi BIMKER LKROBO',
    contactHeaderDesc: 'Kami siap melayani pertanyaan seputar produk warga binaan, pembelian Tokopedia, kerja sama industri, maupun kunjungan studi tiru bimbingan kerja.',
    officeAddress: 'Alamat Kantor Bimbingan Kerja',
    officeAddressTitle: 'Alamat Kantor Bimbingan Kerja',
    openInMaps: 'Buka di Google Maps',
    openGoogleMaps: 'Buka di Google Maps',
    directChannels: 'Saluran Komunikasi Langsung',
    directChannelsTitle: 'Saluran Komunikasi Langsung',
    officePhone: 'Telepon Kantor',
    whatsappCenter: 'WhatsApp Center',
    officialEmail: 'Email Resmi',
    workingHours: 'Jam Layanan Bimbingan Kerja',
    operatingHoursTitle: 'Jam Layanan Bimbingan Kerja',
    contactFormTitle: 'Kirim Pesan atau Pertanyaan',
    contactFormDesc: 'Silakan isi formulir di bawah ini. Tim kami akan segera menanggapi pertanyaan Anda.',
    sendMessageTitle: 'Kirim Pesan atau Pertanyaan',
    sendMessageDesc: 'Silakan isi formulir di bawah ini. Tim kami akan segera menanggapi pertanyaan Anda.',
    formName: 'Nama Lengkap *',
    formFullName: 'Nama Lengkap *',
    formSubject: 'Subjek Pesan *',
    formMessage: 'Isi Pesan *',
    sendMessageBtn: 'Kirim Pesan Sekarang',
    formSendBtn: 'Kirim Pesan Sekarang',
    formSentSuccessTitle: 'Pesan Anda Berhasil Terkirim!',
    formSentSuccessDesc: 'Terima kasih telah menghubungi Bimbingan Kerja Lapas Kerobokan Bali. Kami akan membalas via email atau WhatsApp yang Anda sediakan.',
    sendAnotherBtn: 'Kirim Pesan Lain',
    locationMapTitle: 'Lokasi di Kerobokan, Badung, Bali',
    locationMapSubtitle: 'Mudah diakses dari Seminyak & Canggu',

    // Floating WA
    waHeaderTitle: 'Hotline BIMKER LKROBO',
    waGreeting: 'Om Swastyastu! Salam Pemasyarakatan. 🙏',
    waGreetingBody: 'Selamat datang di layanan resmi Bimbingan Kerja Lapas Kerobokan Bali. Ada yang bisa kami bantu seputar produk atau kemitraan?',
    waQuickOptions: 'Pilihan Pertanyaan Cepat:',
    waAskProduct: 'Tanya Produk & Pemesanan Tokopedia',
    waAskPartnership: 'Informasi Kemitraan / Maklon',
    waOpenChat: 'Buka Chat WhatsApp Resmi',
    waOnlineText: 'Online • Jam Kerja 08.00 - 15.00 WITA',

    // Footer
    footerAbout: 'Program bimbingan kerja & pembinaan kemandirian narapidana di Lapas Kerobokan. Membangun keterampilan berstandar industri, memulihkan martabat, dan menumbuhkan asa baru di balik terali.',
    footerQuickLinks: 'Tautan Navigasi',
    footerPrograms: 'Bidang Pembinaan',
    footerContact: 'Kontak Resmi',
    footerRights: 'Hak Cipta Dilindungi. Bimbingan Kerja Lapas Kelas IIA Kerobokan Bali.'
  },

  en: {
    // Navigation
    navHome: 'Home',
    navAbout: 'About Us',
    navPrograms: 'Vocational Programs',
    navProducts: 'Our Products',
    navNews: 'News & Activities',
    navPartnership: 'Partnership',
    navContact: 'Contact',
    hotline: 'Hotline Bimker:',
    officialTokopedia: 'Official Store on Tokopedia',
    viewCatalog: 'View Catalog',

    // Branding
    brandTagline: 'True Works Behind Bars • Building Hope Through Skills',
    brandSub: 'Kerobokan Class IIA Correctional Facility Bali',
    verifiedOfficialStore: 'Verified Official Store',
    visitTokopediaStore: 'Visit Store on Tokopedia',
    tokopediaDescription: 'Enjoy convenient checkout, buyer protection, and free shipping promotions directly in your Tokopedia app.',
    buyOnTokopedia: 'Buy on Tokopedia',

    // General Actions
    seeAll: 'View All',
    readMore: 'Read Full Story',
    close: 'Close',
    searchPlaceholder: 'Search silver crafts, bakery, endek apparel, teak boards...',
    sortBy: 'Sort by:',
    featured: 'Featured & Bestsellers',
    lowestPrice: 'Lowest Price',
    highestPrice: 'Highest Price',
    nameAZ: 'Product Name (A-Z)',
    resetFilter: 'Reset All Filters',
    details: 'Details',
    viewDetails: 'Full Info',
    bestSeller: 'Bestseller',
    categoryAll: 'All Products',
    categorySilver: '925 Silver Crafts',
    categoryBakery: 'Bakery & Pastry',
    categoryGarment: 'Garment & Apparel',
    categoryWood: 'Carpentry & Woodwork',
    categoryIncense: 'Aromatherapy Incense',
    categoryHydroponic: 'Hydroponic Agriculture',
    orderDirectTokopedia: 'Order Now on Tokopedia',
    stockReady: 'Ready Stock',

    // Home Page
    heroBadge: 'Independence Guidance of Kerobokan Class IIA Prison Bali',
    heroTitle: 'True Works Behind Bars,',
    heroTitleHighlight: 'Building Hope Through Skills',
    heroDesc: 'Official vocational training and rehabilitation center for inmates. Crafting premium jewelry, apparel, bakery, and agribusiness goods marketed transparently through Tokopedia.',
    heroExploreBtn: 'Explore Products',
    heroShopBtn: 'Official Tokopedia Store',
    statsParticipants: 'Trained Inmates',
    statsPrograms: 'Skill Sectors',
    statsSold: 'Products Sold on Tokopedia',
    statsPartners: 'Industry Partners',
    featuredProductsTitle: 'Featured & Bestselling Inmate Creations',
    featuredProductsDesc: 'Crafted with passion and strict supervision under certified instructors. All purchases are processed safely through Tokopedia.',
    quoteTitle: 'Core Principle of Corrections',
    quoteDesc: 'Inmates are not merely punished, but rehabilitated and equipped to reintegrate into society as independent, dignified, and productive individuals.',
    quoteAuthor: 'Directorate General of Corrections, Ministry of Law & Human Rights',
    storiesTitle: 'Stories of Change & Partner Voices',
    storiesDesc: 'Hear genuine testimonies from skilled inmates and business partners who have experienced the tangible social and commercial impact.',
    partnerCtaTitle: 'Open Collaboration with BIMKER LKROBO',
    partnerCtaDesc: 'We welcome garment manufacturing contracts, daily cafe & restaurant bakery supplies, silver crafts, and corporate CSR programs.',
    partnerCtaBtn: 'Explore Partnership Options',

    // About Page
    aboutHeaderBadge: 'Profile & Correctional Commitment',
    aboutHeaderTitle: 'About BIMKER LKROBO',
    aboutHeaderDesc: 'Discover the history, human-centric rehabilitation philosophy, and inmate empowerment journey at Kerobokan Class IIA Prison Bali.',
    aboutVisionTitle: 'Vocational Guidance Vision',
    aboutMissionTitle: 'Our Main Mission',
    aboutValuesTitle: 'Our Core Values',
    workflowTitle: '5 Steps to Independence',
    workflowDesc: 'A structured pathway from aptitude assessment to official premium wage distribution for inmates.',

    // Programs Page
    programsHeaderBadge: 'Industry-Standard Vocational Curriculum',
    programsHeaderTitle: 'BIMKER LKROBO Skill Programs',
    programsHeaderDesc: 'Preparing inmates into skilled, BNSP-certified workers ready for self-employment across 8 productive vocational sectors.',
    allCategories: 'All Fields',
    craftsCategory: 'Arts & Crafts',
    culinaryCategory: 'Culinary & Bakery',
    manufacturingCategory: 'Garments & Apparel',
    agribusinessCategory: 'Agribusiness & Poultry',
    servicesCategory: 'Services',
    programCapacity: 'Capacity:',
    programCertification: 'Certification:',
    programFeaturedOutputs: 'Key Outputs:',
    viewSyllabusBtn: 'View Syllabus & Program Details',
    collaborateOfferTitle: 'Interested in Training or Hiring Skilled Inmates?',
    collaborateOfferDesc: 'We welcome partnerships with certification bodies, professional associations, and corporate sponsors for inmate empowerment.',
    collaborateOfferBtn: 'Submit Proposal',

    // Products Page
    productsHeaderBadge: 'Official Inmate Showcase',
    productsHeaderTitle: 'Products Crafted by BIMKER LKROBO',
    productsHeaderDesc: 'All transactions are securely, quickly, and transparently facilitated through our official Tokopedia store.',
    showingProductsCount: 'Showing inmate-crafted products',
    clickToBuyNotice: 'Click "Buy on Tokopedia" to order directly',
    productNotFound: 'No Products Found',
    productNotFoundDesc: 'No products match your search. Try using other keywords or reset your filters.',
    howTokopediaHelps: 'How Tokopedia Purchases Support Inmates?',
    howTokopediaHelpsDesc: 'Purchasing inmate-crafted goods on Tokopedia creates measurable, life-changing social impact.',
    secureTransactionTitle: '1. Seamless & Protected Transactions',
    secureTransactionDesc: 'You transact using Tokopedia with multiple payment methods and comprehensive buyer protection guarantee.',
    fastShippingTitle: '2. Professional Packaging & Nationwide Delivery',
    fastShippingDesc: 'Items are carefully packaged directly from Kerobokan Prison workshop in Badung, Bali to your doorstep.',
    inmateWageTitle: '3. Inmate Wage & Savings Fund',
    inmateWageDesc: 'In accordance with correctional regulations, profit shares are credited directly to inmate savings accounts for life after release.',

    // News Page
    newsHeaderBadge: 'Correctional & Empowerment Updates',
    newsHeaderTitle: 'News & Activities of BIMKER LKROBO',
    newsHeaderDesc: 'Stay updated with vocational workshops, BNSP competency assessments, Bali SME expos, and hydroponic harvest days.',

    // Partnership Page
    partnershipHeaderBadge: 'Empowering Collaborations',
    partnershipHeaderTitle: 'Industry Partnerships & Cooperation',
    partnershipHeaderDesc: 'Streamline your business supply chain while actively contributing to the dignity and rehabilitation of inmates.',
    partnershipSchemesTitle: 'Collaboration Schemes Available',
    partnershipSchemesDesc: 'We tailor our production to your specific corporate needs through transparent, legally binding agreements.',
    partnershipFormBadge: 'Official Form',
    partnershipFormTitle: 'Submit Partnership Proposal',
    partnershipFormDesc: 'The BIMKER LKROBO Vocational Team will review your inquiry and respond within 1 working day.',
    partnerHeaderBadge: 'Empowering Collaborations',
    partnerHeaderTitle: 'Industry Partnerships & Cooperation',
    partnerHeaderDesc: 'Streamline your business supply chain while actively contributing to the dignity and rehabilitation of inmates.',
    schemesTitle: 'Collaboration Schemes Available',
    schemesDesc: 'We tailor our production to your specific corporate needs through transparent, legally binding agreements.',
    partnerFormTitle: 'Submit Partnership Proposal',
    partnerFormDesc: 'The BIMKER LKROBO Vocational Team will review your inquiry and respond within 1 working day.',
    formCompany: 'Company / Organization Name *',
    formPIC: 'Contact Person (PIC) *',
    formScheme: 'Preferred Partnership Scheme *',
    formCompanyName: 'Company / Organization Name *',
    formPicName: 'Contact Person (PIC) *',
    formEmail: 'Official Email *',
    formPhone: 'Phone / WhatsApp *',
    formType: 'Preferred Partnership Scheme *',
    formNotes: 'Requirements Description / Additional Notes',
    formSubmitBtn: 'Submit Partnership Proposal',
    formPrivacyNote: 'Your data is strictly confidential and used solely for vocational collaboration coordination.',
    formSuccessTitle: 'Proposal Successfully Sent!',
    formSuccessDesc: 'Thank you for your interest in partnering with BIMKER LKROBO. Our team will review your requirements and reach out promptly.',
    formSuccessWa: 'Quick Confirmation via WhatsApp',
    formSuccessNew: 'Submit Another Proposal',

    // Contact Page
    contactHeaderBadge: 'Public Information Center',
    contactHeaderTitle: 'Contact BIMKER LKROBO',
    contactHeaderDesc: 'We are ready to assist you with inquiries regarding inmate creations, Tokopedia purchases, industry partnerships, and prison benchmark visits.',
    officeAddress: 'Vocational Office Address',
    officeAddressTitle: 'Vocational Office Address',
    openInMaps: 'Open in Google Maps',
    openGoogleMaps: 'Open in Google Maps',
    directChannels: 'Direct Communication Channels',
    directChannelsTitle: 'Direct Communication Channels',
    officePhone: 'Office Phone',
    whatsappCenter: 'WhatsApp Center',
    officialEmail: 'Official Email',
    workingHours: 'Office Working Hours',
    operatingHoursTitle: 'Office Working Hours',
    contactFormTitle: 'Send a Message or Inquiry',
    contactFormDesc: 'Please fill out the form below. Our team will respond to your inquiry promptly.',
    sendMessageTitle: 'Send a Message or Inquiry',
    sendMessageDesc: 'Please fill out the form below. Our team will respond to your inquiry promptly.',
    formName: 'Full Name *',
    formFullName: 'Full Name *',
    formSubject: 'Subject *',
    formMessage: 'Message *',
    sendMessageBtn: 'Send Message Now',
    formSendBtn: 'Send Message Now',
    formSentSuccessTitle: 'Your Message Has Been Sent!',
    formSentSuccessDesc: 'Thank you for reaching out to Kerobokan Prison Vocational Guidance. We will reply to your email or WhatsApp number shortly.',
    sendAnotherBtn: 'Send Another Message',
    locationMapTitle: 'Location in Kerobokan, Badung, Bali',
    locationMapSubtitle: 'Conveniently accessible from Seminyak & Canggu',

    // Floating WA
    waHeaderTitle: 'BIMKER LKROBO Hotline',
    waGreeting: 'Om Swastyastu! Warm Greetings. 🙏',
    waGreetingBody: 'Welcome to the official Vocational Guidance Center of Kerobokan Prison Bali. How can we assist you today?',
    waQuickOptions: 'Quick Questions:',
    waAskProduct: 'Inquire About Products & Tokopedia Orders',
    waAskPartnership: 'Partnership / Manufacturing Inquiries',
    waOpenChat: 'Open Official WhatsApp Chat',
    waOnlineText: 'Online • Working Hours 08:00 - 15:00 WITA',

    // Footer
    footerAbout: 'Vocational guidance & independence development program for inmates at Kerobokan Prison. Building industry-standard skills, restoring dignity, and creating new beginnings behind bars.',
    footerQuickLinks: 'Quick Links',
    footerPrograms: 'Vocational Sectors',
    footerContact: 'Official Contact',
    footerRights: 'All Rights Reserved. Kerobokan Class IIA Prison Vocational Guidance Bali.'
  }
};
