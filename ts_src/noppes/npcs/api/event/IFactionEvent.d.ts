
/**
 * Events fired when a player's faction standing changes.
 */
export interface IFactionEvent extends IPlayerEvent {
	/**
	 * @return the faction involved in this event.
	 */
	getFaction(): IFaction;
}

/**
 * Fired when a player's faction points change. Cancelable.
 * 
 * @hookName factionPoints
 */
export interface FactionPoints extends IFactionEvent {
	/**
	 * @return true if the points decreased, false if increased.
	 */
	decreased(): boolean;

	/**
	 * @return the amount of points changed.
	 */
	getPoints(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

