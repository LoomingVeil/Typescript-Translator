
/**
 * Fired when the player equips/unequips armor.
 * 
 * @hookName armorChanged
 */
export interface IArmorChangedEvent extends IPlayerEvent {
	getOldArmor(): IItemStack[];

	getNewArmor(): IItemStack[];

	wasChanged(slot: number): boolean;

	wasEquipped(slot: number): boolean;

	wasUnequipped(slot: number): boolean;
}

