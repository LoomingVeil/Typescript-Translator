import { IBlock } from "./../IBlock";
import { IEntity } from "./IEntity";
import { IItemStack } from "./../item/IItemStack";
import { IDamageSource } from "./../IDamageSource";
import { IPos } from "./../IPos";

import { Entity } from "./../../../../missingTypes";

/**
 * Represents a living entity (mob, NPC, etc.) with additional methods to manage health,
 * damage, targeting, vision, potion effects, equipment, and various attributes.
 * <p>
 * This interface extends {@link IEntity} and provides functionality specific to living entities.
 * 
 * @param <T> the underlying Minecraft EntityLivingBase type.
 */
export interface IEntityLivingBase extends IEntity {
	/**
	 * Returns the entity's current health.
	 * 
	 * @return the health value.
	 */
	getHealth(): number;

	/**
	 * Sets the entity's health to the specified value.
	 * 
	 * @param health the new health value.
	 */
	setHealth(health: number): void;

	/**
	 * Applies damage to this entity using a generic damage source.
	 * 
	 * @param damage the damage amount.
	 */
	hurt(damage: number): void;

	/**
	 * Applies damage to this entity with the given source entity.
	 * 
	 * @param damage the damage amount.
	 * @param source the source entity.
	 */
	hurt(damage: number, source: IEntity): void;

	/**
	 * Applies damage to this entity using a custom damage source.
	 * 
	 * @param damage the damage amount.
	 * @param damageSource the damage source.
	 */
	hurt(damage: number, damageSource: IDamageSource): void;

	/**
	 * Sets the maximum hurt time (hurt resistance time) for this entity.
	 * 
	 * @param time the time in ticks.
	 */
	setMaxHurtTime(time: number): void;

	/**
	 * Returns the maximum hurt time (hurt resistance time) for this entity.
	 * 
	 * @return the time in ticks.
	 */
	getMaxHurtTime(): number;

	/**
	 * Returns the entity's maximum health.
	 * 
	 * @return the maximum health.
	 */
	getMaxHealth(): number;

	/**
	 * Returns the follow range attribute of the entity.
	 * 
	 * @return the follow range.
	 */
	getFollowRange(): number;

	/**
	 * Returns the knockback resistance of the entity.
	 * 
	 * @return the knockback resistance.
	 */
	getKnockbackResistance(): number;

	/**
	 * Returns the movement speed of the entity.
	 * 
	 * @return the speed.
	 */
	getSpeed(): number;

	/**
	 * Returns the melee strength (attack damage) of the entity.
	 * 
	 * @return the melee strength.
	 */
	getMeleeStrength(): number;

	/**
	 * Sets the entity's maximum health.
	 * 
	 * @param health the new maximum health.
	 */
	setMaxHealth(health: number): void;

	/**
	 * Sets the follow range of the entity.
	 * 
	 * @param range the new follow range.
	 */
	setFollowRange(range: number): void;

	/**
	 * Sets the knockback resistance of the entity.
	 * 
	 * @param knockbackResistance the new knockback resistance.
	 */
	setKnockbackResistance(knockbackResistance: number): void;

	/**
	 * Sets the movement speed of the entity.
	 * 
	 * @param speed the new movement speed.
	 */
	setSpeed(speed: number): void;

	/**
	 * Sets the melee strength (attack damage) of the entity.
	 * 
	 * @param attackDamage the new attack damage.
	 */
	setMeleeStrength(attackDamage: number): void;

	/**
	 * @return true if this entity is currently attacking a target; false otherwise.
	 */
	isAttacking(): boolean;

	/**
	 * Sets the attack target for this entity.
	 * 
	 * @param living the target entity.
	 */
	setAttackTarget(living: IEntityLivingBase): void;

	/**
	 * Returns the current attack target.
	 * 
	 * @return the target entity.
	 */
	getAttackTarget(): IEntityLivingBase;

