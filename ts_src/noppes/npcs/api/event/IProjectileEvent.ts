import { IBlock } from "./../IBlock";
import { IEntity } from "./../entity/IEntity";
import { ICustomNPCsEvent } from "./ICustomNPCsEvent";
import { IProjectile } from "./../entity/IProjectile";


export interface IProjectileEvent extends ICustomNPCsEvent {
	getProjectile(): IProjectile;

	getSource(): IEntity;

}

export interface UpdateEvent extends IProjectileEvent {
}

export interface ImpactEvent extends IProjectileEvent {
	getType(): number;

	getEntity(): IEntity;

	getBlock(): IBlock;

}

