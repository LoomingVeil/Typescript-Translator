import { IObject } from "./../../../../IObject";
import { IRecipe } from "./data/IRecipe";
import { IAnvilRecipe } from "./data/IAnvilRecipe";

import { List } from "./../../../../missingTypes";
import { ItemStack } from "./../../../../missingTypes";

export interface IRecipeHandler extends IObject {
	getGlobalList(): List;

	getCarpentryList(): List;

	getAnvilList(): List;

	addRecipe(var1: string, var2: boolean, var3: ItemStack, var4: any): void;

	addRecipe(var1: string, var2: boolean, var3: ItemStack, var4: number, var5: number, var6: ItemStack): void;

	delete(var1: number): IRecipe;

	deleteAnvil(var1: number): IAnvilRecipe;

	addAnvilRecipe(name: string, global: boolean, itemToRepair: ItemStack, repairMaterial: ItemStack, xpCost: number, repairPercentage: number): void;

}
}
