import { IPlayer } from "./../entity/IPlayer";
import { IObject } from "./../../../../IObject";


export interface IScoreboardTeam extends IObject {
	getName(): string;

	getDisplayName(): string;

	setDisplayName(name: string): void;

	addPlayer(player: string): void;

	addPlayer(player: IPlayer): void;

	removePlayer(player: string): void;

	removePlayer(player: IPlayer): void;

	getPlayers(): string[];

	getTeamsize(): number;

	clearPlayers(): void;

	getFriendlyFire(): boolean;

	setFriendlyFire(bo: boolean): void;

	setColor(color: string): void;

	getColor(): string;

	setSeeInvisibleTeamPlayers(bo: boolean): void;

	getSeeInvisibleTeamPlayers(): boolean;

}
}
