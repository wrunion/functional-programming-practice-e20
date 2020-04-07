// function rgr(number) {
// 	let str = '';
// 	if (number === 0) {
// 		return;
// 	} else {
// 		str += 'red green refactor';
// 	}
// 	return str;
// }

// const decrementCounter = (counter, str = '') => {
// 	if (counter <= 0) {
// 		console.log('last return');
// 		return str;
// 	} else {
// 		return decrementCounter(counter - 1, str + 'red green refactor ');
// 	}
// };
// console.log(decrementCounter(5));

const decrementCounter = (counter, str = '') => {
	if (counter <= 0) {
		console.log('last return');
		return str;
	} else {
		console.log(counter);
		console.log(str);
		return decrementCounter(counter - 1, str + ' red green refactor');
	}
	return str;
};
console.log(decrementCounter(5));
