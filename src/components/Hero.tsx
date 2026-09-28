import React from 'react';
import { Check, ShieldCheck, MapPin, Phone, MessageSquare } from 'lucide-react';
import { BookingForm } from './BookingForm';
import { BUSINESS_CONFIG } from '../data/outstationData';
import { TripType, VehicleCategory } from '../types';

interface HeroProps {
  initialTripType?: TripType;
  initialVehicle?: VehicleCategory;
  initialOrigin?: string;
  initialDestination?: string;
}

export const Hero: React.FC<HeroProps> = ({
  initialTripType,
  initialVehicle,
  initialOrigin,
  initialDestination
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-8 pb-16 lg:py-16">
      {/* Background Subtle Gradient & Highway Travel Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 opacity-95 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Copy & Trust Points */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/60 border border-sky-700/50 text-sky-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>TransitFleets Intercity Transportation</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
                Outstation Cab Booking
              </h1>
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
                Comfortable and reliable cabs for one-way and round-trip journeys across India.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Travel between cities with professionally managed vehicles and experienced drivers.
              </p>
            </div>

            {/* 4 Hero Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>One-Way &amp; Round Trips</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>Multiple Vehicle Options</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>Experienced Drivers</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>Travel Across India</span>
              </div>
            </div>

            {/* Hero Responsive Photography Showcase */}
            <div className="pt-2">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg bg-slate-800 aspect-[16/9] max-w-xl">
                <img
                  src="/src/assets/images/hero_outstation_cab_1790592307803.jpg"
                  alt="TransitFleets outstation cab on Indian highway"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to styled container if image fails to load
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-xs text-slate-200 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Any pickup location to any destination across India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call:</span>
                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="text-white hover:text-sky-300 font-semibold underline underline-offset-2"
                >
                  {BUSINESS_CONFIG.displayPhone}
                </a>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp:</span>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello TransitFleets, I want an outstation cab quote.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-300 font-semibold underline underline-offset-2"
                >
                  Chat with Team
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Booking / Enquiry Card */}
          <div className="lg:col-span-6 xl:col-span-5">
            <BookingForm
              initialTripType={initialTripType}
              initialVehicle={initialVehicle}
              initialOrigin={initialOrigin}
              initialDestination={initialDestination}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
