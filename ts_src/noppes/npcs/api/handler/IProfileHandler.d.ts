
/**
 * Manages player profiles, which allow players to have multiple save slots
 * for their CNPC+ data.
 */
export interface IProfileHandler extends IObject {
	/**
	 * Returns the profile for the given player.
	 * 
	 * @param player the player.
	 * @return the player's profile.
	 */
	getProfile(player: IPlayer): IProfile;

	/**
	 * Switches the player to a different profile slot.
	 * 
	 * @param player the player.
	 * @param slotID the slot ID to switch to.
	 * @return true if the switch was successful.
	 */
	changeSlot(player: IPlayer, slotID: number): boolean;

	/**
	 * Checks whether a profile slot exists for the player.
	 * 
	 * @param player the player.
	 * @param slotID the slot ID.
	 * @return true if the slot exists.
	 */
	hasSlot(player: IPlayer, slotID: number): boolean;

	/**
	 * Removes a profile slot from the player.
	 * 
	 * @param player the player.
	 * @param slotID the slot ID to remove.
	 * @return true if the slot was removed.
	 */
	removeSlot(player: IPlayer, slotID: number): boolean;

	/**
	 * Returns the player data for a specific profile slot without switching to it.
	 * 
	 * @param player the player.
	 * @param slotID the slot ID.
	 * @return the player data for the slot.
	 */
	getSlotPlayerData(player: IPlayer, slotID: number): IPlayerData;

	/**
	 * Saves the current slot data for the player.
	 * 
	 * @param player the player.
	 */
	saveSlotData(player: IPlayer): void;
}

