import React from 'react';
import { ShieldCheck, Clock, FileCheck2, PhoneCall } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/outstationData';

export const TrustedSupportSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
            Operational Assurance
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Trusted Transportation Support
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            TransitFleets manages intercity travel requirements with transparent communication, documented trip allotments, and round-the-clock trip coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <div className="w-10 h-10 rounded-lg bg-sky-900/50 text-sky-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">
              Verified Chauffeurs
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every driver assigned to outstation routes holds valid commercial licenses, badge authorizations, and verified route competency.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <div className="w-10 h-10 rounded-lg bg-sky-900/50 text-sky-400 flex items-center justify-center mb-4">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">
              Compliant Fleet
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Vehicles operate with up-to-date fitness certificates, comprehensive commercial insurance, and valid state or all-India tourist permits.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <div className="w-10 h-10 rounded-lg bg-sky-900/50 text-sky-400 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">
              24/7 Operations Helpdesk
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our dispatch and support team is on standby to assist with highway route queries, timing adjustments, and on-trip assistance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <div className="w-10 h-10 rounded-lg bg-sky-900/50 text-sky-400 flex items-center justify-center mb-4">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">
              Direct Human Contact
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Speak directly with an operations coordinator via phone ({BUSINESS_CONFIG.displayPhone}) or WhatsApp to customize complex itineraries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
