// Translation table for English and French.
// Each top-level language object contains page-specific text keys.
const translations = {
  en: {
    common: {
      brand: 'Hotel Serenity',
      home: 'Home',
      rooms: 'Rooms',
      reservation: 'Reservation',
      english: 'English',
      french: 'Français'
    },
    index: {
      eyebrow: 'Discover premium comfort in Douala',
      heroTitle: 'Stay in stylish rooms with modern service and thoughtful amenities.',
      heroText: 'Hotel Serenity offers free Wi-Fi, a restaurant, pool access, and 24/7 guest care to make every stay memorable.',
      viewRooms: 'View Rooms',
      learnMore: 'Learn More',
      aboutTitle: 'About Our Hotel',
      aboutText: 'A modern hotel located in Douala with premium services, comfortable rooms, and exceptional hospitality.',
      comfortTitle: 'Comfort & Convenience',
      comfortText: 'Enjoy elegantly appointed rooms, free Wi-Fi, secure parking, and a welcoming environment for business or leisure stays.',
      diningTitle: 'Dining & Relaxation',
      diningText: 'Relax in our restaurant, swim in the outdoor pool, and unwind with attentive service any time of day.',
      servicesTitle: 'Hotel Services',
      servicesText: 'Everything you need for a comfortable stay, delivered with warm hospitality and modern style.',
      wifiTitle: 'Free Wi-Fi',
      wifiText: 'High-speed internet is available throughout the hotel for work, entertainment, and staying connected.',
      poolTitle: 'Pool & Wellness',
      poolText: 'Enjoy a refreshing swim or relax by the pool after a long day of meetings or sightseeing.',
      restaurantTitle: 'Restaurant',
      restaurantText: 'Savor delicious meals prepared daily with local and international flavors in a relaxed atmosphere.',
      guestCareTitle: '24/7 Guest Care',
      guestCareText: 'Reception and support are available around the clock to help with requests and travel plans.',
      footer: '© 2026 Hotel Serenity. Stylish stays in Douala.'
    },
    rooms: {
      pageTitle: 'Our Rooms & Suites',
      pageSubtitle: 'Choose the room that fits your travel style. Each suite offers premium comfort and thoughtful amenities.',
      simpleRoom: 'Simple Room',
      simplePrice: 'Price: 45,000 FCFA / Night',
      simpleCapacity: 'Capacity: 1-2 guests',
      doubleRoom: 'Double Room',
      doublePrice: 'Price: 65,000 FCFA / Night',
      doubleCapacity: 'Capacity: 2-3 guests',
      suite: 'Suite',
      suitePrice: 'Price: 95,000 FCFA / Night',
      suiteCapacity: 'Capacity: 2-4 guests',
      bookNow: 'Book Now',
      footer: '© 2026 Hotel Serenity. Book your stay today.'
    },
    reservation: {
      pageTitle: 'Book Your Stay',
      pageSubtitle: 'Reserve a room with ease and let us handle the rest. Complete the form below to request your booking.',
      fullNameLabel: 'Full Name*',
      fullNamePlaceholder: 'John Doe',
      emailLabel: 'Email*',
      emailPlaceholder: 'name@example.com',
      phoneLabel: 'Phone Number*',
      phonePlaceholder: '+237 699 123 456',
      roomLabel: 'Preferred Room*',
      arrivalLabel: 'Arrival Date*',
      departureLabel: 'Departure Date*',
      requestLabel: 'Special Requests',
      requestPlaceholder: 'Any food, accessibility, or room preferences?',
      submitButton: 'Confirm Booking',
      noteText: 'We will review your booking and contact you with confirmation details.',
      statusInvalid: 'Please complete all required booking fields.',
      statusDepositRequired: 'Please select a deposit percent (20% or 30%) to continue.',
      statusPaymentUnavailable: 'Payment service is unavailable. Please try again later.',
      statusPaymentDeclined: 'Payment was not completed. Booking request was not sent.',
      statusSuccess: 'Deposit received successfully. Your booking request has been confirmed.',
      footer: '© 2026 Hotel Serenity. Your comfortable Douala retreat.'
    }
  },
  fr: {
    common: {
      brand: 'Hôtel Sérénité',
      home: 'Accueil',
      rooms: 'Chambres',
      reservation: 'Réservation',
      english: 'Anglais',
      french: 'Français'
    },
    index: {
      eyebrow: 'Découvrez le confort premium à Douala',
      heroTitle: 'Séjournez dans des chambres élégantes avec un service moderne et des équipements attentionnés.',
      heroText: 'L’Hôtel Sérénité propose Wi-Fi gratuit, restaurant, piscine et service 24h/24 pour rendre chaque séjour mémorable.',
      viewRooms: 'Voir les Chambres',
      learnMore: 'En savoir plus',
      aboutTitle: 'À propos de notre hôtel',
      aboutText: 'Un hôtel moderne situé à Douala avec des services premium, des chambres confortables et une hospitalité exceptionnelle.',
      comfortTitle: 'Confort & Commodité',
      comfortText: 'Profitez de chambres élégantes, du Wi-Fi gratuit, d’un parking sécurisé et d’un accueil chaleureux pour un séjour d’affaires ou de loisirs.',
      diningTitle: 'Restauration & Détente',
      diningText: 'Détendez-vous dans notre restaurant, nagez dans la piscine extérieure et profitez d’un service attentionné à tout moment.',
      servicesTitle: 'Nos Services',
      servicesText: 'Tout ce dont vous avez besoin pour un séjour confortable, avec hospitalité chaleureuse et style moderne.',
      wifiTitle: 'Wi-Fi Gratuit',
      wifiText: 'Internet haut débit disponible dans tout l’hôtel pour travailler, se divertir et rester connecté.',
      poolTitle: 'Piscine & Bien-être',
      poolText: 'Profitez d’une baignade rafraîchissante ou détendez-vous au bord de la piscine après une longue journée.',
      restaurantTitle: 'Restaurant',
      restaurantText: 'Savourez des plats délicieux préparés quotidiennement avec des saveurs locales et internationales.',
      guestCareTitle: 'Service 24h/24',
      guestCareText: 'La réception et le service d’assistance sont disponibles 24h/24 pour répondre à vos demandes et organiser vos voyages.',
      footer: '© 2026 Hôtel Sérénité. Séjours élégants à Douala.'
    },
    rooms: {
      pageTitle: 'Nos Chambres & Suites',
      pageSubtitle: 'Choisissez la chambre qui correspond à votre style de voyage. Chaque suite offre un confort premium et des équipements soignés.',
      simpleRoom: 'Chambre Simple',
      simplePrice: 'Prix : 45 000 FCFA / Nuit',
      simpleCapacity: 'Capacité : 1-2 personnes',
      doubleRoom: 'Chambre Double',
      doublePrice: 'Prix : 65 000 FCFA / Nuit',
      doubleCapacity: 'Capacité : 2-3 personnes',
      suite: 'Suite',
      suitePrice: 'Prix : 95 000 FCFA / Nuit',
      suiteCapacity: 'Capacité : 2-4 personnes',
      bookNow: 'Réserver',
      footer: '© 2026 Hôtel Sérénité. Réservez votre séjour aujourd’hui.'
    },
    reservation: {
      pageTitle: 'Réservez votre séjour',
      pageSubtitle: 'Réservez une chambre facilement et laissez-nous gérer le reste. Remplissez le formulaire ci-dessous pour soumettre votre réservation.',
      fullNameLabel: 'Nom complet*',
      fullNamePlaceholder: 'Jean Dupont',
      emailLabel: 'Email*',
      emailPlaceholder: 'nom@example.com',
      phoneLabel: 'Téléphone*',
      phonePlaceholder: '+237 699 123 456',
      roomLabel: 'Chambre préférée*',
      arrivalLabel: 'Date d’arrivée*',
      departureLabel: 'Date de départ*',
      requestLabel: 'Demandes spéciales',
      requestPlaceholder: 'Toute demande de nourriture, accessibilité ou préférence de chambre ?',
      submitButton: 'Confirmer la réservation',
      noteText: 'Nous examinerons votre réservation et vous contacterons avec des détails de confirmation.',
      statusInvalid: 'Veuillez compléter tous les champs obligatoires.',
      statusDepositRequired: 'Veuillez sélectionner un pourcentage d’acompte (20 % ou 30 %) pour continuer.',
      statusPaymentUnavailable: 'Le service de paiement est indisponible. Veuillez réessayer plus tard.',
      statusPaymentDeclined: 'Le paiement n’a pas été complété. La réservation n’a pas été envoyée.',
      statusSuccess: 'Acompte reçu avec succès. Votre demande de réservation est confirmée.',
      footer: '© 2026 Hôtel Sérénité. Votre retraite confortable à Douala.'
    }
  }
};

