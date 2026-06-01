
/**
 * Configures a natural spawn entry for custom NPCs, including entity templates,
 * biome restrictions, spawn conditions, and cooldowns.
 */
export interface INaturalSpawn extends IObject {
	DESPAWN_FORCE_NATURAL: number;
	DESPAWN_PRESERVE_TEMPLATE: number;
	DESPAWN_FORCE_PERSISTENT: number;
	/**
	 * @param name the display name for this spawn entry.
	 */
	setName(name: string): void;

	/**
	 * @return the display name of this spawn entry.
	 */
	getName(): string;

	/**
	 * Sets the entity template for a specific spawn slot.
	 * 
	 * @param entity the entity template.
	 * @param slot the slot index.
	 */
	setEntity(entity: IEntity, slot: number): void;

	/**
	 * Returns the entity for a specific spawn slot.
	 * 
	 * @param world the world context for entity creation.
	 * @param slot the slot index.
	 * @return the entity, or null if the slot is empty.
	 */
	getEntity(world: IWorld, slot: number): IEntity;

	/**
	 * @return the populated slot indices.
	 */
	getSlots(): number[];

	/**
	 * @param weight the spawn weight (higher = more frequent).
	 */
	setWeight(weight: number): void;

	/**
	 * @return the spawn weight.
	 */
	getWeight(): number;

	/**
	 * @param height the minimum Y-level for spawning.
	 */
	setMinHeight(height: number): void;

	/**
	 * @return the minimum Y-level.
	 */
	getMinHeight(): number;

	/**
	 * @param height the maximum Y-level for spawning.
	 */
	setMaxHeight(height: number): void;

	/**
	 * @return the maximum Y-level.
	 */
	getMaxHeight(): number;

	/**
	 * @param spawns whether entities can spawn using animal spawn rules.
	 */
	spawnsLikeAnimal(spawns: boolean): void;

	/**
	 * @return true if animal spawn rules apply.
	 */
	spawnsLikeAnimal(): boolean;

	/**
	 * @param spawns whether entities can spawn using monster spawn rules.
	 */
	spawnsLikeMonster(spawns: boolean): void;

	/**
	 * @return true if monster spawn rules apply.
	 */
	spawnsLikeMonster(): boolean;

	/**
	 * @param spawns whether entities can spawn in liquid.
	 */
	spawnsInLiquid(spawns: boolean): void;

	/**
	 * @return true if spawning in liquid is allowed.
	 */
	spawnsInLiquid(): boolean;

	/**
	 * @param spawns whether entities can spawn in the air.
	 */
	spawnsInAir(spawns: boolean): void;

	/**
	 * @return true if spawning in air is allowed.
	 */
	spawnsInAir(): boolean;

	/**
	 * @return the biome names this spawn is restricted to.
	 */
	getBiomes(): string[];

	/**
	 * @param biomes the biome names to restrict spawning to.
	 */
	setBiomes(biomes: string[]): void;

	/**
	 * @param maxAlive the maximum number of alive entities from this spawn at once.
	 */
	setMaxAlive(maxAlive: number): void;

	/**
	 * @return the maximum alive entity count.
	 */
	getMaxAlive(): number;

	/**
	 * @param ticks the cooldown in ticks between spawn attempts.
	 */
	setCooldownTicks(ticks: number): void;

	/**
	 * @return the cooldown in ticks.
	 */
	getCooldownTicks(): number;

	/**
	 * @param attempts the number of spawn attempts per cycle.
	 */
	setAttemptsPerCycle(attempts: number): void;

	/**
	 * @return the number of spawn attempts per cycle.
	 */
	getAttemptsPerCycle(): number;

	/**
	 * @param distance the minimum distance from a player for spawning.
	 */
	setPlayerMinDistance(distance: number): void;

	/**
	 * @return the minimum distance from a player.
	 */
	getPlayerMinDistance(): number;

	/**
	 * Sets the despawn mode.
	 * 
	 * @param mode 0: DESPAWN_FORCE_NATURAL, 1: DESPAWN_PRESERVE_TEMPLATE, 2: DESPAWN_FORCE_PERSISTENT.
	 */
	setDespawnMode(mode: number): void;

	/**
	 * @return the despawn mode (0: force natural, 1: preserve template, 2: force persistent).
	 */
	getDespawnMode(): number;
}

