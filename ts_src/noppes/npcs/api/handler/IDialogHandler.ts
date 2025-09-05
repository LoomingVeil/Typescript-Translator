import { IObject } from "./../../../../IObject";
import { IDialog } from "./data/IDialog";

import { List } from "./../../../../missingTypes";

export interface IDialogHandler extends IObject {
	categories(): List;

	get(var1: number): IDialog;

}
}
