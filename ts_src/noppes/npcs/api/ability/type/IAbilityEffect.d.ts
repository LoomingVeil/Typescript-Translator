
/**
 * API interface for Effect abilities.
 * Applies healing, potion effects, custom effects, and mod-registered effect actions
 * to self or nearby entities.
 */
export interface IAbilityEffect extends IAbility {
	/**
	 * @return Duration of the effect in ticks.
	 */
	getDurationTicks(): number;

	/**
	 * @param ticks Effect duration in ticks.
	 */
	setDurationTicks(ticks: number): void;

	/**
	 * @return Flat heal amount per tick (body HP).
	 */
	getHealAmount(): number;

	/**
	 * @param amount Flat heal amount per tick.
	 */
	setHealAmount(amount: number): void;

	/**
	 * @return Heal amount as a percentage of max health per tick (0.0-100.0).
	 */
	getHealPercent(): number;

	/**
	 * @param percent Heal percentage per tick (0.0-100.0).
	 */
	setHealPercent(percent: number): void;

	/**
	 * @return Whether the caster is also affected by the effect.
	 */
	isIncludeSelf(): boolean;

	/**
	 * @param includeSelf Whether to include the caster.
	 */
	setIncludeSelf(includeSelf: boolean): void;

	/**
	 * @return Area-of-effect radius in blocks.
	 */
	getRadius(): number;

	/**
	 * @param radius AoE radius in blocks.
	 */
	setRadius(radius: number): void;

	/**
	 * @return Whether healing is applied all at once instead of over time.
	 */
	isInstantHeal(): boolean;

	/**
	 * @param instant Whether healing is instant.
	 */
	setInstantHeal(instant: boolean): void;

	/**
	 * @return Target filter type ordinal: 0=ALLIES, 1=ENEMIES, 2=ALL
	 */
	getTargetFilterType(): number;

	/**
	 * @param filter Target filter type ordinal: 0=ALLIES, 1=ENEMIES, 2=ALL
	 */
	setTargetFilterType(filter: number): void;

	/**
	 * @return Number of configured custom effects (from CustomEffectController)
	 */
	getCustomEffectCount(): number;

	/**
	 * @return Number of configured mod-registered effect actions
	 */
	getEffectActionCount(): number;
}

