/* 
    Never (никогда)
    Существуют ситуации, когда функция, никогда ничего не возращает.
    Как например функция ниже, которая генерирует ошибку.
    Она приводит к сбою, мы можем указать возвращаемый тип как Void так и Never.
    Но правильнее всё же указать Never
*/

function generateError(message: string, code: number): never {
  throw {
    message,
    errorCode: code,
  };
}
