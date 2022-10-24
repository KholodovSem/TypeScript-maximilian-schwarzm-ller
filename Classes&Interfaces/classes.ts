// Object - это тип данных в котором мы храним какую-то информацию, методы.
// Classes - это чертежы для создания однотипных объектов.

abstract class Department {
  //Можем определять тип свойств и их значения

  /*
  Ключевое слово public, говорит о том что это свойство публичное.
  Это значение для свойств и методов по умолчанию.
  */
  //!public name: string;
  /*
  У метода ниже присутсвует ключевое слово Privat, что защищает его от внешнего
  воздействия, теперь мы имеем к нему доступ только в экземпляре класса. 
  */
  //private employees: string[] = [];
  protected employees: string[] = [];

  /*
  Можем добававлять значения свойств динамически, принимая их в конструкторе
  Сейчас мы дублирем код, сначала перечисляя какие свойства есть у класса выше в коде,
  а затем принимая их в конструкторе.
  Мы можем сократить код, работая только с конструктором.

  Указывая рядом с принимаемым параметром ключевые слова: Public, Private
  мы говорим TS, что также хотим создать такие свойства в классе.

  readonly - ключевое слово, которое делает свойство, метод, переменную доступной
  только для чтения.
  */
  constructor(
    protected name: string,
    private readonly id: number = Date.now()
  ) {
    //!this.name = name;
  }
  //Мы можем добавлять методы в наш конструктор, которые будут доступны у экземпляров.
  describe(this: Department) {
    //В данном случае, мы привязываем this к классу со структурой Department.
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  /* 
    Ещё одно новое ключевое слово "abstract".
    Для его использования, нужно пометить сам класс словом abstract,
    а затем метод.
    Реализация в самом классе должна отсутсвовать.
    Теперь мы обязуем все наследуемые классы реализовывать у себя данный метод,
    но его реализация может отличаться от класса к классу.
 */
  abstract printDepartmentName(this: Department): void;

  /*
  Ещё одно ключевое слово - это Static.
  Делает доступным поле или метод без создания экземпляра класса.
  Но при этом внутри самого класа у нас нет доступа к статическим свойствам или методам.
*/
  static returnValue(value: any) {
    return value;
  }
}

const randomValue = Department.returnValue({ name: "Sem" });

//* Inheritance in classes
/* 
Наследование - это ещё одна крутая вещь, с которой точно нужно познакомиться.
У нас есть базовая структура отдела, описаная в классе Department.

Но также есть свойства и методы, которые должны быть у каждого отдельного отдела.
В этом нам поможет наследование.
*/

//Наследование от класса совершается с помощью ключевого слова Extends
class ITDepartment extends Department {
  constructor(name: string, public admins: string[], id: number = Date.now()) {
    super(name, id);
  }

  printDepartmentName() {
    console.log(this.name);
  }
}

class AccountingDepartment extends Department {
  private _lastReport: string;

  /*
    * Get 
    - мы сможем обращатся к данному свойству через точечную нотацию
    obj.mostRecentReports 
    Но за кулисами будет выполняться логика гетера.
    */
  get lastReport() {
    if (this._lastReport) {
      return this._lastReport;
    }
    throw new Error("No report found");
  }

  /* 
    *Set
    - работает аналогично геттеру.
    Геттеры и сеттеры всегда идут в паре.
    Сеттер всегда принимает какое-то передаваемое юзером значение. 
  */
  set lastReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(
    name: string,
    private reports: string[],
    id: number = Date.now()
  ) {
    super(name, id);
    this._lastReport = reports[0];
  }

  // В наследуемых классах мы можем переопределять методы родительского класса
  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    //Так как массив сотрудников у нас помечен private.
    //Изменять мы его можем только в классе, в котором его и определили
    //Что бы добавить возможность изменять его и в экземплярах, можно использовать
    //Ключевое слово Protected
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this._lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }

  printDepartmentName() {
    console.log(this.name);
    console.log(this.employees);
  }
}

const itDepartment = new ITDepartment("IT", ["Sem"]);
const accounting = new AccountingDepartment("Accounting", ["12"]);
