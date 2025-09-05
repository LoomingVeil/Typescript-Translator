import { IObject } from "./../../../../IObject";
import { IWorld } from "./../IWorld";
import { IPos } from "./../IPos";
import { IParticle } from "./../IParticle";
import { INbt } from "./../INbt";
import { IItemStack } from "./../item/IItemStack";

import { Entity } from "./../../../../missingTypes";

/**
 * Represents a generic entity in the world.
 * Provides methods to access or modify the entity's position, motion, temporary and persistent data,
 * and to perform various actions (such as spawning particles, dropping items, or changing dimensions).
 * 
 * @param <T> The underlying Minecraft entity type.
 */
export interface IEntity extends IObject {
	/**
	 * Spawns the given particle effect associated with this entity.
	 * 
	 * @param entityParticle The particle effect to spawn.
	 */
	spawnParticle(entityParticle: IParticle): void;

	/**
	 * Returns the unique entity ID.
	 * 
	 * @return the entity ID.
	 */
	getEntityId(): number;

	/**
	 * Returns the unique UUID string of the entity.
	 * 
	 * @return the unique ID.
	 */
	getUniqueID(): string;

	/**
	 * Returns the vertical offset for rendering.
	 * 
	 * @return the Y offset.
	 */
	getYOffset(): number;

	/**
	 * @return The entity's width.
	 */
	getWidth(): number;

	/**
	 * @return The entity's height.
	 */
	getHeight(): number;

	/**
	 * @return The entity's x position.
	 */
	getX(): number;

	/**
	 * Sets the entity's x position.
	 * 
	 * @param x the new x position.
	 */
	setX(x: number): void;

	/**
	 * @return The entity's y position.
	 */
	getY(): number;

	/**
	 * Sets the entity's y position.
	 * 
	 * @param y the new y position.
	 */
	setY(y: number): void;

	/**
	 * @return The entity's z position.
	 */
	getZ(): number;

	/**
	 * Sets the entity's z position.
	 * 
	 * @param z the new z position.
	 */
	setZ(z: number): void;

	/**
	 * @return The entity's x motion.
	 */
	getMotionX(): number;

	/**
	 * Sets the entity's x motion.
	 * 
	 * @param x the new x motion.
	 */
	setMotionX(x: number): void;

	/**
	 * @return The entity's y motion.
	 */
	getMotionY(): number;

	/**
	 * Sets the entity's y motion.
	 * 
	 * @param y the new y motion.
	 */
	setMotionY(y: number): void;

	/**
	 * @return The entity's z motion.
	 */
	getMotionZ(): number;

	/**
	 * Sets the entity's z motion.
	 * 
	 * @param z the new z motion.
	 */
	setMotionZ(z: number): void;

	/**
	 * Convenience method to set the entity's motion in all three axes.
	 * 
	 * @param x the x motion.
	 * @param y the y motion.
	 * @param z the z motion.
	 */
	setMotion(x: number, y: number, z: number): void;

	/**
	 * Sets the entity's motion based on the given position.
	 * 
	 * @param pos the position containing motion components.
	 */
	setMotion(pos: IPos): void;

	/**
	 * Returns the entity's current motion as an IPos object.
	 * 
	 * @return the motion vector.
	 */
	getMotion(): IPos;

	/**
	 * @return Whether the entity is airborne.
	 */
	isAirborne(): boolean;

	/**
	 * @return The block (integer) x position.
	 */
	getBlockX(): number;

	/**
	 * @return The block (integer) y position.
	 */
	getBlockY(): number;

	/**
	 * @return The block (integer) z position.
	 */
	getBlockZ(): number;

	/**
	 * Sets the entity's position to the specified coordinates.
	 * 
	 * @param x the x coordinate.
	 * @param y the y coordinate.
	 * @param z the z coordinate.
	 */
	setPosition(x: number, y: number, z: number): void;

	/**
	 * Sets the entity's position using an IPos object.
	 * 
	 * @param pos the position object.
	 */
	setPosition(pos: IPos): void;

	/**
	 * Returns the entity's current position as an IPos object.
	 * 
	 * @return the position.
	 */
	getPosition(): IPos;

	/**
	 * @return The dimension ID the entity is in.
	 */
	getDimension(): number;

	/**
	 * Moves the entity to the specified dimension.
	 * 
	 * @param dimensionId the dimension ID.
	 */
	setDimension(dimensionId: number): void;

	/**
	 * Returns an array of entities within the specified range.
	 * 
	 * @param range the search range.
	 * @return an array of surrounding entities.
	 */
	getSurroundingEntities(range: number): IEntity[];

	/**
	 * Returns an array of entities of a specified type within the given range.
	 * 
	 * @param range the search range.
	 * @param type the EntityType to find.
	 * @return an array of surrounding entities.
	 */
	getSurroundingEntities(range: number, type: number): IEntity[];

