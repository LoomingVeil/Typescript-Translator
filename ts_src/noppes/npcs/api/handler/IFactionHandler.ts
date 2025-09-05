import { IObject } from "./../../../../IObject";
import { IFaction } from "./data/IFaction";

import { List } from "./../../../../missingTypes";

export interface IFactionHandler extends IObject {
	list(): List;

	delete(var1: number): IFaction;

	create(var1: string, var2: number): IFaction;

	get(var1: number): IFaction;

}

