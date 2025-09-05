import { IObject } from "./../../../../IObject";
import { IQuest } from "./data/IQuest";


export interface IPlayerQuestData extends IObject {
	getTrackedQuest(): IQuest;

	startQuest(id: number): void;

	finishQuest(id: number): void;

	stopQuest(id: number): void;

	removeQuest(id: number): void;

	hasFinishedQuest(id: number): boolean;

	hasActiveQuest(id: number): boolean;

	getActiveQuests(): IQuest[];

	getFinishedQuests(): IQuest[];

	getLastCompletedTime(id: number): number;

	setLastCompletedTime(id: number, time: number): void;

}

