import { IPlayer } from "./../entity/IPlayer";
import { IEntityLivingBase } from "./../entity/IEntityLivingBase";
import { IJob } from "./IJob";
import { IWorld } from "./../IWorld";
import { IPos } from "./../IPos";


export interface IJobSpawner extends IJob {
	spawnEntity(number: number): IEntityLivingBase;

	getEntity(number: number, x: number, y: number, z: number, world: IWorld): IEntityLivingBase;

	getEntity(number: number, pos: IPos, world: IWorld): IEntityLivingBase;

	setEntity(number: number, entityLivingBase: IEntityLivingBase): void;

	/**
	 * Removes all spawned entities
	 */
	removeAllSpawned(): void;

	getNearbySpawned(): IEntityLivingBase[];

	hasPixelmon(): boolean;

	isEmpty(): boolean;

	isOnCooldown(player: IPlayer): boolean;

}

