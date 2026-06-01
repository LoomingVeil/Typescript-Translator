
export interface IDialogImage extends IObject {
	/**
	 * @return The unique ID of this dialog image
	 */
	getId(): number;

	/**
	 * Sets the texture resource location for this image.
	 * 
	 * @param texture The resource location string
	 */
	setTexture(texture: string): void;

	/**
	 * @return The texture resource location for this image
	 */
	getTexture(): string;

	/**
	 * Sets the screen position of this image.
	 * 
	 * @param x The X position in pixels
	 * @param y The Y position in pixels
	 */
	setPosition(x: number, y: number): void;

	/**
	 * @return The X position of this image in pixels
	 */
	getX(): number;

	/**
	 * @return The Y position of this image in pixels
	 */
	getY(): number;

	/**
	 * Sets the rendered width and height of this image.
	 * 
	 * @param width The width in pixels
	 * @param height The height in pixels
	 */
	setWidthHeight(width: number, height: number): void;

	/**
	 * @return The rendered width of this image in pixels
	 */
	getWidth(): number;

	/**
	 * @return The rendered height of this image in pixels
	 */
	getHeight(): number;

	/**
	 * Sets the texture UV offset for this image.
	 * 
	 * @param offsetX The horizontal texture offset in pixels
	 * @param offsetY The vertical texture offset in pixels
	 */
	setTextureOffset(offsetX: number, offsetY: number): void;

	/**
	 * @return The horizontal texture UV offset in pixels
	 */
	getTextureX(): number;

	/**
	 * @return The vertical texture UV offset in pixels
	 */
	getTextureY(): number;

	/**
	 * Sets the tint color of this image.
	 * 
	 * @param color The color as an integer (e.g. 0xFFFFFF)
	 */
	setColor(color: number): void;

	/**
	 * @return The tint color of this image
	 */
	getColor(): number;

	/**
	 * Sets the tint color used when this image is selected/hovered.
	 * 
	 * @param color The selected color as an integer (e.g. 0xFFFFFF)
	 */
	setSelectedColor(color: number): void;

	/**
	 * @return The tint color used when this image is selected/hovered
	 */
	getSelectedColor(): number;

	/**
	 * Sets the render scale of this image.
	 * 
	 * @param scale The scale factor (default 1.0)
	 */
	setScale(scale: number): void;

	/**
	 * @return The render scale of this image
	 */
	getScale(): number;

	/**
	 * Sets the alpha transparency of this image.
	 * 
	 * @param alpha The alpha value from 0.0 (transparent) to 1.0 (opaque)
	 */
	setAlpha(alpha: number): void;

	/**
	 * @return The alpha transparency of this image (0.0 to 1.0)
	 */
	getAlpha(): number;

	/**
	 * Sets the rotation angle of this image.
	 * 
	 * @param rotation The rotation in degrees
	 */
	setRotation(rotation: number): void;

	/**
	 * @return The rotation angle of this image in degrees
	 */
	getRotation(): number;

	/**
	 * Sets the image type which determines where the image is rendered.
	 * 
	 * @param imageType The image type: 0 = Default, 1 = Text, 2 = Option
	 */
	setImageType(imageType: number): void;

	/**
	 * @return The image type: 0 = Default, 1 = Text, 2 = Option
	 */
	getImageType(): number;

	/**
	 * Sets the alignment of this image.
	 * 
	 * @param alignment The alignment value
	 */
	setAlignment(alignment: number): void;

	/**
	 * @return The alignment value of this image
	 */
	getAlignment(): number;
}

