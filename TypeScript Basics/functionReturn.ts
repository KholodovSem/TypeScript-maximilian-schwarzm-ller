/* 
    Function return

    Мы можем определять типы для переменных. Точно также мы можем явно или неявно определять
    что будет возвращать функция.
    * Лучше позволить это делать TypeScript
    Но тем не менее мы может указать возвращаемый тип своими руками.
*/

// Тут я не указываю возвращаемый тип, но при наведении курсора на название функции, я увижу что она возвращает
const add = (num1: number, num2: number) => {
  return num1 + num2;
};

// Тут я указываю явно, что функция будет возвращать число
const add2 = (num1: number, num2: number): number => {
  /* return num1.toString() + num2.toString()  Type 'string' is not assignable to type 'number'.
  Это даёт свои плюсы. TS - не даст нам вернуть ничего кроме указаного типа
  */
  return num1 + num2;
};

/* 
Кроме того, часто мы пишем функции, которые не возвращают ничего.
В TS для этого есть отдельный тип - Void.
Он так и говорит - мы возвращаем (ничего).
*/

// При наведении на названее мы видим возвращаемый тип - Void
const printResult = (num: number) => {
  console.log("Result" + num);
};

// Тут я его указываю явно
const printResult2 = (num: number): void => {
  console.log("Result" + num);
};

/* 
С технической стороны, мы возвращаем undefined - даже если у нас в функции отстутвует слово "return".
Но TS - на это смотрит по другому
*/

const voidFn = (): undefined => {
  /* 
    Я немогу так сделать (оставить тело пустым, хотя по факту функция вернёт undefined), так как TS - выдаст ошибку:
    A function whose declared type is neither 'void' nor 'any' must return a value.
    */

  return; // А вот так могу. Но тоже я могу сделать и с void
};

const voidFn2 = (): void => {
  return;
};

// Кстати, да. В TS - есть отдельный тип для undefined, а также для null

const undefinedType = undefined;
const nullType = null;

export {};
