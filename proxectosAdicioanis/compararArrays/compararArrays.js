function compararArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

console.log(compararArrays([1, 2, 3], [1, 2, 3]));
console.log(compararArrays([1, 2, 3], [1, 2]));
console.log(compararArrays([1, 2, 3], [1, 2, 4]));
