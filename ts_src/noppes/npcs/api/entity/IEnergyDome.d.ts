
/**
 * Represents an energy dome barrier - a spherical shield centered on the caster.
 */
export interface IEnergyDome extends IEnergyBarrier {
	/**
	 * @return The radius of the dome in blocks.
	 */
	getDomeRadius(): number;

	/**
	 * @param radius The radius of the dome in blocks.
	 */
	setDomeRadius(radius: number): void;
}

