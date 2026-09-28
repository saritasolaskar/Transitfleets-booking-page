import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Car,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { BookingFormData, FormErrors, TripType, VehicleCategory } from '../types';
import { BUSINESS_CONFIG } from '../data/outstationData';

interface BookingFormProps {
  initialTripType?: TripType;
  initialVehicle?: VehicleCategory;
  initialOrigin?: string;
  initialDestination?: string;
  onResetTrigger?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialTripType = 'one-way',
  initialVehicle = 'any',
  initialOrigin = '',
  initialDestination = ''
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    pickupLocation: initialOrigin,
    destination: initialDestination,
    tripType: initialTripType,
    travelDate: '',
    returnDate: '',
    multiCityStops: '',
    passengers: '1-4',
    vehiclePreference: initialVehicle,
    customerName: '',
    mobileNumber: '',
    email: '',
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [enquiryRefId, setEnquiryRefId] = useState('');

  // Synchronize when external quick-selects trigger (e.g. from routes or vehicle cards)
  React.useEffect(() => {
    if (initialOrigin) {
      setFormData(prev => ({ ...prev, pickupLocation: initialOrigin }));
    }
    if (initialDestination) {
      setFormData(prev => ({ ...prev, destination: initialDestination }));
    }
  }, [initialOrigin, initialDestination]);

  React.useEffect(() => {
    if (initialTripType) {
      setFormData(prev => ({ ...prev, tripType: initialTripType }));
    }
  }, [initialTripType]);

  React.useEffect(() => {
    if (initialVehicle) {
      setFormData(prev => ({ ...prev, vehiclePreference: initialVehicle }));
    }
  }, [initialVehicle]);

