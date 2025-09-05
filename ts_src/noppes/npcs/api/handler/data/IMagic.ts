import { IObject } from "./../../../../../IObject";


/**
 * Represents a magic element that can have interactions with other magics.
 * Each magic has unique properties such as an ID, name, color, and display name,
 * and can hold interaction values with other magics.
 */
export interface IMagic extends IObject {
	/**
	 * Gets the unique identifier of this magic.
	 * 
	 * @return the magic ID
	 */
	getId(): number;

	/**
	 * Gets the internal name of the magic.
	 * 
	 * @return the name of the magic
	 */
	getName(): string;

	/**
	 * Sets the internal name of the magic.
	 * 
	 * @param name the new name of the magic
	 */
	setName(name: string): void;

	/**
	 * Sets the color for this magic.
	 * 
	 * @param c the color represented as an integer (typically in hexadecimal)
	 */
	setColor(c: number): void;

	/**
	 * Gets the color of this magic.
	 * 
	 * @return the color as an integer
	 */
	getColor(): number;

	/**
	 * Gets the display name of the magic.
	 * 
	 * @return the display name of the magic
	 */
	getDisplayName(): string;

	/**
	 * Sets the display name of the magic.
	 * 
	 * @param displayName the new display name
	 */
	setDisplayName(displayName: string): void;

	/**
	 * Saves the current state of the magic.
	 * Typically persists changes to a controller or storage system.
	 */
	save(): void;

	/**
	 * Checks if this magic has an interaction value set for another magic.
	 * 
	 * @param magicID the unique identifier of the other magic
	 * @return true if an interaction is present, false otherwise
	 */
	hasInteraction(magicID: number): boolean;

	/**
	 * Sets an interaction value for a specific other magic.
	 * 
	 * @param magicID the unique identifier of the other magic
	 * @param value the interaction value (usually a percentage or multiplier)
	 */
	setInteraction(magicID: number, value: number): void;

	/**
	 * Retrieves the interaction value for a specific other magic.
	 * 
	 * @param magicID the unique identifier of the other magic
	 * @param value the default value to return if no interaction is found
	 * @return the interaction value if present; otherwise, the default value
	 */
	getInteraction(magicID: number, value: number): number;

}

