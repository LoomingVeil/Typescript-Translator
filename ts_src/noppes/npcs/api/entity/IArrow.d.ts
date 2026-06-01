
/**
 * Represents a arrow entity with additional methods.
 * 
 * @param <T> The underlying Minecraft EntityArrow type.
 */
export interface IArrow extends IEntity {
	/**
	 * Gets the entity that shot this arrow.
	 * 
	 * @return the shooter entity, or null if none
	 */
	getShooter(): IEntity;

	/**
	 * Gets the base damage of this arrow.
	 * 
	 * @return the damage value
	 */
	getDamage(): number;

	/**
	 * Removes this arrow from the world.
	 */
	kill(): void;
}

