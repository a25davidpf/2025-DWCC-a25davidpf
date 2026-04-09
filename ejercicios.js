// const cadea = "desenvolvemento web";
// const novaCadea = cadea.toUpperCase();
// console.log(novaCadea); // 'Desenvolvemento web'

// function enmascarar(num) {
//   let largo = num.length;
//   while (largo > 4) {
//     num.replace(largo, "*");
//   }
//   return num;
// }
// console.log(enmascarar("1234123412347777")); // ************7777

// function diaSemana() {
//   const dia = new Date("2025-07-25T03:24:00");
//   const numdia = dia.getDay();
//   if (numdia == 0) {
//     console.log("Lunes");
//   } else if (numdia == 1) {
//     console.log("Martes");
//   } else if (numdia == 2) {
//     console.log("Miercoles");
//   } else if (numdia == 3) {
//     console.log("Jueves");
//   } else if (numdia == 4) {
//     console.log("Viernes");
//   } else if (numdia == 5) {
//     console.log("Sabado");
//   } else if (numdia == 6) {
//     console.log("Domingo");
//   }
// }
// diaSemana();

//Opcion 2
// function diaSemana() {
//   const dia = new Date("2025-07-25T03:24:00");
//   const numdia = dia.getDay();
//   if (numdia == 0) {
//     return "Lunes";
//   } else if (numdia == 1) {
//     return "Martes";
//   } else if (numdia == 2) {
//     return "Miercoles";
//   } else if (numdia == 3) {
//     return "Jueves";
//   } else if (numdia == 4) {
//     return "Viernes";
//   } else if (numdia == 5) {
//     return "Sabado";
//   } else if (numdia == 6) {
//     return "Domingo";
//   }
// }
// console.log(diaSemana());

// function diaMes(mes = new Date()) {
//   let day = mes.getDate();
//   console.log(day);
// }
// diaMes((mes = new Date(2025, 12)));

// function diaMes(mes = new Date()) {
//   const day = mes.getDay();
//   if (mes == 5) {
//     return true;
//   } else if (mes == 6) {
//     return true;
//   }
// }
// diaMes((mes = new Date(2025, 12, 3)));

// const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
// function indices(elemento, arrayElementos) {
//   const indexes = [];
//   let idx = arrayElementos.indexOf(elemento);
//   while (idx !== -1) {
//     indexes.push(idx);
//     idx = arrayElementos.indexOf(elemento, idx + 1);
//   }
//   return indexes;
// }
// console.log(indices(1, numeros));

// const froitas = ["peras", "mazás", "kiwis", "plátanos", "mandarinas"];
// let borrado = froitas.splice(1, 1);
// console.log(froitas);

// borrado = froitas.splice(3, 0, "cereixas", "nésperas");
// console.log(froitas);

//----------------OBXETOS----------------

//EJ1------------------

// const televion = {
//   marca: "LG",
//   categoria: "televisores",
//   unidades: 4,
//   prezo: 354.99,
// };
// function importe(televion) {
//   const prezo = televion.unidades * televion.prezo;
//   return prezo;
// }
// console.log(importe(televion));

//EJ2--------------------

// const game = {
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1);
// console.log(draw);
// console.log(team2);

//EJ3-----------------------

// const game = {
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
// };

// for (const [index, player] of game.scored.entries())
//   console.log("Gol ${index + 1}: ${player}");

// const scorers = {};
// for (const player of game.scored)
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// console.log(scorers);

//---------------SET---------------

//EJ1--------------------

// const gameEvents = new Map([
//   [17, "GOAL"],
//   [36, "Substitution"],
//   [47, "GOAL"],
//   [61, "Substitution"],
//   [64, "Yellow card"],
//   [69, "Red card"],
//   [70, "Substitution"],
//   [72, "Substitution"],
//   [76, "GOAL"],
//   [80, "GOAL"],
//   [92, "Yellow card"],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "PRIMERA" : "SEGUNDA";
//   console.log("[${half} PARTE] ${min}: ${event}");
// }

//---------------FUNCION----------------

//EJ1----------------

// const cubo = (a) => a * a * a;
// console.log(cubo(5));

// //EJ2----------------
// // const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];
// // console.log(numerosImpares(arrayEntrada));

// //EJ3----------------

// const sum = (...num) => {
//   let total = 0;
//   for (const arg of num) {
//     total += arg;
//   }
//   return total;
// };
// console.log(sum(9, 1, 5));

// //EJ4----------------

// function media(...num) {
//   let total = 0;
//   for (const arg of num) {
//     total += arg;
//   }
//   const md = total / num.length;
//   return md;
// }
// console.log(media(8, 2, 5));

// //EJ5----------------

// function minMax(...num) {
//   return;
// }
// console.log(minMax(1, 2, 3, 4, 5));

//-----------------------
// let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];
// let aprobados = arrayNotas.filter((nota) => nota >= 5);
// console.log(aprobados);

