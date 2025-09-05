import { IObject } from "./../../../IObject";
import { IEntity } from "./entity/IEntity";

import { DamageSource } from "./../../../missingTypes";

export interface IDamageSource extends IObject {
	/**
	 * @return The damage type of the damage source as a string. Ex: "lava", "explosion", "magic", "outOfWorld", etc.
	 */
	getType(): string;

	isUnblockable(): boolean;

	isProjectile(): boolean;

	/**
	 * @return The entity source of where the damage source originated. If a player was shot by an arrow from a skeleton, this would return an IEntity object of the skeleton.
	 */
	getTrueSource(): IEntity;

	/**
	 * @return The entity source of where the damage source originated. If a player was shot by an arrow from a skeleton, this would return an IEntity object of the arrow.
	 */
	getImmediateSource(): IEntity;

	/**
	 * @return An obfuscated MC damage source object.
	 */
	getMCDamageSource(): DamageSource;

}
}
