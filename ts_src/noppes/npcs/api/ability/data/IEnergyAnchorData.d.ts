
/**
 * Configuration for the anchor point of an energy ability projectile.
 * Controls where the projectile spawns relative to the caster.
 */
export interface IEnergyAnchorData extends IObject {
	/**
	 * @return Anchor point ordinal (0=FRONT, 1=CENTER, 2=RIGHT_HAND, 3=LEFT_HAND, 4=ABOVE_HEAD, 5=CHEST, 6=EYE).
	 */
	getAnchor(): number;

	/**
	 * Set the anchor point.
	 * 
	 * @param anchor Anchor ordinal (0=FRONT, 1=CENTER, 2=RIGHT_HAND, 3=LEFT_HAND, 4=ABOVE_HEAD, 5=CHEST, 6=EYE)
	 */
	setAnchor(anchor: number): void;

	/**
	 * @return X offset from the anchor point (positive = right).
	 */
	getAnchorOffsetX(): number;

	/**
	 * @param anchorOffsetX X offset from anchor (positive = right).
	 */
	setAnchorOffsetX(anchorOffsetX: number): void;

	/**
	 * @return Y offset from the anchor point (positive = up).
	 */
	getAnchorOffsetY(): number;

	/**
	 * @param anchorOffsetY Y offset from anchor (positive = up).
	 */
	setAnchorOffsetY(anchorOffsetY: number): void;

	/**
	 * @return Z offset from the anchor point (positive = forward).
	 */
	getAnchorOffsetZ(): number;

	/**
	 * @param anchorOffsetZ Z offset from anchor (positive = forward).
	 */
	setAnchorOffsetZ(anchorOffsetZ: number): void;

	/**
	 * @return Whether the projectile launches from the anchor position instead of the default eye/look-vector position.
	 */
	getLaunchFromAnchor(): boolean;

	/**
	 * @param launchFromAnchor When true, the projectile launches from its anchor position; when false, it snaps to the default eye/look-vector position.
	 */
	setLaunchFromAnchor(launchFromAnchor: boolean): void;
}

