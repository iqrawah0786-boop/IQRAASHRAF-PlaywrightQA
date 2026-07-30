# SCRUM-101 Expanded QA Report

## Executive Summary
- Earlier run: 9 tests
- Expanded run: 30 tests
- Result: 30 passed, 0 failed, 0 blocked
- Coverage expanded from a narrow happy-path checkout suite to a broader end-to-end workflow covering login, inventory, cart, validation, checkout, confirmation, and cancellation behavior.

## Why the count increased
The earlier run only covered a small subset of the workflow. The expanded suite now includes the full set of operations described in the Scrum-101 story:
- Login and authentication
- Inventory browsing and product selection
- Cart add/remove behavior
- Cart review and totals
- Checkout form validation
- Order overview and completion
- Cancellation and navigation back to the products page

## Test Suite Summary
### Files included
- tests/saucedemo-checkout/login-and-inventory.spec.ts
- tests/saucedemo-checkout/cart-and-checkout.spec.ts
- tests/saucedemo-checkout/cart-review-and-complete-order.spec.ts
- tests/saucedemo-checkout/checkout-validation-errors.spec.ts
- tests/saucedemo-checkout/cancel-checkout-flow.spec.ts

### Scenario coverage
1. Successful login to inventory
2. Invalid login error handling
3. Add a single product to the cart
4. Add multiple products to the cart
5. Remove a product from the cart
6. Review the cart page
7. Validate missing checkout fields
8. Advance checkout with valid values
9. Finish the order successfully
10. Cancel checkout and return to products

## Execution Evidence
- Command run: `npx playwright test tests/saucedemo-checkout --reporter=line`
- Result: 30 passed (1.5m)

## Quality Assessment
- The checkout flow is now covered much more comprehensively.
- The earlier 9-test result was a smaller subset of scenarios.
- The expanded suite better reflects the full business scope in the user story and acceptance criteria.

## Recommendations
- Keep this broader suite as the baseline regression suite.
- Add more negative cases such as special-character input, empty cart checkout attempts, and browser-specific visual checks.
- Add CI execution so this suite runs automatically on future changes.
