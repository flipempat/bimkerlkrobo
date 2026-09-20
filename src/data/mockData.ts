import { Product, Program, NewsItem, Testimonial, StatItem } from '../types';
import { TOKOPEDIA_CONFIG } from './tokopediaConfig';

export const STATS: StatItem[] = [
  {
    number: "380+",
    label: "Warga Binaan Terlatih",
    description: "Telah mendapatkan sertifikasi dan bekal keahlian kemandirian berstandar industri."
  },
  {
    number: "12",
    label: "Bidang Keterampilan",
    description: "Mulai dari kriya perak khas Bali, tata boga bakery, garmen, hingga pertanian modern."
  },
  {
    number: "4.800+",
    label: "Produk Terjual",
    description: "Didistribusikan melalui marketplace resmi, pameran UMKM Bali, dan pesanan mitra."
  },
  {
    number: "28+",
    label: "Mitra Industri & UMKM",
    description: "Kolaborasi aktif bersama asosiasi bisnis, hotel, kafe, dan desainer lokal Bali."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-perak-01",
    name: "Gelang Perak Bali Motif Jawan Solid 925",
    category: "perak",
    categoryLabel: "Kerajinan Perak",
    price: 345000,
    formattedPrice: "Rp 345.000",
    shortDescription: "Gelang perak murni 925 buatan tangan warga binaan dengan detail ukir jawan khas pengrajin Celuk Bali.",
    fullDescription: "Karya seni perak bernilai tinggi hasil tangan terampil warga binaan bimbingan kerja Lapas Kelas IIA Kerobokan. Dibuat menggunakan teknik filigree dan jawan tradisional Bali yang membutuhkan ketelitian tinggi. Setiap butir ukiran merefleksikan dedikasi dan harapan baru pengrajin.",
    image: "https://images.unsplash.com/photo-1611591475879-16a7504a5e3e?auto=format&fit=crop&w=800&q=80",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/gelang-perak-jawan-bali-925",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/gelang-perak-jawan-bali-925`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Perak Murni 925 (Sterling Silver)",
    madeBy: "Bengkel Kriya Logam & Perak LKROBO",
    specifications: [
      { label: "Bahan", value: "Sterling Silver 925" },
      { label: "Berat", value: "± 18 gram" },
      { label: "Diameter", value: "Adjustable 6.0 - 6.8 cm" },
      { label: "Finishing", value: "Oxidized Antique Polish" },
      { label: "Sertifikat", value: "Sertifikat Keaslian Perak LKROBO" }
    ]
  },
  {
    id: "prod-bakery-01",
    name: "Artisan Butter Croissant Antaboga (Isi 4 pcs)",
    category: "bakery",
    categoryLabel: "Tata Boga & Bakery",
    price: 65000,
    formattedPrice: "Rp 65.000",
    shortDescription: "Croissant renyah berlapis dengan mentega premium buatan Dapur Antaboga Lapas Kerobokan.",
    fullDescription: "Diproduksi setiap pagi oleh warga binaan terlatih di bawah bimbingan chef pastry profesional. Menggunakan 100% pure butter impor dan proses fermentasi dingin lambat untuk menghasilkan lapisan kulit croissant yang renyah (flaky) dan aroma mentega yang lembut menggugah selera.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/artisan-butter-croissant-antaboga",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/artisan-butter-croissant-antaboga`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Tepung Gandum Protein Tinggi, French Butter, Ragi Alami",
    madeBy: "Dapur Bakery Antaboga LKROBO",
    specifications: [
      { label: "Isi Kemasan", value: "4 buah dalam box higienis" },
      { label: "Ketahanan", value: "3 hari suhu ruang, 7 hari lemari pendingin" },
      { label: "Saran Penyajian", value: "Hangatkan di oven/airfryer 170°C selama 3 menit" },
      { label: "Higienitas", value: "Tersertifikasi Laik Higiene Sanitasi" }
    ]
  },
  {
    id: "prod-garmen-01",
    name: "Kemeja Pria Tenun Endek Bali Kasual Modifikasi",
    category: "garmen",
    categoryLabel: "Garmen & Konveksi",
    price: 195000,
    formattedPrice: "Rp 195.000",
    shortDescription: "Kemeja katun beraksen kain tenun Endek Bali dengan jahitan rapi berstandar butik kemeja pria.",
    fullDescription: "Kemeja berdesain smart-casual modern yang memadukan kenyamanan bahan katun combed premium dengan keanggunan motif tenun Endek khas Klungkung. Dikerjakan dengan kontrol kualitas presisi oleh tim konveksi bimbingan kerja, cocok untuk acara formal maupun santai di Bali.",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/kemeja-pria-tenun-endek-lkrobo",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/kemeja-pria-tenun-endek-lkrobo`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Katun Dobby Halus & Aksen Tenun Endek Katun",
    madeBy: "Unit Konveksi & Garment LKROBO",
    specifications: [
      { label: "Ukuran", value: "S, M, L, XL, XXL (Slim Fit)" },
      { label: "Kancing", value: "Batok Kelapa Alami Berukir" },
      { label: "Kerah", value: "Mandarin Collar / Kerah Koko Elegan" },
      { label: "Perawatan", value: "Cuci tangan dengan lerak / detergen lembut" }
    ]
  },
  {
    id: "prod-perak-02",
    name: "Cincin Perak Tridatu Motif Bun Bali 925",
    category: "perak",
    categoryLabel: "Kerajinan Perak",
    price: 185000,
    formattedPrice: "Rp 185.000",
    shortDescription: "Cincin perak pria & wanita bermotif sulur tanaman Bun khas Bali dengan ornamen Tridatu.",
    fullDescription: "Karya perhiasan yang mengangkat kearifan lokal Bali. Motif sulur (bun) melambangkan kesinambungan kehidupan dan pertumbuhan diri ke arah yang lebih baik. Nyaman digunakan sehari-hari dan tidak menyebabkan iritasi kulit.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/cincin-perak-tridatu-bun-bali-925",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/cincin-perak-tridatu-bun-bali-925`,
    isFeatured: false,
    isBestSeller: true,
    inStock: true,
    material: "Perak Murni 925",
    madeBy: "Bengkel Kriya Logam & Perak LKROBO",
    specifications: [
      { label: "Bahan", value: "Perak 925 (Bebas Nikel)" },
      { label: "Ukuran Ring", value: "Size 14 - 22 (Standar Indonesia)" },
      { label: "Lebar Cincin", value: "6 mm" }
    ]
  },
  {
    id: "prod-dupa-01",
    name: "Dupa Herbal Aromaterapi Bunga Cempaka Bali (800g)",
    category: "dupa",
    categoryLabel: "Dupa & Souvenir",
    price: 55000,
    formattedPrice: "Rp 55.000",
    shortDescription: "Dupa wangi alami aroma bunga Cempaka Bali dengan abu tidak panas di tangan dan asap sejuk.",
    fullDescription: "Dibuat dari campuran serbuk kayu cendana, getah kemenyan, dan minyak atsiri bunga cempaka kuning asli Bali. Proses pencelupan dan pengeringan alami menghasilkan aroma menenangkan yang cocok untuk relaksasi, meditasi, yoga, maupun upacara ritual.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/dupa-herbal-cempaka-bali-800g",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/dupa-herbal-cempaka-bali-800g`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Serbuk Cendana Alami, Minyak Esensial Cempaka",
    madeBy: "Unit Pembuatan Dupa Wangi LKROBO",
    specifications: [
      { label: "Berat Bersih", value: "800 gram (± 450 batang)" },
      { label: "Panjang Stick", value: "28 cm" },
      { label: "Durasi Bakar", value: "± 90 menit per batang" },
      { label: "Karakter Abu", value: "Abu dingin, tidak perih di mata" }
    ]
  },
  {
    id: "prod-hidroponik-01",
    name: "Paket Sayur Selada Hidroponik Segar Krispi (1 kg)",
    category: "hidroponik",
    categoryLabel: "Pertanian Hidroponik",
    price: 32000,
    formattedPrice: "Rp 32.000",
    shortDescription: "Selada hijau krispi dan selada merah organik hasil kebun hidroponik Lapas Kerobokan.",
    fullDescription: "Ditanam di greenhouse hidroponik modern Lapas Kerobokan dengan air nutrisi terjaga tanpa pestisida kimia sintetis. Daun sangat renyah, segar, manis alami, dan dipanen langsung saat pesanan masuk untuk menjaga kualitas prima.",
    image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&w=800&q=80",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/sayur-selada-hidroponik-segar-lkrobo",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/sayur-selada-hidroponik-segar-lkrobo`,
    isFeatured: false,
    isBestSeller: false,
    inStock: true,
    material: "Bibit Unggul Non-GMO, Nutrisi AB Mix Teruji",
    madeBy: "Greenhouse Hidroponik LKROBO",
    specifications: [
      { label: "Varian", value: "Mix Selada Romaine, Butterhead & Red Rapid" },
      { label: "Berat", value: "1.000 gram (1 kg)" },
      { label: "Kondisi", value: "Akar basah disertakan (Fresh Root)" },
      { label: "Penyimpanan", value: "Tahan 7-10 hari di chiller kulkas" }
    ]
  },
  {
    id: "prod-sablon-01",
    name: "Tote Bag Kanvas Premium 'Harapan di Balik Terali'",
    category: "sablon",
    categoryLabel: "Sablon & Desain",
    price: 75000,
    formattedPrice: "Rp 75.000",
    shortDescription: "Tas jinjing kanvas katun tebal dengan sablon grafis inspiratif karya desainer binaan LKROBO.",
    fullDescription: "Tas kanvas ramah lingkungan dengan daya tampung besar. Menggunakan bahan kanvas marsoto tebal dengan sablon plastisol tahan lama. Desain visual mengangkat filosofi burung kepodang yang siap terbang bebas membawa kebaikan baru.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/tote-bag-kanvas-harapan-lkrobo",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/tote-bag-kanvas-harapan-lkrobo`,
    isFeatured: false,
    isBestSeller: true,
    inStock: true,
    material: "Kanvas Marsoto Katun 14 oz",
    madeBy: "Studio Desain & Sablon LKROBO",
    specifications: [
      { label: "Dimensi", value: "40 cm x 35 cm x 8 cm" },
      { label: "Penutup", value: "Resleting YKK Berkualitas" },
      { label: "Sablon", value: "Plastisol HD Curing Heatpress" },
      { label: "Kompartemen", value: "Saku dalam untuk smartphone & dompet" }
    ]
  },
  {
    id: "prod-bakery-02",
    name: "Pie Susu Bali Antaboga Special Box (Isi 12 pcs)",
    category: "bakery",
    categoryLabel: "Tata Boga & Bakery",
    price: 50000,
    formattedPrice: "Rp 50.000",
    shortDescription: "Oleh-oleh khas Bali dengan kulit pie renyah dan vla susu lembut lumer di mulut.",
    fullDescription: "Pie susu legendaris buatan Dapur Antaboga LKROBO yang dibuat secara higienis menggunakan susu kental manis murni, kuning telur segar pilihan peternakan sendiri, dan mentega aromatik. Tanpa bahan pengawet sintetis.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/pie-susu-bali-antaboga-12pcs",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/pie-susu-bali-antaboga-12pcs`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Tepung Terigu, Kuning Telur Segar, Mentega, Susu",
    madeBy: "Dapur Bakery Antaboga LKROBO",
    specifications: [
      { label: "Isi Box", value: "12 pcs kemasan individual seal" },
      { label: "Daya Tahan", value: "7 hari suhu ruang, 14 hari pendingin" },
      { label: "Pilihan Rasa", value: "Original Keju & Cokelat" }
    ]
  },
  {
    id: "prod-garmen-02",
    name: "Apron Barista Kanvas Katun Heavy-Duty LKROBO",
    category: "garmen",
    categoryLabel: "Garmen & Konveksi",
    price: 135000,
    formattedPrice: "Rp 135.000",
    shortDescription: "Celemek barista & chef dengan saku multifungsi dan tali silang (cross-back) anti lelah.",
    fullDescription: "Banyak dipesan oleh coffee shop ternama di kawasan Canggu dan Seminyak Bali. Terbuat dari kanvas twill tahan cipratan minyak dan noda, dilengkapi ring kuningan dan kompartemen untuk pulpen, notebook, dan kain lap.",
    image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=800&q=80",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/apron-barista-kanvas-crossback-lkrobo",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/apron-barista-kanvas-crossback-lkrobo`,
    isFeatured: false,
    isBestSeller: true,
    inStock: true,
    material: "Kanvas Twill 100% Katun Tebal & Tali Kulit Sintetis",
    madeBy: "Unit Konveksi & Garment LKROBO",
    specifications: [
      { label: "Ukuran", value: "All Size (Adjustable strap lebar dada 65cm, tinggi 80cm)" },
      { label: "Warna", value: "Army Green, Espresso Brown, Midnight Black" },
      { label: "Pengait", value: "Ring D-Hook Logam Antique Gold" }
    ]
  },
  {
    id: "prod-perak-03",
    name: "Bros Kebaya Perak Motif Bunga Kamboja Jepun 925",
    category: "perak",
    categoryLabel: "Kerajinan Perak",
    price: 275000,
    formattedPrice: "Rp 275.000",
    shortDescription: "Bros kebaya wanita terinspirasi keanggunan bunga Jepun Bali bersepuh perak murni 925.",
    fullDescription: "Ornamen perak detail filigree dengan sentuhan mutiara air tawar alami di bagian tengah kuncup bunga. Sangat anggun dipadukan dengan kebaya Bali untuk upacara adat, wisuda, maupun resepsi pernikahan.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/bros-kebaya-perak-bunga-jepun-925",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/bros-kebaya-perak-bunga-jepun-925`,
    isFeatured: false,
    isBestSeller: false,
    inStock: true,
    material: "Perak 925 & Mutiara Air Tawar Alami",
    madeBy: "Bengkel Kriya Logam & Perak LKROBO",
    specifications: [
      { label: "Dimensi", value: "5.5 cm x 5.0 cm" },
      { label: "Jarum Peniti", value: "Stainless Steel Kuat & Kunci Pengaman" },
      { label: "Berat", value: "14 gram" }
    ]
  }
];

export const PROGRAMS: Program[] = [
  // ==================== A. PROGRAM UMKM ====================
  {
    id: "prog-art-gallery",
    title: "Art Gallery",
    titleEn: "Art Gallery",
    category: "umkm",
    categoryLabel: "Program UMKM",
    categoryLabelEn: "SME Program",
    shortDesc: "Ruang kreasi seni lukis dan karya visual berestetika tinggi yang merefleksikan ekspresi jiwa dan kekayaan seni budaya Bali.",
    shortDescEn: "A dedicated creative space for high-aesthetic paintings and visual art pieces that reflect inner expression and rich Balinese culture.",
    icon: "Palette",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80",
    fullDesc: "Program Art Gallery BIMKER LKROBO mewadahi dan mengasah talenta seni lukis warga binaan. Di bawah bimbingan seniman profesional, peserta mendalami teknik sapuan kanvas, eksplorasi cat minyak/akrilik, dan perpaduan seni modern serta ornamen tradisional Bali. Karya-karya yang dihasilkan telah dipamerkan dalam berbagai pameran seni dan diapresiasi oleh kolektor.",
    participantsCount: 20,
    duration: "6 Bulan Pelatihan & Karya",
    durationEn: "6 Months Training & Studio Work",
    certification: "Sertifikat Pelatihan Seni Rupa & Kanvas Lembaga Kebudayaan",
    outputProducts: ["Lukisan Kanvas Lanskap Bali", "Seni Sketsa Karakter Etnik", "Karya Seni Lukis Mixed Media", "Pigura Seni Ornamen Bali"],
    highlights: [
      "Bimbingan teknik melukis realis, impresionis, dan ornamen tradisional Bali",
      "Fasilitas studio seni berkanvas lengkap dengan pencahayaan alami",
      "Pameran berkala karya seni di galeri internal lapas dan expo kebudayaan"
    ]
  },
  {
    id: "prog-daur-ulang-koran",
    title: "Kerajinan Daur Ulang Koran",
    titleEn: "Recycled Newspaper Crafts",
    category: "umkm",
    categoryLabel: "Program UMKM",
    categoryLabelEn: "SME Program",
    shortDesc: "Mengubah kertas koran bekas menjadi produk kreatif bernilai jual tinggi, seperti wadah anyaman estetik, vas bunga, dan dekorasi ramah lingkungan.",
    shortDescEn: "Transforming discarded newspapers into high-value creative products including aesthetic woven containers, vases, and eco-friendly home decors.",
    icon: "Newspaper",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=900&q=80",
    fullDesc: "Program inovatif berbasis green economy yang melatih ketelitian dan kesabaran warga binaan dalam memilin lembaran koran menjadi lintingan rapat, lalu menganyamnya menjadi beragam produk fungsional. Melalui proses pelapisan pernis khusus tahan lembap, produk anyaman koran memiliki kekuatan yang kokoh setara anyaman rotan alam.",
    participantsCount: 25,
    duration: "3 Bulan Bimbingan Keterampilan",
    durationEn: "3 Months Skill Mentorship",
    certification: "Sertifikat Kriya Daur Ulang Ramah Lingkungan",
    outputProducts: ["Keranjang Anyaman Koran Serbaguna", "Tempat Tisu Anyaman Estetik", "Vas Bunga Dekorasi Meja", "Tatakan Gelas & Baki Anyaman"],
    highlights: [
      "Solusi kreatif mengurangi limbah kertas koran menjadi produk bernilai ekonomi",
      "Teknik laminasi pelindung anti air dan anti jamur yang awet bertahun-tahun",
      "Diminati pasar suvenir ramah lingkungan dan dekorasi kafe estetik di Bali"
    ]
  },
  {
    id: "prog-daur-ulang-kemasan-rokok",
    title: "Kerajinan Daur Ulang Kemasan Rokok",
    titleEn: "Cigarette Pack Upcycling Crafts",
    category: "umkm",
    categoryLabel: "Program UMKM",
    categoryLabelEn: "SME Program",
    shortDesc: "Memanfaatkan limbah kemasan rokok menjadi miniatur kapal pinisi, tas anyaman unik, dan suvenir artistik bernilai ekonomis tinggi.",
    shortDescEn: "Upcycling cigarette packaging waste into intricate miniature sailing ships, unique durable woven bags, and high-value artistic souvenirs.",
    icon: "Package",
    image: "https://images.unsplash.com/photo-1581291518655-9523c932deda?auto=format&fit=crop&w=900&q=80",
    fullDesc: "Warga binaan dilatih ketelitian tinggi dalam memanfaatkan lapisan foil dan karton kemasan rokok bekas. Bahan dipotong presisi, dilipat, dan dirangkai tanpa lem sintetis berbahaya menjadi miniatur kapal tradisional, tas anyaman modis berkarakter metalik, serta cenderamata unik yang sangat diminati pembeli karena nilai keuletan dan keasliannya.",
    participantsCount: 20,
    duration: "3 Bulan Pelatihan Ketelitian",
    durationEn: "3 Months Precision Crafting",
    certification: "Sertifikat Kerajinan Upcycling Kreatif",
    outputProducts: ["Miniatur Kapal Layar Tradisional", "Tas Jinjing Anyaman Bungkus Rokok", "Kotak Penyimpanan Cenderamata", "Hiasan Dinding Geometris Artistik"],
    highlights: [
      "Mengubah limbah sulit terurai menjadi karya seni mikroskopis bernilai jual tinggi",
      "Teknik anyaman kunci lipat presisi tinggi tanpa mudah sobek",
      "Sangat digemari wisatawan lokal dan mancanegara sebagai cinderamata unik"
    ]
  },
  {
    id: "prog-bakery",
    title: "Bakery",
    titleEn: "Bakery",
    category: "umkm",
    categoryLabel: "Program UMKM",
    categoryLabelEn: "SME Program",
    shortDesc: "Memproduksi berbagai macam roti dan kue berkualitas yang siap dipasarkan dengan standar higienis dan cita rasa prima.",
    shortDescEn: "Producing a wide variety of high-quality breads, pastries, and cakes ready for commercial market with certified hygiene standards.",
    icon: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    fullDesc: "Dapur Bakery Antaboga merupakan salah satu unit UMKM paling produktif di Lapas Kerobokan. Beroperasi setiap hari memproduksi aneka roti manis, croissant renyah, kue basah, serta pie susu khas Bali. Seluruh proses produksi mengikuti prosedur ketat sanitasi makanan dan telah mengantongi Sertifikat Laik Higiene Sanitasi dari Dinas Kesehatan.",
    participantsCount: 40,
    duration: "4 Bulan + Magang Produksi Mandiri",
    durationEn: "4 Months + Production Internship",
    certification: "Sertifikat Laik Higiene Sanitasi Dinkes & BNSP Pastry",
    outputProducts: ["Pie Susu Khas Bali Antaboga", "Roti Manis Aneka Isian", "Artisan Croissant & Pastry", "Cookies Rempah Tradisional"],
    highlights: [
      "Standar higienitas HACCP dan inspeksi sanitasi berkala",
      "Peralatan oven konveksi industri dan proofing chamber modern",
      "Menyuplai pesanan harian internal, snack box acara, dan kafe di seputaran Badung"
    ]
  },
  {
    id: "prog-perak",
    title: "Kerajinan Perak",
    titleEn: "Silver Jewelry & Crafts",
    category: "umkm",
    categoryLabel: "Program UMKM",
    categoryLabelEn: "SME Program",
    shortDesc: "Menghasilkan perhiasan dan aksesoris perak berkualitas tinggi yang dibuat dengan ketelitian tinggi oleh warga binaan.",
    shortDescEn: "Producing high-quality 925 silver jewelry and accessories crafted with utmost precision and authentic Balinese filigree by inmates.",
    icon: "Gem",
    image: "https://images.unsplash.com/photo-1611591475879-16a7504a5e3e?auto=format&fit=crop&w=900&q=80",
    fullDesc: "Bekerja sama dengan maestro pengrajin perak Celuk Gianyar, program ini membekali warga binaan dengan keahlian memotong, mematri, mengukir jawan rumit, hingga tahap pemolesan perak 925. Hasil karya telah menembus pasar cenderamata turis mancanegara, butik perhiasan di Sanur dan Seminyak, serta marketplace resmi.",
    participantsCount: 35,
    duration: "6 Bulan Pelatihan Intensif",
    durationEn: "6 Months Intensive Workshop",
    certification: "Sertifikat Uji Kompetensi Kriya Logam BNSP",
    outputProducts: ["Gelang Jawan Bali Perak 925", "Cincin Perak Tridatu", "Bros Kebaya Filigree", "Liontin Etnik Kamboja Bali"],
    highlights: [
      "Instruktur berpengalaman dari sentra perak legendaris Celuk Sukawati",
      "Peralatan tempa dan pematrian presisi dengan standar keselamatan kerja",
      "Tersedia di Tokopedia resmi dan pesanan maklon butik perhiasan Bali"
    ]
  },
  {
    id: "prog-dupa-udeng",
    title: "Pembuatan Dupa dan Udeng",
    titleEn: "Incense & Udeng Crafting",
    category: "umkm",
    categoryLabel: "Program UMKM",
    categoryLabelEn: "SME Program",
    shortDesc: "Memproduksi dupa wangi aromaterapi herbal alami serta udeng tradisional Bali berkualitas rapi untuk kebutuhan ibadah dan budaya.",
    shortDescEn: "Producing natural herbal aromatherapy incense sticks and neat traditional Balinese headcloths (udeng) for cultural and spiritual needs.",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80",
    fullDesc: "Dupa dan udeng merupakan dua kebutuhan pokok adat dan persembahyangan di Bali dengan permintaan pasar harian yang sangat konsisten. Warga binaan dilatih meracik serbuk kayu wangi herbal alami seperti cendana dan gaharu yang menghasilkan abu dingin tidak perih di mata, serta keterampilan menjahit dan melipat udeng khas Bali dengan potongan proporsional dan jahitan rapi.",
    participantsCount: 30,
    duration: "3 Bulan Pelatihan Terpadu",
    durationEn: "3 Months Integrated Course",
    certification: "Sertifikat Keterampilan Kriya Dupa & Busana Adat",
    outputProducts: ["Dupa Herbal Aromaterapi Cempaka", "Dupa Cendana Relaksasi Abu Dingin", "Udeng Tradisional Bali Batik Halus", "Udeng Songket Bordir Upacara"],
    highlights: [
      "Menggunakan serbuk herbal alami tanpa bahan kimia berbahaya",
      "Jahitan udeng presisi dan nyaman dipakai sepanjang hari",
      "Pangsa pasar stabil memasok toko adat, griya, pura, dan hotel spa di Bali"
    ]
  },
  {
    id: "prog-design-sablon",
    title: "Design Grafis dan Sablon",
    titleEn: "Graphic Design & Screen Printing",
    category: "umkm",
    categoryLabel: "Program UMKM",
    categoryLabelEn: "SME Program",
    shortDesc: "Mengembangkan kreativitas visual digital dan keahlian cetak sablon presisi pada kaos distro, tote bag kanvas, dan merchandise suvenir.",
    shortDescEn: "Developing digital visual creativity and precision screen-printing skills on distro t-shirts, canvas tote bags, and event souvenir merchandise.",
    icon: "Printer",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
    fullDesc: "Menyiapkan warga binaan untuk siap bekerja di industri kreatif dan periklanan digital. Peserta dilatih menguasai software desain grafis komputer, teknik separasi warna, pembuatan film sablon (afdruk), serta teknik cetak manual plastisol maupun polyflex heatpress. Menerima pesanan maklon kaos komunitas, seminar kit, dan suvenir khas Bali.",
    participantsCount: 25,
    duration: "3 Bulan Kursus Desain & Sablon",
    durationEn: "3 Months Design & Printing Course",
    certification: "Sertifikat Operator Sablon Tekstil & Desain Grafis",
    outputProducts: ["Kaos Souvenir Bali Eksklusif", "Tote Bag Kanvas Harapan LKROBO", "Sticker & Label Kemasan UMKM", "Merchandise Event Komunitas"],
    highlights: [
      "Laboratorium cetak sablon dengan meja presisi tinggi dan mesin heatpress",
      "Kurikulum desain grafis berbasis komputer terstruktur",
      "Kapasitas produksi maklon seragam dan kaos merchandise hingga ribuan pcs"
    ]
  },

  // ==================== B. PROGRAM KETAHANAN PANGAN ====================
  {
    id: "prog-aviary",
    title: "Aviary",
    titleEn: "Aviary",
    category: "ketahanan_pangan",
    categoryLabel: "Program Ketahanan Pangan",
    categoryLabelEn: "Food Security Program",
    shortDesc: "Penangkaran dan pemeliharaan aneka burung berkicau serta unggas hias untuk melatih ketelatenan, kesabaran, dan kepedulian lingkungan.",
    shortDescEn: "Breeding and nurturing of songbirds and ornamental poultry to cultivate patience, attentiveness, and environmental awareness.",
    icon: "Bird",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=900&q=80",
    fullDesc: "Kubah Aviary yang asri dan hijau di kawasan Lapas Kerobokan berfungsi ganda sebagai sarana penangkaran aneka burung hias sekaligus terapi ketenangan batin warga binaan. Peserta mempelajari manajemen pakan bernutrisi, pemantauan kesehatan unggas, sanitasi kandang kubah, serta teknik penangkaran burung yang memiliki nilai hobi dan komersial.",
    participantsCount: 15,
    duration: "3 Bulan Praktik Konservasi",
    durationEn: "3 Months Conservation Practice",
    certification: "Sertifikat Keterampilan Pemeliharaan Satwa Unggas",
    outputProducts: ["Bibit Burung Kicau Sehat", "Pakan Campuran Unggas Bernutrisi", "Sangkar Bambu Artistik", "Edukasi Konservasi Satwa"],
    highlights: [
      "Kubah aviary bernuansa alami dengan pepohonan hijau dan gemericik air",
      "Melatih kesabaran, kedisiplinan jadwal pakan, dan rasa cinta satwa",
      "Mendukung keanekaragaman hayati dan keasrian lingkungan lapas"
    ]
  },
  {
    id: "prog-peternakan",
    title: "Peternakan",
    titleEn: "Livestock & Poultry",
    category: "ketahanan_pangan",
    categoryLabel: "Program Ketahanan Pangan",
    categoryLabelEn: "Food Security Program",
    shortDesc: "Pengelolaan budidaya ayam petelur harian yang produktif dan higienis guna menyuplai kebutuhan pangan segar berprotein tinggi.",
    shortDescEn: "Productive and hygienic daily laying hen poultry management ensuring sustainable supply of fresh high-protein food.",
    icon: "Egg",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=80",
    fullDesc: "Unit peternakan ayam petelur memasok ratusan butir telur segar setiap hari untuk asupan gizi warga binaan dan dipasarkan ke lingkungan lapas. Melatih warga binaan dalam tata kelola perkandangan higienis, formulasi pakan seimbang, pencegahan penyakit ternak, dan pengolahan limbah organik menjadi pupuk kandang bernilai guna.",
    participantsCount: 25,
    duration: "4 Bulan Siklus Pemeliharaan",
    durationEn: "4 Months Livestock Cycle",
    certification: "Sertifikasi Tata Laksana Unggas Dinas Peternakan",
    outputProducts: ["Telur Ayam Segar Harian", "Pupuk Kandang Kompos Fermentasi", "Daging Unggas Sehat", "Bibit Unggas Terpilih"],
    highlights: [
      "Produksi telur segar stabil 200+ butir per hari dengan cangkang kuat",
      "Penerapan standar biosekuriti kandang bebas bau dan ramah lingkungan",
      "Pilar utama ketahanan pangan swasembada mandiri pemasyarakatan"
    ]
  },
  {
    id: "prog-holtikultura",
    title: "Holtikultura",
    titleEn: "Horticulture",
    category: "ketahanan_pangan",
    categoryLabel: "Program Ketahanan Pangan",
    categoryLabelEn: "Food Security Program",
    shortDesc: "Budidaya aneka tanaman sayur daun hidroponik, cabai, dan buah-buahan segar bernutrisi tinggi tanpa pestisida berbahaya.",
    shortDescEn: "Cultivation of fresh crisp hydroponic leafy vegetables, hot chilies, and nutritious produce without harmful synthetic pesticides.",
    icon: "Sprout",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80",
    fullDesc: "Memaksimalkan fasilitas greenhouse modern di dalam lapas dengan sistem NFT (Nutrient Film Technique) dan rakit apung. Warga binaan dilatih mengontrol pH air, formulasi nutrisi tanaman, serta jadwal panen berkala sayuran selada butterhead, pakcoy, dan kangkung segar yang diserap oleh restoran sehat dan hotel di seputaran Badung.",
    participantsCount: 25,
    duration: "3 Bulan Siklus Tanam Hidroponik",
    durationEn: "3 Months Hydroponic Crop Cycle",
    certification: "Sertifikasi Budi Daya Sayuran Ramah Lingkungan",
    outputProducts: ["Selada Hidroponik Romaine & Butterhead", "Pakcoy Segar Krispi", "Cabai Rawit Merah Segar", "Bibit Sayuran Siap Tanam"],
    highlights: [
      "Instalasi greenhouse otomatis pengukur pH dan TDS digital",
      "100% bebas pestisida sintetis berbahaya, dipanen segar saat dipesan",
      "Panen rutin terjadwal setiap 3 minggu dengan kesegaran maksimal"
    ]
  },
  {
    id: "prog-perkebunan",
    title: "Perkebunan",
    titleEn: "Plantation & Agro",
    category: "ketahanan_pangan",
    categoryLabel: "Program Ketahanan Pangan",
    categoryLabelEn: "Food Security Program",
    shortDesc: "Pemanfaatan lahan hijau produktif untuk menanam komoditas bernilai pangan seperti pisang, jagung, dan tanaman obat keluarga.",
    shortDescEn: "Productive green agro land utilization for staple crops such as bananas, sweet corn, cassava, and family herbal medicine plants.",
    icon: "Trees",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=900&q=80",
    fullDesc: "Mengubah area pekarangan terbuka lapas menjadi kebun pangan yang produktif dan hijau. Warga binaan mempelajari teknik pengolahan tanah ramah lingkungan, pembuatan pupuk bokashi alami, pemangkasan dahan, rotasi tanaman pangan, dan budidaya tanaman obat keluarga yang bermanfaat bagi kebugaran tubuh.",
    participantsCount: 20,
    duration: "4 Bulan Siklus Tanam & Panen",
    durationEn: "4 Months Planting & Harvest Cycle",
    certification: "Sertifikat Pengelolaan Perkebunan Ramah Lingkungan",
    outputProducts: ["Pisang Cavendish Berkualitas", "Jagung Manis Kebun Segar", "Singkong Manis Pulen", "Tanaman Obat Temulawak & Kunyit"],
    highlights: [
      "Pemanfaatan lahan terbuka menjadi sabuk hijau produktif lapas",
      "Memanfaatkan pupuk organik buatan unit ternak sendiri",
      "Hasil panen dinikmati bersama warga binaan dan dipasarkan lokal"
    ]
  },
  {
    id: "prog-perikanan",
    title: "Perikanan",
    titleEn: "Aquaculture & Fishery",
    category: "ketahanan_pangan",
    categoryLabel: "Program Ketahanan Pangan",
    categoryLabelEn: "Food Security Program",
    shortDesc: "Budidaya ikan air tawar seperti lele dan nila menggunakan sistem kolam bioflok ramah lingkungan yang hemat air dan padat hasil.",
    shortDescEn: "Freshwater aquaculture of catfish and tilapia using eco-friendly biofloc systems for water efficiency and high yields.",
    icon: "Fish",
    image: "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&w=900&q=80",
    fullDesc: "Menerapkan teknologi kolam terpal bulat dengan sistem aerasi bioflok modern. Sistem ini memanfaatkan mikroorganisme menguntungkan untuk mendaur ulang nutrisi pakan sehingga hemat air, tidak berbau, dan menghasilkan ikan konsumsi yang higienis dengan kualitas daging padat dan segar. Membekali warga binaan dengan keahlian budidaya yang siap dipraktikkan di pekarangan rumah pasca bebas.",
    participantsCount: 20,
    duration: "3 Bulan Siklus Budidaya Air Tawar",
    durationEn: "3 Months Freshwater Aquaculture Cycle",
    certification: "Sertifikasi Tata Laksana Budidaya Bioflok Perikanan",
    outputProducts: ["Ikan Lele Segar Siap Olah", "Ikan Nila Merah Pilihan", "Bibit Ikan Air Tawar", "Kolam Bioflok Percontohan"],
    highlights: [
      "Teknologi bioflok hemat air dan ramah lingkungan tanpa bau",
      "Daging ikan gurih, tidak berbau lumpur, dan bernutrisi tinggi",
      "Mendukung pasokan protein hewani dapur lapas dan konsumsi masyarakat"
    ]
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-01",
    title: "Produk Kerajinan Perak BIMKER LKROBO Tampil Memukau di Pameran UMKM Bali Expo 2026",
    date: "14 Maret 2026",
    category: "Pameran & Prestasi",
    author: "Humas Lapas Kerobokan",
    readTime: "4 menit baca",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    excerpt: "Stan Bimbingan Kerja Lapas Kerobokan ramai dikunjungi wisatawan lokal dan mancanegara yang mengagumi kehalusan ukir perak jawan buatan warga binaan.",
    content: [
      "DENPASAR — Stan Bimbingan Kerja Lapas Kelas IIA Kerobokan (BIMKER LKROBO) berhasil menarik perhatian ribuan pengunjung dalam gelaran Bali Creative & UMKM Expo di Denpasar.",
      "Berbagai karya unggulan seperti gelang perak filigree 925, talenan kayu jati solid food-grade, serta aneka produk roti artisan dari Dapur Antaboga ludes terjual dalam kurun waktu tiga hari pameran.",
      "Kepala Seksi Kegiatan Kerja Lapas Kelas IIA Kerobokan menyampaikan bahwa keikutsertaan dalam pameran ini membuktikan bahwa karya warga binaan memiliki standar kualitas yang mampu bersaing di pasar terbuka.",
      "\"Masyarakat sangat terkejut saat mengetahui bahwa gelang perak sehalus ini dibuat oleh tangan-tangan warga binaan di dalam lapas. Ini membuka paradigma baru bahwa pemasyarakatan adalah tempat pembinaan manusia seutuhnya, bukan tempat pembalasan,\" ungkapnya.",
      "Selain transaksi langsung di lokasi pameran, tim juga mengarahkan para pengunjung untuk terus berbelanja melalui toko resmi Tokopedia BIMKER LKROBO agar pesanan dapat dikirim ke seluruh pelosok Indonesia."
    ]
  },
  {
    id: "news-02",
    title: "Sebanyak 45 Warga Binaan Terima Sertifikat Kelulusan Uji Kompetensi BNSP Bidang Garmen & Bakery",
    date: "28 Februari 2026",
    category: "Pelatihan & Sertifikasi",
    author: "Tim Bimbingan Kerja",
    readTime: "3 menit baca",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    excerpt: "Sertifikasi resmi BNSP menjadi modal berharga bagi warga binaan untuk langsung terserap di industri perhotelan dan garmen setelah menyelesaikan masa pidana.",
    content: [
      "BADUNG — Lapas Kelas IIA Kerobokan menggelar seremoni penyerahan sertifikat kompetensi kerja Badan Nasional Sertifikasi Profesi (BNSP) kepada 45 warga binaan yang telah dinyatakan kompeten dalam bidang tata boga bakery dan garmen konveksi.",
      "Asesor dari Lembaga Sertifikasi Profesi (LSP) menyatakan apresiasi setinggi-tingginya atas kedisiplinan dan higienitas kerja para peserta selama menjalani rangkaian ujian praktik.",
      "Sertifikat kompetensi berlogo Garuda ini diakui secara nasional bahkan di kawasan ASEAN, sehingga mempermudah para warga binaan untuk melamar pekerjaan di hotel bintang lima, bakery kafe, atau membuka wirausaha mandiri ketika kembali ke tengah keluarga.",
      "\"Kami ingin memastikan bahwa ketika gerbang lapas terbuka, mereka tidak keluar dengan tangan hampa, melainkan membawa kehormatan, keahlian bersertifikat, dan tekad baru untuk menghidupi keluarga secara halal,\" tutur Kalapas Kerobokan dalam sambutannya."
    ]
  },
  {
    id: "news-03",
    title: "Panen Raya Selada Hidroponik: Pasok Kebutuhan Sayuran Segar ke Kafe Sehat Kawasan Seminyak",
    date: "12 Februari 2026",
    category: "Agribisnis & Panen",
    author: "Unit Pertanian LKROBO",
    readTime: "3 menit baca",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    excerpt: "Kebun greenhouse hidroponik BIMKER LKROBO membukukan panen 350 kg selada segar kualitas premium yang langsung diserap mitra usaha kuliner Bali.",
    content: [
      "KEROBOKAN — Senyum semringah terpancar dari wajah para warga binaan yang tergabung dalam tim hidroponik Lapas Kerobokan saat memanen ratusan kilogram selada butterhead dan romaine segar.",
      "Dengan perawatan teliti pada sirkulasi air nutrisi dan pencahayaan alami Bali, sayuran yang dihasilkan memiliki tekstur tebal, renyah, dan manis tanpa rasa getir pahit.",
      "Tiga pengelola restoran dan kafe salad sehat di area Kuta Utara dan Seminyak telah menandatangani kesepakatan pasokan rutin mingguan dengan pihak bimbingan kerja.",
      "Keberhasilan agribisnis ini juga memberikan bagian upah premi (remunerasi) langsung kepada warga binaan yang disimpan dalam rekening tabungan mereka untuk keluarga di rumah."
    ]
  },
  {
    id: "news-04",
    title: "Kemitraan Strategis Bersama Asosiasi Desainer Bali untuk Pengembangan Motif Tenun Endek Modern",
    date: "20 Januari 2026",
    category: "Kemitraan",
    author: "Divisi Hubungan Mitra",
    readTime: "4 menit baca",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    excerpt: "Kolaborasi kreatif ini menggabungkan warisan kain tradisional Bali dengan desain busana kontemporer yang diminati generasi muda dan wisatawan.",
    content: [
      "BADUNG — Guna meningkatkan nilai tambah produk garmen bimbingan kerja, BIMKER LKROBO resmi menggandeng komunitas desainer muda Bali dalam lokakarya bertajuk \"Benang Harapan: Re-inventing Endek Bali\".",
      "Dalam kemitraan ini, para desainer memberikan pelatihan seputar tren busana tropis, pemilihan paduan warna pastel modern, serta teknik jahit berstandar ekspor.",
      "Hasil perdana dari kolaborasi ini telah diluncurkan di katalog Tokopedia BIMKER LKROBO berupa kemeja kasual tenun Endek kombinasi katun yang langsung mendapat respon positif dari pembeli.",
      "Kerja sama ini diharapkan terus membuka peluang bagi pihak swasta lainnya untuk mempercayakan proses produksi (maklon) kepada warga binaan lapas."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-01",
    name: "I Wayan S.",
    role: "Warga Binaan — Pengrajin Perak 925",
    program: "Kriya Perak Celuk",
    quote: "Sebelumnya saya tidak memiliki keterampilan apa pun dan sempat putus asa. Di BIMKER LKROBO, saya diajari cara mematri perak dari nol hingga tangan saya bisa membuat gelang yang laku terjual di Tokopedia. Pendapatan premi ini rutin saya kirimkan untuk biaya sekolah anak saya di desa.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    year: "Pelatihan Angkatan 2024"
  },
  {
    id: "testi-02",
    name: "Made Dananjaya",
    role: "Pemilik Kafe & Restoran di Canggu, Bali",
    program: "Mitra Bisnis Suplai Sayur & Bakery",
    quote: "Awalnya saya ragu, namun saat melihat langsung standar kebersihan dapur Antaboga dan greenhouse hidroponik Lapas Kerobokan, kualitasnya bahkan melampaui beberapa supplier komersial. Selada dan croissant mereka sangat fresh dan disukai tamu-tamu kami.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    year: "Mitra Kerja Sama sejak 2023"
  },
  {
    id: "testi-03",
    name: "Agus Pratama",
    role: "Alumni Warga Binaan — Pemilik Barbershop Mandiri",
    program: "Pangkas Rambut Modern",
    quote: "Berkat sertifikat kompetensi barbershop dari Lapas Kerobokan dan modal tabungan hasil premi kerja di dalam, setelah bebas saya bisa langsung membuka usaha potong rambut di Denpasar. Sekarang saya mandiri dan dihormati oleh keluarga serta tetangga.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
    year: "Bebas Murni 2025"
  },
  {
    id: "testi-04",
    name: "Ni Luh Putu Anggreni",
    role: "Pembeli Setia Tokopedia dari Jakarta",
    program: "Pelanggan Toko Tokopedia BIMKER",
    quote: "Saya pesan gelang perak dan pie susu lewat Tokopedia resmi BIMKER LKROBO. Packing-nya sangat aman, kualitas peraknya luar biasa cantik persis toko perhiasan ternama di Ubud. Bangga bisa ikut mendukung rehabilitasi kemandirian warga binaan!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    year: "Top Buyer Tokopedia"
  }
];
