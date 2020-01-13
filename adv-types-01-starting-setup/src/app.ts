type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface Admin {
//   name: string;
//   priviliges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Employee, Admin {}

// new type created joining Admin and employee
// this can be done with interfaces or types
// also creating a third interfaces
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Filippo",
  privileges: ["create-server"],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

// intersection operator can be used with any type
// intellisense is saying that Universal is number type because it is the result of the instersection with these two type
// in short word it is the type in common!
type Universal = Combinable & Numeric;

// Type guard

// it is usefull with union types

// this code is a function overload
// it is eliminated when typescript will be converted in javascript
// basically combines knowledge of this function
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  // start of type guard
  /**
   * NOTE: This allows us to check if our code runs correctly at runtime
   * avoiding bugs
   */
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  // end of type guard
  return a + b;
}
// Some type guard can be done with typeof keyword

type UnknowEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknowEmployee) {
  console.log("Name: " + emp.name);
  //this can't be done because this check is done at runtime, using javascript
  //   if(typeof emp === 'Employee') {

  //   }
  // this type guard check if there is a property privileges in object employee
  // this is javascript code
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);
// this also work, even if we create data on the fly
printEmployeeInformation({ name: "Pippo", startDate: new Date() });

// you can use type guard also with classes with the keyword instanceof

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // this is a way, but not the most elegant
  //   if ("loadCargo" in vehicle) {
  //     vehicle.loadCargo(1000);
  //   }
  // this code check if vechicle is an instance of truck class
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions

// in this case we have a common property in these interfaces which describe what kind
// of interfaces we are using
interface Bird {
  // this is not a value for keyword type!
  // this is a literal type
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // this is correct, but if we have a lot of animals we have to write a lot of code
  // we also can mistyped the string
  // instaceof cannot be use because we are using interfaces
  //   if ("flyingSpeed" in animal) {
  //     console.log("Moving with speed: " + animal.flyingSpeed);
  //   }
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// type casting
// typescript can understand what kind of html element you are targetting in this case
const userParagraphElement = document.getElementsByTagName("p");
// if us use getElementById cannot understand what type of html element are you targetting
// but you can cast the element with the correct type
// if you use react that syntax can be see in components creation with jsx
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;

// this is also correct
// with type casting you also say that: this element will never be null
// const userInputElement = document.getElementById("user-input") as HTMLInputElement;

// you can also check at runtime if the element is null or not, like this
const userInputElement = document.getElementById("user-input");

// this is an alternative to document.getElementById("user-input")!
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi There!";
}

// Index Properties

interface ErrorContainer {
  // {email: 'not a valid email', username: 'Must start with character!'}
  /**
   * So with that I'm saying I don't know the exact property name.
    I also don't know the property count.
    I just know that every property which is added to does object which is based on error container must
    have a property name which can be interpreted as a string and the value for that property also must
    be a string.
   */
  // we can also define predifined property
  //   id: string;
  // but, if we have an index property we can define property with a different type
  // num: number;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with capital character!"
};

// Function Overloads

// this is a feature that allows us to create multiple signature of a function
// for this section we will use the previous add function as an example
const result = add(1, 5);

// it is correct to use add function like this
const result_string = add("Filippo", "Nardi");
// because the add function can handle strings and number (combinable input)
result_string.toString();
// we can also use type casting to handle

// Optional Chaining
const fetchedUserData = {
  id: "u1",
  name: "Filippo",
  // let's assume that job doesn't exist
  job: { title: "CEO", description: "My own company" }
};

// editors can get an error because it's a new feature in typescript
// now it's sure that it is an error because job doesn't exist
// this operatore is usefull when you have to fetch data from an API
// and you are not sure if that type of data exist
console.log(fetchedUserData?.job.title);

// Nullish Coalesing

// let's assume that this data can be null
const userInput = undefined;

// this approach it's not good because if userInput it's and empty string DAFAULT will be choosen
// const storedData = userInput || "DEFAULT";
// Instead, with this approach only if it is null or undefined
const storedData = userInput ?? "DEFAULT";

console.log(storedData);
