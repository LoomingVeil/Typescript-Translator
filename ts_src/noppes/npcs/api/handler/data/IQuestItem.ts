import { IQuestInterface } from "./IQuestInterface";


export interface IQuestItem extends IQuestInterface {
	setLeaveItems(leaveItems: boolean): void;

	getLeaveItems(): boolean;

	setIgnoreDamage(ignoreDamage: boolean): void;

	getIgnoreDamage(): boolean;

	setIgnoreNbt(ignoreNbt: boolean): void;

	getIgnoreNbt(): boolean;

}

