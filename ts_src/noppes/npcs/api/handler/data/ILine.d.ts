
/**
 * Represents a single NPC dialog line with text, an optional sound, and target formatting.
 */
export interface ILine extends IObject {
	/**
	 * Returns a copy of this line with target-specific placeholders resolved.
	 * 
	 * @param entityLivingBase the target entity used for placeholder substitution.
	 * @return the formatted line.
	 */
	formatTarget(entityLivingBase: IEntityLivingBase): ILine;

	/**
	 * @return the text content of this line.
	 */
	getText(): string;

	/**
	 * Sets the text content of this line.
	 * 
	 * @param text the new text.
	 */
	setText(text: string): void;

	/**
	 * @return the sound resource to play with this line, or null if none.
	 */
	getSound(): string;

	/**
	 * Sets the sound resource to play with this line.
	 * 
	 * @param sound the sound resource path, or null for none.
	 */
	setSound(sound: string): void;

	/**
	 * Sets whether the text of this line should be hidden when spoken.
	 * 
	 * @param hide true to hide the text; false to show.
	 */
	hideText(hide: boolean): void;

	/**
	 * @return true if the text is hidden when this line is spoken.
	 */
	hideText(): boolean;
}

