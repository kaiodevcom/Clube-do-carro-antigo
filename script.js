  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 4000); // troca a cada 4 segundos

  document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    currentSlide = parseInt(dot.getAttribute("data-index"));
    showSlide(currentSlide);
  });
});

setInterval(nextSlide, 4000);
});

// Defina a data do próximo encontro
const dataEvento = new Date("2025-08-10T09:00:00").getTime();

function atualizarContagem() {
  const agora = new Date().getTime();
  const tempoRestante = dataEvento - agora;

  if (tempoRestante < 0) {
    document.querySelector(".contagem-regressiva").innerHTML = "<h2>O evento já começou!</h2>";
    return;
  }

  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
  document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
  document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
}

setInterval(atualizarContagem, 1000);
