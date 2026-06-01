
/**
 * Represents a custom crafting recipe for the carpentry table or vanilla workbench.
 */
export interface IRecipe extends IObject {
	/**
	 * @return the recipe display name.
	 */
	getName(): string;

	/**
	 * @return true if this is a global (vanilla workbench) recipe.
	 */
	isGlobal(): boolean;

	/**
	 * @param global true for global; false for carpentry only.
	 */
	setIsGlobal(global: boolean): void;

	/**
	 * @return true if NBT data is ignored when matching ingredients.
	 */
	getIgnoreNBT(): boolean;

	/**
	 * @param ignoreNBT true to ignore NBT in ingredient matching.
	 */
	setIgnoreNBT(ignoreNBT: boolean): void;

	/**
	 * @return true if damage values are ignored when matching ingredients.
	 */
	getIgnoreDamage(): boolean;

	/**
	 * @param ignoreDamage true to ignore damage in ingredient matching.
	 */
	setIgnoreDamage(ignoreDamage: boolean): void;

	/**
	 * @return the recipe grid width.
	 */
	getWidth(): number;

	/**
	 * @return the recipe grid height.
	 */
	getHeight(): number;

	/**
	 * @return the resulting item stack.
	 */
	getResult(): ItemStack;

	/**
	 * @return the ingredient item stacks in grid order.
	 */
	getRecipe(): ItemStack[];

	/**
	 * Deletes this recipe from the handler.
	 */
	delete(): void;

	/**
	 * @return the unique recipe ID.
	 */
	getId(): number;
}