	/**
	 * Returns the time (in ticks) for which the current attack target has been active.
	 * 
	 * @return the attack target time.
	 */
	getAttackTargetTime(): number;

	/**
	 * Sets the last attacker for this entity.
	 * 
	 * @param p_130011_1_ the last attacker.
	 */
	setLastAttacker(p_130011_1_: IEntity): void;

	/**
	 * Returns the last attacker of this entity.
	 * 
	 * @return the last attacker.
	 */
	getLastAttacker(): IEntity;

	/**
	 * Returns the time (in ticks) since the entity was last attacked.
	 * 
	 * @return the last attacker time.
	 */
	getLastAttackerTime(): number;

	/**
	 * Checks whether the entity can breathe underwater.
	 * 
	 * @return true if it can breathe underwater; false otherwise.
	 */
	canBreatheUnderwater(): boolean;

	/**
	 * Returns the EntityType (as defined in scripting constants) for this entity.
	 * 
	 * @return the entity type.
	 */
	getType(): number;

	/**
	 * Checks if this entity is of the specified type.
	 * 
	 * @param type the type to check.
	 * @return true if this entity is of that type; false otherwise.
	 */
	typeOf(type: number): boolean;

	/**
	 * Returns the look vector of this entity as an IPos object.
	 * 
	 * @return the look vector.
	 */
	getLookVector(): IPos;

