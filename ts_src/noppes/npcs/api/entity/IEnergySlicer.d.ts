
/**
 * A thin, wide blade projectile that slices through targets.
 * <p>
 * Slicers travel in a straight line, cutting through entities in their path.
 */
export interface IEnergySlicer extends IEnergyProjectile {
	/**
	 * Width of the slicer blade.
	 * 
	 * @return the width of each slice in blocks
	 */
	getSliceWidth(): number;

	setSliceWidth(width: number): void;

	getSliceThickness(): number;

	setSliceThickness(thickness: number): void;
}

