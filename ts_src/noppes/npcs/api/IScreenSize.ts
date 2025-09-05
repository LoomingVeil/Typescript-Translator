import { IObject } from "./../../../IObject";


export interface IScreenSize extends IObject {
	getWidth(): number;

	getHeight(): number;

	getWidthPercent(percent: number): number;

	getHeightPercent(percent: number): number;

}

