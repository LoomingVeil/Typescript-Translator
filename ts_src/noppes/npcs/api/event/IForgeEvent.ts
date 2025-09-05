import { IEntity } from "./../entity/IEntity";
import { IWorld } from "./../IWorld";
import { ICustomNPCsEvent } from "./ICustomNPCsEvent";

import { Event } from "./../../../../missingTypes";

export interface IForgeEvent extends ICustomNPCsEvent {
	getEvent(): Event;

}

export interface WorldEvent extends IForgeEvent {
	getWorld(): IWorld;

}

export interface EntityEvent extends IForgeEvent {
	getEntity(): IEntity;

}

export interface InitEvent extends IForgeEvent {
}

