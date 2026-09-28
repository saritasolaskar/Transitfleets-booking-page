/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { TripOptionsSection } from './components/TripOptionsSection';
import { DestinationsSection } from './components/DestinationsSection';
import { PopularRoutesSection } from './components/PopularRoutesSection';
import { VehicleSection } from './components/VehicleSection';
import { TravelPurposeSection } from './components/TravelPurposeSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhatsIncludedSection } from './components/WhatsIncludedSection';
import { WhyTransitFleetsSection } from './components/WhyTransitFleetsSection';
import { TrustedSupportSection } from './components/TrustedSupportSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { TripType, VehicleCategory } from './types';

export default function App() {
  const [selectedTripType, setSelectedTripType] = useState<TripType>('one-way');
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleCategory>('any');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('');
  const [selectedDestination, setSelectedDestination] = useState<string>('');

  const scrollToBookingForm = () => {
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSelectTripType = (type: TripType) => {
    setSelectedTripType(type);
    scrollToBookingForm();
  };

  const handleSelectVehicle = (category: VehicleCategory) => {
    setSelectedVehicle(category);
    scrollToBookingForm();
  };

  const handleSelectRoute = (origin: string, destination: string) => {
    setSelectedOrigin(origin);
    setSelectedDestination(destination);
    scrollToBookingForm();
  };

  const handleSelectCity = (city: string) => {
    // If origin is empty, set origin; else set destination
    if (!selectedOrigin) {
      setSelectedOrigin(city);
    } else {
      setSelectedDestination(city);
    }
    scrollToBookingForm();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-16 md:pb-0">
      {/* 1. Header (Sticky Top Bar Contract) */}
      <Header onBookClick={scrollToBookingForm} />

      <main className="flex-grow">
        {/* 2. Hero Section with Booking / Enquiry Card */}
        <Hero
          initialTripType={selectedTripType}
          initialVehicle={selectedVehicle}
          initialOrigin={selectedOrigin}
          initialDestination={selectedDestination}
        />

        {/* 3. Travel With Confidence: 4 Service Highlights */}
        <TrustHighlights />

        {/* 4. Choose the Right Travel Option (One-Way / Round-Trip / Multi-City) */}
        <TripOptionsSection onSelectTripType={handleSelectTripType} />

        {/* 5. Travel Across India (Regional Coverage & Disclaimers) */}
        <DestinationsSection onSelectCity={handleSelectCity} />

        {/* 6. Popular Outstation Routes */}
        <PopularRoutesSection
          onSelectRoute={handleSelectRoute}
          onRequestGeneralQuote={scrollToBookingForm}
        />

        {/* 7. Choose Your Vehicle (Sedan / SUV / Premium / Group) */}
        <VehicleSection onSelectVehicle={handleSelectVehicle} />

        {/* 8. Outstation Travel For Every Requirement */}
        <TravelPurposeSection onEnquireClick={scrollToBookingForm} />

        {/* 9. How It Works (4 Clear Steps) */}
        <HowItWorksSection />

        {/* 10. What's Included (Base Inclusions vs Route-Dependent Charges) */}
        <WhatsIncludedSection />

        {/* 11. Why Travel With TransitFleets */}
        <WhyTransitFleetsSection />

        {/* 12. Trusted Transportation Support */}
        <TrustedSupportSection />

        {/* 13. Frequently Asked Questions (Accordion) */}
        <FaqSection />

        {/* 14. Final Strong CTA */}
        <FinalCtaSection onQuoteClick={scrollToBookingForm} />
      </main>

      {/* 15. Footer with Official TransitFleets Info */}
      <Footer />

      {/* 16. Floating Mobile Action Bar */}
      <FloatingMobileBar onQuoteClick={scrollToBookingForm} />
    </div>
  );
}
