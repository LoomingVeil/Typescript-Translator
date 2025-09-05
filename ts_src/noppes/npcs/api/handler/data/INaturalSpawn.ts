import { IObject } from "./../../../../../IObject";
import { IEntity } from "./../../entity/IEntity";
import { IWorld } from "./../../IWorld";


export interface INaturalSpawn extends IObject {
	setName(name: string): void;

	getName(): string;

	setEntity(entity: IEntity, slot: number): void;

	getEntity(world: IWorld, slot: number): IEntity;

	getSlots(): number[];

	setWeight(weight: number): void;

	getWeight(): number;

	setMinHeight(height: number): void;

	getMinHeight(): number;

	setMaxHeight(height: number): void;

	getMaxHeight(): number;

	spawnsLikeAnimal(spawns: boolean): void;

	spawnsLikeAnimal(): boolean;

	spawnsLikeMonster(spawns: boolean): void;

	spawnsLikeMonster(): boolean;

	spawnsInLiquid(spawns: boolean): void;

	spawnsInLiquid(): boolean;

	spawnsInAir(spawns: boolean): void;

	spawnsInAir(): boolean;

	getBiomes(): string[];

	setBiomes(biomes: string[]): void;

}

