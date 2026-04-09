"use strict";
console.log("Numero aleatorio entre 1 y 3: " + Math.ceil(Math.random() * 3));

const ol = document.getElementById("ol");
const borrarLista = document.getElementById("borrarLista");
const borrarTaboa = document.getElementById("borrarTaboa");
const elementoUl = document.getElementById("elementoUl");
const engadirLi = document.getElementById("engadirLi");
const añadirLi = document.getElementById("añadirLi");

const li1 = document.createElement("li");
li1.innerHTML = "1";
const li2 = document.createElement("li");
li2.innerHTML = "2";
const li3 = document.createElement("li");
li3.innerHTML = "3";
const li4 = document.createElement("li");
li4.innerHTML = "4";

añadirLi.addEventListener(
  "click",
  () => {
    const two = document.createElement("li");
    two.innerHTML = "2";
    const three = document.createElement("li");
    three.innerHTML = "3";
    const one = document.getElementById("one");
    one.after(two);
    two.after(three);
  },
  { once: true },
);

engadirLi.addEventListener("click", () => {
  elementoUl.prepend(li1);
  elementoUl.append(li2);
  elementoUl.append(li3);
  elementoUl.append(li4);
});

borrarLista.addEventListener("click", () => {
  ol.innerHTML = "";
});

borrarTaboa.addEventListener(
  "click",
  () => {
    let taboa = document.getElementById("taboa");
    taboa.remove();
  },
  { once: true },
);

const cubo = () => {
  const numero = Math.ceil(Math.random() * 9);

  const resultado = numero * numero * numero;

  console.log("El cubo del numero " + numero + " es: " + resultado);
};
cubo();

function reverseString(str) {
  console.log("Reverse String de: " + str);

  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("reconocer"));

function isPalindromo(str) {
  console.log("Is palindromo: " + str);

  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  if (reversed == str) {
    console.log(str + " is palindromo");
  } else {
    console.log(str + " is not palindromo");
  }
}
console.log(isPalindromo("reconocer"));

const panels = document.querySelectorAll(".panel");

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
