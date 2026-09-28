import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/outstationData';

interface FloatingMobileBarProps {
  onQuoteClick: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onQuoteClick }) => {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl"
      style={{ height: '60px' }}
      role="region"
      aria-label="Quick mobile trip actions"
    >
      <div className="grid grid-cols-3 gap-2 h-full items-center">
        {/* Call CTA */}
        <a
          href={`tel:${BUSINESS_CONFIG.phone}`}
          className="flex items-center justify-center gap-1.5 h-11 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors active:scale-95"
          aria-label="Call TransitFleets"
        >
          <Phone className="w-3.5 h-3.5 text-slate-700" />
          <span>Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi TransitFleets, I would like to request an outstation cab quote.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 h-11 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors active:scale-95"
          aria-label="WhatsApp TransitFleets"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Get Quote CTA */}
        <button
          onClick={onQuoteClick}
          className="flex items-center justify-center gap-1.5 h-11 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors shadow-sm active:scale-95 cursor-pointer"
          aria-label="Go to Outstation Quote Form"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
