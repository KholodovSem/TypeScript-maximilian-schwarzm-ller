// Данные две записи аналогичны, предпочтительнее первый варинт.

const person = {
  name: "Sem",
  age: 22,
};

const person2: {
  name: string;
  age: number;
} = {
  name: "Sem",
  age: 22,
};

const person3 = {
  name: "Sem",
  age: 22,
  hobbies: ["Sport", "Programming"],
};

console.log(person2.name);
console.log(person.name);

let favoriteActivities: string[];
favoriteActivities = ["Sport", "Programming"];

/*
Ещё одна очень классная особенность TypeScript - это анализ нашего кода.
Так как ранее мы указали что свойство "hobbies" в объекте person3 - это массив строк,
TypeScript при обращении к этому свойству, даст ряд подсказок, как мы можем с этим свойством обращаться.
Это массив, а значит мы можем применить все методы массива.
В тоже время, если я у person3.hobbies захочу вызвать метод toUpperCase(), который доступен строкам,
я сразу же получу ошибку с указанием о том, что данного метода нет у обращаемого свойства объекта.
Это позволяет нам исправлять ошибки в коде прямо во время написания, а не после сборки.
*/

// person3.hobbies.toUpperCase() - Property 'toUpperCase' does not exist on type 'string[]'

for (let hobbie of person3.hobbies) {
  console.log(hobbie.toUpperCase());
  /* 
    Тут аналогичная ситуация, мы ранее указывали что в хоби, храниться массив строк.
    Значит один элемент массива - это строка, нам доступны все её методы.
    Но если я , например, захочу вызвать метод map() у строки, то сразу же получу ошибку
    console.log(hobbie.map()) - Property 'map' does not exist on type 'string'.
    */
}

export {};
