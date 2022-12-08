// T: Autotask 13/32 module 2 .
// FE: Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"

// function slugify(title) {
// 	const slug = title.replaceAll(" ", "-").toLowerCase();
// 	return slug;
// }

// T: Autotask 21/32 module 2 .
//FE: find the longest word in the string and return it from function findLongestWord("Google do a roll"); returns: Google
// function findLongestWord(string) {
// 	let longestWord = "";
// 	for (let word of string.split(" ")) {
// 		if (longestWord.length < word.length) {
// 			longestWord = word;
// 		}
// 	}
// 	console.log(longestWord);
// }

// T: Autotask 24/32 module 2 .
// FE: filterArray([1, 2, 3, 4, 5], 4); will return [5]
// function filterArray(numbers, value) {
// 	const newNumbers = [];
// 	for (const number of numbers) {
// 		if (number > value) {
// 			newNumbers.push(number);
// 		}
// 	}
// 	return newNumbers;
// }

// T: Autotask 25/32 module 2 .
// FE: getCommonElements([24, 12, 25, 3], [12, 8, 3, 36, 25]) повертає [12, 25, 3]
// function getCommonElements(array1, array2) {
// 	const commonElArr = [];
// 	for (const i1 of array1) {
// 		if (array2.includes(i1)) {
// 			commonElArr.push(i1);
// 		}
// 	}
// 	return commonElArr;
// }
