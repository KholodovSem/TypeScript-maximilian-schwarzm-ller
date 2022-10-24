/* 
Tuples(Кортеж) - это массив, фиксированной длины. Как правило он защищен от изменений.
*/

const role: readonly [number, string] = [2, "author"];

/* 
В данном примере мы объявили переменну role. 
И хотели бы сделать так, чтобы она принимала только два элемента, при этом - чтобы один был
числом (0 - index), а второй строкой (1 - index).
А также, чтобы их было невозможно изменить.

Поэтому сразу после двоиточия мы использовали ключевое слово "readonly", которое запрещает как0либо изменять
массив, а также явно указали тип - это массив [], но внутри себя он содержит два элемента, определённых
типов number, string - [number, string]
*/

// role.push - Property 'push' does not exist on type 'readonly [number, string]'.
// role[0] = 3; - Cannot assign to '0' because it is a read-only property.
// role[1] = "editor"; - Cannot assign to '1' because it is a read-only property.

// Для чтения наша переменная доступна
for (let property of role) {
  console.log(property);
}
