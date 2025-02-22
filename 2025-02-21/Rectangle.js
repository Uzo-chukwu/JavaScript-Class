const Shapes = require( "./Shapes.js" );
    length;
    breadth;

class Rectangle extends Shapes{
    constructor(name,length,breadth) {
        super(name);
        this.length = length;
        this.breadth = breadth;
    }
    getArea = function(){
        return this.length * this.breadth;
    }
    isSquare = function(){
        return this.breadth === this.length;
    }
}

