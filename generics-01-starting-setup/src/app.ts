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

// generic class
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Filippo");
textStorage.addItem("Marika");
textStorage.removeItem("Filippo");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// we can use multiple types of data
// const numberStorage = new DataStorage<number | string>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Filippo" });
// objStorage.addItem({ name: "Marika" });
// // ...
// objStorage.removeItem({ name: "Filippo" });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  /**
   * Now what this does is it tells typescript that this is an object which in the end will be a course goal
    but initially partial kind of wraps our own type and changes it to a type where all these properties
    are optional.
   */
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Filippo", "Marika"];
// if an element is readonly you can't manipulate that element
// names.push("Marco");
// names.pop();
