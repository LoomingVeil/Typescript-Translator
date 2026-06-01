
/**
 * Quest objective interface for kill-type quests.
 * Configures the target type for kill counting.
 */
export interface IQuestKill extends IQuestInterface {
	/**
	 * Sets the target matching type.
	 * 
	 * @param type 0: by entity name, 1: by faction.
	 */
	setTargetType(type: number): void;

	/**
	 * @return the target matching type (0: entity name, 1: faction).
	 */
	getTargetType(): number;
}

