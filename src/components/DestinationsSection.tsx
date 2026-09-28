import React, { useState } from 'react';
import { MapPin, Info, ArrowUpRight } from 'lucide-react';
import { REGIONAL_COVERAGE } from '../data/outstationData';

interface DestinationsSectionProps {
  onSelectCity: (city: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onSelectCity }) => {
  const [activeRegion, setActiveRegion] = useState<string>('West India');

  const currentRegion = REGIONAL_COVERAGE.find(r => r.region === activeRegion) || REGIONAL_COVERAGE[0];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1.5">
            Geographic Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Travel Across India
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you're travelling between nearby cities or planning a long-distance journey, TransitFleets can arrange outstation transportation based on your route and travel requirements.
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200 pb-3">
          {REGIONAL_COVERAGE.map((reg) => (
            <button
              key={reg.region}
              onClick={() => setActiveRegion(reg.region)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeRegion === reg.region
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {reg.region}
            </button>
          ))}
        </div>

        {/* City Grid for Selected Region */}
        <div className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {currentRegion.cities.map((city) => (
              <button
                key={city}
                onClick={() => onSelectCity(city)}
                className="group p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-sky-300 hover:shadow-sm transition-all text-left flex items-center justify-between cursor-pointer"
                title={`Select ${city} for quotation`}
              >
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-slate-950 truncate">
                    {city}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 shrink-0 transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Mandatory Factual Disclaimer Notice */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
          <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-700">Notice on Coverage:</span> The above regions and cities represent example routes and typical operating corridors. TransitFleets accepts booking enquiries between any pickup point and destination in India. Service availability depends on route, date and vehicle requirements.
          </p>
        </div>
      </div>
    </section>
  );
};
