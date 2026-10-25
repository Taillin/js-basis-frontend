const userProfile = {
  name: "Yermakov Ilya",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["Coding", "Reading", "Chess"]
};

const profileName = document.getElementById("profileName");
const profileBirthYear = document.getElementById("profileBirthYear");
const profileAge = document.getElementById("profileAge");
const profileAgeMonths = document.getElementById("profileAgeMonths");
const profileStatus = document.getElementById("profileStatus");
const profileHobbiesCount = document.getElementById("profileHobbiesCount");
const avatarInitial = document.getElementById("avatarInitial");

const profileForm = document.getElementById("profileForm");
const usernameInput = document.getElementById("usernameInput");
const birthYearInput = document.getElementById("birthYearInput");
const formFeedback = document.getElementById("formFeedback");

const hobbyInput = document.getElementById("hobbyInput");
const addHobbyBtn = document.getElementById("addHobbyBtn");
const removeHobbyBtn = document.getElementById("removeHobbyBtn");
const hobbyList = document.getElementById("hobbyList");
const hobbyFeedback = document.getElementById("hobbyFeedback");
const emptyListNotice = document.getElementById("emptyListNotice");

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function calculateAgeInMonths(age) {
  return age * 12;
}

function showFeedback(element, message, type) {
  element.textContent = message;
  element.className = `feedback-message ${type}`;
  setTimeout(() => {
    if (element.textContent === message) {
      element.textContent = "";
      element.className = "feedback-message";
    }
  }, 3000);
}

function updateProfileDisplay() {
  const currentAge = calculateAge(userProfile.birthYear);
  const ageMonths = calculateAgeInMonths(currentAge);

  profileName.textContent = userProfile.name;
  profileBirthYear.textContent = userProfile.birthYear;
  profileAge.textContent = `${currentAge} years old`;
  profileAgeMonths.textContent = `${ageMonths} months`;
  profileStatus.textContent = userProfile.isDeveloper ? "Active Developer" : "Learner";
  profileHobbiesCount.textContent = userProfile.hobbies.length;

  if (userProfile.name.trim().length > 0) {
    avatarInitial.textContent = userProfile.name.trim().charAt(0).toUpperCase();
  } else {
    avatarInitial.textContent = "U";
  }
}

function updateHobbiesCountDisplay() {
  profileHobbiesCount.textContent = userProfile.hobbies.length;
}

function checkEmptyListNotice() {
  if (userProfile.hobbies.length === 0) {
    emptyListNotice.classList.remove("hidden");
  } else {
    emptyListNotice.classList.add("hidden");
  }
}

function initializeHobbyList() {
  hobbyList.innerHTML = "";
  userProfile.hobbies.forEach((hobby) => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbyList.appendChild(li);
  });
  checkEmptyListNotice();
}

function handleProfileSubmit(event) {
  event.preventDefault();

  const enteredName = usernameInput.value.trim();
  const enteredBirthYear = parseInt(birthYearInput.value, 10);
  const currentYear = new Date().getFullYear();

  if (enteredName === "") {
    showFeedback(formFeedback, "Validation Error: Username cannot be blank.", "error");
    usernameInput.focus();
    return;
  }

  if (isNaN(enteredBirthYear) || enteredBirthYear < 1900 || enteredBirthYear > currentYear) {
    showFeedback(formFeedback, `Validation Error: Enter a valid year between 1900 and ${currentYear}.`, "error");
    birthYearInput.focus();
    return;
  }

  userProfile.name = enteredName;
  userProfile.birthYear = enteredBirthYear;

  updateProfileDisplay();
  showFeedback(formFeedback, "Profile updated successfully!", "success");

  const updatedAge = calculateAge(userProfile.birthYear);
  const updatedAgeInMonths = calculateAgeInMonths(updatedAge);

  console.log("Updated User Profile:", userProfile);
  console.log("Recalculated Age:", updatedAge);
  console.log("Recalculated Age in Months:", updatedAgeInMonths);
}

function handleAddHobby() {
  const newHobby = hobbyInput.value.trim();

  if (newHobby === "") {
    showFeedback(hobbyFeedback, "Validation Error: Please enter a hobby name.", "error");
    hobbyInput.focus();
    return;
  }

  userProfile.hobbies.push(newHobby);

  const li = document.createElement("li");
  li.textContent = newHobby;
  hobbyList.appendChild(li);

  hobbyInput.value = "";
  updateHobbiesCountDisplay();
  checkEmptyListNotice();
  showFeedback(hobbyFeedback, `Added "${newHobby}" to hobbies.`, "success");

  console.log("Hobby Added:", newHobby);
  console.log("Updated Hobbies Array:", userProfile.hobbies);
  console.log("Updated Total Hobbies:", userProfile.hobbies.length);
}

function handleRemoveHobby() {
  if (userProfile.hobbies.length === 0) {
    showFeedback(hobbyFeedback, "Notice: No hobbies left to remove.", "error");
    return;
  }

  const removedHobby = userProfile.hobbies.pop();

  if (hobbyList.lastElementChild) {
    hobbyList.removeChild(hobbyList.lastElementChild);
  }

  updateHobbiesCountDisplay();
  checkEmptyListNotice();
  showFeedback(hobbyFeedback, `Removed "${removedHobby}" from hobbies.`, "success");

  console.log("Hobby Removed:", removedHobby);
  console.log("Updated Hobbies Array:", userProfile.hobbies);
  console.log("Updated Total Hobbies:", userProfile.hobbies.length);
}

console.log("Initial User Profile:", userProfile);
console.log("Calculated Age:", calculateAge(userProfile.birthYear));
console.log("Age in Months:", calculateAgeInMonths(calculateAge(userProfile.birthYear)));
console.log("Total Hobbies Count:", userProfile.hobbies.length);

usernameInput.value = userProfile.name;
birthYearInput.value = userProfile.birthYear;

updateProfileDisplay();
initializeHobbyList();

profileForm.addEventListener("submit", handleProfileSubmit);
addHobbyBtn.addEventListener("click", handleAddHobby);
removeHobbyBtn.addEventListener("click", handleRemoveHobby);

hobbyInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleAddHobby();
  }
});