//------------REDUCE------------
//--------------EJ1-------------
// const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

// const sum = objects.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.price,
//   0
// );
// console.log(sum);

//--------------EJ2-------------
// const numbers = [50, 100, -1, 0, 9, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const lowest = numbers.reduce((acc, valor) => (acc < valor ? acc : valor));
// console.log("O número menor e: ");
// console.log(lowest);

//----PROGRAMACION FUNCIONAL-----

//Ej1----------------------------
//a------------------------------
// const persoas = [
//   { nome: "aaron", idade: 65, id: 1 },
//   { nome: "beth", idade: 2, id: 2 },
//   { nome: "ánxeles", idade: 13, id: 3 },
//   { nome: "daniel", idade: 3, id: 4 },
//   { nome: "ada", idade: 25, id: 5 },
//   { nome: "erea", idade: 1, id: 6 },
//   { nome: "navia", idade: 43, id: 7 },
// ];

// function maior(item) {
//   if (item.idade > 18) {
//     return true;
//   }
// }
// const personasMaiores = persoas.filter(maior);
// console.table(personasMaiores);

//b-------------------------------

// const persoas = [
//   { nome: "aaron", idade: 65, id: 1 },
//   { nome: "beth", idade: 2, id: 2 },
//   { nome: "ánxeles", idade: 13, id: 3 },
//   { nome: "daniel", idade: 3, id: 4 },
//   { nome: "ada", idade: 25, id: 5 },
//   { nome: "erea", idade: 1, id: 6 },
//   { nome: "navia", idade: 43, id: 7 },
// ];

// const nombres = persoas.map((persoa) => persoa.nome);
// console.table(nombres);

//c-----------------------------
// const persoas = [
//   { nome: "aaron", idade: 65, id: 1 },
//   { nome: "beth", idade: 2, id: 2 },
//   { nome: "ánxeles", idade: 13, id: 3 },
//   { nome: "daniel", idade: 3, id: 4 },
//   { nome: "ada", idade: 25, id: 5 },
//   { nome: "erea", idade: 1, id: 6 },
//   { nome: "navia", idade: 43, id: 7 },
// ];

// function maior(item) {
//   if (item.idade > 18) {
//     return true;
//   }
// }
// const personasMaiores = persoas.filter(maior);

// const nombres = personasMaiores.map((persoa) =>
//   persoa.nome.toLocaleUpperCase()
// );
// console.log(nombres);

//d-------------------------------
// const persoas = [
//   { nome: "aaron", idade: 65, id: 1 },
//   { nome: "beth", idade: 2, id: 2 },
//   { nome: "ánxeles", idade: 13, id: 3 },
//   { nome: "daniel", idade: 3, id: 4 },
//   { nome: "ada", idade: 25, id: 5 },
//   { nome: "erea", idade: 1, id: 6 },
//   { nome: "navia", idade: 43, id: 7 },
// ];

// const nombres = persoas.map(({ nome, id }) => ({
//   nome,
//   id,
// }));
// console.table(nombres);

//------------------EVENTOS---------------------------
//EJERCICIO1
{
  /* <p id="textoExercicio1">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed mattis enim vitae
orci. Phasellus libero. Maecenas nisl arcu, consequat congue, commodo nec,
commodo ultricies, turpis. Quisque sapien nunc, posuere vitae, rutrum et, luctus at,
pede.
<span id="adicional" class="oculto">Nullam sit amet nisl elementum elit convallis
malesuada. Phasellus magna sem, semper quis, faucibus ut, rhoncus non, mi.
Duis pellentesque, felis eu adipiscing ullamcorper, odio urna consequat arcu, at
posuere ante quam non dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing
elit. Duis scelerisque. Donec lacus neque, vehicula in, eleifend vitae, venenatis ac,
felis.</span>
</p>
<a id="ligazon" href="#">Seguir lendo...</a><p id="textoExercicio1">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed mattis enim vitae
orci. Phasellus libero. Maecenas nisl arcu, consequat congue, commodo nec,
commodo ultricies, turpis. Quisque sapien nunc, posuere vitae, rutrum et, luctus at,
pede.
<span id="adicional" class="oculto">Nullam sit amet nisl elementum elit convallis
malesuada. Phasellus magna sem, semper quis, faucibus ut, rhoncus non, mi.
Duis pellentesque, felis eu adipiscing ullamcorper, odio urna consequat arcu, at
posuere ante quam non dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing
elit. Duis scelerisque. Donec lacus neque, vehicula in, eleifend vitae, venenatis ac,
felis.</span>
</p> */
}
//<a id="ligazon" href="#">Seguir lendo...</a>
// <script>
//   function aparecer() {
//     document.getElementById("adicional").removeAttribute("hidden");
//     document.getElementById("ligazon").remove("a");
//   }
//   document.getElementById("ligazon").addEventListener("click", aparecer);
// </script>

