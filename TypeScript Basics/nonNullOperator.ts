/* 
Non Null operator - используя данный оператор мы говорим TS что мы уверены, что тут
не будет значения null.
*/

type StingOrNull = string | null;

function stringOrNull(arg: StingOrNull) {
  /* arg.toUpperCase();  Не могу вызвать данный метод у армента, так как потенциально, там
                       там может находиться Null */

  arg!.toUpperCase(); // А вот так могу
}

//Ещё один частый кейс, это когда мы хотим получить доступ к DOM - элементу

const btn = document.querySelector("button");
// btn.addEventListener("click", () => console.log("Click"));
//Снова не могу подписаться на событие "click", так как потенциально там может быть Null

const btn2 = document.querySelector("button")!;
btn2.addEventListener("click", () => console.log("Click")); // А так могу
