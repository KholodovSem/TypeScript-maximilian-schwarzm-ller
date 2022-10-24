/* 
    Keyof Operator
*/

//Создали тип - объект со свойствами a, b, c
type CustomObject = { a: 1; b: 2; c: 3 };

//Оператор keyof создаёт юнион тип из ключей указанного типа.
//* "a" | "b" | "c"
type KeyOfCustomObject = keyof CustomObject;

//Функция принимает агрумент типа KeyOfCustomObject
function fn(a: KeyOfCustomObject) {
  return a;
}

//* Это сработает
fn("a");
fn("b");
fn("c");

//! Это нет
//fn('d');
//fn('y');
//fn('u');
