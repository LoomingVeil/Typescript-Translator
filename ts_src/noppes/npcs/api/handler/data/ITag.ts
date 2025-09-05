import { IObject } from "./../../../../../IObject";


export interface ITag extends IObject {
	getUuid(): string;

	getName(): string;

	setName(name: string): void;

	setColor(c: number): void;

	getId(): number;

	getColor(): number;

	getIsHidden(): boolean;

	setIsHidden(hidden: boolean): void;

	save(): void;

}

