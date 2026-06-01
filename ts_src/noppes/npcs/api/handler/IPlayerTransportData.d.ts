
/**
 * Tracks which transport locations a player has unlocked.
 */
export interface IPlayerTransportData extends IObject {
	/**
	 * @param id the transport location ID.
	 * @return true if the player has unlocked this transport.
	 */
	hasTransport(id: number): boolean;

	/**
	 * Unlocks a transport location by ID.
	 * 
	 * @param id the transport location ID.
	 */
	addTransport(id: number): void;

	/**
	 * Unlocks the given transport location.
	 * 
	 * @param location the transport location.
	 */
	addTransport(location: ITransportLocation): void;

	/**
	 * Returns the transport location with the given ID.
	 * 
	 * @param id the transport location ID.
	 * @return the transport location, or null if not found.
	 */
	getTransport(id: number): ITransportLocation;

	/**
	 * Returns all unlocked transport locations for the player.
	 * 
	 * @return an array of transport locations.
	 */
	getTransports(): ITransportLocation[];

	/**
	 * Removes an unlocked transport location by ID.
	 * 
	 * @param id the transport location ID.
	 */
	removeTransport(id: number): void;
}

