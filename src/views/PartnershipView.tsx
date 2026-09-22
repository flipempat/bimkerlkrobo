import React, { useState } from 'react';
import { 
  Building2, 
  Handshake, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  Mail,
  FileText,
  Clock,
  ArrowRight
} from 'lucide-react';
import { TOKOPEDIA_CONFIG } from '../data/tokopediaConfig';
import { useLanguage } from '../context/LanguageContext';

export const PartnershipView: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    companyName: '',
    picName: '',
    email: '',
    phone: '',
    partnershipType: 'maklon-garmen',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      picName: '',
      email: '',
      phone: '',
      partnershipType: 'maklon-garmen',
      notes: ''
    });
    setIsSubmitted(false);
  };

  const partnershipSchemes = language === 'id' ? [
    {
      title: "Maklon Produksi Garmen & Konveksi",
      desc: "Layanan jahit massal seragam kantor, kaos event komunitas, apron kafe, atau tote bag kanvas dengan mesin industri modern.",
      badge: "Kapasitas Tinggi"
    },
    {
      title: "Suplai Rutin Kafe & Restoran Bali",
      desc: "Pasokan berkala produk bakery segar Dapur Antaboga (croissant, pastry) dan sayuran selada hidroponik ramah lingkungan.",
      badge: "Kualitas Segar"
    },
    {
      title: "Konsinyasi Kriya Perak & Souvenir",
      desc: "Penyediaan cenderamata perak, dupa wangi aromaterapi, dan kerajinan kayu untuk galeri hotel atau toko oleh-oleh.",
      badge: "Sentra Kriya"
    },
    {
      title: "Program CSR & Instruktur Kejuruan",
      desc: "Kolaborasi tanggung jawab sosial perusahaan (CSR) dalam bentuk pelatihan instruktur tamu, bantuan mesin, dan sertifikasi BNSP.",
      badge: "Dampak ESG"
    }
  ] : [
    {
      title: "Garment & Uniform Manufacturing",
      desc: "OEM bulk manufacturing for office uniforms, community event t-shirts, cafe aprons, and canvas tote bags.",
      badge: "High Capacity"
    },
    {
      title: "Cafe & Restaurant Supplies",
      desc: "Scheduled supply of fresh artisanal bakery goods (croissants, sourdough) and eco-friendly hydroponic produce.",
      badge: "Fresh Quality"
    },
    {
      title: "Silver Jewelry & Souvenir Consignment",
      desc: "Authentic Balinese handcrafted silver, aromatherapy incense, and woodcrafts for resort galleries and gift boutiques.",
      badge: "Artisanal Hub"
    },
    {
      title: "CSR & Vocational Training",
      desc: "Corporate Social Responsibility collaborations including guest instructor mentorship, machinery grants, and BNSP certs.",
      badge: "ESG Impact"
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#07132B] via-[#0B1C3D] to-[#07132B] text-white py-14 border-b border-[#0B1C3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E8C547] bg-[#10244C] px-3 py-1 rounded-full border border-[#D4A017]/40">
            {t.partnerHeaderBadge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            {t.partnerHeaderTitle}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed">
            {t.partnerHeaderDesc}
          </p>
        </div>
      </section>

      {/* Skema & Keuntungan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1A7A4C] bg-[#1A7A4C]/15 px-3 py-1 rounded-full border border-[#1A7A4C]/30">
            {language === 'id' ? 'Model Kerja Sama' : 'Partnership Models'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C3D] tracking-tight mt-2">
            {t.schemesTitle}
          </h2>
          <p className="text-sm text-[#6B7280] mt-2">
            {t.schemesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipSchemes.map((scheme, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#D4A017]/40 transition-colors">
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#1A7A4C]/15 text-[#1A7A4C] border border-[#1A7A4C]/30 mb-3">
                  {scheme.badge}
                </span>
                <h3 className="font-bold text-base text-[#1A1A1A] mb-2">
                  {scheme.title}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {scheme.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-[#1A7A4C] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#1A7A4C]" />
                <span>{language === 'id' ? 'Siap Kolaborasi' : 'Ready for Collaboration'}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form Ajukan Kerja Sama */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left info banner */}
            <div className="lg:col-span-5 bg-[#0B1C3D] p-8 sm:p-10 text-white flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-[#D4A017]/30">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
                  {language === 'id' ? 'Formulir Resmi' : 'Official Application'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {t.partnerFormTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 mt-3 leading-relaxed">
                  {t.partnerFormDesc}
                </p>

                <div className="space-y-4 pt-8 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">
                        {language === 'id' ? 'Legalitas Perjanjian Kerja Sama (PKS)' : 'Legitimate Cooperation Agreement (MoU)'}
                      </strong>
                      <span>
                        {language === 'id' 
                          ? 'Didukung format nota kesepahaman resmi Ditjen Pemasyarakatan Kemenkumham.'
                          : 'Backed by formal Ministry of Law and Human Rights legal agreements.'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">
                        {language === 'id' ? 'Kunjungan Verifikasi Pabrik/Bengkel' : 'Workshop Facility Inspection Visits'}
                      </strong>
                      <span>
                        {language === 'id'
                          ? 'Mitra diperkenankan meninjau langsung area bengkel kerja lapas dengan izin resmi.'
                          : 'Partners are welcome to inspect on-site production facilities with security clearance.'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#10244C] p-4 rounded-2xl border border-[#D4A017]/30 space-y-2">
                <p className="text-xs text-slate-200">
                  {language === 'id' ? 'Butuh koordinasi mendesak atau pengadaan skala besar?' : 'Need urgent coordination or large-scale procurement?'}
                </p>
                <div className="flex flex-col gap-1.5 pt-1">
                  <a
                    href={`tel:${TOKOPEDIA_CONFIG.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#D4A017] hover:text-[#E8C547]"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{language === 'id' ? `Telepon Kantor (${TOKOPEDIA_CONFIG.phone})` : `Office Phone (${TOKOPEDIA_CONFIG.phone})`}</span>
                  </a>
                  <a
                    href={`mailto:${TOKOPEDIA_CONFIG.email}`}
                    className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#D4A017]" />
                    <span className="truncate">{TOKOPEDIA_CONFIG.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Fields */}
            <div className="lg:col-span-7 p-8 sm:p-10">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1A7A4C]/15 text-[#1A7A4C] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A]">
                    {language === 'id' ? 'Pengajuan Berhasil Terkirim!' : 'Proposal Submitted Successfully!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] max-w-md mx-auto leading-relaxed">
                    {language === 'id' 
                      ? 'Terima kasih atas minat bermitra bersama BIMKER LKROBO. Tim kami akan segera mempelajari kebutuhan Anda dan menghubungi melalui kontak yang dicantumkan.'
                      : 'Thank you for your interest in partnering with BIMKER LKROBO. Our team will review your requirements and reach out via the provided contact information.'}
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:${TOKOPEDIA_CONFIG.email}?subject=${encodeURIComponent(
                        language === 'id'
                          ? `Tindak Lanjut Proposal Kemitraan - ${formData.companyName || 'Mitra'}`
                          : `Follow-up Partnership Proposal - ${formData.companyName || 'Partner'}`
                      )}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1C3D] hover:bg-[#152e5d] text-white text-xs font-bold py-3 px-5 rounded-xl border border-[#D4A017]/40 shadow-xs"
                    >
                      <Mail className="w-4 h-4 text-[#D4A017]" />
                      <span>{language === 'id' ? 'Kirim Salinan via Email' : 'Send Copy via Email'}</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto text-xs font-semibold py-3 px-5 rounded-xl bg-[#F8F9FC] hover:bg-slate-200/70 text-[#1A1A1A]"
                    >
                      {language === 'id' ? 'Kirim Pengajuan Baru' : 'Submit Another Proposal'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                        {t.formCompany} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'id' ? "PT / CV / Usaha Anda" : "Your Company / Entity"}
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                        {t.formPIC} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'id' ? "Nama Lengkap" : "Full Name"}
                        value={formData.picName}
                        onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                        {t.formEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@perusahaan.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                        {t.formPhone} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="081234567890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                      {t.formScheme} *
                    </label>
                    <select
                      value={formData.partnershipType}
                      onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] text-[#1A1A1A]"
                    >
                      <option value="maklon-garmen">{language === 'id' ? 'Maklon Produksi Garmen / Seragam / Kaos' : 'Garment / Uniform OEM Manufacturing'}</option>
                      <option value="suplai-kuliner">{language === 'id' ? 'Suplai Rutin Bakery (Antaboga) & Sayur Hidroponik' : 'Bakery & Hydroponics Scheduled Supply'}</option>
                      <option value="kriya-perak">{language === 'id' ? 'Kerajinan Perak & Suvenir Adat Bali' : 'Silver & Balinese Souvenir Consignment'}</option>
                      <option value="sablon-merchandise">{language === 'id' ? 'Sablon & Merchandise Komunitas / Kaos Event' : 'Screen Printing & Custom Merchandise'}</option>
                      <option value="csr-pelatihan">{language === 'id' ? 'Program Pelatihan CSR Perusahaan / Bantuan Alat' : 'Corporate CSR Training & Equipment Grant'}</option>
                      <option value="lainnya">{language === 'id' ? 'Lainnya (Bisa Didiskusikan)' : 'Other (Custom Collaboration)'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                      {t.formNotes}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={language === 'id' ? "Jelaskan perkiraan volume pesanan, target waktu, atau spesifikasi barang yang Anda perlukan..." : "Describe estimated volume, timeline, or product specifications needed..."}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] text-[#1A1A1A]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] text-sm font-bold py-3.5 px-6 rounded-xl shadow-md transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.formSubmitBtn}</span>
                    </button>
                    <p className="text-[11px] text-[#6B7280] text-center mt-2">
                      {language === 'id'
                        ? 'Data Anda dijaga kerahasiaannya dan hanya digunakan untuk keperluan koordinasi kemitraan bimbingan kerja.'
                        : 'Your contact details are strictly confidential and used solely for vocational collaboration coordination.'}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
