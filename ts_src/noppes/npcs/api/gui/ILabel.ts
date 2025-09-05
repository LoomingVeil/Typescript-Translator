

/**
 * Represents a text label component in a custom GUI.
 * Provides methods to get or set text, size, scale, and shadow properties.
 */
export interface ILabel extends ICustomGuiComponent {
	/**
	 * Returns the text of the label.
	 * 
	 * @return the label text.
	 */
	getText(): string;

	/**
	 * Sets the label text.
	 * 
	 * @param text the new text.
	 * @return this label instance.
	 */
	setText(text: string): ILabel;

	/**
	 * Returns the label's width.
	 * 
	 * @return the width in pixels.
	 */
	getWidth(): number;

	/**
	 * Returns the label's height.
	 * 
	 * @return the height in pixels.
	 */
	getHeight(): number;

	/**
	 * Sets the size of the label.
	 * 
	 * @param width the new width.
	 * @param height the new height.
	 * @return this label instance.
	 */
	setSize(width: number, height: number): ILabel;

	/**
	 * Returns the scale factor of the label.
	 * 
	 * @return the scale.
	 */
	getScale(): number;

	/**
	 * Sets the scale factor of the label.
	 * 
	 * @param scale the new scale.
	 * @return this label instance.
	 */
	setScale(scale: number): ILabel;

	/**
	 * Returns whether the label text is rendered with a shadow.
	 * 
	 * @return true if shadow is enabled; false otherwise.
	 */
	getShadow(): boolean;

	/**
	 * Sets whether the label text should be rendered with a shadow.
	 * 
	 * @param shadow true to enable shadow.
	 */
	setShadow(shadow: boolean): void;

}
}
