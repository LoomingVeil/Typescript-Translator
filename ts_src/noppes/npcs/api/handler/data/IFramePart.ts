import { IObject } from "./../../../../../IObject";


export interface IFramePart extends IObject {
	getName(): string;

	getPartId(): number;

	setPart(name: string): IFramePart;

	setPart(partId: number): IFramePart;

	getRotations(): number[];

	setRotations(rotation: number[]): IFramePart;

	getPivots(): number[];

	setPivots(pivot: number[]): IFramePart;

	isCustomized(): boolean;

	setCustomized(customized: boolean): IFramePart;

	getSpeed(): number;

	setSpeed(speed: number): IFramePart;

	isSmooth(): number;

	setSmooth(smooth: number): IFramePart;

}
}
