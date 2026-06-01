
/**
 * Handles transport categories and their locations.
 */
export interface ITransportHandler extends IObject {
	/**
	 * Returns all transport categories.
	 * 
	 * @return an array of transport categories.
	 */
	categories(): ITransportCategory[];

	/**
	 * Creates a new transport category with the given title.
	 * 
	 * @param title the category title.
	 */
	createCategory(title: string): void;

	/**
	 * Returns the transport category with the given title.
	 * 
	 * @param title the category title.
	 * @return the category, or null if not found.
	 */
	getCategory(title: string): ITransportCategory;

	/**
	 * Removes the transport category with the given title.
	 * 
	 * @param title the category title.
	 */
	removeCategory(title: string): void;
}

