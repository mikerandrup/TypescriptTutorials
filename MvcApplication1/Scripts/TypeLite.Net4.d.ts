
 
 


 

/// <reference path="Enums.ts" />

declare module MvcApplication1.Models {
	interface SampleModel {
		Name: string;
		PrimaryKey: number;
		Price: number;
		EnumTest: MvcApplication1.Models.HowEnumsWork;
	}
}


