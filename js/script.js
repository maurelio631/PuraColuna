const toggleBtn = document.querySelector("#toggleBtn");
const navLinks = document.querySelector("#navLinks");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("d-none");
});


function Agendar(){
  window.open("https://wa.me/?text=Gostaria%20de%20marcar%20uma%20avaliação",'_blank');
}