
/**
 * Quest objective interface for item-collection quests.
 * Configures whether items are consumed on turn-in and matching criteria.
 */
export interface IQuestItem extends IQuestInterface {
	/**
	 * @param leaveItems true to leave items in the player's inventory on turn-in.
	 */
	setLeaveItems(leaveItems: boolean): void;

	/**
	 * @return true if items remain in the player's inventory on turn-in.
	 */
	getLeaveItems(): boolean;

	/**
	 * @param ignoreDamage true to ignore item damage when matching.
	 */
	setIgnoreDamage(ignoreDamage: boolean): void;

	/**
	 * @return true if item damage is ignored when matching.
	 */
	getIgnoreDamage(): boolean;

	/**
	 * @param ignoreNbt true to ignore NBT data when matching.
	 */
	setIgnoreNbt(ignoreNbt: boolean): void;

	/**
	 * @return true if NBT data is ignored when matching.
	 */
	getIgnoreNbt(): boolean;
}

