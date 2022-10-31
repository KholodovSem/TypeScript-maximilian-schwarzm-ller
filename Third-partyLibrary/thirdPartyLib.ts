import "reflect-metadata";
//import { plainToClass } from "class-transformer";
//import { IsNotEmpty, IsNumber, IsPositive, validate } from "class-validator";

/* 
    Third Party Lib

    Библиотеки при работе с TS, можно разбить на две категории:
    *General lib
    *Specific lib
   
    !Lodash - не работает в связке с TS, потому что написан на JS
    !@types/lodash - спец. версия Lodash для работы с TS

    Как правило для любой сторонней библиотеки есть поддержка типов, дополнительно
    их необходимо установить.
    Обычно она называется: @types/[libName].

    Если у нас есть, например, какие-то переменные объявленные глобально.
    Допустим в HTML-файле:

    <head>
    </head>
    <body>
        ...
    </body>
    <script>
        var GLOBAL = "Hello, it's me"
    </script>

    Мы сможем получить к ней доступ, хотя компилятор будет регаться.
    Для того чтобы обработать данную ситуацию корректно, можно воспользоваться 
    ключевым словом //*declare 
*/

//* Class-transformator
//product-model
class Product {
  //@IsNotEmpty()
  title: string;
  //@IsNumber()
  //@IsPositive()
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }

  getInformation() {
    return [this.title, `$${this.price}`];
  }
}

const books = [
  { title: "Harry Potter", price: 29.99 },
  { title: "Warcraft", price: 19.87 },
];
//Своими ручками
const loadedProductWithHands = books.map((book) => {
  return new Product(book.title, book.price);
});
console.log(loadedProductWithHands);

//Преобразовывает каждый объект массива в экземпляр класса
//const loadedProduct = plainToClass(Product, books);
//console.log(loadedProduct);

//* Class validator
//Пакет, который предоставляет нам готовые декораторы для валидации классов
//! Важно. Это фабрики декораторов поэтому синтаксис @Decorator()
//! Важно. После установки декораторов, прогнать экземпляр через метод validate
const newProd = new Product("", -5);
// validate(newProd).then((errors: any) => {
//   if (errors.length > 0) {
//     console.log(errors);
//   }
//   console.log(newProd);
// });
