import { IObject } from "./../../../../../IObject";
import { ILine } from "./ILine";


export interface ILines extends IObject {
	createLine(text: string): ILine;

	getLine(isRandom: boolean): ILine;

	getLine(lineIndex: number): ILine;

	setLine(lineIndex: number, line: ILine): void;

	removeLine(lineIndex: number): void;

	clear(): void;

	isEmpty(): boolean;

	getKeys(): number[];

}

