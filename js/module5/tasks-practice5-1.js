// task 1. Використайте в методі says ключове слово this
// const call = {
// 	caller: "mom",
// 	says: function () {
// 		console.log(`Hey, ${this.caller} just called.`);
// 	},
// };

// call.says(); //

//-----------------

//task 2. Пофіксіть виклик метода says

// const writeHello = function () {
// 	console.log(`Hello ${this.caller}`);
// };

// const call = {
// 	caller: "mom",
// 	says: writeHello,
// };

// call.says();

//-----------------

//task 3. Є функція, викличте її в правильному контексті

// function showFullName() {
// 	console.log("Inside", this);
// 	alert(this.firstName + " " + this.lastName);
// }

// const person = {
// 	firstName: "Mango",
// 	lastName: "Poly",
// 	showFullName,
// };

//f.e variant 1 (the best one)
// showFullName.call(person);

//f.e variant 2 ( shouldn't be used)
// const result = showFullName.bind(person);
// result();
//f.e also variant 2 but shorter write
// showFullName.bind(person)();

//f.e it works though I'm not sure it's all right to write this way. because showFullTime is not a method of obj person
// person.showFullName();

//-----------------

//task 4. Виправте функцію, що втрачає "this"

// function askPassword(ok, fail) {
// 	let password = prompt("Password?", "");
// 	if (password == "1") {
// 		ok();
// 	} else {
// 		fail();
// 	}
// }

// const user = {
// 	name: "Вася",

// 	loginOk() {
// 		alert(`${this.name} logged in`);
// 	},

// 	loginFail() {
// 		alert(`${this.name} failed to log in`);
// 	},
// };

//f.e just ok but not the better variant
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//works instead of using bind it is better to use arrow function to insert callback function inside the upper fuction in order to not lose the context
// askPassword( () => user.LoginOk(), () => user.loginFail() );

// -----------------

// 5. Що потрібно передати у виклик функції askPassword у коді нижче, щоб вона могла викликати
// функцію user.login(true) як ok та функцію user.login(false) як fail?

// function askPassword(ok, fail) {
// 	let password = prompt("Password?", "");
// 	if (password == "rockstar") {
// 		ok(); // user.login(true)
// 	} else {
// 		fail(); // user.login(false)
// 	}
// }

// let user = {
// 	name: "John",

// 	login(result) {
// 		alert(this.name + (result ? " logged in" : " failed to log in"));
// 	},
// };

//works better one
// askPassword(
// 	() => user.login(true),
// 	() => user.login(false)
// );

//f.e this variant is not so good as previous one, because u need to use the method(computer make more) and write more, so it's not so convenient to read
// askPassword( user.login.bind(user, true), user.login.bind(user, false));

//-----------------

// 6. Є функція sum, яка підсумовує всі елементи масиву:

// function sum(arr) {
//     return arr.reduce(function(a, b) {
//         return a + b;
//     }, 0);
// }
//
// console.log(sum([1, 2, 3])); // 6 (=1+2+3)
// Створіть аналогічну функцію sumArgs(), яка підсумовуватиме всі свої аргументи:
// Для вирішення застосуйте метод reduce до arguments, використовуючи spread, call, apply або "позичення методу".

// function sumArgs() {
// 	// return [...arguments].reduce((acc, num) => acc + num, 0);
// 	return [].reduce.call(arguments, (acc, num) => acc + num, 0);
// }

// console.log(sumArgs(1, 2, 3));
//-----------------
