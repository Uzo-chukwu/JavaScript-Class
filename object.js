// First Task
let person = {
		Firstname : "Chisom",
		
		age : 22,
		sex : "Female",
		complexion : "fair",
		StateOfOrigin : "Anambra",
		country : "Nigeria"
			
			}
console.log(person);

// Second Task
console.log("");
console.log("");

const car = {
		make : "Toyota",
		model : "Camry",
		year : 2021
			}
function display(object){
	for (const property in object) {
  		console.log(`${property}: ${object[property]}`);
	}
}
	display(car);

// Third  task
console.log("");
console.log("");

const laptop = {
		brand : "Dell",
		price : "price"
	}
	
	laptop.color = "blue"
	console.log(laptop);

// Fourth Task
console.log("");
console.log("");

const phone = {
		brand: "apple",
		price: 999
	}
	console.log(phone);
	phone.price = 1500
	console.log(phone);

// Fifth task
console.log("");
console.log("");

const human = {

		firstName : "Uzo",
		lastName : "King",
		fullName : function(){
				return (toString(human.firstName+" "+human.LastName))	
			}
	}

console.log(human.fullName);

// Sixth task
console.log("");
console.log("");

const person2 = {
		firstName: "John",
		lastName: "Doe",
		age: 25
	}

function print(object){
	let printOut = toString(object)
	return printOut
}

console.log(print(person2))



	
	


