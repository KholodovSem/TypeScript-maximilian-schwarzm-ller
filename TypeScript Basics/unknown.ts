/* 
    Unknown (неизвестный)
*/

/* 
    Тип unknown - похож на тип Any, так как мы можем положить туда что угодно.
    Но всё же он от него отличаеться, так как имеет свои ограничения.
*/

let userUnput: unknown;
userUnput = 5;
userUnput = "Sem";

// let name:string = userUnput; - Type 'unknown' is not assignable to type 'string'.

let userInput2: any;
userInput2 = 5;
userInput2 = "Sem";

let name: string = userInput2;

/* 
    Вот отличие типа unknown от типа any.
    any буквально отключает все проверки, а unknown накладывает ограничения
    Мы не можем положить в переменную ожидающую строку - unknown, так как там может находить всё что угодно. 
*/

if (typeof userUnput === "string") {
  name = userUnput;
}

// И уже в этом случае мы можем поместить unknown в переменную ожидающую строку. Так как мы явно делаем проверку.
// Поэтому Unknown - это действительно хороший вариант, когда мы не знаем что будет лежать в переменной.
// Например когда пользователь будет делать ввод. И одназначно это лучше Any.

export {};
