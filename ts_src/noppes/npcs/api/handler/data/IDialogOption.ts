import { IObject } from "./../../../../../IObject";


export interface IDialogOption extends IObject {
	getSlot(): number;

	getName(): string;

	getType(): number;

}

