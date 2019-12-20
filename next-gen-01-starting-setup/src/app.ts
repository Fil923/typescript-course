const userName = "Filippo";
// userName = "Marco"; this is an error
let age = 27;

age = 25;
var result;

// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

const add = (a: number, b: number) => a + b;

// const pritnoutput = (output: string | number) => console.log(output);

//this is the same as above
const pritnoutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", event => console.log(event));
}

pritnoutput(add(5, 2));

// console.log(result);

/**
 * This code is wrong in typescript but in javascript you can acces to isOld, even if is declared into if statement
 * if (age > 20) {
  var isOld = true;
}

console.log(isOld);

 */

// Now you can't access to isOld
// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);
