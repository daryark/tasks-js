//
function filterArray(numbers, value) {
	const filteredNumbers = [];
	// Change code below this line

	numbers.forEach(function (number) {
		if (number > value) {
			filteredNumbers.push(number);
		}
	});
	return filteredNumbers;
}

const a = filterArray([1, 2, 3, 4, 5], 3);
console.log(a);
