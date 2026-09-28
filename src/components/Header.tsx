import React, { useState } from 'react';
import { Phone, Menu, X, Car } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/outstationData';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.transitfleets.com"
              className="flex items-center gap-2 group text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
              title="TransitFleets Home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-sm group-hover:bg-sky-600 transition-colors">
                <Car className="w-5 h-5 text-sky-400 group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
                  Transit<span className="text-sky-600">Fleets</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-0.5">
                  Mobility &amp; Fleet Services
                </span>
              </div>
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a
              href="https://www.transitfleets.com"
              className="hover:text-slate-950 transition-colors py-1"
            >
              Home
            </a>
            <a
              href="https://www.transitfleets.com"
              className="hover:text-slate-950 transition-colors py-1"
            >
              About
            </a>
            <a
              href="https://www.transitfleets.com"
              className="hover:text-slate-950 transition-colors py-1"
            >
              Services
            </a>
            <a
              href="https://www.transitfleets.com"
              className="hover:text-slate-950 transition-colors py-1"
            >
              Fleets
            </a>
            {/* Outstation: Current Service Hub */}
            <a
              href="#enquiry-form"
              className="text-sky-700 font-semibold relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-sky-600"
              aria-current="page"
            >
              Outstation
            </a>
            <a
              href="#faq"
              className="hover:text-slate-950 transition-colors py-1"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="hover:text-slate-950 transition-colors py-1"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Direct Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap"
              title={`Call ${BUSINESS_CONFIG.displayPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{BUSINESS_CONFIG.displayPhone}</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.98] rounded-lg transition-all shadow-sm hover:shadow whitespace-nowrap cursor-pointer"
            >
              Book a Cab
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-base font-medium text-slate-700">
            <a
              href="https://www.transitfleets.com"
              className="px-3 py-2 rounded-md hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="https://www.transitfleets.com"
              className="px-3 py-2 rounded-md hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="https://www.transitfleets.com"
              className="px-3 py-2 rounded-md hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="https://www.transitfleets.com"
              className="px-3 py-2 rounded-md hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fleets
            </a>
            <a
              href="#enquiry-form"
              className="px-3 py-2 rounded-md bg-sky-50 text-sky-700 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Outstation Cabs (Active)
            </a>
            <a
              href="#faq"
              className="px-3 py-2 rounded-md hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-md hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold rounded-lg bg-slate-100 text-slate-800"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call {BUSINESS_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
