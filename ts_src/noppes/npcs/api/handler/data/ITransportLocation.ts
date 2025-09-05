import { IObject } from "./../../../../../IObject";
import { IPos } from "./../../IPos";


export interface ITransportLocation extends IObject {
	getId(): number;

	setName(name: string): void;

	getName(): string;

	setDimension(dimension: number): void;

	getDimension(): number;

	setType(type: number): void;

	getType(): number;

	setPosition(x: number, y: number, z: number): void;

	setPosition(pos: IPos): void;

	getX(): number;

	getY(): number;

	getZ(): number;

	save(): void;

}
}
