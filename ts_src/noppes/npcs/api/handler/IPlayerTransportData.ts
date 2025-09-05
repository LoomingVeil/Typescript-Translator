import { IObject } from "./../../../../IObject";
import { ITransportLocation } from "./data/ITransportLocation";


export interface IPlayerTransportData extends IObject {
	hasTransport(id: number): boolean;

	addTransport(id: number): void;

	addTransport(location: ITransportLocation): void;

	getTransport(id: number): ITransportLocation;

	getTransports(): ITransportLocation[];

	removeTransport(id: number): void;

}

