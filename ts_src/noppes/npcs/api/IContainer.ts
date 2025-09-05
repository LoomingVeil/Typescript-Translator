import { IPlayer } from "./entity/IPlayer";
import { IObject } from "./../../../IObject";
import { IItemStack } from "./item/IItemStack";

import { IInventory } from "./../../../missingTypes";
import { Container } from "./../../../missingTypes";

export interface IContainer extends IObject {
	getSize(): number;

	getSlot(slot: number): IItemStack;

	/**
	 * @param slot The slot to be replaced
	 * @param item The item replacing the previous item in that slot, as an IItemStack object
	 */
	setSlot(slot: number, item: IItemStack): void;

	/**
	 * @return An obfuscated MC inventory object.
	 */
	getMCInventory(): IInventory;

	/**
	 * @return An obfuscated MC container object.
	 */
	getMCContainer(): Container;

	/**
	 * @param itemStack The item stack to be searched in the container
	 * @param ignoreDamage Whether damage should be ignored when searching
	 * @param ignoreNBT Whether NBT values should be ignored when searching
	 * @return The amount of the item stack found, based on the flags given above.
	 */
	count(itemStack: IItemStack, ignoreDamage: boolean, ignoreNBT: boolean): number;

	/**
	 * @return A list of all item stacks in the container as a list of IItemStack objects.
	 */
	getItems(): IItemStack[];

	/**
	 * @return True if this container belongs to a Custom GUI.
	 */
	isCustomGUI(): boolean;

	/**
	 * Sends changes to be reflected on the player's client.
	 */
	detectAndSendChanges(): void;

	isPlayerNotUsingContainer(player: IPlayer): boolean;

}

