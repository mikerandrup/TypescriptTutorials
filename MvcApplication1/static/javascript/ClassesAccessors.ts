var groupPasscode = "secret passcode";

class Groupie {
    constructor(private _fullName: string){}

    get fullName(): string {
        return this._fullName;
    }
}


var groupie1 = new Groupie("Number1 Fan");

groupie1.fullName = "Number2 Fan";

console.log(groupie1.fullName);