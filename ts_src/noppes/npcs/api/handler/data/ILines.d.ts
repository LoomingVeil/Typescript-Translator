
/**
 * A collection of dialog lines, supporting creation, indexed access, and random retrieval.
 */
export interface ILines extends IObject {
	/**
	 * Creates and adds a new line with the given text.
	 * 
	 * @param text the line text.
	 * @return the created line.
	 */
	createLine(text: string): ILine;

	/**
	 * Returns a line, either randomly or sequentially.
	 * 
	 * @param isRandom true to return a random line; false for sequential.
	 * @return the selected line, or null if empty.
	 */
	getLine(isRandom: boolean): ILine;

	/**
	 * Returns the line at the given index.
	 * 
	 * @param lineIndex the line index.
	 * @return the line, or null if the index is invalid.
	 */
	getLine(lineIndex: number): ILine;

	/**
	 * Sets the line at the given index.
	 * 
	 * @param lineIndex the line index.
	 * @param line the line to set.
	 */
	setLine(lineIndex: number, line: ILine): void;

	/**
	 * Removes the line at the given index.
	 * 
	 * @param lineIndex the line index.
	 */
	removeLine(lineIndex: number): void;

	/**
	 * Removes all lines.
	 */
	clear(): void;

	/**
	 * @return true if there are no lines.
	 */
	isEmpty(): boolean;

	/**
	 * @return the indices of all stored lines.
	 */
	getKeys(): number[];
}

