"use strict";
/*
    Advanced things with decorators in TypeScript
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Return in class decorator
//* Мы можем вернуть новую функцию конструктор
function WithTemplate(template, hookId) {
    return function (t) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _args[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                var appEl = document.getElementById(hookId);
                if (appEl) {
                    appEl.innerHTML = template + _this.name;
                }
                else {
                    throw new Error("Invalid hook id: ".concat(hookId));
                }
                return _this;
            }
            return class_1;
        }(t));
    };
}
//Return is class asseccory
// * Можем вернуть новый дескриптор
function AccessoryDecorator(_t, _name, _descriptor) {
    return {
        //...descriptor property
    };
}
//Return in method decorator
function MethodDecorator(_t, _methodName, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
var Printer = /** @class */ (function () {
    function Printer() {
        this.message = "This works!";
    }
    Printer.prototype.showMessage = function () {
        console.log(this.message);
    };
    __decorate([
        MethodDecorator
    ], Printer.prototype, "showMessage", null);
    return Printer;
}());
var printer = new Printer();
var buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", printer.showMessage);
//--------------------------------------------------------------------
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Sem";
    }
    Person = __decorate([
        WithTemplate("<h1>Person name: </h1>", "app")
    ], Person);
    return Person;
}());
//Теперь декоратор сработает только при создании экземпляра класса
var pers = new Person();
