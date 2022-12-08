// //
// //
// //
// //
// //
// const colors = [
// 	{ hex: "#f44336", rgb: "244,67,54" },
// 	{ hex: "#2196f3", rgb: "33,150,243" },
// 	{ hex: "#4caf50", rgb: "76,175,80" },
// 	{ hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (color of colors) {
// 	console.log(color);
// 	hexColors.push(color.hex); //works without brackets //❗❗(but doesn't work in autotasks)
// 	rgbColors.push(color["rgb"]); //works with them too
// }
// console.log(hexColors);
// console.log(rgbColors);

// //
// // //
// // //
// // //
// // // const a = {
// // // 	name: "jan",
// // // 	age: 83,
// // // 	getName(newName) {
// // // 		this.name = newName;
// // // 		console.log(this.name);
// // // 	},
// // // };
// // // a.getName("Gim");
// // //
// // //
// // //
// // //
// let b = [1, 2, 3];
// b.push(4);
// console.log(b);

// // //err Here, in array for...of will not work❌ properly (won't change the elements of array to i+ after the whole cycle, because numbers in array are the simple type) =>
// for (let i of b) {
// 	i += "+";
// 	console.log(i);
// }
// console.log(b);

// // //works While in the second variant👇 for...of with array of objects (color of colors) will work✅ and add new key and its' value in each object, because object is complex type and it works with the direct link but not the copy of the variable.
// for (const color of colors) {
// 	color.bright = true;
// 	console.log(color);
// }
// console.log(colors);
// //
// //
// //task Find the array of noBrightColors and log it in console
// colors[1].bright = false;
// colors[3].bright = false;

// const noBrightColors = [];
// for (const color of colors) {
// 	if (!color.bright) {
// 		noBrightColors.push(color);
// 	}
// }
// console.log(noBrightColors);
// //
// //

// //task Find the array of noBrightColors and brightColors and log it in console in object of two arrays inside;
// const colorsOfAllBrightness = {
// 	noBrightColors: [],
// 	brightColors: [],
// };

// for (const color of colors) {
// 	if (color.bright) {
// 		colorsOfAllBrightness.brightColors.push(color);
// 		continue;
// 	}
// 	colorsOfAllBrightness.noBrightColors.push(color);
// }
// console.log(colorsOfAllBrightness);
//
//
//
//
//
//
// // ? WHY THE ELEMENT OF ARRAY "tiger" STAYS THE SAME IN animals WHEN IT CHANGES IN clones?
// // !console.log will be: bear bear
// // !                     tiger sheep
// //
// let animals = [{ type: "lion" }, "tiger"];
// let clones = animals.slice();

// clones[0].type = "bear";
// clones[1] = "sheep";

// console.log(animals[0].type, clones[0].type);
// console.log(animals[1], clones[1]);
//
//
//
//

const cart = {
	items: [],

	getItems() {},
	add(product) {
		this.items.push(product);
		console.log(this.items);
	},
	remove(productName) {
		for (let i = 0; i < this.items.length; i += 1) {
			if (this.items[i].name === productName.name) {
				this.items.splice(i, 1);
			}
		}
		console.log(this.items);
	},
	clear() {
		this.items = [];

		console.log(this.items);
	},
	countTotalPrice() {
		let total = 0;
		for (const item of this.items) {
			total += item.price;
		}
		console.log(total);
	},
	increaseQuantity(productName) {
		for (let i = 0; i < this.items.length; i += 1) {
			if (this.items[i].name === productName.name) {
				if (!this.items[i].quantity) {
					//fix: change this in destructurization
					this.items[i].quantity = 1;
				}

				this.items[i].quantity += 1;
			}
		}
		console.log(this.items);
	},
	decreaseQuantity(productName) {
		for (let i = 0; i < this.items.length; i += 1) {
			if (this.items[i].name === productName.name) {
				if (this.items[i].quantity < 2) {
					this.items.splice(i, 1);
				}

				this.items[i].quantity -= 1;
			}
		}
		console.log(this.items);
	},
};

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 70 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🌰", price: 110 });

// cart.remove({ name: "🍎", price: 50 });

// cart.clear();

cart.countTotalPrice();

cart.increaseQuantity({ name: "🌰", price: 110 });
cart.increaseQuantity({ name: "🌰", price: 110 });
cart.increaseQuantity({ name: "🍋", price: 60 });

cart.decreaseQuantity({ name: "🌰", price: 110 });
cart.decreaseQuantity({ name: "🌰", price: 110 });
cart.decreaseQuantity({ name: "🌰", price: 110 });
