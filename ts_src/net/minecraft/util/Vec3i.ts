import { IObject } from "./../../../IObject";


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
	 */
	getX(): number;

	/**
	 * Get the Y coordinate
	 */
	getY(): number;

	/**
	 * Get the Z coordinate
	 */
	getZ(): number;

	/**
	 * Get the X coordinate as a double
	 */
	getXD(): number;

	/**
	 * Get the Y coordinate as a double
	 */
	getYD(): number;

	/**
	 * Get the Z coordinate as a double
	 */
	getZD(): number;

	/**
	 * Calculate the cross product of this and the given Vector
	 */
	crossProduct(vec: Vec3i): Vec3i;

	toString(): string;

}