//EJERCICIO2
{
  /* <body>
    <input id="texto" type="text" />
    <button type="button" id="boton">Engadir</button>
    <ul id="lista"></ul>
    <script>
      function añadir() {
        const input = document.getElementById("texto");
        const lista = document.getElementById("lista");
        let li = document.createElement("li");
        lista.prepend(li);
        li.append(input.value);
      }
      document.getElementById("boton").addEventListener("click", añadir);
    </script>
  </body> */
}

//EJERCICIO4
//   <head>
//     <meta charset="utf-8" />
//     <style>
//       a {
//         text-decoration: none;
//         color: black;
//       }
//     </style>
//   </head>
//   <body>
// <a id="ligazon" href="#">Sweeties(click me)!</a>
// <div id="contenedor" hidden>
//   <p>Cake</p>
//   <p>Donut</p>
//   <p>Honey</p>
// </div>
// <script>
//   function aparecer() {
//     document.getElementById("contenedor").toggleAttribute("hidden");
//   }
//   document.getElementById("ligazon").addEventListener("click", aparecer);
//  </script>
//   </body>

//------------------------- SEGUNDA AVALIACION------------------------------
//EJERCICIOS LEAFLET
//-----------1------------
// "use strict";

// const map = L.map("map", { center: [42.87876, -8.547238], zoom: 17 });
// let popup = L.popup();
// let marker = L.marker();

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

// function marcar(e) {
//   marker.setLatLng(e.latlng).addTo(map);
//   marker.bindPopup(
//     "You clicked the map at :<br>" +
//       "<b>lon:</b> " +
//       e.latlng.lng +
//       "<br>" +
//       "<b>lat:</b> " +
//       e.latlng.lat
//   );
// }

// map.on("click", marcar);
//
//----------2-----------

//------------------PROGRAMACION ASINCRONA---------------
//----------------------SET INTERVAL------------------
//--------------------------1------------------
//JS:
// "use strict";

// let intervalId;

// function changeColor() {
//   intervalId ??= setInterval(flashText, 500);
// }

// function flashText() {
//   const oElem = document.getElementById("container");
//   oElem.className = oElem.className === "start" ? "stop" : "start";
// }

// function stopTextColor() {
//   clearInterval(intervalId);
//   intervalId = null;
// }

// document.getElementById("start").addEventListener("click", changeColor);
// document.getElementById("stop").addEventListener("click", stopTextColor);

//HTML:
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <style>
//       .start {
//         color: green;
//       }
//       .stop {
//         color: red;
//       }
//     </style>
//   </head>
//   <body>
//     <div id="container">
//       <h1>Titulo</h1>
//     </div>
//     <button id="start">Start</button>
//     <button id="stop">Stop</button>
//   </body>
//   <script defer src="script.js"></script>
// </html>

//--------------XMLHttpRequest------------------
//-------------------2--------------------------
//HTML:
// <!DOCTYPE html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8" />

//     <title>Our superheroes</title>

//     <link
//       href="https://fonts.googleapis.com/css?family=Faster+One"
//       rel="stylesheet"
//     />
//     <link rel="stylesheet" href="style.css" />
//   </head>

//   <body>
//     <header></header>

//     <section></section>
//     <script defer src="script.js"></script>
//   </body>
// </html>

//JS:
// "use strict";
// const xhr = new XMLHttpRequest();
// xhr.open(
//   "GET",
//   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
// );
// xhr.responseType = "json";
// xhr.send();
// xhr.addEventListener("load", function () {
//   const obxecto = xhr.response;
//   const titulo = "squadName";
//   const tit = obxecto[titulo];
//   const home = "homeTown";
//   const hom = obxecto[home];
//   const formed = "formed";
//   const form = obxecto[formed];

//   const h1 = document.createElement("h1");
//   const p = document.createElement("p");
//   const header = document.querySelector("header");
//   header.prepend(h1);
//   header.append(p);
//   h1.innerText = tit;
//   p.innerText = "HomeTown: " + hom + " // " + "Formed: " + form;

//   const miembros = "members";
//   const members = obxecto[miembros];

//   for (const member of members) {
//     const article = document.createElement("article");
//     const h2 = document.createElement("h2");
//     const section = document.querySelector("section");
//     const ul = document.createElement("ul");
//     const li = document.createElement("li");
//     const p1 = document.createElement("p");
//     const p2 = document.createElement("p");
//     const p3 = document.createElement("p");
//     article.append(p1);
//     article.append(p2);
//     article.append(p3);
//     article.append(ul);
//     section.append(article);
//     article.prepend(h2);
//     const age = "age";
//     const edad = member[age];
//     const identity = "secretIdentity";
//     const secretIdentity = member[identity];
//     const name = "name";
//     const nombre = member[name];
//     h2.innerText = nombre;
//     p1.innerText = "Secret Identity: " + secretIdentity;
//     p2.innerText = "Age: " + edad;
//     p3.innerText = "Superpowers: ";
//     const powers = "powers";
//     const superpowers = member[powers];
//     for (const power of superpowers) {
//       const li = document.createElement("li");
//       ul.append(li);
//       li.innerText = power;
//     }
//   }
// });

