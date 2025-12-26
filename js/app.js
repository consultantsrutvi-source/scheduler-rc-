// ===== CONFIG =====
const MASTER_PIN = "3011";

// ===== LOGIN =====
function login() {
  const inputs = document.querySelectorAll(".pin-input");
  const error = document.getElementById("error");
  let pin = "";

  inputs.forEach(input => pin += input.value);

  if (pin === MASTER_PIN) {

  // ✅ remember login
  localStorage.setItem("rc_logged_in", "yes");

  document.getElementById("status").innerHTML =
    "Login successful ✅<br>Dashboard will load next...";

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 800);

} else {
  document.getElementById("status").innerHTML =
    "Invalid PIN ❌";
}

        </h2>
      </div>
    `;
  } else {
    error.innerText = "Invalid PIN";
  }
}
const pinInputs = document.querySelectorAll(".pin-input");

pinInputs.forEach((input, index) => {

  input.addEventListener("input", () => {
    input.classList.add("filled");

    if (input.value && index < pinInputs.length - 1) {
      pinInputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      input.value = "";
      input.classList.remove("filled");

      if (index > 0) {
        pinInputs[index - 1].focus();
      }
    }
  });
});


// ===== ENTER KEY SUPPORT =====
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    login();
  }
});
