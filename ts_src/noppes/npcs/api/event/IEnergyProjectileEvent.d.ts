
/**
 * Events fired during energy projectile lifecycle and impacts.
 */
export interface IEnergyProjectileEvent extends ICustomNPCsEvent {
	/**
	 * @return the energy projectile entity.
	 */
	getProjectile(): IEnergyProjectile;

	/**
	 * @return the entity that fired this projectile.
	 */
	getOwner(): IEntity;
}

/**
 * Fired when an energy projectile is launched.
 * 
 * @hookName energyProjectileFired
 */
export interface FiredEvent extends IEnergyProjectileEvent {}

/**
 * Fired each tick while the projectile exists.
 * 
 * @hookName energyProjectileTick
 */
export interface UpdateEvent extends IEnergyProjectileEvent {
	getTick(): number;
}

/**
 * Fired when the projectile hits an entity.
 * 
 * @hookName energyProjectileEntityImpact
 */
export interface EntityImpactEvent extends IEnergyProjectileEvent {
	/**
	 * @return the entity that was hit.
	 */
	getTarget(): IEntity;

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
 * Fired when the projectile hits a block.
 * 
 * @hookName energyProjectileBlockImpact
 */
export interface BlockImpactEvent extends IEnergyProjectileEvent {
	/**
	 * @return the block that was hit.
	 */
	getBlock(): IBlock;
}

/**
 * Fired when the projectile expires without hitting anything.
 * 
 * @hookName energyProjectileExpired
 */
export interface ExpiredEvent extends IEnergyProjectileEvent {}

