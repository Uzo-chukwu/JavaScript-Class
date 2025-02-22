function isPrime(number){
	
	let primeCount = 0;
	for(let count = 1; count < number; count++){
		if(number % count == 0){
			primeCount++;
		}
	}
	if(primeCount == 1){
		return true;
	}
	return false;

}

console.log(isPrime(5));
let count = 0;
for(let number = 0; number < 10; number++){
	if(isPrime(number)){
		count++;
	}
}
console.log(count);