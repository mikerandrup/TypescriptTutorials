
 
 


 

/// <reference path="Enums.ts" />

declare module MvcApplication1.Models {
	interface SampleModel {
		Name: string;
		SecretWord: string;
		Price: number;
		EnumTest: MvcApplication1.Models.HowEnumsWork;
	}
}


