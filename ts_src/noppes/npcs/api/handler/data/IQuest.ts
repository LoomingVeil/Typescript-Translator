import { IPlayer } from "./../../entity/IPlayer";
import { IQuestInterface } from "./IQuestInterface";
import { IQuestObjective } from "./IQuestObjective";
import { IObject } from "./../../../../../IObject";
import { IQuestCategory } from "./IQuestCategory";
import { IPartyOptions } from "./IPartyOptions";
import { IProfileOptions } from "./IProfileOptions";
import { IContainer } from "./../../IContainer";


export interface IQuest extends IObject {
	getId(): number;

	getName(): string;

	setName(var1: string): void;

	getType(): number;

	setType(var1: number): void;

	getLogText(): string;

	setLogText(var1: string): void;

	getCompleteText(): string;

	setCompleteText(var1: string): void;

	getNextQuest(): IQuest;

	setNextQuest(var1: IQuest): void;

	getObjectives(var1: IPlayer): IQuestObjective[];

	getCategory(): IQuestCategory;

	getRewards(): IContainer;

	getNpcName(): string;

	setNpcName(var1: string): void;

	save(): void;

	getIsRepeatable(): boolean;

	getTimeUntilRepeat(player: IPlayer): number;

	setRepeatType(type: number): void;

	getRepeatType(): number;

	getQuestInterface(): IQuestInterface;

	getPartyOptions(): IPartyOptions;

	getProfileOptions(): IProfileOptions;

	getCustomCooldown(): number;

	setCustomCooldown(newCooldown: number): void;

}

