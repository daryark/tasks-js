// 5. Напишіть функцію range, аналог range із Python.

// function reverseParams(start, end, step, isReverse) {
// 	if (end < start) {
// 		let temp = start; //6
// 		start = end + 1;
// 		end = temp + 1;
//refactor
// [end, start] = [start, end]; // Destructurization into exsisting vars (rigth part) from array in left part;
// 		step = -step;
// 		isReverse = true;

// 		return [start, end, step, isReverse];
// 	}

// 	return [start, end, step, isReverse];
// }

// function range(start, end, step = 1) {
// 	const resultArray = [];
// 	let isReverse = false;

// 	const checker = reverseParams(start, end, step);
// 	[start, end, step, isReverse] = checker;

// 	//i > end || i < end let us to get rid of all other checks and functions
// 	for (let i = start; i < end; i += step) {
// 		resultArray.push(i);
// 	}

// 	if (isReverse) {
// 		resultArray.reverse();
// 	}

// 	return resultArray;
// }

// console.log(range(0, 6)); // [0, 1, 2, 3, 4, 5]
// console.log(range(6, 0, -1)); // [6, 5, 4, 3, 2, 1]
// for (const n of range(0, 0.5, 0.1)) {
// 	console.log(Number(n.toFixed(1))); // 0 0.1 0.2 0.3 0.4
// }
// console.log(range(0, 0.5, 0.1));

// task 32/32
// function includes(array, value) {
// 	for (const variable of array) {
// 		if (variable === value) {
// 			return true;
// 		}
// 	}
// 	return false;
// }
//refactor
// const includes = (array, value) {
// 	for (const variable of array) {
// 		if (variable === value) {
// 			return true;
// 		}
// 	}
// 	return false;
// }
