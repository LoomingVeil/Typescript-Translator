import { IObject } from "./../../../../../IObject";


export interface IAttributeSection extends IObject {
	BASE: number;
	MODIFIER: number;
	STATS: number;
	INFO: number;
	EXTRA: number;
	/**
	 * Gets the corresponding ordinal given a String representation.
	 * 
	 * @param value The name of the section as a string (e.g. "Base") not case sensitive.
	 * @return The corresponding ordinal, or -1 if not found.
	 */
	getValue(value: string): number;

}
}

export const AttributeSection: IAttributeSection = {} as IAttributeSection;
