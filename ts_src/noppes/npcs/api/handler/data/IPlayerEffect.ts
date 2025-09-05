import { IPlayer } from "./../../entity/IPlayer";
import { IObject } from "./../../../../../IObject";


export interface IPlayerEffect extends IObject {
	kill(): void;

	getId(): number;

	getDuration(): number;

	setDuration(duration: number): void;

	getLevel(): number;

	setLevel(level: number): void;

	getName(): string;

	performEffect(player: IPlayer): void;

	getIndex(): number;

	setIndex(index: number): void;

}

