
/**
 * Handles creation, deletion, and retrieval of factions.
 */
export interface IFactionHandler extends IObject {
	/**
	 * Returns all registered factions.
	 * 
	 * @return a list of factions.
	 */
	list(): List;

	/**
	 * Deletes the faction with the given ID.
	 * 
	 * @param id the faction ID.
	 * @return the deleted faction, or null if not found.
	 */
	delete(id: number): IFaction;

	/**
	 * Creates a new faction with the given name and default points.
	 * 
	 * @param name the faction name.
	 * @param defaultPoints the default standing points for new players.
	 * @return the created faction.
	 */
	create(name: string, defaultPoints: number): IFaction;

	/**
	 * Returns the faction with the given ID.
	 * 
	 * @param id the faction ID.
	 * @return the faction, or null if not found.
	 */
	get(id: number): IFaction;
}