//----------------PROMESAS-----------------
//-----------------2--------------------
// "use strict";
// function promise(e) {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(e);
//       resolve(e);
//       reject(new Error("O parametro non é un número"));
//     }, 3000);
//   });
// }
// promise(5);

//------------------3-------------------
// "use strict";
// function funcion(e) {
//   let promise = new Promise((resolve, reject) => {
//     if (typeof e != "number") {
//       reject(new Error("Erro. O parametro non é numero"));
//     } else {
//       if (e % 2 == 0) {
//         setTimeout(() => {
//           reject(new Error("Par"));
//         }, 2000);
//       } else {
//         setTimeout(() => {
//           resolve("Impar");
//         }, 1000);
//       }
//     }
//   });
//   promise.then(
//     (message) => console.log(message),
//     (erro) => console.log(erro)
//   );
// }
// funcion(1);
//-------------------API FETCH---------------------
//-----------------------2-------------------------
//HTML
// <!DOCTYPE html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8" />

//     <title>Document</title>

//     <link
//       href="https://fonts.googleapis.com/css?family=Faster+One"
//       rel="stylesheet"
//     />
//     <link rel="stylesheet" href="style.css" />
//   </head>

//   <body>
//     <header></header>

//     <section></section>
//     <script defer src="script.js"></script>
//   </body>
// </html>
//JS
// "use strict";

// fetch("https://randomuser.me/api/")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     //SELECCION DE INFORMACION
//     const results = "results";
//     const result = data[results];
//     const info = "0";
//     const informacion = result[info];
//     console.log(informacion);
//     const allName = "name";
//     const completeName = informacion[allName];
//     const first = "first";
//     const name = completeName[first];
//     const last = "last";
//     const surname = completeName[last];
//     const correo = "email";
//     const mail = informacion[correo];
//     const phonenumber = "phone";
//     const phone = informacion[phonenumber];
//     const site = "location";
//     const location = informacion[site];
//     const ciudad = "city";
//     const city = location[ciudad];
//     const pais = "country";
//     const country = location[pais];
//     const dob = "dob";
//     const dobs = informacion[dob];
//     const idade = "age";
//     const age = dobs[idade];
//     const imagen = "picture";
//     const image = informacion[imagen];
//     const urlImage = "large";
//     const imageURL = image[urlImage];

//     //ESTRUCTURA NAVEGADOR
//     const h2 = document.createElement("h2");
//     const h4 = document.createElement("h4");
//     const h41 = document.createElement("h4");
//     const section = document.querySelector("section");
//     section.append(h2);
//     const h21 = document.createElement("h2");
//     section.append(h21);
//     const h22 = document.createElement("h2");
//     section.append(h22);
//     const h23 = document.createElement("h2");
//     section.append(h23);
//     h23.after(h4);
//     h23.after(h41);
//     const h24 = document.createElement("h2");
//     section.append(h24);
//     const img = document.createElement("img");
//     section.prepend(img);
//     const button = document.createElement("button");
//     section.append(button);

//     //INSERCION DE INFORMACION
//     h2.innerText = "Name: " + name + " " + surname;
//     h21.innerText = "Correo: " + mail;
//     h22.innerText = "Phone number: " + phone;
//     h23.innerText = "Location: ";
//     h41.innerText = "Country: " + country;
//     h4.innerText = "City: " + city;
//     h24.innerText = "Age: " + age;
//     img.src = imageURL;
//     button.innerText = "Cambiar Persona";

//     document.querySelector("button").addEventListener("click", function () {
//       window.location.reload();
//     });
//   });
//CSS
/* || general styles */
// img {
//   width: 150px;
//   border-radius: 10px;
// }
// section {
//   border: 3px solid grey;
//   border-radius: 10px;
//   background-color: rgb(196, 196, 196);
//   text-align: center;
//   padding: 10px;
//   width: 500px;
//   margin-left: 750px;
// }
// button {
//   padding: 10px;
//   border-radius: 10px;
// }
//
//----------------EJERCICIO3(POKES)--------------------
//--JS
// "use strict";

// function numeroAleatorio() {
//   return Math.floor(Math.random() * 1000);
// }
// const resultado = numeroAleatorio();

// function getPost(post) {
//   let options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   fetch("https://pokeapi.co/api/v2/pokemon/" + resultado, options)
//     .then((response) => response.json())
//     .then((data) => {
//       //SELECCION DE DATOS
//       console.log(data);

//       const nombre = "name";
//       const name = data[nombre];
//       const sprite = "sprites";
//       const sprites = data[sprite];
//       const others = "other";
//       const other = sprites[others];
//       const casa = "home";
//       const home = other[casa];
//       const predeterminado = "front_default";
//       const front_default = home[predeterminado];
//       const habilidades = "abilities";
//       const abilities = data[habilidades];

