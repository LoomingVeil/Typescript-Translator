import { IObject } from "./../../../../../IObject";
import { IAttributeDefinition } from "./IAttributeDefinition";


/**
 * Represents an instance of a custom attribute.
 * <p>
 * A custom attribute instance encapsulates an {@link IAttributeDefinition}
 * along with its current calculated value (which may be affected by modifiers).
 * </p>
 */
export interface ICustomAttribute extends IObject {
	/**
	 * Returns the attribute definition associated with this custom attribute.
	 * 
	 * @return the {@link IAttributeDefinition} instance defining this attribute
	 */
	getAttribute(): IAttributeDefinition;

	/**
	 * Returns the current value of this attribute.
	 * 
	 * @return the float value representing the attribute's current state
	 */
	getValue(): number;

}
}
