
/**
 * API interface for Dash abilities.
 * Quick evasive sidestep movement.
 */
export interface IAbilityDash extends IAbility {
	/**
	 * @return Dash mode ordinal (0=AGGRESSIVE, 1=DEFENSIVE, 2=DIRECTIONAL).
	 */
	getDashMode(): number;

	/**
	 * @param mode Dash mode ordinal (0=AGGRESSIVE, 1=DEFENSIVE, 2=DIRECTIONAL).
	 */
	setDashMode(mode: number): void;

	/**
	 * @return Distance covered by the dash in blocks.
	 */
	getDashDistance(): number;

	/**
	 * @param distance Dash distance in blocks.
	 */
	setDashDistance(distance: number): void;

	/**
	 * @return Speed of the dash movement.
	 */
	getDashSpeed(): number;

	/**
	 * @param speed Dash movement speed.
	 */
	setDashSpeed(speed: number): void;

	/**
	 * @return Angle offset of the dash direction in degrees.
	 */
	getDashAngle(): number;

	/**
	 * @param dashAngle Direction angle offset in degrees.
	 */
	setDashAngle(dashAngle: number): void;

	/**
	 * @return Dash direction ordinal (determines lateral movement direction).
	 */
	getDashDirection(): number;

	/**
	 * @param mode Dash direction ordinal.
	 */
	setDashDirection(mode: number): void;
}

