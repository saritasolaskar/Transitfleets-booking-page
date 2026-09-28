import React from 'react';
import { Check, AlertCircle, HelpCircle } from 'lucide-react';

export const WhatsIncludedSection: React.FC = () => {
  const standardInclusions = [
    {
      title: 'Dedicated Vehicle',
      description: 'Clean, well-maintained vehicle in the booked category (Sedan, SUV, Premium, or Group).'
    },
    {
      title: 'Professional Chauffeur',
      description: 'Experienced, verified highway driver familiar with intercity routes and safety standards.'
    },
    {
      title: 'Standard Fuel & Running',
      description: 'Fuel costs calculated according to the agreed route itinerary or kilometer package.'
    },
    {
      title: 'Route-Based Travel Coordination',
      description: 'Planned pickup and drop-off points coordinated directly with your schedule.'
    },
    {
      title: 'Customer Trip Support',
      description: 'Direct communication assistance from the TransitFleets operations team during travel.'
    }
  ];

  const variableCharges = [
    {
      item: 'Toll Taxes & Expressways',
      note: 'Fastag highway toll charges vary by route and are either included or billed as per actual usage depending on your quote.'
    },
    {
      item: 'State Entry Permits',
      note: 'Interstate commercial vehicle border taxes / permits apply when crossing state lines (e.g. MH to GA, KA, GJ).'
    },
    {
      item: 'Parking & Airport Fees',
      note: 'Parking tickets at airports, railway stations, tourist attractions, or hotels are settled based on actual receipts or quote terms.'
    },
    {
      item: 'Driver Night Allowance',
      note: 'Applicable when the journey extends overnight between 10:00 PM and 6:00 AM or multi-day itineraries.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
            Pricing Transparency
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What's Included?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Clear guidelines on base inclusions and route-dependent charges to prevent surprises and avoid pricing disputes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Base Inclusions */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">
                ✓
              </span>
              <span>Standard Base Inclusions</span>
            </h3>

            <div className="space-y-4">
              {standardInclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Route-Dependent Inclusions */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-sky-600" />
              <span>Route &amp; Quotation Dependent Items</span>
            </h3>

            <div className="space-y-3.5 text-xs text-slate-600">
              {variableCharges.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="font-semibold text-slate-800 text-xs mb-1">
                    {item.item}
                  </div>
                  <p className="text-[12px] text-slate-600 leading-relaxed">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-sky-50 border border-sky-100 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
              <p className="text-xs text-sky-900 leading-relaxed font-medium">
                All applicable inclusions and charges will be communicated in the quotation before confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
