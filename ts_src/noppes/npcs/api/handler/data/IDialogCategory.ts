import { IObject } from "./../../../../../IObject";
import { IDialog } from "./IDialog";

import { List } from "./../../../../../missingTypes";

export interface IDialogCategory extends IObject {
	dialogs(): List;

	getName(): string;

	create(): IDialog;

	getId(): number;

}

