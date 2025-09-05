import { IObject } from "./../../../../IObject";


export interface IScoreboardObjective extends IObject {
	getName(): string;

	getDisplayName(): string;

	setDisplayName(name: string): void;

	getCriteria(): string;

	isReadyOnly(): boolean;

}

