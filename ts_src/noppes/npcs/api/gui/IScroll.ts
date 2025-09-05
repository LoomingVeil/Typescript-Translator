import { ICustomGuiComponent } from "./ICustomGuiComponent";


/**
 * Represents a scrollable list component in a custom GUI.
 * Provides methods to control size, selection, and the displayed list.
 */
export interface IScroll extends ICustomGuiComponent {
	/**
	 * Returns the width of the scroll component.
	 * 
	 * @return the width in pixels.
	 */
	getWidth(): number;

	/**
	 * Returns the height of the scroll component.
	 * 
	 * @return the height in pixels.
	 */
	getHeight(): number;

	/**
	 * Sets the size of the scroll component.
	 * 
	 * @param width the new width.
	 * @param height the new height.
	 * @return this scroll instance.
	 */
	setSize(width: number, height: number): IScroll;

	/**
	 * Returns the list of text entries displayed in the scroll.
	 * 
	 * @return an array of strings.
	 */
	getList(): string[];

	/**
	 * Sets the list of text entries to display.
	 * 
	 * @param textList an array of strings.
	 * @return this scroll instance.
	 */
	setList(textList: string[]): IScroll;

	/**
	 * Returns the default selection index.
	 * 
	 * @return the default selection.
	 */
	getDefaultSelection(): number;

	/**
	 * Sets the default selection index.
	 * 
	 * @param defaultSelection the selection index.
	 * @return this scroll instance.
	 */
	setDefaultSelection(defaultSelection: number): IScroll;

	/**
	 * Checks whether multiple selections are allowed.
	 * 
	 * @return true if multi-select is enabled.
	 */
	isMultiSelect(): boolean;

	/**
	 * Sets whether multiple selections are allowed.
	 * 
	 * @param selectMultiple true to allow multi-select.
	 * @return this scroll instance.
	 */
	setMultiSelect(selectMultiple: boolean): IScroll;

}

