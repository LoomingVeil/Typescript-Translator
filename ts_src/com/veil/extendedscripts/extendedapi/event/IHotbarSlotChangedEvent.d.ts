
/**
 * Fired when a player switches their selected hotbar slot.
 * 
 * @hookName hotbarSlotChanged
 */
export interface IHotbarSlotChangedEvent extends IPlayerEvent {
	oldSlot: number;
	newSlot: number;
	oldStack: IItemStack;
	newStack: IItemStack;
	getOldSlot(): number;

	getNewSlot(): number;

	getOldStack(): IItemStack;

	getNewStack(): IItemStack;
}

