import { IObject } from "./../../../../../IObject";


/**
 * Represents a cycle (or category) grouping for magics.
 * A magic cycle holds ordering and display information as well as associations
 * to multiple magics.
 */
export interface IMagicCycle extends IObject {
	/**
	 * Gets the unique identifier of this magic cycle.
	 * 
	 * @return the cycle ID
	 */
	getId(): number;

	/**
	 * Gets the internal name of the magic cycle.
	 * 
	 * @return the name of the cycle
	 */
	getName(): string;

	/**
	 * Sets the internal name of the magic cycle.
	 * 
	 * @param name the new name of the cycle
	 */
	setName(name: string): void;

	/**
	 * Gets the display name of the magic cycle.
	 * 
	 * @return the display name for the cycle
	 */
	getDisplayName(): string;

	/**
	 * Sets the display name of the magic cycle.
	 * 
	 * @param displayName the new display name of the cycle
	 */
	setDisplayName(displayName: string): void;

	/**
	 * Gets the layout type for the cycle.
	 * This is typically an integer representation of the layout enum.
	 * 
	 * 0: CIRCULAR
	 * 1: SQUARE
	 * 2: TREE
	 * 3: GENERATED
	 * 4: CIRCULAR_MANUAL
	 * 5: SQUARE_MANUAL
	 * 6: TREE_MANUAL
	 * 7: CHART
	 * 
	 * @return the layout type as an integer
	 */
	getLayoutType(): number;

	/**
	 * Sets the layout type for the cycle.
	 * The provided integer should correspond to a valid layout type.
	 * 
	 * 0: CIRCULAR
	 * 1: SQUARE
	 * 2: TREE
	 * 3: GENERATED
	 * 4: CIRCULAR_MANUAL
	 * 5: SQUARE_MANUAL
	 * 6: TREE_MANUAL
	 * 7: CHART
	 * 
	 * @param layout the layout type as an integer
	 */
	setLayoutType(layout: number): void;

}
}
