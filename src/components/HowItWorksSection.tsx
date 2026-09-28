import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/outstationData';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
            Simple Process
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A clear, transparent enquiry and quote generation flow without hidden complications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <div key={stepItem.step} className="relative flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-200 font-mono">
                  {stepItem.step}
                </span>
                <div className="h-0.5 w-12 bg-slate-200 hidden lg:block" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {stepItem.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-slate-500 bg-slate-50 border border-slate-200 p-4 rounded-xl max-w-2xl mx-auto">
          <span className="font-semibold text-slate-700">Important Note:</span> Submitting an enquiry generates a verified quotation and vehicle options. Bookings are only finalized once you review and approve the quotation terms.
        </div>
      </div>
    </section>
  );
};
