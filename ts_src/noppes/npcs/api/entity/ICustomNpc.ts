import { IPlayer } from "./IPlayer";
import { ILines } from "./../handler/data/ILines";
import { IFaction } from "./../handler/data/IFaction";
import { ITimers } from "./../ITimers";
import { IDialog } from "./../handler/data/IDialog";
import { IMagicData } from "./../handler/data/IMagicData";
import { IJob } from "./../jobs/IJob";
import { IAnimationData } from "./../handler/data/IAnimationData";
import { IPos } from "./../IPos";
import { IActionManager } from "./../handler/IActionManager";
import { IModelData } from "./data/IModelData";
import { IEntityLiving } from "./IEntityLiving";
import { IOverlayHandler } from "./../handler/IOverlayHandler";
import { IEntityLivingBase } from "./IEntityLivingBase";
import { IRole } from "./../roles/IRole";
import { IItemStack } from "./../item/IItemStack";
import { IAnimatable } from "./IAnimatable";


/**
 * Represents a customizable NPC with a wide variety of properties such as appearance,
 * behavior, combat, loot, and more. This interface extends living entity and animation
 * capabilities and defines methods for adjusting almost every aspect of an NPC.
 * 
 * @param <T> the underlying EntityCreature type.
 */
export interface ICustomNpc extends IEntityLiving, IAnimatable {
	/**
	 * Returns the current NPC's size (scale factor) within the range 1–30.
	 * 
	 * @return the NPC's size.
	 */
	getSize(): number;

	/**
	 * Sets the NPC's size (scale factor).
	 * 
	 * @param size the size of the NPC (range 1–30, default is 5).
	 */
	setSize(size: number): void;

	/**
	 * Returns the NPC's model type.
	 * 
	 * @return the model type.
	 */
	getModelType(): number;

	/**
	 * Sets the NPC's model type.
	 * 
	 * @param modelType the model type (0: Steve, 1: Steve64, 2: Alex).
	 */
	setModelType(modelType: number): void;

	/**
	 * Returns the NPC's name.
	 * 
	 * @return the NPC's name.
	 */
	getName(): string;

	/**
	 * Sets the NPC's rotation (yaw).
	 * 
	 * @param rotation the new rotation angle in degrees.
	 */
	setRotation(rotation: number): void;

	/**
	 * Sets the NPC's rotation type.
	 * 
	 * @param rotationType the rotation type (implementation-specific).
	 */
	setRotationType(rotationType: number): void;

	/**
	 * Returns the NPC's rotation type.
	 * 
	 * @return the rotation type.
	 */
	getRotationType(): number;

	/**
	 * Sets the moving type of the NPC.
	 * 
	 * @param movingType the moving type (0: standing, 1: wandering, 2: moving path).
	 */
	setMovingType(movingType: number): void;

	/**
	 * Returns the moving type of the NPC.
	 * 
	 * @return the moving type (0: standing, 1: wandering, 2: moving path).
	 */
	getMovingType(): number;

	/**
	 * Sets the NPC's name.
	 * 
	 * @param name the new name.
	 */
	setName(name: string): void;

	/**
	 * Returns the NPC's title.
	 * 
	 * @return the NPC's title.
	 */
	getTitle(): string;

	/**
	 * Sets the NPC's title.
	 * 
	 * @param title the new title.
	 */
	setTitle(title: string): void;

	/**
	 * Returns the NPC's texture path.
	 * 
	 * @return the texture path.
	 */
	getTexture(): string;

	/**
	 * Sets the NPC's texture.
	 * 
	 * @param texture the new texture path.
	 */
	setTexture(texture: string): void;

	/**
	 * Returns the NPC's home position.
	 * 
	 * @return the home position as an IPos.
	 */
	getHome(): IPos;

	/**
	 * Returns the home position X coordinate.
	 * 
	 * @return the home X coordinate.
	 */
	getHomeX(): number;

	/**
	 * Sets the home position X coordinate.
	 * 
	 * @param x the new home X coordinate.
	 */
	setHomeX(x: number): void;

	/**
	 * Returns the home position Y coordinate.
	 * 
	 * @return the home Y coordinate.
	 */
	getHomeY(): number;

	/**
	 * Sets the home position Y coordinate.
	 * 
	 * @param y the new home Y coordinate.
	 */
	setHomeY(y: number): void;

	/**
	 * Returns the home position Z coordinate.
	 * 
	 * @return the home Z coordinate.
	 */
	getHomeZ(): number;

	/**
	 * Sets the home position Z coordinate.
	 * 
	 * @param z the new home Z coordinate.
	 */
	setHomeZ(z: number): void;

