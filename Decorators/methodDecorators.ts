/* 
    Property, Accessor, Method Decorator's
*/

class Product {
  @PropertyDecorator
  title: string;
  private _price: number;

  get price() {
    return this._price;
  }

  @AccessorDecorator
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @MethodDecorator
  getPriceWithTax(@ParamDecorator tax: number) {
    return this._price * (1 + tax);
  }
}

const pers = new Product("Iphone", 1000);

function PropertyDecorator(t: any, propertyName: string | symbol) {
  //Где t - это прототип объекта, а propertyName - это то свойство, перед которым установлен декоратор
  console.log("Target:", t);
  console.log("PropertyName:", propertyName);
}

function AccessorDecorator(
  t: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator!");
  console.log("Target", t);
  console.log("Name", name);
  console.log("Descriptor", descriptor);
}

function MethodDecorator(
  t: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log("Target", t);
  console.log("Name", name);
  console.log("Descriptor", descriptor);
}

function ParamDecorator(t: any, methodName: string | symbol, position: number) {
  console.log("Param decorator!");
  console.log("Target", t);
  console.log("Method Name", methodName);
  console.log("position", position);
}

export {};
