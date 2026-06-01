
export interface IDialogCategory extends IObject {
	/**
	 * @return A list of all dialogs in this category
	 */
	dialogs(): List;

	/**
	 * @return The name of this dialog category
	 */
	getName(): string;

	/**
	 * Creates a new empty dialog in this category.
	 * 
	 * @return The newly created {@link IDialog}
	 */
	create(): IDialog;

	/**
	 * @return The unique ID of this dialog category
	 */
	getId(): number;
}

