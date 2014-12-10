/// <reference path="modules/Validation.ts" />
/// <reference path="modules/LettersOnlyValidator.ts" />
/// <reference path="modules/ZipCodeValidator.ts" />

var strings = ['Hello', '98052', '101'];

import val = Validation;

var validators: { [s: string]: val.StringIsValid; } = {};
validators['ZIP code'] = new val.ZipCodeValidator();
validators['Letters only'] = new val.LettersOnlyValidator();

strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});