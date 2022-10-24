/* 
    Type Alias (Элиас)

    Продолжим модифицировать нашу функцию.
    Сейчас указание что аргументы n1, n2 это либо строка, либо число, выглядит довольно
    громоздко. В решении данной задачи нам может помочь Type Alias.
    По факту мы просто создаём элиас для определённого типа или типов данных, и далее сможем
    к нему возвращаться. 
*/

type Combinable = number | string;
type ParamsVariant = "as-number" | "as-string";

const add = (n1: Combinable, n2: Combinable, paramsType: ParamsVariant) => {
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

export {};
