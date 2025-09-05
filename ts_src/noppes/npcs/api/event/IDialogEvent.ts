import { IDialog } from "./../handler/data/IDialog";


export interface IDialogEvent extends IPlayerEvent {
	getDialog(): IDialog;

	export interface DialogOpen extends IDialogEvent {
	}
	export interface DialogOption extends IDialogEvent {
	}
	export interface DialogClosed extends IDialogEvent {
	}
}
}
