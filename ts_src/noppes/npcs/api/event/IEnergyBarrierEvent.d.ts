
/**
 * Events fired during energy barrier lifecycle and interactions.
 */
export interface IEnergyBarrierEvent extends ICustomNPCsEvent {
	/**
	 * @return the energy barrier entity.
	 */
	getBarrier(): IEnergyBarrier;

	/**
	 * @return the entity that owns this barrier.
	 */
	getOwner(): IEntity;
}

/**
 * Fired when an energy barrier is spawned.
 * 
 * @hookName energyBarrierSpawned
 */
export interface SpawnedEvent extends IEnergyBarrierEvent {}

/**
 * Fired each tick while the barrier exists.
 * 
 * @hookName energyBarrierTick
 */
export interface UpdateEvent extends IEnergyBarrierEvent {}

/**
 * Fired when the barrier is hit by an energy projectile.
 * 
 * @hookName energyBarrierHit
 */
export interface HitEvent extends IEnergyBarrierEvent {
	/**
	 * @return the projectile that hit the barrier.
	 */
	getProjectile(): IEnergyProjectile;

	/**
	 * @return the damage dealt.
	 */
	getDamage(): number;

	/**
	 * @param damage the new damage value.
	 */
	setDamage(damage: number): void;
}

/**
 * Fired when the barrier is destroyed.
 * 
 * @hookName energyBarrierDestroyed
 */
export interface DestroyedEvent extends IEnergyBarrierEvent {}

