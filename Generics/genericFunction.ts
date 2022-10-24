/* 
    Ограничения в generic types
*/

// Ограничение достигаеться благодаря ключевому слову extends
// * Мы буквально сужаем наш дженерик тип до указаного
function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  console.dir(element);
  let description = "Got no value.";
  if (element.length > 0) {
    description = `Got ${element.length} elements.`;
  }
  return [element, description];
}

/* 
    По умолчанию, без указания интерфейса Lengthy мы не моглибы вызвать метод
    length у element.
    Так как TS заранее не знает что за тип будет приходить.

    Но так как мы дополнили его до интерефейса Lengthy, это будет означать,
    что принимаемый элмент, как минимум должен иметь свойство length.
    Строка его имеет.
*/

countAndDescribe("Hello");

function extractAndConvert<T extends object, K extends keyof T>(
  obj: T,
  key: K
) {
  return obj[key];
}