/*
  getStoredLanguage:
  Reads the user's saved language preference from localStorage. If a valid value
  ('en' or 'fr') is stored, that value is returned. If no value is stored, the
  browser's language is checked and French is selected only when the browser
  language starts with 'fr'. Otherwise English is chosen as the default.
*/
function getStoredLanguage() {
  const stored = localStorage.getItem('hotelLang');

  // Accept only recognized language values, otherwise fallback.
  if (stored && ['en', 'fr'].includes(stored)) {
    return stored;
  }

  return navigator.language.startsWith('fr') ? 'fr' : 'en';
}

/*
  t:
  Looks up a translation string by using a dotted key path, for example
  'reservation.pageTitle'. It traverses the selected language object and returns
  the translated text. If the requested translation does not exist, it returns
  the key itself to make missing text easier to debug.
*/
function t(key, lang) {
  const value = key.split('.').reduce((current, segment) => {
    // Stop early if the current path does not exist.
    if (!current) return undefined;
    return current[segment];
  }, translations[lang] || translations.en);

  // If translation not found, return the key for debugging.
  return value || key;
}

/*
  translatePage:
  Applies the selected language to the page by setting the document language,
  replacing every element's text content that has a data-i18n attribute, and
  updating placeholders for any input or textarea elements that have a
  data-i18n-placeholder attribute.
*/
function translatePage(lang) {
  document.documentElement.lang = lang;

  // Replace text content for elements marked with data-i18n.
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = t(element.dataset.i18n, lang);
    if (translation) {
      element.textContent = translation;
    }
  });

  // Replace placeholder text for inputs and textareas.
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const translation = t(element.dataset.i18nPlaceholder, lang);
    if (translation) {
      element.placeholder = translation;
    }
  });
}

