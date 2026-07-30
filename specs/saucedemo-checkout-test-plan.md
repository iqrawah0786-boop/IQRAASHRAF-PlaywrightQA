# SauceDemo Checkout Test Plan

## Overview
This expanded plan covers the complete checkout workflow for the SauceDemo application described in SCRUM-101. It includes inventory exploration, cart management, checkout form validation, order summary review, cancellation, confirmation, and navigation behavior.

## Application Under Test
- URL: https://www.saucedemo.com
- Username: standard_user
- Password: secret_sauce

## Scope
- Login and authentication behaviors
- Product inventory browsing and cart interactions
- Cart review and total calculation
- Checkout information validation
- Order overview and confirmation
- Navigation and cancellation behavior
- Negative and edge scenarios aligned with the story business rules

## Test Scenarios

### TC01 - Successful login to the inventory page
- Verify that a valid user can log in and land on the products page.

### TC02 - Invalid login is rejected with an error
- Verify that invalid credentials show an authentication error and keep the user on the login page.

### TC03 - Inventory products are visible and available for selection
- Verify that the inventory page loads products and that the Add to Cart actions are available.

### TC04 - Add a single item to the cart
- Verify that adding one product updates the cart badge and the cart state.

### TC05 - Add multiple items to the cart
- Verify that multiple products can be added and remain visible in the cart summary.

### TC06 - Remove an item from the cart from the inventory page
- Verify that removing a product decreases the cart count and updates the cart state.

### TC07 - Cart review page shows selected items and total
- Verify that the cart page displays item names, descriptions, prices, and totals.

### TC08 - Checkout is blocked when required fields are empty
- Verify that leaving the first name, last name, or postal code empty shows the correct validation error and blocks progression.

### TC09 - Checkout advances when all required fields are present
- Verify that the checkout form moves to the overview page when all required values are entered.

### TC10 - Order overview shows summary and payment details
- Verify that the overview page displays item summary, payment information, shipping information, and totals.

### TC11 - Finish order completes purchase successfully
- Verify that the Finish action leads to the confirmation page with a success message.

### TC12 - Cancel checkout returns the user to the inventory page
- Verify that canceling during checkout returns the user to the products page.

### TC13 - Back Home returns the user to inventory
- Verify that the confirmation page Back Home action returns the user to the products page.

### TC14 - Empty cart cannot proceed to checkout
- Verify that the cart state prevents checkout progression when no products are present.

## Test Data
- Valid credentials: standard_user / secret_sauce
- Invalid credentials: standard_user / wrong_password
- Valid first name: Jane
- Valid last name: Doe
- Valid postal code: 12345
- Empty values for validation testing

## Notes
- Tests should use stable data-test selectors where possible.
- Assertions should verify visible text, counters, and navigation state.
- The suite should be runnable in Chromium, Firefox, and WebKit.
