import { IObject } from "./../../../../../IObject";


export interface IPartyOptions extends IObject {
	isAllowParty(): boolean;

	setAllowParty(allowParty: boolean): void;

	isOnlyParty(): boolean;

	setOnlyParty(onlyParty: boolean): void;

	/**
	 * @return 0:Leader, 1:All, 2:Valid
	 */
	getPartyRequirements(): number;

	/**
	 * @param partyRequirements 0:Leader, 1:All, 2:Valid
	 */
	setPartyRequirements(partyRequirements: number): void;

	/**
	 * @return 0:Leader, 1:All, 2:Enrolled, 3:Valid
	 */
	getRewardControl(): number;

	/**
	 * @param rewardControl 0:Leader, 1:All, 2:Enrolled, 3:Valid
	 */
	setRewardControl(rewardControl: number): void;

	/**
	 * @return 0:Leader, 1:All, 2:Enrolled, 3:Valid
	 */
	getCompleteFor(): number;

	/**
	 * @param completeFor 0:Leader, 1:All, 2:Enrolled, 3:Valid
	 */
	setCompleteFor(completeFor: number): void;

	/**
	 * @return 0:Leader, 1:All, 2:Enrolled, 3:Valid
	 */
	getExecuteCommandFor(): number;

	/**
	 * @param commandFor 0:Leader, 1:All, 2:Enrolled, 3:Valid
	 */
	setExecuteCommandFor(commandFor: number): void;

	/**
	 * @return 0:Shard, 1:All, 2:Leader
	 */
	getObjectiveRequirement(): number;

	/**
	 * @param requirement 0:Shard, 1:All, 2:Leader
	 */
	setObjectiveRequirement(requirement: number): void;

	getMinPartySize(): number;

	setMinPartySize(newSize: number): void;

	getMaxPartySize(): number;

	setMaxPartySize(newSize: number): void;

}

