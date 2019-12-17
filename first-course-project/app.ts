function add(n1: number, n2: number) {
  return n1 + n2;
}

// this function doesn't return anything, return void!
function printResult(num: number) {
  console.log("Result: " + num);
}

// This function is the same of the above!!
// function printResult(num: number): undefined {
//   console.log("Result: " + num);
//   return;
// }

// let someValue: undefined; this can be done!
printResult(add(5, 12));
// console.log(printResult(add(5, 12))); // return undefined
