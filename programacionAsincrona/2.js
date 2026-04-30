const buttonInicar = document.getElementById("iniciar");
const buttonParar = document.getElementById("parar");
const h1 = document.querySelector("h1");

let intervalo;

function cambiarColor() {
  intervalo ??= setInterval(comprobacionColor, 1000);
}

function comprobacionColor() {
  h1.className = h1.className === "color1" ? "color2" : "color1";
}

function pararIntervalo() {
  clearInterval(intervalo);
  intervalo = null;
}

buttonInicar.addEventListener("click", cambiarColor);
buttonParar.addEventListener("click", pararIntervalo);
