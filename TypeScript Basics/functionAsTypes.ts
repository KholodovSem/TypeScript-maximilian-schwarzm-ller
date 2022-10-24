/* 
    Тип - функция.

    Допустим у нас задача, сохранить функцию в другую переменную, при этом типизировав эту переменную.

*/

function add(num1: number, num2: number) {
  return num1 + num2;
}

function logValue(value: any) {
  console.log(value);
}

/* 
  Мы могли бы просто указать Function как принимаемый тип, но это бы не обезопасило нас полностью.
  Так как мы могли бы записать туда абсолютно любую функцию.
*/

let combineValues: Function = add;
combineValues = logValue;

/* 
Поэтому нам нужно её описать как что-то более конкретное.
*/

let combineValues2: (a: number, b: number) => number = add;
// combineValues2 = logValue - Type '(value: any) => void' is not assignable to type '(a: number, b: number) => number'.
//  Type 'void' is not assignable to type 'number'.

/* 
 И вот уже в данном примере, мы себя хорошо защитили, ведь мы достаточно конкретно описали, 
 какая функция должна находиться в переменной.
 Она будет принимать два числа, и возвращать число.
*/

/* 
    Анологично мы можем типизировать функцию, как один из аргументов другой функции.
*/

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

/* 
    Интересно то, что несмотря на то, что мы указали что cb возвращает void.
    Мы можем вернуть оттуда все что угодно.
*/
