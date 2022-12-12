// task Autotask 13/32 module 2 .
// f.e Виклик slugify("Arrays for beginers") повертає "arrays-for-beginers"

// function slugify(title) {
// 	const slug = title.replaceAll(" ", "-").toLowerCase();
// 	return slug;
// }

//refactor (with arrow function)
// let slug = "";
// const slugify = title => (slug = title.replaceAll(" ", "-").toLowerCase());

// console.log(slugify("Arrays for beginers"));

//task Autotask 21/32 module 2 .
//f.e find the longest word in the string and return it from function findLongestWord("Google do a roll"); returns: Google
// function findLongestWord(string) {
// 	let longestWord = "";
// 	for (let word of string.split(" ")) {
// 		if (longestWord.length < word.length) {
// 			longestWord = word;
// 		}
// 	}
// 	console.log(longestWord);
// }

//refactor (with arrow function)
const findLongestWord = (string) => {
	let longestWord = "";
	for (let word of string.split(" ")) {
		if (longestWord.length < word.length) {
			longestWord = word;
		}
	}
	console.log(longestWord);
};

//task Autotask 24/32 module 2 .
//f.e filterArray([1, 2, 3, 4, 5], 4); will return [5]
// function filterArray(numbers, value) {
// 	const newNumbers = [];
// 	for (const number of numbers) {
// 		if (number > value) {
// 			newNumbers.push(number);
// 		}
// 	}
// 	return newNumbers;
// }

//task Autotask 25/32 module 2 .
//f.e getCommonElements([24, 12, 25, 3], [12, 8, 3, 36, 25]) повертає [12, 25, 3]
// function getCommonElements(array1, array2) {
// 	const commonElArr = [];
// 	for (const i1 of array1) {
// 		if (array2.includes(i1)) {
// 			commonElArr.push(i1);
// 		}
// 	}
// 	return commonElArr;
// }

//task Autotask 25/32 module 2 .
function includes(array, value) {
	for (const variable of array) {
		if (variable === value) {
			return true;
		}
	}
	return false;
}
