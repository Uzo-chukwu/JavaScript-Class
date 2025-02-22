function reverse(number){
	let reversedNumber = ""
	let answer = 0
	while(number != 0){
		answer = (number%10)
		reversedNumber += answer.toString();
		number = Math.floor(number/10);
	}
	return reversedNumber;
}

console.log(reverse(123456789));
