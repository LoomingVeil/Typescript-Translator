import { IEntity } from "./IEntity";

import { Entity } from "./../../../../missingTypes";

/**
 * Represents a living entity (mob, NPC, etc.) that extends the base living functionality.
 * Provides additional methods for navigation, sound, custom name, leashing, and more.
 * 
 * @param <T> The underlying Minecraft EntityLiving type.
 */
export interface IEntityLiving extends IEntityLivingBase {
	/**
	 * Checks if the entity is currently navigating (pathfinding).
	 * 
	 * @return true if navigating; false otherwise.
	 */
	isNavigating(): boolean;

	/**
	 * Clears the current navigation path.
	 */
	clearNavigation(): void;

	/**
	 * Commands the entity to navigate toward the specified destination.
	 * 
	 * @param x Destination x coordinate.
	 * @param y Destination y coordinate.
	 * @param z Destination z coordinate.
	 * @param speed Movement speed (0.7 is default).
	 */
	navigateTo(x: number, y: number, z: number, speed: number): void;

	/**
	 * Returns the underlying Minecraft entity.
	 * 
	 * @return the Minecraft entity.
	 */
	getMCEntity(): Entity;

	/**
	 * Plays the entity's living sound.
	 */
	playLivingSound(): void;

	/**
	 * Spawns explosion particles for this entity.
	 */
	spawnExplosionParticle(): void;

	/**
	 * Sets the forward movement speed for the entity.
	 * 
	 * @param speed the forward speed.
	 */
	setMoveForward(speed: number): void;

	/**
	 * Rotates the entity to face the given entity.
	 * 
	 * @param entity the target entity.
	 * @param pitch the pitch angle.
	 * @param yaw the yaw angle.
	 */
	faceEntity(entity: IEntity, pitch: number, yaw: number): void;

	/**
	 * @return Whether the entity can pick up loot.
	 */
	canPickUpLoot(): boolean;

	/**
	 * Sets whether the entity can pick up loot.
	 * 
	 * @param pickUp true to allow picking up loot.
	 */
	setCanPickUpLoot(pickUp: boolean): void;

	/**
	 * @return Whether the entity is persistent (won't despawn).
	 */
	isPersistent(): boolean;

	/**
	 * Enables persistence so that the entity does not despawn.
	 */
	enablePersistence(): void;

	/**
	 * Sets a custom name tag for the entity.
	 * 
	 * @param text the custom name.
	 */
	setCustomNameTag(text: string): void;

	/**
	 * Returns the entity's custom name tag.
	 * 
	 * @return the custom name.
	 */
	getCustomNameTag(): string;

	/**
	 * @return Whether the entity has a custom name tag.
	 */
	hasCustomNameTag(): boolean;

	/**
	 * Sets whether the entity's name tag is always rendered.
	 * 
	 * @param alwaysRender true to always render the name tag.
	 */
	setAlwaysRenderNameTag(alwaysRender: boolean): void;

	/**
	 * @return Whether the name tag is always rendered.
	 */
	getAlwaysRenderNameTag(): boolean;

	/**
	 * Clears the entity's leash.
	 * 
	 * @param sendPacket whether to send a packet update.
	 * @param dropLeash whether to drop the leash item.
	 */
	clearLeashed(sendPacket: boolean, dropLeash: boolean): void;

	/**
	 * @return Whether the entity allows leashing.
	 */
	allowLeashing(): boolean;

	/**
	 * @return Whether the entity is currently leashed.
	 */
	getLeashed(): boolean;

	/**
	 * @return The entity to which this entity is leashed.
	 */
	getLeashedTo(): IEntity;

	/**
	 * Leashes this entity to the specified entity.
	 * 
	 * @param entity the entity to leash to.
	 * @param sendPacket whether to send a packet update.
	 */
	setLeashedTo(entity: IEntity, sendPacket: boolean): void;

	/**
	 * @return Whether the entity can be steered.
	 */
	canBeSteered(): boolean;

}
}
