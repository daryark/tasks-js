//
// function filterArray(numbers, value) {
// 	const filteredNumbers = [];
// 	// Change code below this line

// 	numbers.forEach(function (number) {
// 		if (number > value) {
// 			filteredNumbers.push(number);
// 		}
// 	});
// 	return filteredNumbers;
// }

// const a = filterArray([1, 2, 3, 4, 5], 3);
// console.log(a);

//task 25/48

// const getFriends = (users) => {
// 	const allFriends = users.flatMap((user) => user.friends);
// 	return allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
// };
// //refactor
// const getFriends = (users) => users.flatMap((user) => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
// //refactor
// const getFriends = (users) => users.flatMap(({ friends }) => friends).filter((friend, index, array) => array.indexOf(friend) === index);

// console.log(
// 	getFriends([
// 		{
// 			name: "Moore Hensley",
// 			email: "moorehensley@indexia.com",
// 			eyeColor: "blue",
// 			friends: ["Sharron Pace"],
// 			isActive: false,
// 			balance: 2811,
// 			gender: "male",
// 			age: 37,
// 		},
// 		{
// 			name: "Sharlene Bush",
// 			email: "sharlenebush@tubesys.com",
// 			eyeColor: "blue",
// 			friends: ["Briana Decker", "Sharron Pace"],
// 			isActive: true,
// 			balance: 3821,
// 			gender: "female",
// 			age: 34,
// 		},
// 		{
// 			name: "Ross Vazquez",
// 			email: "rossvazquez@xinware.com",
// 			eyeColor: "green",
// 			friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 			isActive: false,
// 			balance: 3793,
// 			gender: "male",
// 			age: 24,
// 		},
// 		{
// 			name: "Elma Head",
// 			email: "elmahead@omatom.com",
// 			eyeColor: "green",
// 			friends: ["Goldie Gentry", "Aisha Tran"],
// 			isActive: true,
// 			balance: 2278,
// 			gender: "female",
// 			age: 21,
// 		},
// 		{
// 			name: "Carey Barr",
// 			email: "careybarr@nurali.com",
// 			eyeColor: "blue",
// 			friends: ["Jordan Sampson", "Eddie Strong"],
// 			isActive: true,
// 			balance: 3951,
// 			gender: "male",
// 			age: 27,
// 		},
// 		{
// 			name: "Blackburn Dotson",
// 			email: "blackburndotson@furnigeer.com",
// 			eyeColor: "brown",
// 			friends: ["Jacklyn Lucas", "Linda Chapman"],
// 			isActive: false,
// 			balance: 1498,
// 			gender: "male",
// 			age: 38,
// 		},
// 		{
// 			name: "Sheree Anthony",
// 			email: "shereeanthony@kog.com",
// 			eyeColor: "brown",
// 			friends: ["Goldie Gentry", "Briana Decker"],
// 			isActive: true,
// 			balance: 2764,
// 			gender: "female",
// 			age: 39,
// 		},
// 	])
// );
