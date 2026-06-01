
/**
 * Base interface for all energy ability entities (Projectiles, Barriers).
 * Contains shared display, lightning, owner, and charging properties.
 */
export interface IEnergyAbility extends IEntity {
	/**
	 * @return Entity ID of the caster who spawned this energy ability.
	 */
	getOwnerEntityId(): number;

	/**
	 * @return The caster entity who spawned this energy ability, or null if not found.
	 */
	getOwner(): IEntity;

	/**
	 * @return Inner (core) color as a packed RGB integer.
	 */
	getInnerColor(): number;

	/**
	 * @param color Inner color as a packed RGB integer.
	 */
	setInnerColor(color: number): void;

	/**
	 * @return Alpha (opacity) of the inner color layer (0.0-1.0).
	 */
	getInnerAlpha(): number;

	/**
	 * @param alpha Inner color opacity (0.0-1.0).
	 */
	setInnerAlpha(alpha: number): void;

	/**
	 * @return Outer (glow) color as a packed RGB integer.
	 */
	getOuterColor(): number;

	/**
	 * @param color Outer color as a packed RGB integer.
	 */
	setOuterColor(color: number): void;

	/**
	 * @return Whether the outer color layer is rendered.
	 */
	isOuterColorEnabled(): boolean;

	/**
	 * @param enabled Whether to render the outer color layer.
	 */
	setOuterColorEnabled(enabled: boolean): void;

	/**
	 * @return Width of the outer color layer relative to the entity size.
	 */
	getOuterColorWidth(): number;

	/**
	 * @param width Outer color layer width.
	 */
	setOuterColorWidth(width: number): void;

	/**
	 * @return Alpha (opacity) of the outer color layer (0.0-1.0).
	 */
	getOuterColorAlpha(): number;

	/**
	 * @param alpha Outer color opacity (0.0-1.0).
	 */
	setOuterColorAlpha(alpha: number): void;

	/**
	 * @return Whether the lightning visual effect is enabled.
	 */
	hasLightningEffect(): boolean;

	/**
	 * @param enabled Whether to render the lightning effect.
	 */
	setLightningEffect(enabled: boolean): void;

	/**
	 * @return Density of lightning arcs (higher = more arcs).
	 */
	getLightningDensity(): number;

	/**
	 * @param density Lightning arc density.
	 */
	setLightningDensity(density: number): void;

	/**
	 * @return Radius of the lightning effect around the entity, in blocks.
	 */
	getLightningRadius(): number;

	/**
	 * @param radius Lightning effect radius in blocks.
	 */
	setLightningRadius(radius: number): void;

	/**
	 * @return Fade-out time for lightning arcs in ticks.
	 */
	getLightningFadeTime(): number;

	/**
	 * @param ticks Lightning fade-out time in ticks.
	 */
	setLightningFadeTime(ticks: number): void;

	/**
	 * @return Whether this energy ability is currently in its charging phase.
	 */
	isCharging(): boolean;

	/**
	 * @return Charge progress as a fraction (0.0-1.0).
	 */
	getChargeProgress(): number;

	/**
	 * @return Whether this entity ignores target invulnerability frames when dealing damage.
	 */
	isIgnoreIFrames(): boolean;

	/**
	 * @param ignore Whether this entity should ignore target invulnerability frames when dealing damage.
	 */
	setIgnoreIFrames(ignore: boolean): void;

	/**
	 * Get the custom damage data attached to this energy entity.
	 * Used by addon handlers (e.g. DBC Addon) to carry damage configuration
	 * directly on the entity, enabling DBC damage scaling without a sourceAbility.
	 * 
	 * @return Custom damage data as INbt, or null if none set.
	 */
	getDamageData(): INbt;

	/**
	 * Set custom damage data on this energy entity.
	 * 
	 * @param data Custom damage data as INbt. Pass null to clear.
	 */
	setDamageData(data: INbt): void;

	/**
	 * Get this entity's magic data. Defines magic types for outgoing damage splits
	 * or barrier defense interactions. Inherited from the source ability on spawn.
	 * 
	 * @return the entity's magic data
	 */
	getMagicData(): IMagicData;

	/**
	 * Set magic data on this energy entity. Overrides any inherited ability magic.
	 * 
	 * @param data Magic data to set.
	 */
	setMagicData(data: IMagicData): void;
}

