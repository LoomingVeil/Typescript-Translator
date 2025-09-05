import { IObject } from "./../../../../IObject";
import { IEntity } from "./../entity/IEntity";
import { IWorld } from "./../IWorld";
import { IPos } from "./../IPos";


export interface ICloneHandler extends IObject {
	spawn(x: number, y: number, z: number, tab: number, name: string, world: IWorld, ignoreProtection: boolean): IEntity;

	spawn(pos: IPos, tab: number, name: string, world: IWorld, ignoreProtection: boolean): IEntity;

	spawn(x: number, y: number, z: number, tab: number, name: string, world: IWorld): IEntity;

	spawn(pos: IPos, tab: number, name: string, world: IWorld): IEntity;

	getTab(tab: number, world: IWorld): IEntity[];

	get(tab: number, name: string, world: IWorld): IEntity;

	has(tab: number, name: string): boolean;

	set(tab: number, name: string, entity: IEntity): void;

	remove(tab: number, name: string): void;

}

