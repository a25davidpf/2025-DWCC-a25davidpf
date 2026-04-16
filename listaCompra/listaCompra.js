const inputEngadir = document.getElementById("engadir");
const ul = document.getElementById("ul");
const buttonEngadir = document.getElementById("button");
const borrarTodos = document.getElementById("borrarTodos");
const inputFiltro = document.getElementById("filtro");
const divEngadir = document.getElementById("inputElementos");
const listaCompra = [];

document.addEventListener("DOMContentLoaded", () => {
  const ultimaLista = JSON.parse(localStorage.getItem("listaCompra"));

  console.log(ultimaLista);

  if (ultimaLista.length > 0) {
    ultimaLista.forEach((elements) => {
      console.log(elements);
      const span = document.createElement("span");
      const li = document.createElement("li");
      ul.append(li);
      li.append(span);
      span.append(elements);
      const buttonBorrar = document.createElement("button");
      buttonBorrar.innerText = "X";
      li.append(buttonBorrar);
      borrarTodos.style.display = "block";
    });
  }
});

buttonEngadir.addEventListener("click", () => {
  const span = document.createElement("span");
  const li = document.createElement("li");
  if (inputEngadir.value === "") {
    alert("Error input valeiro");
  } else {
    ul.append(li);
    li.append(span);
    span.append(inputEngadir.value);
    listaCompra.push(span.innerText);
    console.log(listaCompra);
    localStorage.setItem("listaCompra", JSON.stringify(listaCompra));
    inputEngadir.value = "";
    const buttonBorrar = document.createElement("button");
    buttonBorrar.innerText = "X";
    li.append(buttonBorrar);
    borrarTodos.style.display = "block";
    span.addEventListener("click", () => {
      const valorActual = span.innerText;
      inputEngadir.value = valorActual;
      buttonEngadir.remove();
      const buttonActualizar = document.createElement("button");
      divEngadir.append(buttonActualizar);
      buttonActualizar.append("Actualizar");
      span.style.backgroundColor = "yellow";
      buttonActualizar.addEventListener("click", () => {
        span.innerText = inputEngadir.value;
        span.style.backgroundColor = "white";
        inputEngadir.value = "";
        buttonActualizar.remove();
        divEngadir.append(buttonEngadir);
      });
    });
    buttonBorrar.addEventListener("click", () => {
      if (window.confirm("Seguro que queres eliminar este elemento?")) {
        const span = buttonBorrar.previousSibling;
        const index = listaCompra.indexOf(span.innerText);
        console.log(index);
        if (index !== -1) {
          listaCompra.splice(index, 1);
          localStorage.setItem("listaCompra", JSON.stringify(listaCompra));
        }
        console.log(listaCompra);
        buttonBorrar.parentNode.remove();
      }
      if (ul.children.length > 0) {
        borrarTodos.style.display = "block";
      } else {
        borrarTodos.style.display = "none";
      }
    });
  }
});

borrarTodos.addEventListener("click", () => {
  ul.innerHTML = "";
  borrarTodos.style.display = "none";
  listaCompra.length = 0;
  console.log(listaCompra);
  localStorage.setItem("listaCompra", JSON.stringify(listaCompra));
});

inputFiltro.addEventListener("input", () => {
  const valor = inputFiltro.value.toLowerCase();
  const lis = document.querySelectorAll("li");

  lis.forEach((li) => {
    const span = li.querySelector("span");
    const texto = span.innerText.toLowerCase();

    if (texto.indexOf(valor) !== -1) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
});
