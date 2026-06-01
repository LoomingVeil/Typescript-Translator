
/**
 * A runtime instance of an active telegraph in the world.
 * Represents a spawned telegraph with position, timing, and control methods.
 * <p>
 * Instances are created when you call spawn() on an ITelegraph:
 * <pre>
 * var telegraph = API.getTelegraphs().createCircle(5.0);
 * var instance = telegraph.spawn(world, x, y, z);
 * 
 * // Later...
 * instance.remove(); // Remove the telegraph early
 * </pre>
 */
export interface ITelegraphInstance extends IObject {
	/**
	 * Get the unique instance ID.
	 * 
	 * @return the unique instance identifier
	 */
	getInstanceId(): string;

	/**
	 * Get the current X position.
	 * 
	 * @return the current X coordinate
	 */
	getX(): number;

	/**
	 * Get the current Y position.
	 * 
	 * @return the current Y coordinate
	 */
	getY(): number;

	/**
	 * Get the current Z position.
	 * 
	 * @return the current Z coordinate
	 */
	getZ(): number;

	/**
	 * Get the rotation yaw.
	 * 
	 * @return the rotation yaw in degrees
	 */
	getYaw(): number;

	/**
	 * Set the position.
	 * Note: Only works for static telegraphs (not following an entity).
	 * 
	 * @param x X coordinate
	 * @param y Y coordinate
	 * @param z Z coordinate
	 */
	setPosition(x: number, y: number, z: number): void;

	/**
	 * Make this telegraph follow an entity.
	 * The telegraph position will update each tick to match the entity.
	 * 
	 * @param entity the entity to follow
	 */
	followEntity(entity: IEntity): void;

	/**
	 * Stop following any entity and fix the current position.
	 */
	stopFollowing(): void;

	/**
	 * Check if this telegraph is following an entity.
	 * 
	 * @return true if currently following an entity
	 */
	isFollowing(): boolean;

	/**
	 * Get the remaining ticks before the telegraph expires.
	 * 
	 * @return remaining ticks before expiration
	 */
	getRemainingTicks(): number;

	/**
	 * Get the total duration ticks.
	 * 
	 * @return the total duration in ticks
	 */
	getTotalTicks(): number;

	/**
	 * Get the progress from 0.0 (just started) to 1.0 (finished).
	 * 
	 * @return progress from 0.0 (just started) to 1.0 (finished)
	 */
	getProgress(): number;

	/**
	 * Check if the telegraph is in the warning phase.
	 * 
	 * @return true if in the warning phase
	 */
	isWarning(): boolean;

	/**
	 * Remove this telegraph immediately.
	 * Sends a removal packet to all clients tracking it.
	 */
	remove(): void;

	/**
	 * Lock the telegraph at its current position.
	 * Equivalent to calling stopFollowing().
	 */
	lockPosition(): void;
}

