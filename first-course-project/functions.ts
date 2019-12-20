// store functions here
function add(n1: number, n2: number) {
  return n1 + n2;
}

// this function doesn't return anything, return void!
function printResult(num: number) {
  console.log("Result: " + num);
}
/**
 *
 * @param n1 @type number
 * @param n2 @type number
 * @param cb @type void @param number print result
 */

function addAndHanlde(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// This function is the same of the above!!
// function printResult(num: number): undefined {
//   console.log("Result: " + num);
//   return;
// }

// let someValue: undefined; this can be done!
// printResult(add(5, 12));
// console.log(printResult(add(5, 12))); // return undefined

// let combinevalue: Function;
let combinevalue: (a: number, b: number) => number; // this function now accept two parameters (number) and return a number

combinevalue = add; //pointer to a function in a variable
//combinevalue = printResult; // this is an error because printresult is void type
// combinevalue = 5; this is an error because we expect to pass a function in this variable

console.log(combinevalue(8, 8)); //execute function trough pointer passing parameters

addAndHanlde(10, 20, result => {
  console.log(result);
});
