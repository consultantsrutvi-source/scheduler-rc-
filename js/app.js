// ===== CONFIG =====
const MASTER_PIN = "3011";

// ===== LOGIN =====
function login() {
  const pin = document.getElementById("pin").value.trim();
  const error = document.getElementById("error");

  if (pin === MASTER_PIN) {
    // temporary success action
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

// ===== ENTER KEY SUPPORT =====
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    login();
  }
});
