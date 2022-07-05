class Shape {
    color;
    filled;
    constructor(color,filled) {
        this.color= color;
        this.filled = filled;
    }
}
let shape = new Shape('red',true);
let shape2 = new Shape('blue',false);
console.log(shape);
console.log(shape2);

class Circle {
    color;
    filled;
    radius;
    constructor(color,filled,radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    getArea() {
        return Math.pow(this.radius,2)*Math.PI
    }
    getPerimeter() {
        return this.radius * 2 * Math.PI
    }
}
let circle = new Circle('red',true,4);
console.log(circle);
console.log(circle.getArea());
console.log(circle.getPerimeter());

class Rectangle {
    width
    length;
    color;
    filled;
    constructor(width, length, color, filled) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }

    getArea() {
        return this.width * this.length;
    }

    getPerimeter() {
        return 2 * (this.width + this.length);
    }
}
let rectangle = new Rectangle(10,20,'blue',true);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());

class Square {
    color;
    filled;
    side;
    constructor(color, filled, side = 1) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}
let square = new Square('yellow',false,5);
console.log(square);