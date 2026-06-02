const input = document.getElementById("input");
const checkbox = document.getElementById("checkbox");

const inputValue = input.value;
const checkboxValue = checkbox.value;

console.log(inputValue);
console.log(checkboxValue);

localStorage.setItem("input", inputValue);
console.log(localStorage.getItem("input"));
