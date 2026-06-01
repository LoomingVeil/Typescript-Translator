
/**
 * Custom projectile update.
 * 
 * @hookName customProjectileTick
 */
export interface ICustomProjectileTickEvent extends IObject {
	getHookName(): string;

	getProjectile(): ICustomProjectile;

	getID(): number;
}

