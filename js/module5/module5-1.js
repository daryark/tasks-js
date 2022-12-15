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
