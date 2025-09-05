import { IObject } from "./../../../IObject";


/**
 * A skin overlay object for both NPCs and players. Several skin overlays at a time can be layered on top of each other.
 * In an NPC's case, the old overlay texture is now the skin overlay with ID 0.
 * 
 * Modifying these attributes, an overlay can be made to look like a powered creeper effect, just a new skin, or both!
 */
export interface ISkinOverlay extends IObject {
	/**
	 * Sets the directory texture of the overlay. Does not support URLs.
	 */
	setTexture(texture: string): void;

	getTexture(): string;

	/**
	 * Sets whether this overlay glows in the dark or not.
	 */
	setGlow(glow: boolean): void;

	getGlow(): boolean;

	/**
	 * Sets whether this overlay blends on top of bottom textures at any alpha value.
	 */
	setBlend(blend: boolean): void;

	getBlend(): boolean;

	/**
	 * Sets the transparency of the overlay, from 0 to 1.
	 */
	setAlpha(alpha: number): void;

	getAlpha(): number;

	/**
	 * Sets the size of the entire overlay when rendered on the entity. By default, overlays render slightly on top of
	 * the entity's model.
	 */
	setSize(size: number): void;

	getSize(): number;

	/**
	 * Sets the texture scale of the overlay. Higher values will "zoom in" to the texture more.
	 */
	setTextureScale(scaleX: number, scaleY: number): void;

	getTextureScaleX(): number;

	getTextureScaleY(): number;

	/**
	 * Sets the "texture speed" by which the texture shifts on each render tick. Used to create a powered creeper effect!
	 * This does not move the entire overlay, it just moves the position at which the texture begins rendering.
	 */
	setSpeed(speedX: number, speedY: number): void;

	getSpeedX(): number;

	getSpeedY(): number;

	/**
	 * Sets the amount in each direction by which the overlay will be offset from the entity.
	 */
	setOffset(offsetX: number, offsetY: number, offsetZ: number): void;

	getOffsetX(): number;

	getOffsetY(): number;

	getOffsetZ(): number;

}