	/**
	 * Sets the home position using individual coordinates.
	 * 
	 * @param x the home X coordinate.
	 * @param y the home Y coordinate.
	 * @param z the home Z coordinate.
	 */
	setHome(x: number, y: number, z: number): void;

	/**
	 * Sets the home position using an IPos instance.
	 * 
	 * @param pos the new home position.
	 */
	setHome(pos: IPos): void;

	/**
	 * Sets the NPC's maximum health.
	 * 
	 * @param health the new maximum health.
	 */
	setMaxHealth(health: number): void;

	/**
	 * Sets whether the NPC should return to its home position.
	 * 
	 * @param bo true to enable returning home, false otherwise.
	 */
	setReturnToHome(bo: boolean): void;

	/**
	 * Returns whether the NPC is set to return home.
	 * 
	 * @return true if the NPC returns home, false otherwise.
	 */
	getReturnToHome(): boolean;

	/**
	 * Returns the faction associated with the NPC.
	 * 
	 * @return the NPC's faction.
	 */
	getFaction(): IFaction;

	/**
	 * Sets the NPC's faction by its ID.
	 * 
	 * @param id the faction ID.
	 */
	setFaction(id: number): void;

	/**
	 * Sets whether the NPC will attack members of other factions.
	 * 
	 * @param attackOtherFactions true to attack, false otherwise.
	 */
	setAttackFactions(attackOtherFactions: boolean): void;

	/**
	 * Returns whether the NPC attacks other factions.
	 * 
	 * @return true if it attacks, false otherwise.
	 */
	getAttackFactions(): boolean;

	/**
	 * Sets whether the NPC should defend members of its faction.
	 * 
	 * @param defendFaction true to defend, false otherwise.
	 */
	setDefendFaction(defendFaction: boolean): void;

	/**
	 * Returns whether the NPC defends its faction.
	 * 
	 * @return true if it defends, false otherwise.
	 */
	getDefendFaction(): boolean;

	/**
	 * Returns the entity type of the NPC.
	 * 
	 * @return the NPC's type.
	 */
	getType(): number;

	/**
	 * Checks if the NPC is of the given type.
	 * 
	 * @param type the type to check.
	 * @return true if the NPC matches the specified type; otherwise, defers to the parent.
	 */
	typeOf(type: number): boolean;

	/**
	 * Instructs the NPC to shoot an item at a target.
	 * 
	 * @param target the target entity.
	 * @param item the item to shoot.
	 * @param accuracy the accuracy of the shot (0–100).
	 */
	shootItem(target: IEntityLivingBase, item: IItemStack, accuracy: number): void;

	/**
	 * Sets whether projectiles fired by the NPC should ignore terrain collisions.
	 * 
	 * @param b true if projectiles keep terrain, false otherwise.
	 */
	setProjectilesKeepTerrain(b: boolean): void;

	/**
	 * Returns whether projectiles fired by the NPC ignore terrain collisions.
	 * 
	 * @return true if they ignore terrain, false otherwise.
	 */
	getProjectilesKeepTerrain(): boolean;

	/**
	 * Makes the NPC broadcast a message.
	 * 
	 * @param message the message to say.
	 */
	say(message: string): void;

	/**
	 * Makes the NPC send a message to a specific player.
	 * 
	 * @param player the target player.
	 * @param message the message to say.
	 */
	say(player: IPlayer, message: string): void;

	/**
	 * Retrieves the dialog from the specified slot.
	 * 
	 * @param slot the dialog slot.
	 * @return the dialog instance.
	 */
	getDialog(slot: number): IDialog;

	/**
	 * Returns the dialog ID in the specified slot.
	 * 
	 * @param slot the dialog slot.
	 * @return the dialog ID, or -1 if none exists.
	 */
	getDialogId(slot: number): number;

	/**
	 * Sets the dialog for the specified slot.
	 * 
	 * @param slot the dialog slot.
	 * @param dialog the dialog instance.
	 */
	setDialog(slot: number, dialog: IDialog): void;

	/**
	 * Sets the dialog for the specified slot by its ID.
	 * 
	 * @param slot the dialog slot.
	 * @param dialogId the dialog ID.
	 */
	setDialog(slot: number, dialogId: number): void;

	/**
	 * Returns the lines used for NPC interaction.
	 * 
	 * @return the interact lines.
	 */
	getInteractLines(): ILines;

	/**
	 * Returns the lines displayed in the world.
	 * 
	 * @return the world lines.
	 */
	getWorldLines(): ILines;

	/**
	 * Returns the lines spoken when the NPC attacks.
	 * 
	 * @return the attack lines.
	 */
	getAttackLines(): ILines;

	/**
	 * Returns the lines spoken when the NPC is killed.
	 * 
	 * @return the killed lines.
	 */
	getKilledLines(): ILines;

