
/**
 * Represents a linked item definition. Linked items are custom item templates
 * that can be globally updated; all existing instances inherit the new properties.
 */
export interface ILinkedItem extends IObject {
	/**
	 * Persists this linked item and returns the saved instance.
	 * 
	 * @return the saved linked item.
	 */
	save(): ILinkedItem;

	/**
	 * Creates an ItemStack from this linked item definition.
	 * 
	 * @return the created item stack.
	 */
	createStack(): IItemStack;

	/**
	 * @return the unique ID of this linked item.
	 */
	getId(): number;

	/**
	 * @param id the unique ID.
	 */
	setId(id: number): void;

	/**
	 * @return the version number of this linked item.
	 */
	getVersion(): number;

	/**
	 * @param version the new version number.
	 */
	setVersion(version: number): void;

	/**
	 * @return the display name.
	 */
	getName(): string;

	/**
	 * @param name the display name.
	 */
	setName(name: string): void;

	/**
	 * @return the durability value (max damage).
	 */
	getDurabilityValue(): number;

	/**
	 * @param durabilityValue the durability value.
	 */
	setDurabilityValue(durabilityValue: number): void;

	/**
	 * @return the maximum stack size.
	 */
	getStackSize(): number;

	/**
	 * @param stackSize the maximum stack size.
	 */
	setStackSize(stackSize: number): void;

	/**
	 * @return the maximum item use duration in ticks.
	 */
	getMaxItemUseDuration(): number;

	/**
	 * @param maxItemUseDuration the use duration in ticks.
	 */
	setMaxItemUseDuration(maxItemUseDuration: number): void;

	/**
	 * @return the item use action type.
	 * @see net.minecraft.item.EnumAction
	 */
	getItemUseAction(): number;

	/**
	 * @param itemUseAction the item use action type ordinal.
	 */
	setItemUseAction(itemUseAction: number): void;

	/**
	 * @return true if this is a normal (non-tool, non-armor) item.
	 */
	isNormalItem(): boolean;

	/**
	 * @param normalItem true for a normal item.
	 */
	setNormalItem(normalItem: boolean): void;

	/**
	 * @return true if this item functions as a tool.
	 */
	isTool(): boolean;

	/**
	 * @param tool true to mark as a tool.
	 */
	setTool(tool: boolean): void;

	/**
	 * @return the dig speed for tool items.
	 */
	getDigSpeed(): number;

	/**
	 * @param digSpeed the dig speed.
	 */
	setDigSpeed(digSpeed: number): void;

	/**
	 * @return the armor type slot.
	 *         0: helmet, 1: chestplate, 2: leggings, 3: boots, -1: not armor.
	 */
	getArmorType(): number;

	/**
	 * @param armorType the armor type slot.
	 */
	setArmorType(armorType: number): void;

	/**
	 * @return the enchantability value.
	 */
	getEnchantability(): number;

	/**
	 * @param enchantability the enchantability value.
	 */
	setEnchantability(enchantability: number): void;

	/**
	 * @return the attack speed in ticks between attacks.
	 */
	getAttackSpeed(): number;

	/**
	 * @param time attack speed in ticks.
	 */
	setAttackSpeed(time: number): void;
}

