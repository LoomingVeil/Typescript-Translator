import { IObject } from "./../../../../../IObject";
import { IFramePart } from "./IFramePart";


export interface IFrame extends IObject {
	getParts(): IFramePart[];

	addPart(partConfig: IFramePart): IFrame;

	removePart(partName: string): IFrame;

	removePart(partId: number): IFrame;

	clearParts(): IFrame;

	getDuration(): number;

	setDuration(duration: number): IFrame;

	isCustomized(): boolean;

	setCustomized(customized: boolean): IFrame;

	getSpeed(): number;

	setSpeed(speed: number): IFrame;

	smoothType(): number;

	setSmooth(smooth: number): IFrame;

}