//       abilities.forEach((num) => {
//         const allAbilities = num.ability.name;
//         const url = num.ability.url;
//         const section = document.querySelector("section");
//         const h3 = document.createElement("h3");
//         const a = document.createElement("a");
//         section.append(h3);
//         h3.after(a);
//         h3.innerText = allAbilities;
//         a.innerText = url;
//         a.href = url;
//       });

//       //IMPRESION DE DATOS
//       const section = document.querySelector("section");
//       const h1 = document.createElement("h1");
//       const h2 = document.createElement("h2");
//       const img = document.createElement("img");
//       section.prepend(img);
//       h1.innerText = name;
//       img.src = front_default;
//       img.after(h1);
//       h1.after(h2);
//       h2.innerText = "Abilities: ";
//       h1.classList.add("nombre");

//       //BOTON
//       const br = document.createElement("br");
//       const br1 = document.createElement("br");
//       const button = document.createElement("button");
//       section.append(br);
//       section.append(br1);
//       section.append(button);
//       button.innerText = "Nuevo pokemon";
//       button.addEventListener("click", () => {
//         location.reload();
//       });
//     });
// }

// getPost();

//--HTML
// <!DOCTYPE html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8" />

//     <title>Document</title>

//     <link
//       href="https://fonts.googleapis.com/css?family=Faster+One"
//       rel="stylesheet"
//     />
//     <link rel="stylesheet" href="style.css" />
//   </head>

//   <body>
//     <header></header>

//     <section></section>
//     <script defer src="script.js"></script>
//   </body>
// </html>

//--CSS
// body {
//   text-align: center;
//   font-family: Arial, Helvetica, sans-serif;
// }
// section {
//   border: 3px solid rgb(80, 80, 80);
//   background-color: rgb(226, 226, 226);
//   border-radius: 10px;
//   width: 700px;
//   text-align: center;
//   margin-left: 700px;
//   padding-bottom: 25px;
// }
// .nombre {
//   text-transform: uppercase;
// }
//
//----------------------------VUE
//------------------EJ2
//-----JS
// "use strict";
// const { createApp } = Vue;
// createApp({
//   data() {
//     return {
//       nome: "David Porto",
//       ano: 2026,
//       src: "iStock-828766970.jpg",
//       contador: 0,
//     };
//   },
//   methods: {
//     incrementar() {
//       this.contador++;
//     },
//     decrementar() {
//       this.contador--;
//     },
//   },
// }).mount("#app");

//--HTML
// <!DOCTYPE html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8" />

//     <title>Document</title>

//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <link rel="stylesheet" href="style.css" />
//   </head>

//   <body>
//     <div id="app">
//       <p>Nome: {{ nome }}</p>
//       <p>Ano: {{ ano }}</p>
//       <p>Sumar 5 anos: {{ ano+5 }}</p>
//       <img :src="src" /><br />
//       <textarea>{{ nome }}</textarea>
//       <p>Contador: {{ contador }}</p>
//       <button @click="incrementar">+</button>
//       <button @click="decrementar">-</button>
//     </div>
//     <script defer src="script.js"></script>
//   </body>
// </html>
//
//-------------------EJ3
//--JS
// "use strict";
// const { createApp } = Vue;
// createApp({
//   data() {
//     return {
//       text: "",
//     };
//   },
//   methods: {
//     setText(event) {
//       console.log(event.target.value);
//       this.text = event.target.value;
//     },
//   },
// }).mount("#app");
//--HTML
// <!DOCTYPE html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8" />

//     <title>Document</title>

//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <link rel="stylesheet" href="style.css" />
//   </head>

//   <body>
//     <div id="app">
//       <p>{{text}}</p>
//       <input type="text" :value="text" @input="setText"></input>
//       <br><br>
//       <input type="text" v-model="text">
//     </div>
//     <script defer src="script.js"></script>
//   </body>
// </html>
//
//----------------------EJ4
//--JS
// "use strict";
// const { createApp } = Vue;
// createApp({
//   data() {
//     return {
//       text1: "",
//       text2: "",
//       text3: "",
//       text4: "",
//       text5: "",
//     };
//   },
//   methods: {},
// }).mount("#app");
//
//--HTML
// <!DOCTYPE html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8" />

//     <title>Document</title>

//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <link rel="stylesheet" href="style.css" />
//   </head>

