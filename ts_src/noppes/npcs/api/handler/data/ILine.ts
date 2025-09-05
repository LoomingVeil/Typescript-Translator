import { IEntityLivingBase } from "./../../entity/IEntityLivingBase";
import { IObject } from "./../../../../../IObject";


export interface ILine extends IObject {
	formatTarget(entityLivingBase: IEntityLivingBase): ILine;

	getText(): string;

	setText(text: string): void;

	getSound(): string;

	setSound(sound: string): void;

	hideText(hide: boolean): void;

	hideText(): boolean;

}

