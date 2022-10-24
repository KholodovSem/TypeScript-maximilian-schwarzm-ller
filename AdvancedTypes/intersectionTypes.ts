/* 
    Intersection Types (Типы пересичений).
    Реализовуется с помощью оператора &.
    Таким образом мы говорим что создаваемый тип будет состоять из двух типов
    объявленных слева и справа от амперсанда.
*/

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Sem",
  privileges: ["create-server"],
  startDate: new Date(),
};

/* 
    Это очень похоже на наследование интерфейсов, ведь результат будет
    идентичный.
*/

interface FirstName {
  firstName: string;
}

interface Fullname extends FirstName {
  lastName: string;
}

const fullname: Fullname = {
  firstName: "Sem",
  lastName: "Kholodov",
};

export {};
