class QuadraticEquation {
    a;
    b;
    c;
    delta;
    constructor(a,b,c) {
        this.a = a;
        this.b  = b;
        this.c = c;
        this.delta;
    }
    getDiscriminant() {
        this.delta = (Math.pow(this.b,2) - 4*this.a*this.c);
        return this.delta;
    }
    getRoot1() {
        return (-this.b + Math.pow(this.delta,0.5))/2*this.a;
    }
    getRoot2() {
        return (-this.b - Math.pow(this.delta,0.5))/2*this.a;
    }
    getDoupleRoot() {
        return -this.b/2*this.a;
    }
    giaiPt() {
        if(this.delta > 0) {
            return ('Phuong trinh có nghiem: ' + this.getRoot1() + this.getRoot2());
        }else if(this.delta === 0) {
            return ('Phuong trinh có nghiem kep: ' + this.getDoupleRoot());
        }else {
            return ('The equation has no roots');
        }
    }
}
let phuongtrinh = new QuadraticEquation(1,5,1);
phuongtrinh.getDiscriminant();
console.log(phuongtrinh.giaiPt());
