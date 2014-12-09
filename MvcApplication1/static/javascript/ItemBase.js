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
        return true; //It doesn't notice if some code paths fail to return a value :(
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
//# sourceMappingURL=ItemBase.js.map