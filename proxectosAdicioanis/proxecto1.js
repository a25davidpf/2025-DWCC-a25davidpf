function calcularPrezo(produtos) {
  let total = 0;

  for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].quantity * produtos[i].price;
  }

  return total;
}

console.log("Calcular prezo:");

console.log(calcularPrezo([{ product: "Milk", quantity: 1, price: 1.5 }]));

console.log(
  calcularPrezo([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
  ]),
);

console.log(calcularPrezo([{ product: "Milk", quantity: 3, price: 1.5 }]));

console.log(
  calcularPrezo([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ]),
);

function duplicar(array) {
  return array.concat(array);
}
console.log("Duplicar array:");
console.log(duplicar([1, 2, 3, 4, 5]));

function sumaCifras(num) {
  let suma = 0;
  while (num > 0) {
    suma += num % 10;
    num = Math.floor(num / 10);
  }
  return suma;
}
console.log("Suma cifras:");
console.log(sumaCifras(43));
console.log(sumaCifras(373));
console.log(sumaCifras(4433));