  // Validation logic
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Please enter your pickup location';
    }

    if (!formData.destination.trim()) {
      newErrors.destination = 'Please enter your destination';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Please select a travel date';
    }

    if (formData.tripType === 'round-trip') {
      if (!formData.returnDate) {
        newErrors.returnDate = 'Please select a return date for round-trip';
      } else if (formData.travelDate && formData.returnDate < formData.travelDate) {
        newErrors.returnDate = 'Return date cannot be earlier than travel date';
      }
    }

    if (!formData.passengers) {
      newErrors.passengers = 'Please select number of passengers';
    }

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Please enter your full name';
    }

    // Indian mobile number validation: 10 digits, optionally prefixed with +91 or 0
    const rawDigits = formData.mobileNumber.replace(/\D/g, '');
    const isValidIndianMobile =
      (rawDigits.length === 10 && /^[6-9]\d{9}$/.test(rawDigits)) ||
      (rawDigits.length === 12 && rawDigits.startsWith('91') && /^[6-9]\d{9}$/.test(rawDigits.substring(2)));

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Please enter your 10-digit mobile number';
    } else if (!isValidIndianMobile) {
      newErrors.mobileNumber = 'Please enter a valid Indian mobile number (e.g., 9881043606)';
    }

    if (formData.email && formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = (data: BookingFormData, refId: string): string => {
    const text = `*Outstation Cab Enquiry* (Ref: #${refId})

*Name:* ${data.customerName}
*Phone:* ${data.mobileNumber}${data.email ? `\n*Email:* ${data.email}` : ''}
*Pickup:* ${data.pickupLocation}
*Destination:* ${data.destination}
*Trip Type:* ${data.tripType === 'one-way' ? 'One Way' : data.tripType === 'round-trip' ? 'Round Trip' : 'Multi-City'}
*Travel Date:* ${data.travelDate}${data.tripType === 'round-trip' && data.returnDate ? `\n*Return Date:* ${data.returnDate}` : ''}${data.tripType === 'multi-city' && data.multiCityStops ? `\n*Route Details:* ${data.multiCityStops}` : ''}
*Passengers:* ${data.passengers}
*Vehicle Preference:* ${data.vehiclePreference.toUpperCase()}
*Additional Requirements:* ${data.additionalRequirements || 'None specified'}`;

    return encodeURIComponent(text);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const ref = 'TF' + Math.floor(100000 + Math.random() * 900000);

    // Option A: Check if configurable API Endpoint exists
    if (
      BUSINESS_CONFIG.apiEndpoint &&
      BUSINESS_CONFIG.apiEndpoint !== 'YOUR_API_ENDPOINT_HERE'
    ) {
      try {
        await fetch(BUSINESS_CONFIG.apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, referenceId: ref, timestamp: new Date().toISOString() })
        });
      } catch (err) {
        console.error('Failed to post to API endpoint:', err);
      }
    } else {
      // Simulate prompt execution delay
      await new Promise(resolve => setTimeout(resolve, 600));
    }

    setEnquiryRefId(ref);
    setSubmittedData(formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      pickupLocation: '',
      destination: '',
      tripType: 'one-way',
      travelDate: '',
      returnDate: '',
      multiCityStops: '',
      passengers: '1-4',
      vehiclePreference: 'any',
      customerName: '',
      mobileNumber: '',
      email: '',
      additionalRequirements: ''
    });
    setErrors({});
  };

  // Today's date for datepicker min attribute
  const todayString = new Date().toISOString().split('T')[0];

  return (
    <div
      id="enquiry-form"
      className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden transition-all duration-300"
    >
      {/* Card Header */}
      <div className="bg-slate-900 text-white px-5 sm:px-7 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span className="text-xs uppercase tracking-wider font-bold text-sky-400">
              Quotation Request
            </span>
          </div>
          <span className="text-[11px] text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded">
            All-India Outstation
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-1">
          Get an Outstation Quote
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
          Share your trip details and our team will get back to you with available vehicle options and a quotation.
        </p>
      </div>

      {/* Confirmation State */}
      {isSubmitted && submittedData ? (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-start gap-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
            <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-emerald-950">
                Thank you! Your outstation enquiry has been received.
              </h3>
              <p className="text-sm text-emerald-800 mt-1">
                TransitFleets will contact you shortly with vehicle availability and quotation details.
              </p>
              <div className="mt-2 text-xs font-semibold text-emerald-900 bg-emerald-100/70 inline-block px-2.5 py-1 rounded">
                Reference ID: #{enquiryRefId}
              </div>
            </div>
          </div>

          {/* Trip Summary Details */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm space-y-2.5 text-slate-700">
            <div className="font-semibold text-slate-900 text-sm border-b border-slate-200 pb-1.5">
              Trip Summary
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-slate-500 block text-[11px]">Trip Type:</span>
                <span className="font-medium text-slate-900 capitalize">
                  {submittedData.tripType.replace('-', ' ')}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Travel Date:</span>
                <span className="font-medium text-slate-900">
                  {submittedData.travelDate}
                  {submittedData.tripType === 'round-trip' && submittedData.returnDate && ` to ${submittedData.returnDate}`}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Pickup:</span>
                <span className="font-medium text-slate-900">{submittedData.pickupLocation}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Destination:</span>
                <span className="font-medium text-slate-900">{submittedData.destination}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Customer:</span>
                <span className="font-medium text-slate-900">{submittedData.customerName}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Mobile:</span>
                <span className="font-medium text-slate-900">{submittedData.mobileNumber}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs text-slate-500 text-center">
              Want immediate quotation details or have urgent travel requirements?
            </p>

            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${generateWhatsAppMessage(submittedData, enquiryRefId)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp with Details</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call TransitFleets ({BUSINESS_CONFIG.displayPhone})</span>
            </a>

            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:underline pt-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Submit Another Trip Enquiry</span>
            </button>
          </div>
        </div>
      ) : (
        /* Form Inputs */
        <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-4" noValidate>
          {/* Trip Type Segmented Control */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Trip Type <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200">
              {(['one-way', 'round-trip', 'multi-city'] as TripType[]).map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, tripType: type }));
                    if (errors.returnDate && type !== 'round-trip') {
                      setErrors(prev => ({ ...prev, returnDate: undefined }));
                    }
                  }}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all capitalize cursor-pointer ${
                    formData.tripType === type
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {type.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Pickup & Destination Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label
                htmlFor="pickupLocation"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Pickup Location <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  id="pickupLocation"
                  type="text"
                  placeholder="Enter pickup city or location"
                  value={formData.pickupLocation}
                  onChange={(e) => {
                    setFormData({ ...formData, pickupLocation: e.target.value });
                    if (errors.pickupLocation) setErrors({ ...errors, pickupLocation: undefined });
                  }}
                  className={`w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.pickupLocation
                      ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                      : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'
                  }`}
                />
              </div>
              {errors.pickupLocation && (
                <p className="text-[11px] text-rose-600 mt-1">{errors.pickupLocation}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="destination"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Destination <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  id="destination"
                  type="text"
                  placeholder="Enter destination"
                  value={formData.destination}
                  onChange={(e) => {
                    setFormData({ ...formData, destination: e.target.value });
                    if (errors.destination) setErrors({ ...errors, destination: undefined });
                  }}
                  className={`w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.destination
                      ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                      : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'
                  }`}
                />
              </div>
              {errors.destination && (
                <p className="text-[11px] text-rose-600 mt-1">{errors.destination}</p>
              )}
            </div>
          </div>

          {/* Multi-City details if selected */}
          {formData.tripType === 'multi-city' && (
            <div>
              <label
                htmlFor="multiCityStops"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Route &amp; Intermediate Cities / Stops
              </label>
              <input
                id="multiCityStops"
                type="text"
                placeholder="e.g. Pune → Mahabaleshwar → Panchgani → Pune"
                value={formData.multiCityStops || ''}
                onChange={(e) => setFormData({ ...formData, multiCityStops: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 transition-all"
              />
              <p className="text-[11px] text-slate-500 mt-0.5">
                List any sightseeing points, overnight halts, or additional cities.
              </p>
            </div>
          )}

          {/* Dates Row */}
          <div className={`grid gap-3.5 ${formData.tripType === 'round-trip' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
            <div>
              <label
                htmlFor="travelDate"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Travel Date <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  id="travelDate"
                  type="date"
                  min={todayString}
                  value={formData.travelDate}
                  onChange={(e) => {
                    setFormData({ ...formData, travelDate: e.target.value });
                    if (errors.travelDate) setErrors({ ...errors, travelDate: undefined });
                  }}
                  className={`w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.travelDate
                      ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                      : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'
                  }`}
                />
              </div>
              {errors.travelDate && (
                <p className="text-[11px] text-rose-600 mt-1">{errors.travelDate}</p>
              )}
            </div>

            {formData.tripType === 'round-trip' && (
              <div>
                <label
                  htmlFor="returnDate"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Return Date <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    id="returnDate"
                    type="date"
                    min={formData.travelDate || todayString}
                    value={formData.returnDate || ''}
                    onChange={(e) => {
                      setFormData({ ...formData, returnDate: e.target.value });
                      if (errors.returnDate) setErrors({ ...errors, returnDate: undefined });
                    }}
                    className={`w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.returnDate
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'
                    }`}
                  />
                </div>
                {errors.returnDate && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.returnDate}</p>
                )}
              </div>
            )}
          </div>

          {/* Passengers & Vehicle Preference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label
                htmlFor="passengers"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Passengers <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <select
                  id="passengers"
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 transition-all cursor-pointer"
                >
                  <option value="1-2">1 to 2 Passengers</option>
                  <option value="1-4">3 to 4 Passengers (Sedan fit)</option>
                  <option value="5-7">5 to 7 Passengers (SUV / MUV fit)</option>
                  <option value="8-12">8 to 12 Passengers (Minivan/Traveller)</option>
                  <option value="13+">13+ Passengers (Group Vehicle)</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="vehiclePreference"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Vehicle Preference
              </label>
              <div className="relative">
                <Car className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <select
                  id="vehiclePreference"
                  value={formData.vehiclePreference}
                  onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value as VehicleCategory })}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 transition-all cursor-pointer"
                >
                  <option value="any">Any Available (Best Fare)</option>
                  <option value="sedan">Sedan (Dzire, Aura, Amaze)</option>
                  <option value="suv-muv">SUV / MUV (Innova Crysta, Ertiga)</option>
                  <option value="premium">Premium (Fortuner, Luxury)</option>
                  <option value="group">Tempo Traveller / Group</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-slate-100 pt-3">
            <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Contact Details
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label
                  htmlFor="customerName"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    id="customerName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.customerName}
                    onChange={(e) => {
                      setFormData({ ...formData, customerName: e.target.value });
                      if (errors.customerName) setErrors({ ...errors, customerName: undefined });
                    }}
                    className={`w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.customerName
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'
                    }`}
                  />
                </div>
                {errors.customerName && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.customerName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Mobile Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    id="mobileNumber"
                    type="tel"
                    placeholder="10-digit mobile (e.g. 9881043606)"
                    value={formData.mobileNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, mobileNumber: e.target.value });
                      if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: undefined });
                    }}
                    className={`w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.mobileNumber
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'
                    }`}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.mobileNumber}</p>
                )}
              </div>
            </div>
          </div>

          {/* Email (Optional) */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-700 mb-1"
            >
              Email Address <span className="text-slate-400 font-normal">(Optional for booking quote)</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                value={formData.email || ''}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                className={`w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-rose-400 focus:ring-rose-200'
                    : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Additional Requirements (Optional) */}
          <div>
            <label
              htmlFor="additionalRequirements"
              className="block text-xs font-semibold text-slate-700 mb-1"
            >
              Additional Requirements <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              <textarea
                id="additionalRequirements"
                rows={2}
                placeholder="Any special requirements or travel details?"
                value={formData.additionalRequirements || ''}
                onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 transition-all resize-none"
              />
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 sm:py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 disabled:opacity-70 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Secondary Quick Contact Options */}
          <div className="grid grid-cols-2 gap-2.5 pt-1 text-center">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi TransitFleets, I would like to enquire about an outstation cab.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-emerald-300 bg-emerald-50/60 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 bg-slate-100/70 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-700" />
              <span>Call Now</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-400 text-center pt-1 leading-normal">
            No login or account creation required. Zero obligation quote.
          </p>
        </form>
      )}
    </div>
  );
};
