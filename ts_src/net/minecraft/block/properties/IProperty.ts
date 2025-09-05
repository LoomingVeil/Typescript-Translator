import { IObject } from "./../../../../IObject";

import { Collection } from "./../../../../missingTypes";
import { Class } from "./../../../../missingTypes";

export interface IProperty extends IObject {
	getName(): string;

	getAllowedValues(): Collection;

	getValueClass(): Class;

	/**
	 * Get the name for the given value.
	 */
	getName(value: T): string;

}

