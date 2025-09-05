import { IObject } from "./../../../../IObject";
import { IEntity } from "./IEntity";
import { IItemStack } from "./../item/IItemStack";


/**
 * Represents a projectile entity.
 * Provides methods to access and modify the projectile's item, gravity, accuracy, heading,
 * and to enable scripting events.
 */
export interface IProjectile extends IObject {
	/**
	 * Returns the item associated with the projectile (e.g. arrow, fireball).
	 * 
	 * @return the item as an IItemStack.
	 */
	getItem(): IItemStack;

	/**
	 * Sets the item for the projectile.
	 * 
	 * @param item the item to set.
	 */
	setItem(item: IItemStack): void;

	/**
	 * @return true if the projectile is affected by gravity; false if it flies straight.
	 */
	getHasGravity(): boolean;

	/**
	 * Sets whether the projectile is affected by gravity.
	 * 
	 * @param bo true to enable gravity; false otherwise.
	 */
	setHasGravity(bo: boolean): void;

	/**
	 * Returns the accuracy value for the projectile.
	 * 
	 * @return the accuracy.
	 */
	getAccuracy(): number;

	/**
	 * Sets the accuracy value for the projectile.
	 * 
	 * @param accuracy the accuracy value.
	 */
	setAccuracy(accuracy: number): void;

	/**
	 * Sets the heading (target destination) for the projectile based on the target entity.
	 * The projectile's position should already be set.
	 * 
	 * @param entity the target entity.
	 */
	setHeading(entity: IEntity): void;

	/**
	 * Sets the heading for the projectile to the specified coordinates.
	 * The projectile's position should already be set.
	 * 
	 * @param x the target x coordinate.
	 * @param y the target y coordinate.
	 * @param z the target z coordinate.
	 */
	setHeading(x: number, y: number, z: number): void;

	/**
	 * Sets the heading using yaw and pitch values.
	 * 
	 * @param yaw the yaw angle.
	 * @param pitch the pitch angle.
	 */
	setHeading(yaw: number, pitch: number): void;

	/**
	 * Returns the thrower (the entity that launched the projectile).
	 * 
	 * @return the thrower as an IEntity.
	 */
	getThrower(): IEntity;

	/**
	 * Enables projectile events for the current scripting container.
	 * Must be called during a script.
	 */
	enableEvents(): void;

}
}
