/* ================================
   VACANCIES – JS PATCH
   ================================ */

/* ---------- Remember Places ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const savedPlaces = JSON.parse(localStorage.getItem("customPlaces") || "[]");
  const list = document.getElementById("placesList");

  if (!list) return;

  savedPlaces.forEach(place => {
    const opt = document.createElement("option");
    opt.value = place;
    list.appendChild(opt);
  });
});

/* ---------- Add new place if typed ---------- */
function handleNewPlace() {
  const input = document.getElementById("placeInput");
  if (!input) return;

  const val = input.value.trim();
  if (!val) return;

  const options = [...document.querySelectorAll("#placesList option")]
    .map(o => o.value);

  if (!options.includes(val)) {
    const saved = JSON.parse(localStorage.getItem("customPlaces") || "[]");
    saved.push(val);
    localStorage.setItem("customPlaces", JSON.stringify(saved));

    const opt = document.createElement("option");
    opt.value = val;
    document.getElementById("placesList").appendChild(opt);
  }
}

/* ---------- Print Vacancies ---------- */
function printVacancies() {
  window.print();
}
