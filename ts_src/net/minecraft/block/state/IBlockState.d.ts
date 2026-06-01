
export interface IBlockState extends IObject {
	getPropertyNames(): Collection;

	getValue(property: IProperty): T;

	withProperty(property: IProperty, value: V): IBlockState;

	cycleProperty(property: IProperty): IBlockState;

	getProperties(): ImmutableMap;

	getBlock(): Block;
}

