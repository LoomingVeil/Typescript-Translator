

/**
 * Represents a textured rectangle component in a custom GUI.
 * Allows configuration of texture resource, size, scale, and texture offset.
 */
export interface ITexturedRect extends ICustomGuiComponent {
	/**
	 * Returns the texture resource location.
	 * 
	 * @return the texture as a string.
	 */
	getTexture(): string;

	/**
	 * Sets the texture resource location.
	 * 
	 * @param texture the texture resource location.
	 * @return this textured rectangle instance.
	 */
	setTexture(texture: string): ITexturedRect;

	/**
	 * Returns the width of the rectangle.
	 * 
	 * @return the width in pixels.
	 */
	getWidth(): number;

	/**
	 * Returns the height of the rectangle.
	 * 
	 * @return the height in pixels.
	 */
	getHeight(): number;

	/**
	 * Sets the size of the rectangle.
	 * 
	 * @param width the new width.
	 * @param height the new height.
	 * @return this textured rectangle instance.
	 */
	setSize(width: number, height: number): ITexturedRect;

	/**
	 * Returns the scale factor of the rectangle.
	 * 
	 * @return the scale.
	 */
	getScale(): number;

	/**
	 * Sets the scale factor of the rectangle.
	 * 
	 * @param scale the new scale.
	 * @return this textured rectangle instance.
	 */
	setScale(scale: number): ITexturedRect;

	/**
	 * Returns the texture's x offset.
	 * 
	 * @return the x offset.
	 */
	getTextureX(): number;

	/**
	 * Returns the texture's y offset.
	 * 
	 * @return the y offset.
	 */
	getTextureY(): number;

	/**
	 * Sets the texture offset.
	 * 
	 * @param textureX the new x offset.
	 * @param textureY the new y offset.
	 * @return this textured rectangle instance.
	 */
	setTextureOffset(textureX: number, textureY: number): ITexturedRect;

}
}
