import React from 'react';
import { Route, Car, UserCheck, CalendarCheck } from 'lucide-react';

export const TrustHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Route,
      title: 'One-Way & Round Trips',
      description: 'Choose a trip format that fits your travel plans.'
    },
    {
      icon: Car,
      title: 'Multiple Vehicle Options',
      description: 'Select from comfortable sedans, SUVs, MUVs and group travel options.'
    },
    {
      icon: UserCheck,
      title: 'Experienced Drivers',
      description: 'Travel with professionally managed driver services.'
    },
    {
      icon: CalendarCheck,
      title: 'Flexible Travel Requirements',
      description: 'From individual journeys to multi-day and multi-city travel.'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Travel With Confidence
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Professional fleet standards designed for seamless intercity mobility across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col items-start"
              >
                <div className="w-11 h-11 rounded-lg bg-sky-100/80 text-sky-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
