
/**
 * Events fired during dialog interactions between a player and an NPC.
 */
export interface IDialogEvent extends IPlayerEvent {
	/**
	 * @return the dialog associated with this event.
	 */
	getDialog(): IDialog;

	/**
	 * @return the dialog's unique ID.
	 */
	getDialogId(): number;

	/**
	 * @return the selected dialog option ID.
	 */
	getOptionId(): number;
}

/**
 * Fired when a dialog is opened. Cancelable.
 * 
 * @hookName dialogOpen
 */
export interface DialogOpen extends IDialogEvent {
	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a dialog option is selected. Cancelable.
 * 
 * @hookName dialogOption
 */
export interface DialogOption extends IDialogEvent {
	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when a dialog is closed.
 * 
 * @hookName dialogClose
 */
export interface DialogClosed extends IDialogEvent {}

