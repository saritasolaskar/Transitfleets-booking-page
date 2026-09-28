import React from 'react';
import { ArrowRight, ArrowLeftRight, Navigation } from 'lucide-react';
import { TripType } from '../types';

interface TripOptionsSectionProps {
  onSelectTripType: (type: TripType) => void;
}

export const TripOptionsSection: React.FC<TripOptionsSectionProps> = ({ onSelectTripType }) => {
  const options = [
    {
      type: 'one-way' as TripType,
      title: 'One-Way Cab',
      badge: 'Drop Only',
      description: 'Travel from your pickup location to your destination without booking a return journey.',
      cta: 'Enquire Now',
      icon: ArrowRight,
      accent: 'border-slate-200'
    },
    {
      type: 'round-trip' as TripType,
      title: 'Round-Trip Cab',
      badge: 'Onward & Return',
      description: 'Book a vehicle for your onward and return journey with a planned return date.',
      cta: 'Get a Quote',
      icon: ArrowLeftRight,
      accent: 'border-sky-300 ring-1 ring-sky-200/50'
    },
    {
      type: 'multi-city' as TripType,
      title: 'Multi-City Travel',
      badge: 'Custom Itinerary',
      description: 'Plan journeys involving multiple destinations with vehicle and driver arrangements suited to your itinerary.',
      cta: 'Plan Your Trip',
      icon: Navigation,
      accent: 'border-slate-200'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Choose the Right Travel Option
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Tailored travel models whether you need a direct one-way drop, a weekend return trip, or an extended multi-destination journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {options.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.type}
                className={`bg-white rounded-2xl p-7 border ${opt.accent} shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-sky-600" />
                    </div>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                      {opt.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {opt.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {opt.description}
                  </p>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onSelectTripType(opt.type)}
                    className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-sky-600 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>{opt.cta}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
