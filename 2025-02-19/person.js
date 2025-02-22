const Human = require('./Human.js');

class Person extends Human{
    #gender;

    constructor(name,age,gender) {
        super(name,age,);
        this.#gender=gender;
    }
    speak = function(){
        console.log(this.name+" is speaking french");
    }

}

let person1 = new Person("John",21,"male");
person1.speak();