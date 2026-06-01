
/**
 * Entity-level interface for sweeper beam entities.
 * Created via IEnergyHandler.createSweeper().
 * Configure properties, then call spawn() to place in the world.
 */
export interface IEnergySweeper extends IEnergyAbility {
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
	 * @return Rotation speed of the sweep in degrees per tick.
	 */
	getSweepSpeed(): number;

	/**
	 * @param degreesPerTick Sweep rotation speed in degrees per tick.
	 */
	setSweepSpeed(degreesPerTick: number): void;

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
	 * @param ticks Damage interval in ticks.
	 */
	setDamageInterval(ticks: number): void;

	/**
	 * @return Whether the beam can hit through multiple targets.
	 */
	isPiercing(): boolean;

	/**
	 * @param piercing Whether the beam pierces through targets.
	 */
	setPiercing(piercing: boolean): void;

	/**
	 * Spawn this sweeper entity into the world.
	 */
	spawn(): void;
}

