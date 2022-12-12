// task 19/36
// function checkPassword(password) {
// 	const ADMIN_PASSWORD = "jqueryismyjam";
// 	let message;

// 	if (password === null) {
// 		// Change this line
// 		message = "Canceled by user!";
// 	} else if (password === ADMIN_PASSWORD) {
// 		// Change this line
// 		message = "Welcome!";
// 	} else {
// 		message = "Access denied, wrong password!";
// 	}

// 	return message;
// }
// refactor
// const checkPassword = password => {
// 	const ADMIN_PASSWORD = "jqueryismyjam";
// 	let message;

// 	if (password === null) {
// 		message = "Canceled by user!";
// 	} else if (password === ADMIN_PASSWORD) {
// 		message = "Welcome!";
// 	}
// 		message = "Access denied, wrong password!";

// 	return message;
// }
//
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("jqueryismyjam"));

//
//
// task 20/36
// function checkStorage(available, ordered) {
// 	let message;
// 	// Change code below this line
// 	if (ordered === 0) {
// 		message = "There are no products in the order!";
// 	} else if (ordered > available) {
// 		message = "Your order is too large, there are not enough items in stock!";
// 	} else {
// 		message = "The order is accepted, our manager will contact you";
// 	}
// 	// Change code above this line
// 	return message;
// }
//
// refactor
// const checkStorage = (available, ordered) => {
// 	let message;
// 	if (ordered === 0) {
// 		message = "There are no products in the order!";
// 	} else if (ordered > available) {
// 		message = "Your order is too large, there are not enough items in stock!";
// 	}
// 		message = "The order is accepted, our manager will contact you";
// 	return message;
// }
//
//
// task 21/36
// function isNumberInRange(start, end, number) {
// 	const isInRange = start <= number && number <= end; // Change this line

// 	return isInRange;
// }
//
// refactor

// const isNumberInRange = (start, end, number) => start <= number && number <= end;

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
//
//
// task 22/36
// function checkIfCanAccessContent(subType) {
// 	const canAccessContent = subType === "vip" || subType === "pro"; // Change this line

// 	return canAccessContent;
// }
//
// refactor
// const checkIfCanAccessContent = subType => subType === "vip" || subType === "pro";

// console.log(checkIfCanAccessContent("pro")); //true
// console.log(checkIfCanAccessContent("starter")); //false
// console.log(checkIfCanAccessContent("vip")); //true
// console.log(checkIfCanAccessContent("free")); //false
//
//
// task 23/36
// function isNumberNotInRange(start, end, number) {
// 	const isInRange = number >= start && number <= end;
// 	const isNotInRange = !isInRange; // Change this line

// 	return isNotInRange;
// }
//
// refactor
// const isNumberNotInRange = (start, end, number) => number >= start && number <= end;

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
//
//
