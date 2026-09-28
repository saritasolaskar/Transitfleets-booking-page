import React from 'react';
import { Users, Briefcase, Info, ArrowRight } from 'lucide-react';
import { VEHICLE_OPTIONS } from '../data/outstationData';
import { VehicleCategory } from '../types';

interface VehicleSectionProps {
  onSelectVehicle: (category: VehicleCategory) => void;
}

export const VehicleSection: React.FC<VehicleSectionProps> = ({ onSelectVehicle }) => {
  return (
    <section id="fleet" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
            Fleet Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Choose Your Vehicle
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Select a vehicle based on your passenger count, luggage and travel requirements.
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLE_OPTIONS.map((veh) => (
            <div
              key={veh.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Photography with fallback */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={veh.imageUrl}
                    alt={`${veh.title} outstation cab`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                    {veh.title}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                    {veh.category.toUpperCase().replace('-', ' / ')}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {veh.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    {veh.models}
                  </div>

                  {/* Capacities */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{veh.passengerCapacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{veh.luggageCapacity}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {veh.description}
                  </p>

                  {/* Ideal For */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1.5">
                      Suited For
                    </span>
                    <div className="flex flex-wrap gap-1 text-[11px] text-slate-600">
                      {veh.idealFor.map((item, idx) => (
                        <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectVehicle(veh.category)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-sky-600 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Enquire for {veh.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Factual Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
          <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-700">Fleet Availability Notice:</span> Vehicle availability may vary by location, travel date and requirement. Specific models are allotted based on operational fleet schedules and regional service hub availability.
          </p>
        </div>
      </div>
    </section>
  );
};
