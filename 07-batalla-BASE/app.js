let vidaMonstruo = 100;
let vidaPersoa = 100;

let accion = 0;

const valorVidaMonstruo = document.querySelector(".healthbar__value");

const xogo = document.getElementById("game");
const monstruo = xogo.firstElementChild;
const persoa = document.getElementById("player");
const container = persoa.nextElementSibling;
const mensaxeFinPartida = container.firstElementChild;
const mensaxeDerrota = mensaxeFinPartida.nextElementSibling;
const mensaxeVictoria = mensaxeDerrota.nextElementSibling;
const mensaxeEmpate = mensaxeVictoria.nextElementSibling;
const botonXogoNovo = mensaxeEmpate.nextElementSibling;
const botons = document.getElementById("controls");
const botonAtaque = botons.firstElementChild;
const botonAtaqueEspecial = botonAtaque.nextElementSibling;
const botonCuracion = botonAtaqueEspecial.nextElementSibling;
const barraVidaPersoa = persoa.lastElementChild;
const valorVidaPersoa = barraVidaPersoa.lastElementChild;
const continerRexistro = document.getElementById("log");
const tituloRexistro = continerRexistro.firstElementChild;
const listaRexistro = tituloRexistro.nextElementSibling;
const li = document.createElement("li");

container.style.display = "none";

function actualizarVidas() {
  valorVidaPersoa.style.width = vidaPersoa + "%";
  valorVidaMonstruo.style.width = vidaMonstruo + "%";
}

function comprobarVidas() {
  if (vidaMonstruo <= 0) {
    container.style.display = "block";
    mensaxeDerrota.style.display = "none";
    mensaxeEmpate.style.display = "none";
    botons.style.display = "none";
  } else if (vidaMonstruo > 100) {
    vidaMonstruo = 100;
  }

  if (vidaPersoa < 0) {
    container.style.display = "block";
    mensaxeVictoria.style.display = "none";
    mensaxeEmpate.style.display = "none";
    botons.style.display = "none";
  } else if (vidaPersoa > 100) {
    vidaPersoa = 100;
  }
}

function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

function atacar() {
  const dañoMonstruo = numeroAleatorio(5, 12);
  vidaMonstruo = vidaMonstruo - dañoMonstruo;
  const dañoPersoa = numeroAleatorio(8, 15);
  vidaPersoa = vidaPersoa - dañoPersoa;
  actualizarVidas();
  comprobarVidas();
  accion++;
  const mensaxeRexistroPersoa = "Persoa ataca con " + Math.round(dañoMonstruo);
  const mensaxeRexistroMonstruo =
    "Monstruo ataca con " + Math.round(dañoPersoa);
  console.log(mensaxeRexistroPersoa);
  const li = document.createElement("li");
  const li2 = document.createElement("li");
  listaRexistro.append(li);
  listaRexistro.append(li2);
  li.append(mensaxeRexistroMonstruo);
  li2.append(mensaxeRexistroPersoa);
}

function ataqueEspecial() {
  if (accion % 3 === 0) {
    const dañoMonstruo = numeroAleatorio(10, 25);
    vidaMonstruo = vidaMonstruo - dañoMonstruo;
    const dañoPersoa = numeroAleatorio(8, 15);
    vidaPersoa = vidaPersoa - dañoPersoa;
    actualizarVidas();
    comprobarVidas();
    accion++;
    const mensaxeRexistroPersoa =
      "Persoa ataca con " + Math.round(dañoMonstruo);
    const mensaxeRexistroMonstruo =
      "Monstruo ataca con " + Math.round(dañoPersoa);
    const li = document.createElement("li");
    const li2 = document.createElement("li");
    listaRexistro.append(li);
    listaRexistro.append(li2);
    li.append(mensaxeRexistroMonstruo);
    li2.append(mensaxeRexistroPersoa);
  } else {
    botonAtaqueEspecial.disabled;
  }
}

function curarse() {
  const curaPersoa = numeroAleatorio(8, 20);
  vidaPersoa = vidaPersoa + curaPersoa;
  const dañoPersoa = numeroAleatorio(8, 15);
  vidaPersoa = vidaPersoa + curaPersoa;
  actualizarVidas();
  comprobarVidas();
  const mensaxeRexistroPersoa = "Persoa recupera " + Math.round(curaPersoa);
  const mensaxeRexistroMonstruo =
    "Monstruo ataca con " + Math.round(dañoPersoa);
  accion++;
  const li = document.createElement("li");
  const li2 = document.createElement("li");
  listaRexistro.append(li);
  listaRexistro.append(li2);
  li.append(mensaxeRexistroMonstruo);
  li2.append(mensaxeRexistroPersoa);
}

function recargarXogo() {
  location.reload();
}

botonAtaque.addEventListener("click", atacar);
botonAtaqueEspecial.addEventListener("click", ataqueEspecial);
botonXogoNovo.addEventListener("click", recargarXogo);
botonCuracion.addEventListener("click", curarse);
