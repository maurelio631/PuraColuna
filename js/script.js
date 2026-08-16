// Botão de voltar ao topo
const backToTopBtn = document.getElementById("btn-back-to-top");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    scrollFunction();
  });

  backToTopBtn.addEventListener("click", backToTop);
}

function scrollFunction() {
  const scrollThreshold = 20;
  const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  
  if (backToTopBtn) {
    backToTopBtn.style.display = scrollPosition > scrollThreshold ? "block" : "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Botão de agendar consulta
const agendarBtn = document.getElementById("agendarBtn");

if (agendarBtn) {
  agendarBtn.addEventListener("click", agendar);
}

function agendar() {
  const whatsappUrl = "https://wa.me/5511999914550";
  try {
    window.open(whatsappUrl, "_blank");
  } catch (error) {
    console.error("Erro ao abrir WhatsApp:", error);
    alert("Erro ao abrir o WhatsApp. Por favor, tente novamente.");
  }
}

// Animações de scroll - Fade In
function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar seções
  const sections = document.querySelectorAll("section, .passo");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
}

// Inicializar quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", observeElements);
