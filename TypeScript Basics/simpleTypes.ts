/*
TypeScript basic types:

1.String
2.Number
3.Boolean

*/

const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
};

/* В большинстве случаев нет необходимости явно указывать что за тип данных будет находиться в переменной
   так как TypeScript и сам с этим хорошо справляется.
   Мы инициализировали переменнут let resultPhrase и записали туда строку.
   Теперь если мы на неё наведем курсор мыши, мы увидим что тип данной переменной String и 
   если мы позже захотим его переопределить, у нас это не получится, так как TypeScript выдаст ошибку
*/
const number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";
/* resultPhrase = 5; Type 'number' is not assignable to type 'string'. 

Это здорово экономит время. Тем не менее, мы должны явно указывать тип переменной, если мы объявляем переменную
но не инициализируем её никаким значением
*/

let any;
any = 5;
any = "5";

/*
В данном случае мы объявили переменную any и TypeScript идентифицировал её как Any, тоесть там
может находиться любой тип данных.
Поэтому если мы не знаем, какое значение будет у переменной, но точно знаем тип, лучше его указать явно.
*/

let number: number;
number = 5;
// number = '5'; Type 'string' is not assignable to type 'number'.

/*
В данном случае, мы явно указали что тип данных переменной number - number.
Поэтому позже, когда мы захотели присвоить этой переменой строку '5', TypeScript выдал ошибку.
*/

add(number1, number2, printResult, resultPhrase);

export {};
