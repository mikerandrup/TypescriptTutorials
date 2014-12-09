var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ClassExamples;
(function (ClassExamples) {
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
})(ClassExamples || (ClassExamples = {}));
var ClassExamples;
(function (ClassExamples) {
    var groupPasscode = "secret passcode";
    var Groupie = (function () {
        function Groupie(_fullName) {
            this._fullName = _fullName;
        }
        Object.defineProperty(Groupie.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            enumerable: true,
            configurable: true
        });
        return Groupie;
    })();
    var groupie1 = new Groupie("Number1 Fan");
    groupie1.fullName = "Number2 Fan";
    console.log(groupie1.fullName);
})(ClassExamples || (ClassExamples = {}));
var ClassExamples;
(function (ClassExamples) {
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
})(ClassExamples || (ClassExamples = {}));
var ClassExamples;
(function (ClassExamples) {
    var Grid = (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    })();
    var grid1 = new Grid(1.0);
    var grid2 = new Grid(5.0);
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
})(ClassExamples || (ClassExamples = {}));
var ClassExamples;
(function (ClassExamples) {
    var isDone = false;
    var height = 6;
    var name = "bob";
    name = "ted";
    var list = [1, 2, 3];
    var list = [1, 2, 3];
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    var c = 1 /* Green */;
    var notSure = 4;
    notSure = "maybe a string instead";
    notSure = false;
    var list2 = [1, true, "hello"];
    list2[1] = "plantains";
    function warnUser() {
        alert("You have been warned!");
    }
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Unicorn Doll" };
    printLabel(myObj);
    function printLabel2(labeledObj) {
        console.log(labeledObj.label);
    }
    function createSquare(config) {
        var newSquare = { color: 0 /* Red */, area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    var mySearch = function (src, sub) {
        var result = src.search(sub);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    };
    var myArray = ["Bob", "Fred", "Susan"];
    var Clock = (function () {
        function Clock(h, m) {
            this.currentTime = new Date(2014, 1, 1, h, m, 0, 0);
        }
        return Clock;
    })();
    var cs = Clock;
    var newClock = new cs(11, 36);
    var square = {};
    square.color = 2 /* Blue */;
    square.sideLength = 10;
    square.penWidth = 3.2;
    var counter;
    counter(10);
    counter.reset();
    counter.interval = 3.5;
})(ClassExamples || (ClassExamples = {}));
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    })();
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    })();
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
var strings = ['Hello', '98052', '101'];
var val = Validation;
var validators = {};
validators['ZIP code'] = new val.ZipCodeValidator();
validators['Letters only'] = new val.LettersOnlyValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
//# sourceMappingURL=compiled.js.map