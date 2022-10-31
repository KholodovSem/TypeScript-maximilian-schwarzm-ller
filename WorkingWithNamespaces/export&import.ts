/* 
    * Namespaces & export, import ES6
   
   И то, и другое используется для правильной организации кода проекта.
   До появления modules ES6, использовались namespace от TS.
   Они позволяли делить код на разные файлы, для того чтобы его было легче поддерживать,
   а сам код становился легкочитаемым.
   Использование:
   Объявляем общий namespace, например: "App" - namespace App {}
   Его мы будем использовать сразу в нескольких файлах.

   Допустим у нас есть класс и декоратор, мы бы не хотели все хранить в одном файле,
   так как со временем он будет становиться больше.
   Поэтому мы переместили декоратор в один файл, класс в другой.

   !class.ts
   /// <reference path="./decorator.ts"/>
   namespace App {
   class App {
        propertyOne: string;
        propertyTwo: string;

        constructor(propertyOne: string, propertyTwo: string){
                this.propertyOne = propertyOne;
                this.propertyTwo = propertyTwo;
        }

        @Autobind
        exampleFn(){
            console.log(this.propertyOne);
        }
   }
   }

   !decorator.ts
   namespace App {
        function AutoBind(){
            ...Function implementation
        }
   }

   В данном примере мы код в разных файлов поместили в неймспейс с одним названием, 
   а там где мы должны использовать код из другого файла испортируем нужный файл.
   Для того чтобы это в итоге правильно компилировалось, в файле tsconfig.json нужно:

   1. "module": "commonjs" заменить на "module": "AMD"
   2. "outFile": "" - расскоментировать и указать путь для единого файла который получиться после
                      компеляции.




   Второй подход классический и используется сейчас, это module ES6.
   Процесс стандартный, делим код на файлы, там где нужен код из другого файла,
   используем export, import.
   В файле tsconfig.json нужно:
   "target" - должен быть не ранее es6.
   "module" - не ранее ES2015
   У главного файла .js, который мы подключаем в HTML - указать type="module"
*/
