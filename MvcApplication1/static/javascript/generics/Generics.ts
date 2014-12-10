module Generics {

    module GenericsAndFunctions {

        function overlySpecificIdentity(arg: number): number {
            return arg;
        }

        function pointlesslyGeneralIdentity(arg: any): any {
            return arg;
        }

        function genericIdentity<T>(arg: T): T {
            return arg;
        }

        console.log(typeof genericIdentity<boolean>(true));
        console.log(typeof genericIdentity(true));

        console.log(typeof genericIdentity("fidgety"));
        console.log(typeof genericIdentity<string>("fidgety"));

        console.log(typeof genericIdentity(522.1));
        console.log(typeof genericIdentity<number>(522.1));

        console.log(typeof genericIdentity({ imma: "object" }));
        console.log(typeof genericIdentity<Object>({ imma: "object" }));

    }

    module GenericInterfaces {

        module ExampleOne {

            interface GenericIdentityFn {
                <T>(arg: T): T;
            }

            function identity<T>(arg: T): T {
                return arg;
            }

            var myIdentity: GenericIdentityFn = identity;
        }

        module ExampleTwo {

            interface GenericIdentityFn<T> {
                (arg: T): T;
            }

            function identity<T>(arg: T): T {
                return arg;
            }

            var myIdentity: GenericIdentityFn<number> = identity;

        }
    }

    module GenericClasses {

        class GenericNumber<T> {
            zeroValue: T;
            add: (x: T, y: T) => T;
        }

        var myGenericNumber = new GenericNumber<number>();
        myGenericNumber.zeroValue = 0;
        myGenericNumber.add = function (exxx, whyy) {
            return exxx + whyy;
        };

        // I know this is weird but demo the generics
        var myGenericBooleanAnder = new GenericNumber<boolean>();
        myGenericBooleanAnder.zeroValue = false;
        myGenericBooleanAnder.add = function (aay, bee) {
            return aay || bee;
        };

        var myGenericStringConcat = new GenericNumber<string>();
        myGenericStringConcat.zeroValue = "";
        myGenericStringConcat.add = function (one, two) {
            return one + two;
        }

    }

    module GenericConstraints {

        interface HasLength {
            length: number;
        }

        function loggingIdentity<T extends HasLength>(arg: T): T {
            console.log(arg.length);
            return arg;
        }

        loggingIdentity("string has length");
        loggingIdentity([5, 10, 15, 20]);
        loggingIdentity({length: 5, value: "twelve"});

    }

    module UsingTypeParamsInGenericConstraints {

        class Findable<T> {
            identity: number;
        }

        function find<T>(n: T, s: Findable<T>) {

        }

    }

    module ClassTypesInGenerics {

        class Keeper {
            nametag: string;
        }

        class BeeKeeper extends Keeper {
            hasMask: boolean;
        }

        class ZooKeeper extends Keeper {
            wearsboots: boolean;
        }

        class Animal {
            numLegs: number;
        }

        class Bee extends Animal {
            constructor() {
                this.numLegs = 6;
                super();
            }
            keeper: BeeKeeper;
        }

        class Lion extends Animal {
            constructor() {
                this.numLegs = 4;
                super();
            }
            keeper: ZooKeeper;
        }

        function findKeeper<A extends Animal, K>(a: { new (): A; prototype: { keeper: K } }): K {
            return a.prototype.keeper;
        }

    }

}