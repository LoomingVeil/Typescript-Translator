
/**
 * Represents a fish hook entity with additional methods.
 * 
 * @param <T> The underlying Minecraft EntityFishHook type.
 */
export interface IFishHook extends IEntity {
	/**
	 * Returns the player who cast this fish hook.
	 * 
	 * @return the casting player, or null if none.
	 */
	getCaster(): IPlayer;

	/**
	 * Removes this fish hook entity from the world.
	 */
	kill(): void;
}

