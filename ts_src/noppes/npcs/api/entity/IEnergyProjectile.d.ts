
/**
 * Base interface for all energy projectile entities (Orb, Beam, Disc, Laser, Slicer).
 * <p>
 * Extends {@link IEnergyAbility} for shared display, lightning, owner, and charging methods.
 * <p>
 * <b>Fire methods — launch from current position (no repositioning):</b>
 * <ul>
 *   <li>{@link #fireAt(IEntity)} — toward an entity</li>
 *   <li>{@link #fireAt(double, double, double)} — toward world coordinates</li>
 *   <li>{@link #fireDirection(float, float)} — in a yaw/pitch direction</li>
 * </ul>
 * <b>FireFrom methods — reposition to caster's eye, then launch (look-vector snap):</b>
 * <ul>
 *   <li>{@link #fireFrom(IEntityLivingBase)} — fire along caster's look direction</li>
 *   <li>{@link #fireFrom(IEntityLivingBase, IEntity)} — fire toward a target entity</li>
 * </ul>
 */
export interface IEnergyProjectile extends IEnergyAbility {
	/**
	 * Sets the owner entity (used for homing return, damage attribution, etc.).
	 * 
	 * @param owner the entity that owns this projectile
	 */
	setOwner(owner: IEntity): void;

	/**
	 * @return the entity ID of the current homing/tracking target, or -1 if none
	 */
	getTargetEntityId(): number;

	/**
	 * @return the current homing/tracking target entity, or null if none
	 */
	getTarget(): IEntity;

	/**
	 * Sets the homing/tracking target entity. Pass null to clear.
	 * 
	 * @param target the entity to home towards
	 */
	setTarget(target: IEntity): void;

	/**
	 * @return the projectile's visual and collision size
	 */
	getSize(): number;

	/**
	 * Sets the projectile's visual and collision size.
	 * 
	 * @param size the projectile size
	 */
	setSize(size: number): void;

	/**
	 * @return the visual rotation speed (degrees per tick)
	 */
	getRotationSpeed(): number;

	setRotationSpeed(speed: number): void;

	getInterpolatedRotationX(partialTicks: number): number;

	getInterpolatedRotationY(partialTicks: number): number;

	getInterpolatedRotationZ(partialTicks: number): number;

	getInterpolatedSize(partialTicks: number): number;

	/**
	 * @return maximum travel distance before the projectile despawns (0 = unlimited)
	 */
	getMaxDistance(): number;

	setMaxDistance(distance: number): void;

	/**
	 * @return maximum lifetime in ticks before the projectile despawns (0 = unlimited)
	 */
	getMaxLifetime(): number;

	setMaxLifetime(ticks: number): void;

	/**
	 * @return base damage dealt on hit
	 */
	getDamage(): number;

	setDamage(damage: number): void;

	/**
	 * @return horizontal knockback strength
	 */
	getKnockback(): number;

	setKnockback(knockback: number): void;

	/**
	 * @return upward knockback strength
	 */
	getKnockbackUp(): number;

	setKnockbackUp(knockbackUp: number): void;

	/**
	 * @return true if the projectile explodes on impact
	 */
	isExplosive(): boolean;

	setExplosive(explosive: boolean): void;

	/**
	 * @return explosion radius (only used if {@link #isExplosive()} is true)
	 */
	getExplosionRadius(): number;

	setExplosionRadius(radius: number): void;

	/**
	 * @return damage falloff multiplier over explosion radius (0 = no falloff, 1 = full falloff)
	 */
	getExplosionDamageFalloff(): number;

	setExplosionDamageFalloff(falloff: number): void;

	/**
	 * @return hit behavior type (0 = single hit, 1 = pierce, 2 = multi-hit with delay)
	 */
	getHitType(): number;

	setHitType(hitType: number): void;

	/**
	 * @return ticks between multi-hit damage ticks on the same entity
	 */
	getMultiHitDelayTicks(): number;

	setMultiHitDelayTicks(delayTicks: number): void;

	/**
	 * @return maximum number of entities this projectile can hit (0 = unlimited)
	 */
	getMaxHits(): number;

	setMaxHits(maxHits: number): void;

	/**
	 * @return travel speed (blocks per tick)
	 */
	getSpeed(): number;

	setSpeed(speed: number): void;

	/**
	 * @return true if the projectile homes toward its target
	 */
	isHoming(): boolean;

	setHoming(homing: boolean): void;

	/**
	 * @return how aggressively the projectile turns toward its target (higher = tighter turns)
	 */
	getHomingStrength(): number;

	setHomingStrength(strength: number): void;

	/**
	 * @return maximum range at which homing will acquire/track a target
	 */
	getHomingRange(): number;

