# Hotel Serenity Web App

## Project Objective
Hotel Serenity is a small hotel landing site with a reservation workflow that helps guests browse rooms, select their preferred stay, and confirm a booking request. The main objective is to provide a polished hotel experience with:

- Responsive navigation and mobile-friendly layout
- Multi-page content for home, rooms, and reservation
- Language switcher for English and French
- Theme toggle for light/dark presentation
- Reservation form with secure deposit payment requirement

## Core Functionality

### Navigation
- Fixed header navigation with links to Home, Rooms, and Reservation pages.
- Mobile menu toggle button shows or hides the navigation panel on small screens.
- The mobile toggle animates smoothly when opening and closing the mobile nav.
- The mobile menu closes cleanly when the user taps outside the panel.

### Language Support
- English and French translations are managed in `app.js`.
- The language selector saves the chosen language to `localStorage`.
- Page text updates automatically when the user switches languages.

### Theme Toggle
- The theme button switches between light and dark design modes.
- Theme preference can be persisted across visits using `localStorage`.

### Rooms Page
- Displays available room options with price and capacity details.
- Each room includes a "Book Now" button linking to the reservation form.

### Reservation Booking Flow
- The reservation form collects guest name, email, phone, room choice, arrival/departure dates, and special requests.
- A deposit percentage selector allows the guest to choose either 20% or 30% of the selected room price.
- The app calculates the required deposit amount for the chosen room and displays it.
- When the user clicks Confirm Booking, the form is hidden and the payment section is shown via an alert prompt.
- Clicking Pay or Decline displays a payment message, then returns the user to the reservation form so they can continue editing or re-submit.

### Payment Integration
- CinetPay is integrated via the client-side script `https://cdn.cinetpay.com/seamless/main.js`.
- Booking confirmation is only completed after a successful payment of the required deposit.
- If payment is not completed or the CinetPay service is unavailable, the booking request is not sent.

## Files

- `index.html` — Landing page for the hotel.
- `rooms.html` — Room selection page with price and booking links.
- `reservation.html` — Reservation form and payment deposit workflow.
- `styles.css` — Shared styling and responsive layout rules.
- `app.js` — Site behavior, translations, form submission, and CinetPay payment handling.

## Notes for Deployment
- The CinetPay integration in `app.js` uses placeholder values for `apikey`, `site_id`, and `notify_url`.
- Replace the placeholders with your actual CinetPay merchant credentials before production use.
- A real server endpoint should be configured to handle payment notifications from CinetPay.

## How to Use

1. Open the site in a browser.
2. Navigate to the Reservation page.
3. Fill in the required fields and choose a room.
4. Select a deposit percent (20% or 30%).
5. Pay the deposit via the CinetPay modal to confirm the booking request.

## Development

- No build step is required; the project runs as static HTML, CSS, and JavaScript.
- Open `index.html` in any modern browser to test the application.

## Important

This project is intended as a static demo. For real hotel booking handling, add a backend API and a secure notification endpoint for CinetPay.