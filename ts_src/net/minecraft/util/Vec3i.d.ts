
export interface Vec3i extends IObject {
	x: number;
	y: number;
	z: number;
	xd: number;
	yd: number;
	zd: number;
	equals(p_equals_1_: any): boolean;

	hashCode(): number;

	compareTo(p_compareTo_1_: Vec3i): number;

	/**
	 * Get the X coordinate
	 * 
	 * @return the X component
	 */
	getX(): number;

	/**
	 * Get the Y coordinate
	 * 
	 * @return the Y component
	 */
	getY(): number;

	/**
	 * Get the Z coordinate
	 * 
	 * @return the Z component
	 */
	getZ(): number;

	/**
	 * Get the X coordinate as a double
	 * 
	 * @return the X component as a double
	 */
	getXD(): number;

	/**
	 * Get the Y coordinate as a double
	 * 
	 * @return the Y component as a double
	 */
	getYD(): number;

	/**
	 * Get the Z coordinate as a double
	 * 
	 * @return the Z component as a double
	 */
	getZD(): number;

	/**
	 * Calculate the cross product of this and the given Vector
	 * 
	 * @param vec the other vector
	 * @return the cross product of this vector and the given vector
	 */
	crossProduct(vec: Vec3i): Vec3i;

	toString(): string;
}

