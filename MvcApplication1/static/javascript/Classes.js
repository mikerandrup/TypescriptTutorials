var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Greeter2 = (function () {
    function Greeter2(message) {
        this.greeting = message;
    }
    Greeter2.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter2;
})();
var Animal = (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animal;
})();
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name, 2);
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log("Slithering... ");
        _super.prototype.move.call(this, meters);
    };
    return Snake;
})(Animal);
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name, 5);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.log("Galloping... ");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
})(Animal);
var Mammal = (function () {
    function Mammal(theName) {
        this.name = theName;
    }
    return Mammal;
})();
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        _super.call(this, "Rhino", 15);
    }
    return Rhino;
})(Animal);
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
})();
(function (exports, $) {
    var greeter = new Greeter2("world");
    var sam = new Snake("Sammy the Python");
    var tom = new Horse("Tommy the Palimino");
    sam.move();
    tom.move(34);
    tom.move(34);
    var goat = new Animal("Goat", 2.5);
    var rhino = new Rhino();
    var employee = new Employee("Bob");
    goat = rhino;
}(this.Match, this.jQuery));
//# sourceMappingURL=Classes.js.map