	/**
	 * Returns the block that the entity is looking at, with detailed stopping conditions.
	 * 
	 * @param maxDistance the maximum distance to check.
	 * @param stopOnBlock whether to stop on any block.
	 * @param stopOnLiquid whether to stop on liquids.
	 * @param stopOnCollision whether to stop on collisions.
	 * @return the block being looked at.
	 */
	getLookingAtBlock(maxDistance: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IBlock;

	/**
	 * Returns the first block found by following the entity's look vector,
	 * using default parameters (stop on block).
	 * 
	 * @param maxDistance the maximum distance to check.
	 * @return the block being looked at.
	 */
	getLookingAtBlock(maxDistance: number): IBlock;

	/**
	 * Returns the position (IPos) corresponding to the final obstructed point along the entity's look vector,
	 * with detailed stopping conditions.
	 * 
	 * @param maxDistance the maximum distance to check.
	 * @param stopOnBlock whether to stop on blocks.
	 * @param stopOnLiquid whether to stop on liquids.
	 * @param stopOnCollision whether to stop on collisions.
	 * @return the obstructed position, or the final position if unobstructed.
	 */
	getLookingAtPos(maxDistance: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IPos;

	/**
	 * Returns the position (IPos) corresponding to the final obstructed point along the entity's look vector,
	 * using default parameters (stop on block).
	 * 
	 * @param maxDistance the maximum distance to check.
	 * @return the position being looked at.
	 */
	getLookingAtPos(maxDistance: number): IPos;

	/**
	 * Returns an array of entities intersecting with the entity's look vector.
	 * Entities are sorted first by proximity along the vector, then by closeness to the vector.
	 * 
	 * @param ignoreEntities an array of entities to ignore.
	 * @param maxDistance the maximum distance to check.
	 * @param offset the offset along the vector.
	 * @param range the search radius around the vector.
	 * @param stopOnBlock whether to stop on blocks.
	 * @param stopOnLiquid whether to stop on liquids.
	 * @param stopOnCollision whether to stop on collisions.
	 * @return an array of entities.
	 */
	getLookingAtEntities(ignoreEntities: IEntity[], maxDistance: number, offset: number, range: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IEntity[];

	/**
	 * Returns an array of entities intersecting with the entity's look vector with detailed stop conditions.
	 * 
	 * @param maxDistance the maximum distance.
	 * @param offset the offset.
	 * @param range the search radius.
	 * @param stopOnBlock whether to stop on blocks.
	 * @param stopOnLiquid whether to stop on liquids.
	 * @param stopOnCollision whether to stop on collisions.
	 * @return an array of entities.
	 */
	getLookingAtEntities(maxDistance: number, offset: number, range: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IEntity[];

	/**
	 * Returns an array of entities intersecting with the entity's look vector using default stop conditions.
	 * 
	 * @param maxDistance the maximum distance.
	 * @param offset the offset.
	 * @param range the search radius.
	 * @return an array of entities.
	 */
	getLookingAtEntities(maxDistance: number, offset: number, range: number): IEntity[];

	/**
	 * Expert use only.
	 * Returns the underlying Minecraft EntityLivingBase object.
	 * 
	 * @return the Minecraft entity.
	 */
	getMCEntity(): Entity;

	/**
	 * Makes the entity swing its hand.
	 */
	swingHand(): void;

	/**
	 * Applies a potion effect to the entity.
	 * Works similarly to the /effect command.
	 * 
	 * @param effect the potion effect ID.
	 * @param duration the duration in seconds.
	 * @param strength the amplifier of the effect.
	 * @param hideParticles whether to hide potion particles.
	 */
	addPotionEffect(effect: number, duration: number, strength: number, hideParticles: boolean): void;

	/**
	 * Clears all active potion effects from the entity.
	 */
	clearPotionEffects(): void;

	/**
	 * Returns the amplifier of the specified potion effect.
	 * If the effect is not active, returns -1.
	 * 
	 * @param effect the potion effect ID.
	 * @return the amplifier, or -1 if not active.
	 */
	getPotionEffect(effect: number): number;

	/**
	 * Returns the item the entity is currently holding.
	 * Note that not all living entities support this.
	 * 
	 * @return the held item.
	 */
	getHeldItem(): IItemStack;

	/**
	 * Sets the item the entity is holding.
	 * Note that not all living entities support this.
	 * 
	 * @param item the item to set.
	 */
	setHeldItem(item: IItemStack): void;

	/**
	 * Returns the armor piece in the given slot.
	 * Slots: 0 - boots, 1 - pants, 2 - body, 3 - head.
	 * 
	 * @param slot the armor slot.
	 * @return the armor item.
	 */
	getArmor(slot: number): IItemStack;

	/**
	 * Sets the armor piece in the given slot.
	 * Slots: 0 - boots, 1 - pants, 2 - body, 3 - head.
	 * 
	 * @param slot the armor slot.
	 * @param item the item to set.
	 */
	setArmor(slot: number, item: IItemStack): void;

	/**
	 * @return true if this entity is a child.
	 */
	isChild(): boolean;

	/**
	 * Renders a broken item stack effect for the given item.
	 * 
	 * @param itemStack the item stack.
	 */
	renderBrokenItemStack(itemStack: IItemStack): void;

	/**
	 * @return true if the entity is on a ladder.
	 */
	isOnLadder(): boolean;

	/**
	 * Returns the total armor value of the entity.
	 * 
	 * @return the armor value.
	 */
	getTotalArmorValue(): number;

	/**
	 * Returns the number of arrows currently embedded in the entity.
	 * 
	 * @return the arrow count.
	 */
	getArrowCountInEntity(): number;

	/**
	 * Sets the number of arrows embedded in the entity.
	 * 
	 * @param count the new arrow count.
	 */
	setArrowCountInEntity(count: number): void;

	/**
	 * Dismounts the specified entity from this entity.
	 * 
	 * @param entity the entity to dismount.
	 */
	dismountEntity(entity: IEntity): void;

	/**
	 * Sets the AI move speed for the entity.
	 * 
	 * @param speed the speed value.
	 */
	setAIMoveSpeed(speed: number): void;

	/**
	 * Returns the AI move speed of the entity.
	 * 
	 * @return the speed.
	 */
	getAIMoveSpeed(): number;

	/**
	 * Sets the absorption (extra health) amount.
	 * 
	 * @param amount the absorption amount.
	 */
	setAbsorptionAmount(amount: number): void;

	/**
	 * Returns the absorption (extra health) amount.
	 * 
	 * @return the absorption amount.
	 */
	getAbsorptionAmount(): number;

}

