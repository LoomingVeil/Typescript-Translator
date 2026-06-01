
/**
 * Represents a tag that can be applied to NPCs for categorization and filtering.
 */
export interface ITag extends IObject {
	/**
	 * @return the unique UUID string for this tag.
	 */
	getUuid(): string;

	/**
	 * @return the tag display name.
	 */
	getName(): string;

	/**
	 * @param name the tag display name.
	 */
	setName(name: string): void;

	/**
	 * @param c the tag color as a packed RGB integer.
	 */
	setColor(c: number): void;

	/**
	 * @return the unique tag ID.
	 */
	getId(): number;

	/**
	 * @return the tag color as a packed RGB integer.
	 */
	getColor(): number;

	/**
	 * @return true if this tag is hidden from display.
	 */
	getIsHidden(): boolean;

	/**
	 * @param hidden true to hide this tag from display.
	 */
	setIsHidden(hidden: boolean): void;

	/**
	 * Saves this tag to disk.
	 */
	save(): void;
}

