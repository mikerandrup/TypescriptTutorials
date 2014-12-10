var MvcApplication1;
(function (MvcApplication1) {
    var Models;
    (function (Models) {
        (function (HowEnumsWork) {
            HowEnumsWork[HowEnumsWork["Unknownable"] = 0] = "Unknownable";
            HowEnumsWork[HowEnumsWork["VeryWell"] = 1] = "VeryWell";
            HowEnumsWork[HowEnumsWork["NotAtAll"] = 2] = "NotAtAll";
            HowEnumsWork[HowEnumsWork["TheWorldExplodes"] = 3] = "TheWorldExplodes";
        })(Models.HowEnumsWork || (Models.HowEnumsWork = {}));
        var HowEnumsWork = Models.HowEnumsWork;
    })(Models = MvcApplication1.Models || (MvcApplication1.Models = {}));
})(MvcApplication1 || (MvcApplication1 = {}));
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
var DeclarationMerging;
(function (DeclarationMerging) {
    var box = { height: 5, width: 6, scale: 10 };
    var Coords = (function () {
        function Coords(x, y) {
            this.x = x;
            this.y = y;
        }
        return Coords;
    })();
    window.onmousedown = function (evt) {
        var coords = new Coords(evt.pageX, evt.pageY);
    };
})(DeclarationMerging || (DeclarationMerging = {}));
var TestLSCache;
(function (TestLSCache) {
    var FoodGroup;
    (function (FoodGroup) {
        FoodGroup[FoodGroup["Grains"] = 0] = "Grains";
        FoodGroup[FoodGroup["Daily"] = 1] = "Daily";
        FoodGroup[FoodGroup["Meat"] = 2] = "Meat";
        FoodGroup[FoodGroup["Vegetable"] = 3] = "Vegetable";
        FoodGroup[FoodGroup["Fruit"] = 4] = "Fruit";
        FoodGroup[FoodGroup["Sweets"] = 5] = "Sweets";
    })(FoodGroup || (FoodGroup = {}));
    var FoodItem = (function () {
        function FoodItem(name) {
            this.name = name;
        }
        return FoodItem;
    })();
    var DessertFood = (function (_super) {
        __extends(DessertFood, _super);
        function DessertFood(name) {
            this.group = 5 /* Sweets */;
            this.fatGrams = 50;
            _super.call(this, name);
        }
        return DessertFood;
    })(FoodItem);
    var MeatyFood = (function (_super) {
        __extends(MeatyFood, _super);
        function MeatyFood(name) {
            this.group = 2 /* Meat */;
            this.proteinGrams = 20;
            _super.call(this, name);
        }
        return MeatyFood;
    })(FoodItem);
    var PastaFood = (function (_super) {
        __extends(PastaFood, _super);
        function PastaFood(name) {
            this.group = 0 /* Grains */;
            this.carbGrams = 5000;
            _super.call(this, name);
        }
        return PastaFood;
    })(FoodItem);
    var Meal = (function () {
        function Meal(mealName) {
            var foods = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                foods[_i - 1] = arguments[_i];
            }
            this.mealName = mealName;
            this.foodsInMeal = foods;
        }
        return Meal;
    })();
    var breakfast = new Meal("breakfast", new MeatyFood("bacon"), new MeatyFood("eggs"));
    var lunch = new Meal("lunch", new PastaFood("ravioli"), new MeatyFood("burger"));
    var dinner = new Meal("dinner", new PastaFood("linguini"), new MeatyFood("steak"), new DessertFood("pie"));
    var MEAL_KEY_1 = "mealkey1";
    var MEAL_KEY_2 = "mealkey2";
    var MEAL_KEY_3 = "mealkey3";
    var EXPIRATION_MINUTES = 1;
    lscache.set(MEAL_KEY_1, breakfast, EXPIRATION_MINUTES);
    lscache.set(MEAL_KEY_2, lunch, EXPIRATION_MINUTES);
    lscache.set(MEAL_KEY_3, dinner, EXPIRATION_MINUTES);
    var retrievedMeal1 = lscache.get(MEAL_KEY_1);
    console.log(retrievedMeal1.mealName, retrievedMeal1);
    var retrievedMeal2 = lscache.get(MEAL_KEY_2);
    console.log(retrievedMeal2);
    var retrievedMeal3 = lscache.get(MEAL_KEY_3);
    console.log(retrievedMeal3);
})(TestLSCache || (TestLSCache = {}));
var FunctionStuff;
(function (FunctionStuff) {
    var NamedAndAnon;
    (function (NamedAndAnon) {
        var z = 100;
        function addToZ(x, y) {
            return x + y + z;
        }
        function add(x, y) {
            return x + y;
        }
        var myAdd = function (x, y) {
            return x + y;
        };
        var myAdd2 = function (x, y) {
            return x + y;
        };
        var myAdd3 = function (x, y) {
            return x + y;
        };
        var myAdd4 = function (uno, dos) {
            return uno + dos;
        };
    })(NamedAndAnon || (NamedAndAnon = {}));
    var OptionalAndDefaultParameters;
    (function (OptionalAndDefaultParameters) {
        function buildName(firstName, lastName, suffix) {
            if (suffix === void 0) { suffix = ""; }
            if (lastName) {
                return firstName + " " + lastName + suffix;
            }
            else {
                return firstName + suffix;
            }
        }
        console.log(buildName("Bob"));
        console.log(buildName("Bob", "Jones"));
        console.log(buildName("Bob", "Jones", "Jr."));
        console.log(buildName("Bob", undefined, "Jr."));
    })(OptionalAndDefaultParameters || (OptionalAndDefaultParameters = {}));
    var RestParameters;
    (function (RestParameters) {
        function buildName(firstName) {
            var restOfName = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                restOfName[_i - 1] = arguments[_i];
            }
            return firstName + (restOfName.length > 0 ? " " : "") + restOfName.join(" ");
        }
        var buildNameFunc = buildName;
        console.log(buildName("Prince"));
        console.log(buildName("Michael", "Jackson"));
        console.log(buildName("Sarah", "Jessica", "Parker"));
        console.log(buildName("Miranda", "Veracruz", "de", "la", "Hoya", "Cardinal"));
    })(RestParameters || (RestParameters = {}));
    var LambdasAndThis;
    (function (LambdasAndThis) {
        var deck = {
            suits: ["hearts", "spades", "clubs", "diamonds"],
            cards: Array(52),
            createCardPicker: function () {
                var _this = this;
                return function () {
                    var pickedCard = Math.floor(Math.random() * 52);
                    var pickedSuit = Math.floor(pickedCard / 13);
                    return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
                };
            }
        };
        var cardPicker = deck.createCardPicker();
        var pickedCard = cardPicker();
        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    })(LambdasAndThis || (LambdasAndThis = {}));
    var Overloads;
    (function (Overloads) {
        var suits = ["hearts", "spades", "clubs", "diamonds"];
        function pickCard(x) {
            if (typeof x == "object") {
                var pickedCard = Math.floor(Math.random() * x.length);
                return pickedCard;
            }
            else if (typeof x == "number") {
                var pickedSuit = Math.floor(x / 13);
                return { suit: suits[pickedSuit], card: x % 13 };
            }
        }
        var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
        var pickedCard1 = myDeck[pickCard(myDeck)];
        console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
        var pickedCard2 = pickCard(15);
        console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
    })(Overloads || (Overloads = {}));
})(FunctionStuff || (FunctionStuff = {}));
var Generics;
(function (Generics) {
    var GenericsAndFunctions;
    (function (GenericsAndFunctions) {
        function overlySpecificIdentity(arg) {
            return arg;
        }
        function pointlesslyGeneralIdentity(arg) {
            return arg;
        }
        function genericIdentity(arg) {
            return arg;
        }
        console.log(typeof genericIdentity(true));
        console.log(typeof genericIdentity(true));
        console.log(typeof genericIdentity("fidgety"));
        console.log(typeof genericIdentity("fidgety"));
        console.log(typeof genericIdentity(522.1));
        console.log(typeof genericIdentity(522.1));
        console.log(typeof genericIdentity({ imma: "object" }));
        console.log(typeof genericIdentity({ imma: "object" }));
    })(GenericsAndFunctions || (GenericsAndFunctions = {}));
    var GenericInterfaces;
    (function (GenericInterfaces) {
        var ExampleOne;
        (function (ExampleOne) {
            function identity(arg) {
                return arg;
            }
            var myIdentity = identity;
        })(ExampleOne || (ExampleOne = {}));
        var ExampleTwo;
        (function (ExampleTwo) {
            function identity(arg) {
                return arg;
            }
            var myIdentity = identity;
        })(ExampleTwo || (ExampleTwo = {}));
    })(GenericInterfaces || (GenericInterfaces = {}));
    var GenericClasses;
    (function (GenericClasses) {
        var GenericNumber = (function () {
            function GenericNumber() {
            }
            return GenericNumber;
        })();
        var myGenericNumber = new GenericNumber();
        myGenericNumber.zeroValue = 0;
        myGenericNumber.add = function (exxx, whyy) {
            return exxx + whyy;
        };
        var myGenericBooleanAnder = new GenericNumber();
        myGenericBooleanAnder.zeroValue = false;
        myGenericBooleanAnder.add = function (aay, bee) {
            return aay || bee;
        };
        var myGenericStringConcat = new GenericNumber();
        myGenericStringConcat.zeroValue = "";
        myGenericStringConcat.add = function (one, two) {
            return one + two;
        };
    })(GenericClasses || (GenericClasses = {}));
    var GenericConstraints;
    (function (GenericConstraints) {
        function loggingIdentity(arg) {
            console.log(arg.length);
            return arg;
        }
        loggingIdentity("string has length");
        loggingIdentity([5, 10, 15, 20]);
        loggingIdentity({ length: 5, value: "twelve" });
    })(GenericConstraints || (GenericConstraints = {}));
    var UsingTypeParamsInGenericConstraints;
    (function (UsingTypeParamsInGenericConstraints) {
        var Findable = (function () {
            function Findable() {
            }
            return Findable;
        })();
        function find(n, s) {
        }
    })(UsingTypeParamsInGenericConstraints || (UsingTypeParamsInGenericConstraints = {}));
    var ClassTypesInGenerics;
    (function (ClassTypesInGenerics) {
        var Keeper = (function () {
            function Keeper() {
            }
            return Keeper;
        })();
        var BeeKeeper = (function (_super) {
            __extends(BeeKeeper, _super);
            function BeeKeeper() {
                _super.apply(this, arguments);
            }
            return BeeKeeper;
        })(Keeper);
        var ZooKeeper = (function (_super) {
            __extends(ZooKeeper, _super);
            function ZooKeeper() {
                _super.apply(this, arguments);
            }
            return ZooKeeper;
        })(Keeper);
        var Animal = (function () {
            function Animal() {
            }
            return Animal;
        })();
        var Bee = (function (_super) {
            __extends(Bee, _super);
            function Bee() {
                this.numLegs = 6;
                _super.call(this);
            }
            return Bee;
        })(Animal);
        var Lion = (function (_super) {
            __extends(Lion, _super);
            function Lion() {
                this.numLegs = 4;
                _super.call(this);
            }
            return Lion;
        })(Animal);
        function findKeeper(a) {
            return a.prototype.keeper;
        }
    })(ClassTypesInGenerics || (ClassTypesInGenerics = {}));
})(Generics || (Generics = {}));
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
})(ClassExamples || (ClassExamples = {}));
var Mixins;
(function (Mixins) {
    var Disposable = (function () {
        function Disposable() {
        }
        Disposable.prototype.dispose = function () {
            this.isDisposed = true;
        };
        return Disposable;
    })();
    var Activatable = (function () {
        function Activatable() {
        }
        Activatable.prototype.activate = function () {
            this.isActive = true;
        };
        Activatable.prototype.deactivate = function () {
            this.isActive = false;
        };
        return Activatable;
    })();
    var SmartObject = (function () {
        function SmartObject() {
            var _this = this;
            this.isDisposed = false;
            this.isActive = false;
            setTimeout(function () { return console.log(_this.isActive + " : " + _this.isDisposed); }, 500);
        }
        SmartObject.prototype.interact = function () {
            this.activate();
        };
        return SmartObject;
    })();
    applyMixins(SmartObject, [Disposable, Activatable]);
    var smartObj = new SmartObject();
    setTimeout(function () { return smartObj.interact(); }, 1000);
    function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
})(Mixins || (Mixins = {}));
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
var ServerEnum = MvcApplication1.Models.HowEnumsWork;
var CloneOfServerModel = (function () {
    function CloneOfServerModel() {
    }
    return CloneOfServerModel;
})();
var myModel = new CloneOfServerModel();
myModel.Name = "Bob";
myModel.PrimaryKey = 15;
myModel.Price = 3.50;
myModel.EnumTest = 3 /* TheWorldExplodes */;
console.log("CloneOfServerModel", myModel);
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