
/**
 * Handles registration and retrieval of linked items.
 * Linked items are custom item definitions that can be updated globally.
 */
export interface ILinkedItemHandler extends IObject {
	/**
	 * Creates a new linked item with the given name.
	 * 
	 * @param name the item name.
	 * @return the created linked item.
	 */
	createItem(name: string): ILinkedItem;

	/**
	 * Creates an ItemStack from a linked item by its ID.
	 * 
	 * @param id the linked item ID.
	 * @return the item stack, or null if the ID is invalid.
	 */
	createItemStack(id: number): IItemStack;

	/**
	 * Registers a linked item with this handler.
	 * 
	 * @param linkedItem the linked item to add.
	 */
	add(linkedItem: ILinkedItem): void;

	/**
	 * Removes and returns the linked item with the given ID.
	 * 
	 * @param id the linked item ID.
	 * @return the removed linked item, or null if not found.
	 */
	remove(id: number): ILinkedItem;

	/**
	 * Returns the linked item with the given ID.
	 * 
	 * @param id the linked item ID.
	 * @return the linked item, or null if not found.
	 */
	get(id: number): ILinkedItem;

	/**
	 * Checks whether a linked item with the given ID exists.
	 * 
	 * @param id the linked item ID.
	 * @return true if it exists; false otherwise.
	 */
	contains(id: number): boolean;

	/**
	 * Checks whether the given linked item is registered.
	 * 
	 * @param linkedItem the linked item to check.
	 * @return true if it exists; false otherwise.
	 */
	contains(linkedItem: ILinkedItem): boolean;
}

