
/**
 * Represents an active custom effect instance on a player.
 */
export interface IPlayerEffect extends IObject {
	/**
	 * Removes this effect from the player.
	 */
	kill(): void;

	/**
	 * @return the custom effect ID.
	 */
	getId(): number;

	/**
	 * @return the remaining duration in seconds (-100 for infinite).
	 */
	getDuration(): number;

	/**
	 * @param duration the remaining duration in seconds (-100 for infinite).
	 */
	setDuration(duration: number): void;

	/**
	 * @return the effect level/amplifier.
	 */
	getLevel(): number;

	/**
	 * @param level the effect level/amplifier.
	 */
	setLevel(level: number): void;

	/**
	 * @return the display name of the effect.
	 */
	getName(): string;

	/**
	 * Applies this effect's tick logic to the given player.
	 * 
	 * @param player the player to apply the effect to.
	 */
	performEffect(player: IPlayer): void;

	/**
	 * @return the effect source index (0: CNPC+, 1: DBC Addon).
	 */
	getIndex(): number;

	/**
	 * @param index the effect source index (0: CNPC+, 1: DBC Addon).
	 */
	setIndex(index: number): void;
}

