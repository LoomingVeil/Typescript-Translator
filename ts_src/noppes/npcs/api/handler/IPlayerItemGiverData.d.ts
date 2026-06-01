
/**
 * Tracks item giver interaction data for a player, including
 * cooldown timestamps and interaction history.
 */
export interface IPlayerItemGiverData extends IObject {
	/**
	 * Returns the last interaction time for the given item giver job.
	 * 
	 * @param jobItemGiver the item giver job.
	 * @return the last interaction time in game ticks.
	 */
	getTime(jobItemGiver: IJobItemGiver): number;

	/**
	 * Sets the last interaction time for the given item giver job.
	 * 
	 * @param jobItemGiver the item giver job.
	 * @param day the time to set in game ticks.
	 */
	setTime(jobItemGiver: IJobItemGiver, day: number): void;

	/**
	 * Checks whether the player has interacted with the item giver before.
	 * 
	 * @param jobItemGiver the item giver job.
	 * @return true if previously interacted; false otherwise.
	 */
	hasInteractedBefore(jobItemGiver: IJobItemGiver): boolean;
}

