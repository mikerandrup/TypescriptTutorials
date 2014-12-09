class Greeter {
    static defaultGreeting = "Hello, there";
    greeting: string;
    constructor() {
        console.log("Running the constructor...");
    }
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.defaultGreeting;
        }
    }
}

var greeter1: Greeter = new Greeter();
console.log(greeter1.greet());

var greeterMaker: typeof Greeter = Greeter;
greeterMaker.defaultGreeting = "Hey there!";

var greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

var greeter3: Greeter = new Greeter();
greeter3.greeting = "world";
console.log(greeter3.greet());


class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

var point3d: Point3d = { x: 1, y: 2, z: 3 };