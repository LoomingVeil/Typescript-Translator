import { IPlayer } from "./../../entity/IPlayer";
import { IObject } from "./../../../../../IObject";
import { ICustomNpc } from "./../../entity/ICustomNpc";


export interface IFaction extends IObject {
	getId(): number;

	getName(): string;

	setName(name: string): void;

	setDefaultPoints(var1: number): void;

	getDefaultPoints(): number;

	setFriendlyPoints(p: number): void;

	getFriendlyPoints(): number;

	setNeutralPoints(p: number): void;

	getNeutralPoints(): number;

	setColor(c: number): void;

	getColor(): number;

	playerStatus(player: IPlayer): number;

	isAggressiveToNpc(npc: ICustomNpc): boolean;

	getIsHidden(): boolean;

	setIsHidden(hidden: boolean): void;

	isPassive(): boolean;

	setIsPassive(passive: boolean): void;

	attackedByMobs(): boolean;

	setAttackedByMobs(attacked: boolean): void;

	isEnemyFaction(faction: IFaction): boolean;

	getEnemyFactions(): IFaction[];

	addEnemyFaction(faction: IFaction): void;

	removeEnemyFaction(faction: IFaction): void;

	save(): void;

}
}
