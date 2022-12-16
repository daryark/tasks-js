//task 35/48 Module 4
// const players = [
// 	{ name: "Mango", playtime: 1270, gamesPlayed: 4 },
// 	{ name: "Poly", playtime: 469, gamesPlayed: 2 },
// 	{ name: "Ajax", playtime: 690, gamesPlayed: 3 },
// 	{ name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// //Find avg time for each player
// const totalAveragePlaytimePerGame =
// 	players.map((player) => player.playtime).reduce((totalTime, playerTime) => totalTime + playerTime) /
// 	players.map((player) => player.gamesPlayed).reduce((totalGames, playerGames) => totalGames + playerGames);

// console.log(totalAveragePlaytimePerGame);

// task 37/48 Module 4 (do with reduce method by task)
// const getTotalFriendCount = users =>
//   users.reduce( (acc, user) => acc + user.friends.length, 0);

//refactor (just my var with flatMap)
// const getTotalFriendCount = users =>
//   users.flatMap( user => user.friends).length;

// console.log([
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ]);

//task 38/48
//works Sort numbers and sort by first letters
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort((a, b) => (a[0] > b[0] ? 1 : -1));
// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b)); //works better than previous variant on 96line

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

//task 39/48

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort();

// const descendingReleaseDates = [...releaseDates].sort((a, b) => (a > b ? -1 : 1));
//works without ternar operator (? -1 : 1) here
//err but don't work in autotasks

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

//task 40/48
// const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

//task 46/48
// const getNamesSortedByFriendCount = (users) =>
// 	[...users].sort((a, b) => a.friends.length - b.friends.length);
// .map((user) => user.name);

// task 48/48
// const getTotalBalanceByGender = (users, gender) =>
// 	[...users]
// 		.filter((user) => user.gender === gender)
// 		.reduce((totalBalance, user) => totalBalance + user.balance, 0);

// console.log(
// 	getTotalBalanceByGender(
// 		[
// 			{
// 				name: "Moore Hensley",
// 				email: "moorehensley@indexia.com",
// 				eyeColor: "blue",
// 				friends: ["Sharron Pace"],
// 				isActive: false,
// 				balance: 2811,
// 				gender: "male",
// 			},
// 			{
// 				name: "Sharlene Bush",
// 				email: "sharlenebush@tubesys.com",
// 				eyeColor: "blue",
// 				friends: ["Briana Decker", "Sharron Pace"],
// 				isActive: true,
// 				balance: 3821,
// 				gender: "female",
// 			},
// 			{
// 				name: "Ross Vazquez",
// 				email: "rossvazquez@xinware.com",
// 				eyeColor: "green",
// 				friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 				isActive: false,
// 				balance: 3793,
// 				gender: "male",
// 			},
// 			{
// 				name: "Elma Head",
// 				email: "elmahead@omatom.com",
// 				eyeColor: "green",
// 				friends: ["Goldie Gentry", "Aisha Tran"],
// 				isActive: true,
// 				balance: 2278,
// 				gender: "female",
// 			},
// 			{
// 				name: "Carey Barr",
// 				email: "careybarr@nurali.com",
// 				eyeColor: "blue",
// 				friends: ["Jordan Sampson", "Eddie Strong"],
// 				isActive: true,
// 				balance: 3951,
// 				gender: "male",
// 			},
// 			{
// 				name: "Blackburn Dotson",
// 				email: "blackburndotson@furnigeer.com",
// 				eyeColor: "brown",
// 				friends: ["Jacklyn Lucas", "Linda Chapman"],
// 				isActive: false,
// 				balance: 1498,
// 				gender: "male",
// 			},
// 			{
// 				name: "Sheree Anthony",
// 				email: "shereeanthony@kog.com",
// 				eyeColor: "brown",
// 				friends: ["Goldie Gentry", "Briana Decker"],
// 				isActive: true,
// 				balance: 2764,
// 				gender: "female",
// 			},
// 		],
// 		"male"
// 	)
// );

// // // Створити функцію яка приймає марку авто, функція повертає в консоль кількість знайдених авто , марку авто, модель і вартість авто
// // // Повертає стрінгу з знайденими авто

// // // Кількість знайдених автомобілів 2:
// // // 1. Honda Accord, ціна 20000
// // // 2. Honda Civic, ціна 12000

// // // // Якщо не було знайдено жодного авто ми маємо вивести

// // // // Вибачте але за вашим пошуком жодного авто не було знайдено.

//task from other group practice. Need to make an arr of "car" by their names with reduce
// const cars = [
// 	{
// 		car: "Honda",
// 		type: "Civic",
// 		price: 12000,
// 	},
// 	{
// 		car: "Audi",
// 		type: "Q7",
// 		price: 40000,
// 	},
// 	{
// 		car: "BMW",
// 		type: "5 siries",
// 		price: 9000,
// 	},
// 	{
// 		car: "Honda",
// 		type: "Accord",
// 		price: 20000,
// 	},
// 	{
// 		car: "Volvo",
// 		type: "XC60",
// 		price: 7000,
// 	},
// ];

// const arrOfCarNames = cars.reduce((acc, item) => [...acc, item.car], []);
// console.log(arrOfCarNames);
