
/**
 * Events related to NPC ability execution.
 * These events are fired during the ability lifecycle.
 */
export interface IAbilityEvent extends INpcEvent {
	/**
	 * Get the entity executing the ability (NPC or Player).
	 * 
	 * @return the entity executing the ability
	 */
	getEntity(): IEntityLivingBase;

	/**
	 * Get the player executing the ability, or null if the caster is an NPC.
	 * 
	 * @return the player executing the ability, or null if NPC
	 */
	getPlayer(): IPlayer;

	/**
	 * Whether the entity executing the ability is an NPC.
	 * 
	 * @return true if the executor is an NPC
	 */
	isNPC(): boolean;

	/**
	 * Get the ability involved in this event.
	 * 
	 * @return the ability being executed
	 */
	getAbility(): IAbility;

	/**
	 * Get the target of the ability, or null if no target.
	 * 
	 * @return the current target entity
	 */
	getTarget(): IEntityLivingBase;
}

/**
 * Fired when an ability starts executing (enters WINDUP phase).
 * Canceling prevents the ability from starting.
 */
export interface StartEvent extends IAbilityEvent {
	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when an ability enters the ACTIVE phase and performs its effect.
 * Canceling prevents the ability effect from occurring.
 */
export interface ExecuteEvent extends IAbilityEvent {
	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when an ability is interrupted by damage.
 */
export interface InterruptEvent extends IAbilityEvent {
	/**
	 * Get the damage source that caused the interruption.
	 * 
	 * @return the damage source
	 */
	getDamageSource(): IDamageSource;

	/**
	 * Get the amount of damage that caused the interruption.
	 * 
	 * @return the final damage dealt
	 */
	getDamage(): number;
}

/**
 * Fired when an ability completes its full execution cycle.
 */
export interface CompleteEvent extends IAbilityEvent {}

/**
 * Fired when a toggle ability is switched ON or OFF.
 * Canceling prevents the toggle from changing state.
 */
export interface ToggleEvent extends IAbilityEvent {
	isTogglingOn(): boolean;

	getOldState(): number;

	getNewState(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired every 10 ticks for each active toggle ability.
 * Scripts can call setEnabled(false) to force-deactivate.
 */
export interface ToggleUpdateEvent extends IAbilityEvent {
	getTick(): number;

	getState(): number;

	isEnabled(): boolean;

	setEnabled(enabled: boolean): void;
}

/**
 * Fired when an ability hits an entity with damage.
 * Canceling this event prevents the damage from being applied.
 */
export interface HitEvent extends IAbilityEvent {
	/**
	 * Get the entity that was hit by the ability.
	 * 
	 * @return the entity that was hit
	 */
	getHitEntity(): IEntityLivingBase;

	/**
	 * Get the damage amount.
	 * 
	 * @return the damage amount
	 */
	getDamage(): number;

	/**
	 * Set the damage amount. Allows scripts to modify damage.
	 * 
	 * @param damage the new damage amount
	 */
	setDamage(damage: number): void;

	/**
	 * Get the horizontal knockback amount.
	 * 
	 * @return the knockback strength
	 */
	getKnockback(): number;

	/**
	 * Set the horizontal knockback amount.
	 * 
	 * @param knockback the new knockback strength
	 */
	setKnockback(knockback: number): void;

	/**
	 * Get the vertical knockback (upward force) amount.
	 * 
	 * @return the upward knockback component
	 */
	getKnockbackUp(): number;

	/**
	 * Set the vertical knockback (upward force) amount.
	 * 
	 * @param knockbackUp the new upward knockback component
	 */
	setKnockbackUp(knockbackUp: number): void;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired every tick while an ability is executing.
 * Provides the current phase and tick count.
 */
export interface TickEvent extends IAbilityEvent {
	/**
	 * Get the current phase of the ability.
	 * 0 = IDLE, 1 = WINDUP, 2 = ACTIVE, 3 = DAZED, 4 = BURST_DELAY
	 * 
	 * @return the current ability phase (0=IDLE, 1=WINDUP, 2=ACTIVE, 3=DAZED, 4=BURST_DELAY)
	 */
	getAbilityPhase(): number;

	/**
	 * Get the current tick count within the phase.
	 * 
	 * @return the current tick within the phase
	 */
	getTick(): number;
}

