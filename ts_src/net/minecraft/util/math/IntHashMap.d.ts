
export interface IntHashMap extends IObject {
	slots: Entry[];
	count: number;
	threshold: number;
	growFactor: number;
	/**
	 * Makes the passed in integer suitable for hashing by a number of shifts
	 */
	computeHash(integer: number): number;

	/**
	 * Computes the index of the slot for the hash and slot count passed in.
	 */
	getSlotIndex(hash: number, slotCount: number): number;

	/**
	 * Returns the object associated to a key
	 * 
	 * @param key the integer key to look up
	 * @return the value associated with the key, or null if not found
	 */
	lookup(key: number): V;

	/**
	 * Returns true if this hash table contains the specified item.
	 * 
	 * @param key the integer key to check
	 * @return true if the map contains this key
	 */
	containsItem(key: number): boolean;

	lookupEntry(p_76045_1_: number): Entry;

	/**
	 * Adds a key and associated value to this map
	 * 
	 * @param key the integer key
	 * @param value the value to associate with the key
	 */
	addKey(key: number, value: V): void;

	/**
	 * Increases the number of hash slots
	 */
	grow(p_76047_1_: number): void;

	/**
	 * Copies the hash slots to a new array
	 */
	copyTo(p_76048_1_: Entry[]): void;

	/**
	 * Removes the specified object from the map and returns it
	 * 
	 * @param key the integer key to remove
	 */
	removeObject(key: number): V;

	removeEntry(p_76036_1_: number): Entry;

	/**
	 * Removes all entries from the map
	 */
	clearMap(): void;

	/**
	 * Adds an object to a slot
	 */
	insert(p_76040_1_: number, p_76040_2_: number, p_76040_3_: V, p_76040_4_: number): void;
}

export interface Entry extends IObject {
	hashEntry: number;
	valueEntry: V;
	nextEntry: Entry;
	slotHash: number;
	/**
	 * Returns the hash code for this entry
	 */
	getHash(): number;

	/**
	 * Returns the object stored in this entry
	 */
	getValue(): V;

	equals(p_equals_1_: any): boolean;

	hashCode(): number;

	toString(): string;
}

