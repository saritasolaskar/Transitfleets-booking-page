export type TripType = 'one-way' | 'round-trip' | 'multi-city';

export type VehicleCategory =
  | 'sedan'
  | 'suv-muv'
  | 'premium'
  | 'group'
  | 'any';

export interface BookingFormData {
  pickupLocation: string;
  destination: string;
  tripType: TripType;
  travelDate: string;
  returnDate?: string;
  multiCityStops?: string;
  passengers: string;
  vehiclePreference: VehicleCategory;
  customerName: string;
  mobileNumber: string;
  email?: string;
  additionalRequirements?: string;
}

export interface FormErrors {
  pickupLocation?: string;
  destination?: string;
  travelDate?: string;
  returnDate?: string;
  passengers?: string;
  customerName?: string;
  mobileNumber?: string;
  email?: string;
}

export interface VehicleOption {
  id: string;
  category: VehicleCategory;
  title: string;
  models: string;
  passengerCapacity: string;
  luggageCapacity: string;
  description: string;
  imageUrl: string;
  idealFor: string[];
}

export interface PopularRoute {
  id: string;
  origin: string;
  destination: string;
  approxDistance: string;
  tripType: string;
  highlight: string;
}

export interface RegionCoverage {
  region: string;
  cities: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
