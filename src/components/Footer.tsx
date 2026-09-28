import React from 'react';
import { Car, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/outstationData';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <Car className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Transit<span className="text-sky-500">Fleets</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Outstation and transportation services for individual, corporate and group travel across India.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Providing dependable outstation cab bookings, employee commutes, airport drops, and managed corporate fleet mobility with verified drivers.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://www.transitfleets.com" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="https://www.transitfleets.com" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://www.transitfleets.com" className="hover:text-white transition-colors">
                  Corporate Mobility Services
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">
                  Vehicle Fleets
                </a>
              </li>
              <li>
                <a href="#enquiry-form" className="text-sky-400 font-semibold hover:underline">
                  Outstation Cab Booking
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact TransitFleets
            </div>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Phone / WhatsApp:</span>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phone}`}
                    className="hover:text-white font-medium underline underline-offset-2"
                  >
                    {BUSINESS_CONFIG.displayPhone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Email Enquiries:</span>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="hover:text-white font-medium underline underline-offset-2"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Registered Address:</span>
                  <span className="text-slate-300 leading-relaxed block">
                    {BUSINESS_CONFIG.address}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} TransitFleets. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.transitfleets.com" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="https://www.transitfleets.com" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </a>
            <a
              href="https://www.transitfleets.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors flex items-center gap-1"
            >
              <span>transitfleets.com</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
