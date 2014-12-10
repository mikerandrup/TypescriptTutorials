module Validation {
    export interface StringIsValid {
        isAcceptable(s: string): boolean;
    }
}