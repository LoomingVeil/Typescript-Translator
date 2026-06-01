
/**
 * Represents a category that groups related quests together.
 */
export interface IQuestCategory extends IObject {
	/**
	 * @return all quests in this category.
	 */
	quests(): List;

	/**
	 * @return the category display name.
	 */
	getName(): string;

	/**
	 * Creates a new quest in this category.
	 * 
	 * @return the newly created quest.
	 */
	create(): IQuest;

	/**
	 * @return the unique category ID.
	 */
	getId(): number;
}

