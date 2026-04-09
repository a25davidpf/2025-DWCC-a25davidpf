const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("ul");

button.addEventListener("click", () => {
  const texto = input.value;
  console.log(texto);
  const li = document.createElement("li");
  li.append(texto);
  ul.append(li);
  input.value = "";
});
