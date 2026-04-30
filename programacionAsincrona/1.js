// function escribirNumeros(desde, hasta) {
//   for (let i = desde; i <= hasta; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }

const intervalID = setInterval(escribirNumeros2, 1000);

function escribirNumeros2(desde, hasta) {
  for (let i = desde; i <= hasta; i++) {
    console.log(i);
  }
}

// escribirNumeros(1, 6);
