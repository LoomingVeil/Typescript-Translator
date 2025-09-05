import { IObject } from "./../../../../IObject";


export interface IItemBook extends IObject {
	getText(): string[];

	setText(var1: string[]): void;

	getAuthor(): string;

	setAuthor(var1: string): void;

	getTitle(): string;

	setTitle(var1: string): void;

}

