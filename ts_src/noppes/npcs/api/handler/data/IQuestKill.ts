import { IQuestInterface } from "./IQuestInterface";


export interface IQuestKill extends IQuestInterface {
	setTargetType(type: number): void;

	getTargetType(): number;

}

