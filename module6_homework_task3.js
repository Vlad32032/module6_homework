/* Задание 3.

Написать функцию, которая принимает число как аргумент и возвращает функцию,
которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.*/

function numSum(num) {
    const a = num;
    return function argSum(num) {
        const b = num;
        return a + b;
    }
} 

const sum = numSum(9);

console.log(sum(3));