/// <reference path="../../../typescriptsource/typings/jquery/lscache.d.ts" />
module TestLSCache {

    enum FoodGroup {
        Grains,
        Daily,
        Meat,
        Vegetable,
        Fruit,
        Sweets
    }

    class FoodItem {
        constructor(public name: string) { }
        totalCalories: number;
        proteinGrams: number;
        carbGrams: number;
        fatGrams: number;
        group: FoodGroup;
    }

    class DessertFood extends FoodItem {
        constructor(name: string) {
            this.group = FoodGroup.Sweets;
            this.fatGrams = 50;
            super(name);
        }
    }

    class MeatyFood extends FoodItem {
        constructor(name: string) {
            this.group = FoodGroup.Meat;
            this.proteinGrams = 20;
            super(name);
        }
    }

    class PastaFood extends FoodItem {
        constructor(name: string) {
            this.group = FoodGroup.Grains;
            this.carbGrams = 5000;
            super(name);
        }
    }

    class Meal {
        constructor(public mealName: string, ...foods: FoodItem[]) {
            this.foodsInMeal = foods;
        }
        foodsInMeal: FoodItem[];
    }


    var breakfast = new Meal("breakfast", new MeatyFood("bacon"), new MeatyFood("eggs"));
    var lunch = new Meal("lunch", new PastaFood("ravioli"), new MeatyFood("burger"));
    var dinner = new Meal("dinner", new PastaFood("linguini"), new MeatyFood("steak"), new DessertFood("pie"));

    var MEAL_KEY_1: string = "mealkey1";
    var MEAL_KEY_2: string = "mealkey2";
    var MEAL_KEY_3: string = "mealkey3";
    var EXPIRATION_MINUTES: number = 1;



    lscache.set(MEAL_KEY_1, breakfast, EXPIRATION_MINUTES);
    lscache.set(MEAL_KEY_2, lunch, EXPIRATION_MINUTES);
    lscache.set(MEAL_KEY_3, dinner, EXPIRATION_MINUTES);  


    var retrievedMeal1: Meal = <Meal> lscache.get(MEAL_KEY_1);

    
    console.log(retrievedMeal1.mealName, retrievedMeal1);


    var retrievedMeal2: Meal = <Meal> lscache.get(MEAL_KEY_2);
    console.log(retrievedMeal2);


    var retrievedMeal3: Meal = <Meal> lscache.get(MEAL_KEY_3);
    console.log(retrievedMeal3);


}