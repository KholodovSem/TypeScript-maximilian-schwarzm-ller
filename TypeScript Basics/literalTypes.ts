/* 
Literal Types (Литеральные типы)

Давайте модифицируем нашу функцию.
Добавим в неё третий аргумент, который будет говорить нам, какой тип данных к нам поступает.
Мы также знаем, что принимать наша функция может либо строку, либо число, а значит 
третий аргумент, будет иметь ограниченный спектр возможных значений (2):

* 1. as-number
* 2. as-string

Как это правильно сделать?
Мы бы могли использовать ранее изученный Enum, но в качестве альтернативы, мы можем использовать
литерьный тип.
Он буквально говорит что значением данной переменной будет определённое значение.
*/

const name = "Sem"; // Тип данной переменной не просто строка, а строка "Sem"
const age = 22; // Тип данной переменной не просто число, а число 22
const flag = true; // Тип данной переменной не просто буль, а буль true

const add = (
  n1: number | string,
  n2: number | string,
  paramsType: "as-number" | "as-string"
) => {
  if (
    paramsType === "as-number" &&
    typeof n1 === "number" &&
    typeof n2 === "number"
  ) {
    return n1 + n2;
  } else {
    return +n1 + +n2;
  }
};

//В данном примере, мы в переменную paramsType принимаем только определённые строки: 'as-number' | 'as-string'

export {};
