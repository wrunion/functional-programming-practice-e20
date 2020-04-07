// class Plant {
// 	constructor() {
// 		this.water = 0;
// 		this.soil = 0;
// 		this.light = 0;
// 	}

// 	hydrate() {
// 		this.water++;
// 	}

// 	feed() {
// 		this.soil++;
// 	}

// 	giveLight() {
// 		this.light++;
// 	}
// }

// // let plant = new Plant();
// // plant.hydrate();
// // console.log(plant);

// /* Refactor */
// let myPlant = {
// 	water: 0,
// 	soil: 0
// };

// const hydrate = (plant) => {
// 	return {
// 		...plant,
// 		water: (plant.water || 0) + 1
// 	};
// };

// const feed = (plant, increment) => {
// 	return {
// 		...plant,
// 		soil: (plant.soil || 0) + increment
// 	};
// };

// const changePlantState = (plant, property, increment) => {
// 	return {
// 		...plant,
// 		[property]: (plant[property] || 0) + increment
// 	};
// };

// let wintersPlant = {
// 	water: 0
// };

//console.log(changePlantState(wintersPlant, 'water', 15));
// const wintersNewPlant = changePlantState(wintersPlant, 'water', 15);
// console.log(wintersNewPlant);

// const changeState = (state, prop) => {
// 	return {
// 		...state,
// 		[prop]: (state[prop] || 0) + 1
// 	};
// };

const changeState = (prop) => {
	return (value) => {
		return (state) => ({
			...state,
			[prop]: (state[prop] || 0) + value
		});
	};
};

let plant = {};

const blueFood = changeState('soil')(5);
const greenFood = changeState('soil')(10);
const yuckyFood = changeState('soil')(-5);
