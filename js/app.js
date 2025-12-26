const PIN_CODE = "1234";

/* PIN AUTO MOVE */
const pins = document.querySelectorAll(".pin-box");

pins.forEach((box, index) => {
  box.addEventListener("input", () => {
    if (box.value && index < pins.length - 1) {
      pins[index + 1].focus();
    }
  });
});

/* ENTER KEY */
document.addEventListener("keydown", e => {
  if (e.key === "Enter") login();
});

/* LOGIN */
function login() {
  let pin = "";
  pins.forEach(b => pin += b.value);

  const status = document.getElementById("status");

  if (pin.length !== 4) {
    status.textContent = "Enter 4-digit PIN ❌";
    status.className = "error";
    return;
  }

  if (pin === PIN_CODE) {
    localStorage.setItem("rc_login", "yes");
    status.textContent = "Login successful ✅";
    status.className = "success";
    setTimeout(() => window.location.href = "dashboard.html", 600);
  } else {
    status.textContent = "Invalid PIN ❌";
    status.className = "error";
    pins.forEach(b => b.value = "");
    pins[0].focus();
  }
}

/* AUTH CHECK */
function requireLogin() {
  if (localStorage.getItem("rc_login") !== "yes") {
    window.location.href = "index.html";
  }
}

/* LOGOUT */
function logout() {
  localStorage.removeItem("rc_login");
  window.location.href = "index.html";
}
