class Shape {
    constructor(sides = []) {
        this.sides = sides;
    }

    perimeter = sides => {
        // let total = 0;
        // for (const element of this.sides) {total += element;} 
        // return total
    return this.sides.reduce((acc,val) => this.sides.length > 0 ? acc+val : 0, 0)
    }
}

console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0

class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super([length,width,length,width]);
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }
}

console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0



