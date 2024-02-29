//function expressions must be within the scope


functionDeclaration = () => {
	console.log('Hello! I am a function declaration!')
}
functionDeclaration()


greetMe = (name) => {
	console.log(`Hello ${name}!`);}

greetMe('Regel')


let sum = (a,b) => {
	return a +b;
}
console.log(`The sum of a and b is ${sum(10,20)}`);