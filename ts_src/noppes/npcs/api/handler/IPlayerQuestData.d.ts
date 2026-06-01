
/**
 * Tracks a player's quest progress, including active, finished, and tracked quests.
 */
export interface IPlayerQuestData extends IObject {
	/**
	 * @return the quest currently being tracked by the player, or null if none.
	 */
	getTrackedQuest(): IQuest;

	/**
	 * Starts the quest with the given ID for the player.
	 * 
	 * @param id the quest ID.
	 */
	startQuest(id: number): void;

	/**
	 * Marks the quest with the given ID as finished.
	 * 
	 * @param id the quest ID.
	 */
	finishQuest(id: number): void;

	/**
	 * Removes the quest from the player's active quest list.
	 * 
	 * @param id the quest ID.
	 */
	stopQuest(id: number): void;

	/**
	 * Removes the quest from both active and finished lists.
	 * 
	 * @param id the quest ID.
	 */
	removeQuest(id: number): void;

	/**
	 * @param id the quest ID.
	 * @return true if the player has finished the quest.
	 */
	hasFinishedQuest(id: number): boolean;

	/**
	 * @param id the quest ID.
	 * @return true if the player has the quest active.
	 */
	hasActiveQuest(id: number): boolean;

	/**
	 * @return all active quests for the player.
	 */
	getActiveQuests(): IQuest[];

	/**
	 * @return all finished quests for the player.
	 */
	getFinishedQuests(): IQuest[];

	/**
	 * Returns the timestamp when the quest was last completed.
	 * 
	 * @param id the quest ID.
	 * @return the completion time, or 0 if never completed.
	 */
	getLastCompletedTime(id: number): number;

	/**
	 * Sets the last completed time for the quest.
	 * 
	 * @param id the quest ID.
	 * @param time the completion timestamp.
	 */
	setLastCompletedTime(id: number, time: number): void;
}

