
/**
 * Events fired for player actions including combat, items, movement, and interactions.
 */
export interface IPlayerEvent extends ICustomNPCsEvent {
	/**
	 * @return the player associated with this event.
	 */
	getPlayer(): IPlayer;
}

/**
 * Fired when the player sends a chat message. Cancelable.
 * 
 * @hookName chat
 */
export interface ChatEvent extends IPlayerEvent {
	/**
	 * @param message the new chat message.
	 */
	setMessage(message: string): void;

	/**
	 * @return the chat message.
	 */
	getMessage(): string;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player presses or releases a key.
 * 
 * @hookName keyPressed
 */
export interface KeyPressedEvent extends IPlayerEvent {
	/**
	 * @return the key code.
	 */
	getKey(): number;

	/**
	 * @return true if Ctrl is held.
	 */
	isCtrlPressed(): boolean;

	/**
	 * @return true if Alt is held.
	 */
	isAltPressed(): boolean;

	/**
	 * @return true if Shift is held.
	 */
	isShiftPressed(): boolean;

	/**
	 * @return true if Meta is held.
	 */
	isMetaPressed(): boolean;

	/**
	 * @return true if the key is being pressed down, false if released.
	 */
	keyDown(): boolean;

	/**
	 * @return array of currently held key codes.
	 */
	getKeysDown(): number[];
}

/**
 * Fired when the player clicks a mouse button.
 * 
 * @hookName mouseClicked
 */
export interface MouseClickedEvent extends IPlayerEvent {
	/**
	 * @return the mouse button index.
	 */
	getButton(): number;

	/**
	 * @return the mouse wheel scroll delta.
	 */
	getMouseWheel(): number;

	/**
	 * @return true if the button is being pressed down.
	 */
	buttonDown(): boolean;

	/**
	 * @return true if Ctrl is held.
	 */
	isCtrlPressed(): boolean;

	/**
	 * @return true if Alt is held.
	 */
	isAltPressed(): boolean;

	/**
	 * @return true if Shift is held.
	 */
	isShiftPressed(): boolean;

	/**
	 * @return true if Meta is held.
	 */
	isMetaPressed(): boolean;

	/**
	 * @return array of currently held key codes.
	 */
	getKeysDown(): number[];
}

/**
 * Fired when the player picks up experience orbs.
 * 
 * @hookName pickupXP
 */
export interface PickupXPEvent extends IPlayerEvent {
	/**
	 * @return the amount of XP picked up.
	 */
	getAmount(): number;
}

/**
 * Fired when the player levels up.
 * 
 * @hookName levelUp
 */
export interface LevelUpEvent extends IPlayerEvent {
	/**
	 * @return the number of levels gained.
	 */
	getChange(): number;
}

/**
 * Fired when the player logs out.
 * 
 * @hookName logout
 */
export interface LogoutEvent extends IPlayerEvent {}

/**
 * Fired when the player logs in.
 * 
 * @hookName login
 */
export interface LoginEvent extends IPlayerEvent {}

/**
 * Fired when the player respawns after death.
 * 
 * @hookName respawn
 */
export interface RespawnEvent extends IPlayerEvent {}

/**
 * Fired when the player changes dimensions.
 * 
 * @hookName changedDim
 */
export interface ChangedDimension extends IPlayerEvent {
	/**
	 * @return the dimension ID the player came from.
	 */
	getFromDim(): number;

	/**
	 * @return the dimension ID the player traveled to.
	 */
	getToDim(): number;
}

/**
 * Fired when a player timer triggers.
 * 
 * @hookName timer
 */
export interface TimerEvent extends IPlayerEvent {
	/**
	 * @return the timer ID.
	 */
	getId(): number;
}

/**
 * Fired when the player is attacked (before armor reduction). Cancelable.
 * 
 * @hookName attacked
 */
export interface AttackedEvent extends IPlayerEvent {
	/**
	 * @return the damage source details.
	 */
	getDamageSource(): IDamageSource;

	/**
	 * @return the attacking entity, or null.
	 */
	getSource(): IEntity;

