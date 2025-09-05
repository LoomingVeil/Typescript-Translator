import { IObject } from "./../../../../IObject";
import { INbt } from "./../INbt";

import { NBTTagCompound } from "./../../../../missingTypes";
import { ItemStack } from "./../../../../missingTypes";

/**
 * Represents an item stack with extended functionality:
 * enchantments, lore, and additional item data.
 */
export interface IItemStack extends IObject {
	getName(): string;

	/**
	 * @return Returns the stack size.
	 */
	getStackSize(): number;

	/**
	 * @return Returns whether the item has a custom name.
	 */
	hasCustomName(): boolean;

	/**
	 * Sets the custom name for the item.
	 * 
	 * @param name The custom name.
	 */
	setCustomName(name: string): void;

	/**
	 * @return Returns the in-game displayed name. This is either the item name or the custom name if set.
	 */
	getDisplayName(): string;

	/**
	 * @return Returns the base item name, regardless of any custom name.
	 */
	getItemName(): string;

	/**
	 * Sets the stack size of the item.
	 * 
	 * @param size The new stack size (between 1 and 64).
	 */
	setStackSize(size: number): void;

	/**
	 * @return Returns the maximum stack size for this item.
	 */
	getMaxStackSize(): number;

	/**
	 * @return Returns the item damage. For tools, this represents durability.
	 */
	getItemDamage(): number;

	/**
	 * Sets the item damage value.
	 * 
	 * @param value The new damage value.
	 */
	setItemDamage(value: number): void;

	/**
	 * Sets an NBT tag for this item.
	 * 
	 * @param key The tag key.
	 * @param value The value to store (Number or String).
	 */
	setTag(key: string, value: any): void;

	/**
	 * Checks if the item has an NBT tag with the specified key.
	 * 
	 * @param key The tag key.
	 * @return true if present, false otherwise.
	 */
	hasTag(key: string): boolean;

	/**
	 * Returns the value of the NBT tag with the specified key.
	 * 
	 * @param key The tag key.
	 * @return The tag value, or null if not present.
	 */
	getTag(key: string): any;

	/**
	 * Removes all custom tags from the item and returns the removed NBT data.
	 * 
	 * @return The removed NBT data.
	 */
	removeTags(): INbt;

	/**
	 * @return Returns whether the item is enchanted.
	 */
	isEnchanted(): boolean;

	/**
	 * Checks if the item has the specified enchantment.
	 * 
	 * @param id The enchantment id.
	 * @return true if present, false otherwise.
	 */
	hasEnchant(id: number): boolean;

	/**
	 * Adds an enchantment to the item.
	 * 
	 * @param id The enchantment id.
	 * @param strength The enchantment strength.
	 */
	addEnchant(id: number, strength: number): void;

	/**
	 * Sets an attribute on the item using the default MC attribute system.
	 * 
	 * @param name The attribute key.
	 * @param value The attribute value.
	 */
	setAttribute(name: string, value: number): void;

	/**
	 * Retrieves the attribute value using the default MC attribute system.
	 * 
	 * @param name The attribute key.
	 * @return The attribute value.
	 */
	getAttribute(name: string): number;

	/**
	 * Checks if the item has an attribute (using the default MC attribute system).
	 * 
	 * @param name The attribute key.
	 * @return true if present, false otherwise.
	 */
	hasAttribute(name: string): boolean;

	/**
	 * Sets the custom attribute value for the given key.
	 * The value is stored in the item's custom NBT structure.
	 * 
	 * @param key The custom attribute key.
	 * @param value The attribute value.
	 */
	setCustomAttribute(key: string, value: number): void;

	/**
	 * Checks whether the item has a custom attribute with the specified key.
	 * 
	 * @param key The custom attribute key.
	 * @return true if the attribute exists, false otherwise.
	 */
	hasCustomAttribute(key: string): boolean;

	/**
	 * Returns the custom attribute object associated with the given key.
	 * This may be a raw value or a more complex structure.
	 * 
	 * @param key The custom attribute key.
	 * @return The attribute object value
	 */
	getCustomAttribute(key: string): number;

	/**
	 * Removes the custom attribute with the specified key from the item.
	 * 
	 * @param key The custom attribute key.
	 */
	removeCustomAttribute(key: string): void;

	/**
	 * Sets the magic attribute value for the given key and magic identifier.
	 * The value is stored in the item's custom NBT under "RPGCore" -> "Magic".
	 * 
	 * @param key The magic attribute key.
	 * @param magicId The magic identifier.
	 * @param value The attribute value.
	 */
	setMagicAttribute(key: string, magicId: number, value: number): void;

	/**
	 * Checks whether the item has a magic attribute with the given key and magic identifier.
	 * 
	 * @param key The magic attribute key.
	 * @param magicId The magic identifier.
	 * @return true if the attribute exists, false otherwise.
	 */
	hasMagicAttribute(key: string, magicId: number): boolean;