	/**
	 * Returns the lines spoken when the NPC kills another entity.
	 * 
	 * @return the kill lines.
	 */
	getKillLines(): ILines;

	/**
	 * Kills the NPC without despawning it.
	 */
	kill(): void;

	/**
	 * Resets the NPC to its initial state and triggers the initialization script.
	 */
	reset(): void;

	/**
	 * Returns the NPC's animation data.
	 * 
	 * @return the animation data.
	 */
	getAnimationData(): IAnimationData;

	/**
	 * Returns the NPC's current role.
	 * 
	 * @return the role instance.
	 */
	getRole(): IRole;

	/**
	 * Sets the NPC's role by its ID.
	 * 
	 * @param role the role ID.
	 */
	setRole(role: number): void;

	/**
	 * Returns the NPC's current job.
	 * 
	 * @return the job instance.
	 */
	getJob(): IJob;

	/**
	 * Sets the NPC's job by its ID.
	 * 
	 * @param job the job ID.
	 */
	setJob(job: number): void;

	/**
	 * Returns the item held in the NPC's right hand.
	 * 
	 * @return the right-hand item.
	 */
	getRightItem(): IItemStack;

	/**
	 * Sets the item held in the NPC's right hand.
	 * 
	 * @param item the new item.
	 */
	setRightItem(item: IItemStack): void;

	/**
	 * (Deprecated) Returns the item held in the NPC's left hand.
	 * 
	 * @return the left-hand item.
	 */
	getLefttItem(): IItemStack;

	/**
	 * Returns the item held in the NPC's left hand.
	 * 
	 * @return the left-hand item.
	 */
	getLeftItem(): IItemStack;

	/**
	 * Sets the item held in the NPC's left hand.
	 * 
	 * @param item the new item.
	 */
	setLeftItem(item: IItemStack): void;

	/**
	 * Returns the projectile item used by the NPC.
	 * 
	 * @return the projectile item.
	 */
	getProjectileItem(): IItemStack;

	/**
	 * Sets the projectile item for the NPC.
	 * 
	 * @param item the new projectile item.
	 */
	setProjectileItem(item: IItemStack): void;

	/**
	 * Checks if the NPC can aim while shooting.
	 * 
	 * @return true if aiming while shooting is enabled, false otherwise.
	 */
	canAimWhileShooting(): boolean;

	/**
	 * Sets whether the NPC can aim while shooting.
	 * 
	 * @param aimWhileShooting true to enable aiming, false to disable.
	 */
	aimWhileShooting(aimWhileShooting: boolean): void;

	/**
	 * Sets the Aim Type for an NPC
	 * 
	 * @param aimWhileShooting 0: No, 1: Yes, 2: On Shot
	 */
	setAimType(aimWhileShooting: number): void;

	/**
	 * Gets the Aim Type for an NPC
	 * 
	 * @return 0: No, 1: Yes, 2: On Shot
	 */
	getAimType(): number;

	/**
	 * Sets the minimum delay (in ticks) between projectiles.
	 * 
	 * @param minDelay the minimum delay.
	 */
	setMinProjectileDelay(minDelay: number): void;

	/**
	 * Returns the minimum projectile delay.
	 * 
	 * @return the minimum delay in ticks.
	 */
	getMinProjectileDelay(): number;

	/**
	 * Sets the maximum delay (in ticks) between projectiles.
	 * 
	 * @param maxDelay the maximum delay.
	 */
	setMaxProjectileDelay(maxDelay: number): void;

	/**
	 * Returns the maximum projectile delay.
	 * 
	 * @return the maximum delay in ticks.
	 */
	getMaxProjectileDelay(): number;

	/**
	 * Sets the range for ranged attacks.
	 * 
	 * @param rangedRange the ranged attack range.
	 */
	setRangedRange(rangedRange: number): void;

	/**
	 * Returns the range for ranged attacks.
	 * 
	 * @return the ranged attack range.
	 */
	getRangedRange(): number;

	/**
	 * Sets the fire rate for ranged attacks.
	 * 
	 * @param rate the fire rate in ticks.
	 */
	setFireRate(rate: number): void;

	/**
	 * Returns the fire rate for ranged attacks.
	 * 
	 * @return the fire rate.
	 */
	getFireRate(): number;

	/**
	 * Sets the number of shots in a burst.
	 * 
	 * @param burstCount the burst count.
	 */
	setBurstCount(burstCount: number): void;

	/**
	 * Returns the number of shots in a burst.
	 * 
	 * @return the burst count.
	 */
	getBurstCount(): number;

	/**
	 * Sets the number of shots fired.
	 * 
	 * @param shotCount the shot count.
	 */
	setShotCount(shotCount: number): void;

