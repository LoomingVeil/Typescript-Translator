import { IObject } from "./../../../../IObject";

import { NBTTagCompound } from "./../../../../missingTypes";

export interface ICustomOverlayComponent extends IObject {
	getID(): number;

	setID(id: number): ICustomOverlayComponent;

	getPosX(): number;

	getPosY(): number;

	setPos(x: number, y: number): ICustomOverlayComponent;

	getAlignment(): number;

	setAlignment(alignment: number): void;

	getColor(): number;

	setColor(color: number): ICustomOverlayComponent;

	getAlpha(): number;

	setAlpha(alpha: number): void;

	getRotation(): number;

	setRotation(rotation: number): void;

	toNBT(nbt: NBTTagCompound): NBTTagCompound;

	fromNBT(nbt: NBTTagCompound): ICustomOverlayComponent;

}

