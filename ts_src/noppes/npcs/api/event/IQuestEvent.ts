import { IQuest } from "./../handler/data/IQuest";
import { IItemStack } from "./../item/IItemStack";


export interface IQuestEvent extends IPlayerEvent {
	getQuest(): IQuest;

	export interface QuestCompletedEvent extends IQuestEvent {
	}
	export interface QuestStartEvent extends IQuestEvent {
	}
	export interface QuestTurnedInEvent extends IQuestEvent {
		setExpReward(expReward: number): void;

		setItemRewards(itemRewards: IItemStack[]): void;

		getExpReward(): number;

		getItemRewards(): IItemStack[];

	}
}
}
