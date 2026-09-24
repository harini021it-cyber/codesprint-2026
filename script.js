const form = document.getElementById("registrationForm");

function setError(id, message) {
  document.getElementById(id + "Error").textContent = message;
}

function clearErrors() {
  ["name","regNo","department","email","mobile","year","event"].forEach(id => setError(id, ""));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();
  document.getElementById("successMessage").textContent = "";

  const name = document.getElementById("name").value.trim();
  const regNo = document.getElementById("regNo").value.trim();
  const department = document.getElementById("department").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const year = document.getElementById("year").value;
  const eventSelection = document.getElementById("eventSelection").value;

  let valid = true;

  if (!name) { setError("name", "Name is required."); valid = false; }
  if (!regNo) { setError("regNo", "Register number is required."); valid = false; }
  if (!department) { setError("department", "Department / organization is required."); valid = false; }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) { setError("email", "Enter a valid email address."); valid = false; }

  if (!/^\d{10}$/.test(mobile)) {
    setError("mobile", "Mobile number must contain exactly 10 digits.");
    valid = false;
  }

  if (!year) { setError("year", "Select your year of study."); valid = false; }
  if (!eventSelection) { setError("event", "Select an event."); valid = false; }

  if (!valid) return;

  const registration = {
    name, regNo, department, email, mobile, year, eventSelection,
    registeredAt: new Date().toISOString()
  };

  // Demonstration data-management method: browser localStorage.
  const registrations = JSON.parse(localStorage.getItem("codesprintRegistrations") || "[]");
  registrations.push(registration);
  localStorage.setItem("codesprintRegistrations", JSON.stringify(registrations));

  document.getElementById("successMessage").textContent =
    "Registration successful! Your details were saved in this browser for demonstration.";
  form.reset();
});
