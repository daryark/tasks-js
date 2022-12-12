//task 7/36
// function sayHi() {
// 	console.log("Hello, this is my first function!");
// }
// sayHi();

// refactor
// const sayHi = () => console.log("Hello, this is my first function!");
// sayHi();
//
//
//task 8/36\
// function add(a, b, c) {
// 	console.log(`Addition result equals ${a + b + c}`);\
// }

// refactor
// const add = (a, b, c) => console.log(`Addition result equals ${a + b + c}`);

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));
//
//
// task 9/36
// function add(a, b, c) {
// 	return a + b + c;
// }

//refactor
// const add = (a, b, c) => a + b + c;

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));
//
//
// task 10/36
// function makeMessage(name, price) {
// 	const message = `You picked ${name}, price per item is ${price} credits`;
// 	return message;
// }

// refactor
// let message = "";
// const makeMessage = (name, price) => (message = `You picked ${name}, price per item is ${price} credits`);

// console.log(makeMessage("droid", 310));
//
//
// task 11/36
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
// 	const totalPrice = orderedQuantity * pricePerItem;
// 	return totalPrice;
// }

// refactor
// const calculateTotalPrice = (orderedQuantity, pricePerItem) => orderedQuantity * pricePerItem;
// const totalPrice = calculateTotalPrice();

// console.log(calculateTotalPrice(4, 88)); //352
// console.log(calculateTotalPrice(2, 18)); // 36
// console.log(calculateTotalPrice(10, 88)); //880
//
//
// task 12/36
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// 	const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// 	return `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// 	return message;
// }
// refactor
// const makeOrderMessage = (orderedQuantity, pricePerDroid, deliveryFee) => {
// 	const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// 	return `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// };

// console.log(makeOrderMessage(4, 10, 9));
//
//
// task 13/36
// function isAdult(age) {
// 	const passed = age >= 18;
// 	return passed;
// }
// refactor
// const isAdult = age => age >= 18;

// console.log(isAdult(8));
// console.log(isAdult(48));
//
//
// task 14/36
// function isValidPassword(password) {
// 	const SAVED_PASSWORD = "jqueryismyjam";
// 	const isMatch = SAVED_PASSWORD === password;
// return isMatch;
// }
// refactor
// const isValidPassword = password => {
// 	const SAVED_PASSWORD = "jqueryismyjam";
// 	return SAVED_PASSWORD === password;
// };

// console.log(isValidPassword("dfjaillkj"));
// console.log(isValidPassword("jqueryismyjam"));
//
//
// task 15/36
// function checkAge(age) {
// 	let message;

// 	if (age >= 18) {
// 		message = "You are an adult";
// 	} else {
// 		message = "You are a minor";
// 	}

// 	return message;
// }
// refactor
// const checkAge = age => age >= 18 ? "You are an adult" : "You are a minor";

// console.log(checkAge(14));
// console.log(checkAge(27));
//
//
// task 16/36
// function checkStorage(available, ordered) {
// 	let message;
// 	if (available >= ordered) {
// 		message = "Order is processed, our manager will contact you.";
// 	} else {
// 		message = "Not enough goods in stock!";
// 	}
// 	return message;
// }
// refactor
// const checkStorage = (available, ordered) =>
// 	available >= ordered ? "Order is processed, our manager will contact you." : "Not enough goods in stock!";

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
//
//
// task 18/36
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
// 	let message;
// 	let totalPrice = pricePerDroid * orderedQuantity;
// 	if (totalPrice > customerCredits) {
// 		message = "Insufficient funds!";
// 	} else {
// 		message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
// 	}
// 	return message;
// }
// refactor
// const makeTransaction = (pricePerDroid, orderedQuantity, customerCredits) =>
// 	pricePerDroid * orderedQuantity > customerCredits
// 		? "Insufficient funds!"
// 		: `You ordered ${orderedQuantity} droids, you have ${customerCredits - pricePerDroid * orderedQuantity} credits left`;

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