//   <body>
//     <div id="app">
//       <form action="">
//         <input type="text" v-model="text1" />
//         <p>Valor input: {{text1}}</p>
//         <br /><br />
//         <textarea id="textarea" v-model="text2"></textarea>
//         <p>Valor textarea: {{text2}}</p>
//         <br /><br />
//         <input type="checkbox" v-model="text3" />
//         <p>Valor checkbox: {{text3}}</p>
//         <br /><br />
//         <input type="radio" id="one" value="One" v-model="text4" />
//         <label for="one">One</label>
//         <input type="radio" id="two" value="Two" v-model="text4" />
//         <label for="two">Two</label>
//         <p>Valor radio button: {{text4}}</p>
//         <br /><br />
//         <select id="select" v-model="text5">
//           <option disabled value="">Choose one option</option>
//           <option>A</option>
//           <option>B</option>
//           <option>C</option>
//         </select>
//         <p>Valor select: {{text5}}</p>
//         <br /><br />
//         <button type="submit">Reset</button>
//       </form>
//     </div>
//     <script defer src="script.js"></script>
//   </body>
// </html>

// //---ENUNCIADO:1. Crea unha páxina web que teña dous parágrafos:
// a. O primeiro parágrafo ten por defecto unha clase CSS (configúraa coas
// propiedades que queiras). Configura este parágrafo para que ao pulsar sobre
// el se quite e se engada a clase CSS alternativamente.
// b. O segundo parágrafo ten cor de letra verde, por defecto. Configúrao para que
// ao pulsar sobre el a cor de letra alterne entre o verde e o vermello.
//-----------------------------JS
// ("use strict");
// const { createApp } = Vue;
// createApp({
//   data() {
//     return {
//       isRed: true,
//       isGreen: false,
//       isYellow: true,
//     };
//   },
//   methods: {
//     cambiar() {
//       if (this.isRed) {
//         this.isRed = false;
//       } else {
//         this.isRed = true;
//       }
//     },
//     cambiar2() {
//       if (this.isGreen) {
//         this.isYellow = true;
//         this.isGreen = false;
//       } else {
//         this.isYellow = false;
//         this.isGreen = true;
//       }
//     },
//   },
// }).mount("#app");

//-----------------------HTML
// <!doctype html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8" />

//     <title>Document</title>

//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <link rel="stylesheet" href="style.css" />
//     <style>
//       .red {
//         color: red;
//       }
//       .green {
//         color: green;
//       }
//       .yellow {
//         color: rgb(243, 243, 23);
//       }
//     </style>
//   </head>

//   <body>
//     <div id="app">
//       <p @click="cambiar" :class="{red: isRed}">Paragrafo 1</p>
//       <p @click="cambiar2" :class="{green: isGreen, yellow: isYellow}">
//         Paragrafo 2
//       </p>
//     </div>
//     <script defer src="script.js"></script>
//   </body>
// </html>

//2. Crea unha páxina web que teña un taboleiro con dúas celas. Define unha clase CSS
// que vai ser usada para aplicar estilos ás celas. Por exemplo, crea unha clase
// chamada “activa” e configúraa cunha cor de fondo e un borde diferentes dos
// establecidos por defecto. Fai que ao pulsar sobre cada cela se alterne o estilo, é
// dicir, que se engada a clase CSS activa se non estaba asignada e viceversa.
// Fai unha segunda versión do mesmo exercicio, pero esta vez só unha das celas
// pode ter a clase CSS “activa”. Configura a páxina para que ao pulsar sobre a cela
// que non ten a clase “activa” se lle engada e se elimine da outra cela.

//--------------------------------JS
// ("use strict");
// const { createApp } = Vue;
// createApp({
//   data() {
//     return {
//       isActive: false,
//     };
//   },
//   methods: {
//     cambiar(num) {
//       this.isActive = num;
//     },
//   },
// }).mount("#app");

//-----------------------------------HTML
// <!doctype html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8" />

//     <title>Document</title>

//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <link rel="stylesheet" href="style.css" />
//     <style>
//       .activa {
//         background-color: blue;
//         border: 2px solid black;
//       }
//     </style>
//   </head>

//   <body>
//     <div id="app">
//       <table>
//         <tr>
//           <td :class="{activa: isActive == 1}" @click="cambiar(1)">__</td>
//           <td :class="{activa: isActive == 2}" @click="cambiar(2)">__</td>
//         </tr>
//       </table>
//     </div>
//     <script defer src="script.js"></script>
//   </body>
// </html>

//3. Crea unha páxina web coas seguintes condicións:
// a. Define dúas clases CSS (claseA e claseB) cos estilos que queiras para
// aplicar a un parágrafo.
// b. Engade á túa páxina web unha caixa de texto e un parágrafo. Configura o
// código para que cando unha persoa usuaria escriba “claseA” na caixa de
// texto, se aplique esta clase ao parágrafo e cando se escriba “claseB” na
// caixa de texto se aplique esta clase ao parágrafo.
// c. Engade as seguintes clases CSS á túa páxina web:
// .hidden {
// display: none;
// }
// .visible {
// display: block;
// }
// d. Engade un botón á páxina de tal forma que, usando as clases anteriores,
// alterne a visibilidade do parágrafo usado anteriormente. É dicir, inicialmente o
// parágrafo está visible e se se pulsa o botón, ocultarase. Se se volve a pulsar
// o botón, o parágrafo farase visible.
// e. Engade á páxina web unha nova caixa de texto e un novo parágrafo. Usando
// estilos en liña, fai que cando unha persoa escriba unha cor de fondo na caixa
// de texto, o parágrafo cambie a súa cor de fondo pola indicada na caixa de
// texto.

