const texto = document.getElementById("texto");
const div = document.getElementById("div");

texto.addEventListener("mouseover", () => {
  texto.style.cursor = "pointer";
});

texto.addEventListener("click", () => {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});