	/**
	 * Returns the number of shots fired.
	 * 
	 * @return the shot count.
	 */
	getShotCount(): number;

	/**
	 * Sets the shooting accuracy.
	 * 
	 * @param accuracy the accuracy (0–100).
	 */
	setAccuracy(accuracy: number): void;

	/**
	 * Returns the shooting accuracy.
	 * 
	 * @return the accuracy value.
	 */
	getAccuracy(): number;

	/**
	 * Returns the sound directory played when a projectile is fired.
	 * 
	 * @return the fire sound directory.
	 */
	getFireSound(): string;

	/**
	 * Sets the sound directory for projectile firing.
	 * 
	 * @param fireSound the new fire sound directory.
	 */
	setFireSound(fireSound: string): void;

	/**
	 * Returns the armor item in the specified slot.
	 * 
	 * @param slot the armor slot (0: head, 1: body, 2: legs, 3: boots).
	 * @return the armor item.
	 */
	getArmor(slot: number): IItemStack;

	/**
	 * Sets the armor item in the specified slot.
	 * 
	 * @param slot the armor slot (0: head, 1: body, 2: legs, 3: boots).
	 * @param item the armor item.
	 */
	setArmor(slot: number, item: IItemStack): void;

	/**
	 * Returns the loot item from the NPC's drop list for the given slot.
	 * 
	 * @param slot the loot slot (0–8).
	 * @return the loot item.
	 */
	getLootItem(slot: number): IItemStack;

	/**
	 * Sets the loot item in the NPC's drop list for the given slot.
	 * 
	 * @param slot the loot slot (0–8).
	 * @param item the new loot item.
	 */
	setLootItem(slot: number, item: IItemStack): void;

	/**
	 * Returns the chance for the loot item in the specified slot to drop.
	 * 
	 * @param slot the loot slot (0–8).
	 * @return the drop chance (default 100 if not set).
	 */
	getLootChance(slot: number): number;

	/**
	 * Sets the drop chance for the loot item in the specified slot.
	 * 
	 * @param slot the loot slot (0–8).
	 * @param chance the new drop chance.
	 */
	setLootChance(slot: number, chance: number): void;

	/**
	 * Returns the NPC's loot mode.
	 * 
	 * @return the loot mode (0: Normal, 1: Auto Pickup).
	 */
	getLootMode(): number;

	/**
	 * Sets the NPC's loot mode.
	 * 
	 * @param lootMode the loot mode (0: Normal, 1: Auto Pickup).
	 */
	setLootMode(lootMode: number): void;

	/**
	 * Sets the minimum XP dropped by the NPC.
	 * 
	 * @param lootXP the minimum loot XP.
	 */
	setMinLootXP(lootXP: number): void;

	/**
	 * Sets the maximum XP dropped by the NPC.
	 * 
	 * @param lootXP the maximum loot XP.
	 */
	setMaxLootXP(lootXP: number): void;

	/**
	 * Returns the minimum XP dropped by the NPC.
	 * 
	 * @return the minimum loot XP.
	 */
	getMinLootXP(): number;

	/**
	 * Returns the maximum XP dropped by the NPC.
	 * 
	 * @return the maximum loot XP.
	 */
	getMaxLootXP(): number;

	/**
	 * Returns whether the NPC can drown.
	 * 
	 * @return true if the NPC can drown, false otherwise.
	 */
	getCanDrown(): boolean;

	/**
	 * Sets the drowning behavior of the NPC.
	 * 
	 * @param type 0: Never drowns, 1: Drowns in water, 2: Drowns in air (without water).
	 */
	setDrowningType(type: number): void;

	/**
	 * Returns whether the NPC can breathe.
	 * 
	 * @return true if the NPC can breathe, false otherwise.
	 */
	canBreathe(): boolean;

	/**
	 * Sets the NPC's animation type.
	 * 
	 * @param type the animation type.
	 */
	setAnimation(type: number): void;

	/**
	 * Sets the NPC's tactical variant.
	 * 
	 * @param variant the tactical variant (0: Rush, 1: Dodge, 2: Surround, 3: Hit N Run, 4: Ambush, 5: Stalk, 6: None).
	 */
	setTacticalVariant(variant: number): void;

	/**
	 * Returns the NPC's tactical variant.
	 * 
	 * @return the tactical variant as an integer.
	 */
	getTacticalVariant(): number;

	/**
	 * Sets the NPC's tactical variant by its name.
	 * 
	 * @param variant the name of the tactical variant.
	 */
	setTacticalVariant(variant: string): void;

	/**
	 * Returns the name of the NPC's tactical variant.
	 * 
	 * @return the tactical variant name.
	 */
	getTacticalVariantName(): string;

