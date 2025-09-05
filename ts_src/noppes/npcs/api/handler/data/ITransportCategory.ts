import { IObject } from "./../../../../../IObject";
import { ITransportLocation } from "./ITransportLocation";


export interface ITransportCategory extends IObject {
	getId(): number;

	setTitle(title: string): void;

	getTitle(): string;

	addLocation(name: string): void;

	getLocation(name: string): ITransportLocation;

	removeLocation(name: string): void;

}
}
