const buttonRight = document.querySelector(".right-arrow");
const buttonLeft = document.querySelector(".left-arrow");
const container = document.querySelector(".slider-container");

function pasarDerecha() {
  const active = document.querySelector(".active");
  if (active.tagName === "DIV") {
    active.classList.remove("active");
    const nextActive = active.nextElementSibling;
    nextActive.classList.add("active");
  } else {
    active = container.firstElementChild;
  }
}

function pasarIzquierda() {
  const active = document.querySelector(".active");
  if (active.tagName === "DIV") {
    active.classList.remove("active");
    const nextActive = active.previousElementSibling;
    nextActive.classList.add("active");
  } else {
    active = container.lastElementChild;
  }
}

buttonRight.addEventListener("click", pasarDerecha);
buttonLeft.addEventListener("click", pasarIzquierda);
