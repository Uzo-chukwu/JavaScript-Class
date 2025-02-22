function celciusToFahrenheit(celcius){
	let fahrenheit = (9/5) * (celcius + 32);
	return fahrenheit;
}

function fahrenheitToCelcius(fahrenheit){
	let celcius = (9/5) * (fahrenheit - 32);
	return fahrenheit;
}


console.log(celciusToFahrenheit(32));
console.log(fahrenheitToCelcius(celciusToFahrenheit(32)));