import { IObject } from "./../../../../../IObject";
import { IEntity } from "./../../entity/IEntity";
import { IPos } from "./../../IPos";


export interface ISound extends IObject {
	setEntity(entity: IEntity): void;

	getEntity(): IEntity;

	setRepeat(repeat: boolean): void;

	repeats(): boolean;

	setRepeatDelay(delay: number): void;

	getRepeatDelay(): number;

	setVolume(volume: number): void;

	getVolume(): number;

	setPitch(pitch: number): void;

	getPitch(): number;

	setPosition(pos: IPos): void;

	setPosition(x: number, y: number, z: number): void;

	getX(): number;

	getY(): number;

	getZ(): number;

}

