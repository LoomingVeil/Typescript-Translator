
/**
 * Handles retrieval of quests and quest categories.
 */
export interface IQuestHandler extends IObject {
	/**
	 * Returns all quest categories.
	 * 
	 * @return a list of quest categories.
	 */
	categories(): List;

	/**
	 * Returns the quest with the given ID.
	 * 
	 * @param id the quest ID.
	 * @return the quest, or null if not found.
	 */
	get(id: number): IQuest;
}

