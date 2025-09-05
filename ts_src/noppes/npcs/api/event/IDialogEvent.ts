import { IDialog } from "./../handler/data/IDialog";
import { IPlayerEvent } from "./IPlayerEvent";


export interface IDialogEvent extends IPlayerEvent {
	getDialog(): IDialog;

}

export interface DialogOpen extends IDialogEvent {
}

export interface DialogOption extends IDialogEvent {
}

export interface DialogClosed extends IDialogEvent {
}

