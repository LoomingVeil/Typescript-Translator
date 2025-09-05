import { IObject } from "./../../../../../IObject";


export interface IColorCodes extends IObject {
	BLACK: string;
	DARK_BLUE: string;
	DARK_GREEN: string;
	DARK_AQUA: string;
	DARK_RED: string;
	DARK_PURPLE: string;
	GOLD: string;
	GRAY: string;
	DARK_GRAY: string;
	BLUE: string;
	GREEN: string;
	AQUA: string;
	RED: string;
	LIGHT_PURPLE: string;
	YELLOW: string;
	WHITE: string;
	/**
	 * Gets the color code character for a given color name.
	 * 
	 * @param name The name of the color as a string (e.g., "Red") not case sensitive.
	 * @return The corresponding color code character, or 'x' if not found.
	 */
	getValue(name: string): string;

}
}
