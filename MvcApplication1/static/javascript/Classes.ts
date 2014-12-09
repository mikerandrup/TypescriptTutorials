class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}



class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(meters: number= 0) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meters = 5) {
        console.log("Slithering... ");
        super.move(meters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meters = 45) {
        console.log("Galloping... ");
        super.move(meters);
    }
}

(function (exports, $) {

    var greeter = new Greeter("world");

} (this.Match, this.jQuery));