import React from 'react';
import {
  Layers,
  Repeat,
  MapPin,
  Building2,
  UserCheck,
  Sliders,
  Headphones,
  Network
} from 'lucide-react';

export const WhyTransitFleetsSection: React.FC = () => {
  const points = [
    {
      icon: Layers,
      title: 'Multiple Vehicle Categories',
      description: 'Choose from sedans, premium MUVs, executive luxury cars, and Tempo Travellers tailored to group size.'
    },
    {
      icon: Repeat,
      title: 'One-Way & Round-Trip Options',
      description: 'Pay only for the drop with one-way bookings, or retain the vehicle for full round-trip itineraries.'
    },
    {
      icon: MapPin,
      title: 'Intercity & Long-Distance Travel',
      description: 'Established routes connecting tier 1, tier 2 cities, pilgrimage destinations, and industrial hubs across India.'
    },
    {
      icon: Building2,
      title: 'Corporate Travel Capability',
      description: 'Structured transportation workflows, verified vehicle documents, and standard GST invoicing for business clients.'
    },
    {
      icon: UserCheck,
      title: 'Driver-Managed Transportation',
      description: 'Chauffeurs with verified backgrounds, commercial driving licenses, and intercity highway route experience.'
    },
    {
      icon: Sliders,
      title: 'Customized Travel Requirements',
      description: 'Flexibility for multi-city business roadshows, airport transfers, family vacations, or wedding guest movements.'
    },
    {
      icon: Headphones,
      title: 'Direct Booking Assistance',
      description: 'Prompt coordination by operational executives via phone, WhatsApp, and email from enquiry to trip completion.'
    },
    {
      icon: Network,
      title: 'Network-Based Vehicle Availability',
      description: 'Collaborative transport network enabling outstation cab allotments across diverse Indian geographies.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
            Service Highlights
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Travel With TransitFleets?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Factual operational standards designed for dependable intercity journeys without exaggerated claims.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-100/70 text-sky-800 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-sky-700" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
