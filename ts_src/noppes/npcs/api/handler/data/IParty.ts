import { IPlayer } from "./../../entity/IPlayer";
import { IObject } from "./../../../../../IObject";
import { IQuest } from "./IQuest";

import { List } from "./../../../../../missingTypes";

export interface IParty extends IObject {
	/**
	 * @return UUID of Party
	 */
	getPartyUUIDString(): string;

	/**
	 * @return if party is locked (quest is set)
	 */
	getIsLocked(): boolean;

	/**
	 * Set a quest to the party (this does not validate use validateQuest())
	 * 
	 * @param quest Quest Object
	 */
	setQuest(quest: IQuest): void;

	/**
	 * Get the Quest for the Party, can be null
	 * 
	 * @return quest
	 */
	getQuest(): IQuest;

	/**
	 * Get the Quest ID for Party | -1 if no quest
	 * 
	 * @return quest id
	 */
	getCurrentQuestID(): number;

	/**
	 * Get the Quest Name for Party | BLANK if no quest
	 * 
	 * @return quest name
	 */
	getCurrentQuestName(): string;

	/**
	 * @param playerName Username of Player (Case Sensitive)
	 * @return successful or not
	 */
	addPlayer(playerName: string): boolean;

	/**
	 * @param playerName Username of Player (Case Sensitive)
	 * @return successful or not
	 */
	removePlayer(playerName: string): boolean;

	/**
	 * @param player IPlayer
	 * @return successful or not
	 */
	addPlayer(player: IPlayer): boolean;

	/**
	 * @param player IPlayer
	 * @return successful or not
	 */
	removePlayer(player: IPlayer): boolean;

	/**
	 * Check if Player is in Party with IPlayer
	 * 
	 * @return true/false if player is in party
	 */
	hasPlayer(player: IPlayer): boolean;

	/**
	 * Check if Player is in Party with Player Name
	 * 
	 * @return true/false if player is in party
	 */
	hasPlayer(playerName: string): boolean;

	/**
	 * @return Party Leader's Name
	 */
	getPartyLeaderName(): string;

	/**
	 * @return Collection of all Player Names in Party
	 */
	getPlayerNamesList(): List;

	/**
	 * @param questID ID for the Quest to Verify
	 * @param sendLeaderMessages IF true will send ERROR message to Party Leader on why the quest could not be set
	 * @return true/false if the party CAN have the quest set
	 */
	validateQuest(questID: number, sendLeaderMessages: boolean): boolean;

	/**
	 * Toggles Friendly Fire
	 */
	toggleFriendlyFire(): void;

	/**
	 * @return Current Friendly Fire settings in Party
	 */
	friendlyFire(): boolean;

	/**
	 * Sends information for Quest Objectives to all Party Participants [Lower Data]
	 */
	updateQuestObjectiveData(): void;

	/**
	 * Sends all PARTY INFORMATION to all Party Participants [Higher Data]
	 */
	updatePartyData(): void;

}

