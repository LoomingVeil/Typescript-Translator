
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
	 * 
	 * @param x X offset
	 * @param y Y offset
	 * @param z Z offset
	 * @return a new BlockPos offset by the given values
	 */
	add(x: number, y: number, z: number): BlockPos;

	/**
	 * Add the given coordinates to the coordinates of this BlockPos
	 * 
	 * @param x X offset
	 * @param y Y offset
	 * @param z Z offset
	 * @return a new BlockPos offset by the given values
	 */
	add(x: number, y: number, z: number): BlockPos;

	/**
	 * Add the given Vector to this BlockPos
	 * 
	 * @param vec the vector to add
	 * @return a new BlockPos offset by the vector
	 */
	add(vec: Vec3i): BlockPos;

	/**
	 * Offset this BlockPos 1 block up
	 * 
	 * @return the BlockPos one block above
	 */
	up(): BlockPos;

	/**
	 * Offset this BlockPos n blocks up
	 * 
	 * @param n the distance upward
	 * @return the BlockPos n blocks above
	 */
	up(n: number): BlockPos;

	/**
	 * Offset this BlockPos 1 block down
	 * 
	 * @return the BlockPos one block below
	 */
	down(): BlockPos;

	/**
	 * Offset this BlockPos n blocks down
	 * 
	 * @param n the distance downward
	 * @return the BlockPos n blocks below
	 */
	down(n: number): BlockPos;

	/**
	 * Offset this BlockPos 1 block in northern direction
	 * 
	 * @return the BlockPos one block to the north
	 */
	north(): BlockPos;

	/**
	 * Offset this BlockPos n blocks in northern direction
	 * 
	 * @param n the distance northward
	 * @return the BlockPos n blocks to the north
	 */
	north(n: number): BlockPos;

	/**
	 * Offset this BlockPos 1 block in southern direction
	 * 
	 * @return the BlockPos one block to the south
	 */
	south(): BlockPos;

	/**
	 * Offset this BlockPos n blocks in southern direction
	 * 
	 * @param n the distance southward
	 * @return the BlockPos n blocks to the south
	 */
	south(n: number): BlockPos;

	/**
	 * Offset this BlockPos 1 block in western direction
	 * 
	 * @return the BlockPos one block to the west
	 */
	west(): BlockPos;

	/**
	 * Offset this BlockPos n blocks in western direction
	 * 
	 * @param n the distance westward
	 * @return the BlockPos n blocks to the west
	 */
	west(n: number): BlockPos;

	/**
	 * Offset this BlockPos 1 block in eastern direction
	 * 
	 * @return the BlockPos one block to the east
	 */
	east(): BlockPos;

	/**
	 * Offset this BlockPos n blocks in eastern direction
	 * 
	 * @param n the distance eastward
	 * @return the BlockPos n blocks to the east
	 */
	east(n: number): BlockPos;

	/**
	 * Offset this BlockPos 1 block in the given direction
	 * 
	 * @param facing the direction to offset
	 * @return the BlockPos one block in the given direction
	 */
	offset(facing: EnumFacing): BlockPos;

	/**
	 * Offsets this BlockPos n blocks in the given direction
	 * 
	 * @param facing the direction to offset
	 * @param n the distance
	 * @return the BlockPos n blocks in the given direction
	 */
	offset(facing: EnumFacing, n: number): BlockPos;

	/**
	 * Calculate the cross product of this and the given Vector
	 */
	crossProduct(vec: Vec3i): BlockPos;

	/**
	 * Serialize this BlockPos into a long value
	 * 
	 * @return this position serialized as a long
	 */
	toLong(): number;

	/**
	 * Create a BlockPos from a serialized long value (created by toLong)
	 * 
	 * @param serialized the serialized position
	 * @return a BlockPos decoded from the long
	 */
	fromLong(serialized: number): BlockPos;

	/**
	 * Create an Iterable that returns all positions in the box specified by the given corners
	 * 
	 * @param from the starting corner
	 * @param to the ending corner
	 * @return an iterable of all BlockPos within the bounding box
	 */
	getAllInBox(from: BlockPos, to: BlockPos): Iterable;
}

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
	 * 
	 * @param x the X coordinate
	 * @param y the Y coordinate
	 * @param z the Z coordinate
	 * @return this mutable position
	 */
	setPos(x: number, y: number, z: number): MutableBlockPos;

	setPos(p_189532_1_: number, p_189532_3_: number, p_189532_5_: number): MutableBlockPos;

	setPos(p_189533_1_: Vec3i): MutableBlockPos;

	move(p_189536_1_: EnumFacing): MutableBlockPos;

	move(p_189534_1_: EnumFacing, p_189534_2_: number): MutableBlockPos;

	setY(yIn: number): void;

	/**
	 * Returns a version of this BlockPos that is guaranteed to be immutable.
	 * 
	 * <p>When storing a BlockPos given to you for an extended period of time, make sure you
	 * use this in case the value is changed internally.</p>
	 * 
	 * @return an immutable copy of this position
	 */
	toImmutable(): BlockPos;
}

export interface PooledMutableBlockPos extends MutableBlockPos {
	released: boolean;
	POOL: List;
	retain(): PooledMutableBlockPos;

	retain(xIn: number, yIn: number, zIn: number): PooledMutableBlockPos;

	retain(xIn: number, yIn: number, zIn: number): PooledMutableBlockPos;

	release(): void;

	set(xIn: number, yIn: number, zIn: number): PooledMutableBlockPos;

	set(xIn: number, yIn: number, zIn: number): PooledMutableBlockPos;

	set(vec: Vec3i): PooledMutableBlockPos;

	offsetMutable(facing: EnumFacing): PooledMutableBlockPos;

	movePos(p_189538_1_: EnumFacing, p_189538_2_: number): PooledMutableBlockPos;
}

