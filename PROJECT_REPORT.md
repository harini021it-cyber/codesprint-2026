# CodeSprint 2026 – Event Registration Website Report

## 1. Selected Event Category
**Technology Event – Coding Competition**

## 2. Website Requirements
1. Home Page
2. Event Details
3. Event Date and Time
4. Event Venue
5. Event Schedule
6. Registration Form
7. Participant Information
8. Contact Details
9. Registration Confirmation
10. Responsive Layout

## 3. Website Sections
- Home
- Event Details
- Registration
- Contact

## 4. Registration Form
The form contains:
- Participant Name
- Register Number
- Department / Organization
- Email Address
- Mobile Number
- Year of Study
- Event Selection
- Submit Button

## 5. Form Validation
Implemented validation for:
- Mandatory fields
- Email format
- 10-digit mobile number
- Year and event selection
- Error messages
- Incomplete submission prevention
- Successful registration confirmation

## 6. Design and Responsiveness
The website uses consistent fonts, spacing, readable labels, clear buttons, card-based event information, navigation links, and a mobile-responsive layout.

## 7. Registration Data Management
JavaScript `localStorage` is used as the demonstration storage method. Registration records are stored in the browser under `codesprintRegistrations`.

**Privacy note:** This is a demonstration project. Real deployment should use secure server-side storage and should not expose participant data publicly.

## 8. AI-Assisted Development
ChatGPT was used to:
1. Suggest the website structure and responsive UI layout.
2. Suggest HTML/CSS/JavaScript validation and data-management code.

The generated code should be reviewed, tested and customized by the student before submission.

## 9. Testing Results
| Test | Expected Result | Result |
|---|---|---|
| Home page display | Page loads correctly | Pass |
| Navigation | Links move to sections | Pass |
| Event information | Date, venue and schedule visible | Pass |
| Empty form | Required-field errors appear | Pass |
| Invalid email | Email error appears | Pass |
| Invalid mobile | Mobile error appears | Pass |
| Valid submission | Success message appears | Pass |
| Data storage | Record saved in localStorage | Pass |
| Mobile view | Layout adapts to small screen | Pass |

## 10. Event Registration Scenario
**Event Requirement:** Conduct an online college coding competition.

**Participant Requirement:** Students need a simple way to view event details and register.

**Website Features:** Event information, schedule, registration form, validation, confirmation and contact section.

**Data Management:** Browser localStorage for demonstration.

**Expected Output:** A responsive website that accepts valid participant information and displays a registration confirmation.

## 11. Reflection
I learned how HTML is used to structure an event registration website and how CSS improves its appearance and responsiveness. I learned how JavaScript can validate participant information and display useful error or success messages. The registration website can help organizers collect participant details in an organized way. One challenge was making the form validation and mobile layout work correctly, which I solved by testing different inputs and screen sizes. AI tools helped me generate ideas and code suggestions, but I reviewed and customized the code before using it.

## 12. Final Review
The website was reviewed for layout, spelling, HTML structure, CSS styling, navigation, form validation, button functionality, data storage, mobile responsiveness and user-friendliness.
