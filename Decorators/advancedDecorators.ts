/* 
    Advanced things with decorators in TypeScript
*/

//Return in class decorator
//* Мы можем вернуть новую функцию конструктор
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(t: T) {
    return class extends t {
      constructor(..._args: any[]) {
        super();
        const appEl = document.getElementById(hookId);
        if (appEl) {
          appEl.innerHTML = template + this.name;
        } else {
          throw new Error(`Invalid hook id: ${hookId}`);
        }
      }
    };
  };
}

//Return is class asseccory
// * Можем вернуть новый дескриптор
function AccessoryDecorator(
  _t: any,
  _name: string,
  _descriptor: PropertyDescriptor
): PropertyDescriptor {
  return {
    //...descriptor property
  };
}

//Return in method decorator

function MethodDecorator(
  _t: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @MethodDecorator
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();
const buttonEl = document.querySelector("button") as HTMLButtonElement;
buttonEl.addEventListener("click", printer.showMessage);

//--------------------------------------------------------------------

@WithTemplate("<h1>Person name: </h1>", "app")
class Person {
  name = "Sem";

  constructor() {}
}

//Теперь декоратор сработает только при создании экземпляра класса
const pers = new Person();

//------------------------------Decorator's for validation-------------------------
class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

//-------------------------------Form-----------------------
const courseForm = document.querySelector("form") as HTMLFormElement;
courseForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;
  const title = titleEl.value;
  const price = Number(priceEl.value);

  const createdCourse = new Course(title, price);
});
//----------------------------------------------------------
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ["required", "positive"]
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(t: any, propName: string) {
  registeredValidators[t.constructor.name] = {
    [propName]: ["required"],
  };
}
function PositiveNumber(t: any, propName: string) {
  registeredValidators[t.constructor.name] = {
    [propName]: ["positive"],
  };
}

function validate(obj: object) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
}

export {};
