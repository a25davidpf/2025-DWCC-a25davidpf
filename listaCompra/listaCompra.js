const inputEngadir = document.getElementById("engadir");
const ul = document.getElementById("ul");
const buttonEngadir = document.getElementById("button");
const borrarTodos = document.getElementById("borrarTodos");
const inputFiltro = document.getElementById("filtro");
const divEngadir = document.getElementById("inputElementos");

let listaCompra = JSON.parse(localStorage.getItem("listaCompra")) || [];

function gardarLocalStorage() {
  localStorage.setItem("listaCompra", JSON.stringify(listaCompra));
}

function actualizarBotonBorrarTodos() {
  borrarTodos.style.display = listaCompra.length > 0 ? "block" : "none";
}

function crearElemento(texto) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const buttonBorrar = document.createElement("button");

  span.innerText = texto;
  buttonBorrar.innerText = "X";

  li.appendChild(span);
  li.appendChild(buttonBorrar);
  ul.appendChild(li);

  span.addEventListener("click", () => {
    const valorActual = span.innerText;
    inputEngadir.value = valorActual;
    buttonEngadir.style.display = "none";

    let buttonActualizar = document.getElementById("buttonActualizar");

    if (!buttonActualizar) {
      buttonActualizar = document.createElement("button");
      buttonActualizar.id = "buttonActualizar";
      buttonActualizar.innerText = "Actualizar";
      divEngadir.appendChild(buttonActualizar);
    }

    span.style.backgroundColor = "yellow";

    buttonActualizar.onclick = () => {
      const novoValor = inputEngadir.value.trim();

      if (novoValor === "") {
        alert("Error input valeiro");
        return;
      }

      const index = listaCompra.indexOf(valorActual);
      if (index !== -1) {
        listaCompra[index] = novoValor;
        gardarLocalStorage();
      }

      span.innerText = novoValor;
      span.style.backgroundColor = "";
      inputEngadir.value = "";
      buttonActualizar.remove();
      buttonEngadir.style.display = "inline-block";
    };
  });


  buttonBorrar.addEventListener("click", () => {
    if (window.confirm("Seguro que queres eliminar este elemento?")) {
      const textoElemento = span.innerText;
      const index = listaCompra.indexOf(textoElemento);

      if (index !== -1) {
        listaCompra.splice(index, 1);
        gardarLocalStorage();
      }

      li.remove();
      actualizarBotonBorrarTodos();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  listaCompra.forEach((elemento) => {
    crearElemento(elemento);
  });

  actualizarBotonBorrarTodos();
});

buttonEngadir.addEventListener("click", () => {
  const texto = inputEngadir.value.trim();

  if (texto === "") {
    alert("Error input valeiro");
    return;
  }

  listaCompra.push(texto);
  gardarLocalStorage();
  crearElemento(texto);

  inputEngadir.value = "";
  actualizarBotonBorrarTodos();
});

borrarTodos.addEventListener("click", () => {
  ul.innerHTML = "";
  listaCompra = [];
  gardarLocalStorage();
  actualizarBotonBorrarTodos();
});

inputFiltro.addEventListener("input", () => {
  const valor = inputFiltro.value.toLowerCase();
  const lis = document.querySelectorAll("li");

  lis.forEach((li) => {
    const span = li.querySelector("span");
    const texto = span.innerText.toLowerCase();

    li.style.display = texto.includes(valor) ? "block" : "none";
  });
});