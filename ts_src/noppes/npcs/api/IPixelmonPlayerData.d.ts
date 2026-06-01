
/**
 * Provides access to a player's Pixelmon data, including party and PC storage.
 */
export interface IPixelmonPlayerData extends IObject {
	/**
	 * Gets the Pixelmon in the specified party slot.
	 * 
	 * @param slot the party slot index (0-5)
	 * @return the Pixelmon in that slot, or null if empty
	 */
	getPartySlot(slot: number): IPixelmon;

	/**
	 * Gets the total number of Pixelmon stored in the player's PC.
	 * 
	 * @return the PC Pixelmon count
	 */
	countPCPixelmon(): number;
}

