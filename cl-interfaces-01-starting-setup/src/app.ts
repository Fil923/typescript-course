// an interface describes how an object should look like... it's like a custome type
// an interface it's like a contract for a class

// this can be done with an interface
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

// You can implement inheritance even in interfaces
interface Named {
  // in interfaces you can set readonly property
  // if a property is readonly, you can't change after is setted once
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}
//class can implement more than only one interface!!
class Person implements Greetable {
  name?: string;
  age = 27;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Filippo");
// this is not possible because name is readonly
//user1.name = "Max";

user1.greet("Hello there - I am");
console.log(user1);
