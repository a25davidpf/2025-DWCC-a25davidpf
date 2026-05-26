const table = document.getElementsByTagName("table")[0];
let i = 0;
let x = 0;
let row = table.rows[i];
let cell = row.cells[x];

const numRows = table.rows.length;
const numCells = row.cells.length;

console.log(numCells);

for (i; i < numRows; i++) {
  row = table.rows[i];
  x = 0;

  for (x; x < numCells; x++) {
    cell = row.cells[x];
    if (i == x) {
      cell.style.backgroundColor = "red";
    }
  }
}

const ol = document.getElementById("ol");
const borrarLista = document.getElementById("borrarLista");
const borrarTaboa = document.getElementById("borrarTaboa");
const elementoUl = document.getElementById("elementoUl");
const engadirLi = document.getElementById("engadirLi");
const añadirLi = document.getElementById("añadirLi");
const borrarSegundo = document.getElementById("borrarSegundo");

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

borrarSegundo.addEventListener("click", () => {
  const child = ol.firstElementChild.nextElementSibling;
  child.remove();
});

borrarTaboa.addEventListener(
  "click",
  () => {
    let taboa = document.getElementById("taboa");
    taboa.remove();
  },
  { once: true },
);
