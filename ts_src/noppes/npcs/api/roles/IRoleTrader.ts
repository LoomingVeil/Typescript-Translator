import { IPlayer } from "./../entity/IPlayer";
import { IItemStack } from "./../item/IItemStack";


export interface IRoleTrader extends IRole {
	/**
	 * @param slot Slot number 0-17
	 * @param currency Currency item
	 * @param currency2 Currency item number two
	 * @param sold Item to be sold by this npc
	 */
	setSellOption(slot: number, currency: IItemStack, currency2: IItemStack, sold: IItemStack): void;

	/**
	 * @param slot Slot number 0-17
	 * @param currency Currency item
	 * @param sold Item to be sold by this npc
	 */
	setSellOption(slot: number, currency: IItemStack, sold: IItemStack): void;

	/**
	 * @param slot
	 * @return The item being sold in this slot.
	 */
	getSellOption(slot: number): IItemStack;

	/**
	 * @param slot
	 * @return a ScriptItemStack array of size 2 which contains the currency of this trade
	 */
	getCurrency(slot: number): IItemStack[];

	/**
	 * @param slot Slot number 0-17
	 */
	removeSellOption(slot: number): void;

	/**
	 * @param name The trader Linked Market name
	 */
	setMarket(name: string): void;

	/**
	 * @return Get the currently set Linked Market name
	 */
	getMarket(): string;

	/**
	 * @param slot
	 * @return the number of times an item has been sold on that slot
	 */
	getPurchaseNum(slot: number): number;

	/**
	 * @param slot
	 * @param player
	 * @return the number of times this player has purchased from this trader
	 */
	getPurchaseNum(slot: number, player: IPlayer): number;

	/**
	 * Sets the purchase count of all slots to 0
	 */
	resetPurchaseNum(): void;

	/**
	 * sets the purchase num for that slot to 0
	 * 
	 * @param slot
	 */
	resetPurchaseNum(slot: number): void;

	/**
	 * sets the purchase num for that slot and player to 0
	 * 
	 * @param slot
	 * @param player
	 */
	resetPurchaseNum(slot: number, player: IPlayer): void;

	/**
	 * @param slot
	 * @return if this slot is enabled
	 */
	isSlotEnabled(slot: number): boolean;

	/**
	 * @param slot
	 * @param player
	 * @return if this slot is enabled for this player
	 */
	isSlotEnabled(slot: number, player: IPlayer): boolean;

	/**
	 * prevent an item from being sold on that slot
	 * 
	 * @param slot
	 */
	disableSlot(slot: number): void;

	/**
	 * disables the slot for this player
	 * 
	 * @param slot
	 * @param player
	 */
	disableSlot(slot: number, player: IPlayer): void;

	/**
	 * allow an item to be sold on that slot
	 * 
	 * @param slot
	 */
	enableSlot(slot: number): void;

	/**
	 * enables the slot for this player
	 * 
	 * @param slot
	 * @param player
	 */
	enableSlot(slot: number, player: IPlayer): void;

}
}
