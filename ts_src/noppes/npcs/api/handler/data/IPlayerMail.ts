import { IObject } from "./../../../../../IObject";
import { IQuest } from "./IQuest";
import { IItemStack } from "./../../item/IItemStack";


export interface IPlayerMail extends IObject {
	setPageText(pages: string[]): void;

	getPageText(): string[];

	getPageCount(): number;

	setSender(sender: string): void;

	getSender(): string;

	setSubject(subject: string): void;

	getSubject(): string;

	getTimePast(): number;

	getTimeSent(): number;

	hasQuest(): boolean;

	getQuest(): IQuest;

	getItems(): IItemStack[];

	setItems(items: IItemStack[]): void;

}