	/**
	 * @return Whether the entity is alive.
	 */
	isAlive(): boolean;

	/**
	 * Returns temporary data stored under the given key.
	 * 
	 * @param key the key.
	 * @return the temporary data.
	 */
	getTempData(key: string): any;

	/**
	 * Stores temporary data that is cleared when the entity is unloaded.
	 * 
	 * @param key the key.
	 * @param value the value.
	 */
	setTempData(key: string, value: any): void;

	/**
	 * Checks if temporary data for the given key exists.
	 * 
	 * @param key the key.
	 * @return true if it exists; false otherwise.
	 */
	hasTempData(key: string): boolean;

	/**
	 * Removes the temporary data for the given key.
	 * 
	 * @param key the key.
	 */
	removeTempData(key: string): void;

	/**
	 * Clears all temporary data.
	 */
	clearTempData(): void;

	/**
	 * Returns an array of keys for temporary data.
	 * 
	 * @return the keys.
	 */
	getTempDataKeys(): string[];

	/**
	 * Returns stored (persistent) data for the given key.
	 * 
	 * @param key the key.
	 * @return the stored data.
	 */
	getStoredData(key: string): any;

	/**
	 * Stores persistent data under the given key.
	 * Only Numbers and Strings are supported.
	 * 
	 * @param key the key.
	 * @param value the value.
	 */
	setStoredData(key: string, value: any): void;

	/**
	 * Checks if stored data for the given key exists.
	 * 
	 * @param key the key.
	 * @return true if it exists; false otherwise.
	 */
	hasStoredData(key: string): boolean;

	/**
	 * Removes the stored data for the given key.
	 * 
	 * @param key the key.
	 */
	removeStoredData(key: string): void;

	/**
	 * Clears all stored data.
	 */
	clearStoredData(): void;

	/**
	 * Returns an array of keys for stored data.
	 * 
	 * @return the keys.
	 */
	getStoredDataKeys(): string[];

	/**
	 * @return The age of the entity in ticks.
	 */
	getAge(): number;

	/**
	 * Permanently despawns the entity.
	 */
	despawn(): void;

	/**
	 * @return Whether the entity is standing in water.
	 */
	inWater(): boolean;

	/**
	 * @return Whether the entity is standing in lava.
	 */
	inLava(): boolean;

	/**
	 * @return Whether the entity is standing in fire.
	 */
	inFire(): boolean;

	/**
	 * @return Whether the entity is on fire.
	 */
	isBurning(): boolean;

	/**
	 * Sets the entity on fire for the given number of ticks (20 ticks = 1 second).
	 * 
	 * @param ticks the burn duration.
	 */
	setBurning(ticks: number): void;

	/**
	 * Extinguishes any fire on the entity.
	 */
	extinguish(): void;

	/**
	 * @return The entity type name as registered in Minecraft.
	 */
	getTypeName(): string;

	/**
	 * Causes the entity to drop the given item.
	 * 
	 * @param item the item to drop.
	 */
	dropItem(item: IItemStack): void;

	/**
	 * @return The entity riding this entity.
	 */
	getRider(): IEntity;

	/**
	 * Sets the given entity as the rider of this entity.
	 * 
	 * @param entity the rider.
	 */
	setRider(entity: IEntity): void;

	/**
	 * @return The entity this entity is riding.
	 */
	getMount(): IEntity;

	/**
	 * Sets the entity to be mounted by this entity.
	 * 
	 * @param entity the mount.
	 */
	setMount(entity: IEntity): void;

	/**
	 * Returns the EntityType as defined in the scripting constants.
	 * 
	 * @return the EntityType.
	 */
	getType(): number;

	/**
	 * Checks whether the entity is of the specified EntityType.
	 * 
	 * @param type the type to check.
	 * @return true if the entity is of that type; false otherwise.
	 */
	typeOf(type: number): boolean;

	/**
	 * Sets the entity's rotation (yaw) in degrees (0-360).
	 * 
	 * @param rotation the rotation angle.
	 */
	setRotation(rotation: number): void;

	/**
	 * Sets both the rotation (yaw) and pitch of the entity.
	 * 
	 * @param rotationYaw the yaw angle.
	 * @param rotationPitch the pitch angle.
	 */
	setRotation(rotationYaw: number, rotationPitch: number): void;

	/**
	 * @return The current rotation (yaw) of the entity.
	 */
	getRotation(): number;

	/**
	 * Sets the entity's pitch.
	 * 
	 * @param pitch the pitch angle.
	 */
	setPitch(pitch: number): void;

	/**
	 * Returns the entity's pitch.
	 * 
	 * @return the pitch angle.
	 */
	getPitch(): number;

