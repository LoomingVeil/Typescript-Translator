import { IPlayer } from "./../entity/IPlayer";
import { ITransportLocation } from "./../handler/data/ITransportLocation";


export interface IRoleTransporter extends IRole {
	getName(): string;

	getTransportId(): number;

	unlock(player: IPlayer, location: ITransportLocation): void;

	getTransport(): ITransportLocation;

	hasTransport(): boolean;

	setTransport(location: ITransportLocation): void;

}
}
