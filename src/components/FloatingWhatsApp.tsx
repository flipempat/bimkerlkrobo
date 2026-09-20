import React, { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';
import { TOKOPEDIA_CONFIG } from '../data/tokopediaConfig';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const messageToSend = userMsg.trim() || TOKOPEDIA_CONFIG.whatsappDefaultMessage;
    const url = `https://wa.me/${TOKOPEDIA_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setUserMsg('');
    setIsOpen(false);
  };

  const quickMessages = language === 'id' ? [
    "Halo Admin, saya tertarik memesan produk perak / bakery.",
    "Bagaimana prosedur kerja sama kemitraan produksi (maklon)?",
    "Apakah bisa memesan custom kemeja atau kerajinan dalam jumlah banyak?"
  ] : [
    "Hello Admin, I am interested in silver crafts / bakery products.",
    "What is the procedure for production partnership (contract manufacturing)?",
    "Can we order custom apparel or crafts in bulk quantities?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Box Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-[#0B1C3D] p-4 text-white flex items-center justify-between border-b border-[#D4A017]/30">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <img
                  src={TOKOPEDIA_CONFIG.logoUrl}
                  alt="Logo BIMKER LKROBO"
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#1A7A4C] border-2 border-[#0B1C3D] rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide text-white">
                  {language === 'id' ? 'Hotline BIMKER LKROBO' : 'BIMKER LKROBO Hotline'}
                </h4>
                <p className="text-[11px] text-slate-300 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#D4A017]" />
                  <span>Lapas Kelas IIA Kerobokan</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10"
              aria-label="Tutup Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#F8F9FC] space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl shadow-xs border border-slate-200/80 text-[#1A1A1A] leading-relaxed">
              <p className="font-semibold text-[#0B1C3D] mb-1">
                {language === 'id' ? 'Om Swastyastu! Salam Pemasyarakatan. 🙏' : 'Om Swastyastu! Warm Greetings. 🙏'}
              </p>
              <p className="text-[#6B7280]">
                {language === 'id' 
                  ? 'Ada yang bisa kami bantu seputar produk karya warga binaan, pembelian Tokopedia, atau pengajuan kemitraan bimbingan kerja?' 
                  : 'How can we help you regarding inmate crafted products, Tokopedia purchases, or vocational training partnerships?'}
              </p>
            </div>

            {/* Quick Chips */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-medium text-[#6B7280]">
                {language === 'id' ? 'Pertanyaan cepat:' : 'Quick questions:'}
              </p>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const url = `https://wa.me/${TOKOPEDIA_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
                    window.open(url, '_blank', 'noopener,noreferrer');
                    setIsOpen(false);
                  }}
                  className="w-full text-left p-2 rounded-lg bg-[#1A7A4C]/10 hover:bg-[#1A7A4C]/20 text-[#1A7A4C] text-[11px] transition-colors border border-[#1A7A4C]/25 flex items-center justify-between font-medium"
                >
                  <span className="truncate">{msg}</span>
                  <Send className="w-3 h-3 text-[#1A7A4C] shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder={language === 'id' ? 'Ketik pesan Anda...' : 'Type your message...'}
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              className="flex-1 text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] text-[#1A1A1A]"
            />
            <button
              type="submit"
              className="bg-[#1A7A4C] hover:bg-[#2E9B6A] text-white p-2 rounded-lg shadow-sm transition-colors"
              aria-label="Kirim ke WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none"
        aria-label="Buka Chat WhatsApp Resmi"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white"></span>
        </span>

        {/* Desktop Tooltip */}
        {!isOpen && (
          <span className="absolute right-16 top-1/2 -translate-y-1/2 hidden sm:block whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {language === 'id' ? 'Chat WhatsApp Bimker' : 'Chat WhatsApp Bimker'}
          </span>
        )}
      </button>
    </div>
  );
};
