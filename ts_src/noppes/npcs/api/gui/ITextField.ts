

/**
 * Represents a text field component in a custom GUI.
 * Provides methods to get or set its size and text content.
 */
export interface ITextField extends ICustomGuiComponent {
	/**
	 * Returns the width of the text field.
	 * 
	 * @return the width in pixels.
	 */
	getWidth(): number;

	/**
	 * Returns the height of the text field.
	 * 
	 * @return the height in pixels.
	 */
	getHeight(): number;

	/**
	 * Sets the size of the text field.
	 * 
	 * @param width the new width.
	 * @param height the new height.
	 * @return this text field instance.
	 */
	setSize(width: number, height: number): ITextField;

	/**
	 * Returns the current text content of the text field.
	 * 
	 * @return the text.
	 */
	getText(): string;

	/**
	 * Sets the text content of the text field.
	 * 
	 * @param text the new text.
	 * @return this text field instance.
	 */
	setText(text: string): ITextField;

}
}
