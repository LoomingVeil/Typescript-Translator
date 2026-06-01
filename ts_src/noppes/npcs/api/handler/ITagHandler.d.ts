
/**
 * Handles creation, deletion, and retrieval of tags.
 * Tags are labels that can be applied to entities for categorization.
 */
export interface ITagHandler extends IObject {
	/**
	 * Returns all registered tags.
	 * 
	 * @return a list of tags.
	 */
	list(): List;

	/**
	 * Deletes the tag with the given ID.
	 * 
	 * @param id the tag ID.
	 * @return the deleted tag, or null if not found.
	 */
	delete(id: number): ITag;

	/**
	 * Creates a new tag with the given name and color.
	 * 
	 * @param name the tag name.
	 * @param color the tag color as a packed RGB integer.
	 * @return the created tag.
	 */
	create(name: string, color: number): ITag;

	/**
	 * Returns the tag with the given ID.
	 * 
	 * @param id the tag ID.
	 * @return the tag, or null if not found.
	 */
	get(id: number): ITag;
}

