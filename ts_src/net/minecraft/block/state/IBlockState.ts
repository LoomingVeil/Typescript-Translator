import { IObject } from "./../../../../IObject";
import { IProperty } from "./../properties/IProperty";

import { Collection } from "./../../../../missingTypes";
import { Block } from "./../../../../missingTypes";
import { ImmutableMap } from "./../../../../missingTypes";

export interface IBlockState extends IObject {
	getPropertyNames(): Collection;

	getValue(property: IProperty): T;

	withProperty(property: IProperty, value: V): IBlockState;

	cycleProperty(property: IProperty): IBlockState;

	getProperties(): ImmutableMap;

	getBlock(): Block;

}

