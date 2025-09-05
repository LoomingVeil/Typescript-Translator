import { Vec3i } from "./../Vec3i";
import { BlockPos } from "./BlockPos";

import { Iterable } from "./../../../../missingTypes";
import { EnumFacing } from "./../../../../missingTypes";
import { BlockPos.MutableBlockPos } from "./../../../../missingTypes";
import { BlockPos.PooledMutableBlockPos } from "./../../../../missingTypes";
import { List } from "./../../../../missingTypes";
import { Logger } from "./../../../../missingTypes";

/**
 * Pasted in from 1.9, with the Vec3d constructor removed
 */
export interface BlockPos extends Vec3i {
	LOGGER: Logger;
	ORIGIN: BlockPos;
	NUM_X_BITS: number;
	NUM_Z_BITS: number;
	NUM_Y_BITS: number;
	Y_SHIFT: number;
	X_SHIFT: number;
	X_MASK: number;
	Y_MASK: number;
	Z_MASK: number;
	/**
	 * Add the given coordinates to the coordinates of this BlockPos
	 */
	add(x: number, y: number, z: number): BlockPos;

	/**
	 * Add the given coordinates to the coordinates of this BlockPos
	 */
	add(x: number, y: number, z: number): BlockPos;

	/**
	 * Add the given Vector to this BlockPos
	 */
	add(vec: Vec3i): BlockPos;

	/**
	 * Offset this BlockPos 1 block up
	 */
	up(): BlockPos;

	/**
	 * Offset this BlockPos n blocks up
	 */
	up(n: number): BlockPos;

	/**
	 * Offset this BlockPos 1 block down
	 */
	down(): BlockPos;

	/**
	 * Offset this BlockPos n blocks down
	 */
	down(n: number): BlockPos;

	/**
	 * Offset this BlockPos 1 block in northern direction
	 */
	north(): BlockPos;

	/**
	 * Offset this BlockPos n blocks in northern direction
	 */
	north(n: number): BlockPos;

	/**
	 * Offset this BlockPos 1 block in southern direction
	 */
	south(): BlockPos;

	/**
	 * Offset this BlockPos n blocks in southern direction
	 */
	south(n: number): BlockPos;

	/**
	 * Offset this BlockPos 1 block in western direction
	 */
	west(): BlockPos;

	/**
	 * Offset this BlockPos n blocks in western direction
	 */
	west(n: number): BlockPos;

	/**
	 * Offset this BlockPos 1 block in eastern direction
	 */
	east(): BlockPos;

	/**
	 * Offset this BlockPos n blocks in eastern direction
	 */
	east(n: number): BlockPos;

	/**
	 * Offset this BlockPos 1 block in the given direction
	 */
	offset(facing: EnumFacing): BlockPos;

	/**
	 * Offsets this BlockPos n blocks in the given direction
	 */
	offset(facing: EnumFacing, n: number): BlockPos;

	/**
	 * Calculate the cross product of this and the given Vector
	 */
	crossProduct(vec: Vec3i): BlockPos;

	/**
	 * Serialize this BlockPos into a long value
	 */
	toLong(): number;

	/**
	 * Create a BlockPos from a serialized long value (created by toLong)
	 */
	fromLong(serialized: number): BlockPos;

	/**
	 * Create an Iterable that returns all positions in the box specified by the given corners
	 */
	getAllInBox(from: BlockPos, to: BlockPos): Iterable;

	export interface MutableBlockPos extends BlockPos {
		x: number;
		y: number;
		z: number;
		/**
		 * Gets the X coordinate.
		 */
		getX(): number;

		/**
		 * Gets the Y coordinate.
		 */
		getY(): number;

		/**
		 * Gets the Z coordinate.
		 */
		getZ(): number;

		/**
		 * Sets the position, MUST not be name 'set' as that causes obfusication conflicts with func_185343_d
		 */
		setPos(xIn: number, yIn: number, zIn: number): BlockPos.MutableBlockPos;

		setPos(p_189532_1_: number, p_189532_3_: number, p_189532_5_: number): BlockPos.MutableBlockPos;

		setPos(p_189533_1_: Vec3i): BlockPos.MutableBlockPos;

		move(p_189536_1_: EnumFacing): BlockPos.MutableBlockPos;

		move(p_189534_1_: EnumFacing, p_189534_2_: number): BlockPos.MutableBlockPos;

		setY(yIn: number): void;

		/**
		 * Returns a version of this BlockPos that is guaranteed to be immutable.
		 * 
		 * <p>When storing a BlockPos given to you for an extended period of time, make sure you
		 * use this in case the value is changed internally.</p>
		 */
		toImmutable(): BlockPos;

	}
	export interface PooledMutableBlockPos extends MutableBlockPos {
		released: boolean;
		POOL: List;
		retain(): BlockPos.PooledMutableBlockPos;

		retain(xIn: number, yIn: number, zIn: number): BlockPos.PooledMutableBlockPos;

		retain(xIn: number, yIn: number, zIn: number): BlockPos.PooledMutableBlockPos;

		release(): void;

		set(xIn: number, yIn: number, zIn: number): BlockPos.PooledMutableBlockPos;

		set(xIn: number, yIn: number, zIn: number): BlockPos.PooledMutableBlockPos;

		set(vec: Vec3i): BlockPos.PooledMutableBlockPos;

		offsetMutable(facing: EnumFacing): BlockPos.PooledMutableBlockPos;

		movePos(p_189538_1_: EnumFacing, p_189538_2_: number): BlockPos.PooledMutableBlockPos;

	}
}
}
