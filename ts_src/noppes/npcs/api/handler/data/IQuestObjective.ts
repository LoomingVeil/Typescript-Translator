import { IObject } from "./../../../../../IObject";


export interface IQuestObjective extends IObject {
	/**
	 * If this function is used on a player within a party and the
	 * quest objective type is set to ALL. The return progress will be
	 * set to 0 for handling multiple players.
	 * 
	 * @return progress of objective
	 */
	getProgress(): number;

	/**
	 * If this function is used on a player within a party and the
	 * quest objective type is set to ALL. It will set everyone to have
	 * the same progress within the party.
	 * 
	 * @param progress Progress Amount
	 */
	setProgress(progress: number): void;

	/**
	 * This function is typically used for setting individual
	 * progress for a player in a party for a Quest Objective
	 * that is set for ALL Players. This function will work
	 * like the normal setProgress if the player does not
	 * have a party
	 * 
	 * @param playerName Name of Player
	 * @param progress Progress Amount
	 */
	setPlayerProgress(playerName: string, progress: number): void;

	getMaxProgress(): number;

	isCompleted(): boolean;

	getText(): string;

	getAdditionalText(): string;

}

