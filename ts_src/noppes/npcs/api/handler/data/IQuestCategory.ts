import { IObject } from "./../../../../../IObject";
import { IQuest } from "./IQuest";

import { List } from "./../../../../../missingTypes";

export interface IQuestCategory extends IObject {
	quests(): List;

	getName(): string;

	create(): IQuest;

	getId(): number;

}

