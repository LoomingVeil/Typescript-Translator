
/**
 * Events fired during NPC projectile lifecycle and impacts.
 */
export interface IProjectileEvent extends ICustomNPCsEvent {
	/**
	 * @return the projectile entity.
	 */
	getProjectile(): IProjectile;

	/**
	 * @return the entity that launched this projectile.
	 */
	getSource(): IEntity;
}

/**
 * Fired each tick while the projectile exists.
 * 
 * @hookName projectileTick
 */
export interface UpdateEvent extends IProjectileEvent {}

/**
 * Fired when the projectile hits something.
 * 
 * @hookName projectileImpact
 */
export interface ImpactEvent extends IProjectileEvent {
	/**
	 * @return the impact type.
	 */
	getType(): number;

	/**
	 * @return the entity hit, or null if a block was hit.
	 */
	getEntity(): IEntity;

	/**
	 * @return the block hit, or null if an entity was hit.
	 */
	getBlock(): IBlock;
}

