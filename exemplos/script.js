let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

function createTree(data) {
  const body = document.querySelector("body");
  const ul = document.createElement("ul");
  body.append(ul);

  for (let key in data) {
    const li = document.createElement("li");
    li.innerHTML = key;

    if (Object.keys(data[key]).length > 0) {
      li.appendChild(createTree(data[key]));
    }

    ul.appendChild(li);
  }

  return ul;
}

createTree(arbore);
