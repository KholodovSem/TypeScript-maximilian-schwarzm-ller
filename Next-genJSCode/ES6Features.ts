//ES 6 features

//Const - после определения не может быть изменена. Область видимости блочная
const userName = "Sem";
//userName = 'Alen' // Так сделать нельзя

//Let - можно переопределить по ходу работы. Область видимости блочная
let age = 22;

//Var - пожно переопределить по ходу работы. Область видимости функциональная
{
  var userLastName = "Kholodov";
}

console.log(userLastName);

//Arrow function () => {}
const add = (a: number, b: number) => {
  return a + b;
};

// if we have only one expression
const add2 = (a: number, b: number) => a + b;

// if we have only one argument
const add3: (a: number) => number = (a) => a;

//Default value in function
const mult = (a: number = 5, b: number = 5) => a * b;

//Spread operator for array
//* Add new values for array
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

//Or
const hobbies2 = ["Sports", "Cooking"];
const activeHobbies2 = ["Hiking"];
activeHobbies2.push(...hobbies2);

//* Copy array
const users = ["Sem", "Jhon"];
const copiedUsers = [...users];

//Spread operator for object
//Copied object

const jhon = {
  name: "Jhon",
};

const jhon2 = {
  ...jhon,
};

//Rest operator
const restAdd = (...args: number[]) =>
  args.reduce((acc, number) => (acc += number));

//Destructirisation
//Object
const { name } = jhon;

//Name override
const { name: FirstName } = jhon2;

//Array
const [firstName, secondName] = users;

export {};
