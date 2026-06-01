
/**
 * Events fired during quest lifecycle: starting, completing, and turning in.
 */
export interface IQuestEvent extends IPlayerEvent {
	/**
	 * @return the quest associated with this event.
	 */
	getQuest(): IQuest;
}

/**
 * Fired when a quest's objectives are all completed.
 * 
 * @hookName questCompleted
 */
export interface QuestCompletedEvent extends IQuestEvent {}

/**
 * Fired when a quest is started/accepted. Cancelable.
 * 
 * @hookName questStart
 */
export interface QuestStartEvent extends IQuestEvent {
	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a completed quest is turned in. Cancelable.
 * 
 * @hookName questTurnIn
 */
export interface QuestTurnedInEvent extends IQuestEvent {
	/**
	 * @param expReward the experience reward to give.
	 */
	setExpReward(expReward: number): void;

	/**
	 * @param itemRewards the item rewards to give.
	 */
	setItemRewards(itemRewards: IItemStack[]): void;

	/**
	 * @return the experience reward.
	 */
	getExpReward(): number;

	/**
	 * @return the item rewards.
	 */
	getItemRewards(): IItemStack[];

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

