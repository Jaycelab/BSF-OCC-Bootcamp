let num1 = 13;
let num2 = 20;

checkEvenOrOdd = (num) => {
	num % 2 === 0 ? 
	console.log(`The number ${num} is even`) : 
	console.log(`The number ${num} is odd`);
}

checkEvenOrOdd(num1)
checkEvenOrOdd(num2)