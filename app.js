"use strict";
exports.__esModule = true;
require("reflect-metadata");
var class_transformer_1 = require("class-transformer");
console.log(GLOBAL); // Without error
//* Class-transformator
//product-model
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this.price = p;
    }
    Product.prototype.getInformation = function () {
        return [this.title, "$".concat(this.price)];
    };
    return Product;
}());
var books = [
    { title: "Harry Potter", price: 29.99 },
    { title: "Warcraft", price: 19.87 },
];
//Своими ручками
var loadedProductWithHands = books.map(function (book) {
    new Product(book.title, book.price);
});
console.log(loadedProductWithHands);
//Преобразовывает каждый объект массива в экземпляр класса
var loadedProduct = (0, class_transformer_1.plainToClass)(Product, books);
console.log(loadedProduct);