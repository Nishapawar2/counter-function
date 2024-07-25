export function createCounter(n) {
	let  cntr = n;
	return function () {
		return cntr++;
	};
}

const counter1 = createCounter(21);
console.log(counter1()); 
console.log(counter1()); 

const counter2 = createCounter(31);
console.log(counter2()); 
console.log(counter2()); 
