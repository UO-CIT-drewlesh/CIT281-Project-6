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

// console.log(new Shape([5, 10]).perimeter());  // 15
// console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
// console.log(new Shape().perimeter()); // 0

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

// console.log(new Rectangle(4, 4).perimeter());  // 16
// console.log(new Rectangle(4, 4).area());  // 16
// console.log(new Rectangle(5, 5).perimeter()); // 20
// console.log(new Rectangle(5, 5).area()); // 25
// console.log(new Rectangle().perimeter()); // 0
// console.log(new Rectangle().area()); // 0

class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0) {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    area() {
        const s = (this.sideA + this.sideB + this.sideC) / 2;
        let area = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
        return area;
    }
}

// console.log(new Triangle(3, 4, 5).perimeter());  // 12
// console.log(new Triangle(3, 4, 5).area());  // 6
// console.log(new Triangle().perimeter()); // 0
// console.log(new Triangle().area()); // 0

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
let newObject=null;

for (const element of data) {
    switch(element.length){
        case 2:
            newObject = new Rectangle(element[0], element[1]);
            if (element[0] === element[1]) {
                console.log(`Square with sides ${element.toString()} has perimeter of ${newObject.perimeter()} and area of ${newObject.area()}`);
            } else {
                console.log(`Rectangle with sides ${element.toString()} has perimeter of ${newObject.perimeter()} and area of ${newObject.area()}`);
            }
            break;
        case 3:
            newObject = new Triangle(element[0], element[1], element[2]);
            console.log(`Triangle with sides ${element.toString()} has perimeter of ${newObject.perimeter()} and area of ${newObject.area()}`);
            break;
        default:
            if (element.length === 1) {
                console.log(`Shape with ${element.length} side usupported`)
            } else {
                console.log(`Shape with ${element.length} sides usupported`)
            }
    } 
}


