/**
 * a generic type a generic type is a type which is kind of connected with some other type and is really flexible regarding which exact type
 */

// const names: Array<string> = []; // it's the same of string[]

// // another famous generic type is Promise
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });
// // generic types helps us to handle data
// promise.then(data => {
//   data.split(" ");
// });

// when we create a generic function we use capital letters and there is a convention
// to use T for the first type
// if we use extends keyword after a generic type we are making a constraint
// now T and U can be any type of object, but must be an object!
// with extends you can use union types, regular and custom types
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "Filippo" }, { age: 27 }));

const mergeObj = merge({ name: "Filippo", hobbies: ["Gaming"] }, { age: 30 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let desctriptionText = "Got no value. ";
  if (element.length === 1) {
    desctriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    desctriptionText = "Got " + element.length + " elements.";
  }

  return [element, desctriptionText];
}

console.log(countAndDescribe("Hi There!"));

// with keyof keyword we are saying that U must be a key of object T
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");
