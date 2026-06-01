
/**
 * Represents a quest with objectives, rewards, repeatability, and party/profile options.
 */
export interface IQuest extends IObject {
	/**
	 * @return the unique quest ID.
	 */
	getId(): number;

	/**
	 * @return the quest display name.
	 */
	getName(): string;

	/**
	 * @param name the quest display name.
	 */
	setName(name: string): void;

	/**
	 * @return the quest type ordinal (0: Item, 1: Dialog, 2: Kill, 3: Location, 4: AreaKill, 5: Manual).
	 */
	getType(): number;

	/**
	 * @param type the quest type ordinal.
	 */
	setType(type: number): void;

	/**
	 * @return the quest log description text.
	 */
	getLogText(): string;

	/**
	 * @param text the quest log description text.
	 */
	setLogText(text: string): void;

	/**
	 * @return the text displayed on quest completion.
	 */
	getCompleteText(): string;

	/**
	 * @param text the completion text.
	 */
	setCompleteText(text: string): void;

	/**
	 * @return the next quest in the chain, or null if none.
	 */
	getNextQuest(): IQuest;

	/**
	 * @param quest the next quest in the chain, or null to clear.
	 */
	setNextQuest(quest: IQuest): void;

	/**
	 * Returns the quest objectives for the given player.
	 * 
	 * @param player the player whose objectives to retrieve.
	 * @return an array of quest objectives.
	 */
	getObjectives(player: IPlayer): IQuestObjective[];

	/**
	 * @return the category this quest belongs to.
	 */
	getCategory(): IQuestCategory;

	/**
	 * @return the reward container with items given on completion.
	 */
	getRewards(): IContainer;

	/**
	 * @return the NPC name associated with this quest.
	 */
	getNpcName(): string;

	/**
	 * @param name the NPC name.
	 */
	setNpcName(name: string): void;

	/**
	 * Saves this quest to disk.
	 */
	save(): void;

	/**
	 * @return true if this quest can be repeated.
	 */
	getIsRepeatable(): boolean;

	/**
	 * Returns the time remaining before the quest can be repeated.
	 * 
	 * @param player the player.
	 * @return milliseconds until repeatable, or 0 if ready.
	 */
	getTimeUntilRepeat(player: IPlayer): number;

	/**
	 * Sets the repeat type.
	 * 
	 * @param type 0: None, 1: Instant, 2: Daily, 3: Weekly, 4: Custom.
	 */
	setRepeatType(type: number): void;

	/**
	 * @return the repeat type ordinal.
	 */
	getRepeatType(): number;

	/**
	 * @return the quest interface (type-specific objective data).
	 */
	getQuestInterface(): IQuestInterface;

	/**
	 * @return the party options for this quest.
	 */
	getPartyOptions(): IPartyOptions;

	/**
	 * @return the profile options for this quest.
	 */
	getProfileOptions(): IProfileOptions;

	/**
	 * @return the custom cooldown in milliseconds for the Custom repeat type.
	 */
	getCustomCooldown(): number;

	/**
	 * @param newCooldown the custom cooldown in milliseconds.
	 */
	setCustomCooldown(newCooldown: number): void;
}

