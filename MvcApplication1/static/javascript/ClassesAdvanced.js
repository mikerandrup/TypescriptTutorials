var Greeter = (function () {
    function Greeter() {
        console.log("Running the constructor...");
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.defaultGreeting;
        }
    };
    Greeter.defaultGreeting = "Hello, there";
    return Greeter;
})();
var greeter1 = new Greeter();
console.log(greeter1.greet());
var greeterMaker = Greeter;
greeterMaker.defaultGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
var greeter3 = new Greeter();
greeter3.greeting = "world";
console.log(greeter3.greet());
var Point = (function () {
    function Point() {
    }
    return Point;
})();
var point3d = { x: 1, y: 2, z: 3 };
//# sourceMappingURL=ClassesAdvanced.js.map