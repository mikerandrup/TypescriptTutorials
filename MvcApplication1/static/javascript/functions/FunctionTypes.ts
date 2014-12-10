module FunctionStuff {

    module NamedAndAnon {

        var z = 100;
        function addToZ(x, y) {
            return x + y + z;
        }

        function add(x: number, y: number): number {
            return x + y;
        }

        var myAdd = function (x: number, y: number): number {
            return x + y;
        }

        var myAdd2: (x: number, y: number) => number =
            function (x: number, y: number): number {
                return x + y;
            };

        var myAdd3: (base: number, increment: number) => number =
            function (x: number, y: number): number {
                return x + y;
            };

        var myAdd4 = function (uno: number, dos: number): number {
            return uno + dos;
        };
    }

    module OptionalAndDefaultParameters {

        function buildName(firstName: string, lastName?: string, suffix: string = "") {
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

    }

    module RestParameters {
        function buildName(firstName: string, ...restOfName: string[]): string {
            return firstName
                + (restOfName.length > 0 ? " " : "")
                + restOfName.join(" ");
        }

        var buildNameFunc: (fname: string, ...rest: string[]) => string = buildName;

        console.log(buildName("Prince"));
        console.log(buildName("Michael", "Jackson"));
        console.log(buildName("Sarah", "Jessica", "Parker"));
        console.log(buildName("Miranda", "Veracruz", "de", "la", "Hoya", "Cardinal"));
    }

    module LambdasAndThis {

        var deck = {
            suits: ["hearts", "spades", "clubs", "diamonds"],
            cards: Array(52),
            createCardPicker: function () {
                return () => {
                    var pickedCard = Math.floor(Math.random() * 52);
                    var pickedSuit = Math.floor(pickedCard / 13);

                    return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
                }
            }
        }

        var cardPicker = deck.createCardPicker();
        var pickedCard = cardPicker();

        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    }

    module Overloads {

        var suits = ["hearts", "spades", "clubs", "diamonds"];

        function pickCard(x: { suit: string; card: number; }[]): number;
        function pickCard(x: number): { suit: string; card: number; };
        function pickCard(x): any {
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

    }
}