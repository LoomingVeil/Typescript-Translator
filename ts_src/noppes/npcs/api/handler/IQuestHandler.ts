import { IObject } from "./../../../../IObject";
import { IQuest } from "./data/IQuest";

import { List } from "./../../../../missingTypes";

export interface IQuestHandler extends IObject {
	categories(): List;

	get(var1: number): IQuest;

}

