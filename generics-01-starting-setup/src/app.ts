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
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "Filippo" }, { age: 27 }));

const mergeObj = merge({ name: "Filippo", hobbies: ["Gaming"] }, { age: 27 });
console.log(mergeObj.age);
