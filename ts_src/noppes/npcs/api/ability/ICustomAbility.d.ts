
/**
 * A custom (script-driven) ability whose behavior is entirely defined by script event hooks.
 * Supports both instant execution mode and toggle mode.
 */
export interface ICustomAbility extends IAbility {
	/**
	 * Get the duration in ticks for instant mode (non-toggle).
	 * 
	 * @return duration in ticks
	 */
	getDurationTicks(): number;

	/**
	 * Set the duration in ticks for instant mode.
	 * 
	 * @param ticks duration in ticks
	 */
	setDurationTicks(ticks: number): void;

	/**
	 * Get the telegraph shape type ordinal.
	 * 
	 * @return ordinal of TelegraphType: 0=CIRCLE, 1=RING, 2=LINE, 3=CONE, 4=POINT, 5=SQUARE, 6=NONE
	 */
	getTelegraphShapeType(): number;

	/**
	 * Set the telegraph shape type by ordinal.
	 * 
	 * @param type ordinal of TelegraphType
	 */
	setTelegraphShapeType(type: number): void;

	/**
	 * Get the targeting mode ordinal.
	 * 
	 * @return ordinal of TargetingMode: 0=AGGRO_TARGET, 1=SELF, 2=AOE_SELF, 3=AOE_TARGET
	 */
	getTargetingModeType(): number;

	/**
	 * Set the targeting mode by ordinal.
	 * 
	 * @param type ordinal of TargetingMode
	 */
	setTargetingModeType(type: number): void;

	/**
	 * Get how many ticks the telegraph persists during the active phase.
	 * When syncTelegraphWithDuration is true, this returns the duration ticks.
	 * 
	 * @return telegraph active ticks
	 */
	getTelegraphActiveTicks(): number;

	/**
	 * Set how many ticks the telegraph persists during the active phase.
	 * Only used when syncTelegraphWithDuration is false.
	 * 
	 * @param ticks telegraph active ticks
	 */
	setTelegraphActiveTicks(ticks: number): void;

	/**
	 * Whether telegraph active ticks are synced to the ability duration.
	 * 
	 * @return true if synced
	 */
	isSyncTelegraphWithDuration(): boolean;

	/**
	 * Set whether telegraph active ticks should sync to the ability duration.
	 * 
	 * @param sync whether to sync
	 */
	setSyncTelegraphWithDuration(sync: boolean): void;

	/**
	 * Get the telegraph radius (used by CIRCLE, RING, SQUARE shapes).
	 * 
	 * @return the telegraph radius
	 */
	getTelegraphRadius(): number;

	/**
	 * Set the telegraph radius.
	 * 
	 * @param radius the telegraph radius
	 */
	setTelegraphRadius(radius: number): void;

	/**
	 * Get the telegraph inner radius (used by RING, CONE shapes).
	 * 
	 * @return the inner radius
	 */
	getTelegraphInnerRadius(): number;

	/**
	 * Set the telegraph inner radius.
	 * 
	 * @param innerRadius the inner radius
	 */
	setTelegraphInnerRadius(innerRadius: number): void;

	/**
	 * Get the telegraph length (used by LINE, CONE shapes).
	 * 
	 * @return the telegraph length
	 */
	getTelegraphLength(): number;

	/**
	 * Set the telegraph length.
	 * 
	 * @param length the telegraph length
	 */
	setTelegraphLength(length: number): void;

	/**
	 * Get the telegraph width (used by LINE shape).
	 * 
	 * @return the telegraph width
	 */
	getTelegraphWidth(): number;

	/**
	 * Set the telegraph width.
	 * 
	 * @param width the telegraph width
	 */
	setTelegraphWidth(width: number): void;

	/**
	 * Get the telegraph angle in degrees (used by CONE shape).
	 * 
	 * @return the telegraph angle in degrees
	 */
	getTelegraphAngle(): number;

	/**
	 * Set the telegraph angle in degrees.
	 * 
	 * @param angle the angle in degrees
	 */
	setTelegraphAngle(angle: number): void;
}

