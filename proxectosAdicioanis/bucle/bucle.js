for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
    console.log("fizz");
  }
  if (i % 5 === 0) {
    console.log(i);
    console.log("buzz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
    console.log("fizzbuzz");
  }
}
