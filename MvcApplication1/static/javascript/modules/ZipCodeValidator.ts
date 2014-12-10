/// <reference path="Validation.ts" />
module Validation {
    var numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator implements StringIsValid {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
} 