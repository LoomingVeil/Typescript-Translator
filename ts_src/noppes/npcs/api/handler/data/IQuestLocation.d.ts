
/**
 * Quest objective interface for location-based quests.
 * Players must visit up to three named locations to complete the quest.
 */
export interface IQuestLocation extends IQuestInterface {
	/**
	 * @param loc1 the name of the first location objective.
	 */
	setLocation1(loc1: string): void;

	/**
	 * @return the name of the first location objective.
	 */
	getLocation1(): string;

	/**
	 * @param loc2 the name of the second location objective.
	 */
	setLocation2(loc2: string): void;

	/**
	 * @return the name of the second location objective.
	 */
	getLocation2(): string;

	/**
	 * @param loc3 the name of the third location objective.
	 */
	setLocation3(loc3: string): void;

	/**
	 * @return the name of the third location objective.
	 */
	getLocation3(): string;
}

