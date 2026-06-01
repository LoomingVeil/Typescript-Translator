
/**
 * A directional beam projectile with a trailing path and optional head orb.
 * <p>
 * Beams travel forward from their origin, dealing damage along their length.
 * They can optionally stay attached to their owner and follow the owner's movement.
 * <p>
 * Beams use {@code startFiring} internally rather than {@code startMoving} —
 * this is handled automatically by the fire methods.
 */
export interface IEnergyBeam extends IEnergyProjectile {
	/**
	 * Width of the beam trail.
	 * 
	 * @return the beam width in blocks
	 */
	getBeamWidth(): number;

	setBeamWidth(width: number): void;

	getHeadSize(): number;

	setHeadSize(size: number): void;

	isAttachedToOwner(): boolean;

	setAttachedToOwner(attached: boolean): void;

	shouldRenderTailOrb(): boolean;
}

