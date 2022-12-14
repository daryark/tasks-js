// const cart = {
// 	items: [],

// 	getItems() {
// 		return this.items;
// 	},
// 	add(product) {
// 		this.items.push(product);

// 		return this.items;
// 	},
// 	remove(productName) {
// 		const { items } = this;

// 		for (let i = 0; i < items.length; i += 1) {
// 			const { name } = items[i];

// 			if (name === productName) {
// 				items.splice(i, 1);
// 			}
// 		}
// 		console.log(this.items);
// 	},
// 	clear() {
// 		this.items = [];

// 		console.log(this.items);
// 	},
// 	countTotalPrice() {
// 		let total = 0;
// 		for (const item of this.items) {
// 			total += item.price;
// 		}
// 		console.log(total);
// 	},
// 	increaseQuantity(productName) {
// 		const { items } = this;

// 		for (let i = 0; i < items.length; i += 1) {
// 			const { name } = items[i];

// 			if (name === productName) {
// 				if (!items[i].quantity) {
// 					//fix: change this in destructurization
// 					items[i].quantity = 1;
// 				}

// 				items[i].quantity += 1;
// 			}
// 		}
// 		console.log(this.items);
// 	},
// 	decreaseQuantity(productName) {
// 		for (let i = 0; i < this.items.length; i += 1) {
// 			if (this.items[i].name === productName) {
// 				// if (this.items[i].quantity === 2) {
// 				// 	this.items[i].delete(quantity);
// 				// }
// 				if (this.items[i].quantity < 2) {
// 					this.items.splice(i, 1);
// 				}

// 				this.items[i].quantity -= 1;
// 			}
// 		}
// 		console.log(this.items);
// 	},
// };

// refactor
// const cart = {
// 	items: [],

// 	getItems() {
// 		return this.items;
// 	},
// 	add(product) {
// 		this.items.push(product);

// 		return this.items;
// 	},
// remove(productName) {
//err   this.map()
// const newArr = this.items.map((item) => (item.name === productName ? item : `Error! No ${item.name} in the cart.`));

// const newArr = this.map(function (item) {
// 	return item.name === productName ? item : `Error! No ${item.name} in the cart.`;
// });
//filter - check length before and after filter , err || remove success...

// return newArr;
// },

// clear() {
// 	this.items = [];

// 	return this.items;
// },
// countTotalPrice() {
// 	let total = 0;
// 	for (const item of this.items) {
// 		total += item.price;
// 	}
// 	return total;
// },
// increaseQuantity(productName) {
// const { items } = this;

// for (let i = 0; i < items.length; i += 1) {
// 	const { name } = items[i];

// 	if (name === productName) {
// 		if (!items[i].quantity) {
// 			//fix: change this in destructurization
// 			items[i].quantity = 1;
// 		}

// 		items[i].quantity += 1;
// 	}
// }

// 		this.map((item) => (item.name === productName ? (item.quantity += 1) : item.quantity));

// 		return this.items;
// 	},
// 	decreaseQuantity(productName) {
// 		for (let i = 0; i < this.items.length; i += 1) {
// 			if (this.items[i].name === productName) {
// 				// if (this.items[i].quantity === 2) {
// 				// 	this.items[i].delete(quantity);
// 				// }
// 				if (this.items[i].quantity < 2) {
// 					this.items.splice(i, 1);
// 				}

// 				this.items[i].quantity -= 1;
// 			}
// 		}
// 		console.log(this.items);
// 	},
// };

// console.log(cart.add({ name: "🍎", price: 50 }));
// // console.log(cart.add({ name: "🍇", price: 70 }));
// // console.log(cart.add({ name: "🍋", price: 60 }));
// // console.log(cart.add({ name: "🌰", price: 110 }));
// console.log(cart.countTotalPrice());

// // console.log(cart.remove("🍎"));

// console.log(cart.clear());
// //----------------------------------------------
// // cart.add({ name: "🍇", price: 70 });
// // cart.add({ name: "🍋", price: 60 });
// // cart.add({ name: "🌰", price: 110 });
// cart.increaseQuantity("🌰");
// cart.increaseQuantity("🌰");
// cart.increaseQuantity("🍋");

