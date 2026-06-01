
/**
 * Tracks which dialogs a player has read.
 */
export interface IPlayerDialogData extends IObject {
	/**
	 * Checks if the player has read the dialog with the given ID.
	 * 
	 * @param id the dialog ID.
	 * @return true if the dialog has been read; false otherwise.
	 */
	hasReadDialog(id: number): boolean;

	/**
	 * Marks the dialog with the given ID as read.
	 * 
	 * @param id the dialog ID.
	 */
	readDialog(id: number): void;

	/**
	 * Marks the dialog with the given ID as unread.
	 * 
	 * @param id the dialog ID.
	 */
	unreadDialog(id: number): void;
}

