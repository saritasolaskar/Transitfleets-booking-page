import { VehicleOption, PopularRoute, RegionCoverage, FaqItem } from '../types';

export const BUSINESS_CONFIG = {
  companyName: 'TransitFleets',
  websiteUrl: 'https://www.transitfleets.com',
  pageUrl: 'https://www.transitfleets.com/outstation-cab-booking/',
  phone: '+919881043606',
  displayPhone: '+91 98810 43606',
  whatsappNumber: '919881043606',
  email: 'info@transitfleets.com',
  address: 'F no 103 Dhruva Complex, S.no 176/7/1, Dhamalwadi Fursungi, Pune 412308, Maharashtra, India',
  // API endpoint for future backend integration
  apiEndpoint: 'YOUR_API_ENDPOINT_HERE',
};

export const VEHICLE_OPTIONS: VehicleOption[] = [
  {
    id: 'sedan',
    category: 'sedan',
    title: 'Executive Sedan',
    models: 'Maruti Suzuki Dzire, Hyundai Aura, Honda Amaze',
    passengerCapacity: 'Up to 4 Passengers',
    luggageCapacity: '2 Medium Bags',
    description: 'Fuel-efficient, comfortable, and economical choice for solo travelers, couples, or small families on one-way or round-trip journeys.',
    imageUrl: '/src/assets/images/vehicle_sedan_1790592325458.jpg',
    idealFor: ['Business Meetings', 'Small Family Trips', 'Airport & Intercity Commutes']
  },
  {
    id: 'suv-muv',
    category: 'suv-muv',
    title: 'Spacious SUV / MUV',
    models: 'Toyota Innova Crysta, Maruti Suzuki Ertiga, Innova Hycross',
    passengerCapacity: '6 to 7 Passengers',
    luggageCapacity: '3-4 Large Bags',
    description: 'The preferred choice for long-distance highway comfort with ample legroom, generous boot space, and superior ride stability for families and teams.',
    imageUrl: '/src/assets/images/vehicle_suv_1790592348671.jpg',
    idealFor: ['Family Vacations', 'Hill Station Travel', 'Corporate Team Outings']
  },
  {
    id: 'premium',
    category: 'premium',
    title: 'Premium & Luxury Fleet',
    models: 'Toyota Fortuner, Mercedes-Benz, BMW, Toyota Vellfire',
    passengerCapacity: '4 to 6 Passengers',
    luggageCapacity: '3-4 Executive Bags',
    description: 'Distinguished executive travel with high-spec interiors, plush seating, and discretion for CXOs, VIP delegates, and luxury destination trips.',
    imageUrl: '/src/assets/images/vehicle_premium_1790592363090.jpg',
    idealFor: ['CXO & Client Transfers', 'High-Profile Events', 'Luxury Destination Journeys']
  },
  {
    id: 'group',
    category: 'group',
    title: 'Group Travel Vehicles',
    models: 'Force Tempo Traveller, Force Urbania (12 to 26 Seater)',
    passengerCapacity: '10 to 20+ Passengers',
    luggageCapacity: 'Dedicated Luggage Carrier',
    description: 'Customized group mobility with push-back seats, air conditioning, and professional highway chauffeurs for large family events and corporate delegations.',
    imageUrl: '/src/assets/images/vehicle_group_1790592384924.jpg',
    idealFor: ['Wedding Movements', 'Corporate Offsites', 'Pilgrimage & Multi-Day Tours']
  }
];

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    id: 'pune-goa',
    origin: 'Pune',
    destination: 'Goa',
    approxDistance: '~440 km',
    tripType: 'One-Way & Round-Trip',
    highlight: 'Scenic Western Ghats route, ideal for vacations and weekend escapes'
  },
  {
    id: 'mumbai-goa',
    origin: 'Mumbai',
    destination: 'Goa',
    approxDistance: '~580 km',
    tripType: 'One-Way & Round-Trip',
    highlight: 'NH66 highway comfort with flexible rest-stop scheduling'
  },
  {
    id: 'pune-mahabaleshwar',
    origin: 'Pune',
    destination: 'Mahabaleshwar',
    approxDistance: '~120 km',
    tripType: 'Day Trip & Weekend Tour',
    highlight: 'Ghat-expert chauffeurs for hilly terrain and sightseeing'
  },
  {
    id: 'pune-mumbai',
    origin: 'Pune',
    destination: 'Mumbai',
    approxDistance: '~150 km',
    tripType: 'Expressway Commute',
    highlight: 'Door-to-door expressway transfers, airport drops and corporate transit'
  },
  {
    id: 'mumbai-ahmedabad',
    origin: 'Mumbai',
    destination: 'Ahmedabad',
    approxDistance: '~520 km',
    tripType: 'Interstate Business Travel',
    highlight: 'Commercial corridor transit for business and industrial travel'
  },
  {
    id: 'delhi-jaipur',
    origin: 'Delhi NCR',
    destination: 'Jaipur',
    approxDistance: '~280 km',
    tripType: 'One-Way & Round-Trip',
    highlight: 'Delhi-Mumbai Expressway connectivity with smooth travel'
  },
  {
    id: 'bengaluru-mysuru',
    origin: 'Bengaluru',
    destination: 'Mysuru',
    approxDistance: '~145 km',
    tripType: 'Access-Controlled Expressway',
    highlight: 'Fast expressway transit for heritage visits and business meetings'
  },
  {
    id: 'mumbai-nashik',
    origin: 'Mumbai',
    destination: 'Nashik',
    approxDistance: '~165 km',
    tripType: 'One-Way & Round-Trip',
    highlight: 'Kasara Ghat scenic drive for wine country and pilgrimage travel'
  }
];

