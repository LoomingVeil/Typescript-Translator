import { IQuestInterface } from "./IQuestInterface";


export interface IQuestLocation extends IQuestInterface {
	setLocation1(loc1: string): void;

	getLocation1(): string;

	setLocation2(loc2: string): void;

	getLocation2(): string;

	setLocation3(loc3: string): void;

	getLocation3(): string;

}

