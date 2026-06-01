
/**
 * API interface for Sweeper abilities.
 * Low sweeping beam that rotates around the NPC.
 */
export interface IAbilitySweeper extends IAbility {
	/**
	 * @return Length of the sweeping beam in blocks.
	 */
	getBeamLength(): number;

	/**
	 * @param length Beam length in blocks.
	 */
	setBeamLength(length: number): void;

	/**
	 * @return Width of the sweeping beam in blocks.
	 */
	getBeamWidth(): number;

	/**
	 * @param width Beam width in blocks.
	 */
	setBeamWidth(width: number): void;

	/**
	 * @return Height of the sweeping beam in blocks.
	 */
	getBeamHeight(): number;

	/**
	 * @param height Beam height in blocks.
	 */
	setBeamHeight(height: number): void;

	/**
	 * @return Damage dealt per hit to entities caught in the beam.
	 */
	getDamage(): number;

	/**
	 * @param damage Damage per hit.
	 */
	setDamage(damage: number): void;

	/**
	 * @return Interval in ticks between damage applications to the same target.
	 */
	getDamageInterval(): number;

	/**
	 * @param interval Damage interval in ticks.
	 */
	setDamageInterval(interval: number): void;

	/**
	 * @return Whether the beam can hit through multiple targets.
	 */
	isPiercing(): boolean;

	/**
	 * @param piercing Whether the beam pierces through targets.
	 */
	setPiercing(piercing: boolean): void;

	/**
	 * @return Rotation speed of the sweep in degrees per tick.
	 */
	getSweepSpeed(): number;

	/**
	 * @param speed Sweep rotation speed in degrees per tick.
	 */
	setSweepSpeed(speed: number): void;

	/**
	 * @return Number of full rotations the beam completes before stopping.
	 */
	getNumberOfRotations(): number;

	/**
	 * @param rotations Number of full rotations.
	 */
	setNumberOfRotations(rotations: number): void;

	/**
	 * @return Whether the beam pivot tracks the target instead of rotating freely.
	 */
	isLockOnTarget(): boolean;

	/**
	 * @param lock Whether the beam locks on to the target.
	 */
	setLockOnTarget(lock: boolean): void;

	/**
	 * @return Inner (core) color of the beam as a packed RGB integer.
	 */
	getInnerColor(): number;

	/**
	 * @param color Inner color as a packed RGB integer.
	 */
	setInnerColor(color: number): void;

	/**
	 * @return Outer (glow) color of the beam as a packed RGB integer.
	 */
	getOuterColor(): number;

	/**
	 * @param color Outer color as a packed RGB integer.
	 */
	setOuterColor(color: number): void;

	/**
	 * @return Width of the outer color layer relative to the beam width.
	 */
	getOuterColorWidth(): number;

	/**
	 * @param width Outer color layer width.
	 */
	setOuterColorWidth(width: number): void;

	/**
	 * @return Whether the outer color layer is rendered.
	 */
	isOuterColorEnabled(): boolean;

	/**
	 * @param enabled Whether to render the outer color layer.
	 */
	setOuterColorEnabled(enabled: boolean): void;
}

