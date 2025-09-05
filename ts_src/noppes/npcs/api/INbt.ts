import { IObject } from "./../../../IObject";

import { NBTTagCompound } from "./../../../missingTypes";

/**
 * A scripted data representation of an MC NBTTagCompound object. Using these functions modifies the compound tag
 * associated with this object. Any changes made to the compound tag are made directly to its "tagMap" attribute,
 * minimizing the impact of setting/getting NBT data with this object on performance.
 * 
 * Compound tags, unlike list tags, can contain multiple types of NBT tag types. Compound tags can even
 * contain compound tags inside them, and if that compound tag is accessed, an object like this one will also be returned!
 * 
 * Every tag inside a compound tag has a -unique- "key". If you try to put another tag of the same key inside the
 * compound tag, it will replace the previous tag.
 * 
 * The types and their type as an integer are as follows:
 * 1: Byte
 * 2: Short
 * 3: Int
 * 4: Long
 * 5: Float
 * 6: Double
 * 7: Byte array
 * 8: String
 * 9: Tag list
 * 10: Compound
 * 11: Integer array
 */
export interface INbt extends IObject {
	/**
	 * Returns the tag with the given key from the compound tag.
	 */
	remove(key: string): void;

	/**
	 * @return True if the compound tag has a tag with the given key.
	 */
	has(key: string): boolean;

	getBoolean(key: string): boolean;

	setBoolean(key: string, value: boolean): void;

	getShort(key: string): number;

	setShort(key: string, value: number): void;

	getInteger(key: string): number;

	setInteger(key: string, value: number): void;

	getByte(key: string): number;

	setByte(key: string, value: number): void;

	getLong(key: string): number;

	setLong(key: string, value: number): void;

	getDouble(key: string): number;

	setDouble(key: string, value: number): void;

	getFloat(key: string): number;

	setFloat(key: string, value: number): void;

	getString(key: string): string;

	setString(key: string, value: string): void;

	getByteArray(key: string): number[];

	setByteArray(key: string, value: number[]): void;

	getIntegerArray(key: string): number[];

	setIntegerArray(key: string, value: number[]): void;

	/**
	 * Returns a tag list of objects with this key in the compound tag. All the objects in the list
	 * will always be of the same type.
	 * 
	 * @return The tag list of objects, depending on the tag type.
	 */
	getList(key: string, value: number): any[];

	/**
	 * Returns the type of the tag list with this key, as an integer.
	 */
	getListType(key: string): number;

	/**
	 * Adds a new tag list to the compound tag with the given key.
	 * 
	 * @param key The key for the list tag
	 * @param value The list of objects to be in the list. The type of the first element in this list becomes the tag
	 *              list's type, and if later objects are not of this type, they will not be added.
	 */
	setList(key: string, value: any[]): void;

	getCompound(key: string): INbt;

	setCompound(key: string, value: INbt): void;

	/**
	 * @return A list of all the compound tag's keys.
	 */
	getKeys(): string[];

	/**
	 * @return The type of the tag with the input key as an integer.
	 */
	getType(key: string): number;

	/**
	 * @return An obfuscated MC NBTTagCompound object.
	 */
	getMCNBT(): NBTTagCompound;

	/**
	 * @return A curly-bracket formatted JSON string of all the compound tag.
	 */
	toJsonString(): string;

	isEqual(nbt: INbt): boolean;

	/**
	 * Completely clears the compound tag of all tags inside it.
	 */
	clear(): void;

}