// cart.decreaseQuantity("🌰");
// cart.decreaseQuantity("🌰");
// cart.decreaseQuantity("🌰");

// f.e. variant 1
// const atTheOldToad = {
// 	potions: [
// 		{ name: "Speed potion", price: 460 },
// 		{ name: "Dragon breath", price: 780 },
// 		{ name: "Stone skin", price: 520 },
// 	],
// 	// Change code below this line
// 	getPotions() {
// 		return this.potions;
// 	},
// 	addPotion(newPotion) {
// 		const { potions } = this;

// 		for (const potion of potions) {
// 			if (potion.name === newPotion.name) {
// 				console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
// 				return true;
// 			}
// 		}
// 		potions.push(newPotion);
// 	},
// 	removePotion(potionName) {
// 		const { potions } = this;

// 		for (let i = 0; i < potions.length; i += 1) {
// 			if (potionName === potions[i].name) {
// 				potions.splice(i, 1);
// 				return potions;
// 			}
// 		}
// 		console.log(`Potion ${potionName} is not in inventory!`);
// 		return `Potion ${potionName} is not in inventory!`;
// 	},
// 	updatePotionName(oldName, newName) {
// 		const { potions } = this;

// 		for (let i = 0; i <= potions.length; i += 1) {
// 			if (potions[i].name === oldName) {
// 				potions[i].name = newName;
// 				return potions;
// 			}
// 		}
// 		return `Potion ${oldName} is not in inventory!`;
// 	},
// };
// f.e. variant 2
// const atTheOldToad = {
// 	potions: [
// 		{ name: "Speed potion", price: 460 },
// 		{ name: "Dragon breath", price: 780 },
// 		{ name: "Stone skin", price: 520 },
// 	],
// 	// Change code below this line
// 	getPotions() {
// 		return this.potions;
// 	},
// 	addPotion(newPotion) {
// 		for (let potion of this.potions) {
// 			if (potion.name === newPotion.name) {
// 				console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
// 				return `Error! Potion ${newPotion.name} is already in your inventory!`;
// 			}
// 		}

// 		this.potions.push(newPotion);
// 	},
// 	removePotion(potionName) {
// 		for (let potion of this.potions) {
// 			if (potion.name === potionName) {
// 				const potionIndex = this.potions.indexOf(potion);
// 				this.potions.splice(potionIndex, 1);

// 				console.log(this.potions);
// 				return this.potions;
// 			}
// 		}
// 		console.log(`Potion ${potionName} is not in inventory!`);
// 		return `Potion ${potionName} is not in inventory!`;
// 	},
// 	updatePotionName(oldName, newName) {
// 		for (let i = 0; i < this.potions.length; i += 1) {
// 			if (this.potions[i].name === oldName) {
// 				this.potions[i].name = newName;

// 				console.log(this.potions);
// 				return this.potions;
// 			}
// 		}

// 		console.log(`Potion ${oldName} is not in inventory!`);
// 		return `Potion ${oldName} is not in inventory!`;
// 	},
// };

// console.log(atTheOldToad.getPotions()); //[ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 }); //potions last obj: { name: "Invisibility", price: 620 }
// // atTheOldToad.addPotion({ name: "Power potion", price: 270 });

// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }); //Doesn't change the array?
// // atTheOldToad.addPotion({ name: "Stone skin", price: 240 }); //Doesn't change the array?

// // atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }); //returns "Error! Potion Dragon breath is already in your inventory!"
// // atTheOldToad.addPotion({ name: "Stone skin", price: 240 }); //"Error! Potion Dragon breath is already in your inventory!"

// atTheOldToad.removePotion("Invulnerability"); //will be deleted from array
// atTheOldToad.removePotion("Speed potion"); //will be deleted from array
// atTheOldToad.removePotion("Dragon breath");

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth"); // [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.updatePotionName("Stone skinn", "Invulnerability potion"); // [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
//
//
//

// const data = {
// 	user: { name: "dasha", age: 24 },
// 	city: "Melbourn",
// };

// const myFn = () => {
// 	const {
// 		user: { age },
// 		city,
// 	} = data;
// 	// {name} = user;
// 	console.log(age);
// }
