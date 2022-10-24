/* 
    Интерфейс используется для описания структуры объекта
*/

interface InterfacePerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: InterfacePerson;

user1 = {
  name: "Sem",
  age: 22,

  greet(phrase: string) {
    console.log(phrase);
  },
};

/* 
    Distinctions interface from type

    1.  Интерфейсы используются для описания структуры объекта или функции.
        Классы можно использователь для описание структуры всего.

    2.  Классы могут реализовываться сразу от нескольких интерфейсов, 
        чего нельзя сделать с типами.
*/

type UnionString = "Hello" | "Goodbye";

function greeting(phrase: UnionString, name: string) {
  console.log(`${phrase} ${name}`);
}

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

/* 
    Реализуя в классе интерфейс, мы как минимум должны удовлетворить все его требования.
    А также можем добавлять новые свойства и методы.
*/
class UserClass implements Greetable {
  age: number;

  constructor(public name: string, age: number) {
    this.age = age;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${name}`);
  }
}

//! Наследование в интерфейсах
//* Наследование осуществляется с помощью ключевого слова extends
//* В отличии от классов, мы можем наследоваться сразу от нескольких интерфейсов
interface FirstName {
  name: string;
}

interface LastName {
  lastName: string;
}

interface FullnameAndAge extends FirstName, LastName {
  age: number;
}

const user3: FullnameAndAge = {
  name: "Sem",
  lastName: "Kholodov",
  age: 22,
};

//! Интерфейсы для описания структуры функции
//* Функцию можно описать и с помощью типа, в большинстве ситуций - это даже предпочтительней.
interface AddFn {
  (a: number, b: number): number;
}

let addFn: AddFn;

addFn = (a: number, b: number) => {
  return a + b;
};

//Синтаксис у такой записи более читабельный
type IncrementFn = (a: number) => number;

let incrementFn: IncrementFn;

incrementFn = (a: number) => a - 5;

//* Необязательные свойства в интерфейсах и классах

interface Cat {
  name: string;
  age: number;
  nickname?: string;
}

const myCat: Cat = {
  name: "Murka",
  age: 5,
};

type Cat2 = {
  name: string;
  age: number;
  nickname?: string;
};

const myCat2: Cat2 = {
  name: "Murka",
  age: 5,
};

//С помощью вопросительно знака, мы говорим что данное свойство или метод опциональны.
