const {multiply,add,divide,getOddNumbers} = require("./index.js")

test('multiply two numbers', ()=>{
	let numberOne = 2;
	let numberTwo = 6;    // Arrange
	
	let result = multiply(numberOne, numberTwo); //Act
	let answer = 12;
	expect(result).toBe(answer); // Assert

})
test('add two numbers', ()=>{
	let numberOne = 2;
	let numberTwo = 6;    // Arrange
	
	let result = add(numberOne, numberTwo); //Act
	let answer = 8;
	expect(result).toBe(answer); // Assert

})
test('divide ', ()=>{
	let numberOne = 12;
	let numberTwo = 3;  // Arrange

	let result = divide(numberOne, numberTwo); //Act
	let answer = 4;
	expect(result).toBe(answer); // Assert	
})
test('getOddNumbers ', ()=>{
	let arr = [1,2,3,4,5,6,7,8,9]; // Arrange

	let result = getOddNumbers(arr); //Act
	let answer = 1;
	expect(result).toEqual(answer); // Assert	
})




	