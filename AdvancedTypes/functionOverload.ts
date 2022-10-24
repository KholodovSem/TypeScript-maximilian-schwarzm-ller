/* 
    Function Overload
    Или проще говоря - возможность вызвать функцию с разными параметрами.
*/

type UnionType = string | number;

function add(a: UnionType, b: UnionType) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

/* 
    В данном примере выше мы создали UnionType, который равняется строке или числу.
    Функция для складывания чисел принимает два аргумента UnionType.

    Но сложность в том, что получая результат, как в примере ниже.
    TS всё ещё не уверен что полученное значение будет какого-то конкретного типа.
    Мы конечно можем воспользоваться ранее изучеными фичами: as || <>
*/
const result = <number>add(1, 2); //Мы явно говорим что тут будет число
const result2 = <string>add(1, 2); //Мы явно говорим что тут будет строка

/* 
    Но лучшим и более ожидаемым решением было бы использование перегрузки функций.
    Сначала мы определям эпостаси функции, тоесть с какими типами она может использоваться,
    а также какие типы будет возвращать, после чего, последним вариантом всегда идёт
    сигнатура функции, где описываются уже конкретные действия, которые будут происходить.
*/
function addOverloadFn(a: number, b: number): number;
function addOverloadFn(a: string, b: string): string;
function addOverloadFn(a: any, b: any): any {
  return a + b;
}

//И уже в данном случае и мы, и TS имеем четкое представление что мы получаем на выходе.
const result3 = addOverloadFn(1, 2);
const result4 = addOverloadFn("1", "2");

/*
    *Optional Chaining
    Помогает избежать падения JavaScript кода, например при обращении к свойству
    объекта, которого потенциально может не сущестовать.
    Реализуется благодаря оператору "?".
*/

const fetchedData = {
  id: "ul1",
  name: "Sem",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedData?.job?.title);

/*
 *Оператор нулевого слияния "??"
 Если то что слева от данного оператора равняется Null or Undefined, будет выполнена
 правая часть, если нет, то левая.
 */

const userInput = null;

const storedData = userInput ?? "Hello";

export {};
