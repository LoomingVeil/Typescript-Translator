
/**
 * Events fired before and after recipe crafting, for both crafting table and anvil recipes.
 */
export interface IRecipeEvent extends IPlayerEvent {
	/**
	 * Returns the recipe object associated with this event.
	 * This can be a custom recipe or an anvil recipe.
	 * 
	 * @return the recipe object - IRecipe or IAnvilRecipe
	 */
	getRecipe(): any;

	/**
	 * @return the input item stacks used in the recipe.
	 */
	getItems(): IItemStack[];

	/**
	 * @return true if this is an anvil recipe, false for crafting table.
	 */
	isAnvil(): boolean;
}

/**
 * Fired before a recipe is crafted. Cancelable.
 * 
 * @hookName recipeCraftPre
 */
export interface Pre extends IRecipeEvent {
	/**
	 * @param message the denial message shown when canceled.
	 */
	setMessage(message: string): void;

	/**
	 * @return the denial message.
	 */
	getMessage(): string;

	/**
	 * Only for IAnvilRecipe
	 * 
	 * @return the XP Cost of Anvil Recipe
	 */
	getXpCost(): number;

	/**
	 * Sets the XP Cost of Anvil Recipe
	 * 
	 * @param xpCost the XP Cost to set
	 */
	setXpCost(xpCost: number): void;

	/**
	 * Only for IAnvilRecipe
	 * 
	 * @return the material usage of Anvil Recipe
	 */
	getMaterialUsage(): number;

	/**
	 * Sets the material usage of Anvil Recipe
	 * 
	 * @param materialUsage the material usage to set
	 */
	setMaterialUsage(materialUsage: number): void;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired after a recipe is crafted.
 * 
 * @hookName recipeCraftPost
 */
export interface Post extends IRecipeEvent {
	/**
	 * @return the crafted item.
	 */
	getCraft(): IItemStack;

	/**
	 * @param stack the item to set as the crafting result.
	 */
	setResult(stack: IItemStack): void;
}

