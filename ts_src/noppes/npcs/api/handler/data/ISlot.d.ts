
export interface ISlot extends IObject {
	/**
	 * @return id of slot
	 */
	getId(): number;

	/**
	 * @return Name of Slot
	 */
	getName(): string;

	/**
	 * @param name - New name of slot
	 */
	setName(name: string): void;

	/**
	 * @return Last time Slot was Saved
	 */
	getLastLoaded(): number;

	/**
	 * @param time - Long time for when it was last saved
	 */
	setLastLoaded(time: number): void;

	/**
	 * @return if the slot is temporary
	 */
	isTemporary(): boolean;

	/**
	 * @param temporary - Setting a slot to temporary won't save it to Profile
	 */
	setTemporary(temporary: boolean): void;

	/**
	 * @return A map of all the NBTs within a slot
	 */
	getComponents(): Map;

	/**
	 * Sets the NBT data for a specific component key.
	 * 
	 * @param key the component key (e.g. "CNPC+", "DBC").
	 * @param data the NBT data to store.
	 */
	setComponentData(key: string, data: NBTTagCompound): void;

	/**
	 * @param key - The KEY of the NBT for the Slot: [CNPC+, DBC... etc]
	 * @return NBT for that that key
	 */
	getComponentData(key: string): NBTTagCompound;

	/**
	 * @return The full NBT of the Slot
	 */
	toNBT(): NBTTagCompound;
}

