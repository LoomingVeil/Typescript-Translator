import { IObject } from "./../../../../../IObject";

import { ItemStack } from "./../../../../../missingTypes";

export interface IAnvilRecipe extends IObject {
	/**
	 * Returns the unique name of this anvil recipe.
	 */
	getName(): string;

	/**
	 * The XP cost per repair tick (e.g., 10 levels per tick).
	 */
	getXpCost(): number;

	/**
	 * The repair percentage (e.g., 0.1f repairs 10% of max damage per tick).
	 */
	getRepairPercentage(): number;

	/**
	 * Checks whether the provided item and repair material match this recipe.
	 * 
	 * @param itemToRepair the damaged item
	 * @param repairMaterial the material used to repair
	 * @return true if the items match the recipe requirements
	 */
	matches(itemToRepair: ItemStack, repairMaterial: ItemStack): boolean;

	/**
	 * Returns the repaired item based on the input damaged item.
	 * 
	 * @param itemToRepair the input damaged item
	 * @return a copy with reduced damage
	 */
	getResult(itemToRepair: ItemStack): ItemStack;

	getID(): number;

}

