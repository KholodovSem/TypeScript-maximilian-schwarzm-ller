/* 
Enum - позволяет определить набор именованных констант.
Можно использовать как числовые перечисления так и строковые.

Enum - очень удобен, если у нас есть ограниченное число констант, объедененных контекстом.
*/

//Числовые
enum Role {
  ADMIN, // 0
  READ_ONLY, // 1
  AUTHOR, // 2
}

// Строковые
enum Role2 {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
}

interface Person {
  name: string;
  age: number;
  role: Role;
}

const person: Person = {
  name: "Sem",
  age: 22,
  role: Role.ADMIN,
};
