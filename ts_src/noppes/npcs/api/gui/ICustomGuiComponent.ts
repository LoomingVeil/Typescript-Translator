import { IObject } from "./../../../../IObject";

import { NBTTagCompound } from "./../../../../missingTypes";

/**
 * Base interface for all custom GUI components.
 * Defines common methods for position, appearance, and NBT serialization.
 */
export interface ICustomGuiComponent extends IObject {
	/**
	 * Returns the unique ID of this component.
	 * 
	 * @return the component ID.
	 */
	getID(): number;

	/**
	 * Sets the unique ID for this component.
	 * 
	 * @param id the new ID.
	 * @return this component instance.
	 */
	setID(id: number): ICustomGuiComponent;

	/**
	 * Returns the x position of this component.
	 * 
	 * @return the x position.
	 */
	getPosX(): number;

	/**
	 * Returns the y position of this component.
	 * 
	 * @return the y position.
	 */
	getPosY(): number;

	/**
	 * Sets the position of the component.
	 * 
	 * @param x the new x position.
	 * @param y the new y position.
	 * @return this component instance.
	 */
	setPos(x: number, y: number): ICustomGuiComponent;

	/**
	 * Checks if the component has hover text.
	 * 
	 * @return true if hover text is set.
	 */
	hasHoverText(): boolean;

	/**
	 * Returns the hover text as an array of strings.
	 * 
	 * @return the hover text.
	 */
	getHoverText(): string[];

	/**
	 * Sets the hover text with a single line.
	 * 
	 * @param hoverText the hover text.
	 * @return this component instance.
	 */
	setHoverText(hoverText: string): ICustomGuiComponent;

	/**
	 * Sets the hover text with multiple lines.
	 * 
	 * @param hoverTextLines the hover text lines.
	 * @return this component instance.
	 */
	setHoverText(hoverTextLines: string[]): ICustomGuiComponent;

	/**
	 * Returns the text color.
	 * 
	 * @return the color as an integer.
	 */
	getColor(): number;

	/**
	 * Sets the text color.
	 * 
	 * @param color the color.
	 * @return this component instance.
	 */
	setColor(color: number): ICustomGuiComponent;

	/**
	 * Returns the component's transparency (alpha).
	 * 
	 * @return the alpha value.
	 */
	getAlpha(): number;

	/**
	 * Sets the component's transparency (alpha).
	 * 
	 * @param alpha the alpha value.
	 */
	setAlpha(alpha: number): void;

	/**
	 * Returns the component's rotation.
	 * 
	 * @return the rotation angle.
	 */
	getRotation(): number;

	/**
	 * Sets the component's rotation.
	 * 
	 * @param rotation the rotation angle.
	 */
	setRotation(rotation: number): void;

	/**
	 * Serializes the component to an NBT compound.
	 * 
	 * @param nbt the NBT compound to populate.
	 * @return the NBT compound.
	 */
	toNBT(nbt: NBTTagCompound): NBTTagCompound;

	/**
	 * Deserializes the component from an NBT compound.
	 * 
	 * @param nbt the NBT compound.
	 * @return this component instance.
	 */
	fromNBT(nbt: NBTTagCompound): ICustomGuiComponent;

}
}
