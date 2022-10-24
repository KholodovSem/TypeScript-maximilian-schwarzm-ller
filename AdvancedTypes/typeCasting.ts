/* 
    Type Casting 
*/

/*
    Допустим у нас есть HTML-элемент (input).
    Мы его получаем по id.
    В данном случае, TS не знает что данный элемент обязательно будет input.
    Он его определяет обобщённо как HTML-element и тогда мы не можем обратится 
    к свойству value у нашего input.

    Два аналогичных варианта решить данную задачу.
    1. После присвоения переменной элемента HTML указать с помощью слова as что это
    HTMLInputElement
    2. Перед присвоением с помощью угловыех скобок сказать что это будет HTMLInputElement 
*/

const input = document.getElementById("user-input")! as HTMLInputElement;
input.value = "Hi there!";

const input2 = <HTMLInputElement>document.getElementById("user-input");
input2.value = "Hi there!";

//Также мы можем использовать ранее рассмотренный синтаксис в другой части кода.

//При наведении курсора на переменную input3, мы можем увидеть возможные типы HTMLElement | Null
const input3 = document.getElementById("user-input");
const input4 = document.getElementById("user-input");

if (input3) {
  (input3 as HTMLInputElement).value = "Hi there!";
}
if (input3) {
  (<HTMLInputElement>input3).value = "Hi there!";
}

/* 
    Тоесть сначала мы убеждаемся что наша переменная не является null, после чего
    утверждаем что это InputElement и проводим над ней какие-то манипуляции.
*/

/* 
    Index Signature
    Возможность задать структуру будующего объекта в интерфейсе, не указывая при этом
    четкое название свойства.
    Осущуствляется с помощью квадратных скобок [prop: string]: string (тип может быть любой).
    
    В примере ниже мы говорим:
    В объекте должно быть свойство id - с типом строка.
    А также произвольное кол-во других свойств - с типом строка.

    !Важное правило, типы явно заданных свойств и индексируемых не должны конфликтовать.
*/
interface ErrorContainer {
  id: string;
  [key: string]: string;
}

const errorObj: ErrorContainer = {
  id: "1",
  email: "Email is not valid",
  password: "Password is incorrect",
};
