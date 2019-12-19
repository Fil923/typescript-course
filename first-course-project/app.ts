// unknow is better than any becuase avoid errors during development
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Filippo";
// userName = userInput; not allowed because is unknow, it's different to any

if (typeof userInput === "string") {
  userName = userInput; // this is allowed because there is a check and typescript detect it
}
// this functions return void, but for better understanding of code is good to set type return to never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// generateError("An error occurred!", 500); This function never returns a value
const result = generateError("An error occurred!", 500);
console.log(result);
