/**
 * TransitFleets - Outstation Cab Booking
 * Pure JavaScript & Bootstrap 5 interactivity
 */

// Configuration
const BUSINESS_CONFIG = {
  phone: '+919881043606',
  displayPhone: '+91 98810 43606',
  whatsappNumber: '919881043606',
  apiEndpoint: 'YOUR_API_ENDPOINT_HERE' // Optional backend webhook/endpoint
};

// Regional coverage data
const REGION_DATA: Record<string, string[]> = {
  west: ['Mumbai', 'Pune', 'Goa', 'Ahmedabad', 'Surat', 'Nashik', 'Nagpur', 'Kolhapur', 'Aurangabad', 'Vadodara'],
  north: ['Delhi NCR', 'Jaipur', 'Agra', 'Chandigarh', 'Amritsar', 'Dehradun', 'Shimla', 'Lucknow', 'Udaipur'],
  south: ['Bengaluru', 'Chennai', 'Hyderabad', 'Mysuru', 'Kochi', 'Coimbatore', 'Mangaluru', 'Visakhapatnam'],
  central: ['Indore', 'Bhopal', 'Nagpur', 'Jabalpur', 'Gwalior', 'Raipur'],
  east: ['Kolkata', 'Bhubaneswar', 'Ranchi', 'Patna', 'Jamshedpur', 'Siliguri']
};

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const form = document.getElementById('outstation-enquiry-form') as HTMLFormElement | null;
  const formView = document.getElementById('form-view');
  const confirmationView = document.getElementById('confirmation-view');
  const returnDateContainer = document.getElementById('return-date-container');
  const multiCityContainer = document.getElementById('multicity-container');
  const pickupInput = document.getElementById('pickupLocation') as HTMLInputElement | null;
  const destinationInput = document.getElementById('destination') as HTMLInputElement | null;
  const travelDateInput = document.getElementById('travelDate') as HTMLInputElement | null;
  const returnDateInput = document.getElementById('returnDate') as HTMLInputElement | null;
  const multiCityInput = document.getElementById('multiCityStops') as HTMLInputElement | null;
  const passengersSelect = document.getElementById('passengers') as HTMLSelectElement | null;
  const vehicleSelect = document.getElementById('vehiclePreference') as HTMLSelectElement | null;
  const nameInput = document.getElementById('customerName') as HTMLInputElement | null;
  const mobileInput = document.getElementById('mobileNumber') as HTMLInputElement | null;
  const emailInput = document.getElementById('customerEmail') as HTMLInputElement | null;
  const requirementsInput = document.getElementById('additionalRequirements') as HTMLTextAreaElement | null;
  const tripTypeRadios = document.querySelectorAll('input[name="tripType"]') as NodeListOf<HTMLInputElement>;
  const resetBtn = document.getElementById('btn-reset-form');

  // Set min date to today for datepickers
  const today = new Date().toISOString().split('T')[0];
  if (travelDateInput) travelDateInput.min = today;
  if (returnDateInput) returnDateInput.min = today;

  // Sync return date min when travel date changes
  travelDateInput?.addEventListener('change', () => {
    if (returnDateInput && travelDateInput.value) {
      returnDateInput.min = travelDateInput.value;
      if (returnDateInput.value && returnDateInput.value < travelDateInput.value) {
        returnDateInput.value = travelDateInput.value;
      }
    }
  });

  // Handle Trip Type switching
  function updateTripTypeUI() {
    let selectedType = 'one-way';
    tripTypeRadios.forEach(radio => {
      if (radio.checked) selectedType = radio.value;
    });

    if (returnDateContainer) {
      returnDateContainer.style.display = selectedType === 'round-trip' ? 'block' : 'none';
      if (returnDateInput) {
        returnDateInput.required = selectedType === 'round-trip';
      }
    }

    if (multiCityContainer) {
      multiCityContainer.style.display = selectedType === 'multi-city' ? 'block' : 'none';
    }
  }

  tripTypeRadios.forEach(radio => {
    radio.addEventListener('change', updateTripTypeUI);
  });
  updateTripTypeUI();

  // Scroll smoothly to enquiry card
  function scrollToForm() {
    const card = document.getElementById('enquiry-card');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Global helper functions attached to window for interactive clicks
  (window as unknown as Record<string, unknown>).scrollToForm = scrollToForm;

  (window as unknown as Record<string, unknown>).selectTripType = (type: string) => {
    const targetRadio = document.querySelector(`input[name="tripType"][value="${type}"]`) as HTMLInputElement | null;
    if (targetRadio) {
      targetRadio.checked = true;
      updateTripTypeUI();
    }
    scrollToForm();
  };

  (window as unknown as Record<string, unknown>).selectRoute = (origin: string, dest: string) => {
    if (pickupInput) pickupInput.value = origin;
    if (destinationInput) destinationInput.value = dest;
    scrollToForm();
  };

  (window as unknown as Record<string, unknown>).selectVehicle = (category: string) => {
    if (vehicleSelect) {
      vehicleSelect.value = category;
    }
    scrollToForm();
  };

  (window as unknown as Record<string, unknown>).selectCity = (city: string) => {
    if (pickupInput && !pickupInput.value.trim()) {
      pickupInput.value = city;
    } else if (destinationInput) {
      destinationInput.value = city;
    }
    scrollToForm();
  };

  // Region tabs in "Travel Across India"
  const regionTabButtons = document.querySelectorAll('.region-tab-btn');
  const cityContainer = document.getElementById('region-cities-container');

  function renderRegionCities(regionKey: string) {
    if (!cityContainer) return;
    const cities = REGION_DATA[regionKey] || [];
    cityContainer.innerHTML = '';

    cities.forEach(city => {
      const col = document.createElement('div');
      col.className = 'col-6 col-sm-4 col-md-3 col-lg-auto flex-fill';
      col.innerHTML = `
        <button type="button" class="btn btn-outline-secondary btn-sm w-100 text-start d-flex align-items-center justify-content-between p-2 rounded-3 text-dark bg-light border-1" onclick="window.selectCity('${city}')">
          <span class="d-flex align-items-center gap-1.5 text-truncate">
            <i class="bi bi-geo-alt-fill text-primary"></i>
            <span class="small font-weight-medium">${city}</span>
          </span>
          <i class="bi bi-arrow-up-right small text-muted"></i>
        </button>
      `;
      cityContainer.appendChild(col);
    });
  }

  regionTabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      regionTabButtons.forEach(b => b.classList.remove('active', 'btn-dark', 'text-white'));
      regionTabButtons.forEach(b => b.classList.add('btn-light', 'text-dark'));

      const target = e.currentTarget as HTMLElement;
      target.classList.remove('btn-light', 'text-dark');
      target.classList.add('active', 'btn-dark', 'text-white');

      const regionKey = target.getAttribute('data-region') || 'west';
      renderRegionCities(regionKey);
    });
  });

  // Render initial cities (West India)
  renderRegionCities('west');

  // Form Validation & Submission
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let isValid = true;

      // Pickup validation
      if (!pickupInput?.value.trim()) {
        pickupInput?.classList.add('is-invalid');
        isValid = false;
      } else {
        pickupInput?.classList.remove('is-invalid');
      }

      // Destination validation
      if (!destinationInput?.value.trim()) {
        destinationInput?.classList.add('is-invalid');
        isValid = false;
      } else {
        destinationInput?.classList.remove('is-invalid');
      }

      // Travel Date validation
      if (!travelDateInput?.value) {
        travelDateInput?.classList.add('is-invalid');
        isValid = false;
      } else {
        travelDateInput?.classList.remove('is-invalid');
      }

      // Return Date validation (if round-trip)
      let selectedType = 'one-way';
      tripTypeRadios.forEach(r => { if (r.checked) selectedType = r.value; });

      if (selectedType === 'round-trip') {
        if (!returnDateInput?.value) {
          returnDateInput?.classList.add('is-invalid');
          isValid = false;
        } else if (travelDateInput?.value && returnDateInput.value < travelDateInput.value) {
          returnDateInput?.classList.add('is-invalid');
          isValid = false;
        } else {
          returnDateInput?.classList.remove('is-invalid');
        }
      }

      // Customer Name validation
      if (!nameInput?.value.trim()) {
        nameInput?.classList.add('is-invalid');
        isValid = false;
      } else {
        nameInput?.classList.remove('is-invalid');
      }

      // Indian Mobile Number validation (10 digits starting with 6-9)
      const rawMobile = mobileInput?.value.replace(/\D/g, '') || '';
      const isValidMobile =
        (rawMobile.length === 10 && /^[6-9]\d{9}$/.test(rawMobile)) ||
        (rawMobile.length === 12 && rawMobile.startsWith('91') && /^[6-9]\d{9}$/.test(rawMobile.substring(2)));

      if (!mobileInput?.value.trim() || !isValidMobile) {
        mobileInput?.classList.add('is-invalid');
        isValid = false;
      } else {
        mobileInput?.classList.remove('is-invalid');
      }

      // Email validation (optional)
      if (emailInput && emailInput.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          isValid = false;
        } else {
          emailInput.classList.remove('is-invalid');
        }
      }

      if (!isValid) {
        return;
      }

      // Submit State
      const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Submitting Enquiry...';
      }

      const refId = 'TF' + Math.floor(100000 + Math.random() * 900000);

      const tripData = {
        name: nameInput?.value.trim() || '',
        phone: mobileInput?.value.trim() || '',
        email: emailInput?.value.trim() || '',
        pickup: pickupInput?.value.trim() || '',
        destination: destinationInput?.value.trim() || '',
        tripType: selectedType,
        travelDate: travelDateInput?.value || '',
        returnDate: selectedType === 'round-trip' ? returnDateInput?.value || '' : '',
        multiCityStops: selectedType === 'multi-city' ? multiCityInput?.value.trim() || '' : '',
        passengers: passengersSelect?.value || '1-4',
        vehicle: vehicleSelect?.value || 'any',
        requirements: requirementsInput?.value.trim() || '',
        refId
      };

      // Optional API post
      if (BUSINESS_CONFIG.apiEndpoint && BUSINESS_CONFIG.apiEndpoint !== 'YOUR_API_ENDPOINT_HERE') {
        try {
          await fetch(BUSINESS_CONFIG.apiEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tripData)
          });
        } catch (err) {
          console.error('API Error:', err);
        }
      } else {
        // Small delay for natural feel
        await new Promise(r => setTimeout(r, 500));
      }

      // Populate Confirmation View
      const confRefEl = document.getElementById('conf-ref-id');
      const confTypeEl = document.getElementById('conf-trip-type');
      const confDatesEl = document.getElementById('conf-dates');
      const confPickupEl = document.getElementById('conf-pickup');
      const confDestEl = document.getElementById('conf-dest');
      const confNameEl = document.getElementById('conf-name');
      const confPhoneEl = document.getElementById('conf-phone');
      const confWhatsappLink = document.getElementById('conf-whatsapp-btn') as HTMLAnchorElement | null;

      if (confRefEl) confRefEl.textContent = '#' + refId;
      if (confTypeEl) confTypeEl.textContent = selectedType.replace('-', ' ').toUpperCase();
      if (confDatesEl) {
        confDatesEl.textContent = tripData.travelDate + (tripData.returnDate ? ` to ${tripData.returnDate}` : '');
      }
      if (confPickupEl) confPickupEl.textContent = tripData.pickup;
      if (confDestEl) confDestEl.textContent = tripData.destination;
      if (confNameEl) confNameEl.textContent = tripData.name;
      if (confPhoneEl) confPhoneEl.textContent = tripData.phone;

      // Construct WhatsApp message
      const waText = `*Outstation Cab Enquiry* (Ref: #${refId})

*Name:* ${tripData.name}
*Phone:* ${tripData.phone}${tripData.email ? `\n*Email:* ${tripData.email}` : ''}
*Pickup:* ${tripData.pickup}
*Destination:* ${tripData.destination}
*Trip Type:* ${selectedType.replace('-', ' ').toUpperCase()}
*Travel Date:* ${tripData.travelDate}${tripData.returnDate ? `\n*Return Date:* ${tripData.returnDate}` : ''}${tripData.multiCityStops ? `\n*Route Stops:* ${tripData.multiCityStops}` : ''}
*Passengers:* ${tripData.passengers}
*Vehicle Preference:* ${tripData.vehicle.toUpperCase()}
*Requirements:* ${tripData.requirements || 'None specified'}`;

      if (confWhatsappLink) {
        confWhatsappLink.href = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;
      }

      // Toggle views
      if (formView) formView.style.display = 'none';
      if (confirmationView) confirmationView.style.display = 'block';

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Get a Quote</span> <i class="bi bi-arrow-right ms-1"></i>';
      }

      scrollToForm();
    });
  }

  // Reset Button
  resetBtn?.addEventListener('click', () => {
    form?.reset();
    updateTripTypeUI();
    if (formView) formView.style.display = 'block';
    if (confirmationView) confirmationView.style.display = 'none';
    scrollToForm();
  });
});
