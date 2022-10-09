/*
TypeScript basic types:

1.String
2.Number
3.Boolean
4.Any
5.Array

*/

let str: string = "string";
let num: number = 1;
let flag: boolean = true;
let any: any = "any";

//! Array
//* The first version of the definition
let arrayOfString: string[] = ["1", "2", "3"];
let arrayOfNumber: number[] = [1, 2, 3];

//* The second version of the definition
let arrayOfString2: Array<string> = ["1", "2", "3"];
let arrayOfNumber2: Array<number> = [1, 2, 3];
