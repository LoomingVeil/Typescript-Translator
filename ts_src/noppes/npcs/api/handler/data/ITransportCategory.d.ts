
/**
 * Represents a category that groups transport locations together.
 */
export interface ITransportCategory extends IObject {
	/**
	 * @return the unique category ID.
	 */
	getId(): number;

	/**
	 * @param title the category title.
	 */
	setTitle(title: string): void;

	/**
	 * @return the category title.
	 */
	getTitle(): string;

	/**
	 * Adds a new transport location with the given name to this category.
	 * 
	 * @param name the location name.
	 */
	addLocation(name: string): void;

	/**
	 * Returns the transport location with the given name.
	 * 
	 * @param name the location name.
	 * @return the transport location, or null if not found.
	 */
	getLocation(name: string): ITransportLocation;

	/**
	 * Removes the transport location with the given name.
	 * 
	 * @param name the location name.
	 */
	removeLocation(name: string): void;
}