	setHomingRange(range: number): void;

	/**
	 * @return anchor point type used during the charge/windup phase
	 */
	getAnchor(): number;

	getAnchorOffsetX(): number;

	getAnchorOffsetY(): number;

	getAnchorOffsetZ(): number;

	/**
	 * @return X coordinate where the projectile was launched from
	 */
	getStartX(): number;

	/**
	 * @return Y coordinate where the projectile was launched from
	 */
	getStartY(): number;

	/**
	 * @return Z coordinate where the projectile was launched from
	 */
	getStartZ(): number;

	/**
	 * @return true if the projectile has hit something
	 */
	hasHit(): boolean;

	/**
	 * Returns the energy projectile sub-type.
	 * 
	 * @return 0=Orb, 1=Beam, 2=Disc, 3=Laser, 4=Slicer
	 */
	getEnergyType(): number;

	/**
	 * Sends all current visual, movement, and position data to tracking clients.
	 * <p>
	 * Call this <b>after</b> making batch changes to properties like size, speed,
	 * homing, colors, or type-specific fields (beam width, disc radius, etc.).
	 * This avoids sending a separate packet for every setter call.
	 * <p>
	 * <b>Note:</b> {@code fireAt()}, {@code fireDirection()}, and {@code fireFrom()}
	 * automatically sync motion when called on an already-spawned projectile,
	 * so you do not need to call {@code syncClient()} after firing.
	 * Use this method when changing properties that affect rendering or movement
	 * behavior without re-firing.
	 * <p>
	 * Example:
	 * <pre>
	 * orb.setSize(2.0);
	 * orb.setSpeed(0.5);
	 * orb.setInnerColor(0xFF0000);
	 * orb.syncClient(); // one packet for all changes
	 * </pre>
	 */
	syncClient(): void;

	/**
	 * Spawns the projectile and launches it from its <b>current position</b> toward the target entity.
	 * <p>
	 * No look-vector repositioning occurs — the projectile fires from exactly where it was
	 * placed by {@code createOrb}/{@code createBeam}/etc. If the target is a living entity,
	 * it is also set as the homing target for projectiles with homing enabled.
	 * <p>
	 * To launch from the owner's eye position with look-vector snapping, use
	 * {@link #fireFrom(IEntityLivingBase, IEntity)} instead.
	 * 
	 * @param target the entity to fire toward (can be null for untargeted launch)
	 */
	fireAt(target: IEntity): void;

	/**
	 * Spawns the projectile and launches it toward the specified world coordinates.
	 * <p>
	 * The projectile fires from its <b>current position</b> — no look-vector repositioning occurs.
	 * Motion is calculated as a normalized direction vector scaled by the projectile's speed.
	 * 
	 * @param x target X coordinate
	 * @param y target Y coordinate
	 * @param z target Z coordinate
	 */
	fireAt(x: number, y: number, z: number): void;

	/**
	 * Spawns the projectile and launches it in the specified yaw/pitch direction.
	 * <p>
	 * The projectile fires from its <b>current position</b> — no look-vector repositioning occurs.
	 * 
	 * @param yaw horizontal angle in degrees (0 = south, 90 = west, like Minecraft yaw)
	 * @param pitch vertical angle in degrees (negative = up, positive = down)
	 */
	fireDirection(yaw: number, pitch: number): void;

	/**
	 * Sets the owner, positions the projectile at the caster's eye level, and launches it
	 * using the entity's full launch sequence ({@code startMoving}/{@code startFiring}).
	 * <p>
	 * For player-owned projectiles, this <b>snaps the projectile to the owner's look-vector
	 * position</b> and fires in the caster's look direction. This is the intended method for
	 * "cast from self" behavior. The projectile's position set by {@code createOrb}/etc. is
	 * overridden.
	 * <p>
	 * Use {@link #fireAt(IEntity)} or {@link #fireAt(double, double, double)} instead if you
	 * want to launch from a specific custom position.
	 * 
	 * @param caster the entity to fire from
	 */
	fireFrom(caster: IEntityLivingBase): void;

	/**
	 * Sets the owner, positions the projectile at the caster's eye level, and launches it
	 * toward the target entity using the entity's full launch sequence.
	 * <p>
	 * For player-owned projectiles, this <b>snaps the projectile to the owner's look-vector
	 * position</b> before firing toward the target. The projectile's position set by
	 * {@code createOrb}/etc. is overridden.
	 * <p>
	 * Use {@link #fireAt(IEntity)} instead if you want to launch from a specific custom position.
	 * 
	 * @param caster the entity to fire from
	 * @param target the entity to fire toward
	 */
	fireFrom(caster: IEntityLivingBase, target: IEntity): void;
}

