import { IObject } from "./../../../../../IObject";


/**
 * Defines the blueprint for an attribute.
 * <p>
 * An attribute definition contains identifying information such as a unique key,
 * a human-readable display name, a translation key for localization, and a color code.
 * </p>
 */
export interface IAttributeDefinition extends IObject {
	/**
	 * Returns the unique key that identifies this attribute.
	 * 
	 * @return a String representing the attribute key
	 */
	getKey(): string;

	/**
	 * Returns the human-readable display name for this attribute.
	 * 
	 * @return a String representing the display name
	 */
	getDisplayName(): string;

	/**
	 * Returns the translation key used for localizing this attribute.
	 * 
	 * @return a String representing the translation key
	 */
	getTranslationKey(): string;

	/**
	 * Returns the color code associated with this attribute.
	 * 
	 * @return a char representing the color code
	 */
	getColorCode(): string;

}
}
