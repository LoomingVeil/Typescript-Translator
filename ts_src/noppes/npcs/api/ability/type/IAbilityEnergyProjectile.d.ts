
/**
 * Shared API interface for energy projectile abilities (Orb, Disc, Beam, LaserShot).
 * Contains methods common to all energy projectile types.
 */
export interface IAbilityEnergyProjectile extends IAbility {
	/**
	 * @return Base damage dealt on hit.
	 */
	getDamage(): number;

	/**
	 * @param damage Base damage on hit.
	 */
	setDamage(damage: number): void;

	/**
	 * @return Horizontal knockback strength applied on hit.
	 */
	getKnockback(): number;

	/**
	 * @param knockback Horizontal knockback strength.
	 */
	setKnockback(knockback: number): void;

	/**
	 * @return Vertical knockback strength applied on hit.
	 */
	getKnockbackUp(): number;

	/**
	 * @param knockback Vertical knockback strength.
	 */
	setKnockbackUp(knockback: number): void;

	/**
	 * @return Whether the projectile explodes on impact.
	 */
	isExplosive(): boolean;

	/**
	 * @param explosive Whether to explode on impact.
	 */
	setExplosive(explosive: boolean): void;

	/**
	 * @return Explosion radius in blocks.
	 */
	getExplosionRadius(): number;

	/**
	 * @param radius Explosion radius in blocks.
	 */
	setExplosionRadius(radius: number): void;

	/**
	 * @return Damage falloff multiplier over explosion distance (0.0-1.0).
	 */
	getExplosionDamageFalloff(): number;

	/**
	 * @param falloff Damage falloff multiplier (0.0-1.0).
	 */
	setExplosionDamageFalloff(falloff: number): void;

	/**
	 * @return Hit type ordinal (determines how repeated hits are handled).
	 */
	getHitType(): number;

	/**
	 * @param hitType Hit type ordinal.
	 */
	setHitType(hitType: number): void;

	/**
	 * @return Delay in ticks between repeated hits on the same target.
	 */
	getMultiHitDelayTicks(): number;

	/**
	 * @param delayTicks Delay in ticks between repeated hits.
	 */
	setMultiHitDelayTicks(delayTicks: number): void;

	/**
	 * @return Maximum number of times this projectile can hit the same target.
	 */
	getMaxHits(): number;

	/**
	 * @param maxHits Maximum hit count per target.
	 */
	setMaxHits(maxHits: number): void;

	/**
	 * @return Maximum travel distance in blocks before the projectile expires.
	 */
	getMaxDistance(): number;

	/**
	 * @param distance Maximum travel distance in blocks.
	 */
	setMaxDistance(distance: number): void;

	/**
	 * @return Maximum lifetime in ticks before the projectile expires.
	 */
	getMaxLifetime(): number;

	/**
	 * @param ticks Maximum lifetime in ticks.
	 */
	setMaxLifetime(ticks: number): void;

	/**
	 * @return Inner (core) color as a packed RGB integer.
	 */
	getInnerColor(): number;

	/**
	 * @param color Inner color as a packed RGB integer.
	 */
	setInnerColor(color: number): void;

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
	 * @return Width of the outer color layer relative to the projectile size.
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
	 * @param enabled Whether to enable the lightning effect.
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
	 * @return Radius of the lightning effect around the projectile, in blocks.
	 */
	getLightningRadius(): number;

	/**
	 * @param radius Lightning effect radius in blocks.
	 */
	setLightningRadius(radius: number): void;

	/**
	 * @return Anchor point ordinal (0=FEET, 1=CENTER, 2=RIGHT_HAND, 3=LEFT_HAND, 4=HEAD, 5=FRONT, 6=ABOVE_HEAD).
	 */
	getAnchorPoint(): number;

	/**
	 * @param point Anchor point ordinal (0=FEET, 1=CENTER, 2=RIGHT_HAND, 3=LEFT_HAND, 4=HEAD, 5=FRONT, 6=ABOVE_HEAD).
	 */
	setAnchorPoint(point: number): void;

	/**
	 * @return Whether the projectile launches from its anchor position instead of the default eye/look-vector position.
	 */
	getLaunchFromAnchor(): boolean;

	/**
	 * @param launchFromAnchor When true, the projectile launches from its configured anchor position.
	 */
	setLaunchFromAnchor(launchFromAnchor: boolean): void;
}

