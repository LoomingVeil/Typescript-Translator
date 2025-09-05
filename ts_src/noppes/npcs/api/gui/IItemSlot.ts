import { IItemStack } from "./../item/IItemStack";

import { Slot } from "./../../../../missingTypes";

/**
 * Represents an item slot component in a custom GUI.
 * Provides methods to get or set the contained item.
 */
export interface IItemSlot extends ICustomGuiComponent {
	/**
	 * Checks if the slot currently contains an item stack.
	 * 
	 * @return true if a stack exists; false otherwise.
	 */
	hasStack(): boolean;

	/**
	 * Returns the item stack contained in this slot.
	 * 
	 * @return the item stack.
	 */
	getStack(): IItemStack;

	/**
	 * Sets the item stack for this slot.
	 * 
	 * @param itemStack the item stack to set.
	 * @return this item slot instance.
	 */
	setStack(itemStack: IItemStack): IItemSlot;

	/**
	 * Returns the underlying Minecraft slot object.
	 * 
	 * @return the Minecraft Slot.
	 */
	getMCSlot(): Slot;

}
}
