# SauceDemo Checkout Test Plan

## Overview
This plan covers the checkout workflow for the SauceDemo e-commerce application for user story SCRUM-101. The scenarios focus on cart review, mandatory checkout form validation, order summary, order completion, and cancellation behavior.

## Application Under Test
- URL: https://www.saucedemo.com
- Username: standard_user
- Password: secret_sauce

## Scope
- Happy path checkout from product selection to order confirmation
- Mandatory field validation for checkout information
- Navigation and cancellation flow during checkout
- Cart review and financial summary validation

## Test Scenarios

### TC01 - Complete checkout from cart to confirmation
**Objective:** Verify that a logged-in user can review the cart, enter valid information, review the order, and complete the purchase.

**Steps:**
1. Log in with the provided credentials.
2. Add one or more products to the cart.
3. Open the cart and verify that the selected items and total are shown.
4. Click Checkout.
5. Enter valid first name, last name, and postal code.
6. Continue to the overview page.
7. Review the order summary and click Finish.

**Expected Results:**
- The cart displays the selected products and total amount.
- The user reaches the information form and then the overview page.
- The order confirmation page shows a success message and a Back Home button.

### TC02 - Validate mandatory checkout fields
**Objective:** Ensure the checkout form prevents progress when required fields are missing.

**Steps:**
1. Log in and add a product to the cart.
2. Start checkout.
3. Leave the first name, last name, or postal code empty and click Continue.
4. Repeat with different combinations of missing values.

**Expected Results:**
- The user remains on the information page.
- Error messages indicate which field is required.
- The order cannot continue until all required fields are provided.

### TC03 - Cancel checkout flow
**Objective:** Confirm that the user can cancel the checkout process and return to the cart.

**Steps:**
1. Log in and add a product to the cart.
2. Start checkout, enter valid information, and continue to the overview page.
3. Click Cancel.

**Expected Results:**
- The user returns to the cart page.
- The checkout flow is interrupted without completing the order.

## Test Data
- Valid first name: Jane
- Valid last name: Doe
- Valid postal code: 12345
- Empty values for validation testing

## Notes
- Tests should use accessible selectors where possible.
- Assertions should verify visible text and state changes.
- The suite should be runnable in Chromium, Firefox, and WebKit.
