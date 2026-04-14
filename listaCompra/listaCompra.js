const inputEngadir = document.getElementById("engadir");
const ul = document.getElementById("ul");
const buttonEngadir = document.getElementById("button");
const borrarTodos = document.getElementById("borrarTodos");
const inputFiltro = document.getElementById("filtro");
const divEngadir = document.getElementById("inputElementos");
let num = 0;

buttonEngadir.addEventListener("click", () => {
  num++;
  const span = document.createElement("span");
  const li = document.createElement("li");
  ul.append(li);
  li.append(span);
  span.append(inputEngadir.value);
  const valors = (inputEngadir.value = "");
  const buttonBorrar = document.createElement("button");
  buttonBorrar.innerText = "X";
  li.append(buttonBorrar);
  borrarTodos.style.display = "block";
  localStorage.setItem(num, valors);
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
    if (window.confirm("Do you really want to remove this element?")) {
      buttonBorrar.parentNode.remove();
    }
    if (ul.children.length > 0) {
      borrarTodos.style.display = "block";
    } else {
      borrarTodos.style.display = "none";
    }
  });
});

borrarTodos.addEventListener("click", () => {
  ul.innerHTML = "";
  borrarTodos.style.display = "none";
  localStorage.clear();
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
