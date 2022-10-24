/* 
    TypeScript Generic Utils
*/

/*
 *Partial
 */
interface CourseGoal {
  name: string;
  description: string;
  completeUntil: Date;
}

//Задача: Написать функцию, которая создаёт объект по схеме интерфейса CourseGoal

//Вариант 1.
function createCourseGoal(
  name: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  return {
    name,
    description,
    completeUntil,
  };
}

//Вариант 2.
function createCourseGoalWithPartial(
  name: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  // const courseGoal: CourseGoal = {}; Так сдедать нельзя, не соответсвует схеме.
  const courseGoal: Partial<CourseGoal> = {};
  //Так сделать можно, мы заверяем TS, что в итоге эта переменная будет соответсвовать схеме
  courseGoal.name = name;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
}

/* 
    Readonly utils
*/

const names: Readonly<string[]> = ["Sem", "Anatan"];
//! names.push() - Property 'push' does not exist on type 'readonly string[]'.
