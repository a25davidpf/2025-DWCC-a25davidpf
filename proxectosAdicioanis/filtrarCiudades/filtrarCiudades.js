const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",
);
xhr.responseType = "json";
xhr.send();
xhr.addEventListener("load", function () {
  const div = document.getElementById("main");
  const filtro = document.getElementById("filtro");
  const obxecto = xhr.response;
  obxecto.forEach((estado) => {
    const p = document.createElement("p");
    p.innerHTML = "Name: " + estado.city + " , Poboacion: " + estado.population;
    p.dataset.city = estado.city.toLowerCase();
    div.append(p);
    filtro.addEventListener("input", () => {
      const valor = filtro.value.toLowerCase();
      const ps = document.querySelectorAll("p");

      ps.forEach((p) => {
        const cidade = p.dataset.city;
        p.style.display = cidade.includes(valor) ? "block" : "none";
      });
    });
  });
});
