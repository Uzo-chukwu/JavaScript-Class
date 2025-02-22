function displaySortedNumbers(num1,num2,num3){
	const numbers = [num1,num2,num3];
	numbers.sort((a,b)=> a-b);
	return numbers.toString();	
}

console.log(displaySortedNumbers(9,10,30));