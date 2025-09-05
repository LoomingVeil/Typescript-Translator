import { ICustomGuiComponent } from "./ICustomGuiComponent";


/**
 * Represents a clickable button component in a custom GUI.
 * Provides methods to control size, label, texture, and state.
 */
export interface IButton extends ICustomGuiComponent {
	/**
	 * Returns the button's width.
	 * 
	 * @return the width in pixels.
	 */
	getWidth(): number;

	/**
	 * Returns the button's height.
	 * 
	 * @return the height in pixels.
	 */
	getHeight(): number;

	/**
	 * Sets the size of the button.
	 * 
	 * @param width the new width in pixels.
	 * @param height the new height in pixels.
	 * @return this button instance.
	 */
	setSize(width: number, height: number): IButton;

	/**
	 * Returns the button's label text.
	 * 
	 * @return the label.
	 */
	getLabel(): string;

	/**
	 * Sets the button's label text.
	 * 
	 * @param text the new label.
	 * @return this button instance.
	 */
	setLabel(text: string): IButton;

	/**
	 * Returns the texture resource location for this button.
	 * 
	 * @return the texture location as a string.
	 */
	getTexture(): string;

	/**
	 * Checks if the button has an assigned texture.
	 * 
	 * @return true if a texture is set; false otherwise.
	 */
	hasTexture(): boolean;

	/**
	 * Sets the texture resource location for this button.
	 * 
	 * @param texture the texture resource location.
	 * @return this button instance.
	 */
	setTexture(texture: string): IButton;

	/**
	 * Returns the X offset within the texture.
	 * 
	 * @return the texture X offset.
	 */
	getTextureX(): number;

	/**
	 * Returns the Y offset within the texture.
	 * 
	 * @return the texture Y offset.
	 */
	getTextureY(): number;

	/**
	 * Sets the texture offset (X and Y) for this button.
	 * 
	 * @param textureX the new X offset.
	 * @param textureY the new Y offset.
	 * @return this button instance.
	 */
	setTextureOffset(textureX: number, textureY: number): IButton;

	/**
	 * Sets the scale factor of the button.
	 * 
	 * @param scale the scale factor.
	 */
	setScale(scale: number): void;

	/**
	 * Returns the scale factor of the button.
	 * 
	 * @return the scale.
	 */
	getScale(): number;

	/**
	 * Enables or disables the button.
	 * 
	 * @param enabled true to enable; false to disable.
	 */
	setEnabled(enabled: boolean): void;

	/**
	 * Checks if the button is enabled.
	 * 
	 * @return true if enabled; false otherwise.
	 */
	isEnabled(): boolean;

}

