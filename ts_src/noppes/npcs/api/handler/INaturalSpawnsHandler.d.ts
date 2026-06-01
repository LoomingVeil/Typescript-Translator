
/**
 * Handles natural spawn configurations for custom NPCs.
 */
export interface INaturalSpawnsHandler extends IObject {
	/**
	 * Saves all spawn configurations to disk.
	 */
	save(): void;

	/**
	 * Returns all registered natural spawn configurations.
	 * 
	 * @return an array of spawn configurations.
	 */
	getSpawns(): INaturalSpawn[];

	/**
	 * Returns spawn configurations that include the specified biome.
	 * 
	 * @param biome the biome name.
	 * @return an array of matching spawn configurations.
	 */
	getSpawns(biome: string): INaturalSpawn[];

	/**
	 * Registers a new natural spawn configuration.
	 * 
	 * @param spawn the spawn to add.
	 */
	addSpawn(spawn: INaturalSpawn): void;

	/**
	 * Removes a natural spawn configuration.
	 * 
	 * @param spawn the spawn to remove.
	 */
	removeSpawn(spawn: INaturalSpawn): void;

	/**
	 * Creates a new empty natural spawn configuration.
	 * 
	 * @return the created spawn.
	 */
	createSpawn(): INaturalSpawn;
}

