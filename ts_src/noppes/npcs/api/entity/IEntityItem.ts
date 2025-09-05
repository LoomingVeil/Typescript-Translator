import { IEntity } from "./IEntity";
import { IItemStack } from "./../item/IItemStack";


/**
 * Represents an item entity in the world.
 * Provides methods to manage pickup delay, age, ownership, and the contained item.
 * 
 * @param <T> The underlying Minecraft EntityItem type.
 */
export interface IEntityItem extends IEntity {
	/**
	 * Returns the owner name of the item.
	 * Only the owner can pick the item up (unless the age is very low).
	 * 
	 * @return the owner's name.
	 */
	getOwner(): string;

	/**
	 * Sets the owner name of the item.
	 * 
	 * @param name the owner's name.
	 */
	setOwner(name: string): void;

	/**
	 * Returns the thrower (entity that threw the item).
	 * 
	 * @return the thrower's name.
	 */
	getThrower(): string;

	/**
	 * Sets the thrower (entity that threw the item).
	 * 
	 * @param name the thrower's name.
	 */
	setThrower(name: string): void;

	/**
	 * @return Ticks remaining before the item can be picked up.
	 * (32767 indicates an infinite delay.)
	 */
	getPickupDelay(): number;

	/**
	 * Sets the delay before the item can be picked up.
	 * 
	 * @param delay the pickup delay in ticks (32767 for infinite delay).
	 */
	setPickupDelay(delay: number): void;

	/**
	 * @return The age of the item in ticks.
	 */
	getAge(): number;

	/**
	 * Sets the age of the item.
	 * 
	 * @param age the new age (−32767 indicates infinite age).
	 */
	setAge(age: number): void;

	/**
	 * @return The lifespan threshold; when the age reaches this, the item despawns.
	 */
	getLifeSpawn(): number;

	/**
	 * Sets the age threshold at which the item will despawn.
	 * 
	 * @param age the lifespan in ticks.
	 */
	setLifeSpawn(age: number): void;

	/**
	 * @return The item contained in this entity.
	 */
	getItem(): IItemStack;

	/**
	 * Sets the item contained in this entity.
	 * 
	 * @param item the item to set.
	 */
	setItem(item: IItemStack): void;

}

