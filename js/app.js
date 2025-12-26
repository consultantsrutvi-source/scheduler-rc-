// ===== CONFIG =====
const MASTER_PIN = "3011";

// ===== LOGIN =====
function login() {
  const inputs = document.querySelectorAll(".pin-input");
  const error = document.getElementById("error");
  let pin = "";

  inputs.forEach(input => pin += input.value);

  if (pin === MASTER_PIN) {
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        font-family:Segoe UI;
        background:#eaf2ff;
        text-align:center;">
        <h2>
          Login successful ✅<br><br>
          Dashboard will load next…
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
    if (input.value && index < pinInputs.length - 1) {
      pinInputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      pinInputs[index - 1].focus();
    }
  });
});


// ===== ENTER KEY SUPPORT =====
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    login();
  }
});
