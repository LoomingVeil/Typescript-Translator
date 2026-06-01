
/**
 * Fired a custom projectile hits a mob or entity.
 * 
 * @hookName customProjectileImpact
 */
export interface ICustomProjectileImpactEvent extends IObject {
	getHookName(): string;

	getProjectile(): ICustomProjectile;

	getID(): number;

	getTarget(): IEntity;

	getBlock(): IBlock;

	didShatter(): boolean;

	hitEntity(): boolean;

	hitBlock(): boolean;
}

