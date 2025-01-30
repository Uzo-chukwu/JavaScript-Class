function sumOfDigits(number){
	let total = 0;
	while(number != 0){
		let digit = number % 10;
		number = Math.floor(number/10);
		total += digit;
		
	}
	return total;
}

console.log(sumOfDigits(2222222222));