	/**
	 * Returns the name of the NPC's combat policy.
	 * 
	 * @return the combat policy name.
	 */
	getCombatPolicyName(): string;

	/**
	 * Sets the NPC's combat policy.
	 * 
	 * @param policy the combat policy (0: Flip, 1: Brute, 2: Stubborn, 4: Tactical).
	 */
	setCombatPolicy(policy: number): void;

	/**
	 * Returns the NPC's combat policy.
	 * 
	 * @return the combat policy as an integer.
	 */
	getCombatPolicy(): number;

	/**
	 * Sets the NPC's combat policy by name.
	 * 
	 * @param policy the combat policy name.
	 */
	setCombatPolicy(policy: string): void;

	/**
	 * Sets the tactical radius affecting NPC behavior.
	 * 
	 * @param tacticalRadius the tactical radius.
	 */
	setTacticalRadius(tacticalRadius: number): void;

	/**
	 * Returns the tactical radius affecting NPC behavior.
	 * 
	 * @return the tactical radius.
	 */
	getTacticalRadius(): number;

	/**
	 * Sets whether the NPC ignores cobwebs.
	 * 
	 * @param ignore true to ignore cobwebs, false otherwise.
	 */
	setIgnoreCobweb(ignore: boolean): void;

	/**
	 * Returns whether the NPC ignores cobwebs.
	 * 
	 * @return true if cobwebs are ignored, false otherwise.
	 */
	getIgnoreCobweb(): boolean;

	/**
	 * Sets the NPC's behavior when encountering an enemy.
	 * 
	 * @param onAttack 0: Retaliate, 1: Panic, 2: Retreat, 3: Nothing.
	 */
	setOnFoundEnemy(onAttack: number): void;

	/**
	 * Returns the NPC's behavior when encountering an enemy.
	 * 
	 * @return an integer representing the behavior (0: Retaliate, 1: Panic, 2: Retreat, 3: Nothing).
	 */
	onFoundEnemy(): number;

	/**
	 * Sets the condition under which the NPC seeks shelter.
	 * 
	 * @param shelterFrom 0: Darkness, 1: Sunlight, 2: Disabled.
	 */
	setShelterFrom(shelterFrom: number): void;

	/**
	 * Returns the condition under which the NPC seeks shelter.
	 * 
	 * @return an integer representing the shelter condition (0: Darkness, 1: Sunlight, 2: Disabled).
	 */
	getShelterFrom(): number;

	/**
	 * Returns whether the NPC has a living animation.
	 * 
	 * @return true if living animation is enabled, false otherwise.
	 */
	hasLivingAnimation(): boolean;

	/**
	 * Sets whether the NPC has a living animation.
	 * 
	 * @param livingAnimation true to enable living animation, false to disable.
	 */
	setLivingAnimation(livingAnimation: boolean): void;

	/**
	 * Sets the visibility type of the NPC.
	 * 
	 * @param type the visibility type (0: visible, 1: invisible, 2: semi-visible).
	 */
	setVisibleType(type: number): void;

	/**
	 * Returns the visibility type of the NPC.
	 * 
	 * @return the visibility type.
	 */
	getVisibleType(): number;

	/**
	 * Sets whether the NPC is visible to a specific player.
	 * 
	 * @param player the player.
	 * @param visible true if the NPC should be visible, false if invisible.
	 */
	setVisibleTo(player: IPlayer, visible: boolean): void;

	/**
	 * Checks if the NPC is visible to a specific player.
	 * 
	 * @param player the player.
	 * @return true if the NPC is visible, false otherwise.
	 */
	isVisibleTo(player: IPlayer): boolean;

	/**
	 * Sets the visibility type of the NPC's name.
	 * 
	 * @param type the visibility type (0: visible, 1: invisible, 2: when attacking).
	 */
	setShowName(type: number): void;

	/**
	 * Returns the visibility type of the NPC's name.
	 * 
	 * @return the name visibility type.
	 */
	getShowName(): number;

	/**
	 * Returns the visibility type of the NPC's boss bar.
	 * 
	 * @return the boss bar visibility (0: invisible, 1: visible, 2: when attacking).
	 */
	getShowBossBar(): number;

	/**
	 * Sets the visibility type of the NPC's boss bar.
	 * 
	 * @param type the boss bar visibility (0: invisible, 1: visible, 2: when attacking).
	 */
	setShowBossBar(type: number): void;

	/**
	 * Returns the melee strength of the NPC.
	 * 
	 * @return the melee strength.
	 */
	getMeleeStrength(): number;

	/**
	 * Sets the melee strength of the NPC.
	 * 
	 * @param strength the new melee strength.
	 */
	setMeleeStrength(strength: number): void;