	/**
	 * Returns the magic attribute object (typically a Float value) associated with the given key and magic identifier.
	 * 
	 * @param key The magic attribute key.
	 * @param magicId The magic identifier.
	 * @return The attribute object, or null if not present.
	 */
	getMagicAttribute(key: string, magicId: number): number;

	/**
	 * Removes the magic attribute with the specified key and magic identifier from the item.
	 * 
	 * @param key The magic attribute key.
	 * @param magicId The magic identifier.
	 */
	removeMagicAttribute(key: string, magicId: number): void;

	/**
	 * Sets (or applies) a requirement for the item using the given requirement key and value.
	 * The requirement data is stored under "RPGCore" → "Requirements" in the item's NBT.
	 * 
	 * @param reqKey The requirement key.
	 * @param value The requirement value (Number or String).
	 */
	setRequirement(reqKey: string, value: any): void;

	/**
	 * Checks whether the item has a requirement with the specified key.
	 * 
	 * @param reqKey The requirement key.
	 * @return true if the requirement exists, false otherwise.
	 */
	hasRequirement(reqKey: string): boolean;

	/**
	 * Retrieves the requirement value for the specified key.
	 * 
	 * @param reqKey The requirement key.
	 * @return The requirement value as an Object (or null if not present).
	 */
	getRequirement(reqKey: string): any;

	/**
	 * Removes the requirement with the specified key from the item.
	 * 
	 * @param reqKey The requirement key.
	 */
	removeRequirement(reqKey: string): void;

	/**
	 * Returns an array of all custom attribute keys stored on the item.
	 * 
	 * @return an array of custom attribute keys.
	 */
	getCustomAttributeKeys(): string[];

	/**
	 * Returns an array of all magic attribute keys (as strings) for the specified magic attribute key.
	 * 
	 * @param key the magic attribute key (e.g. "magic_damage").
	 * @return an array of magic identifier keys as strings.
	 */
	getMagicAttributeKeys(key: string): string[];

	/**
	 * Returns an array of all requirement keys stored on the item.
	 * 
	 * @return an array of requirement keys.
	 */
	getRequirementKeys(): string[];

	/**
	 * @return Returns the lore (descriptive text) for the item.
	 */
	getLore(): string[];

	/**
	 * @return Returns whether the item has lore.
	 */
	hasLore(): boolean;

	/**
	 * Sets the lore for the item.
	 * 
	 * @param lore An array of lore strings.
	 */
	setLore(lore: string[]): void;

	/**
	 * Creates a deep copy of this item stack.
	 * 
	 * @return A copy of the item stack.
	 */
	copy(): IItemStack;

	/**
	 * @return Returns the maximum damage the item can sustain.
	 */
	getMaxItemDamage(): number;

	/**
	 * @return Returns whether the item is a written book.
	 */
	isWrittenBook(): boolean;

	/**
	 * @return Returns the book's title.
	 */
	getBookTitle(): string;

	/**
	 * @return Returns the book's author.
	 */
	getBookAuthor(): string;

	/**
	 * @return If the item is a book, returns the book pages.
	 */
	getBookText(): string[];

	/**
	 * @return Returns whether the item represents a block.
	 */
	isBlock(): boolean;

	/**
	 * Returns an INbt instance representing the item's custom NBT data.
	 * 
	 * @return The custom NBT data.
	 */
	getNbt(): INbt;

	/**
	 * Returns an INbt instance representing the full NBT data of the item.
	 * 
	 * @return The complete NBT data.
	 */
	getItemNbt(): INbt;

	/**
	 * Returns the underlying Minecraft ItemStack.
	 * <p>No support is given for this method. Use with caution.</p>
	 * 
	 * @return The Minecraft ItemStack.
	 */
	getMCItemStack(): ItemStack;

	/**
	 * Returns a hash value for the item.
	 * 
	 * @return The item's hash code.
	 */
	itemHash(): number;

	/**
	 * Returns the underlying Minecraft NBTTagCompound for the item.
	 * 
	 * @return The NBTTagCompound.
	 */
	getMCNbt(): NBTTagCompound;

	/**
	 * Sets the underlying Minecraft NBTTagCompound for the item.
	 * 
	 * @param compound The NBTTagCompound to set.
	 */
	setMCNbt(compound: NBTTagCompound): void;

	/**
	 * Compares this item with another item, with an option to ignore NBT data.
	 * 
	 * @param item The item to compare.
	 * @param ignoreNBT true to ignore NBT data.
	 * @return true if the items are considered equal, false otherwise.
	 */
	compare(item: IItemStack, ignoreNBT: boolean): boolean;

	/**
	 * Compares this item with another item, with options to ignore damage and/or NBT data.
	 * 
	 * @param item The item to compare.
	 * @param ignoreDamage true to ignore damage values.
	 * @param ignoreNBT true to ignore NBT data.
	 * @return true if the items are considered equal, false otherwise.
	 */
	compare(item: IItemStack, ignoreDamage: boolean, ignoreNBT: boolean): boolean;

	setUnbreakable(item: IItemStack, value: boolean): void;

}

