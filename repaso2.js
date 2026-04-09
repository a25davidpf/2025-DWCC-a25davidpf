"use strict";
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);
xhr.responseType = "json";
xhr.send();
xhr.addEventListener("load", function () {
  const obxecto = xhr.response;
  const titulo = "squadName";
  const tit = obxecto[titulo];
  const home = "homeTown";
  const hom = obxecto[home];
  const formed = "formed";
  const form = obxecto[formed];

  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const header = document.querySelector("header");
  header.prepend(h1);
  header.append(p);
  h1.innerText = tit;
  p.innerText = "HomeTown: " + hom + " // " + "Formed: " + form;

  const miembros = "members";
  const members = obxecto[miembros];

  for (const member of members) {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const section = document.querySelector("section");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    article.append(p1);
    article.append(p2);
    article.append(p3);
    article.append(ul);
    section.append(article);
    article.prepend(h2);
    const age = "age";
    const edad = member[age];
    const identity = "secretIdentity";
    const secretIdentity = member[identity];
    const name = "name";
    const nombre = member[name];
    h2.innerText = nombre;
    p1.innerText = "Secret Identity: " + secretIdentity;
    p2.innerText = "Age: " + edad;
    p3.innerText = "Superpowers: ";
    const powers = "powers";
    const superpowers = member[powers];
    for (const power of superpowers) {
      const li = document.createElement("li");
      ul.append(li);
      li.innerText = power;
    }
  }
});
