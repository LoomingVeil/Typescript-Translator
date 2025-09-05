import { IItemCustomizable } from "./IItemCustomizable";


export interface IItemCustom extends IItemCustomizable {
	/**
	 * @return true if scripted item script is enabled
	 */
	getEnabled(): boolean;

	/**
	 * @param enable Enable or Disable scripted item script
	 */
	setEnabled(enable: boolean): void;

	/**
	 * Sets the armor type for the scripted item.
	 * 
	 * @param armorType The armor type
	 */
	setArmorType(armorType: number): void;

	/**
	 * Sets whether the scripted item is a tool.
	 * 
	 * @param isTool True if the item is a tool, false otherwise
	 */
	setIsTool(isTool: boolean): void;

	/**
	 * Sets whether the scripted item is a normal item. Will disable
	 * all forms of Rotation, Translation, Scale Rendering in hand and on ground
	 * 
	 * @param normalItem True if the item is a normal item, false otherwise
	 */
	setIsNormalItem(normalItem: boolean): void;

	/**
	 * Sets the dig speed for the scripted item.
	 * 
	 * @param digSpeed The dig speed
	 */
	setDigSpeed(digSpeed: number): void;

	/**
	 * Sets the maximum stack size for the scripted item.
	 * 
	 * @param maxStackSize The maximum stack size
	 */
	setMaxStackSize(maxStackSize: number): void;

	/**
	 * Sets the current durability value for the scripted item.
	 * 
	 * @param durabilityValue The durability value
	 */
	setDurabilityValue(durabilityValue: number): void;

	/**
	 * Sets the maximum item use duration for the scripted item.
	 * 
	 * @param duration The maximum item use duration
	 */
	setMaxItemUseDuration(duration: number): void;

	/**
	 * Sets the item use action for the scripted item.
	 * 
	 * @param action The item use action
	 */
	setItemUseAction(action: number): void;

	/**
	 * Sets the enchantability for the scripted item.
	 * 
	 * @param enchantability The enchantability
	 */
	setEnchantability(enchantability: number): void;

}

