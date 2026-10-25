# Assignment #5: JavaScript Basics (DOM Manipulation & Events)

- **Student Name:** Yermakov Ilya
- **Group:** IT-2503
- **University:** Astana IT University

---

## Part 1: Profile Object, Data Types & Arithmetic

### Task 1: The Personal Info Object
Created a `const userProfile` object containing multiple JavaScript data types:
- `name` (string): `"Yermakov Ilya"`
- `birthYear` (number): `2007`
- `isDeveloper` (boolean): `true`
- `hobbies` (array of strings): `["Coding", "Reading", "Chess"]`

### Task 2: Arithmetic Calculations & Metrics
- Dynamically calculated the user's age using arithmetic subtraction:
  `new Date().getFullYear() - userProfile.birthYear`
- Calculated secondary metrics:
  - Age in months: `age * 12`
  - Total hobbies count: `userProfile.hobbies.length`
- Rendered the metrics dynamically in the DOM profile card and logged the initial object and calculations to the browser console.

### Screenshot Part 1
<img width="532" height="706" alt="изображение" src="https://github.com/user-attachments/assets/e41249db-3c40-478e-b784-f490119fa60f" />

---

## Part 2: Form Input & Event Responses

### Task 3: HTML Form Setup
Implemented an HTML form containing:
- Text input for Username (`#usernameInput`)
- Number input for Birth Year (`#birthYearInput`)
- Action button labeled **"Create / Update Profile"** (`#submitProfileBtn`)
- Live feedback notification container (`#formFeedback`)

### Task 4: Event Listener & Real-Time DOM Update
- Attached a `submit` event listener to the form and invoked `event.preventDefault()` to stop page reloading.
- Added validation to prevent blank names, non-numeric values, or invalid birth years.
- Synchronized values directly with the `userProfile` object:
  - `userProfile.name = enteredName`
  - `userProfile.birthYear = enteredBirthYear`
- Recalculated age metrics and immediately updated the DOM profile display and developer console.

### Screenshot Part 2
<img width="531" height="706" alt="изображение" src="https://github.com/user-attachments/assets/f8a1a5eb-55da-4007-9ad8-c38af45c650f" />

---

## Part 3: DOM List Manipulation

### Task 5: Creating & Removing Elements
- Rendered an unordered list (`<ul id="hobbyList">`) pre-filled from `userProfile.hobbies`.
- **Add Item:**
  - Reads value from `#hobbyInput` and trims whitespace.
  - Rejects empty submissions with an error message.
  - Creates a new `<li>` element using `document.createElement("li")`.
  - Appends the element using `appendChild()`.
  - Pushes the item into `userProfile.hobbies` and increments the profile counter.
  - Clears the input field.
- **Remove Item:**
  - Safely checks if items exist in the list.
  - Removes the last item using `hobbyList.removeChild(hobbyList.lastElementChild)`.
  - Updates the state array using `userProfile.hobbies.pop()`.
  - Decrements the total hobbies counter.

### Screenshot Part 3
<img width="529" height="712" alt="изображение" src="https://github.com/user-attachments/assets/1c3b2e20-d86b-4d9e-9210-aa1e1e04c43c" />

---

## Summary of Work Process

1. **State-Driven Architecture:** A single central JavaScript object (`userProfile`) acts as the state source. All form submissions and list operations update the data model first before triggering DOM mutations.
2. **DOM Manipulation & Event Handling:** Utilized `document.getElementById()`, `addEventListener()`, `document.createElement()`, `appendChild()`, and `removeChild()`.
3. **Data Security & Validation:** Used `textContent` instead of `innerHTML` to prevent XSS vulnerabilities, and added input verification for name lengths and year ranges.
4. **User Experience:** Designed an accessible monochrome card layout with real-time feedback notifications and graceful handling of empty lists.
