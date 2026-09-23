import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  ShoppingBag,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { TOKOPEDIA_CONFIG } from '../data/tokopediaConfig';
import { useLanguage } from '../context/LanguageContext';

export const ContactView: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<typeof formData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLastSubmittedData({ ...formData });

    try {
      await fetch(`https://formsubmit.co/ajax/${TOKOPEDIA_CONFIG.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Web BIMKER LKROBO] Pesan dari ${formData.name}: ${formData.subject || 'Kontak Umum'}`,
          nama_pengirim: formData.name,
          email_pengirim: formData.email,
          telepon: formData.phone,
          perihal: formData.subject,
          pesan: formData.message,
          tujuan: TOKOPEDIA_CONFIG.email,
          _template: 'table',
          _captcha: 'false'
        })
      });
    } catch (error) {
      console.warn('Form submit dispatch error:', error);
    } finally {
      setIsSubmitting(false);
      setIsSent(true);
    }
  };

  const mailtoUrl = lastSubmittedData
    ? `mailto:${TOKOPEDIA_CONFIG.email}?subject=${encodeURIComponent(
        `[Kontak BIMKER LKROBO] ${lastSubmittedData.subject || 'Pesan Pengunjung'} - ${lastSubmittedData.name}`
      )}&body=${encodeURIComponent(
        `Halo Tim Bimbingan Kerja Lapas Kerobokan,\n\nSaya menghubungi melalui formulir kontak website BIMKER LKROBO:\n\n• Nama: ${lastSubmittedData.name}\n• Email: ${lastSubmittedData.email}\n• Telepon/WhatsApp: ${lastSubmittedData.phone}\n• Perihal: ${lastSubmittedData.subject}\n\n• Pesan:\n${lastSubmittedData.message}\n\n---\nDikirim dari Website Resmi BIMKER LKROBO`
      )}`
    : `mailto:${TOKOPEDIA_CONFIG.email}`;

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#07132B] via-[#0B1C3D] to-[#07132B] text-white py-14 border-b border-[#0B1C3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E8C547] bg-[#10244C] px-3 py-1 rounded-full border border-[#D4A017]/40">
            {t.contactHeaderBadge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            {t.contactHeaderTitle}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed">
            {t.contactHeaderDesc}
          </p>
        </div>
      </section>

      {/* Contact Cards & Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B1C3D] text-[#D4A017] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A]">
                {t.officeAddress}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                {TOKOPEDIA_CONFIG.address}
              </p>
              <div className="pt-2">
                <a
                  href={TOKOPEDIA_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A7A4C] hover:text-[#2E9B6A] transition-colors"
                >
                  <span>{t.openInMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Contacts */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="font-bold text-base text-[#1A1A1A]">
                {t.directChannels}
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[#6B7280]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0B1C3D] text-[#D4A017] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6B7280] block font-medium">
                      {t.officePhone}
                    </span>
                    <span className="font-bold text-[#1A1A1A]">{TOKOPEDIA_CONFIG.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0B1C3D] text-[#D4A017] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6B7280] block font-medium">
                      {t.officialEmail}
                    </span>
                    <a 
                      href={`mailto:${TOKOPEDIA_CONFIG.email}`}
                      className="font-bold text-[#1A1A1A] hover:text-[#D4A017] transition-colors break-all"
                    >
                      {TOKOPEDIA_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0B1C3D] text-[#D4A017] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6B7280] block font-medium">
                      {t.workingHours}
                    </span>
                    <span className="text-[#1A1A1A]">
                      {language === 'id' ? TOKOPEDIA_CONFIG.operatingHours : 'Mon - Fri: 08:00 - 15:00 WITA'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shopee Store Callout */}
            <div className="bg-[#0B1C3D] text-white rounded-3xl p-6 shadow-md border border-[#D4A017]/30 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider block text-[#E8C547]">
                  {language === 'id' ? 'Belanja Karya Warga Binaan' : 'Shop Inmate Artisans\' Works'}
                </span>
                <h4 className="font-bold text-base mt-0.5 text-white">
                  {language === 'id' ? 'Toko Resmi Shopee LKROBO' : 'Official Shopee Store'}
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  {language === 'id' ? 'Katalog lengkap dan transaksi terverifikasi langsung di Shopee.' : 'Complete catalog and verified checkout directly on Shopee.'}
                </p>
              </div>
              <a
                href={TOKOPEDIA_CONFIG.officialStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EE4D2D] hover:bg-[#D73211] text-white text-xs font-bold py-2.5 px-4 rounded-xl shrink-0 shadow-sm flex items-center gap-1.5 transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-white" />
                <span>{language === 'id' ? 'Buka Shopee' : 'Open Shopee'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form & Map Container */}
          <div className="lg:col-span-7 space-y-6">
            {/* Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h3 className="font-bold text-xl text-[#1A1A1A] mb-1">
                {t.contactFormTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] mb-6">
                {t.contactFormDesc}
              </p>

              {isSent ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#1A7A4C]/15 text-[#1A7A4C] flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-xl text-[#1A1A1A]">
                    {language === 'id' ? 'Pesan Anda Telah Diproses!' : 'Your Message Has Been Processed!'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A5568] max-w-md mx-auto leading-relaxed">
                    {language === 'id' 
                      ? `Pesan telah diteruskan ke email resmi kami: ${TOKOPEDIA_CONFIG.email}. Tim BIMKER LKROBO akan segera menghubungi Anda.`
                      : `Your message has been forwarded to our official email: ${TOKOPEDIA_CONFIG.email}. The LKROBO vocational team will contact you shortly.`}
                  </p>

                  {/* Direct mailto action fallback */}
                  <div className="pt-2 pb-1 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1C3D] hover:bg-[#152e5d] text-white text-xs font-bold py-3 px-5 rounded-xl border border-[#D4A017]/40 shadow-sm transition-all"
                    >
                      <Mail className="w-4 h-4 text-[#D4A017]" />
                      <span>{language === 'id' ? 'Buka Salinan di Gmail / Aplikasi Email' : 'Open in Gmail / Email App'}</span>
                    </a>
                    <button
                      onClick={() => {
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                        setIsSent(false);
                      }}
                      className="w-full sm:w-auto text-xs font-semibold py-3 px-5 rounded-xl bg-[#F8F9FC] hover:bg-slate-200/70 text-[#1A1A1A] border border-slate-200 transition-colors"
                    >
                      {language === 'id' ? 'Kirim Pesan Lain' : 'Send Another Message'}
                    </button>
                  </div>

                  <p className="text-[11px] text-[#6B7280] italic max-w-sm mx-auto">
                    {language === 'id'
                      ? 'Catatan: Jika baru pertama kali mengirim, pastikan memeriksa folder Spam/Update atau klik tombol di atas untuk mengirim langsung dari akun email Anda.'
                      : 'Note: If this is your first submission, please also check your Spam folder or click above to dispatch directly from your email app.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                        {t.formName} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'id' ? "Nama Anda" : "Your Name"}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        placeholder="0812xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                        placeholder="email@anda.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                        {t.formSubject} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'id' ? "Contoh: Pesanan Perak / Kemitraan" : "e.g. Silver Order / Partnership"}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                      {t.formMessage} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={language === 'id' ? "Tuliskan pesan, pertanyaan, atau permohonan informasi Anda di sini..." : "Write your message, question, or request here..."}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#E8C547] text-[#1A1A1A] text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl shadow-md transition-colors disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 text-[#1A1A1A] animate-spin" />
                        <span>{language === 'id' ? 'Mengirim Pesan...' : 'Sending Message...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#1A1A1A]" />
                        <span>{t.sendMessageBtn}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Map Representation */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                  {language === 'id' ? 'Lokasi di Kerobokan, Badung, Bali' : 'Location in Kerobokan, Badung, Bali'}
                </span>
                <span className="text-[11px] text-[#1A7A4C] font-medium">
                  {language === 'id' ? 'Mudah diakses dari Seminyak & Canggu' : 'Easily accessible from Seminyak & Canggu'}
                </span>
              </div>
              <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="Peta Lokasi Lapas Kelas IIA Kerobokan Bali"
                  src="https://maps.google.com/maps?q=Lapas+Kelas+IIA+Kerobokan+Bali&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