//---------------------------------------------JS
// ("use strict");
// const { createApp } = Vue;
// createApp({
//   data() {
//     return {
//       claseA: false,
//       claseB: false,
//       value: "",
//       visible: true,
//       hidden: false,
//       resultado: "",
//     };
//   },
//   methods: {
//     valor() {
//       if (this.value === "claseA") {
//         this.claseA = 1;
//         this.claseB = false;
//       } else if (this.value === "claseB") {
//         this.claseB = 2;
//         this.claseA = false;
//       } else {
//         this.claseA = false;
//         this.claseB = false;
//       }
//     },
//     pulsar() {
//       if (this.visible) {
//         this.visible = false;
//         this.hidden = true;
//       } else {
//         this.visible = true;
//         this.hidden = false;
//       }
//     },
//     color() {
//       this.resultado == resultado;
//     },
//   },
// }).mount("#app");

//------------------------------------HTML
// <!doctype html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8" />

//     <title>Document</title>

//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <link rel="stylesheet" href="style.css" />
//     <style>
//       .claseA {
//         background-color: rgb(74, 172, 202);
//         border: 2px solid black;
//       }
//       .claseB {
//         background-color: blueviolet;
//         border: 2px solid black;
//       }
//       p{
//         padding: 10px;
//       }
//       .hidden {
//         display: none;
//       }
//       .visible {
//         display: block;
//       }
//     </style>
//   </head>
//   <body>
//     <div id="app">
//       <input @input="valor" v-model="value"></input>
//       <p :class="{claseA: claseA == 1, claseB: claseB == 2, hidden: hidden, visible: visible}"></p>
//       <button @click="pulsar">Pulsar</button>
//       <br>
//       <br>
//       <input @input="color" v-model="resultado"></input>
//       <p :style="'background-color:' + resultado"></p>
//     </div>
//     <script defer src="script.js"></script>
//   </body>
// </html>

//EXERCICIO1 TITORIAL IF/ELSE
//-----------JS
// "use strict";
// const { createApp } = Vue;
// createApp({
//   data() {
//     return {
//       awesome: true,
//     };
//   },
//   methods: {
//     toggle(awesome) {
//       if (this.awesome) {
//         this.awesome = false;
//       } else {
//         this.awesome = true;
//       }
//     },
//   },
// }).mount("#app");

//------------HTML
// <!doctype html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8" />

//     <title>Document</title>

//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <link rel="stylesheet" href="style.css" />
//     <style></style>
//   </head>
//   <body>
//     <div id="app">
//       <button @click="toggle">Toggle</button>
//       <h1 v-if="awesome">Vue is awesome!</h1>
//       <h1 v-else>Oh no 😢</h1>
//     </div>
//     <script defer src="script.js"></script>
//   </body>
// </html>

//COMPOÑENTES VUE
//EJERCICIO1
// Crea un proxecto Vue onde o compoñente raíz da aplicación teña unha propiedade
// que sexa unha mensaxe de texto, por exemplo “ola mundo”. Configura o código
// HTML para mostrar a mensaxe. Engade ao HTML un botón de tal forma que cada
// vez que se pulse transforme a mensaxe de minúscula a maiúscula ou viceversa.
// Engade outro botón que permita engadir un carácter, por exemplo “!” á mensaxe de
// texto.

// <script>
// import FoodItem from "./components/Contact.vue";

// export default {
//   data() {
//     return {
//       message: "ola mundo",
//       mayus: false,
//     };
//   },
//   components: {
//     FoodItem,
//   },
//   methods: {
//     cambiarMaiusculas() {
//       if (this.mayus) {
//         this.message = this.message.toLowerCase();
//       } else {
//         this.message = this.message.toUpperCase();
//       }
//       this.mayus = !this.mayus;
//     },
//     engadirCaracter() {
//       this.message += "!";
//     },
//   },
// };
// </script>

// <template>
//   <h1>{{ message }}</h1>
//   <button @click="cambiarMaiusculas">cambiar</button>
//   <button @click="engadirCaracter">engadir !</button>
//   <FoodItem />
// </template>

// <style scoped></style>

// 3. Engade ao exercicio anterior información de se un contacto é favorito ou non. Esta
// información almacénase no array do compoñente raíz e pásase ao compoñente
// Contact como prop.
// Mostra visualmente se é un contacto favorito ou non. Podes utilizar texto ou imaxes,
// como se mostra a continuacion.
// Engade tamén ao compoñente descendente a funcionalidade que permita modificar
// se un compoñente é favorito ou non. Fai que visualmente se actualice a información
// de se é ou non favorito. De momento non se explicou como cambiar este dato no
// compoñente ascendente.