	/**
	 * Returns the melee speed of the NPC.
	 * 
	 * @return the melee speed.
	 */
	getMeleeSpeed(): number;

	/**
	 * Sets the melee speed of the NPC.
	 * 
	 * @param speed the new melee speed.
	 */
	setMeleeSpeed(speed: number): void;

	/**
	 * Returns the melee range of the NPC.
	 * 
	 * @return the melee range.
	 */
	getMeleeRange(): number;

	/**
	 * Sets the melee range of the NPC.
	 * 
	 * @param range the new melee range.
	 */
	setMeleeRange(range: number): void;

	/**
	 * Returns the swing warmup time (in ticks) before melee damage is applied.
	 * 
	 * @return the swing warmup time.
	 */
	getSwingWarmup(): number;

	/**
	 * Sets the swing warmup time (in ticks) before melee damage is applied.
	 * 
	 * @param ticks the warmup time.
	 */
	setSwingWarmup(ticks: number): void;

	/**
	 * Returns the knockback strength of the NPC.
	 * 
	 * @return the knockback strength.
	 */
	getKnockback(): number;

	/**
	 * Sets the knockback strength of the NPC.
	 * 
	 * @param knockback the new knockback strength.
	 */
	setKnockback(knockback: number): void;

	/**
	 * Returns the aggro range of the NPC.
	 * 
	 * @return the aggro range.
	 */
	getAggroRange(): number;

	/**
	 * Sets the aggro range of the NPC.
	 * 
	 * @param aggroRange the new aggro range.
	 */
	setAggroRange(aggroRange: number): void;

	/**
	 * Returns the ranged attack strength of the NPC.
	 * 
	 * @return the ranged strength.
	 */
	getRangedStrength(): number;

	/**
	 * Sets the ranged attack strength of the NPC.
	 * 
	 * @param strength the new ranged strength.
	 */
	setRangedStrength(strength: number): void;

	/**
	 * Returns the ranged attack speed of the NPC.
	 * 
	 * @return the ranged speed.
	 */
	getRangedSpeed(): number;

	/**
	 * Sets the ranged attack speed of the NPC.
	 * 
	 * @param speed the new ranged speed.
	 */
	setRangedSpeed(speed: number): void;

	/**
	 * Returns the number of projectiles in a ranged burst attack.
	 * 
	 * @return the burst count.
	 */
	getRangedBurst(): number;

	/**
	 * Sets the number of projectiles in a ranged burst attack.
	 * 
	 * @param count the new burst count.
	 */
	setRangedBurst(count: number): void;

	/**
	 * Returns the number of ticks before the NPC respawns.
	 * 
	 * @return the respawn time.
	 */
	getRespawnTime(): number;

	/**
	 * Sets the number of ticks before the NPC respawns.
	 * 
	 * @param time the respawn time.
	 */
	setRespawnTime(time: number): void;

	/**
	 * Returns the NPC's respawn cycle.
	 * 
	 * @return the respawn cycle (0: Always, 1: Day, 2: Night, 3: No respawn).
	 */
	getRespawnCycle(): number;

	/**
	 * Sets the NPC's respawn cycle.
	 * 
	 * @param cycle the respawn cycle (0: Always, 1: Day, 2: Night, 3: No respawn).
	 */
	setRespawnCycle(cycle: number): void;

	/**
	 * Returns whether the NPC's body is hidden upon death.
	 * 
	 * @return true if the body is hidden, false otherwise.
	 */
	getHideKilledBody(): boolean;

	/**
	 * Sets whether the NPC's body should be hidden upon death.
	 * 
	 * @param hide true to hide the body, false otherwise.
	 */
	hideKilledBody(hide: boolean): void;

	/**
	 * Returns whether the NPC naturally despawns.
	 * 
	 * @return true if it naturally despawns, false otherwise.
	 */
	naturallyDespawns(): boolean;

	/**
	 * Sets whether the NPC should naturally despawn.
	 * 
	 * @param canDespawn true to allow natural despawning, false otherwise.
	 */
	setNaturallyDespawns(canDespawn: boolean): void;

	/**
	 * Returns whether the NPC was spawned using a soul stone.
	 * 
	 * @return true if spawned from a soul stone, false otherwise.
	 */
	spawnedFromSoulStone(): boolean;

	/**
	 * Returns the name of the player who spawned this NPC using a soul stone.
	 * 
	 * @return the player's name, or null if not spawned by soul stone.
	 */
	getSoulStonePlayerName(): string;

	/**
	 * Returns whether the NPC has been initialized after a soul stone spawn.
	 * 
	 * @return true if initialized, false otherwise.
	 */
	isSoulStoneInit(): boolean;

