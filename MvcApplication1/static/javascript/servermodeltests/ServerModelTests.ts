/// <reference path="../../../Scripts/TypeLite.Net4.d.ts" />


import IServerModel = MvcApplication1.Models.SampleModel;
import ServerEnum = MvcApplication1.Models.HowEnumsWork;


// Wow.  I don't think this will work for maintaining the app over time.
class CloneOfServerModel implements IServerModel {
    Name: string;
    SecretWord: string;
    Price: number;
    EnumTest: ServerEnum;
}

var myModel = new CloneOfServerModel();

myModel.Name = "Bob";
myModel.SecretWord = "password";
myModel.Price = 3.50;
myModel.EnumTest = ServerEnum.TheWorldExplodes;

console.log("CloneOfServerModel", myModel);