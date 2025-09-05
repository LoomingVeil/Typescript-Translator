import { IPlayer } from "./../entity/IPlayer";
import { IEntity } from "./../entity/IEntity";
import { IItemCustomizable } from "./../item/IItemCustomizable";
import { IItemStack } from "./../item/IItemStack";
import { ICustomNPCsEvent } from "./ICustomNPCsEvent";


export interface IItemEvent extends ICustomNPCsEvent {
	getItem(): IItemCustomizable;

}

export interface InitEvent extends IItemEvent {
}

export interface UpdateEvent extends IItemEvent {
	getEntity(): IEntity;

}

export interface TossedEvent extends IItemEvent {
	getEntity(): IEntity;

	getPlayer(): IPlayer;

}

export interface PickedUpEvent extends IItemEvent {
	getPlayer(): IPlayer;

}

export interface SpawnEvent extends IItemEvent {
	getEntity(): IEntity;

}

export interface InteractEvent extends IItemEvent {
	getType(): number;

	getTarget(): IEntity;

	getPlayer(): IPlayer;

}

export interface RightClickEvent extends IItemEvent {
	getType(): number;

	getTarget(): any;

	getPlayer(): IPlayer;

}

export interface AttackEvent extends IItemEvent {
	getType(): number;

	getTarget(): IEntity;

	getSwingingEntity(): IEntity;

}

export interface StartUsingItem extends IItemEvent {
	getPlayer(): IPlayer;

	getDuration(): number;

}

export interface UsingItem extends IItemEvent {
	getPlayer(): IPlayer;

	getDuration(): number;

}

export interface StopUsingItem extends IItemEvent {
	getPlayer(): IPlayer;

	getDuration(): number;

}

export interface FinishUsingItem extends IItemEvent {
	getPlayer(): IPlayer;

	getDuration(): number;

}

export interface BreakItem extends IItemEvent {
	getBrokenStack(): IItemStack;

	getPlayer(): IPlayer;

}

export interface RepairItem extends IItemEvent {
	getLeft(): IItemStack;

	getRight(): IItemStack;

	getOutput(): IItemStack;

	getAnvilBreakChance(): number;

}

