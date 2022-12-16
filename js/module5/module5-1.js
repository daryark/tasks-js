// const makeChangeColor = function () {
// 	const changeColor = function (color) {
// 		console.log("changeColor -> this :", this);
// 		// this.color = color;
// 	};

// 	// changeColor(); // Какой this ??? // hidden undefined (т.к. вызван просто внутри, но без контекста)

// 	const sweater = {
// 		color: "teal",
// 	};

// 	sweater.updateColor = changeColor;

// 	// sweater.updateColor("red"); // Какой this ??? //hidden sweater( это this), потому что на 13 строке, ссылка на ф-цию записана внутрь ключа(updateColor) и ф-ция вызывается в контексте этого объекта, как метод

// 	return sweater.updateColor;
// };

// makeChangeColor();

// const swapColor = makeChangeColor();

// swapColor("blue"); // Какой this ??? //hidden undefined, потому что в 22 рядок идем, там из вызова makeChangeColor() в ответ приходит ЗНАЧЕНИЕ sweater.updateColor ( если бы в ответ приходил вызов sweater.updateColor(), то все бы ок...но тут именно значение по ключу берем), а в значении записана просто ссылка на ф-цию changeColor без контекста!

//
//task 1/20 Module 5
// const pizzaPalace = {
// 	pizzas: ["Supercheese", "Smoked", "Four meats"],
// 	// Change code below this line
// 	checkPizza(pizzaName) {
// 		return this.pizzas.includes(pizzaName);
// 	},
// 	order(pizzaName) {
// 		if (!this.checkPizza(pizzaName)) {
// 			return `Sorry, there is no pizza named «${pizzaName}»`;
// 		}

// 		return `Order accepted, preparing «${pizzaName}» pizza`;
// 	},
// 	// Change code above this line
// };

// console.log(pizzaPalace.order("Viennese"));
// console.log(pizzaPalace.order("Four meats"));
