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
//# sourceMappingURL=ClassesAccessors.js.map