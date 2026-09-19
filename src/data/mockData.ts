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
    description: "Didistribusikan melalui Tokopedia resmi, pameran UMKM Bali, dan pesanan mitra."
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
  {
    id: "prog-perak",
    title: "Kerajinan Perak & Perhiasan Khas Bali",
    category: "kriya",
    categoryLabel: "Kriya & Seni Logam",
    shortDesc: "Pelatihan seni kriya perak Celuk, teknik filigree, jawan, dan pembuatan perhiasan perak berdaya jual ekspor.",
    fullDesc: "Bekerja sama dengan maestro perak Gianyar dan asosiasi pengrajin Bali, program ini membekali warga binaan dengan keahlian memotong, mematri, mengukir jawan, hingga tahap finishing poles perak 925. Hasil karya telah menembus pasar cenderamata turis mancanegara dan toko oleh-oleh ternama di Bali.",
    participantsCount: 35,
    duration: "6 Bulan Pelatihan Intensif",
    certification: "Sertifikat Uji Kompetensi Kriya Logam BNSP",
    outputProducts: ["Gelang Jawan Bali 925", "Cincin Perak Tridatu", "Bros Kebaya Filigree", "Pendant Liontin Khas Bali"],
    image: "https://images.unsplash.com/photo-1611591475879-16a7504a5e3e?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Instruktur berpengalaman dari sentra perak Celuk Sukawati",
      "Peralatan tempa dan pematrian berstandar keselamatan kerja",
      "Kemitraan penyaluran langsung ke butik cenderamata Bali"
    ]
  },
  {
    id: "prog-bakery",
    title: "Tata Boga & Antaboga Bakery",
    category: "kuliner",
    categoryLabel: "Kuliner & Tata Boga",
    shortDesc: "Pembinaan profesional pembuatan roti artisan, pastry khas Prancis, pie susu Bali, dan katering higienis.",
    fullDesc: "Dapur Bakery Antaboga merupakan salah satu unit paling produktif di Lapas Kerobokan. Beroperasi setiap hari memproduksi ratusan pastry, roti manis, dan snack box untuk kebutuhan internal lapas, mitra kafe di Badung, serta pesanan pameran kementerian.",
    participantsCount: 40,
    duration: "4 Bulan + Magang Produksi Mandiri",
    certification: "Sertifikat Laik Higiene Sanitasi Dinas Kesehatan & BNSP Pastry",
    outputProducts: ["Artisan Croissant", "Pie Susu Bali", "Roti Manis Abon & Cokelat", "Cookies Rempah Bali"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Standar higienitas HACCP dan inspeksi rutin berkala",
      "Peralatan oven konveksi industri dan proofing chamber",
      "Menyuplai pesanan berkala kafe di Kuta dan Denpasar"
    ]
  },
  {
    id: "prog-garmen",
    title: "Garmen, Konveksi & Sablon Distro",
    category: "manufaktur",
    categoryLabel: "Manufaktur & Tekstil",
    shortDesc: "Pembuatan seragam kerja, pakaian beraksen kain tenun Endek Bali, tote bag kanvas, dan kaos sablon manual/digital.",
    fullDesc: "Mengoperasikan puluhan mesin jahit high-speed, mesin obras, dan meja sablon presisi. Unit garmen Lapas Kerobokan kerap menerima order massal (maklon) seragam dinas, kaos event komunitas pariwisata Bali, dan apron kafe barista.",
    participantsCount: 50,
    duration: "3 Bulan Dasar + 3 Bulan Produksi",
    certification: "Sertifikat Kompetensi Menjahit Garmen BLK / Kemnaker",
    outputProducts: ["Kemeja Tenun Endek", "Apron Barista Canvas", "Seragam Instansi", "Tote Bag Merchandise"],
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Kapasitas produksi hingga 1.500 potong pakaian per bulan",
      "Sistem quality control berlapis sebelum pengemasan",
      "Pelatihan pola dasar busana pria, wanita, dan teknik draping"
    ]
  },
  {
    id: "prog-hidroponik",
    title: "Pertanian Hidroponik & Kebun Sayur Organik",
    category: "agribisnis",
    categoryLabel: "Agribisnis Modern",
    shortDesc: "Budi daya sayuran daun krispi metode NFT hidroponik di dalam greenhouse modern yang bersih dan ramah lingkungan.",
    fullDesc: "Memanfaatkan lahan terbuka di dalam lapas menjadi greenhouse hijau produktif. Menghasilkan sayuran selada butterhead, romaine, pakcoy, dan kangkung hidroponik yang bebas dari pestisida sintetis dan diserap oleh restoran sehat di wilayah Badung.",
    participantsCount: 25,
    duration: "3 Bulan Siklus Tanam",
    certification: "Sertifikasi Budi Daya Sayuran Ramah Lingkungan Dinas Pertanian",
    outputProducts: ["Selada Hidroponik Butterhead", "Pakcoy Segar", "Kangkung Air Bersih", "Bibit Sayuran Siap Tanam"],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Instalasi greenhouse otomatis dengan pengukur pH & TDS digital",
      "Dikelola secara ramah lingkungan dan hemat air",
      "Panen rutin setiap 3 minggu dengan kualitas super"
    ]
  },
  {
    id: "prog-peternakan",
    title: "Peternakan Ayam Petelur & Budidaya Ikan",
    category: "agribisnis",
    categoryLabel: "Peternakan & Perikanan",
    shortDesc: "Pengelolaan peternakan ayam petelur harian dan kolam bioflok ikan lele serta nila untuk ketahanan pangan.",
    fullDesc: "Unit peternakan memasok ratusan butir telur segar setiap hari untuk kebutuhan dapur warga binaan dan dipasarkan ke lingkungan sekitar lapas. Melatih kedisiplinan jadwal pakan, biosekuriti kandang, dan manajemen budidaya perikanan air tawar.",
    participantsCount: 25,
    duration: "4 Bulan Siklus Pemeliharaan",
    certification: "Sertifikasi Tata Laksana Unggas & Budidaya Bioflok",
    outputProducts: ["Telur Ayam Segar Harian", "Ikan Lele Segar Siap Olah", "Pupuk Organik Padat Kotoran Unggas"],
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Produksi telur segar stabil 200+ butir per hari",
      "Sistem bioflok hemat lahan dan ramah bau",
      "Mendukung program ketahanan pangan mandiri pemasyarakatan"
    ]
  },
  {
    id: "prog-dupa",
    title: "Pembuatan Dupa Wangi & Aromaterapi Bali",
    category: "kriya",
    categoryLabel: "Kriya Tradisional & Relaksasi",
    shortDesc: "Produksi dupa tradisional harum alami berbahan dasar herbal, minyak atsiri bunga kamboja, cempaka, dan cendana.",
    fullDesc: "Dupa memiliki kebutuhan pasar yang sangat tinggi di Bali untuk upacara harian maupun relaksasi spa pariwisata. Warga binaan dilatih meracik komposisi serbuk kayu wangi, teknik celup konsisten, serta pengeringan suhu terkontrol agar dupa menyala stabil dan abu tidak panas.",
    participantsCount: 30,
    duration: "2 Bulan Pelatihan",
    certification: "Sertifikat Keterampilan Kriya Aromaterapi Bali",
    outputProducts: ["Dupa Herbal Cempaka Wangi", "Dupa Cendana Meditasi", "Dupa Kerucut Spa", "Stick Dupa Harum Gaharu"],
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Menggunakan bahan herbal alami tanpa bahan kimia berbahaya",
      "Kemasan kedap udara menjaga ketahanan aroma hingga 1 tahun",
      "Pangsa pasar stabil di toko ritel dan pura di Bali"
    ]
  },
  {
    id: "prog-barber",
    title: "Barbershop & Seni Pangkas Rambut Mandiri",
    category: "jasa",
    categoryLabel: "Layanan Jasa & Keterampilan",
    shortDesc: "Pelatihan teknik potong rambut pria modern (fade, taper, pompadour), shaving higienis, dan manajemen salon mini.",
    fullDesc: "Menyiapkan warga binaan untuk membuka usaha pangkas rambut sendiri pasca bebas dengan modal terjangkau. Dilengkapi ruang salon praktik yang bersih dan peralatan clipper, gunting tekstur, serta teknik sanitasi pisau cukur.",
    participantsCount: 20,
    duration: "3 Bulan Praktik Terpadu",
    certification: "Sertifikat Penata Rambut Pria Barbershop Profesional",
    outputProducts: ["Jasa Pangkas Rambut Modern", "Jasa Perawatan Rambut Pria", "Styling Pomade Herbal LKROBO"],
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Praktik langsung melayani ratusan warga binaan dan petugas",
      "Teknik potong rambut tren terkini dan konsultasi gaya rambut",
      "Peluang wirausaha mandiri yang sangat cepat balik modal"
    ]
  },
  {
    id: "prog-sablon",
    title: "Studio Sablon & Merchandise Kreatif",
    category: "kriya",
    categoryLabel: "Desain Grafis & Merchandise",
    shortDesc: "Pelatihan desain grafis komputer, separasi warna, pembuatan film sablon, dan cetak kaos/tote bag kanvas.",
    fullDesc: "Wadah ekspresi visual bagi warga binaan berbakat seni gambar dan grafis. Mengembangkan desain bertema budaya Bali, pesan perdamaian, dan harapan sosial yang diaplikasikan ke berbagai suvenir berkualitas tinggi.",
    participantsCount: 25,
    duration: "3 Bulan Kursus Desain & Sablon",
    certification: "Sertifikat Operator Sablon Tekstil Manual & Digital",
    outputProducts: ["Kaos Souvenir Bali Eksklusif", "Tote Bag Kanvas Desain Khusus", "Sticker Die-cut Komunitas"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Memadukan seni ilustrasi tradisional dengan teknik sablon modern",
      "Menyediakan layanan custom merchandise event instansi dan komunitas",
      "Laboratorium cetak sablon dengan meja presisi tinggi"
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
