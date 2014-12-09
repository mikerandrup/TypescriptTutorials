var isDone: boolean = false;

var height: number = 6;

var name: string = "bob";
name = "ted";


var list: number[] = [1, 2, 3];
var list: Array<number> = [1, 2, 3];

enum Color { Red, Green, Blue };
var c: Color = Color.Green;


var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

var list2: any[] = [1, true, "hello"];
list2[1] = "plantains";

function warnUser(): void {
    alert("You have been warned!");
}

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

var myObj = { size: 10, label: "Unicorn Doll" };
printLabel(myObj);

interface LabelledValue {
    label: string;
}

function printLabel2(labeledObj: LabelledValue) {
    console.log(labeledObj.label);
}



interface SquareConfig {
    color?: Color;
    width?: number;
}

function createSquare(config: SquareConfig): { color: Color; area: number; } {

    var newSquare = { color: Color.Red, area: 100 };

    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

interface SearchFunc {
    (haystack: string, needle: string): boolean;
}

var mySearch: SearchFunc = function (src: string, sub: string): boolean {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true; //It doesn't notice if some code paths fail to return a value :(
    }
}

interface StringArray {
    [index: number]: string;
}
var myArray: StringArray = ["Bob", "Fred", "Susan"];


interface Dictionary {
    [index: number]: string;
}

interface ClockStatic {
    new (hour: number, minute: number);
}

class Clock {
    currentTime: Date;
    constructor(h: number, m: number) {
        this.currentTime = new Date(2014, 1, 1, h, m, 0, 0);
    }
}

var cs: ClockStatic = Clock;
var newClock = new cs(11, 36);


interface Shape {
    color: Color;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

var square = <Square>{};
square.color = Color.Blue;
square.sideLength = 10;
square.penWidth = 3.2;


interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

var counter: Counter;
counter(10);
counter.reset();
counter.interval = 3.5;