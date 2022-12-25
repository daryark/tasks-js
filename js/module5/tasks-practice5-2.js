//task 1. Реалізувати клас Employee, в якому будуть наступні властивості - ім'я (name) , вік (age), зарплата (salary).
//f.e Зробіть так, щоб ці властивості заповнювалися при створенні об'єкта.
//f.e Зробіть поле salary приватним та створіть геттери та сеттери для нього
//f.e Зробіть клас Programmer, який буде успадкований від класу Employee, у якому буде властивість langs (список мов)
//f.e Для класса Programmer перезапишите геттер для властивості salary. Хай він повертає властивість salary, помножене на 3.
//f.e Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.

// class Employee {
// 	#salary;

// 	constructor({ name, age, salary }) {
// 		this.name = name;
// 		this.age = age;
// 		this.#salary = salary; //works if u don't define the salary when initialize( #salary before the constructor), so u need to write this here in constructor to destructurize and difine in the variable that u get from function argument
// 	}

// 	get salary() {
// 		return this.#salary;
// 	}

// 	set salary(newSalary) {
// 		return (this.#salary = newSalary);
// 	}
// }

// class Programmer extends Employee {
// 	// constructor({ name, age, salary, langs }) {
// 	// 	super({ name, age, salary });
// 	//better to write this way if you don't need the parent's class variables:
// 	constructor({ langs, ...restObj }) {
// 		super(restObj);
// 		this.langs = langs;
// 	}

// 	get salary() {
// 		return super.salary * 3;
// 	}
// }

// // c: Take a note that you need to use () first and only then, inside write and object with {}
// // works Because new is a function, fo u need this (). The new obj will return on this place.
// // //works so under sceens: console.log(worker.__proto__ === Programmer.prototype) // true
// // c: Object.getPrototypeOf(worker) более правильно записать, чем worker.__proto__
// const worker = new Programmer({
// 	name: "Duke",
// 	age: 32,
// 	salary: 1200,
// 	langs: ["js", "java", "python"],
// });

// console.log(worker);
// console.log(worker.salary);
//-------------------------

// task 2. Створіть класс товару Product, у якому будуть такі властивості:
//f.e     - коротка назва;
//f.e     - повна назва;
//f.e     - опис
//f.e     - ціна;
//f.e (має також бути приватний унікальний артикул для товару);
//
//task А також методи:
// f.e    - розрахунок ціни (приватний, аргумент - кількість товарів, якщо більше 20 - тоді знижка на всю суму - 15 відсотків);

//f.e     - отримання інформації про доставку (метод - приватний, аргументи - адреса, ціна за все замовлення. Ціна за доставку обраховується так –  1% від ціни, якщо ціна більше 2000 - доставка безкоштовно);

//f.e     - друк чеку (приватний, цей метод отримує об'єкт замовлення і виводить в консоль) // {address: 'адреса', price: 0}

// f.e    - замовлення товару ( публічний, розраховую ціну товару,доставки та генерує об'єкт замовлення
//f.e       { адреса, товар, кількість, ціна за доставку, ціна за замовлення}) // приймає: aдреса, кількість

//
// class Product {
// 	#id = Math.random();

// 	constructor({ shortName, fullName, description, price }) {
// 		this.shortName = shortName;
// 		this.fullName = fullName;
// 		this.description = description;
// 		this.price = price;
// 	}

// 	#countPrice(quantity) {
// 		const priceOfOrder = this.price * quantity; //? можна і не записувати змінну (просто щоб не повторювати множення і в true,  і в false)
// 		// if (quantity > 20) {
// 		// 	return priceOfOrder * 0.85;
// 		// }
// 		// return priceOfOrder;
// 		return quantity > 20 ? priceOfOrder * 0.85 : priceOfOrder;
// 	}

// 	#getDeliveryInfo(address, priceOfOrder) {
// 		return {
// 			address,
// 			deliveryPrice: priceOfOrder > 2000 ? 0 : priceOfOrder * 0.01,
// 		};
// 	}

// 	#printCheck(order) {
// 		console.log("Order: ", order);
// 	}

// 	getProductInfo(address, quantity) {
// 		const priceOfOrder = this.#countPrice(quantity);
// 		const deliveryInfoObj = this.#getDeliveryInfo(address, priceOfOrder).deliveryPrice;
// 		const orderObj = {
// 			priceOfOrder,
// 			...deliveryInfoObj,
// 			product: this,
// 			quantity, //fix 👇if write: deliveryInfoObj.deliveryPrice don't work for some reason :(
// 			totalPrice: priceOfOrder + this.#getDeliveryInfo(address, priceOfOrder).deliveryPrice,
// 		};
// 		this.#printCheck(orderObj);
// 		return orderObj;
// 		// return { address, shortName, quantity, price, deliveryPrice, totalPrice };
// 	}
// }

// const product = new Product({
// 	shortName: "iPhone",
// 	fullName: "iPhone 12 mini",
// 	description: "super new phone",
// 	price: 800,
// });

// const order = product.getProductInfo("Kharkiv", 2);
// console.log(order);
//-------------------------

