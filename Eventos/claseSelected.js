const ul = document.getElementById("ul");
const li = ul.children;

console.log(li);

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    for (let item of ul.children) {
      item.classList.remove("selected");
    }

    e.target.classList.add("selected");
  }
});
