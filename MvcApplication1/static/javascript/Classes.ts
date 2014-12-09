class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}



class Animal {
    constructor(private name: string, public age: number ) {}
    move(meters: number= 0) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name, 2);
    }
    move(meters = 5) {
        console.log("Slithering... ");
        super.move(meters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name, 5);
    }
    move(meters = 45) {
        console.log("Galloping... ");
        super.move(meters);
    }
}

class Mammal {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

class Rhino extends Animal {
    constructor() {
        super("Rhino", 15);
    }
}

class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}


(function (exports, $) {

    var greeter = new Greeter2("world");

    var sam = new Snake("Sammy the Python");
    var tom: Animal = new Horse("Tommy the Palimino");

    sam.move();
    tom.move(34);
    tom.move(34);

    var goat = new Animal("Goat", 2.5);
    var rhino = new Rhino();
    var employee = new Employee("Bob");

    goat = rhino;

} (this.Match, this.jQuery));