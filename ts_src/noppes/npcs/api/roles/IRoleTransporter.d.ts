
/**
 * Represents the transporter role for an NPC, allowing players to teleport
 * between unlocked transport locations.
 */
export interface IRoleTransporter extends IRole {
	/**
	 * @return the display name of this transporter NPC.
	 */
	getName(): string;

	/**
	 * @return the transport location ID assigned to this NPC.
	 */
	getTransportId(): number;

	/**
	 * Unlocks the given transport location for the player.
	 * 
	 * @param player the player.
	 * @param location the transport location to unlock.
	 */
	unlock(player: IPlayer, location: ITransportLocation): void;

	/**
	 * @return the transport location assigned to this NPC, or null if none.
	 */
	getTransport(): ITransportLocation;

	/**
	 * @return true if this NPC has a transport location assigned.
	 */
	hasTransport(): boolean;

	/**
	 * Assigns a transport location to this NPC.
	 * 
	 * @param location the transport location.
	 */
	setTransport(location: ITransportLocation): void;
}