	/**
	 * Returns whether the NPC refuses to be captured by a soul stone.
	 * 
	 * @return true if it refuses, false otherwise.
	 */
	getRefuseSoulStone(): boolean;

	/**
	 * Sets whether the NPC refuses to be captured by a soul stone.
	 * 
	 * @param refuse true to refuse, false to allow.
	 */
	setRefuseSoulStone(refuse: boolean): void;

	/**
	 * Returns the minimum faction points required to capture the NPC with a soul stone.
	 * 
	 * @return the minimum points (default -1 means use the faction's friendly points).
	 */
	getMinPointsToSoulStone(): number;

	/**
	 * Sets the minimum faction points required to capture the NPC with a soul stone.
	 * 
	 * @param points the minimum faction points.
	 */
	setMinPointsToSoulStone(points: number): void;

	/**
	 * Gives an item to the specified player.
	 * 
	 * @param player the recipient.
	 * @param item the item to give.
	 */
	giveItem(player: IPlayer, item: IItemStack): void;

	/**
	 * Executes a command as the NPC.
	 * <p>
	 * Note: On servers the enable-command-block option must be set to true.
	 * </p>
	 * 
	 * @param command the command to execute.
	 */
	executeCommand(command: string): void;

	/**
	 * Returns the model data associated with the NPC.
	 * 
	 * @return the model data, or null if not available.
	 */
	getModelData(): IModelData;

	/**
	 * (Deprecated) Sets the head scale of the NPC.
	 * 
	 * @param x scale factor along the X-axis.
	 * @param y scale factor along the Y-axis.
	 * @param z scale factor along the Z-axis.
	 */
	setHeadScale(x: number, y: number, z: number): void;

	/**
	 * (Deprecated) Sets the body scale of the NPC.
	 * 
	 * @param x scale factor along the X-axis.
	 * @param y scale factor along the Y-axis.
	 * @param z scale factor along the Z-axis.
	 */
	setBodyScale(x: number, y: number, z: number): void;

	/**
	 * (Deprecated) Sets the arms scale of the NPC.
	 * 
	 * @param x scale factor along the X-axis.
	 * @param y scale factor along the Y-axis.
	 * @param z scale factor along the Z-axis.
	 */
	setArmsScale(x: number, y: number, z: number): void;

	/**
	 * (Deprecated) Sets the legs scale of the NPC.
	 * 
	 * @param x scale factor along the X-axis.
	 * @param y scale factor along the Y-axis.
	 * @param z scale factor along the Z-axis.
	 */
	setLegsScale(x: number, y: number, z: number): void;

	/**
	 * Sets the NPC's explosion resistance.
	 * 
	 * @param resistance the resistance (0–2, default is 1).
	 */
	setExplosionResistance(resistance: number): void;

	/**
	 * Returns the NPC's explosion resistance.
	 * 
	 * @return the explosion resistance.
	 */
	getExplosionResistance(): number;

	/**
	 * Sets the NPC's melee resistance.
	 * 
	 * @param resistance the resistance (0–2, default is 1).
	 */
	setMeleeResistance(resistance: number): void;

	/**
	 * Returns the NPC's melee resistance.
	 * 
	 * @return the melee resistance.
	 */
	getMeleeResistance(): number;

	/**
	 * Sets the NPC's arrow resistance.
	 * 
	 * @param resistance the resistance (0–2, default is 1).
	 */
	setArrowResistance(resistance: number): void;

	/**
	 * Returns the NPC's arrow resistance.
	 * 
	 * @return the arrow resistance.
	 */
	getArrowResistance(): number;

	/**
	 * Sets the NPC's knockback resistance.
	 * 
	 * @param resistance the resistance (0–2, default is 1).
	 */
	setKnockbackResistance(resistance: number): void;

	/**
	 * Returns the NPC's knockback resistance.
	 * 
	 * @return the knockback resistance.
	 */
	getKnockbackResistance(): number;

	/**
	 * Sets the NPC's retaliation type.
	 * 
	 * @param type the retaliation type (0: normal, 1: panic, 2: retreat, 3: nothing).
	 */
	setRetaliateType(type: number): void;

	/**
	 * Returns the NPC's combat health regeneration per second.
	 * 
	 * @return the combat regen rate.
	 */
	getCombatRegen(): number;

	/**
	 * Sets the NPC's combat health regeneration per second.
	 * 
	 * @param regen the combat regen rate.
	 */
	setCombatRegen(regen: number): void;

	/**
	 * Returns the NPC's health regeneration per second when not in combat.
	 * 
	 * @return the health regen rate.
	 */
	getHealthRegen(): number;

	/**
	 * Sets the NPC's health regeneration per second when not in combat.
	 * 
	 * @param regen the health regen rate.
	 */
	setHealthRegen(regen: number): void;

