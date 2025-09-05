import { ITag } from "./data/ITag";
import { IObject } from "./../../../../IObject";

import { List } from "./../../../../missingTypes";

export interface ITagHandler extends IObject {
	list(): List;

	delete(var1: number): ITag;

	create(var1: string, var2: number): ITag;

	get(var1: number): ITag;

}
}
