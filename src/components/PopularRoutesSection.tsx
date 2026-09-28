import React from 'react';
import { ArrowRight, MapPin, Compass } from 'lucide-react';
import { POPULAR_ROUTES } from '../data/outstationData';

interface PopularRoutesSectionProps {
  onSelectRoute: (origin: string, destination: string) => void;
  onRequestGeneralQuote: () => void;
}

export const PopularRoutesSection: React.FC<PopularRoutesSectionProps> = ({
  onSelectRoute,
  onRequestGeneralQuote
}) => {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
              Frequent Corridors
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Popular Outstation Routes
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Representative examples of high-demand intercity travel patterns across India. Quotes are provided based on exact pickup and destination coordinates.
            </p>
          </div>

          <button
            onClick={onRequestGeneralQuote}
            className="self-start md:self-auto px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer"
          >
            Custom Route Enquiry
          </button>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POPULAR_ROUTES.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
                  <span className="font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                    {route.approxDistance}
                  </span>
                  <span>{route.tripType}</span>
                </div>

                <div className="flex items-center gap-2 text-base font-bold text-slate-900 my-1">
                  <span>{route.origin}</span>
                  <ArrowRight className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{route.destination}</span>
                </div>

                <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {route.highlight}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <button
                  onClick={() => onSelectRoute(route.origin, route.destination)}
                  className="w-full py-2 px-3 text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-sky-600 hover:text-white rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer group"
                >
                  <span>Request Quote for Route</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note & Custom Route Hook */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
              <Compass className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Looking for a different route?
              </div>
              <div className="text-xs text-slate-600">
                TransitFleets operates across India. Enter any starting city and destination.
              </div>
            </div>
          </div>

          <button
            onClick={onRequestGeneralQuote}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};
