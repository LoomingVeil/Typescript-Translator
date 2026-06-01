
/**
 * Represents a throwable entity with additional methods.
 * 
 * @param <T> The underlying Minecraft EntityThrowable type.
 */
export interface IThrowable extends IEntity {
	/**
	 * Returns the entity that threw this throwable.
	 * 
	 * @return the thrower, or null if unknown.
	 */
	getThrower(): IEntityLivingBase;

	/**
	 * Removes this throwable entity from the world.
	 */
	kill(): void;
}

