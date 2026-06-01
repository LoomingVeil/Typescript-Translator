
/**
 * This class stores a block's data. This data is not attached to a position, so if the source block is removed,
 * The data will not change.
 */
export interface IBlockData extends IObject {
	getBlock(): Block;

	setBlock(block: Block): void;

	setBlock(item: IItemStack): void;

	setBlock(block: IBlock): void;

	getTileNbt(): NBTTagCompound;

	setTileNbt(tileNbt: NBTTagCompound): void;

	getMeta(): number;

	setMeta(meta: number): void;
}