	/**
	 * @return the raw damage amount.
	 */
	getDamage(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player takes damage (after armor reduction). Cancelable.
 * 
 * @hookName damaged
 */
export interface DamagedEvent extends IPlayerEvent {
	/**
	 * @return the damage source details.
	 */
	getDamageSource(): IDamageSource;

	/**
	 * @return the damaging entity, or null.
	 */
	getSource(): IEntity;

	/**
	 * @return the damage amount after reduction.
	 */
	getDamage(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player is about to be struck by lightning. Cancelable.
 * 
 * @hookName lightning
 */
export interface LightningEvent extends IPlayerEvent {
	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a sound is played for the player. Cancelable.
 * 
 * @hookName playSound
 */
export interface SoundEvent extends IPlayerEvent {
	/**
	 * @return the sound resource name.
	 */
	getName(): string;

	/**
	 * @return the sound pitch.
	 */
	getPitch(): number;

	/**
	 * @return the sound volume.
	 */
	getVolume(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player falls. Cancelable.
 * 
 * @hookName fall
 */
export interface FallEvent extends IPlayerEvent {
	/**
	 * @return the fall distance in blocks.
	 */
	getDistance(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player jumps.
 * 
 * @hookName jump
 */
export interface JumpEvent extends IPlayerEvent {}

/**
 * Fired when the player kills an entity.
 * 
 * @hookName kills
 */
export interface KilledEntityEvent extends IPlayerEvent {
	/**
	 * @return the killed entity.
	 */
	getEntity(): IEntityLivingBase;
}

/**
 * Fired when the player dies.
 * 
 * @hookName killed
 */
export interface DiedEvent extends IPlayerEvent {
	/**
	 * @return the damage source that killed the player.
	 */
	getDamageSource(): IDamageSource;

	/**
	 * @return the damage type string.
	 */
	getType(): string;

	/**
	 * @return the entity that killed the player, or null.
	 */
	getSource(): IEntity;
}

/**
 * Fired when the player launches a ranged weapon (e.g., bow). Cancelable.
 * 
 * @hookName rangedLaunched
 */
export interface RangedLaunchedEvent extends IPlayerEvent {
	/**
	 * @return the bow item.
	 */
	getBow(): IItemStack;

	/**
	 * @return the charge level of the bow.
	 */
	getCharge(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player attacks an entity. Cancelable.
 * 
 * @hookName attack
 */
export interface AttackEvent extends IPlayerEvent {
	/**
	 * @return the damage source details.
	 */
	getDamageSource(): IDamageSource;

	/**
	 * @return the target entity.
	 */
	getTarget(): IEntity;

	/**
	 * @return the attack damage.
	 */
	getDamage(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player deals damage to an entity (after hit). Cancelable.
 * 
 * @hookName damagedEntity
 */
export interface DamagedEntityEvent extends IPlayerEvent {
	/**
	 * @return the damage source details.
	 */
	getDamageSource(): IDamageSource;

	/**
	 * @return the damaged entity.
	 */
	getTarget(): IEntity;

	/**
	 * @return the damage dealt.
	 */
	getDamage(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player closes a container.
 * 
 * @hookName containerClosed
 */
export interface ContainerClosed extends IPlayerEvent {
	/**
	 * @return the closed container.
	 */
	getContainer(): IContainer;
}

/**
 * Fired when the player opens a container.
 * 
 * @hookName containerOpen
 */
export interface ContainerOpen extends IPlayerEvent {
	/**
	 * @return the opened container.
	 */
	getContainer(): IContainer;
}

/**
 * Fired when the player picks up an item. Cancelable.
 * 
 * @hookName pickUp
 */
export interface PickUpEvent extends IPlayerEvent {
	/**
	 * @return the picked up item.
	 */
	getItem(): IItemStack;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when items are dropped from the player's inventory (e.g., on death). Cancelable.
 * 
 * @hookName drop
 */
export interface DropEvent extends IPlayerEvent {
	/**
	 * @return the dropped items.
	 */
	getItems(): IItemStack[];

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player tosses a single item. Cancelable.
 * 
 * @hookName toss
 */
export interface TossEvent extends IPlayerEvent {
	/**
	 * @return the tossed item.
	 */
	getItem(): IItemStack;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player interacts with an entity. Cancelable.
 * 
 * @hookName interact
 */
export interface InteractEvent extends IPlayerEvent {
	/**
	 * @return the interaction type.
	 */
	getType(): number;

	/**
	 * @return the target entity.
	 */
	getTarget(): IEntity;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player right-clicks. Cancelable.
 * 
 * @hookName rightClick
 */
export interface RightClickEvent extends IPlayerEvent {
	/**
	 * @return the click type.
	 */
	getType(): number;

	/**
	 * @return the target (entity, block, or null).
	 */
	getTarget(): any;

	/**
	 * @return the player.
	 */
	getPlayer(): IPlayer;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired each tick for the player.
 * 
 * @hookName tick
 */
export interface UpdateEvent extends IPlayerEvent {}

/**
 * Fired when the player script is initialized.
 * 
 * @hookName init
 */
export interface InitEvent extends IPlayerEvent {}

/**
 * Fired when the player starts using an item (e.g., drawing a bow).
 * 
 * @hookName startItem
 */
export interface StartUsingItem extends IPlayerEvent {
	/**
	 * @return the item being used.
	 */
	getItem(): IItemStack;

	/**
	 * @return the use duration in ticks.
	 */
	getDuration(): number;
}

/**
 * Fired each tick while the player is using an item.
 * 
 * @hookName usingItem
 */
export interface UsingItem extends IPlayerEvent {
	/**
	 * @return the item being used.
	 */
	getItem(): IItemStack;

	/**
	 * @return the remaining use duration in ticks.
	 */
	getDuration(): number;
}

/**
 * Fired when the player stops using an item before completion.
 * 
 * @hookName stopItem
 */
export interface StopUsingItem extends IPlayerEvent {
	/**
	 * @return the item that was being used.
	 */
	getItem(): IItemStack;

	/**
	 * @return the remaining use duration in ticks.
	 */
	getDuration(): number;
}

/**
 * Fired when the player finishes using an item (full duration).
 * 
 * @hookName finishItem
 */
export interface FinishUsingItem extends IPlayerEvent {
	/**
	 * @return the item that was used.
	 */
	getItem(): IItemStack;

	/**
	 * @return the total use duration in ticks.
	 */
	getDuration(): number;
}

/**
 * Fired when the player breaks a block. Cancelable.
 * 
 * @hookName breakBlock
 */
export interface BreakEvent extends IPlayerEvent {
	/**
	 * @return the block being broken.
	 */
	getBlock(): IBlock;

	/**
	 * @return the experience dropped from breaking the block.
	 */
	getExp(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player uses a hoe on a block.
 * 
 * @hookName useHoe
 */
export interface UseHoeEvent extends IPlayerEvent {
	/**
	 * @return the hoe item.
	 */
	getHoe(): IItemStack;

	/**
	 * @return the X coordinate of the hoed block.
	 */
	getX(): number;

	/**
	 * @return the Y coordinate of the hoed block.
	 */
	getY(): number;

	/**
	 * @return the Z coordinate of the hoed block.
	 */
	getZ(): number;
}

/**
 * Fired when the player wakes up from a bed.
 * 
 * @hookName wakeUp
 */
export interface WakeUpEvent extends IPlayerEvent {
	/**
	 * @return true if the bed position was set as spawn.
	 */
	setSpawn(): boolean;
}

/**
 * Fired when the player sleeps in a bed.
 * 
 * @hookName sleep
 */
export interface SleepEvent extends IPlayerEvent {
	/**
	 * @return the X coordinate of the bed.
	 */
	getX(): number;

	/**
	 * @return the Y coordinate of the bed.
	 */
	getY(): number;

	/**
	 * @return the Z coordinate of the bed.
	 */
	getZ(): number;
}

/**
 * Fired when the player earns an achievement.
 * 
 * @hookName achievement
 */
export interface AchievementEvent extends IPlayerEvent {
	/**
	 * @return the achievement description.
	 */
	getDescription(): string;
}

/**
 * Fired when the player fills a bucket.
 * 
 * @hookName fillBucket
 */
export interface FillBucketEvent extends IPlayerEvent {
	/**
	 * @return the empty bucket item.
	 */
	getCurrent(): IItemStack;

	/**
	 * @return the filled bucket item.
	 */
	getFilled(): IItemStack;
}

/**
 * Fired when the player uses bonemeal on a block.
 * 
 * @hookName bonemeal
 */
export interface BonemealEvent extends IPlayerEvent {
	/**
	 * @return the block that was bonemealed.
	 */
	getBlock(): IBlock;

	/**
	 * @return the X coordinate.
	 */
	getX(): number;

	/**
	 * @return the Y coordinate.
	 */
	getY(): number;

	/**
	 * @return the Z coordinate.
	 */
	getZ(): number;
}

/**
 * Fired when the player begins charging a ranged weapon.
 * 
 * @hookName rangedCharge
 */
export interface RangedChargeEvent extends IPlayerEvent {}

/**
 * Events fired for player custom effects (add, tick, remove).
 * 
 * @hookName onEffect
 */
export interface EffectEvent extends IPlayerEvent {
	/**
	 * @return the player effect.
	 */
	getEffect(): IPlayerEffect;
}

/**
 * Fired when an effect is added to the player.
 * 
 * @hookName onEffectAdd
 */
export interface Added extends EffectEvent {}

/**
 * Fired each tick while the effect is active.
 * 
 * @hookName onEffectTick
 */
export interface Ticked extends EffectEvent {}

/**
 * Fired when an effect is removed from the player.
 * 
 * @hookName onEffectRemove
 */
export interface Removed extends EffectEvent {
	/**
	 * @return If the effect timer has ticked down to 0.
	 */
	hasTimerRunOut(): boolean;

	/**
	 * @return If the effect was removed on death.
	 */
	causedByDeath(): boolean;
}

/**
 * Events fired for profile operations (create, change, remove). Cancelable.
 * 
 * @hookName profile
 */
export interface ProfileEvent extends IPlayerEvent {
	/**
	 * @return IProfile Object of the Operation
	 */
	getProfile(): IProfile;

	/**
	 * @return Slot ID in question
	 */
	getSlot(): number;

	/**
	 * @return returns true if it occurs after the operation (not cancellable)
	 */
	isPost(): boolean;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player switches profile slots. Cancelable.
 * 
 * @hookName profileChange
 */
export interface Changed extends ProfileEvent {
	/**
	 * @return The previous slot before the switch
	 */
	getPrevSlot(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a new profile is created. Cancelable.
 * 
 * @hookName profileCreate
 */
export interface Create extends ProfileEvent {
	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a profile is removed. Cancelable.
 * 
 * @hookName profileRemove
 */
export interface Removed extends ProfileEvent {
	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

