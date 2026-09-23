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
  // ==================== 10 PRODUK RESMI SESUAI KATALOG SHOPEE & TOKOPEDIA LKROBO ====================
  {
    id: "prod-perak-01",
    name: "Perhiasan Silver",
    category: "perak",
    categoryLabel: "Aksesoris Fashion",
    price: 250000,
    formattedPrice: "Rp 250.000",
    shortDescription: "Perhiasan silver / perak buatan tangan warga binaan dengan ukiran etnik khas pengrajin perak Lapas Kerobokan.",
    fullDescription: "Produk perhiasan silver (perak) handmade berkualitas hasil karya ketelitian warga binaan Bimbingan Kerja Lapas Kelas IIA Kerobokan. Dirancang dengan sentuhan detail etnik Bali yang anggun dan bernilai seni tinggi, cocok untuk pemakaian pribadi maupun cinderamata khas Bali.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81ztc-mt8yjtlu8mx485",
    galleryImages: [
      "https://down-id.img.susercontent.com/file/id-11134207-81ztc-mt8yjtlu8mx485",
      "https://down-id.img.susercontent.com/file/id-11134207-81zti-mt7prpaymby9b0",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztp-mt7prpayjitd24",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztn-mt7prpayp5350a",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztj-mt8yjtlu07igfe"
    ],
    shopeeUrl: "https://shopee.co.id/Perhiasan-Silver-i.1325294054.56067950873?extraParams=%7B%22display_model_id%22%3A218877173676%2C%22model_selection_logic%22%3A3%7D",
    tokopediaUrl: "https://www.tokopedia.com/jker-kerobokan/perhiasan-silver-handmade-premium-1737567473267803341?extParam=src%3Dshop%26whid%3D7686508921809176321&aff_unique_id=&channel=others&chain_key=",
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Silver / Perak Handmade",
    madeBy: "BIMKER Lapas Kelas IIA Kerobokan",
    specifications: [
      { label: "Produk", value: "Perhiasan Silver Handmade" },
      { label: "Kategori Toko", value: "Aksesoris Fashion > Kalung / Liontin / Gelang" },
      { label: "Asal Produk", value: "BIMKER Lapas Kelas IIA Kerobokan Bali" },
      { label: "Status Toko", value: "Tersedia Resmi di Shopee & Tokopedia J'KER" }
    ]
  },
  {
    id: "prod-dupa-01",
    name: "Isi 100 Stik Dupa  Wangi Harum Natural Model Lidi Panjang 27cm",
    category: "dupa",
    categoryLabel: "Perlengkapan Keagamaan",
    price: 10000,
    formattedPrice: "Rp 10.000",
    shortDescription: "Dupa wangi harum natural model lidi panjang 27cm kemasan isi 100 stik untuk sembahyang dan aromaterapi harian.",
    fullDescription: "Isi 100 stik dupa wangi harum natural model lidi panjang 27cm hasil produksi warga binaan Lapas Kelas IIA Kerobokan. Menghadirkan aroma wangi semerbak yang segar menenangkan, abu dingin aman di tangan, sangat cocok untuk sarana persembahyangan harian maupun pengharum ruangan.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mt662wyk8miq70",
    galleryImages: [
      "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mt662wyk8miq70",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztg-mt8wc2g12uix6e"
    ],
    shopeeUrl: "https://shopee.co.id/Isi-100-Stik-Dupa-Wangi-Harum-Natural-Model-Lidi-Panjang-27cm-i.1325294054.51717893560?extraParams=%7B%22display_model_id%22%3A316515434418%2C%22model_selection_logic%22%3A3%7D",
    tokopediaUrl: "https://www.tokopedia.com/jker-kerobokan/isi-100-stik-dupa-wangi-harum-natural-model-lidi-panjang-27cm-1737566602225091789?extParam=whid%3D7686508921809176321%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Serbuk Dupa Herbal & Aroma Wangi Alami",
    madeBy: "BIMKER Lapas Kelas IIA Kerobokan",
    specifications: [
      { label: "Isi", value: "100 Stik Lidi" },
      { label: "Panjang", value: "27 cm" },
      { label: "Kategori Toko", value: "Perlengkapan Rumah > Perlengkapan Keagamaan" },
      { label: "Karakteristik", value: "Wangi Harum Natural, Abu Dingin, Asap Halus" }
    ]
  },
  {
    id: "prod-miniatur-kapal-01",
    name: "Miniatur Kapal Laut",
    category: "daur_ulang",
    categoryLabel: "Hobi & Koleksi",
    price: 400000,
    formattedPrice: "Rp 400.000",
    shortDescription: "Miniatur kapal laut handmade kreatif hasil olahan daur ulang kemasan rokok dengan ketelitian anyaman tingkat tinggi.",
    fullDescription: "Karya kerajinan miniatur kapal laut unik yang dibuat secara handmade oleh warga binaan Lapas Kelas IIA Kerobokan dengan memanfaatkan kemasan rokok yang disortir bersih. Melalui teknik lipat dan anyaman teliti, tercipta miniatur kapal laut berkarakter estetis yang kokoh dan bernilai seni tinggi untuk hiasan meja maupun koleksi.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81zti-mt7prpayry81bf",
    galleryImages: [
      "https://down-id.img.susercontent.com/file/id-11134207-81zti-mt7prpayry81bf",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztl-mt7v90u9np51d0",
      "https://down-id.img.susercontent.com/file/id-11134207-81zte-mt7v90u9p3ph69"
    ],
    shopeeUrl: "https://shopee.co.id/Miniatur-Kapal-Laut-i.1325294054.41534488412?extraParams=%7B%22display_model_id%22%3A336518793160%2C%22model_selection_logic%22%3A3%7D",
    tokopediaUrl: "https://www.tokopedia.com/jker-kerobokan/miniatur-kapal-laut-handmade-1737566884761732301?extParam=src%3Dshop%26whid%3D7686508921809176321&aff_unique_id=&channel=others&chain_key=",
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Daur Ulang Kemasan Bungkus Rokok Pilihan",
    madeBy: "BIMKER Lapas Kelas IIA Kerobokan",
    specifications: [
      { label: "Produk", value: "Miniatur Kapal Laut Handmade" },
      { label: "Kategori Toko", value: "Hobi & Koleksi > Koleksi > Vehicle Model & Diecast" },
      { label: "Bahan", value: "Upcycled Bungkus Rokok Pilihan Bersih & Rapi" },
      { label: "Pemanfaatan", value: "Pajangan Meja, Hiasan Interior, Koleksi Unik" }
    ]
  },
  {
    id: "prod-keben-sokasi-01",
    name: "Keben (Sokasi)",
    category: "daur_ulang",
    categoryLabel: "Souvenir & Hadiah",
    price: 300000,
    formattedPrice: "Rp 300.000",
    shortDescription: "Keben (sokasi) wadah sarana banten dan sesajen tradisional Bali handmade dengan anyaman rapi dan kuat.",
    fullDescription: "Keben atau Sokasi tradisional Bali buatan tangan warga binaan Bimbingan Kerja Lapas Kerobokan. Berfungsi sebagai wadah banten, sesajen persembahyangan, maupun tempat hantaran adat Bali dengan anyaman kokoh, rapi, dan sentuhan motif khas Bali.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81ztq-mt7lsx0zusqq61",
    galleryImages: [
      "https://down-id.img.susercontent.com/file/id-11134207-81ztq-mt7lsx0zusqq61",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztq-mt7lsx0zw7b66b",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztl-mt8yjtlu30nc9c",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztd-mt8yjtlu5ts881"
    ],
    shopeeUrl: "https://shopee.co.id/Keben-(Sokasi)-i.1325294054.53917950563?extraParams=%7B%22display_model_id%22%3A381518647593%2C%22model_selection_logic%22%3A3%7D",
    tokopediaUrl: "https://www.tokopedia.com/jker-kerobokan/keben-sokasi-khas-bali-handmade-1737567897335334093?extParam=src%3Dshop%26whid%3D7686508921809176321&aff_unique_id=&channel=others&chain_key=",
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Bahan Anyaman Pilihan Berkualitas",
    madeBy: "BIMKER Lapas Kelas IIA Kerobokan",
    specifications: [
      { label: "Nama Produk", value: "Keben (Sokasi)" },
      { label: "Kategori Toko", value: "Souvenir & Perlengkapan Pesta > Souvenir & Hadiah" },
      { label: "Fungsi", value: "Wadah Canang Banten, Hantaran, Souvenir Adat" },
      { label: "Pembuatan", value: "Handmade Anyaman Tradisional Bali" }
    ]
  },
  {
    id: "prod-bokoran-01",
    name: "Bokoran Banten Handmade",
    category: "daur_ulang",
    categoryLabel: "Perlengkapan Keagamaan",
    price: 150000,
    formattedPrice: "Rp 150.000",
    shortDescription: "Bokoran banten wadah sesajen persembahyangan adat Bali buatan tangan dengan ukiran rapi dan finishing menawan.",
    fullDescription: "Bokoran banten handmade sarana upakara dan persembahyangan khas Bali karya warga binaan Lapas Kelas IIA Kerobokan. Dibuat dengan konstruksi kokoh, lekukan ornamen rapi, dan sentuhan warna berkilau yang pas untuk upacara keagamaan maupun dekorasi etnik.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81zti-mt8wc2g0x895a3",
    galleryImages: [
      "https://down-id.img.susercontent.com/file/id-11134207-81zti-mt8wc2g0x895a3",
      "https://down-id.img.susercontent.com/file/id-11134207-81zth-mt8wc2g101e192"
    ],
    shopeeUrl: "https://shopee.co.id/Bokoran-Banten-Handmade-i.1325294054.46968004439?extraParams=%7B%22display_model_id%22%3A441521839738%2C%22model_selection_logic%22%3A3%7D",
    tokopediaUrl: "https://www.tokopedia.com/jker-kerobokan/bokoran-banten-bali-handmade-1737566799261959373?extParam=src%3Dshop%26whid%3D7686508921809176321&aff_unique_id=&channel=others&chain_key=",
    isFeatured: true,
    isBestSeller: false,
    inStock: true,
    material: "Material Pilihan Berkualitas & Cat Ornamen Etnik",
    madeBy: "BIMKER Lapas Kelas IIA Kerobokan",
    specifications: [
      { label: "Nama Produk", value: "Bokoran Banten Handmade" },
      { label: "Kategori Toko", value: "Perlengkapan Rumah > Perlengkapan Keagamaan" },
      { label: "Peruntukan", value: "Wadah Upakara Banten Sesajen Bali" },
      { label: "Karakter", value: "Kokoh, Awet, Ringan & Berornamen Rapi" }
    ]
  },
  {
    id: "prod-baju-custom-01",
    name: "Baju Custom",
    category: "garmen",
    categoryLabel: "Pakaian Pria",
    price: 120000,
    formattedPrice: "Rp 120.000",
    shortDescription: "Baju kaos custom konveksi dan sablon berkualitas buatan warga binaan unit bimbingan kerja Lapas Kerobokan.",
    fullDescription: "Produk baju custom kaos hasil pengerjaan konveksi dan sablon warga binaan Lapas Kelas IIA Kerobokan. Menggunakan bahan kain yang nyaman digunakan sehari-hari, jahitan rapi kuat, dan sablon warna solid untuk kebutuhan seragam, kaos komunitas, event, atau pesanan khusus.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81ztn-mt7u0jhky8ll06",
    galleryImages: [
      "https://down-id.img.susercontent.com/file/id-11134207-81ztn-mt7u0jhky8ll06",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztk-mt7u0jhkwu15e6",
      "https://down-id.img.susercontent.com/file/id-11134207-81zti-mt7u0jhkzn61ba"
    ],
    shopeeUrl: "https://shopee.co.id/Baju-Custom-i.1325294054.50117952561?extraParams=%7B%22display_model_id%22%3A341519307912%2C%22model_selection_logic%22%3A3%7D",
    tokopediaUrl: "https://www.tokopedia.com/jker-kerobokan/baju-kaos-sablon-bebas-custom-1737567578671580365-1737567752882324685?extParam=src%3Dshop%26whid%3D7686508921809176321&aff_unique_id=&channel=others&chain_key=",
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Kain Kaos Katun Pilihan & Sablon Berkualitas",
    madeBy: "BIMKER Lapas Kelas IIA Kerobokan",
    specifications: [
      { label: "Nama Produk", value: "Baju Custom" },
      { label: "Kategori Toko", value: "Pakaian Pria > Atasan > Kaos" },
      { label: "Layanan", value: "Sablon Desain Custom & Konveksi Rapi" },
      { label: "Kenyamanan", value: "Bahan Adem, Menyerap Keringat, Jahitan Kuat" }
    ]
  },
  {
    id: "prod-bakery-02",
    name: "BAKERY J'KER – PIE SUSU & DONAT HANDMADE",
    category: "bakery",
    categoryLabel: "Makanan & Minuman",
    price: 30000,
    formattedPrice: "Rp 30.000",
    shortDescription: "Pie susu khas Bali yang renyah manis dan aneka donat lezat buatan harian Dapur Bakery J'KER Lapas Kerobokan.",
    fullDescription: "Koleksi olahan tata boga Bakery J'KER Lapas Kelas IIA Kerobokan yang memproduksi pie susu lezat khas Bali dan donat handmade empuk bergizi. Dibuat dari bahan-bahan bermutu dengan standar kebersihan higienis terjamin, cocok untuk camilan keluarga dan oleh-oleh khas.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81zto-mteqviayll3648",
    galleryImages: [
      "https://down-id.img.susercontent.com/file/id-11134207-81zto-mteqviayll3648",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mteqviayek8y87"
    ],
    shopeeUrl: "https://shopee.co.id/BAKERY-J'KER-%E2%80%93-PIE-SUSU-DONAT-HANDMADE-i.1325294054.51618247185?extraParams=%7B%22display_model_id%22%3A277973805331%2C%22model_selection_logic%22%3A3%7D",
    tokopediaUrl: "https://www.tokopedia.com/jker-kerobokan/bakery-j-ker-pie-susu-donat-handmade-1737639217290839245?extParam=src%3Dshop%26whid%3D7686508921809176321&aff_unique_id=&channel=others&chain_key=",
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Bahan Olahan Kue & Roti Berkualitas Terpilih",
    madeBy: "Dapur Bakery J'KER Lapas Kerobokan",
    specifications: [
      { label: "Nama Produk", value: "BAKERY J'KER – PIE SUSU & DONAT HANDMADE" },
      { label: "Kategori Toko", value: "Makanan & Minuman > Roti & Kue > Roti" },
      { label: "Varian", value: "Pie Susu Renyah Legit & Donat Lembut Handmade" },
      { label: "Kondisi", value: "Fresh Made (Dibuat Segar & Higienis)" }
    ]
  },
  {
    id: "prod-asbak-01",
    name: "Asbak Rokok",
    category: "daur_ulang",
    categoryLabel: "Dekorasi Rumah",
    price: 50000,
    formattedPrice: "Rp 50.000",
    shortDescription: "Asbak rokok handmade ramah lingkungan kreasi kriya daur ulang limbah dengan lapisan tahan panas dan kokoh.",
    fullDescription: "Asbak rokok handmade hasil kreasi keterampilan warga binaan Lapas Kelas IIA Kerobokan dengan memanfaatkan bahan daur ulang ramah lingkungan. Dilengkapi lapisan pelindung yang tahan bara, permukaan halus, dan mudah dibersihkan.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81zti-mt7rvoqshjbcca",
    galleryImages: [
      "https://down-id.img.susercontent.com/file/id-11134207-81zti-mt7rvoqshjbcca",
      "https://down-id.img.susercontent.com/file/id-11134207-81zte-mt7rvoqskcg8ca"
    ],
    shopeeUrl: "https://shopee.co.id/Asbak-Rokok-i.1325294054.54617955664?extraParams=%7B%22display_model_id%22%3A416518962713%2C%22model_selection_logic%22%3A3%7D",
    tokopediaUrl: "https://www.tokopedia.com/jker-kerobokan/asbak-unik-minimalis-handmade-1737567752866006221?extParam=whid%3D7686508921809176321%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
    isFeatured: true,
    isBestSeller: false,
    inStock: true,
    material: "Material Daur Ulang Ramah Lingkungan",
    madeBy: "BIMKER Lapas Kelas IIA Kerobokan",
    specifications: [
      { label: "Nama Produk", value: "Asbak Rokok" },
      { label: "Kategori Toko", value: "Perlengkapan Rumah > Dekorasi > Vas & Bejana" },
      { label: "Karakteristik", value: "Kuat, Tahan Panas, Finishing Halus" },
      { label: "Perawatan", value: "Mudah dibersihkan dan awet digunakan" }
    ]
  },
  {
    id: "prod-kotak-tisu-01",
    name: "Kotak Tisu Kertas Koran - Handmade  dengan Tutup, Kotak Tisu Meja",
    category: "daur_ulang",
    categoryLabel: "Organizer Rumah",
    price: 120000,
    formattedPrice: "Rp 120.000",
    shortDescription: "Kotak tisu meja estetik bermaterial lintingan kertas koran daur ulang handmade lengkap dengan tutup atas rapi.",
    fullDescription: "Kotak tisu kertas koran handmade dengan tutup untuk kotak tisu meja yang unik dan estetik buatan warga binaan Lapas Kelas IIA Kerobokan. Dibuat dari jalinan lintingan kertas koran bekas yang disusun rapat kokoh menyerupai anyaman rotan dengan lapisan vernis pelindung tahan cipratan air.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81ztn-mt7kmy0i9ybref",
    galleryImages: [
      "https://down-id.img.susercontent.com/file/id-11134207-81ztn-mt7kmy0i9ybref",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztd-mt8wc2g0rlzd22",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztk-mt8wc2g0uf49fb"
    ],
    shopeeUrl: "https://shopee.co.id/Kotak-Tisu-Kertas-Koran-Handmade-dengan-Tutup-Kotak-Tisu-Meja-i.1325294054.53967929473?extraParams=%7B%22display_model_id%22%3A441518182640%2C%22model_selection_logic%22%3A3%7D",
    tokopediaUrl: "https://www.tokopedia.com/jker-kerobokan/kotak-tisu-kertas-koran-handmade-dengan-tutup-kotak-tisu-meja-1737566823800669389?extParam=src%3Dshop%26whid%3D7686508921809176321&aff_unique_id=&channel=others&chain_key=",
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    material: "Daur Ulang Kertas Koran Pilihan & Vernis Clear",
    madeBy: "BIMKER Lapas Kelas IIA Kerobokan",
    specifications: [
      { label: "Nama Produk", value: "Kotak Tisu Kertas Koran - Handmade dengan Tutup, Kotak Tisu Meja" },
      { label: "Kategori Toko", value: "Perlengkapan Rumah > Organizer Rumah > Tempat Tisu" },
      { label: "Fitur", value: "Lengkap dengan Tutup Atas Rapi" },
      { label: "Finishing", value: "Lapisan Vernis Pelindung Anti Lembap" }
    ]
  },
  {
    id: "prod-vas-bunga-01",
    name: "Vas Bunga Kulit Rokok Ramah Lingkungan Handmade",
    category: "daur_ulang",
    categoryLabel: "Dekorasi Rumah",
    price: 250000,
    formattedPrice: "Rp 250.000",
    shortDescription: "Vas bunga hias meja handmade ramah lingkungan hasil anyaman daur ulang kulit bungkus rokok bertekstur foil kilap.",
    fullDescription: "Vas bunga kulit rokok ramah lingkungan handmade buatan tangan warga binaan Lapas Kelas IIA Kerobokan. Memanfaatkan limbah bungkus rokok yang dianyam presisi dengan kilauan foil metalik yang khas dan dilapisi vernis pelindung, sangat cantik untuk hiasan bunga meja ruang tamu, kafe, atau meja kerja.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81ztk-mt7lsx0zkyrm27",
    galleryImages: [
      "https://down-id.img.susercontent.com/file/id-11134207-81ztk-mt7lsx0zkyrm27",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztq-mt8yjtlr01sa78"
    ],
    shopeeUrl: "https://shopee.co.id/Vas-Bunga-Kulit-Rokok-Ramah-Lingkungan-Handmade-i.1325294054.54617940494?extraParams=%7B%22display_model_id%22%3A287963886532%2C%22model_selection_logic%22%3A3%7D",
    tokopediaUrl: "https://www.tokopedia.com/jker-kerobokan/vas-bunga-kulit-rokok-ramah-lingkungan-handmade-1737566183642399949?extParam=whid%3D7686508921809176321%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
    isFeatured: true,
    isBestSeller: false,
    inStock: true,
    material: "Daur Ulang Kulit / Bungkus Rokok Pilihan & Vernis",
    madeBy: "BIMKER Lapas Kelas IIA Kerobokan",
    specifications: [
      { label: "Nama Produk", value: "Vas Bunga Kulit Rokok Ramah Lingkungan Handmade" },
      { label: "Kategori Toko", value: "Perlengkapan Rumah > Dekorasi > Vas & Bejana" },
      { label: "Kelebihan", value: "Unik, Ramah Lingkungan, Aksen Kilap Metalik" },
      { label: "Kegunaan", value: "Pajangan Meja, Vas Bunga Kering & Ruang Santai" }
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
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044788/copy_of_jua8h5hppyqakshi5rnr.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztn-mt7kmy0i9ybref"
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
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958409/krtovwh0faamuzcefiaw.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-81zti-mt7prpayry81bf",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztk-mt7lsx0zkyrm27",
      "https://down-id.img.susercontent.com/file/id-11134207-81zti-mt7rvoqshjbcca"
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
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790044577/wbemrlk6alvqfaqz16aj.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-81zto-mteqviayll3648"
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
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790128217/pkd4gihrpeadub9xoeiq.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958410/lnxmwwpxt1sffmxrqemq.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztc-mt8yjtlu8mx485",
      "https://down-id.img.susercontent.com/file/id-11134207-81zti-mt7prpaymby9b0"
    ],
    fullDesc: "Bekerja sama resmi dengan mitra industri perhiasan terkemuka seperti Yin Jewelry serta maestro pengrajin perak Celuk Gianyar, program ini membekali warga binaan dengan keahlian memotong, mematri, mengukir jawan rumit, hingga tahap pemolesan perak 925 standar ekspor. Hasil karya telah menembus butik perhiasan di Sanur dan Seminyak, cenderamata turis mancanegara, serta marketplace resmi.",
    participantsCount: 35,
    duration: "6 Bulan Pelatihan Intensif",
    durationEn: "6 Months Intensive Workshop",
    certification: "Sertifikat Uji Kompetensi Kriya Logam BNSP",
    outputProducts: ["Gelang Jawan Bali Perak 925", "Cincin Perak Tridatu", "Bros Kebaya Filigree", "Liontin Etnik Kamboja Bali"],
    highlights: [
      "Perjanjian Kerjasama (PKS) Resmi dengan Yin Jewelry untuk transfer keahlian & kurasi ekspor",
      "Instruktur berpengalaman dari sentra perak legendaris Celuk Sukawati",
      "Peralatan tempa dan pematrian presisi dengan standar keselamatan kerja tinggi",
      "Tersedia di toko Shopee resmi dan pesanan butik perhiasan Bali"
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
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958557/IMG_3895.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mt662wyk8miq70",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztq-mt7lsx0zusqq61"
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
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790046463/yddlpoqbzdmgm9lbesdz.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-81ztn-mt7u0jhky8ll06"
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
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1789958428/vch8076fjlf9fvclbnyh.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-81zti-mt8wc2g0x895a3"
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
       "https://res.cloudinary.com/ig4uk50k/image/upload/v1789972550/zndy4t5h557j42vdenzl.webp",
       "https://res.cloudinary.com/ig4uk50k/image/upload/v1790128206/bhods4st9kp0myxyqriq.webp"
    ],
    fullDesc: "Unit Bimbingan Kerja Laundry Lapas Kelas IIA Kerobokan membekali warga binaan dengan keterampilan operasional tata graha dan binatu profesional, kini diperkuat melalui Perjanjian Kerjasama (PKS) resmi bersama Go Laundry. Peserta dilatih mengoperasikan mesin cuci industri, teknik pemilahan serat kain, formulasi deterjen dan pelembut higienis, pengeringan steril, hingga teknik setrika uap presisi agar pakaian rapi, wangi, dan bebas bakteri. Program ini melayani pencucian seragam dinas, linen operasional, serta pesanan binatu kiloan dan satuan dari mitra sekitar.",
    participantsCount: 25,
    duration: "3 Bulan Pelatihan Binatu & Tata Graha",
    durationEn: "3 Months Laundry & Housekeeping Course",
    certification: "Sertifikat Kejuruan Binatu & Tata Graha (Laundry & Housekeeping)",
    outputProducts: ["Layanan Cuci & Setrika Uap Kiloan", "Pencucian Seragam Dinas & Jas Satuan", "Layanan Cuci Linen Hotel, Villa & Resto", "Pencucian Bed Cover & Selimut Tebal"],
    highlights: [
      "Perjanjian Kerjasama (PKS) Resmi dengan Go Laundry untuk standarisasi mutu & alur operasional",
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
    id: "news-pks-yin-golaundry",
    title: "Perkuat Kemandirian Narapidana, Lapas Kerobokan Resmi Gandeng Yin Jewelry dan Go Laundry Melalui Perjanjian Kerjasama (PKS)",
    titleEn: "Empowering Inmates, Kerobokan Prison Officially Inks Strategic MoU with Yin Jewelry & Go Laundry",
    date: "21 Maret 2026",
    dateEn: "March 21, 2026",
    category: "Kemitraan Industri",
    categoryEn: "Industry Partnership",
    author: "Humas Lapas Kelas IIA Kerobokan",
    authorEn: "Kerobokan Prison Public Relations",
    readTime: "4 menit baca",
    readTimeEn: "4 min read",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1790128217/pkd4gihrpeadub9xoeiq.webp",
    galleryImages: [
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790128217/pkd4gihrpeadub9xoeiq.webp",
      "https://res.cloudinary.com/ig4uk50k/image/upload/v1790128206/bhods4st9kp0myxyqriq.webp"
    ],
    excerpt: "BIMKER LKROBO resmi menandatangani naskah Perjanjian Kerja Sama (PKS) strategis bersama Yin Jewelry untuk pembinaan kriya perak ekspor serta Go Laundry guna peningkatan standar mutu binatu profesional.",
    excerptEn: "Kerobokan Prison Vocational Hub officially signs strategic MoUs with Yin Jewelry for export silvercraft training and Go Laundry for professional laundry standardization.",
    content: [
      "BADUNG — Lembaga Pemasyarakatan (Lapas) Kelas IIA Kerobokan mempertegas komitmen pembinaan kemandirian warga binaan dengan menandatangani Perjanjian Kerja Sama (PKS) kemitraan strategis bersama dua entitas industri ternama di Bali: Yin Jewelry dan Go Laundry.",
      "Penandatanganan naskah kerja sama ini berlangsung khidmat di aula Lapas Kerobokan yang dihadiri oleh jajaran pimpinan Seksi Kegiatan Kerja (BIMKER LKROBO), pejabat struktural, serta perwakilan direksi dan manajemen dari Yin Jewelry maupun Go Laundry.",
      "Melalui kolaborasi bersama Yin Jewelry, warga binaan unit kriya perak memperoleh pembinaan kurikulum teknik filigree kontemporer, kurasi kontrol kualitas perhiasan 925 berstandar butik ekspor, serta integrasi pemesanan langsung.",
      "Sementara itu, kerja sama bersama Go Laundry difokuskan pada peningkatan kapasitas operasional unit binatu Lapas Kerobokan, mencakup standarisasi metode pencucian higienis berbasis deterjen ramah lingkungan, teknik perawatan linen hotel dan villa berbintang, serta manajemen alur kerja binatu profesional.",
      "\"Sinergi dengan Yin Jewelry dan Go Laundry ini membuktikan bahwa pembinaan di Lapas Kerobokan terhubung langsung dengan standar industri riil. Kami ingin warga binaan memiliki keahlian yang relevan dan terserap pasar saat kembali ke masyarakat,\" tegas pihak Bimbingan Kerja Lapas Kerobokan."
    ],
    contentEn: [
      "BADUNG — Kerobokan Class IIA Prison reinforces its commitment to inmate self-reliance by signing strategic Cooperation Agreements (MoU) with two prominent Bali enterprises: Yin Jewelry and Go Laundry.",
      "The official signing ceremony took place at the Kerobokan Prison Hall, attended by leadership of the Vocational Activity Section (BIMKER LKROBO), structural officials, and executive representatives from Yin Jewelry and Go Laundry.",
      "Through the partnership with Yin Jewelry, inmate silversmiths receive hands-on training in contemporary filigree techniques, boutique-grade 925 jewelry quality control, and direct international order integration.",
      "Meanwhile, the collaboration with Go Laundry upgrades the prison's laundry unit operations, implementing eco-friendly detergent hygiene standards, five-star hotel linen care methods, and commercial laundry workflow management.",
      "\"This synergy with Yin Jewelry and Go Laundry proves that our vocational rehabilitation is directly aligned with genuine industry standards. We ensure inmates acquire relevant skills that seamlessly reintegrate into the workforce,\" stated the Prison Vocational Management."
    ]
  },
  {
    id: "news-premi-01",
    title: "Transparansi & Akuntabilitas Pembinaan: Lapas Kerobokan Salurkan Hak Premi Kerja Hasil Penjualan Produk kepada Warga Binaan",
    titleEn: "Transparency & Accountability: Kerobokan Prison Distributes Inmate Wage Premiums from Commercial Sales",
    date: "18 Maret 2026",
    dateEn: "March 18, 2026",
    category: "Pemberdayaan & Premi",
    categoryEn: "Empowerment & Wages",
    author: "Humas & Seksi Giatja LKROBO",
    authorEn: "PR & Vocational Section LKROBO",
    readTime: "4 menit baca",
    readTimeEn: "4 min read",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968127/l5zuxuucvytsxjfbpsuk.webp",
    excerpt: "Sebagai pemenuhan hak pekerja narapidana dan wujud transparansi pengelolaan hasil karya, Lapas Kerobokan secara berkala menyalurkan upah premi yang langsung dibukukan ke tabungan mandiri warga binaan.",
    excerptEn: "In accordance with inmate rights and financial transparency, Kerobokan Prison regularly disburses labor wage premiums credited directly into inmates' personal savings passbooks.",
    content: [
      "KEROBOKAN — Lapas Kelas IIA Kerobokan membuktikan komitmen transparansi dan akuntabilitas pembinaan dengan menggelar seremoni berkala penyerahan upah premi hasil kerja kepada para warga binaan yang aktif berproduksi di berbagai unit bimbingan kerja.",
      "Premi diserahkan langsung oleh jajaran pejabat struktural Seksi Kegiatan Kerja kepada perwakilan narapidana pengrajin perak, juru masak Dapur Bakery Antaboga, penjahit garmen tenun Endek, seniman lukis, serta tim budidaya perikanan dan perkebunan.",
      "Nominal premi yang diterima merupakan persentase resmi dari laba bersih penjualan produk di toko resmi Shopee BIMKER LKROBO serta pesanan instansi dan mitra industri sepanjang periode berjalan.",
      "Hasil premi ini langsung dibukukan ke dalam rekening tabungan mandiri masing-masing warga binaan. Mereka dapat mengirimkannya secara berkala untuk membantu nafkah keluarga di rumah maupun disimpan utuh sebagai modal memulai wirausaha saat masa pidana usai.",
      "\"Melalui pembagian premi yang transparan ini, warga binaan merasakan langsung bahwa keringat dan kerja keras mereka dihargai secara bermartabat. Ini memotivasi mereka untuk terus belajar dan membuktikan diri bahwa mereka mampu berdikari secara halal,\" ungkap Kepala Seksi Kegiatan Kerja Lapas Kerobokan."
    ],
    contentEn: [
      "KEROBOKAN — Kerobokan Class IIA Prison demonstrates its transparency commitment by hosting its regular labor wage premium distribution ceremony for inmates actively producing across vocational units.",
      "Premiums were presented by Prison Vocational Officials to inmate representatives, including silversmiths, Antaboga bakery chefs, Endek garment tailors, visual artists, and agro-aquaculture teams.",
      "The wage premium amount represents the official percentage of net revenue generated from Shopee e-commerce sales, government institutional orders, and corporate partnerships.",
      "All premiums are credited directly into individualized passbook bank accounts. Inmates can send remittances to support their families or keep them untouched as reintegration venture capital post-release.",
      "\"Through this transparent wage distribution, inmates tangibly feel that their hard work and craftsmanship are dignified. It empowers them with legitimate self-reliance,\" highlighted the Head of Prison Vocational Activities."
    ]
  },
  {
    id: "news-apel-01",
    title: "Membangun Disiplin & Keselamatan Kerja: Rutinitas Apel Pagi Warga Binaan Sebelum Memulai Produksi di Balik Terali",
    titleEn: "Instilling Discipline & Workplace Safety: Daily Morning Assembly for Inmates Before Workshop Production",
    date: "16 Maret 2026",
    dateEn: "March 16, 2026",
    category: "Pelatihan & Sertifikasi",
    categoryEn: "Training & Certification",
    author: "Seksi Kegiatan Kerja LKROBO",
    authorEn: "LKROBO Vocational Section",
    readTime: "3 menit baca",
    readTimeEn: "3 min read",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1789968128/slefyi8iuwrmleiwhg37.webp",
    excerpt: "Sebelum melangkah ke bengkel kerja kriya, bakery, maupun kebun, warga binaan Lapas Kerobokan wajib mengikuti apel pagi guna pembekalan kedisiplinan dan SOP keselamatan kerja.",
    excerptEn: "Before heading to craft workshops, the bakery, or agricultural greenhouses, inmates attend morning assembly for discipline briefing and occupational health and safety (OHS) SOPs.",
    content: [
      "KEROBOKAN — Suasana tertib dan penuh konsentrasi terlihat di halaman area Bimbingan Kerja Lapas Kelas IIA Kerobokan setiap pagi. Puluhan warga binaan pekerja berdiri berbaris rapi mengikuti apel pagi sebelum didistribusikan ke unit kerja masing-masing.",
      "Apel pagi ini dipimpin langsung oleh staf Seksi Kegiatan Kerja (Giatja) dan para instruktur teknis. Tujuannya adalah memastikan kesiapan fisik dan mental para peserta, memeriksa kelengkapan alat pelindung diri (APD), serta memberikan pengarahan terkait target produksi harian.",
      "Penerapan Keselamatan dan Kesehatan Kerja (K3) menjadi prioritas mutlak, terutama bagi warga binaan yang menangani mesin konveksi berkecepatan tinggi, oven bakery bersuhu tinggi, maupun peleburan logam mulia di bengkel perak.",
      "\"Melalui apel pagi ini, kami tidak hanya melatih keterampilan tangan, tetapi juga menanamkan etos kerja profesional seperti disiplin waktu, kerapian, tanggung jawab, dan rasa saling menghargai. Nilai-nilai inilah yang menjadi bekal paling berharga saat kembali ke masyarakat nanti,\" jelas perwira pembina kegiatan kerja."
    ],
    contentEn: [
      "KEROBOKAN — An atmosphere of discipline and focus fills the Kerobokan Prison vocational courtyard every morning as dozens of inmate artisans line up for the daily briefing before reporting to their workshops.",
      "The morning briefing is led by Vocational Activity officers and certified instructors. It inspects personal protective equipment (PPE), reinforces daily production quotas, and reviews safety protocols.",
      "Occupational Health and Safety (OHS) is strictly observed, especially for inmates operating high-speed garment machines, commercial bakery ovens, and metal smelting in the silver workshops.",
      "\"Through this morning routine, we instill professional work ethics: punctuality, tidiness, accountability, and mutual respect. These values become their most valuable asset when reintegrating into society,\" explained the vocational supervisor."
    ]
  },
  {
    id: "news-03",
    title: "Panen Raya Selada Hidroponik: Pasok Kebutuhan Sayuran Segar ke Kafe Sehat Kawasan Seminyak",
    titleEn: "Hydroponic Lettuce Harvest: Supplying Fresh Salad Greens to Seminyak Healthy Cafes",
    date: "12 Februari 2026",
    dateEn: "February 12, 2026",
    category: "Agribisnis & Panen",
    categoryEn: "Agribusiness & Harvest",
    author: "Unit Pertanian LKROBO",
    authorEn: "LKROBO Agro Unit",
    readTime: "3 menit baca",
    readTimeEn: "3 min read",
    image: "https://res.cloudinary.com/ig4uk50k/image/upload/v1790042640/knj7rfxgwpnbkctsumqy.webp",
    excerpt: "Kebun greenhouse hidroponik BIMKER LKROBO membukukan panen 350 kg selada segar kualitas premium yang langsung diserap mitra usaha kuliner Bali.",
    excerptEn: "Kerobokan Prison's greenhouse hydroponic farm yields 350 kg of premium fresh lettuce, supplied directly to Bali's culinary restaurant partners.",
    content: [
      "KEROBOKAN — Senyum semringah terpancar dari wajah para warga binaan yang tergabung dalam tim hidroponik Lapas Kerobokan saat memanen ratusan kilogram selada butterhead dan romaine segar.",
      "Dengan perawatan teliti pada sirkulasi air nutrisi dan pencahayaan alami Bali, sayuran yang dihasilkan memiliki tekstur tebal, renyah, dan manis tanpa rasa getir pahit.",
      "Tiga pengelola restoran dan kafe salad sehat di area Kuta Utara dan Seminyak telah menandatangani kesepakatan pasokan rutin mingguan dengan pihak bimbingan kerja.",
      "Keberhasilan agribisnis ini juga memberikan bagian upah premi (remunerasi) langsung kepada warga binaan yang disimpan dalam rekening tabungan mereka untuk keluarga di rumah."
    ],
    contentEn: [
      "KEROBOKAN — Broad smiles beamed across the faces of inmate agricultural workers as they harvested hundreds of kilograms of fresh butterhead and romaine lettuce inside the prison's greenhouse.",
      "With meticulous control over nutrient water circulation and Bali's tropical sunlight, the harvested greens boast crisp texture and naturally sweet flavor without bitterness.",
      "Three health-food restaurants and salad bars in North Kuta and Seminyak have signed weekly recurring supply contracts with the prison vocational team.",
      "This agribusiness success directly rewards inmate participants with wage premiums deposited into their personal savings passbooks for their families."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-01",
    name: "I Wayan S.",
    role: "Warga Binaan — Pengrajin Perak 925",
    roleEn: "Inmate Artisan — 925 Silversmith",
    program: "Kriya Perak Celuk",
    programEn: "Celuk Silvercraft Program",
    quote: "Sebelumnya saya tidak memiliki keterampilan apa pun dan sempat putus asa. Di BIMKER LKROBO, saya diajari cara mematri perak dari nol hingga tangan saya bisa membuat karya perhiasan yang laku terjual di Shopee. Pendapatan premi ini rutin saya kirimkan untuk biaya sekolah anak saya di desa.",
    quoteEn: "I had no vocational skills before and felt hopeless. At BIMKER LKROBO, I was taught silver soldering from scratch until I could create jewelry that sells on our official Shopee store. The wages I earn are regularly remitted to pay for my child's schooling back in my village.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    year: "Pelatihan Angkatan 2024",
    yearEn: "Class of 2024 Trainee"
  },
  {
    id: "testi-02",
    name: "Made Dananjaya",
    role: "Pemilik Kafe & Restoran di Canggu, Bali",
    roleEn: "Cafe & Restaurant Owner in Canggu, Bali",
    program: "Mitra Bisnis Suplai Sayur & Bakery",
    programEn: "Bakery & Agro Supply Partner",
    quote: "Awalnya saya ragu, namun saat melihat langsung standar kebersihan dapur Antaboga dan greenhouse hidroponik Lapas Kerobokan, kualitasnya bahkan melampaui beberapa supplier komersial. Selada dan croissant mereka sangat fresh dan disukai tamu-tamu kami.",
    quoteEn: "Initially I had doubts, but after personally touring the Antaboga bakery kitchen and hydroponic greenhouses, their cleanliness and quality exceeded commercial suppliers. Their fresh lettuce and croissants are beloved by our cafe guests.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    year: "Mitra Kerja Sama sejak 2023",
    yearEn: "Partner since 2023"
  },
  {
    id: "testi-03",
    name: "Agus Pratama",
    role: "Alumni Warga Binaan — Pemilik Barbershop Mandiri",
    roleEn: "Alumni Inmate — Independent Barbershop Owner",
    program: "Pangkas Rambut Modern",
    programEn: "Modern Barbershop Course",
    quote: "Berkat sertifikat kompetensi barbershop dari Lapas Kerobokan dan modal tabungan hasil premi kerja di dalam, setelah bebas saya bisa langsung membuka usaha potong rambut di Denpasar. Sekarang saya mandiri dan dihormati oleh keluarga serta tetangga.",
    quoteEn: "Thanks to the official barbershop competence certificate from Kerobokan Prison and my savings from in-prison wages, I opened my own barbershop in Denpasar upon release. Now I am fully self-reliant and respected by my family and community.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
    year: "Bebas Murni 2025",
    yearEn: "Full Release 2025"
  },
  {
    id: "testi-04",
    name: "Ni Luh Putu Anggreni",
    role: "Pelanggan Setia Shopee dari Jakarta",
    roleEn: "Verified Shopee Customer from Jakarta",
    program: "Pelanggan Toko Shopee LKROBO",
    programEn: "LKROBO Shopee Customer",
    quote: "Saya pesan perhiasan silver dan camilan bakery lewat toko Shopee resmi BIMKER LKROBO. Packing-nya sangat aman, kualitas peraknya luar biasa cantik. Bangga bisa ikut mendukung rehabilitasi kemandirian warga binaan!",
    quoteEn: "I ordered silver jewelry and bakery snacks through BIMKER LKROBO's official Shopee store. The packaging was immaculate, and the silver quality is stunning. Proud to support inmate rehabilitation!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    year: "Top Buyer Shopee",
    yearEn: "Top Shopee Buyer"
  }
];
