import React from 'react';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/outstationData';

interface FinalCtaSectionProps {
  onQuoteClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onQuoteClick }) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Planning Your Next Journey?
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Share your route and travel requirements with TransitFleets and get suitable vehicle options and a quotation.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Get an Outstation Quote</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </button>

          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello TransitFleets, I would like to get a quote for an outstation cab.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>Call Now ({BUSINESS_CONFIG.displayPhone})</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Intercity cabs available for one-way, round-trip, airport, and multi-city travel across India.
        </p>
      </div>
    </section>
  );
};
