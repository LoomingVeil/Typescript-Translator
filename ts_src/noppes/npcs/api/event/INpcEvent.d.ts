
/**
 * Events fired for CustomNPC entities during their lifecycle and interactions.
 */
export interface INpcEvent extends ICustomNPCsEvent {
	/**
	 * @return the NPC associated with this event.
	 */
	getNpc(): ICustomNpc;
}

/**
 * Fired when an NPC timer triggers.
 * 
 * @hookName timer
 */
export interface TimerEvent extends INpcEvent {
	/**
	 * @return the timer ID.
	 */
	getId(): number;
}

/**
 * Fired when an entity collides with the NPC.
 * 
 * @hookName collide
 */
export interface CollideEvent extends INpcEvent {
	/**
	 * @return the colliding entity.
	 */
	getEntity(): IEntity;
}

/**
 * Fired when the NPC takes damage. Cancelable.
 * 
 * @hookName damaged
 */
export interface DamagedEvent extends INpcEvent {
	/**
	 * @return the entity that caused the damage, or null.
	 */
	getSource(): IEntity;

	/**
	 * @return the damage source details.
	 */
	getDamageSource(): IDamageSource;

	/**
	 * @return the damage amount.
	 */
	getDamage(): number;

	/**
	 * @param damage the new damage amount.
	 */
	setDamage(damage: number): void;

	/**
	 * @param bo whether to clear the NPC's current target after damage.
	 */
	setClearTarget(bo: boolean): void;

	/**
	 * @return whether the NPC's target will be cleared after damage.
	 */
	getClearTarget(): boolean;

	/**
	 * @return the damage type string.
	 */
	getType(): string;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the NPC launches a ranged attack. Cancelable.
 * 
 * @hookName rangedLaunched
 */
export interface RangedLaunchedEvent extends INpcEvent {
	/**
	 * @return the target entity.
	 */
	getTarget(): IEntityLivingBase;

	/**
	 * @param damage the new ranged damage.
	 */
	setDamage(damage: number): void;

	/**
	 * @return the ranged damage.
	 */
	getDamage(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the NPC performs a melee attack. Cancelable.
 * 
 * @hookName meleeAttack
 */
export interface MeleeAttackEvent extends INpcEvent {
	/**
	 * @return the target entity.
	 */
	getTarget(): IEntityLivingBase;

	/**
	 * @param damage the new melee damage.
	 */
	setDamage(damage: number): void;

	/**
	 * @return the melee damage.
	 */
	getDamage(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the NPC swings its weapon.
 * 
 * @hookName meleeSwing
 */
export interface SwingEvent extends INpcEvent {
	/**
	 * Can be null
	 * 
	 * @return Returns the swung item
	 */
	getItemStack(): IItemStack;
}

/**
 * Fired when the NPC kills an entity.
 * 
 * @hookName kills
 */
export interface KilledEntityEvent extends IObject {
	/**
	 * @return the entity that was killed.
	 */
	getEntity(): IEntityLivingBase;
}

/**
 * Fired when the NPC dies. Cancelable.
 * 
 * @hookName killed
 */
export interface DiedEvent extends INpcEvent {
	/**
	 * @return the entity that killed this NPC, or null.
	 */
	getSource(): IEntity;

	/**
	 * @return the damage source details.
	 */
	getDamageSource(): IDamageSource;

	/**
	 * @return the damage type string.
	 */
	getType(): string;

	/**
	 * @param droppedItems the items to drop on death.
	 */
	setDroppedItems(droppedItems: IItemStack[]): void;

	/**
	 * @return the items dropped on death.
	 */
	getDroppedItems(): IItemStack[];

	/**
	 * @param expDropped the experience to drop on death.
	 */
	setExpDropped(expDropped: number): void;

	/**
	 * @return the experience dropped on death.
	 */
	getExpDropped(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a player interacts with the NPC. Cancelable.
 * 
 * @hookName interact
 */
export interface InteractEvent extends INpcEvent {
	/**
	 * @return the interacting player.
	 */
	getPlayer(): IPlayer;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a dialog opens with the NPC. Cancelable.
 * 
 * @hookName dialog
 */
export interface DialogEvent extends INpcEvent {
	/**
	 * @return the interacting player.
	 */
	getPlayer(): IPlayer;

	/**
	 * @return the dialog.
	 */
	getDialog(): IDialog;

	/**
	 * @return the dialog ID.
	 */
	getDialogId(): number;

	/**
	 * @return the selected option ID.
	 */
	getOptionId(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a dialog with the NPC is closed.
 * 
 * @hookName dialogClosed
 */
export interface DialogClosedEvent extends INpcEvent {
	/**
	 * @return the player who closed the dialog.
	 */
	getPlayer(): IPlayer;

	/**
	 * @return the dialog.
	 */
	getDialog(): IDialog;

	/**
	 * @return the dialog ID.
	 */
	getDialogId(): number;

	/**
	 * @return the selected option ID.
	 */
	getOptionId(): number;
}

/**
 * Fired when the NPC loses its current target. Cancelable.
 * 
 * @hookName targetLost
 */
export interface TargetLostEvent extends INpcEvent {
	/**
	 * @return the target being lost.
	 */
	getTarget(): IEntityLivingBase;

	/**
	 * @return the new target, or null.
	 */
	getNewTarget(): IEntityLivingBase;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the NPC acquires a new target. Cancelable.
 * 
 * @hookName target
 */
export interface TargetEvent extends INpcEvent {
	/**
	 * @param entity the new target to set.
	 */
	setTarget(entity: IEntityLivingBase): void;

	/**
	 * @return the current target.
	 */
	getTarget(): IEntityLivingBase;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired each tick for the NPC.
 * 
 * @hookName tick
 */
export interface UpdateEvent extends INpcEvent {}

/**
 * Fired when the NPC is initialized.
 * 
 * @hookName init
 */
export interface InitEvent extends INpcEvent {}

