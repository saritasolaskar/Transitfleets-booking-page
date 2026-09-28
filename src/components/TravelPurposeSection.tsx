import React from 'react';
import { Home, Briefcase, Plane, Users, CalendarDays, ArrowRight } from 'lucide-react';
import { TRAVEL_PURPOSES } from '../data/outstationData';

interface TravelPurposeSectionProps {
  onEnquireClick: () => void;
}

export const TravelPurposeSection: React.FC<TravelPurposeSectionProps> = ({ onEnquireClick }) => {
  const icons = [Home, Briefcase, Plane, Users, CalendarDays];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
            Service Applications
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Outstation Travel For Every Requirement
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Tailored transportation solutions structured for personal, professional, and group travel contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAVEL_PURPOSES.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 font-medium">
                    {item.description}
                  </p>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    onClick={onEnquireClick}
                    className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1.5 cursor-pointer group"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
