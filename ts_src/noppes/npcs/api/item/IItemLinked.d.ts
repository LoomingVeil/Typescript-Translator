
export interface IItemLinked extends IItemCustomizable {
	getLinkedItem(): ILinkedItem;

	/**
	 * Sets the current durability value for this linked item stack.
	 * This is a per-stack override, not changing the linked item template.
	 * 
	 * @param durabilityValue The durability value
	 */
	setDurabilityValue(durabilityValue: number): void;
}

