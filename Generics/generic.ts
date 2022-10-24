/* 
    Generic - обобщение
*/

/* 
    Допустим у нас есть задача, создать класс, который будет хранить коллекцию чего-то, допустим
    чисел.
    И метод get, который по индексу может единицу чего-то (чисел) возаращать.
    Скорее всего, мы бы реализовали его следующим образом.
*/

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number) {
    return this.collection[index];
  }
}

//Отлично, а теперь приходит задача создать такойже класс, но с коллекцией строк

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number) {
    return this.collection[index];
  }
}

//Задачу мы выполнили, но код дублируется. А что если нам нужно будет создать коллекцию объектов?

//Решением будет использование generic типов.
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number) {
    return this.collection[index];
  }
}

//Теперь это универсальное решение, так как когда мы будем создавать экземпляр класса, мы
//просто укажем какой тип будет хранить наша коллекция.

const instance = new ArrayOfAnything<object>([
  { name: "Sem" },
  { name: "Jhon" },
]);
const x = instance.get(0);
console.log(x);

const instance2 = new ArrayOfAnything<number>([2, 3]);
const x2 = instance.get(0);
console.log(x2);

//---------------------------------------------

class Storage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

export {};
