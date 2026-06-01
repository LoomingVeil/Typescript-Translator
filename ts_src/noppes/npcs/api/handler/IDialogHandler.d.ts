
/**
 * Handles retrieval of dialogs and dialog categories.
 */
export interface IDialogHandler extends IObject {
	/**
	 * Returns all dialog categories.
	 * 
	 * @return a list of dialog categories.
	 */
	categories(): List;

	/**
	 * Returns the dialog with the specified ID.
	 * 
	 * @param id the dialog ID.
	 * @return the dialog, or null if not found.
	 */
	get(id: number): IDialog;
}

