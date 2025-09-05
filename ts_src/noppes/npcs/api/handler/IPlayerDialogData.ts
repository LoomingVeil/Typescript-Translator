import { IObject } from "./../../../../IObject";


export interface IPlayerDialogData extends IObject {
	hasReadDialog(id: number): boolean;

	readDialog(id: number): void;

	unreadDialog(id: number): void;

}
}
