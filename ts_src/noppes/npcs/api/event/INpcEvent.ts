import { IPlayer } from "./../entity/IPlayer";
import { IObject } from "./../../../../IObject";
import { IEntity } from "./../entity/IEntity";
import { ICustomNPCsEvent } from "./ICustomNPCsEvent";
import { IEntityLivingBase } from "./../entity/IEntityLivingBase";
import { IDialog } from "./../handler/data/IDialog";
import { ICustomNpc } from "./../entity/ICustomNpc";
import { IItemStack } from "./../item/IItemStack";
import { IDamageSource } from "./../IDamageSource";


export interface INpcEvent extends ICustomNPCsEvent {
	getNpc(): ICustomNpc;

}

export interface TimerEvent extends INpcEvent {
	getId(): number;

}

export interface CollideEvent extends INpcEvent {
	getEntity(): IEntity;

}

export interface DamagedEvent extends INpcEvent {
	getSource(): IEntity;

	getDamageSource(): IDamageSource;

	getDamage(): number;

	setDamage(damage: number): void;

	setClearTarget(bo: boolean): void;

	getClearTarget(): boolean;

	getType(): string;

}

export interface RangedLaunchedEvent extends INpcEvent {
	getTarget(): IEntityLivingBase;

	setDamage(damage: number): void;

	getDamage(): number;

}

export interface MeleeAttackEvent extends INpcEvent {
	getTarget(): IEntityLivingBase;

	setDamage(damage: number): void;

	getDamage(): number;

}

export interface SwingEvent extends INpcEvent {
	/**
	 * Can be null
	 * 
	 * @return Returns the swung item
	 */
	getItemStack(): IItemStack;

}

export interface KilledEntityEvent extends IObject {
	getEntity(): IEntityLivingBase;

}

export interface DiedEvent extends INpcEvent {
	getSource(): IEntity;

	getDamageSource(): IDamageSource;

	getType(): string;

	setDroppedItems(droppedItems: IItemStack[]): void;

	getDroppedItems(): IItemStack[];

	setExpDropped(expDropped: number): void;

	getExpDropped(): number;

}

export interface InteractEvent extends INpcEvent {
	getPlayer(): IPlayer;

}

export interface DialogEvent extends INpcEvent {
	getPlayer(): IPlayer;

	getDialog(): IDialog;

	getDialogId(): number;

	getOptionId(): number;

}

export interface DialogClosedEvent extends INpcEvent {
	getPlayer(): IPlayer;

	getDialog(): IDialog;

	getDialogId(): number;

	getOptionId(): number;

}

export interface TargetLostEvent extends INpcEvent {
	getTarget(): IEntityLivingBase;

	getNewTarget(): IEntityLivingBase;

}

export interface TargetEvent extends INpcEvent {
	setTarget(entity: IEntityLivingBase): void;

	getTarget(): IEntityLivingBase;

}

export interface UpdateEvent extends INpcEvent {
}

export interface InitEvent extends INpcEvent {
}

