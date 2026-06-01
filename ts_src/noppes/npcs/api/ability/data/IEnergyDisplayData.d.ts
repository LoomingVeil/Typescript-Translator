
/**
 * Visual display properties for energy ability projectiles.
 * Controls colors, transparency, and rotation speed.
 */
export interface IEnergyDisplayData extends IObject {
	/**
	 * @return Inner (core) color as a packed RGB integer.
	 */
	getInnerColor(): number;

	/**
	 * @param innerColor Inner color as a packed RGB integer.
	 */
	setInnerColor(innerColor: number): void;

	/**
	 * @return Outer (glow) color as a packed RGB integer.
	 */
	getOuterColor(): number;

	/**
	 * @param outerColor Outer color as a packed RGB integer.
	 */
	setOuterColor(outerColor: number): void;

	/**
	 * @return Whether the outer color layer is rendered.
	 */
	isOuterColorEnabled(): boolean;

	/**
	 * @param outerColorEnabled Whether to render the outer color layer.
	 */
	setOuterColorEnabled(outerColorEnabled: boolean): void;

	/**
	 * @return Width of the outer color layer relative to the projectile size.
	 */
	getOuterColorWidth(): number;

	/**
	 * @param outerColorWidth Outer color layer width.
	 */
	setOuterColorWidth(outerColorWidth: number): void;

	/**
	 * @return Alpha (opacity) of the outer color layer (0.0-1.0).
	 */
	getOuterColorAlpha(): number;

	/**
	 * @param outerColorAlpha Outer color opacity (0.0-1.0).
	 */
	setOuterColorAlpha(outerColorAlpha: number): void;

	/**
	 * @return Alpha (opacity) of the inner color layer (0.0-1.0).
	 */
	getInnerAlpha(): number;

	/**
	 * @param innerAlpha Inner color opacity (0.0-1.0).
	 */
	setInnerAlpha(innerAlpha: number): void;

	/**
	 * @return Visual rotation speed in degrees per tick.
	 */
	getRotationSpeed(): number;

	/**
	 * @param rotationSpeed Rotation speed in degrees per tick.
	 */
	setRotationSpeed(rotationSpeed: number): void;
}

