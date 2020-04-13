// in this way logger is a decorator factory
// in this way we can pass argument to decorator declaration and doing stuff internally
function Logger(logStrings: string) {
  return function (constructor: Function) {
    console.log(logStrings);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  /**
   * using _ means: Now I'm not interested in the constructor and to tell typescript that I'm not interested here I can
   * add an underscore as a name which basically signals to typescript.
   * Yeah I know I get this argument but I don't need it.
   */
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// Decorator runs when javascript find your class definition
// In this case WithTemplate execute first and then Logger, but i'm talking about the real decorator function
// the one wich we are returning
// the creation of the decorators follow the order declaration (first Logger and the WithTemplate)
@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Filippo";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();

console.log(person);
