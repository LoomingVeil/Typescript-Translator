
/**
 * Lightning visual effect properties for energy ability projectiles.
 * Controls the electric arc effect rendered around the projectile.
 */
export interface IEnergyLightningData extends IObject {
	/**
	 * @return Whether the lightning visual effect is enabled.
	 */
	isLightningEffect(): boolean;

	/**
	 * @param lightningEffect Whether to enable the lightning effect.
	 */
	setLightningEffect(lightningEffect: boolean): void;

	/**
	 * @return Density of lightning arcs (higher = more arcs).
	 */
	getLightningDensity(): number;

	/**
	 * @param lightningDensity Lightning arc density.
	 */
	setLightningDensity(lightningDensity: number): void;

	/**
	 * @return Radius of the lightning effect around the projectile, in blocks.
	 */
	getLightningRadius(): number;

	/**
	 * @param lightningRadius Lightning effect radius in blocks.
	 */
	setLightningRadius(lightningRadius: number): void;

	/**
	 * @return Fade-out time for lightning arcs in ticks.
	 */
	getLightningFadeTime(): number;

	/**
	 * @param lightningFadeTime Fade-out time in ticks.
	 */
	setLightningFadeTime(lightningFadeTime: number): void;
}

