import { ITileEntity } from "./ITileEntity";
import { IObject } from "./../../../IObject";
import { IWorld } from "./IWorld";
import { IPos } from "./IPos";
import { INbt } from "./INbt";
import { IItemStack } from "./item/IItemStack";
import { IContainer } from "./IContainer";

import { TileEntity } from "./../../../missingTypes";
import { Block } from "./../../../missingTypes";

export interface IBlock extends IObject {
	getX(): number;

	getY(): number;

	getZ(): number;

	/**
	 * @return An IPos object with the block's XYZ position.
	 */
	getPosition(): IPos;

	/**
	 * Moves the block to a new position in the given world. The old position is replaced with air.
	 * 
	 * @param pos The new position of the block
	 * @param world The destination world of the block
	 * @return Whether the block was successfully placed
	 */
	setPosition(pos: IPos, world: IWorld): boolean;

	setPosition(pos: IPos): boolean;

	setPosition(x: number, y: number, z: number, world: IWorld): boolean;

	setPosition(x: number, y: number, z: number): boolean;

	/**
	 * @return The block name as it appears in the block registry. Return example: "minecraft:stone"
	 */
	getName(): string;

	/**
	 * Deletes the block, setting it to air.
	 */
	remove(): void;

	isAir(): boolean;

	/**
	 * @param blockName The name of the block to be set in place of this block.
	 * @return The new block set in place of this block as an IBlock object.
	 */
	setBlock(blockName: string): IBlock;

	/**
	 * @param block Input IBlock object to replace this block.
	 * @return The new block set in place of the previous block.
	 */
	setBlock(block: IBlock): IBlock;

	/**
	 * @return True if the block can contain items like a chest does.
	 */
	isContainer(): boolean;

	/**
	 * @return The container object of this block. If this block is not a container, an exception will be thrown.
	 */
	getContainer(): IContainer;

	/**
	 * @return An IWorld object of the world this block is in.
	 */
	getWorld(): IWorld;

	/**
	 * @return True if this block has a tile entity. Blocks with custom data like signs, player skulls, chests, etc. will have tile entities.
	 */
	hasTileEntity(): boolean;

	/**
	 * @return An ITileEntity object which can modify this block's tile entity.
	 */
	getTileEntity(): ITileEntity;

	/**
	 * @param tileEntity Replaces this block's tile entity based on the data given by this parameter.
	 */
	setTileEntity(tileEntity: ITileEntity): void;

	/**
	 * @return An obfuscated MC object for the block's tile entity.
	 */
	getMCTileEntity(): TileEntity;

	/**
	 * @return An obfuscated MC block object.
	 */
	getMCBlock(): Block;

	getDisplayName(): string;

	/**
	 * @return An INbt object which can modify the block's tile entity's NBT data.
	 */
	getTileEntityNBT(): INbt;

	/**
	 * @param maxVolume The volume threshold to determine whether this block's bounding box collides, if it has one.
	 * @return Whether this block can be collided with
	 */
	canCollide(maxVolume: number): boolean;

	canCollide(): boolean;

	setBounds(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): void;

	getBlockBoundsMinX(): number;

	getBlockBoundsMinY(): number;

	getBlockBoundsMinZ(): number;

	getBlockBoundsMaxX(): number;

	getBlockBoundsMaxY(): number;

	getBlockBoundsMaxZ(): number;

	getDrops(fortune: number): IItemStack;

	/**
	 * Simulates generating the items that would drop from a block that exists in the world without using silk touch
	 */
	getDrops(): IItemStack;

	getAsItem(): IItemStack;

}

