/*********************************
 * CONFIG
 *********************************/
const PIN_CODE = "3011"; // 👉 change PIN if needed

/*********************************
 * LOGIN
 *********************************/
function login() {
  const boxes = document.querySelectorAll(".pin-box");
  let pin = "";

  boxes.forEach(b => pin += b.value);

  if (pin.length !== 4) {
    showStatus("Enter 4-digit PIN ❌", "error");
    return;
  }

  if (pin === PIN_CODE) {
    // ✅ store login state
    localStorage.setItem("rc_logged_in", "yes");

    showStatus("Login successful ✅<br>Dashboard will load next...", "success");

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 800);
  } else {
    showStatus("Invalid PIN ❌", "error");
    clearPin();
  }
}

/*********************************
 * AUTO MOVE BETWEEN PIN BOXES
 *********************************/
function moveNext(current, index) {
  if (current.value.length === 1) {
    const next = document.getElementById("pin" + (index + 1));
    if (next) next.focus();
  }
}

/*********************************
 * CLEAR PIN
 *********************************/
function clearPin() {
  document.querySelectorAll(".pin-box").forEach(b => b.value = "");
  document.getElementById("pin1").focus();
}

/*********************************
 * STATUS MESSAGE
 *********************************/
function showStatus(msg, type) {
  const el = document.getElementById("status");
  el.innerHTML = msg;
  el.className = type;
}

/*********************************
 * ENTER KEY SUPPORT
 *********************************/
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    login();
  }
});

/*********************************
 * AUTH GUARD (FOR DASHBOARD)
 *********************************/
function requireLogin() {
  if (localStorage.getItem("rc_logged_in") !== "yes") {
    window.location.href = "index.html";
  }
}

/*********************************
 * LOGOUT
 *********************************/
function logout() {
  localStorage.removeItem("rc_logged_in");
  window.location.href = "index.html";
}
