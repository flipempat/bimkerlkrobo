import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Heart, 
  Award, 
  Users, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShoppingBag,
  HeartHandshake,
  Wallet,
  BookOpen
} from 'lucide-react';
import { TOKOPEDIA_CONFIG } from '../data/tokopediaConfig';
import { useLanguage } from '../context/LanguageContext';

interface AboutViewProps {
  setActiveTab: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab }) => {
  const { t, language } = useLanguage();

  const steps = language === 'id' ? [
    {
      step: "01",
      title: "Asesmen Minat & Bakat",
      desc: "Setiap warga binaan yang memenuhi syarat administratif dan substantif menjalani pemetaan bakat untuk menentukan bidang keterampilan yang paling sesuai."
    },
    {
      step: "02",
      title: "Pelatihan & Pendampingan Instruktur",
      desc: "Menerima modul teori dan praktik intensif yang dibimbing langsung oleh instruktur internal berpengalaman serta tenaga ahli profesional eksternal."
    },
    {
      step: "03",
      title: "Uji Kompetensi & Sertifikasi BNSP",
      desc: "Peserta yang tuntas mengikuti uji kompetensi resmi dari Badan Nasional Sertifikasi Profesi (BNSP) atau Balai Latihan Kerja (BLK) untuk pengakuan keahlian secara nasional."
    },
    {
      step: "04",
      title: "Produksi Karya & Kontrol Kualitas",
      desc: "Warga binaan mempraktikkan keahlian dengan memproduksi barang riil (perak, roti, garmen, kayu) dengan standar ketat sebelum diedarkan ke pasar."
    },
    {
      step: "05",
      title: "Pemasaran & Hak Upah Premi",
      desc: "Hasil penjualan karya dan pesanan mitra disalurkan sebagai upah premi resmi (remunerasi) yang masuk ke buku tabungan warga binaan untuk keluarga."
    }
  ] : [
    {
      step: "01",
      title: "Interest & Aptitude Assessment",
      desc: "Every eligible inmate undergoes aptitude mapping to determine their optimal vocational match and psychological readiness."
    },
    {
      step: "02",
      title: "Instruction & Mentorship",
      desc: "Participants receive structured theory and hands-on practice led by certified prison instructors and external industry experts."
    },
    {
      step: "03",
      title: "Competency Test & BNSP Certification",
      desc: "Graduates undergo formal competency testing from the National Professional Certification Board (BNSP) or BLK for national recognition."
    },
    {
      step: "04",
      title: "Production & Quality Control",
      desc: "Inmates produce market-ready creations (fine silver, bakery, apparel, furniture) following strict quality control standards."
    },
    {
      step: "05",
      title: "Commercialization & Premium Wages",
      desc: "Proceeds from official marketplace and corporate orders fund transparent monthly premium wages saved for inmates' families and release funds."
    }
  ];

  const values = language === 'id' ? [
    {
      title: "Humanis & Memanusiakan",
      desc: "Memandang setiap warga binaan sebagai insan berpotensi yang layak dibimbing dengan kasih, martabat, dan penghargaan.",
      icon: Heart
    },
    {
      title: "Standar Profesional",
      desc: "Menerapkan standar kerja industri dan keselamatan kerja (K3) dalam setiap tahapan pembuatan produk.",
      icon: ShieldCheck
    },
    {
      title: "Kemandirian Nyata",
      desc: "Membekali keahlian aplikatif yang bisa langsung dijadikan mata pencaharian mandiri maupun modal melamar kerja pasca bebas.",
      icon: Award
    },
    {
      title: "Transparan & Akuntabel",
      desc: "Pengelolaan hasil penjualan serta pembagian premi tercatat jelas dan dapat dipertanggungjawabkan.",
      icon: Target
    }
  ] : [
    {
      title: "Humanistic & Dignified",
      desc: "Viewing every inmate as an individual with potential who deserves patient guidance, dignity, and sincere respect.",
      icon: Heart
    },
    {
      title: "Professional Standards",
      desc: "Enforcing strict industrial quality control and occupational safety (OHS) standards throughout the workshop floors.",
      icon: ShieldCheck
    },
    {
      title: "Practical Self-Reliance",
      desc: "Instilling applicable vocational skills that provide immediate livelihoods and credible resumes upon post-release reintegration.",
      icon: Award
    },
    {
      title: "Transparent & Accountable",
      desc: "Managing product sales and labor allowances through verified accounting and direct inmate savings accounts.",
      icon: Target
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#07132B] via-[#0B1C3D] to-[#07132B] text-white py-14 border-b border-[#0B1C3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E8C547] bg-[#10244C] px-3 py-1 rounded-full border border-[#D4A017]/40">
            {t.aboutHeaderBadge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            {t.aboutHeaderTitle}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed">
            {t.aboutHeaderDesc}
          </p>
        </div>
      </section>

      {/* Sejarah & Latar Belakang */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A7A4C]/15 text-[#1A7A4C] border border-[#1A7A4C]/30 text-xs font-bold">
              <Compass className="w-3.5 h-3.5 text-[#1A7A4C]" />
              <span>{language === 'id' ? 'Sejarah & Misi Pemasyarakatan' : 'History & Penitentiary Mission'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C3D] tracking-tight">
              {language === 'id' 
                ? 'Mengubah Waktu Menjadi Karya, Menyiapkan Asa Menatap Masa Depan'
                : 'Transforming Time into Craftsmanship, Preparing Hope for the Future'}
            </h2>
            <div className="space-y-4 text-sm text-[#6B7280] leading-relaxed">
              <p>
                {language === 'id'
                  ? 'Lembaga Pemasyarakatan (Lapas) Kelas IIA Kerobokan yang terletak di kawasan Badung, Bali, memegang peran penting tidak hanya sebagai institusi penegakan hukum, namun yang paling utama adalah sebagai wadah pembinaan dan reintegrasi sosial kemanusiaan.'
                  : 'Kerobokan Class IIA Correctional Facility, situated in Badung, Bali, holds an essential mission beyond legal justice: acting primarily as a sanctuary for rehabilitation, human dignity, and social reintegration.'}
              </p>
              <p>
                {language === 'id'
                  ? 'Melalui Seksi Kegiatan Kerja (BIMKER LKROBO), kami meyakini bahwa tembok terali bukanlah akhir dari segalanya, melainkan titik balik bagi seseorang untuk belajar keahlian baru, menumbuhkan disiplin kerja, dan membuktikan kembali nilainya bagi masyarakat.'
                  : 'Through the Vocational Guidance Section (BIMKER LKROBO), we hold fast to the conviction that prison walls are not a dead end, but a turning point to master new trades, cultivate professional work ethics, and reclaim social value.'}
              </p>
              <p>
                {language === 'id'
                  ? 'Kini, bimbingan kerja Lapas Kerobokan telah berkembang pesat menjadi sentra produksi kriya perak bercita rasa seni tinggi khas Bali, dapur bakery berstandar higienis (Dapur Antaboga), unit konveksi garmen tenun Endek, dupa wangi aromaterapi, studio sablon, layanan binatu (laundry), barbershop pangkas rambut modern, hingga greenhouse budidaya ketahanan pangan yang ramah lingkungan.'
                  : 'Today, our vocational guidance has evolved into an active production hub for Balinese filigree silver jewelry, a certified hygienic bakery (Dapur Antaboga), modern Endek garment tailoring, aromatherapy incense, screen printing studio, hygienic laundry services, modern barbershop grooming, and eco-friendly food security farming.'}
              </p>
            </div>

            <div className="pt-2">
              <div className="bg-[#F8F9FC] rounded-2xl p-4 border border-slate-200/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                <p className="text-xs text-[#1A1A1A] leading-relaxed font-medium">
                  {language === 'id'
                    ? 'Seluruh program bimbingan kerja dijalankan mengacu pada UU No. 22 Tahun 2022 tentang Pemasyarakatan yang menitikberatkan pada perlindungan hak dan pembinaan kemandirian narapidana.'
                    : 'All vocational programs operate in compliance with Indonesian Law No. 22 of 2022 on Corrections, focusing on protecting rights and nurturing prisoner self-reliance.'}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 aspect-4/3 group">
              <img
                src="https://res.cloudinary.com/ig4uk50k/image/upload/v1789968128/slefyi8iuwrmleiwhg37.webp"
                alt="Apel Pagi Pengarahan Sebelum Kegiatan Bimbingan Kerja Lapas Kerobokan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8C547] bg-[#0B1C3D]/80 px-2.5 py-0.5 rounded-full border border-[#D4A017]/30 mb-2 backdrop-blur-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4A017]" />
                    {language === 'id' ? 'Disiplin & Budaya Kerja' : 'Discipline & Work Ethics'}
                  </span>
                  <p className="text-white text-sm sm:text-base font-bold leading-snug">
                    {language === 'id' 
                      ? 'Apel Pagi & Pengarahan Keselamatan Kerja (K3) Sebelum Memulai Kegiatan'
                      : 'Morning Roll Call & Safety Briefing Before Daily Operations'}
                  </p>
                  <p className="text-slate-300 text-xs mt-1.5 line-clamp-2">
                    {language === 'id'
                      ? 'Rutinitas apel pengarahan dari instruktur dan petugas setiap pagi untuk memastikan kedisiplinan, kesiapan mental, serta standar SOP dan keselamatan kerja warga binaan.'
                      : 'Daily morning roll call led by vocational instructors ensuring discipline, mental readiness, SOP standards, and occupational safety before workshop entry.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="bg-[#F8F9FC] py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0B1C3D] text-[#D4A017] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0B1C3D] mb-3">
                  {t.aboutVisionTitle}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {language === 'id'
                    ? '“Menjadi sentra bimbingan kerja pemasyarakatan yang unggul, humanis, dan produktif dalam membentuk warga binaan yang terampil, mandiri, dan berkarakter mulia serta mampu menghasilkan karya berstandar industri yang berdaya saing di pasar nasional maupun internasional.”'
                    : '“To become an exemplary, humanistic, and productive correctional vocational center that shapes skilled, self-reliant, and noble-minded inmates producing industry-grade crafts competitive in domestic and global markets.”'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-[#1A7A4C] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1A7A4C]" />
                <span>{language === 'id' ? 'Terintegrasi dengan Rencana Strategis Kemenkumham RI' : 'Integrated with Ministry Strategic Roadmaps'}</span>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#D4A017]/20 text-[#D4A017] flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 text-[#D4A017]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0B1C3D] mb-3">
                  {t.aboutMissionTitle}
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#6B7280]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1A7A4C] shrink-0 mt-0.5" />
                    <span>{language === 'id' ? 'Menyelenggarakan pelatihan keterampilan kerja berbasis kompetensi dan tersertifikasi resmi.' : 'Deliver competency-based vocational training with official national certification.'}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1A7A4C] shrink-0 mt-0.5" />
                    <span>{language === 'id' ? 'Membangun ekosistem produksi yang mengedepankan kearifan lokal Bali dan kebutuhan pasar modern.' : 'Build a production ecosystem celebrating Balinese heritage and modern consumer standards.'}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1A7A4C] shrink-0 mt-0.5" />
                    <span>{language === 'id' ? 'Memperluas jejaring pemasaran digital melalui e-commerce resmi dan kemitraan industri.' : 'Expand digital market presence through official e-commerce stores and industry B2B links.'}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1A7A4C] shrink-0 mt-0.5" />
                    <span>{language === 'id' ? 'Menjamin pemenuhan hak upah premi warga binaan secara transparan sebagai bekal reintegrasi sosial.' : 'Guarantee transparent distribution of inmate labor wages and post-release rehabilitation savings.'}</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-[#D4A017] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4A017]" />
                <span>{language === 'id' ? 'Komitmen Nyata Pembinaan Kemandirian Berkelanjutan' : 'Sustainable Independence Commitment'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Utama */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1A7A4C] bg-[#1A7A4C]/15 px-3 py-1 rounded-full border border-[#1A7A4C]/30">
            {language === 'id' ? 'Prinsip Kerja' : 'Operating Principles'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C3D] tracking-tight mt-2">
            {t.aboutValuesTitle}
          </h2>
          <p className="text-sm text-[#6B7280] mt-2">
            {language === 'id'
              ? 'Setiap jengkal proses bimbingan kerja dibangun di atas nilai-nilai etika, profesionalitas, dan kemanusiaan.'
              : 'Every facet of our training is founded on ethics, professionalism, and genuine humanity.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#D4A017]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#0B1C3D] text-[#D4A017] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-[#1A1A1A] mb-2">
                  {val.title}
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Alur Pembinaan 5 Tahap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1C3D] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#D4A017]/30">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-[#E8C547] uppercase tracking-wider bg-[#10244C] px-3 py-1 rounded-full border border-[#D4A017]/40">
              {language === 'id' ? 'SOP Pembinaan' : 'Training SOP'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              {t.workflowTitle}
            </h2>
            <p className="text-sm text-slate-200 mt-2">
              {t.workflowDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {steps.map((st, i) => (
              <div key={i} className="bg-[#10244C] p-5 rounded-2xl border border-[#D4A017]/20 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-[#D4A017] font-serif block mb-2">
                    {st.step}
                  </span>
                  <h4 className="font-bold text-sm text-white mb-2 leading-snug">
                    {st.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-200 text-center sm:text-left">
              {language === 'id' 
                ? 'Dukung karya warga binaan kami dengan memesan langsung melalui toko resmi Lapas Kerobokan.'
                : 'Support our inmate artisans by placing orders directly on the official store of Kerobokan Prison.'}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab('program')}
                className="bg-[#10244C] hover:bg-[#152e60] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors border border-white/20"
              >
                {language === 'id' ? 'Lihat 10+ Program' : 'Explore 10+ Programs'}
              </button>
              <a
                href={TOKOPEDIA_CONFIG.officialStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] text-xs font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{t.visitTokopediaStore}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DOKUMENTASI NYATA: PEMBAGIAN PREMI & HAK UPAH WARGA BINAAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A7A4C] bg-[#1A7A4C]/15 px-3 py-1 rounded-full border border-[#1A7A4C]/30 mb-3">
              <HeartHandshake className="w-3.5 h-3.5 text-[#1A7A4C]" />
              <span>{language === 'id' ? 'Transparansi & Akuntabilitas' : 'Transparency & Accountability'}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C3D] tracking-tight">
              {language === 'id' 
                ? 'Penyaluran Upah Premi Hasil Kerja & Tabungan Warga Binaan'
                : 'Inmate Labor Wage Premiums & Savings Passbook Distribution'}
            </h2>
            <p className="text-sm text-[#6B7280] mt-3 leading-relaxed">
              {language === 'id'
                ? 'Sesuai regulasi Peraturan Menteri Hukum dan HAM RI, setiap rupiah hasil penjualan produk kerajinan, bakery, tekstil, dan agribisnis LKROBO disalurkan secara transparan. Bagian keuntungan diberikan sebagai upah premi kerja resmi yang dibukukan langsung ke buku tabungan masing-masing warga binaan untuk membantu nafkah keluarga di rumah serta menjadi bekal modal wirausaha pasca bebas.'
                : 'In accordance with Indonesian Ministry of Law & Human Rights regulations, proceeds from artisan, bakery, garment, and agricultural sales are transparently shared. Inmates receive official wage premiums recorded directly into individual bank passbooks to support their families and fund post-release businesses.'}
            </p>
          </div>

          {/* 2 Photographic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Foto 1: Seremoni Penyerahan Premi */}
            <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-[#F8F9FC] shadow-sm hover:border-[#D4A017]/50 transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src="https://res.cloudinary.com/ig4uk50k/image/upload/v1789968127/l5zuxuucvytsxjfbpsuk.webp"
                  alt="Seremoni Penyerahan Upah Premi Kerja Warga Binaan Lapas Kerobokan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-[#0B1C3D]/90 text-[#D4A017] border border-[#D4A017]/30 backdrop-blur-xs">
                  {language === 'id' ? 'Seremoni Penyerahan Premi' : 'Wage Handover Ceremony'}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-bold text-base text-[#0B1C3D] mb-1.5">
                  {language === 'id' 
                    ? 'Penyerahan Premi Hasil Kerja Rutin' 
                    : 'Scheduled Inmate Wage Premium Handover'}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {language === 'id'
                    ? 'Pejabat Seksi Kegiatan Kerja menyerahkan langsung hak upah premi kepada warga binaan pekerja unit perak, bakery, garmen, lukisan, dan agribisnis sebagai wujud penghargaan atas ketekunan dan kerja keras mereka.'
                    : 'Correctional vocational officers directly hand over wage premiums to inmate artisans across jewelry, bakery, garment, and agribusiness units in recognition of their dedication.'}
                </p>
              </div>
            </div>

            {/* Foto 2: Pencatatan Buku Rekening Tabungan */}
            <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-[#F8F9FC] shadow-sm hover:border-[#D4A017]/50 transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src="https://res.cloudinary.com/ig4uk50k/image/upload/v1789968128/th1goquoqx8l0cbpnypi.webp"
                  alt="Pencatatan Buku Tabungan Mandiri Warga Binaan Lapas Kerobokan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-[#1A7A4C]/90 text-white border border-[#2E9B6A]/40 backdrop-blur-xs">
                  {language === 'id' ? 'Buku Rekening Tabungan Mandiri' : 'Individual Savings Passbook'}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-bold text-base text-[#0B1C3D] mb-1.5">
                  {language === 'id' 
                    ? 'Transparansi Tabungan Bekal Pasca Bebas' 
                    : 'Transparent Reintegration Savings Account'}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {language === 'id'
                    ? 'Seluruh premi dicatat secara tertib di buku rekening tabungan resmi. Dana aman tanpa potongan liar, dapat dikirimkan untuk kebutuhan keluarga, atau dicairkan penuh saat bebas sebagai modal mandiri.'
                    : 'All wages are systematically credited into official bank passbooks without illegal deductions, allowing inmates to support their families or withdraw funds upon release.'}
                </p>
              </div>
            </div>
          </div>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 border-t border-slate-200">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#0B1C3D] text-[#D4A017] flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0B1C3D] mb-1">
                  {language === 'id' ? 'Landasan Regulasi Resmi' : 'Official Legal Framework'}
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {language === 'id'
                    ? 'Berpedoman ketat pada Permenkumham No. 29 Tahun 2017 tentang Upah dan Premi bagi Narapidana.'
                    : 'Strictly adhering to Ministerial Regulation No. 29/2017 on Inmate Wages and Premium Distribution.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#1A7A4C]/15 text-[#1A7A4C] flex items-center justify-center shrink-0">
                <Wallet className="w-5 h-5 text-[#1A7A4C]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0B1C3D] mb-1">
                  {language === 'id' ? 'Nafkah Keluarga & Anak' : 'Family Support & Livelihood'}
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {language === 'id'
                    ? 'Warga binaan tetap dapat berkontribusi membiayai pendidikan anak dan kebutuhan keluarga di rumah.'
                    : 'Inmates actively help provide for their children’s schooling and domestic family necessities while inside.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#D4A017]/20 text-[#D4A017] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#D4A017]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0B1C3D] mb-1">
                  {language === 'id' ? 'Modal Mandiri Pasca Bebas' : 'Post-Release Business Capital'}
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {language === 'id'
                    ? 'Tabungan premi menjadi bekal finansial nyata agar tidak kembali mengulangi tindak pidana saat kembali.'
                    : 'Accumulated savings provide genuine financial launchpad to start honest businesses and prevent recidivism.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
