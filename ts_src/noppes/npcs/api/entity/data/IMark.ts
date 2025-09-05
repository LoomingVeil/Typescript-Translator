import { IObject } from "./../../../../../IObject";
import { IAvailability } from "./../../handler/data/IAvailability";


/**
 * Represents a mark that can be applied to an entity.
 * A mark holds a type, a color, and availability conditions.
 */
export interface IMark extends IObject {
	/**
	 * Returns the availability conditions associated with this mark.
	 * 
	 * @return the availability.
	 */
	getAvailability(): IAvailability;

	/**
	 * Returns the color value of this mark.
	 * 
	 * @return the color as an integer.
	 */
	getColor(): number;

	/**
	 * Sets the color value of this mark.
	 * 
	 * @param color the new color.
	 */
	setColor(color: number): void;

	/**
	 * Returns the type of this mark.
	 * 
	 * @return the mark type as an integer.
	 */
	getType(): number;

	/**
	 * Sets the type of this mark.
	 * 
	 * @param type the new type.
	 */
	setType(type: number): void;

	/**
	 * Calling this will send the changes you've made to the clients.
	 */
	update(): void;

}
}
