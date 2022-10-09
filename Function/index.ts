//* Function in JS
function jsLogInfo(name, age) {
  console.log(`Hello ${name}, your age is ${age}`);
}

//* Fumction is TS
function tsLogInfo(name: string, age: number): void {
  console.log(`Hello ${name}, your age is ${age}`);
}

/* В примере выше мы говорим что аргемент Name будет строкой,
   Age - числом, а возвращать функция будет - ничего.
   
*/

console.log(tsLogInfo("Sem Kholodov", 22));
