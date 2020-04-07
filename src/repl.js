// function rec(n) {
// 	if (n >= 0) {
// 		console.log(n);
// 		rec(n - 1);
// 	} else {
// 		return n;
// 	}
// }
// console.log(rec(3));

// function rgr(str = '', number) {
// 	if (number <= 0) {
// 		return;
// 	} else {
// 		str += 'red green refactor';
// 		return rgr(str, number - 1);
// 	}
// 	return str;
// }

// console.log(rgr(5));

// const incrementCounter = (counter) => {
// 	if (counter >= 3) {
// 		return counter;
// 	} else {
// 		console.log(counter);
// 		incrementCounter(counter + 1);
// 	}
// };

// const decrementCounter = (counter, str = '') => {
// 	if (counter <= 0) {
// 		console.log('last return');
// 		return str.trim();
// 	} else {
// 		console.log(counter);
// 		console.log(str);
// 		return decrementCounter(counter - 1, str + ' red green refactor');
// 	}
// };
// console.log(decrementCounter(5));

// const reverser = (str) => {
// 	if (str == '') {
// 		return '';
// 	} else {
// 		let arr = str.split(' ');
// 		let last = arr.pop();
// 		return last, reverser(arr.join(' '));
// 	}
// };
// console.log(reverser('I am a cat'));

// incrementCounter(0);

// const outer = () => {
// 	let state = 0;
// 	return () => {
// 		state++;
// 		return state;
// 	};
// };

// const outer1 = outer();
// console.log(outer1());
// console.log(outer1());
// console.log(outer1());
// console.log(outer1());

/* Challenge: */

// const prefixSir = addPrefix("Sir");

// const addPrefix = (prefix) => {
// 	return (name) => {
// 		return (suffix) => {
// 			return (title) => {
// 				return `${prefix} ${name} ${suffix}, ${title}`;
// 			};
// 		};
// 	};
// };

// const theWhiteWolf = addPrefix('The White Wolf,');
// console.log(theWhiteWolf('Geralt')('Of Rivia')('Butcher of Blaviken'));

// const arr = [ 1, 1, 1, 1, 1, 1, 1 ];
// const sum = arr.reduce((a, b) => a % b);
// console.log(sum);

// let wintersObject = {
// 	key1: 'value1',
// 	key2: 'value2',
// 	subObject: {
// 		a: 1,
// 		b: 2
// 	}
// };

// const newObject = { ...wintersObject };
// console.log(newObject);
// console.log(newObject === wintersObject);

// newObject.subObject.a = 52;
// console.log(newObject);
// console.log(wintersObject);

const threeFiveCounter = (counter, a = 0) => {
	if (counter >= 1000) {
		return a;
	} else {
		return threeFiveCounter(counter + 1, counter % 3 === 0 || counter % 5 === 0 ? a + counter : a);
	}
};
console.log(threeFiveCounter(1000));

const fibonacciCounter = (max, last = 1, current = 2, a = 0) => {
	if (current >= max) {
		return a;
	} else {
		return threeFiveCounter(max, current, last + current, current % 2 === 0 ? a + current : a);
	}
};
console.log(fibonacciCounter(4000000));
