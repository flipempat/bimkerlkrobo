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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958503/d5sw4j0cjgpqimoapz7r.webp",
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
    name: "Roti Manis & Roti Sobek Lembut Dapur Bakery Antaboga LKROBO",
    category: "bakery",
    categoryLabel: "Tata Boga & Bakery",
    price: 35000,
    formattedPrice: "Rp 35.000",
    shortDescription: "Roti manis dan sobek bertekstur empuk lembut panggang harian buatan Dapur Bakery Antaboga Lapas Kerobokan.",
    fullDescription: "Diproduksi segar setiap pagi oleh warga binaan terlatih di Dapur Bakery Antaboga Lapas Kelas IIA Kerobokan. Menggunakan tepung gandum bermutu tinggi, telur segar dari unit peternakan sendiri, dan mentega aromatik. Roti memiliki serat sangat lembut, rasa manis gurih pas, tanpa bahan pengawet sintetis, serta mengantongi Sertifikat Laik Higiene Sanitasi resmi.",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968128/uhc1sdyxogduglz2lwwd.webp",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/roti-manis-sobek-antaboga",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/roti-manis-sobek-antaboga`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Tepung Gandum Protein Tinggi, Telur Segar Peternakan LKROBO, Mentega & Ragi Alami",
    madeBy: "Dapur Bakery Antaboga LKROBO",
    specifications: [
      { label: "Isi Kemasan", value: "Paket Roti Aneka Varian (Cokelat Lumer, Keju Susu, Sobek Manis)" },
      { label: "Kondisi", value: "Fresh Baked Daily (Dipanggang Baru Setiap Hari)" },
      { label: "Ketahanan", value: "3-4 hari suhu ruang, 7 hari di lemari pendingin" },
      { label: "Higienitas", value: "Tersertifikasi Laik Higiene Sanitasi Dinkes" }
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958410/lnxmwwpxt1sffmxrqemq.webp",
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958557/IMG_3895.webp",
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042639/iwsgaqsb6mkwack2rlhn.webp",
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044577/wbemrlk6alvqfaqz16aj.webp",
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
  },
  {
    id: "prod-telur-01",
    name: "Telur Ayam Negeri Segar Peternakan Mandiri LKROBO (Tray 30 Butir)",
    category: "peternakan",
    categoryLabel: "Ketahanan Pangan & Ternak",
    price: 58000,
    formattedPrice: "Rp 58.000",
    shortDescription: "Telur ayam negeri segar berprotein tinggi panen harian hasil budidaya peternakan ayam petelur Lapas Kerobokan.",
    fullDescription: "Dipanen segar setiap hari dari kandang peternakan ayam petelur bimbingan kerja Lapas Kelas IIA Kerobokan. Telur berukuran seragam dengan cangkang tebal alami dan kuning telur pekat bernutrisi tinggi. Dihasilkan dari tata kelola sanitasi biosekuriti higienis dan pakan bergizi seimbang.",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968129/z00wjpuzspy9j9ziy0yb.webp",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/telur-ayam-segar-lkrobo-tray-30",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/telur-ayam-segar-lkrobo-tray-30`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Telur Ayam Negeri Segar Grade A",
    madeBy: "Unit Peternakan Ayam Petelur LKROBO",
    specifications: [
      { label: "Isi Kemasan", value: "Tray Karton Ramah Lingkungan 30 Butir" },
      { label: "Kondisi", value: "Panen Segar Harian (Fresh Daily Harvest)" },
      { label: "Standarisasi", value: "Pengawasan Higienis Dinas Peternakan" },
      { label: "Penyimpanan", value: "Tahan 3-4 minggu dalam lemari pendingin" }
    ]
  },
  {
    id: "prod-telur-bebek-01",
    name: "Telur Bebek Segar Pilihan Peternakan LKROBO (Tray 30 Butir)",
    category: "peternakan",
    categoryLabel: "Ketahanan Pangan & Ternak",
    price: 75000,
    formattedPrice: "Rp 75.000",
    shortDescription: "Telur bebek segar berkualitas tinggi panen harian hasil budidaya peternakan bebek petelur Lapas Kerobokan. Cocok untuk jamu, martabak, dan telur asin.",
    fullDescription: "Telur bebek segar berkualitas super hasil peternakan bebek petelur mandiri binaan bimbingan kerja Lapas Kelas IIA Kerobokan. Telur berukuran besar, cangkang biru kehijauan yang kokoh, dan kuning telur oranye pekat kaya nutrisi serta rendah amis berkat pakan alami dan manajemen sanitasi air yang baik.",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968126/czxv95k7kjte92maptwv.webp",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/telur-bebek-segar-lkrobo-tray-30",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/telur-bebek-segar-lkrobo-tray-30`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Telur Bebek Segar Grade A",
    madeBy: "Unit Peternakan Bebek Petelur LKROBO",
    specifications: [
      { label: "Isi Kemasan", value: "Tray Karton Tebal 30 Butir" },
      { label: "Kondisi", value: "Panen Baru Setiap Pagi (Daily Fresh)" },
      { label: "Karakteristik", value: "Kuning Telur Oranye Pekat & Cangkang Bersih" },
      { label: "Kegunaan", value: "Bahan Telur Asin Masir, Martabak, & Jamu Sehat" }
    ]
  },
  {
    id: "prod-ikan-nila-01",
    name: "Ikan Nila Merah & Lele Segar Kolam Bioflok LKROBO (1 Kg)",
    category: "perikanan",
    categoryLabel: "Ketahanan Pangan & Perikanan",
    price: 45000,
    formattedPrice: "Rp 45.000",
    shortDescription: "Ikan air tawar segar hidup hasil budidaya kolam bioflok ramah lingkungan bimbingan kerja Lapas Kerobokan. Daging tebal, gurih manis, dan bebas bau lumpur.",
    fullDescription: "Ikan nila merah dan lele segar kualitas konsumsi terbaik hasil budidaya kolam bioflok terpal binaan Bimbingan Kerja Lapas Kelas IIA Kerobokan. Menggunakan teknologi aerasi bioflok modern ramah lingkungan, pakan terkontrol, dan air terawat optimal sehingga menghasilkan ikan dengan daging tebal padat, bernutrisi tinggi, bebas residu bahan kimia, dan tanpa bau lumpur.",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968127/j1xqy1dewx3ng06aclxs.webp",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/ikan-segar-bioflok-lkrobo-1kg",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/ikan-segar-bioflok-lkrobo-1kg`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Ikan Air Tawar Segar Hidup / Siap Olah Grade A",
    madeBy: "Unit Budidaya Perikanan Kolam Bioflok LKROBO",
    specifications: [
      { label: "Pilihan Komoditas", value: "Ikan Nila Merah / Ikan Lele Segar" },
      { label: "Bobot & Isi", value: "1 Kilogram (Isi 3-4 ekor Nila atau 6-8 ekor Lele)" },
      { label: "Teknologi Budidaya", value: "Kolam Terpal Bioflok Modern Ramah Lingkungan" },
      { label: "Keunggulan Daging", value: "Daging Tebal Padat, Manis Gurih, Bebas Bau Lumpur" }
    ]
  },
  {
    id: "prod-maggot-01",
    name: "Maggot BSF Kering Organik Super (Pakan Ikan & Burung) LKROBO (250g)",
    category: "perikanan",
    categoryLabel: "Ketahanan Pangan & Pakan Alami",
    price: 35000,
    formattedPrice: "Rp 35.000",
    shortDescription: "Larva Maggot BSF kering oven kaya protein 45%+ untuk pakan alami bernutrisi tinggi ikan bioflok dan aneka burung berkicau di kubah aviary.",
    fullDescription: "Pakan alami berkualitas tinggi hasil biokonversi limbah organik budidaya Maggot Black Soldier Fly (BSF) mandiri Lapas Kelas IIA Kerobokan. Dikeringkan higienis dengan oven terkontrol guna menjaga kandungan protein alami 45%+, asam amino, dan mineral kalsium. Sangat disukai ikan nila, lele, koi, channa, serta aneka burung berkicau (murai batu, kacer, lovebird, canari). Memacu pertumbuhan dan meningkatkan kekebalan satwa secara alami.",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968126/hi6ovjcvddmbbte775gr.webp",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/maggot-bsf-kering-lkrobo-250g",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/maggot-bsf-kering-lkrobo-250g`,
    isFeatured: true,
    isBestSeller: false,
    inStock: true,
    material: "100% Larva Maggot BSF Murni Tanpa Kimia",
    madeBy: "Unit Budidaya Maggot BSF LKROBO",
    specifications: [
      { label: "Kandungan Nutrisi", value: "Protein Kasar 45%, Lemak Baik 25%, Kalsium Tinggi" },
      { label: "Sasaran Pakan", value: "Pakan Alami Ikan Kolam Bioflok & Burung Aviary" },
      { label: "Kemasan", value: "Standing Pouch Kedap Udara 250 gram dengan Ziplock" },
      { label: "Produk Sampingan", value: "Tersedia juga Pupuk Organik Kasgot Penyubur Tanah" }
    ]
  },
  {
    id: "prod-lukisan-01",
    name: "Lukisan Kanvas Orisinal 'Harmoni Dewata' Art Gallery LKROBO",
    category: "lukisan",
    categoryLabel: "Art Gallery & Seni Lukis",
    price: 850000,
    formattedPrice: "Rp 850.000",
    shortDescription: "Karya seni lukis kanvas orisinal goresan tangan seniman warga binaan binaan Art Gallery Lapas Kerobokan. Kaya nilai estetika, ketenangan batin, dan budaya Bali.",
    fullDescription: "Lukisan kanvas orisinal berkualitas tinggi yang dikerjakan langsung oleh seniman warga binaan di studio Art Gallery Lapas Kelas IIA Kerobokan. Menggunakan cat minyak dan akrilik bermutu tinggi di atas kanvas bertekstur rapat dengan perpaduan warna dan sapuan kuas berkarakter kuat. Menggambarkan kedamaian spiritual, keindahan alam, dan harapan baru. Sangat bernilai estetika tinggi untuk dekorasi ruang tamu, lobi hotel, villa, maupun koleksi galeri seni.",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968129/ylmupl2mz8vxvvruy5ay.webp",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/lukisan-kanvas-art-gallery-lkrobo",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/lukisan-kanvas-art-gallery-lkrobo`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Cat Akrilik & Minyak Premium di atas Kanvas Katun + Rangka Spanram Kayu",
    madeBy: "Studio Seni Lukis Art Gallery LKROBO",
    specifications: [
      { label: "Dimensi Karya", value: "60 cm x 80 cm (Sudah Termasuk Spanram Kayu)" },
      { label: "Media & Teknik", value: "Acrylic & Oil on Canvas (Teknik Palet & Kuas Detail)" },
      { label: "Sertifikat", value: "Disertai Sertifikat Keaslian Karya Seni LKROBO" },
      { label: "Proteksi Warna", value: "Varnish Lapisan Satin Anti UV & Tahan Lembap" }
    ]
  },
  {
    id: "prod-lukisan-02",
    name: "Lukisan Kanvas Lanskap Tradisi & Budaya Bali Art Gallery LKROBO",
    category: "lukisan",
    categoryLabel: "Art Gallery & Seni Lukis",
    price: 950000,
    formattedPrice: "Rp 950.000",
    shortDescription: "Lukisan kanvas orisinal bertema panorama dan kekayaan kultur Bali karya seniman warga binaan LKROBO. Goresan kuas impresif bernilai seni tinggi.",
    fullDescription: "Karya seni lukis kanvas otentik bertema lanskap alam dan keelokan tradisi budaya Bali. Dilukis dengan dedikasi penuh ketelitian oleh warga binaan berbakat di bawah bimbingan kurator seni rupa Art Gallery Lapas Kelas IIA Kerobokan. Menggunakan cat minyak dan akrilik bergradasi hidup pada kanvas premium dengan spanram kayu solid, siap dipajang untuk mempercantik hunian eksklusif, galeri seni, maupun lobi hotel.",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789882636/lukisan.webp",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/lukisan-lanskap-bali-lkrobo",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/lukisan-lanskap-bali-lkrobo`,
    isFeatured: true,
    isBestSeller: false,
    inStock: true,
    material: "Oil & Acrylic on Canvas Berkualitas + Spanram Kayu Solid",
    madeBy: "Studio Seni Lukis Art Gallery LKROBO",
    specifications: [
      { label: "Dimensi Lukisan", value: "70 cm x 90 cm (Rangka Spanram Kayu Siap Gantung)" },
      { label: "Media & Teknik", value: "Campuran Cat Minyak & Akrilik (Teknik Impasto & Glazing)" },
      { label: "Otentisitas", value: "Tanda Tangan Asli Pelukis & Sertifikat Kurasi LKROBO" },
      { label: "Proteksi Lukisan", value: "Vernis Anti Debu, Anti Lembap & UV Protection" }
    ]
  },
  {
    id: "prod-daur-ulang-rokok-01",
    name: "Kerajinan Miniatur & Seni Anyaman Daur Ulang Kemasan Rokok LKROBO",
    category: "daur_ulang",
    categoryLabel: "Kriya Daur Ulang Kreatif",
    price: 65000,
    formattedPrice: "Rp 65.000",
    shortDescription: "Kerajinan tangan unik ramah lingkungan berbahan limbah kemasan rokok yang dianyam dan dirangkai presisi tinggi oleh warga binaan LKROBO.",
    fullDescription: "Karya seni kriya upcycling inovatif hasil ketelitian dan kesabaran warga binaan bimbingan kerja Lapas Kelas IIA Kerobokan. Memanfaatkan lapisan karton dan foil kemasan rokok bekas yang disortir bersih, dilipat rapi, dan dianyam dengan teknik kunci presisi tanpa lem kimia berbahaya. Menghasilkan aneka miniatur kapal layar tradisional, kotak serbaguna artistik, dan suvenir unik yang kokoh, berkarakter metalik estetis, dan bernilai seni tinggi.",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958409/krtovwh0faamuzcefiaw.webp",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/kerajinan-daur-ulang-kemasan-rokok",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/kerajinan-daur-ulang-kemasan-rokok`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "100% Upcycled Kemasan Rokok Pilihan, Karton Foil, Vernis Pelindung",
    madeBy: "Unit Kerajinan Daur Ulang Kemasan Rokok LKROBO",
    specifications: [
      { label: "Bahan Baku", value: "Limbah Kemasan Rokok Terpilih (Bersih & Higienis)" },
      { label: "Teknik Pembuatan", value: "Anyaman Kunci Lipat Presisi Manual & Perakitan Detail" },
      { label: "Finishing", value: "Coating Vernis Transparan (Anti Debu & Tahan Percikan Air)" },
      { label: "Keistimewaan", value: "Karya Ramah Lingkungan Ekonomi Sirkular (Zero-Waste)" }
    ]
  },
  {
    id: "prod-daur-ulang-koran-01",
    name: "Keranjang & Wadah Anyaman Estetik Daur Ulang Koran LKROBO",
    category: "daur_ulang",
    categoryLabel: "Kriya Daur Ulang Kreatif",
    price: 45000,
    formattedPrice: "Rp 45.000",
    shortDescription: "Keranjang dan wadah serbaguna estetik berbahan lintingan koran bekas pilihan berfinishing vernis tahan lembap karya warga binaan LKROBO.",
    fullDescription: "Karya seni kriya ramah lingkungan yang memadukan kepedulian daur ulang limbah dengan seni anyaman bernilai estetika tinggi. Dibuat dari lintingan kertas koran bekas yang digulung padat, dianyam rapi secara manual dengan kekuatan setara anyaman rotan alam, serta dilapisi vernis khusus anti jamur dan tahan percikan air. Cocok untuk wadah buah meja makan, tempat pernak-pernik, suvenir pernikahan ramah lingkungan, maupun dekorasi ruangan berkonsep natural.",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044576/bkop5z6x6qvyxgmmvtvh.webp",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/kerajinan-anyaman-daur-ulang-koran",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/kerajinan-anyaman-daur-ulang-koran`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "100% Kertas Koran Daur Ulang, Perekat Ramah Lingkungan, Vernis Gloss Pelindung",
    madeBy: "Unit Kerajinan Daur Ulang Koran LKROBO",
    specifications: [
      { label: "Bahan Baku", value: "Kertas Koran Bekas Pilihan (Lintingan Padat & Rapat)" },
      { label: "Teknik Pembuatan", value: "Anyaman Tangan Manual (Handcrafted Woven Paper)" },
      { label: "Pelapis Akhir", value: "Vernis Clear Gloss (Tahan Percikan Air & Anti Lembap)" },
      { label: "Keunggulan", value: "Ramah Lingkungan, Bobot Ringan, Kuat & Bernuansa Etnik" }
    ]
  },
  {
    id: "prod-batik-01",
    name: "Kain Batik Tulis & Cap Eksklusif Motif Ornamen Bali LKROBO",
    category: "batik",
    categoryLabel: "Kerajinan Batik & Tekstil",
    price: 245000,
    formattedPrice: "Rp 245.000",
    shortDescription: "Kain batik karya warga binaan LKROBO dengan perpaduan canting malam dan cap bermotif ornamen khas Bali di atas kain katun primissima super.",
    fullDescription: "Karya tekstil adiluhung hasil ketelitian warga binaan unit Kerajinan Batik Lapas Kelas IIA Kerobokan. Dibuat menggunakan kain katun primissima mori berkualitas tinggi dengan sentuhan lilin malam dan pewarnaan bertahap yang matang. Memiliki tekstur kain yang jatuh lembut, adem di kulit, serta warna tajam yang tidak mudah luntur. Cocok dijadikan bahan kemeja formal, kebaya, gamis, maupun sarung adat berkelas.",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958428/vch8076fjlf9fvclbnyh.webp",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/kain-batik-motif-bali-lkrobo",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/kain-batik-motif-bali-lkrobo`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "100% Katun Primissima Super Berkualitas Tinggi",
    madeBy: "Unit Kerajinan Batik LKROBO",
    specifications: [
      { label: "Dimensi Kain", value: "Panjang 220 cm x Lebar 115 cm" },
      { label: "Teknik Pembuatan", value: "Kombinasi Batik Cap Tembaga & Canting Lilin Malam" },
      { label: "Karakter Bahan", value: "Halus, Sejuk, Menyerap Keringat, Tidak Nerawang" },
      { label: "Perawatan", value: "Cuci dengan sabun lerak atau detergen cair lembut" }
    ]
  },
  {
    id: "prod-perkebunan-01",
    name: "Paket Hasil Kebun & Komoditas Pangan Segar Perkebunan LKROBO",
    category: "perkebunan",
    categoryLabel: "Perkebunan & Pangan",
    price: 38000,
    formattedPrice: "Rp 38.000",
    shortDescription: "Hasil bumi perkebunan segar ramah lingkungan seperti aneka buah pisang, jagung manis, dan tanaman pangan hasil budidaya warga binaan LKROBO.",
    fullDescription: "Dipanen langsung dari area perkebunan terbuka produktif Lapas Kelas IIA Kerobokan. Dikelola dengan pemupukan organik kasgot (residu biokonversi maggot BSF) dan bokashi alami tanpa bahan kimia berbahaya. Menghasilkan aneka buah pisang, jagung manis segar, dan rempah pangan berkhasiat dengan cita rasa alami, manis, dan bergizi tinggi.",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968126/zvjkbkjecpp4i5f2loo5.webp",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/paket-hasil-kebun-perkebunan-lkrobo",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/paket-hasil-kebun-perkebunan-lkrobo`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "100% Hasil Kebun Segar Organik (Dipupuk Kasgot Alami)",
    madeBy: "Unit Perkebunan & Ketahanan Pangan LKROBO",
    specifications: [
      { label: "Kondisi", value: "Fresh Picked Daily (Dipetik Baru Saat Pesanan)" },
      { label: "Metode Budidaya", value: "Pertanian Organik Ramah Lingkungan Non-Pestisida Kimia" },
      { label: "Nutrisi Tanah", value: "Pupuk Kasgot BSF Organik Hasil Biokonversi Mandiri" },
      { label: "Kualitas", value: "Segar Alami, Bersih, Kaya Nutrisi & Serat Pangan" }
    ]
  },
  {
    id: "prod-pertukangan-01",
    name: "Meja & Bangku Kayu Solid Kombinasi Rangka Besi Industrial LKROBO",
    category: "pertukangan",
    categoryLabel: "Pertukangan & Las",
    price: 450000,
    formattedPrice: "Rp 450.000",
    shortDescription: "Furnitur meja dan bangku kayu solid pilihan dengan rangka besi hollow kokoh berfinishing cat anti karat karya bengkel pertukangan dan las LKROBO.",
    fullDescription: "Karya furnitur fungsional dan estetik hasil kolaborasi keterampilan pertukangan kayu dan pengelasan logam warga binaan Lapas Kelas IIA Kerobokan. Menggunakan papan kayu solid pilihan dengan serat alami yang dipertegas pelapis politur pelindung cuaca, dipadukan rangka besi hollow tebal dengan las sambungan rapi dan kuat. Sangat cocok untuk meja santai kafe, teras rumah, ruang kerja minimalis, maupun taman.",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042758/ovxca9k9rpep6gfaph4v.webp",
    shopeeUrl: "https://shopee.co.id/bimker_lkrobo/meja-bangku-kayu-besi-industrial-lkrobo",
    tokopediaUrl: `${TOKOPEDIA_CONFIG.officialStoreUrl}/meja-bangku-kayu-besi-industrial-lkrobo`,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Kayu Solid Pilihan, Rangka Besi Hollow, Finishing Politur & Cat Anti Karat",
    madeBy: "Bengkel Pertukangan & Las LKROBO",
    specifications: [
      { label: "Material Daun Meja", value: "Kayu Solid Alami (Finishing Melamine Clear Gloss)" },
      { label: "Material Rangka", value: "Besi Hollow Tebal dengan Pengelasan Presisi" },
      { label: "Finishing Rangka", value: "Cat Primer Anti Karat & Epoxy Matte Black" },
      { label: "Layanan Tambahan", value: "Menerima Pesanan Kustom Ukuran & Desain (Custom Order)" }
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968129/ylmupl2mz8vxvvruy5ay.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968129/ylmupl2mz8vxvvruy5ay.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789882636/lukisan.webp"
    ],
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044576/bkop5z6x6qvyxgmmvtvh.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044576/bkop5z6x6qvyxgmmvtvh.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044788/copy_of_jua8h5hppyqakshi5rnr.webp"
    ],
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958409/krtovwh0faamuzcefiaw.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958409/krtovwh0faamuzcefiaw.webp"
    ],
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968128/uhc1sdyxogduglz2lwwd.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968128/uhc1sdyxogduglz2lwwd.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044577/wbemrlk6alvqfaqz16aj.webp"
    ],
    fullDesc: "Dapur Bakery Antaboga merupakan salah satu unit UMKM paling produktif di Lapas Kerobokan. Beroperasi setiap hari memproduksi aneka roti manis, roti sobek, croissant renyah, kue basah, serta pie susu khas Bali. Seluruh proses produksi mengikuti prosedur ketat sanitasi makanan dan telah mengantongi Sertifikat Laik Higiene Sanitasi dari Dinas Kesehatan.",
    participantsCount: 40,
    duration: "4 Bulan + Magang Produksi Mandiri",
    durationEn: "4 Months + Production Internship",
    certification: "Sertifikat Laik Higiene Sanitasi Dinkes & BNSP Pastry",
    outputProducts: ["Roti Manis Aneka Isian", "Roti Sobek Lembut", "Pie Susu Khas Bali Antaboga", "Artisan Pastry & Cookies"],
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958503/d5sw4j0cjgpqimoapz7r.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958503/d5sw4j0cjgpqimoapz7r.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958410/lnxmwwpxt1sffmxrqemq.webp"
    ],
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958557/IMG_3895.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958557/IMG_3895.webp"
    ],
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789972519/ibv1quezbsvwqzrgthxg.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789972519/ibv1quezbsvwqzrgthxg.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790046463/yddlpoqbzdmgm9lbesdz.webp"
    ],
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
  {
    id: "prog-batik",
    title: "Kerajinan Batik",
    titleEn: "Batik Textile & Crafts",
    category: "umkm",
    categoryLabel: "Program UMKM",
    categoryLabelEn: "SME Program",
    shortDesc: "Melestarikan seni adiluhung membatik tulis dan cap dengan sentuhan motif ornamen khas Bali berstandar kualitas kain adibusana.",
    shortDescEn: "Preserving traditional hand-drawn and stamped batik art infused with Balinese ornamental motifs crafted to high textile standards.",
    icon: "Scissors",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958428/vch8076fjlf9fvclbnyh.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958428/vch8076fjlf9fvclbnyh.webp"
    ],
    fullDesc: "Unit Kerajinan Batik bimbingan kerja Lapas Kelas IIA Kerobokan melatih warga binaan dalam seni membatik tradisional secara telaten dan presisi. Mulai dari pembuatan pola sketsa motif, proses mencanting malam panas (batik tulis), teknik batik cap tembaga, pewarnaan kain berlapis (pewarna alami dan sintetis berkualitas), hingga proses lorod (pelepasan malam). Menghasilkan lembaran kain batik motif khas Bali yang anggun dan aneka produk turunan fashion siap pakai.",
    participantsCount: 25,
    duration: "4 Bulan Pelatihan Membatik",
    durationEn: "4 Months Batik Crafting Course",
    certification: "Sertifikat Keterampilan Kriya Tekstil Batik",
    outputProducts: ["Kain Panjang Batik Tulis Motif Bali", "Kemeja Batik Pria Elegan", "Syal & Selendang Batik Sutra", "Masker & Pouch Batik Eksklusif"],
    highlights: [
      "Bimbingan teknik canting malam dan cap tembaga bersama instruktur batik profesional",
      "Eksplorasi motif khas Bali dipadukan dengan ragam hias nusantara kontemporer",
      "Proses pewarnaan ramah lingkungan yang tahan lama dan tidak mudah luntur"
    ]
  },
  {
    id: "prog-laundry",
    title: "Laundry dan Binatu",
    titleEn: "Laundry & Linen Services",
    category: "umkm",
    categoryLabel: "Program UMKM",
    categoryLabelEn: "SME Program",
    shortDesc: "Layanan binatu dan cuci setrika berstandar higienis menggunakan mesin cuci industri modern untuk kebutuhan lapas dan mitra umum.",
    shortDescEn: "Hygienic laundry, wash, and steam-pressing service using modern industrial washers for facility operations and public business partners.",
    icon: "Shirt",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789972550/zndy4t5h557j42vdenzl.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789972550/zndy4t5h557j42vdenzl.webp"
    ],
    fullDesc: "Unit Bimbingan Kerja Laundry Lapas Kelas IIA Kerobokan membekali warga binaan dengan keterampilan operasional tata graha dan binatu profesional. Peserta dilatih mengoperasikan mesin cuci industri, teknik pemilahan serat kain, formulasi deterjen dan pelembut higienis, pengeringan steril, hingga teknik setrika uap presisi agar pakaian rapi, wangi, dan bebas bakteri. Program ini melayani pencucian seragam dinas, linen operasional, serta pesanan binatu kiloan dan satuan dari mitra sekitar.",
    participantsCount: 25,
    duration: "3 Bulan Pelatihan Binatu & Tata Graha",
    durationEn: "3 Months Laundry & Housekeeping Course",
    certification: "Sertifikat Kejuruan Binatu & Tata Graha (Laundry & Housekeeping)",
    outputProducts: ["Layanan Cuci & Setrika Uap Kiloan", "Pencucian Seragam Dinas & Jas Satuan", "Layanan Cuci Linen Hotel, Villa & Resto", "Pencucian Bed Cover & Selimut Tebal"],
    highlights: [
      "Fasilitas mesin cuci dan pengering kapasitas industri berstandar efisiensi tinggi",
      "SOP higienitas ketat dengan formula deterjen antibakteri ramah lingkungan",
      "Pelatihan teknik setrika uap bertekanan tinggi untuk hasil lipatan rapi sempurna",
      "Menyiapkan bekal wirausaha binatu mandiri dan kesiapan kerja di sektor perhotelan Bali"
    ]
  },
  {
    id: "prog-barbershop",
    title: "Barbershop dan Pangkas Rambut",
    titleEn: "Barbershop & Men's Grooming",
    category: "umkm",
    categoryLabel: "Program UMKM",
    categoryLabelEn: "SME Program",
    shortDesc: "Pelatihan keahlian pangkas rambut pria modern, teknik fade, styling rambut, serta higienitas alat cukur berstandar profesional.",
    shortDescEn: "Professional training in modern men's barbering, hair fading techniques, styling, and hygiene standards for grooming equipment.",
    icon: "Scissors",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789972520/pemwtf2hdb1deb3esvmv.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789972520/pemwtf2hdb1deb3esvmv.webp"
    ],
    fullDesc: "Unit Bimbingan Kerja Barbershop Lapas Kelas IIA Kerobokan membekali warga binaan dengan keahlian tata rias dan pangkas rambut pria profesional. Menggabungkan teknik potong rambut klasik dan tren gaya rambut modern (pompadour, crop, taper fade), kursus ini juga mengedepankan sterilisasi alat cukur (clipper, razor, sisir) dan etika pelayanan ramah. Keterampilan ini terbukti menjadi salah satu bidang yang paling cepat mengantarkan warga binaan membuka wirausaha mandiri setelah masa pidana selesai.",
    participantsCount: 20,
    duration: "3 Bulan Kursus Barbershop & Grooming",
    durationEn: "3 Months Barbershop & Grooming Course",
    certification: "Sertifikat Kejuruan Tata Rambut Pria & Barbershop",
    outputProducts: ["Jasa Potong Rambut Pria Modern & Klasik", "Styling & Perawatan Rambut", "Layanan Pangkas Rambut Warga Binaan & Pegawai", "Layanan Cukur & Grooming Eksternal"],
    highlights: [
      "Peralatan clipper mesin, gunting sasak, dan kursi barber berstandar salon profesional",
      "Pelatihan teknik potong rambut presisi (fade, undercut, textured crop, styling)",
      "Standar higienitas tinggi dengan sterilisasi berkala setiap alat potong dan razor",
      "Membekali alumni untuk langsung membuka wirausaha barbershop mandiri di masyarakat"
    ]
  },
  {
    id: "prog-pertukangan-las",
    title: "Pertukangan dan Las",
    titleEn: "Carpentry & Welding Workshop",
    category: "umkm",
    categoryLabel: "Program UMKM",
    categoryLabelEn: "SME Program",
    shortDesc: "Pelatihan teknik pertukangan kayu solid, permebelan estetik, fabrikasi besi, dan pengelasan presisi untuk produk interior dan eksterior.",
    shortDescEn: "Vocational training in solid woodworking, custom furniture making, metal fabrication, and precision welding for interior and exterior furnishings.",
    icon: "Hammer",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042758/ovxca9k9rpep6gfaph4v.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042758/ovxca9k9rpep6gfaph4v.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042637/hge9osjfep9ckckixwvs.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042632/h393dmzkyhkml47k7vq7.webp"
    ],
    fullDesc: "Bengkel Kerja Pertukangan dan Las Lapas Kelas IIA Kerobokan membekali warga binaan dengan keahlian teknis pertukangan kayu solid dan fabrikasi logam yang siap bersaing di pasar industri. Peserta dilatih mengolah kayu solid menjadi beragam mebel estetik (meja, kursi, lemari, rak display), serta teknik pengelasan listrik konstruksi (SMAW & MIG) untuk pembuatan pagar teralis, rangka kanopi, dan furnitur bergaya industrial modern. Didukung standar Keselamatan dan Kesehatan Kerja (K3) ketat, unit ini siap melayani pesanan kustom perorangan maupun pengadaan kantor dan instansi mitra.",
    participantsCount: 25,
    duration: "4 Bulan Kursus Pertukangan & Las",
    durationEn: "4 Months Carpentry & Welding Course",
    certification: "Sertifikat Kejuruan Pertukangan Kayu & Pengelasan Logam",
    outputProducts: ["Meja & Bangku Kayu Solid Rangka Besi", "Pagar, Teralis & Kanopi Minimalis", "Rak Display & Furnitur Gaya Industrial", "Aneka Kerajinan & Dekorasi Kayu Kustom"],
    highlights: [
      "Fasilitas lengkap mesin potong kayu, serut elektrik, mesin las SMAW, gerinda potong, dan safety gear K3",
      "Pelatihan konstruksi kayu solid dan fabrikasi rangka besi hollow berpresisi tinggi",
      "Menerima pengerjaan pesanan kustom (custom order) mebel interior, eksterior, dan teralis besi",
      "Membekali keterampilan teknis tinggi dengan peluang kerja dan wirausaha mandiri yang luas"
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044577/tqh0zor1wnhacdkkm74y.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044577/tqh0zor1wnhacdkkm74y.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044576/lzqgs2ne0x9hipauwcwo.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044576/nmwbxw5dzjba6ip5d6g8.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044576/fgchzov9turum34hyehs.webp"
    ],
    fullDesc: "Kubah Aviary yang asri dan hijau di kawasan Lapas Kerobokan berfungsi ganda sebagai sarana penangkaran aneka burung hias sekaligus terapi ketenangan batin warga binaan. Peserta mempelajari manajemen pakan bernutrisi berbasis pakan alami maggot BSF berprotein tinggi hasil budidaya mandiri, pemantauan kesehatan unggas, sanitasi kandang kubah, serta teknik penangkaran burung yang memiliki nilai hobi dan komersial.",
    participantsCount: 15,
    duration: "3 Bulan Praktik Konservasi",
    durationEn: "3 Months Conservation Practice",
    certification: "Sertifikat Keterampilan Pemeliharaan Satwa Unggas",
    outputProducts: ["Bibit Burung Kicau Sehat", "Pakan Alami Maggot BSF", "Sangkar Bambu Artistik", "Edukasi Konservasi Satwa"],
    highlights: [
      "Kubah aviary bernuansa alami dengan pepohonan hijau dan gemericik air",
      "Asupan pakan alami kaya protein dari unit budidaya maggot BSF mandiri",
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
    shortDesc: "Pengelolaan budidaya ayam petelur, ayam Bali, dan bebek petelur produktif yang higienis guna menyuplai kebutuhan pangan segar berprotein tinggi.",
    shortDescEn: "Productive and hygienic laying hens, Balinese native chickens, and laying ducks livestock management ensuring sustainable fresh food supply.",
    icon: "Egg",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968129/z00wjpuzspy9j9ziy0yb.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968129/z00wjpuzspy9j9ziy0yb.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042640/ytuylerc7oabfwo7u6eb.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968126/czxv95k7kjte92maptwv.webp"
    ],
    fullDesc: "Unit peternakan unggas produktif Lapas Kelas IIA Kerobokan membudidayakan ayam petelur komersial, ayam kampung lokal / ayam Bali, dan bebek petelur unggul. Memasok ratusan butir telur segar setiap hari untuk asupan gizi warga binaan serta dipasarkan luas ke masyarakat. Warga binaan dilatih dalam tata kelola perkandangan modern higienis, formulasi pakan seimbang bernutrisi alami, pemeliharaan bebek petelur air bersih, pencegahan penyakit ternak, dan pengolahan limbah organik menjadi pupuk kompos.",
    participantsCount: 25,
    duration: "4 Bulan Siklus Pemeliharaan",
    durationEn: "4 Months Livestock Cycle",
    certification: "Sertifikasi Tata Laksana Unggas Dinas Peternakan",
    outputProducts: ["Telur Ayam Negeri Segar", "Ayam Kampung / Ayam Bali Sehat", "Telur Bebek Segar Pilihan", "Pupuk Kompos Fermentasi", "Telur Asin Gurih Masir"],
    highlights: [
      "Kandang ayam petelur sistem baterai modern higienis dan terawat",
      "Area pemeliharaan ayam kampung / ayam Bali sehat dengan pakan terkontrol",
      "Kolam & kandang bebek petelur berstandar biosekuriti ramah lingkungan",
      "Produksi harian telur ayam dan telur bebek segar kaya protein",
      "Pilar utama ketahanan pangan swasembada mandiri Lapas Kerobokan"
    ]
  },
  {
    id: "prog-holtikultura",
    title: "Holtikultura",
    titleEn: "Horticulture & Hydroponics",
    category: "ketahanan_pangan",
    categoryLabel: "Program Ketahanan Pangan",
    categoryLabelEn: "Food Security Program",
    shortDesc: "Budidaya aneka tanaman sayur daun hidroponik, cabai, dan buah-buahan segar bernutrisi tinggi tanpa pestisida berbahaya.",
    shortDescEn: "Cultivation of fresh crisp hydroponic leafy vegetables, hot chilies, and nutritious produce without harmful synthetic pesticides.",
    icon: "Sprout",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042639/iwsgaqsb6mkwack2rlhn.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042639/iwsgaqsb6mkwack2rlhn.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042640/knj7rfxgwpnbkctsumqy.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042643/xaiba70jjhzz0qogkkez.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042641/wcs4l7ulmxtixua0onhj.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042639/vc1sf2vm1ybfy4euwrzp.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042634/uegw4sl5voz1kjoyzpky.webp"
    ],
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968126/zvjkbkjecpp4i5f2loo5.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968126/zvjkbkjecpp4i5f2loo5.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968127/npi1hl1sup6ztjbk1qp8.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042698/eowaddkxykltoqb6a4lq.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042636/ultppakltocnlmdazche.webp"
    ],
    fullDesc: "Mengubah area pekarangan terbuka lapas menjadi kebun pangan yang produktif dan hijau. Warga binaan mempelajari teknik pengolahan tanah ramah lingkungan, pemupukan organik kasgot (biokonversi maggot BSF) dan bokashi alami, pemangkasan dahan, rotasi tanaman pangan pisang dan jagung, serta budidaya tanaman obat keluarga yang bermanfaat bagi kebugaran tubuh.",
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968127/j1xqy1dewx3ng06aclxs.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968127/j1xqy1dewx3ng06aclxs.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968127/ot2rzgkngwtmrhaep3xv.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968126/hi6ovjcvddmbbte775gr.webp"
    ],
    fullDesc: "Menerapkan teknologi kolam terpal bulat dengan sistem aerasi bioflok modern. Sistem ini memanfaatkan mikroorganisme menguntungkan dan asupan pakan alami maggot BSF berprotein tinggi dari unit biokonversi internal untuk mendaur ulang nutrisi pakan sehingga hemat air, tidak berbau, dan menghasilkan ikan konsumsi yang higienis dengan kualitas daging padat dan segar. Membekali warga binaan dengan keahlian budidaya yang siap dipraktikkan di pekarangan rumah pasca bebas.",
    participantsCount: 20,
    duration: "3 Bulan Siklus Budidaya Air Tawar",
    durationEn: "3 Months Freshwater Aquaculture Cycle",
    certification: "Sertifikasi Tata Laksana Budidaya Bioflok Perikanan",
    outputProducts: ["Ikan Lele Segar Siap Olah", "Ikan Nila Merah Pilihan", "Bibit Ikan Air Tawar", "Pakan Alami Maggot BSF Terpadu"],
    highlights: [
      "Teknologi bioflok hemat air dan ramah lingkungan tanpa bau",
      "Diberi pakan alami maggot BSF berprotein 45%+ hasil budidaya mandiri",
      "Daging ikan gurih, padat lezat, tidak berbau lumpur, dan bernutrisi tinggi",
      "Mendukung pasokan protein hewani dapur lapas dan konsumsi masyarakat"
    ]
  },
  {
    id: "prog-maggot",
    title: "Budidaya Maggot BSF",
    titleEn: "BSF Maggot Bioconversion",
    category: "ketahanan_pangan",
    categoryLabel: "Program Ketahanan Pangan",
    categoryLabelEn: "Food Security Program",
    shortDesc: "Biokonversi limbah organik dapur menjadi maggot BSF kaya protein 45%+ untuk pakan mandiri ikan kolam bioflok dan aneka burung kubah aviary.",
    shortDescEn: "Bioconversion of organic kitchen waste into high-protein BSF maggots as natural feed for biofloc fish and aviary birds.",
    icon: "Bug",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968126/hi6ovjcvddmbbte775gr.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968126/hi6ovjcvddmbbte775gr.webp"
    ],
    fullDesc: "Unit budidaya Maggot Black Soldier Fly (BSF) merupakan terobosan ekonomi sirkular ramah lingkungan di Lapas Kelas IIA Kerobokan. Maggot memanfaatkan limbah sisa makanan organik dapur lapas untuk berkembang biak dengan cepat, menghasilkan larva kaya protein (40-45%) yang dialokasikan sebagai pakan alami berkualitas tinggi bagi ikan air tawar di kolam bioflok dan burung-burung berkicau di kubah aviary. Residu penguraian menghasilkan pupuk kasgot (bekas maggot) bernutrisi tinggi bagi perkebunan tanaman lapas.",
    participantsCount: 15,
    duration: "2 Bulan Pelatihan Biokonversi",
    durationEn: "2 Months Bioconversion Course",
    certification: "Sertifikat Biokonversi Limbah & Produksi Pakan Alami",
    outputProducts: ["Maggot BSF Hidup Pakan Segar", "Maggot BSF Kering High Protein", "Pupuk Organik Kasgot Super", "Prapupa & Telur Lalat BSF"],
    highlights: [
      "Pakan mandiri berkualitas tinggi untuk ikan kolam bioflok dan aneka burung aviary",
      "Mengurangi volume timbulan sampah organik dapur lapas secara signifikan",
      "Menghasilkan pupuk kasgot organik kaya unsur hara untuk perkebunan",
      "Sistem sirkular nol sampah (zero-waste) ramah lingkungan di dalam lapas"
    ]
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-premi-01",
    title: "Transparansi & Akuntabilitas Pembinaan: Lapas Kerobokan Salurkan Hak Premi Kerja Hasil Penjualan Produk kepada Warga Binaan",
    date: "18 Maret 2026",
    category: "Pemberdayaan & Premi",
    author: "Humas & Seksi Giatja LKROBO",
    readTime: "4 menit baca",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968127/l5zuxuucvytsxjfbpsuk.webp",
    excerpt: "Sebagai pemenuhan hak pekerja narapidana dan wujud transparansi pengelolaan hasil karya, Lapas Kerobokan secara berkala menyalurkan upah premi yang langsung dibukukan ke tabungan mandiri warga binaan.",
    content: [
      "KEROBOKAN — Lapas Kelas IIA Kerobokan membuktikan komitmen transparansi dan akuntabilitas pembinaan dengan menggelar seremoni berkala penyerahan upah premi hasil kerja kepada para warga binaan yang aktif berproduksi di berbagai unit bimbingan kerja.",
      "Premi diserahkan langsung oleh jajaran pejabat struktural Seksi Kegiatan Kerja kepada perwakilan narapidana pengrajin perak, juru masak Dapur Bakery Antaboga, penjahit garmen tenun Endek, seniman lukis, serta tim budidaya perikanan dan perkebunan.",
      "Nominal premi yang diterima merupakan persentase resmi dari laba bersih penjualan produk di toko resmi Tokopedia BIMKER LKROBO serta pesanan instansi dan mitra industri sepanjang periode berjalan.",
      "Hasil premi ini langsung dibukukan ke dalam rekening tabungan mandiri masing-masing warga binaan. Mereka dapat mengirimkannya secara berkala untuk membantu nafkah keluarga di rumah maupun disimpan utuh sebagai modal memulai wirausaha saat masa pidana usai.",
      "\"Melalui pembagian premi yang transparan ini, warga binaan merasakan langsung bahwa keringat dan kerja keras mereka dihargai secara bermartabat. Ini memotivasi mereka untuk terus belajar dan membuktikan diri bahwa mereka mampu berdikari secara halal,\" ungkap Kepala Seksi Kegiatan Kerja Lapas Kerobokan."
    ]
  },
  {
    id: "news-apel-01",
    title: "Membangun Disiplin & Keselamatan Kerja: Rutinitas Apel Pagi Warga Binaan Sebelum Memulai Produksi di Balik Terali",
    date: "16 Maret 2026",
    category: "Pelatihan & Sertifikasi",
    author: "Seksi Kegiatan Kerja LKROBO",
    readTime: "3 menit baca",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968128/slefyi8iuwrmleiwhg37.webp",
    excerpt: "Sebelum melangkah ke bengkel kerja kriya, bakery, maupun kebun, warga binaan Lapas Kerobokan wajib mengikuti apel pagi guna pembekalan kedisiplinan dan SOP keselamatan kerja.",
    content: [
      "KEROBOKAN — Suasana tertib dan penuh konsentrasi terlihat di halaman area Bimbingan Kerja Lapas Kelas IIA Kerobokan setiap pagi. Puluhan warga binaan pekerja berdiri berbaris rapi mengikuti apel pagi sebelum didistribusikan ke unit kerja masing-masing.",
      "Apel pagi ini dipimpin langsung oleh staf Seksi Kegiatan Kerja (Giatja) dan para instruktur teknis. Tujuannya adalah memastikan kesiapan fisik dan mental para peserta, memeriksa kelengkapan alat pelindung diri (APD), serta memberikan pengarahan terkait target produksi harian.",
      "Penerapan Keselamatan dan Kesehatan Kerja (K3) menjadi prioritas mutlak, terutama bagi warga binaan yang menangani mesin konveksi berkecepatan tinggi, oven bakery bersuhu tinggi, maupun peleburan logam mulia di bengkel perak.",
      "\"Melalui apel pagi ini, kami tidak hanya melatih keterampilan tangan, tetapi juga menanamkan etos kerja profesional seperti disiplin waktu, kerapian, tanggung jawab, dan rasa saling menghargai. Nilai-nilai inilah yang menjadi bekal paling berharga saat kembali ke masyarakat nanti,\" jelas perwira pembina kegiatan kerja."
    ]
  },
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
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042640/knj7rfxgwpnbkctsumqy.webp",
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
