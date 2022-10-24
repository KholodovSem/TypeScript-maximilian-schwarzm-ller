/* 
    Discriminated Unions
*/

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(a: Animal) {
  if ("flyingSpeed" in a) {
    console.log("Moving with speed: " + a.flyingSpeed);
  } else {
    console.log("Moving with speed: " + a.runningSpeed);
  }
}

/* 
    Смысл в том, что мы указываем у наших интерфейсов, какое-то общее свойство,
    которое будет говорить о типе данного интерфеса.
    На него мы будем ссылаться, как в примере ниже.
    У наших верхних интерфейсов таким свойсвтвом будет 'type'.
*/

function moveAnimal2(a: Animal) {
  switch (a.type) {
    case "bird":
      console.log("Moving with speed: " + a.flyingSpeed);
      break;
    case "horse":
      console.log("Moving with speed: " + a.runningSpeed);
  }
}
