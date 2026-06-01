
export interface IFaction extends IObject {
	/**
	 * @return The faction's unique ID
	 */
	getId(): number;

	/**
	 * @return The faction's display name
	 */
	getName(): string;

	/**
	 * Sets the faction's display name.
	 * 
	 * @param name The new name
	 */
	setName(name: string): void;

	/**
	 * Sets the default faction points assigned to new players.
	 * 
	 * @param var1 The default point value
	 */
	setDefaultPoints(var1: number): void;

	/**
	 * @return The default faction points assigned to new players
	 */
	getDefaultPoints(): number;

	/**
	 * Sets the point threshold at or above which a player is considered friendly.
	 * 
	 * @param p The friendly point threshold
	 */
	setFriendlyPoints(p: number): void;

	/**
	 * @return The point threshold at or above which a player is considered friendly
	 */
	getFriendlyPoints(): number;

	/**
	 * Sets the point threshold below which a player is considered an enemy.
	 * 
	 * @param p The neutral point threshold
	 */
	setNeutralPoints(p: number): void;

	/**
	 * @return The point threshold below which a player is considered an enemy
	 */
	getNeutralPoints(): number;

	/**
	 * Sets the faction's display color.
	 * 
	 * @param c The color as an RGB integer
	 */
	setColor(c: number): void;

	/**
	 * @return The faction's display color as an RGB integer
	 */
	getColor(): number;

	/**
	 * Returns the player's standing with this faction.
	 * 
	 * @param player The player to check
	 * @return 1 for friendly, 0 for neutral, -1 for enemy
	 */
	playerStatus(player: IPlayer): number;

	/**
	 * Checks whether this faction is hostile toward the given NPC's faction.
	 * 
	 * @param npc The NPC to check against
	 * @return True if this faction is aggressive toward the NPC
	 */
	isAggressiveToNpc(npc: ICustomNpc): boolean;

	/**
	 * @return Whether this faction is hidden from the player's faction list
	 */
	getIsHidden(): boolean;

	/**
	 * Sets whether this faction is hidden from the player's faction list.
	 * 
	 * @param hidden True to hide the faction
	 */
	setIsHidden(hidden: boolean): void;

	/**
	 * @return Whether NPCs in this faction are passive and will not attack
	 */
	isPassive(): boolean;

	/**
	 * Sets whether NPCs in this faction are passive.
	 * 
	 * @param passive True to make faction NPCs passive
	 */
	setIsPassive(passive: boolean): void;

	/**
	 * @return Whether NPCs in this faction can be attacked by hostile mobs
	 */
	attackedByMobs(): boolean;

	/**
	 * Sets whether NPCs in this faction can be attacked by hostile mobs.
	 * 
	 * @param attacked True to allow mobs to attack faction NPCs
	 */
	setAttackedByMobs(attacked: boolean): void;

	/**
	 * Checks whether the given faction is an enemy of this faction.
	 * 
	 * @param faction The faction to check
	 * @return True if the given faction is an enemy
	 */
	isEnemyFaction(faction: IFaction): boolean;

	/**
	 * @return An array of all factions that are enemies of this faction
	 */
	getEnemyFactions(): IFaction[];

	/**
	 * Adds a faction as an enemy of this faction.
	 * 
	 * @param faction The faction to add as an enemy
	 */
	addEnemyFaction(faction: IFaction): void;

	/**
	 * Removes a faction from this faction's enemy list.
	 * 
	 * @param faction The faction to remove
	 */
	removeEnemyFaction(faction: IFaction): void;

	/**
	 * Saves the faction data to the server.
	 */
	save(): void;
}