// task 3. Створіть клас Vehicle, у якому буде 4 властивості:
//f.e - currentSpeed ( приватна )
//f.e - maxSpeed ( статична )
//f.e - year,
//f.e - country
//f.e - weight
//f.e - метод info() { порожній }

//task Створіть додаткові класи
//f.e 1) Car (усі поля від Vehicle + type, name, model, wheels) + методами
//f.e -info (описує поведінку авто),
//f.e -travelTime( обраховує кількість часу яка потрібна для подолання відстані за швидкості currentSpeed,
//f.e        відстань приходить параметром в сам метод )

// class Vehicle {
// 	#currentSpeed;
// 	static maxSpeed = 450;

// 	constructor({ year, country, weight, currentSpeed } = {}) {
// 		this.year = year;
// 		this.country = country;
// 		this.weight = weight;
// 		this.#currentSpeed = currentSpeed;
// 	}

// 	get currentSpeed() {
// 		return this.#currentSpeed;
// 	}

// 	set currentSpeed(newSpeed) {
// 		this.#currentSpeed = newSpeed;
// 	}

// 	info() {}
// }

// class Car extends Vehicle {
// 	constructor({ type, name, model, wheels, ...restProps }) {
// 		super(restProps);
// 		this.type = type;
// 		this.name = name;
// 		this.wheels = wheels;
// 	}

// 	info() {
// 		console.log("Car can ride");
// 	}

// 	travelTime(km) {
// 		return (km / super.currentSpeed).toFixed();
// 	}
// 	//c: if you want to call parents object value => then write with super.value ...not this.value
// 	//works: when need to get a private value from the super, don't  need to use #
// }

// const car1 = new Car({
// 	name: "BMW",
// 	model: "X5",
// 	type: "sedan",
// 	wheels: 4,
// 	year: 2020,
// 	country: "Germany",
// 	weight: 4.5,
// 	currentSpeed: 150,
// });

// console.log(car1);
// car1.info(); //no need in console.log because function doesn't return anything and console.log's message inside.
// console.log(car1.travelTime(4000));

// //f.e 2) AirPlane (усі поля від Vehicle + type, name, engine, private oldEngines) + методи)
// //f.e -info (описує поведінку літака),
// //f.e -updateEngine ( заміняє поточний двигун літака на той двигун, який прийшов параметром у метод, та додає старий двигун
// //f.e                 у приватне поле oldEngines )
// //f.e -showAllEngines ( виводить список усіх старих двигунів літака та поточного )

// class AirPlane extends Vehicle {
// 	#oldEngines = [];
// 	constructor({ type, name, engine, ...restProps }) {
// 		super(restProps);
// 		this.type = type;
// 		this.name = name;
// 		this.engine = engine;
// 	}

// 	info() {
// 		console.log("Airplane can fly");
// 	}

// 	updateEngine(newEngine) {
// 		this.#oldEngines.push(this.engine);
// 		console.log(`Old engines: ${this.#oldEngines.join(", ")}`);

// 		this.engine = newEngine;
// 		console.log(`New engine ${this.engine}`);
// 	}
// }

// const airplane1 = new AirPlane({
// 	type: "passanger's",
// 	name: "Mriya",
// 	engine: " GT- 825",
// 	year: 1991,
// 	country: "Ukraine",
// 	weight: 100,
// 	currentSpeed: 600,
// });

// console.log(airplane1);
// airplane1.updateEngine("HY-345e");
// airplane1.updateEngine("MT-45em");

// //task 3) Ship (усі поля від Vehicle + type, name, engine, color, passengers: {name, age, ticket} [] ( приватне ) ) + методи)
// //f.e  -info (описує поведінку корабля),
// //f.e  -addPassenger ( якщо пасажира ще немає на борту – додати його у список passengers, якщо є вивести помилку )
// class Ship extends Vehicle {
// 	#passengers = [];

// 	constructor({ type, name, engine, color, ...restProps }) {
// 		super(restProps);
// 		this.type = type;
// 		this.name = name;
// 		this.engine = engine;
// 		this.color = color;
// 	}

// 	info() {
// 		console.log("Ship can float");
// 	}

// 	addPassenger(newPassenger) {
// 		console.log(this.#passengers);

// 		//c: don't forget to compare concrete key values in obj, because two objects can never be equal to each other
// 		return this.#passengers.find(({ ticket }) => ticket === newPassenger.ticket)
// 			? alert(`Passenger ${newPassenger.name}, ticket: ${newPassenger.ticket} already exists`)
// 			: this.#passengers.push(newPassenger);
// 	}
// }

// const ship1 = new Ship({
// 	type: "crouise",
// 	name: "Freedom",
// 	engine: "KMJ-987klj",
// 	color: "silver",
// 	year: 2008,
// 	country: "Italy",
// 	weight: 800,
// 	currentSpeed: 120,
// });

// console.log(ship1);
// ship1.addPassenger({ name: "Pavlo", age: 28, ticket: 1 });
// ship1.addPassenger({ name: "Davis", age: 38, ticket: 2 });
// ship1.addPassenger({ name: "Pavlo", age: 28, ticket: 1 });

//-------------------------