/*
  setLanguage:
  Saves the selected language to localStorage, updates the visible language
  selector value, and then applies the translated content across the page.
  This ensures the chosen language is persisted across reloads.
*/
function setLanguage(lang) {
  if (!['en', 'fr'].includes(lang)) {
    lang = 'en';
  }

  localStorage.setItem('hotelLang', lang);

  const languageSwitcher = document.getElementById('languageSwitcher');
  if (languageSwitcher) {
    languageSwitcher.value = lang;
  }

  translatePage(lang);
}

/*
  getStoredTheme:
  Retrieves the theme preference from localStorage. If the saved value is
  'light' or 'dark', it is returned. Otherwise the function defaults to 'light'.
*/
function getStoredTheme() {
  const stored = localStorage.getItem('hotelTheme');

  // Validate stored value before accepting it.
  if (stored && ['light', 'dark'].includes(stored)) {
    return stored;
  }
  return 'light';
}

/*
  applyTheme:
  Accepts a theme name ('light' or 'dark') and applies it to the document
  by setting a data attribute on the body. It also stores the preference so the
  user sees the same theme after page reloads, and updates the theme toggle
  button label for clarity.
*/
function applyTheme(theme) {
  if (!['light', 'dark'].includes(theme)) {
    theme = 'light';
  }

  document.body.dataset.theme = theme;
  localStorage.setItem('hotelTheme', theme);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

/*
  toggleMobileNav:
  Opens or closes the mobile navigation menu by toggling the 'open' class on
  the nav links container. It also toggles a body-level class for the overlay
  backdrop, allowing the page to display a dimmed background when the menu is open.
*/
function toggleMobileNav() {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;

  const isOpen = navLinks.classList.toggle('open');
  document.body.classList.toggle('nav-open', isOpen);
}

/*
  closeMobileNav:
  Ensures the mobile navigation closes cleanly when the user clicks the close
  button or taps outside the open menu. It removes both the visible open state
  and the page overlay state from the body.
*/
function closeMobileNav() {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return; // If nav does not exist, do nothing.

  navLinks.classList.remove('open');
  document.body.classList.remove('nav-open');
}

/*
  Initialization block:
  Runs once the DOM is ready. It configures language selection, theme toggling,
  mobile navigation behavior, and reservation page-specific form handling when
  the current page is the reservation form.
*/
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');

  // Prefer language from query string, otherwise use stored/browser preference.
  const lang = queryLang && ['en', 'fr'].includes(queryLang) ? queryLang : getStoredLanguage();
  setLanguage(lang);

  const languageSwitcher = document.getElementById('languageSwitcher');
  if (languageSwitcher) {
    languageSwitcher.addEventListener('change', (event) => setLanguage(event.target.value));
  }

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    applyTheme(getStoredTheme());
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  const mobileNavToggle = document.getElementById('mobileNavToggle');
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', toggleMobileNav);
  }

  const mobileNavClose = document.getElementById('mobileNavClose');
  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
  }

  /*
    Dismiss mobile navigation when the user clicks outside an open nav panel.
    This keeps the mobile menu from remaining open after tapping on page content.
  */
  document.addEventListener('click', (event) => {
    const navLinks = document.querySelector('.nav-links');
    const target = event.target;
    if (navLinks && navLinks.classList.contains('open')) {
      const mobileNavToggle = document.getElementById('mobileNavToggle');
      if (!navLinks.contains(target) && target !== mobileNavToggle) {
        closeMobileNav();
      }
    }
  });

  /*
    Only initialize reservation-specific behavior on the reservation page.
    This keeps the booking logic isolated and avoids executing payment code on other pages.
  */
  const page = document.body.dataset.page;
  if (page === 'reservation') {
    const form = document.getElementById('bookingForm');                                // Select the reservation form element.
    const status = document.getElementById('status');                                   // Status message shown to the user.
    const roomSelect = document.getElementById('room-select');                          // Room type selector.
    const depositSelect = document.getElementById('depositPercent');                    // Deposit percent selector.
    const depositPreview = document.getElementById('depositAmountPreview');             // Text preview for the deposit amount.

    const roomPrices = {
      'Simple Room': 45000,
      'Double Room': 65000,
      'Suite': 95000
    };                                                                                 // Map each room type to a base price.

    // Format numeric amount into localized currency string.
    function formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'XAF',
        maximumFractionDigits: 0
      }).format(amount);
    }

    // Calculate the deposit amount based on selected room price and percent.
    function calculateDepositAmount() {
      const selectedRoom = roomSelect ? roomSelect.value : '';
      const selectedPercent = depositSelect ? Number(depositSelect.value) : 0;
      const price = roomPrices[selectedRoom] || 0;
      return Math.round((selectedPercent / 100) * price);
    }

    /*
      updateDepositDisplay:
      Updates the visible deposit amount text whenever the room type or deposit
      percentage changes. If either value is missing, it prompts the user to select
      both values before displaying the calculated amount.
    */
    function updateDepositDisplay() {
      const selectedRoom = roomSelect ? roomSelect.value : '';
      const selectedPercent = depositSelect ? Number(depositSelect.value) : 0;
      const price = roomPrices[selectedRoom] || 0;

      if (!selectedRoom || !selectedPercent) {
        depositPreview.textContent = 'Select room and deposit percent to calculate.';
        return;
      }

      const depositAmount = calculateDepositAmount();
      depositPreview.textContent = `You must pay ${formatCurrency(depositAmount)} now to reserve the ${selectedRoom}.`;
    }

    /*
      getRoomFromQuery:
      Reads the URL query string to determine whether a room type was passed via
      the 'room' parameter. If the room name is valid, the value is returned.
      Otherwise this returns null so no invalid room selection is applied.
    */
    function getRoomFromQuery() {
      const params = new URLSearchParams(window.location.search);
      const room = params.get('room');
      return room && roomPrices[room] ? room : null;
    }

    if (roomSelect) {
      const roomFromUrl = getRoomFromQuery();
      if (roomFromUrl) {
        roomSelect.value = roomFromUrl;                                                     // Preselect room type from the rooms page link.
      }
      roomSelect.addEventListener('change', updateDepositDisplay);                       // Recompute deposit when the user changes room type.
    }

    if (depositSelect) {
      depositSelect.addEventListener('change', updateDepositDisplay);                   // Recompute deposit when the user changes percent.
    }

    updateDepositDisplay();                                                              // Initialize the deposit preview on page load.

    /*
      Reservation submit handler (first step):
      - Validates the form fields and deposit selection.
      - If valid, shows the `#paymentSection` so the user can choose to pay
        the deposit now or decline.
      - Actual payment is performed only when the user clicks the Pay button.
    */
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission.
      const currentLang = localStorage.getItem('hotelLang') || 'en';

      // Basic HTML5 form validation first.
      if (!form.checkValidity()) {
        status.textContent = t('reservation.statusInvalid', currentLang);
        status.style.color = 'var(--danger)';
        return;
      }

      // Ensure deposit percent is chosen (20 or 30).
      const selectedPercent = Number(depositSelect.value);
      if (![20, 30].includes(selectedPercent)) {
        status.textContent = t('reservation.statusDepositRequired', currentLang);
        status.style.color = 'var(--danger)';
        return;
      }

      // Calculate deposit and reveal the payment UI for user action.
      const depositAmount = calculateDepositAmount();
      const paymentSection = document.getElementById('paymentSection');
      const paymentSummary = document.getElementById('paymentSummary');
      const paymentMessage = document.getElementById('paymentMessage');

      paymentSummary.textContent = `Deposit required: ${formatCurrency(depositAmount)} — you may pay now or decline.`;
      paymentMessage.textContent = '';
      if (paymentSection) paymentSection.style.display = 'block';

      // Focus the Pay button for convenience.
      const payButton = document.getElementById('payButton');
      if (payButton) payButton.focus();
    });

    // Payment controls: pay or decline
    const payButton = document.getElementById('payButton');
    const declineButton = document.getElementById('declineButton');
    const paymentMessage = document.getElementById('paymentMessage');

    if (declineButton) {
      // If user declines, hide payment UI and show a message; they can edit the form again.
      declineButton.addEventListener('click', () => {
        const paymentSection = document.getElementById('paymentSection');
        if (paymentSection) paymentSection.style.display = 'none';
        if (paymentMessage) {
          paymentMessage.textContent = 'You declined to pay the deposit. Booking not submitted.';
          paymentMessage.style.color = 'var(--muted)';
        }
        status.textContent = 'Booking not submitted.';
        status.style.color = 'var(--muted)';
      });
    }

    if (payButton) {
      payButton.addEventListener('click', async () => {
        const currentLang = localStorage.getItem('hotelLang') || 'en';
        const depositAmount = calculateDepositAmount();

        // Disable the button until submission finishes to prevent duplicates.
        payButton.disabled = true;
        if (paymentMessage) {
          paymentMessage.textContent = `Submitting booking for ${formatCurrency(depositAmount)} deposit...`;
          paymentMessage.style.color = 'var(--accent)';
        }

        try {
          const formData = new FormData(form);
          const resp = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { Accept: 'application/json' }
          });

          if (resp.ok) {
            status.textContent = t('reservation.statusSuccess', currentLang);
            status.style.color = 'var(--accent)';
            form.reset();
            updateDepositDisplay();
            const paymentSection = document.getElementById('paymentSection');
            if (paymentSection) paymentSection.style.display = 'none';
            if (paymentMessage) paymentMessage.textContent = 'Booking submitted successfully.';
          } else {
            if (paymentMessage) {
              paymentMessage.textContent = 'Booking submission failed. Please try again or contact support.';
              paymentMessage.style.color = 'var(--danger)';
            }
          }
        } catch (err) {
          if (paymentMessage) {
            paymentMessage.textContent = 'Network error while submitting booking.';
            paymentMessage.style.color = 'var(--danger)';
          }
        } finally {
          payButton.disabled = false;
        }
      });
    }
  }
});
