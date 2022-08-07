const toggleBtn = document.querySelector("#toggleBtn");
const navLinks = document.querySelector("#navLinks");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("d-none");
});
