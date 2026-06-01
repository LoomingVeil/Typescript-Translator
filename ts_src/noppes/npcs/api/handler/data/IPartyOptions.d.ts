
/**
 * Configures party-related options for quests, controlling membership requirements,
 * reward distribution, completion rules, and party size limits.
 */
export interface IPartyOptions extends IObject {
	/**
	 * @return true if party participation is allowed.
	 */
	isAllowParty(): boolean;

	/**
	 * @param allowParty true to allow party participation.
	 */
	setAllowParty(allowParty: boolean): void;

	/**
	 * @return true if only party members can participate.
	 */
	isOnlyParty(): boolean;

	/**
	 * @param onlyParty true to require party membership.
	 */
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

	/**
	 * @return the minimum party size required.
	 */
	getMinPartySize(): number;

	/**
	 * @param newSize the minimum party size.
	 */
	setMinPartySize(newSize: number): void;

	/**
	 * @return the maximum party size allowed.
	 */
	getMaxPartySize(): number;

	/**
	 * @param newSize the maximum party size.
	 */
	setMaxPartySize(newSize: number): void;
}

