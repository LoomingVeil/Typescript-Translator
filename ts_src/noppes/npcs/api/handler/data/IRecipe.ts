import { IObject } from "./../../../../../IObject";

import { ItemStack } from "./../../../../../missingTypes";

export interface IRecipe extends IObject {
	getName(): string;

	isGlobal(): boolean;

	setIsGlobal(var1: boolean): void;

	getIgnoreNBT(): boolean;

	setIgnoreNBT(var1: boolean): void;

	getIgnoreDamage(): boolean;

	setIgnoreDamage(var1: boolean): void;

	getWidth(): number;

	getHeight(): number;

	getResult(): ItemStack;

	getRecipe(): ItemStack[];

	delete(): void;

	getId(): number;

}

