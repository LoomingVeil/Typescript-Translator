import { IBlock } from "./IBlock";
import { IObject } from "./../../../IObject";
import { INbt } from "./INbt";
import { IWorld } from "./IWorld";
import { IPos } from "./IPos";

import { TileEntity } from "./../../../missingTypes";

export interface ITileEntity extends IObject {
	/**
	 * @return An integer representing the metadata of this block. Blocks with different states will
	 * return different values. For example, each stage of growth for a wheat crop will return a different value, each
	 * orientation of a stair block will return a different value, etc.
	 */
	getBlockMetadata(): number;

	/**
	 * @return The world this tile entity is in.
	 */
	getWorld(): IWorld;

	setWorld(world: IWorld): void;

	/**
	 * @return An obfuscated MC tile entity object.
	 */
	getMCTileEntity(): TileEntity;

	markDirty(): void;

	/**
	 * Reads an INbt compound tag, creates a tile entity based on the data, and replaces this entity with the new one.
	 */
	readFromNBT(nbt: INbt): void;

	/**
	 * @return The distance of this tile entity from the point given by the x, y, and z parameters.
	 */
	getDistanceFrom(x: number, y: number, z: number): number;

	getDistanceFrom(pos: IPos): number;

	/**
	 * @return A new IBlock object based on this tile entity's type.
	 */
	getBlockType(): IBlock;

	/**
	 * @return True if the tile entity is invalid, false otherwise.
	 */
	isInvalid(): boolean;

	/**
	 * Invalidates the tile entity.
	 */
	invalidate(): void;

	/**
	 * Validates the tile entity for use.
	 */
	validate(): void;

	/**
	 * Updates the block's tile entity to the values set in this object.
	 */
	updateContainingBlockInfo(): void;

	/**
	 * Writes the tile entity to NBT and returns the compound tag.
	 */
	getNBT(): INbt;

}

