class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    displayName = 'Point'
    distance(b) {
        let dx = this.x - b.x;
        let dy = this.y - b.y;
        return Math.hypot(dx,dy);
    }
}

let point1 = new Point(10,10);
let point2 = new Point(20,20);
console.log(point2.displayName);
console.log(point2.distance(point1));
