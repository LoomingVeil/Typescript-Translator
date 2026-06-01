
/**
 * Handles custom crafting recipes and anvil recipes.
 */
export interface IRecipeHandler extends IObject {
	/**
	 * @return all global (vanilla workbench) recipes.
	 */
	getGlobalList(): List;

	/**
	 * @return all carpentry table recipes.
	 */
	getCarpentryList(): List;

	/**
	 * @return all custom anvil recipes.
	 */
	getAnvilList(): List;

	/**
	 * Adds a shaped crafting recipe.
	 * 
	 * @param name the recipe name.
	 * @param global true for global (vanilla workbench); false for carpentry.
	 * @param result the resulting item stack.
	 * @param recipe the recipe pattern and ingredient mappings.
	 */
	addRecipe(name: string, global: boolean, result: ItemStack, recipe: any): void;

	/**
	 * Adds a shaped crafting recipe with explicit dimensions.
	 * 
	 * @param name the recipe name.
	 * @param global true for global; false for carpentry.
	 * @param result the resulting item stack.
	 * @param width the recipe grid width.
	 * @param height the recipe grid height.
	 * @param items the ingredient item stacks.
	 */
	addRecipe(name: string, global: boolean, result: ItemStack, width: number, height: number, items: ItemStack): void;

	/**
	 * Deletes a crafting recipe by ID.
	 * 
	 * @param id the recipe ID.
	 * @return the deleted recipe, or null if not found.
	 */
	delete(id: number): IRecipe;

	/**
	 * Deletes an anvil recipe by ID.
	 * 
	 * @param id the recipe ID.
	 * @return the deleted anvil recipe, or null if not found.
	 */
	deleteAnvil(id: number): IAnvilRecipe;

	/**
	 * Adds a custom anvil recipe.
	 * 
	 * @param name the recipe name.
	 * @param global true for global; false for carpentry.
	 * @param itemToRepair the item to be repaired.
	 * @param repairMaterial the material used for repair.
	 * @param xpCost the experience cost.
	 * @param repairPercentage the percentage of durability restored per material.
	 */
	addAnvilRecipe(name: string, global: boolean, itemToRepair: ItemStack, repairMaterial: ItemStack, xpCost: number, repairPercentage: number): void;
}

