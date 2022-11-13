/* Задание 5.

Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.

Протестируйте функцию на любых значениях и выведите результат в консоль.*/

const exponentiation = (a, b) => {return (a ** b)};

// проверка функции

console.log(exponentiation(2, 2));
console.log(exponentiation(2, 3));
console.log(exponentiation(2, 4));
console.log(exponentiation(3, 3));
console.log(exponentiation(9, 9));