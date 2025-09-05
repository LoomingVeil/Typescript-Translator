import { IObject } from "./../../../../../IObject";


/**
 * All {@link IEntities} have a getType(). You can compare that result with this class's fields
 * to determine what kind of entity it is. {@link IEntity#getSurroundingEntities()}
 */
export interface IEntityType extends IObject {
	ENTITY: number;
	PLAYER: number;
	NPC: number;
	MONSTER: number;
	ANIMAL: number;
	LIVING: number;
	ITEM: number;
	PROJECTILE: number;
	PIXELMON: number;
	VILLAGER: number;
}


export const EntityType: IEntityType = {} as IEntityType;