	/**
	 * Applies a knockback effect to the entity.
	 * 
	 * @param power the strength of the knockback.
	 * @param direction the direction in degrees (usually based on getRotation()).
	 */
	knockback(power: number, direction: number): void;

	/**
	 * Applies knockback using individual power components.
	 * 
	 * @param xpower the x-axis power.
	 * @param ypower the y-axis power.
	 * @param zpower the z-axis power.
	 * @param direction the direction in degrees.
	 */
	knockback(xpower: number, ypower: number, zpower: number, direction: number): void;

	/**
	 * Applies knockback using a position vector.
	 * 
	 * @param pos the position vector.
	 * @param direction the direction in degrees.
	 */
	knockback(pos: IPos, direction: number): void;

	/**
	 * Sets the entity's immunity time (hurt resistance).
	 * 
	 * @param ticks the number of ticks.
	 */
	setImmune(ticks: number): void;

	/**
	 * Sets the entity's invisibility.
	 * 
	 * @param invisible true to make invisible.
	 */
	setInvisible(invisible: boolean): void;

	/**
	 * Sets whether the entity is sneaking.
	 * 
	 * @param sneaking true to enable sneaking.
	 */
	setSneaking(sneaking: boolean): void;

	/**
	 * Sets whether the entity is sprinting.
	 * 
	 * @param sprinting true to enable sprinting.
	 */
	setSprinting(sprinting: boolean): void;

	/**
	 * @return Whether the entity has collided with something.
	 */
	hasCollided(): boolean;

	/**
	 * @return Whether the entity has collided vertically.
	 */
	hasCollidedVertically(): boolean;

	/**
	 * @return Whether the entity has collided horizontally.
	 */
	hasCollidedHorizontally(): boolean;

	/**
	 * @return Whether the entity is capturing drops.
	 */
	capturesDrops(): boolean;

	/**
	 * Sets whether the entity captures drops.
	 * 
	 * @param capture true to capture drops.
	 */
	setCapturesDrops(capture: boolean): void;

	/**
	 * Sets the captured drops for this entity.
	 * 
	 * @param capturedDrops an array of captured drops.
	 */
	setCapturedDrops(capturedDrops: IEntity[]): void;

	/**
	 * Returns the captured drops.
	 * 
	 * @return an array of captured drops.
	 */
	getCapturedDrops(): IEntity[];

	/**
	 * @since 1.7.10c
	 * @return Whether the entity is sneaking.
	 */
	isSneaking(): boolean;

	/**
	 * @since 1.7.10c
	 * @return Whether the entity is sprinting.
	 */
	isSprinting(): boolean;

	/**
	 * Expert users only.
	 * 
	 * @return The underlying Minecraft entity.
	 */
	getMCEntity(): Entity;

	/**
	 * Returns the entity's NBT data.
	 * 
	 * @return the NBT data.
	 */
	getNbt(): INbt;

	/**
	 * Returns all NBT data for the entity.
	 * 
	 * @return the complete NBT data.
	 */
	getAllNbt(): INbt;

	/**
	 * Applies the given NBT data to the entity.
	 * 
	 * @param nbt the NBT data.
	 */
	setNbt(nbt: INbt): void;

	/**
	 * Returns optional NBT data if available.
	 * 
	 * @return the optional NBT data, or null if none.
	 */
	getNbtOptional(): INbt;

	/**
	 * Stores the entity as a clone with the given tab and name.
	 * 
	 * @param tab the tab index.
	 * @param name the name for the clone.
	 */
	storeAsClone(tab: number, name: string): void;

	/**
	 * @return The world this entity exists in.
	 */
	getWorld(): IWorld;

	/**
	 * Updates the entity's state.
	 */
	updateEntity(): void;

	getJumpBoost(): number;

	/**
	 * Modify how high you go when you jump. Default is 1.
	 * This function is not linearly scaled. Hopefully it will be in the future.
	 * 
	 * @param value
	 */
	setJumpBoost(value: number): void;

	getMaxFallDistance(): number;

	/**
	 * Sets the max fall distance before an entity takes fall damage. Default is 3.
	 */
	setMaxFallDistance(value: number): void;

	getUnderwaterDownwardGravity(): number;

	setUnderwaterDownwardGravity(value: number): void;

	getUnderwaterUpwardGravity(): number;

	setUnderwaterUpwardGravity(value: number): void;

	getUnderwaterGravity(): number;

	setUnderwaterGravity(value: number): void;

	getDownwardGravity(): number;

	setDownwardGravity(value: number): void;

	getUpwardGravity(): number;

	setUpwardGravity(value: number): void;

	getGravity(): number;

	/**
	 * Sets the gravity of the entity. Ex 0.1 for 10% gravity, 10 for 1000% gravity
	 */
	setGravity(value: number): void;

}
}