	/**
	 * Returns the age of the NPC in ticks.
	 * 
	 * @return the age.
	 */
	getAge(): number;

	/**
	 * Returns the timers associated with the NPC.
	 * 
	 * @return the timers.
	 */
	getTimers(): ITimers;

	/**
	 * Sets the NPC's flying ability.
	 * 
	 * @param fly 1 to enable flying, 0 to disable.
	 */
	setFly(fly: number): void;

	/**
	 * Returns whether the NPC can fly.
	 * 
	 * @return true if flying is enabled, false otherwise.
	 */
	canFly(): boolean;

	/**
	 * Sets the NPC's flying speed.
	 * 
	 * @param flySpeed the fly speed.
	 */
	setFlySpeed(flySpeed: number): void;

	/**
	 * Returns the NPC's flying speed.
	 * 
	 * @param unused unused parameter.
	 * @return the fly speed.
	 */
	getFlySpeed(unused: number): number;

	/**
	 * Sets the gravity effect on the NPC while flying.
	 * 
	 * @param flyGravity the fly gravity (0.0–1.0).
	 */
	setFlyGravity(flyGravity: number): void;

	/**
	 * Returns the gravity effect on the NPC while flying.
	 * 
	 * @param unused unused parameter.
	 * @return the fly gravity.
	 */
	getFlyGravity(unused: number): number;

	/**
	 * Sets the maximum flying height for the NPC.
	 * 
	 * @param flyHeightLimit the height limit.
	 */
	setFlyHeightLimit(flyHeightLimit: number): void;

	/**
	 * Returns the maximum flying height for the NPC.
	 * 
	 * @param unused unused parameter.
	 * @return the fly height limit.
	 */
	getFlyHeightLimit(unused: number): number;

	/**
	 * Enables or disables flying height limitation.
	 * 
	 * @param limit true to enable limitation, false to disable.
	 */
	limitFlyHeight(limit: boolean): void;

	/**
	 * Checks if flying height is limited.
	 * 
	 * @param unused unused parameter.
	 * @return true if limited, false otherwise.
	 */
	isFlyHeightLimited(unused: boolean): boolean;

	/**
	 * Sets the NPC's walking speed.
	 * 
	 * @param speed the walking speed.
	 */
	setSpeed(speed: number): void;

	/**
	 * Returns the NPC's walking speed.
	 * 
	 * @return the walking speed.
	 */
	getSpeed(): number;

	/**
	 * Sets the NPC's skin type.
	 * 
	 * @param type the skin type.
	 */
	setSkinType(type: number): void;

	/**
	 * Returns the NPC's skin type.
	 * 
	 * @return the skin type.
	 */
	getSkinType(): number;

	/**
	 * Sets the NPC's skin URL.
	 * 
	 * @param url the skin URL.
	 */
	setSkinUrl(url: string): void;

	/**
	 * Returns the NPC's skin URL.
	 * 
	 * @return the skin URL.
	 */
	getSkinUrl(): string;

	/**
	 * Sets the NPC's cloak texture.
	 * 
	 * @param cloakTexture the cloak texture.
	 */
	setCloakTexture(cloakTexture: string): void;

	/**
	 * Returns the NPC's cloak texture.
	 * 
	 * @return the cloak texture.
	 */
	getCloakTexture(): string;

	/**
	 * Adds an overlay texture to the NPC.
	 * 
	 * @param overlayTexture the overlay texture.
	 */
	setOverlayTexture(overlayTexture: string): void;

	/**
	 * Returns the first overlay texture of the NPC.
	 * 
	 * @return the overlay texture, or an empty string if none.
	 */
	getOverlayTexture(): string;

	/**
	 * Returns the NPC's overlay handler.
	 * 
	 * @return the overlay handler.
	 */
	getOverlays(): IOverlayHandler;

	/**
	 * Sets the NPC's collision type.
	 * 
	 * @param type the collision type.
	 */
	setCollisionType(type: number): void;

	/**
	 * Returns the NPC's collision type.
	 * 
	 * @return the collision type.
	 */
	getCollisionType(): number;

	/**
	 * Updates the client with the latest NPC state.
	 */
	updateClient(): void;

	/**
	 * Updates the NPC's AI tasks.
	 */
	updateAI(): void;

	/**
	 * Returns the action manager used for scheduling NPC actions.
	 * 
	 * @return the action manager.
	 */
	getActionManager(): IActionManager;

	/**
	 * Returns the Magic Data of an NPC
	 * 
	 * @return Magic data
	 */
	getMagicData(): IMagicData;

	getPlayerSkinName(): string;

	setPlayerSkinName(playerName: string): void;

	getAnimationType(): number;

}

