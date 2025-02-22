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
    speak = function(){
        console.log("speaking english");
    }

}

human1 = new Human("name","12");
human1.speak();

module.exports = Human;