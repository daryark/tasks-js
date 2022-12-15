// task 1. Напишіть функцію avg, яка повертає середнє значення переданого масиву (якщо довжина масиву дорівнює нулю, то має повернутися 0).

// function avg(arr) {
// 	let total = 0;
// 	for (const el of arr) {
// 		total += el;
// 	}
// 	return (total /= arr.length);
// }

//refactor
// const avg = (arr) => {
// 	if (arr.length === 0) {
// 		return 0;
// 	}
// 	return arr.reduce((acc, el) => acc + el, 0) / arr.length;
// };

// console.log(avg([0, 1, 2, 3, 4, 5])); // 2.5
// console.log(avg([22, 34, 62, 99])); // 54.25
// console.log(avg([])); // 0
// console.log(avg([1000, 2056, 3444, 1237])); // 1934.25

//------------------------

// task 2. Напишіть функцію power для обчислення степені числа
//c: just redo
// function power(num, pow) {
// 	let res = 1;
// 	for (let i = 1; i <= pow; i += 1) {
// 		res *= num;
// 		return res;
// 	}
// }

// console.log(power(2, 3)); // 8
// console.log(power(4, 2)); // 16
// console.log(power(3, 4)); // 81
// console.log(power(10, 3)); // 1000

//------------------------

//task 3. Напишіть функцію squareDigits, яка приймає число та зводить у квадрат кожен символ.
//refactor
// const squareDigits = (num) =>
// 	Number(
// 		String(num)
// 			.split("")
// 			.map((digit) => digit ** 2)
// 			.join("")
// 	);

// console.log(squareDigits(91)); // 811
//     console.log(squareDigits(0)); // 0
//     console.log(squareDigits(867)); // 643649
//     console.log(squareDigits2(91)); // 811
//     console.log(squareDigits2(0)); // 0
//     console.log(squareDigits2(867)); // 643649

//------------------------

// task 4. Напишіть функцію isPalindrome, яка перевіряє, чи переданий рядок є паліндромом.
//task Паліндром - це слово, фраза чи послідовність, які читаються так само як уперед, назад, наприклад, level.
//refactor
// const isPalindrome = (word) => word.split("").reverse().join("") === word;

// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('topot')); // true
// console.log(isPalindrome('вимив')); // true
// console.log(isPalindrome('анна')); // true
// console.log(isPalindrome('алла')); // true
// console.log(isPalindrome('дід')); // true
// console.log(isPalindrome('ротатор')); // true
// console.log(isPalindrome('радар')); // true
// console.log(isPalindrome('привіт')); // false
// console.log(isPalindrome('що')); // false
// console.log(isPalindrome('that'));  // false

//------------------------

// task 5. Написати функцію stringTransformer, яка буде трансформувати рядок за такими правилами:
//task 1) Змінити регістр кожного знака, тобто. нижній регістр у верхній регістр, верхній регістр у нижній регістр. (наприклад 'FizzBuzz'-> 'fIZZbUZZ');
//task 2) Змінити порядок слів на зворотний (наприклад, 'pen pineapple apple PEN' --> 'pen APPLE PINEAPPLE PEN'). // Done

//refactor

// console.log(stringTransformer('torininGEN THE bEst'));
// BeST the TORININgen

// console.log(stringTransformer('JavaScript IS cool LANGUAGE'));
// language COOL is jAVAsCRIPT

//------------------------

// task 6. Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами
// f.e.Технічні вимоги:

//f.e. Взяти за допомогою модального вікна браузера два числа. ( функцією )
//f.e. Взяти за допомогою модального вікна браузера математичну операцію, яку потрібно здійснити. Сюди можна ввести +, -, *, /. ( функцією )
//f.e Створити функцію, в якій провести запит чисел, мат. операції та виконати обчислення )
//f.e Вивести у консоль результат виконання функції.
//
//fix Необов'язкове завдання додаткової складності:
//
//fix Після введення даних додати перевірку їхньої коректності.
//fix Якщо користувач не ввів числа, або при введенні вказав не числа - запитати обидва числа заново
// fix Якщо користувач ввів неправильний символ - запитати ще раз
//------------------------

// const takeNumbers = () => {
// 	const num1 = Number(prompt("Type number 1"));
// 	const num2 = Number(prompt("Type number 2"));

// 	switch (prompt("Type the operation")) {
// 		case "+":
// 			return num1 + num2;
// 		case "-":
// 			return num1 - num2;
// 		case "*":
// 			return num1 * num2;
// 		case "/":
// 			return num1 / num2;
// 	}
// };
