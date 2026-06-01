
/**
 * Base interface for energy barrier entities (Dome, Panel).
 * Barriers are defensive structures that block incoming energy projectiles.
 * Extends IEnergyAbility for shared display/lightning/owner/charging methods.
 */
export interface IEnergyBarrier extends IEnergyAbility {
	getCurrentHealth(): number;

	setCurrentHealth(health: number): void;

	getHealthPercent(): number;

	getMaxHealth(): number;

	setMaxHealth(maxHealth: number): void;

	isUseHealth(): boolean;

	setUseHealth(useHealth: boolean): void;

	getDuration(): number;

	setDuration(ticks: number): void;

	isUseDuration(): boolean;

	setUseDuration(useDuration: boolean): void;

	getTicksAlive(): number;

	getDefaultMultiplier(): number;

	setDefaultMultiplier(multiplier: number): void;

	isSolid(): boolean;

	setSolid(solid: boolean): void;

	isKnockbackEnabled(): boolean;

	setKnockbackEnabled(enabled: boolean): void;

	getKnockbackStrength(): number;

	setKnockbackStrength(strength: number): void;

	/**
	 * Returns whether this barrier absorbs damage on behalf of its owner.
	 * When absorbing is enabled, incoming damage to the barrier's owner is redirected
	 * to the barrier instead, subject to the absorb radius check.
	 * 
	 * @return {@code true} if the barrier absorbs the owner's incoming damage
	 * @see #getAbsorbRadius()
	 */
	isAbsorbing(): boolean;

	/**
	 * Sets whether this barrier absorbs damage on behalf of its owner.
	 * When absorbing is enabled, incoming damage to the barrier's owner is redirected
	 * to the barrier instead, subject to the absorb radius check.
	 * 
	 * @param absorbing {@code true} to enable damage absorption for the owner
	 * @see #setAbsorbRadius(float)
	 */
	setAbsorbing(absorbing: boolean): void;

	/**
	 * Gets the absorb radius for this barrier.
	 * The absorb radius determines the maximum distance from the barrier's current
	 * position at which the owner's incoming damage will still be redirected to the barrier.
	 * This check uses the barrier entity's live position, so it works correctly with
	 * moving barriers (following domes, moving walls, shields, etc.).
	 * 
	 * <ul>
	 *   <li>{@code -1} = No distance limit. Damage is always absorbed regardless of distance.</li>
	 *   <li>{@code 0} = Uses the barrier's own geometric extent as the effective radius.
	 *       <ul>
	 *         <li>Domes: the dome radius (sphere radius in blocks).</li>
	 *         <li>Panels: {@code (max(width, height) * 0.5 + 1.0) * 3}
	 *             (i.e. {@code max(width, height) * 1.5 + 3.0} blocks).</li>
	 *       </ul>
	 *   </li>
	 *   <li>Positive values = The owner must be within this many blocks of the barrier entity.</li>
	 * </ul>
	 * 
	 * @return the absorb radius in blocks, or {@code -1} for unlimited, or {@code 0} for barrier extent
	 */
	getAbsorbRadius(): number;

	/**
	 * Sets the absorb radius for this barrier.
	 * The absorb radius determines the maximum distance from the barrier's current
	 * position at which the owner's incoming damage will still be redirected to the barrier.
	 * This check uses the barrier entity's live position, so it works correctly with
	 * moving barriers (following domes, moving walls, shields, etc.).
	 * 
	 * <ul>
	 *   <li>{@code -1} = No distance limit. Damage is always absorbed regardless of distance.</li>
	 *   <li>{@code 0} = Uses the barrier's own geometric extent as the effective radius.
	 *       <ul>
	 *         <li>Domes: the dome radius (sphere radius in blocks).</li>
	 *         <li>Panels: {@code (max(width, height) * 0.5 + 1.0) * 3}
	 *             (i.e. {@code max(width, height) * 1.5 + 3.0} blocks).</li>
	 *       </ul>
	 *   </li>
	 *   <li>Positive values = The owner must be within this many blocks of the barrier entity.</li>
	 * </ul>
	 * 
	 * @param radius the absorb radius in blocks, or {@code -1} for unlimited, or {@code 0} for barrier extent
	 */
	setAbsorbRadius(radius: number): void;

	/**
	 * Returns the barrier type: 0=Dome, 1=Panel
	 * 
	 * @return the barrier type ordinal
	 */
	getBarrierType(): number;

	/**
	 * Sends all current visual and barrier-specific data to tracking clients.
	 * <p>
	 * Call this <b>after</b> making batch changes to properties like colors, alpha,
	 * lightning, dome radius, panel dimensions, etc. This sends a single packet
	 * instead of one per setter call.
	 * <p>
	 * Example:
	 * <pre>
	 * dome.setInnerColor(0xFF0000);
	 * dome.setDomeRadius(5.0);
	 * dome.syncClient(); // one packet for all changes
	 * </pre>
	 */
	syncClient(): void;
}