//APP VUE
{
  /* <script>
export default {
  data() {
    return {
      persons: [
        {
          nome: "David",
          telefono: 987654321,
          correo: "david@gmail.com",
          favorito: false,
        },
        {
          nome: "Pablo",
          telefono: 954454321,
          correo: "pablo@gmail.com",
          favorito: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorito(index) {
      this.persons[index].favorito = !this.persons[index].favorito;
    },
  },
};
</script>

<template>
  <Contact
    v-for="(person, index) in persons"
    :nome="person.nome"
    :telefono="person.telefono"
    :correo="person.correo"
    :favorito="person.favorito"
    @toggle-favorito="toggleFavorito(index)"
  />
</template>

<style>
.oculto {
  display: none;
}
</style> */
}

//CONTACT VUE
{
  /* <script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    telefono: {
      type: Number,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
    favorito: {
      type: Boolean,
    },
  },
  data() {
    return {
      isOculto: true,
    };
  },
  methods: {
    añadirClase() {
      this.isOculto = !this.isOculto;
    },
    fav() {
      this.$emit("toggle-favorito");
    },
  },
};
</script>
<template>
  <div>
    <h2>{{ nome }}</h2>
    <p v-if="favorito">Favorito</p>
    <div :class="{ oculto: isOculto }">
      <p>{{ telefono }}</p>
      <p>{{ correo }}</p>
    </div>
    <button @click="añadirClase">{{ isOculto ? "Mostrar" : "Ocultar" }}</button>
    <button @click="fav">Favorito</button>
  </div>
</template>
<style>
.oculto {
  display: none;
}
</style> */
}

// 3. Amplía a aplicación do exercicio anterior coas seguintes funcionalidades:
// a. Engade un novo compoñente que conteña un formulario para dar de alta un
// novo contacto. Engade este novo compoñente ao compoñente raíz da
// aplicación e fai a implementación necesaria para que ao dar de alta un novo
// contacto, se engada á lista de contactos do compoñente raíz.
// b. No compoñente que visualiza os datos de cada persoa (Contact) engade un
// botón que permita eliminar ese contacto. O contacto debe borrarse do array
// do compoñente raíz da aplicación.

//APP.VUE
{
  /* <script>
import NewContact from "./components/NewContact.vue";

export default {
  data() {
    return {
      persons: [
        {
          nome: "David",
          telefono: 987654321,
          correo: "david@gmail.com",
          favorito: false,
        },
        {
          nome: "Pablo",
          telefono: 954454321,
          correo: "pablo@gmail.com",
          favorito: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorito(index) {
      this.persons[index].favorito = !this.persons[index].favorito;
    },
    add(contact) {
      this.persons.push(contact);
    },
    borrar(index) {
      this.persons.splice(index, 1);
    },
  },
};
</script>

<template>
  <NewContact @add="add" />
  <Contact
    v-for="(person, index) in persons"
    :nome="person.nome"
    :telefono="person.telefono"
    :correo="person.correo"
    :favorito="person.favorito"
    @toggle-favorito="toggleFavorito(index)"
    @borrar="borrar(index)"
  />
</template>

<style>
.oculto {
  display: none;
}
</style> */
}

//CONTACT:VUE
{
  /* <script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    telefono: {
      type: Number,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
    favorito: {
      type: Boolean,
    },
  },
  data() {
    return {
      isOculto: true,
    };
  },
  methods: {
    añadirClase() {
      this.isOculto = !this.isOculto;
    },
    fav() {
      this.$emit("toggle-favorito");
    },
    borrarContacto() {
      this.$emit("borrar");
    },
  },
};
</script>
<template>
  <div>
    <h2>{{ nome }}</h2>
    <p v-if="favorito">Favorito</p>
    <div :class="{ oculto: isOculto }">
      <p>{{ telefono }}</p>
      <p>{{ correo }}</p>
    </div>
    <button @click="añadirClase">{{ isOculto ? "Mostrar" : "Ocultar" }}</button>
    <button @click="fav">Favorito</button>
    <button @click="borrarContacto">Borrar</button>
  </div>
</template>
<style>
.oculto {
  display: none;
}
</style> */
}

//NEWCONTACT.VUE
{
  /* <script>
export default {
  emits: ["add"],
  data() {
    return {
      nome: "",
      telefono: "",
      correo: "",
      favorito: false,
    };
  },
  methods: {
    añadir() {
      this.$emit("add", {
        nome: this.nome,
        telefono: this.telefono,
        correo: this.correo,
      });
    },
  },
};
</script>

<template>
  <form @submit.prevent="añadir">
    <label>Nome</label><input type="text" v-model="nome" />
    <label>Telefono</label><input type="num" v-model="telefono" />
    <label>Correo</label><input type="mail" v-model="correo" />
    <button type="submit">Submit</button>
  </form>
</template>

<style></style> */
}
