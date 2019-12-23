// const userName = "Filippo";
// // userName = "Marco"; this is an error
// let age = 27;

// age = 25;
// var result;

// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

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

// javascript and typescript can't look how you build a function
// So, if you put a default parameter to the first element you are unable to skip that parameter
// ex: const add =(a: number = 1, b: number) => a + b; this can lead to have an error
// it's better to have default parameter from the right, so you can avoid
// const add = (a: number, b: number = 1) => a + b;

// // const pritnoutput = (output: string | number) => console.log(output);

// //this is the same as above
// const pritnoutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", event => console.log(event));
// }

// pritnoutput(add(5));

// Spread Operator
const hobbies = ["Gaming", "Cooking", "Photography"];
const activeHobbies = ["Sports"];

// activeHobbies.push(hobbies); this can be done because push gest element as a parameter, not array
activeHobbies.push(...hobbies);

const person = {
  firstName: "Filippo",
  age: 27
};

// const copyPerson = person; This is not a real copy of the object, it is just a pointer!
const copyPerson = { ...person }; // this is a real copy of the object

// rest operators
// in this function we can handle infinite parameters thanks to rest parameters
const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const handleAdd = add(1, 2, 3, 4, 5);

console.log(handleAdd);

// destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(`${hobby1} ${hobby2} ${remainingHobbies}`);

// it can be used in object
// firstName: userName this is not a type assignment, this is javascript syntax
// this creates an alias variable for firstName
const { firstName: userName, age } = person;
console.log(`${userName} ${age} ${JSON.stringify(person)}`);
