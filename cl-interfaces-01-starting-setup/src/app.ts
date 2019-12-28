// an interface describes how an object should look like... it's like a custome type
// an interface it's like a contract for a class
interface Greetable {
  name: string;

  greet(phrase: string): void;
}
//class can implement more than only one interface!!
class Person implements Greetable {
  name: string;
  age = 27;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Filippo");

user1.greet("Hello there - I am");
console.log(user1);
