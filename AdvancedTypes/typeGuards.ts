/* 
    Type Guard - это просто определение, которое используется при работе с 
    объеденёнными типами.
    Когда мы в функции вынуждены проверять что за тип к нам приходит.
*/
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`StartDate: ${emp.startDate}`);
  }
}

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Track {
  drive() {
    console.log("Driving a track...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Track;
const v1 = new Car();
const v2 = new Track();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1);
  }
}

//Альтернативный вариант, использовать оператор instanceof
//Таким образом мы проверяем является ли это экземпляром указанного класса
function useVehicle2(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Track) {
    vehicle.loadCargo(1);
  }
}

export {};
