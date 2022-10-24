/* 
    Decorators
*/

//Декоратор - это просто функция
function Logger(target: Function) {
  console.log("Logging...");
  console.log(target);
}

//Вызываеться перед объявлением класса или объявлением метода класса
//Данный декоратор срабатывает до вызова конструктора
//@Logger
//@DecoratorFabric("Hello")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Sem";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

//---------------------------------Decorators Fabric--------------------------------------
//Удобно использвать, к тому же тогда мы сможем передавать аргументы в наш декоратор
function DecoratorFabric(arg: any): Function {
  return function (_target: Function) {
    console.log(arg);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (_target: any) {
    const hookEl = document.getElementById(hookId);
    const p = new _target();
    if (hookEl) {
      hookEl.innerHTML = template + "" + p.name;
    }
  };
}

export {};
