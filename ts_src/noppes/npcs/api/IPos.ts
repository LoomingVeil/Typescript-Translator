import { IObject } from "./../../../IObject";
import { BlockPos } from "./../../../net/minecraft/util/math/BlockPos";


export interface IPos extends IObject {
	getX(): number;

	getY(): number;

	getZ(): number;

	getXD(): number;

	getYD(): number;

	getZD(): number;

	/**
	 * Shifts the IPos up by 1 block and returns the new object.
	 */
	up(): IPos;

	/**
	 * @param n The number of blocks to move the position up by.
	 * @return The new IPos object.
	 */
	up(n: number): IPos;

	/**
	 * Shifts the IPos down by 1 block and returns the new object.
	 */
	down(): IPos;

	/**
	 * @param n The number of blocks to move the position down by.
	 * @return The new IPos object.
	 */
	down(n: number): IPos;

	/**
	 * Shifts the IPos north by 1 block and returns the new object.
	 */
	north(): IPos;

	/**
	 * @param n The number of blocks to move the position north by.
	 * @return The new IPos object.
	 */
	north(n: number): IPos;

	/**
	 * Shifts the IPos east by 1 block and returns the new object.
	 */
	east(): IPos;

	/**
	 * @param n The number of blocks to move the position east by.
	 * @return The new IPos object.
	 */
	east(n: number): IPos;

	/**
	 * Shifts the IPos south by 1 block and returns the new object.
	 */
	south(): IPos;

	/**
	 * @param n The number of blocks to move the position south by.
	 * @return The new IPos object.
	 */
	south(n: number): IPos;

	/**
	 * Shifts the IPos west by 1 block and returns the new object.
	 */
	west(): IPos;

	/**
	 * @param n The number of blocks to move the position west by.
	 * @return The new IPos object.
	 */
	west(n: number): IPos;

	/**
	 * Adds the IPos' coordinates by each of the parameters given.
	 * 
	 * @param x X coordinate amount to be added
	 * @param y Y coordinate amount to be added
	 * @param z Z coordinate amount to be added
	 * @return The resulting IPos from the addition.
	 */
	add(x: number, y: number, z: number): IPos;

	/**
	 * Directly adds the coordinates of two IPos objects and returns the resulting IPos sum.
	 * For example, if one IPos was represented by the coordinates (0,60,5), and another by (-10,-30,25),
	 * the resulting object's coordinates are (0 - 10,60 - 30,5 + 25) = (-10,30,30).
	 * 
	 * @param pos The position to be added to this IPos object.
	 * @return The sum of the two IPos objects as a new IPos object.
	 */
	add(pos: IPos): IPos;

	/**
	 * Subtracts the IPos' coordinates by each of the parameters given.
	 * 
	 * @param x X coordinate amount to be subtracted
	 * @param y Y coordinate amount to be subtracted
	 * @param z Z coordinate amount to be subtracted
	 * @return The resulting IPos from the subtraction.
	 */
	subtract(x: number, y: number, z: number): IPos;

	/**
	 * Directly subtracts the coordinates of two IPos objects and returns the resulting IPos difference.
	 * For example, if one IPos was represented by the coordinates (0,60,5), and another by (-10,-30,25),
	 * the resulting object's coordinates are (0 + 10,60 + 30,5 - 25) = (10,90,-20).
	 * 
	 * @param pos The position to be subtracted from this IPos object.
	 * @return The difference of the two IPos objects as a new IPos object.
	 */
	subtract(pos: IPos): IPos;

	/**
	 * Returns a normalized vector of this block's position, calculated by:
	 * 
	 * @return The normalized vector of this block position.
	 */
	normalize(): IPos;

	normalizeDouble(): number[];

	/**
	 * Offsets the block by 1 block in the given direction and returns the resulting IPos object
	 */
	offset(direction: number): IPos;

	/**
	 * Offsets the block by n blocks in the given direction and returns the resulting IPos object
	 */
	offset(direction: number, n: number): IPos;

	crossProduct(x: number, y: number, z: number): IPos;

	crossProduct(pos: IPos): IPos;

	divide(scalar: number): IPos;

	toLong(): number;

	fromLong(serialized: number): IPos;

	/**
	 * @param pos The IPos object to calculate the distance to
	 * @return The distance between this IPos object and the other.
	 */
	distanceTo(pos: IPos): number;

	distanceTo(x: number, y: number, z: number): number;

	getMCPos(): BlockPos;

}

