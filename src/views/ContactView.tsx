import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  ShoppingBag
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-[#0a3a32] text-white py-14 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-900/90 px-3 py-1 rounded-full border border-amber-500/20">
            {t.contactHeaderBadge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            {t.contactHeaderTitle}
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-3 leading-relaxed">
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
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                {t.officeAddress}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {TOKOPEDIA_CONFIG.address}
              </p>
              <div className="pt-2">
                <a
                  href={TOKOPEDIA_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
                >
                  <span>{t.openInMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Contacts */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="font-bold text-base text-slate-900">
                {t.directChannels}
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      {t.officePhone}
                    </span>
                    <span className="font-bold text-slate-800">{TOKOPEDIA_CONFIG.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      {t.whatsappCenter}
                    </span>
                    <a
                      href={`https://wa.me/${TOKOPEDIA_CONFIG.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-800 hover:underline"
                    >
                      {TOKOPEDIA_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      {t.officialEmail}
                    </span>
                    <span className="font-bold text-slate-800 break-all">{TOKOPEDIA_CONFIG.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      {t.workingHours}
                    </span>
                    <span className="text-slate-700">
                      {language === 'id' ? TOKOPEDIA_CONFIG.operatingHours : 'Mon - Fri: 08:00 - 15:00 WITA'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tokopedia Store Callout */}
            <div className="bg-[#03AC0E] text-white rounded-3xl p-6 shadow-md flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider block text-emerald-100">
                  {language === 'id' ? 'Belanja Karya Warga Binaan' : 'Shop Inmate Artisans\' Works'}
                </span>
                <h4 className="font-bold text-base mt-0.5">
                  {language === 'id' ? 'Toko Resmi Tokopedia LKROBO' : 'Official Tokopedia Store'}
                </h4>
                <p className="text-xs text-emerald-50 mt-1">
                  {language === 'id' ? 'Pengiriman ke seluruh Indonesia dengan garansi resmi.' : 'Nationwide delivery with buyer protection guarantee.'}
                </p>
              </div>
              <a
                href={TOKOPEDIA_CONFIG.officialStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-100 text-[#028a0a] text-xs font-bold py-2.5 px-4 rounded-xl shrink-0 shadow-sm flex items-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#03AC0E]" />
                <span>{language === 'id' ? 'Beli' : 'Shop'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form & Map Container */}
          <div className="lg:col-span-7 space-y-6">
            {/* Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h3 className="font-bold text-xl text-slate-900 mb-1">
                {t.contactFormTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                {t.contactFormDesc}
              </p>

              {isSent ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900">
                    {language === 'id' ? 'Pesan Anda Berhasil Terkirim!' : 'Your Message Has Been Sent!'}
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    {language === 'id' 
                      ? 'Terima kasih telah menghubungi Bimbingan Kerja Lapas Kerobokan Bali. Kami akan membalas via email atau WhatsApp yang Anda sediakan.'
                      : 'Thank you for reaching out to Kerobokan Prison Vocational Guidance. We will reply via your provided email or WhatsApp.'}
                  </p>
                  <button
                    onClick={() => {
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                      setIsSent(false);
                    }}
                    className="text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition-colors"
                  >
                    {language === 'id' ? 'Kirim Pesan Lain' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t.formName} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'id' ? "Nama Anda" : "Your Name"}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t.formPhone} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t.formEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@anda.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t.formSubject} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'id' ? "Contoh: Pesanan Perak / Kemitraan" : "e.g. Silver Order / Partnership"}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.formMessage} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={language === 'id' ? "Tuliskan pesan, pertanyaan, atau permohonan informasi Anda di sini..." : "Write your message, question, or request here..."}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0f4c42] hover:bg-[#0c3e36] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl shadow-md transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.sendMessageBtn}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Map Representation */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {language === 'id' ? 'Lokasi di Kerobokan, Badung, Bali' : 'Location in Kerobokan, Badung, Bali'}
                </span>
                <span className="text-[11px] text-emerald-800 font-medium">
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
