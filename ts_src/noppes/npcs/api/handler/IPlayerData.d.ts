
/**
 * Provides access to all persistent data categories for a player,
 * including companion, dialog, quest, faction, transport, mail, trade, and ability data.
 */
export interface IPlayerData extends IObject {
	/**
	 * Sets the player's companion NPC.
	 * 
	 * @param npc the companion NPC, or null to clear.
	 */
	setCompanion(npc: ICustomNpc): void;

	/**
	 * Returns the player's companion NPC.
	 * 
	 * @return the companion NPC, or null if none.
	 */
	getCompanion(): ICustomNpc;

	/**
	 * @return true if the player currently has a companion NPC.
	 */
	hasCompanion(): boolean;

	/**
	 * @return the entity ID of the companion, or -1 if none.
	 */
	getCompanionID(): number;

	/**
	 * @return the player's dialog data.
	 */
	getDialogData(): IPlayerDialogData;

	/**
	 * @return the player's bank data.
	 */
	getBankData(): IPlayerBankData;

	/**
	 * @return the player's quest data.
	 */
	getQuestData(): IPlayerQuestData;

	/**
	 * @return the player's transport data.
	 */
	getTransportData(): IPlayerTransportData;

	/**
	 * @return the player's faction data.
	 */
	getFactionData(): IPlayerFactionData;

	/**
	 * @return the player's item giver data.
	 */
	getItemGiverData(): IPlayerItemGiverData;

	/**
	 * @return the player's mail data.
	 */
	getMailData(): IPlayerMailData;

	/**
	 * @return the player's trade data.
	 */
	getTradeData(): IPlayerTradeData;

	/**
	 * @return the player's ability data.
	 */
	getAbilityData(): IPlayerAbilityData;

	/**
	 * Saves all player data to disk.
	 */
	save(): void;
}