export const REGIONAL_COVERAGE: RegionCoverage[] = [
  {
    region: 'West India',
    cities: ['Mumbai', 'Pune', 'Goa', 'Ahmedabad', 'Surat', 'Nashik', 'Nagpur', 'Kolhapur', 'Aurangabad (Chh. Sambhajinagar)', 'Vadodara']
  },
  {
    region: 'North India',
    cities: ['Delhi NCR', 'Jaipur', 'Agra', 'Chandigarh', 'Amritsar', 'Dehradun', 'Shimla', 'Lucknow', 'Udaipur']
  },
  {
    region: 'South India',
    cities: ['Bengaluru', 'Chennai', 'Hyderabad', 'Mysuru', 'Kochi', 'Coimbatore', 'Mangaluru', 'Visakhapatnam']
  },
  {
    region: 'Central India',
    cities: ['Indore', 'Bhopal', 'Nagpur', 'Jabalpur', 'Gwalior', 'Raipur']
  },
  {
    region: 'East India',
    cities: ['Kolkata', 'Bhubaneswar', 'Ranchi', 'Patna', 'Jamshedpur', 'Siliguri']
  }
];

export const TRAVEL_PURPOSES = [
  {
    title: 'Family Trips',
    description: 'Comfortable transportation for holidays, family visits and leisure travel.',
    details: 'Spacious seating, ample boot capacity for multiple suitcases, and child-safe driving practices.'
  },
  {
    title: 'Corporate Travel',
    description: 'Reliable intercity transportation for business meetings, sales visits and corporate travel.',
    details: 'Punctual departures, well-groomed chauffeurs, and invoice-ready corporate accounting.'
  },
  {
    title: 'Airport Transfers',
    description: 'Convenient transfers between cities and airports.',
    details: 'Coordinated around actual flight timings to ensure timely arrivals at domestic and international terminals.'
  },
  {
    title: 'Events & Group Travel',
    description: 'Transportation arrangements for events, weddings, conferences and group movements.',
    details: 'Coordinated multi-vehicle fleets and large passenger coaches for smooth guest logistics.'
  },
  {
    title: 'Multi-Day Journeys',
    description: 'Vehicle and driver arrangements for extended travel itineraries.',
    details: 'Dedicated driver and cab retained throughout your multi-city exploration or regional business roadshow.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Share Your Trip Details',
    description: 'Enter your pickup location, destination, dates and passenger requirements.'
  },
  {
    step: '02',
    title: 'Receive Vehicle Options',
    description: 'Our team checks availability and shares suitable vehicle options.'
  },
  {
    step: '03',
    title: 'Get Your Quotation',
    description: 'Receive the applicable fare and trip details.'
  },
  {
    step: '04',
    title: 'Confirm Your Journey',
    description: 'Once you approve the quotation, the booking can be confirmed.'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do you provide one-way outstation cabs?',
    answer: 'Yes. One-way outstation travel can be arranged based on the pickup location, destination, date and vehicle availability.'
  },
  {
    id: 'faq-2',
    question: 'Do you provide round-trip cabs?',
    answer: 'Yes. Round-trip options are available for customers who require transportation for both onward and return journeys.'
  },
  {
    id: 'faq-3',
    question: 'Can I book a cab from any city in India?',
    answer: 'TransitFleets serves intercity and long-distance travel requirements across India, subject to route, date and vehicle availability.'
  },
  {
    id: 'faq-4',
    question: 'Which vehicles can I book?',
    answer: 'Vehicle options may include sedans, SUVs, MUVs, premium vehicles and group travel vehicles, depending on the location and requirement.'
  },
  {
    id: 'faq-5',
    question: 'Can I book a cab for multiple days?',
    answer: 'Yes. Multi-day vehicle and driver arrangements can be requested for suitable travel itineraries.'
  },
  {
    id: 'faq-6',
    question: 'Are tolls and parking included?',
    answer: 'Applicable tolls, parking, permits, driver allowances and other charges depend on the route and quotation. The applicable inclusions will be communicated before confirmation.'
  },
  {
    id: 'faq-7',
    question: 'Can I request a specific vehicle?',
    answer: 'You can request a preferred vehicle. Availability depends on the pickup location and travel date.'
  },
  {
    id: 'faq-8',
    question: 'How do I get an outstation cab quotation?',
    answer: 'Submit your trip details through the enquiry form or contact TransitFleets through WhatsApp or phone. Our team can then provide available vehicle options and the applicable quotation.'
  }
];
