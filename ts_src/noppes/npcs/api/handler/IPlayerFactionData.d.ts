
/**
 * Tracks a player's faction standing points.
 */
export interface IPlayerFactionData extends IObject {
	/**
	 * Returns the player's points for the given faction.
	 * 
	 * @param id the faction ID.
	 * @return the faction points.
	 */
	getPoints(id: number): number;

	/**
	 * Adds points to the player's standing with the given faction.
	 * Use negative values to decrease.
	 * 
	 * @param id the faction ID.
	 * @param points the points to add.
	 */
	addPoints(id: number, points: number): void;

	/**
	 * Sets the player's points for the given faction.
	 * 
	 * @param id the faction ID.
	 * @param points the new point value.
	 */
	setPoints(id: number, points: number): void;
}

