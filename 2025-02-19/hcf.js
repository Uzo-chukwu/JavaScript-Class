// let animal = {
//     name: "",
//     color: "",
//     sound: function(s){
//         return `${this.name} ${this.uniqueSound()}`;},
//     uniqueSound: ""
//
// }
//
// let dog = Object.create(animal);
// dog.name = "dog";
// dog.color = "brown";
// dog.uniqueSound = "bark";
// dog.sound = "bark";
// console.log(dog);
//
//
class Human{
    #name;
    #age;
    constructor(name,age) {
        this.#name = name;
        this.#age = age;
    }

    set name(name){
        this.#name=name;
    }
    get name() {
        return this.#name;
    }
    setAge(age){
        this.#age=age;
    }

    getAge(){
        return this.#age;
    }

}

let person1 = new Human('John',34);
console.log(person1.getAge());
console.log(person1.name())