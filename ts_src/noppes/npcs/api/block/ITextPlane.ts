import { IObject } from "./../../../../IObject";


export interface ITextPlane extends IObject {
	getText(): string;

	setText(text: string): void;

	getRotationX(): number;

	getRotationY(): number;

	getRotationZ(): number;

	setRotationX(x: number): void;

	setRotationY(y: number): void;

	/**
	 * @param z Default: 0.5
	 */
	setRotationZ(z: number): void;

	getOffsetX(): number;

	getOffsetY(): number;

	getOffsetZ(): number;

	setOffsetX(x: number): void;

	setOffsetY(y: number): void;

	setOffsetZ(z: number): void;

	getScale(): number;

	/**
	 * @param scale Default: 1
	 */
	setScale(scale: number): void;

}

