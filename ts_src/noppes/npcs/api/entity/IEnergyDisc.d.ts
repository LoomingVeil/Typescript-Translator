
/**
 * A flat spinning disc projectile with optional boomerang behavior.
 * <p>
 * Discs can be oriented vertically or horizontally, and can return to their owner
 * like a boomerang after a configurable delay.
 */
export interface IEnergyDisc extends IEnergyProjectile {
	/**
	 * Radius of the disc.
	 * 
	 * @return the disc radius in blocks
	 */
	getDiscRadius(): number;

	setDiscRadius(radius: number): void;

	getDiscThickness(): number;

	setDiscThickness(thickness: number): void;

	isVertical(): boolean;

	setVertical(vertical: boolean): void;

	isBoomerang(): boolean;

	setBoomerang(boomerang: boolean): void;

	getBoomerangDelay(): number;

	setBoomerangDelay(ticks: number): void;

	isReturning(): boolean;
}

