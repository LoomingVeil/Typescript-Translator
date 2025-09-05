import { IPlayer } from "./../entity/IPlayer";
import { IBlock } from "./../IBlock";
import { IEntity } from "./../entity/IEntity";
import { IPlayerEffect } from "./../handler/data/IPlayerEffect";
import { ICustomNPCsEvent } from "./ICustomNPCsEvent";
import { IEntityLivingBase } from "./../entity/IEntityLivingBase";
import { IItemStack } from "./../item/IItemStack";
import { IDamageSource } from "./../IDamageSource";
import { IContainer } from "./../IContainer";
import { IProfile } from "./../handler/data/IProfile";

import { ProfileEvent } from "./../../../../missingTypes";
import { EffectEvent } from "./../../../../missingTypes";

export interface IPlayerEvent extends ICustomNPCsEvent {
	getPlayer(): IPlayer;

}

export interface ChatEvent extends IPlayerEvent {
	setMessage(message: string): void;

	getMessage(): string;

}

export interface KeyPressedEvent extends IPlayerEvent {
	getKey(): number;

	isCtrlPressed(): boolean;

	isAltPressed(): boolean;

	isShiftPressed(): boolean;

	isMetaPressed(): boolean;

	keyDown(): boolean;

	getKeysDown(): number[];

}

export interface MouseClickedEvent extends IPlayerEvent {
	getButton(): number;

	getMouseWheel(): number;

	buttonDown(): boolean;

	isCtrlPressed(): boolean;

	isAltPressed(): boolean;

	isShiftPressed(): boolean;

	isMetaPressed(): boolean;

	getKeysDown(): number[];

}

export interface PickupXPEvent extends IPlayerEvent {
	getAmount(): number;

}

export interface LevelUpEvent extends IPlayerEvent {
	getChange(): number;

}

export interface LogoutEvent extends IPlayerEvent {
}

export interface LoginEvent extends IPlayerEvent {
}

export interface RespawnEvent extends IPlayerEvent {
}

export interface ChangedDimension extends IPlayerEvent {
	getFromDim(): number;

	getToDim(): number;

}

export interface TimerEvent extends IPlayerEvent {
	getId(): number;

}

export interface AttackedEvent extends IPlayerEvent {
	getDamageSource(): IDamageSource;

	getSource(): IEntity;

	getDamage(): number;

}

export interface DamagedEvent extends IPlayerEvent {
	getDamageSource(): IDamageSource;

	getSource(): IEntity;

	getDamage(): number;

}

export interface LightningEvent extends IPlayerEvent {
}

export interface SoundEvent extends IPlayerEvent {
	getName(): string;

	getPitch(): number;

	getVolume(): number;

}

export interface FallEvent extends IPlayerEvent {
	getDistance(): number;

}

export interface JumpEvent extends IPlayerEvent {
}

export interface KilledEntityEvent extends IPlayerEvent {
	getEntity(): IEntityLivingBase;

}

export interface DiedEvent extends IPlayerEvent {
	getDamageSource(): IDamageSource;

	getType(): string;

	getSource(): IEntity;

}

export interface RangedLaunchedEvent extends IPlayerEvent {
	getBow(): IItemStack;

	getCharge(): number;

}

export interface AttackEvent extends IPlayerEvent {
	getDamageSource(): IDamageSource;

	getTarget(): IEntity;

	getDamage(): number;

}

export interface DamagedEntityEvent extends IPlayerEvent {
	getDamageSource(): IDamageSource;

	getTarget(): IEntity;

	getDamage(): number;

}

export interface ContainerClosed extends IPlayerEvent {
	getContainer(): IContainer;

}

export interface ContainerOpen extends IPlayerEvent {
	getContainer(): IContainer;

}

export interface PickUpEvent extends IPlayerEvent {
	getItem(): IItemStack;

}

export interface DropEvent extends IPlayerEvent {
	getItems(): IItemStack[];

}

export interface TossEvent extends IPlayerEvent {
	getItem(): IItemStack;

}

export interface InteractEvent extends IPlayerEvent {
	getType(): number;

	getTarget(): IEntity;

}

export interface RightClickEvent extends IPlayerEvent {
	getType(): number;

	getTarget(): any;

	getPlayer(): IPlayer;

}

export interface UpdateEvent extends IPlayerEvent {
}

export interface InitEvent extends IPlayerEvent {
}

export interface StartUsingItem extends IPlayerEvent {
	getItem(): IItemStack;

	getDuration(): number;

}

export interface UsingItem extends IPlayerEvent {
	getItem(): IItemStack;

	getDuration(): number;

}

export interface StopUsingItem extends IPlayerEvent {
	getItem(): IItemStack;

	getDuration(): number;

}

export interface FinishUsingItem extends IPlayerEvent {
	getItem(): IItemStack;

	getDuration(): number;

}

export interface BreakEvent extends IPlayerEvent {
	getBlock(): IBlock;

	getExp(): number;

}

export interface UseHoeEvent extends IPlayerEvent {
	getHoe(): IItemStack;

	getX(): number;

	getY(): number;

	getZ(): number;

}

export interface WakeUpEvent extends IPlayerEvent {
	setSpawn(): boolean;

}

export interface SleepEvent extends IPlayerEvent {
	getX(): number;

	getY(): number;

	getZ(): number;

}

export interface AchievementEvent extends IPlayerEvent {
	getDescription(): string;

}

export interface FillBucketEvent extends IPlayerEvent {
	getCurrent(): IItemStack;

	getFilled(): IItemStack;

}

export interface BonemealEvent extends IPlayerEvent {
	getBlock(): IBlock;

	getX(): number;

	getY(): number;

	getZ(): number;

}

export interface RangedChargeEvent extends IPlayerEvent {
}

export interface EffectEvent extends IPlayerEvent {
	getEffect(): IPlayerEffect;

}

export interface Added extends EffectEvent {
}

export interface Ticked extends EffectEvent {
}

export interface Removed extends EffectEvent {
	/**
	 * @return If the effect timer has ticked down to 0.
	 */
	hasTimerRunOut(): boolean;

	/**
	 * @return If the effect was removed on death.
	 */
	causedByDeath(): boolean;

}

export interface ProfileEvent extends IPlayerEvent {
	/**
	 * @return IProfile Object of the Operation
	 */
	getProfile(): IProfile;

	/**
	 * @return Slot ID in question
	 */
	getSlot(): number;

	/**
	 * @return returns true if it occurs after the operation (not cancellable)
	 */
	isPost(): boolean;

}

export interface Changed extends ProfileEvent {
	/**
	 * @return The previous slot before the switch
	 */
	getPrevSlot(): number;

}

export interface Create extends ProfileEvent {
}

export interface Removed extends ProfileEvent {
}

