
/**
 * Events fired during party operations such as quest progress, invitations, kicks, and disbanding.
 */
export interface IPartyEvent extends IObject {
	/**
	 * @return the party involved in this event.
	 */
	getParty(): IParty;

	/**
	 * @return the quest associated with this party event.
	 */
	getQuest(): IQuest;
}

/**
 * Fired when a party quest is completed.
 * 
 * @hookName partyQuestCompleted
 */
export interface PartyQuestCompletedEvent extends IPartyEvent {}

/**
 * Fired when a quest is assigned to the party. Cancelable.
 * 
 * @hookName partyQuestSet
 */
export interface PartyQuestSetEvent extends IPartyEvent {
	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a party quest is turned in. Cancelable.
 * 
 * @hookName partyQuestTurnedIn
 */
export interface PartyQuestTurnedInEvent extends IPartyEvent {
	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a player is invited to the party. Cancelable.
 * 
 * @hookName partyInvite
 */
export interface PartyInviteEvent extends IPartyEvent {
	/**
	 * @return the invited player.
	 */
	getPlayer(): IPlayer;

	/**
	 * @return the invited player's name.
	 */
	getPlayerName(): string;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a player is kicked from the party. Cancelable.
 * 
 * @hookName partyKick
 */
export interface PartyKickEvent extends IPartyEvent {
	/**
	 * @return the kicked player.
	 */
	getPlayer(): IPlayer;

	/**
	 * @return the kicked player's name.
	 */
	getPlayerName(): string;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a player voluntarily leaves the party.
 * 
 * @hookName partyLeave
 */
export interface PartyLeaveEvent extends IPartyEvent {
	/**
	 * @return the leaving player.
	 */
	getPlayer(): IPlayer;

	/**
	 * @return the leaving player's name.
	 */
	getPlayerName(): string;
}

/**
 * Fired when the party is disbanded.
 * 
 * @hookName partyDisband
 */
export interface PartyDisbandEvent extends IPartyEvent {}

