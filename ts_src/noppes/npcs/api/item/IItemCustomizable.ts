

export interface IItemCustomizable extends IItemStack {
	getScriptHandler(): any;

	getMaxStackSize(): number;

	/**
	 * Gets the armor type for the scripted item.
	 * 
	 * @return The armor type
	 */
	getArmorType(): number;

	/**
	 * Checks if the scripted item is a tool. Allows for enchanting
	 * 
	 * @return True if the item is a tool, false otherwise
	 */
	isTool(): boolean;

	/**
	 * Checks if the scripted item is a normal item.
	 * 
	 * @return True if the item is a normal item, false otherwise
	 */
	isNormalItem(): boolean;

	/**
	 * Gets the dig speed for the scripted item.
	 * 
	 * @return The dig speed
	 */
	getDigSpeed(): number;

	/**
	 * Gets the current durability value for the scripted item.
	 * 
	 * @return The durability value
	 */
	getDurabilityValue(): number;

	/**
	 * Gets the maximum item use duration for the scripted item.
	 * 
	 * @return The maximum item use duration
	 */
	getMaxItemUseDuration(): number;

	/**
	 * Gets the item use action for the scripted item.
	 * 
	 * @return The item use action
	 */
	getItemUseAction(): number;

	/**
	 * Gets the enchantability for the scripted item.
	 * 
	 * @return The enchantability
	 */
	getEnchantability(): number;

	/**
	 * Gets the texture path for the scripted item.
	 * 
	 * @return The texture path
	 */
	getTexture(): string;

	/**
	 * Sets the texture path for the scripted item. Can be a URL
	 * 
	 * @param texture The texture path
	 */
	setTexture(texture: string): void;

	/**
	 * Checks if the durability bar should be shown for the scripted item.
	 * 
	 * @return True if the durability bar should be shown, false otherwise
	 */
	getDurabilityShow(): boolean;

	/**
	 * Sets whether the durability bar should be shown for the scripted item.
	 * 
	 * @param durabilityShow True if the durability bar should be shown, false otherwise
	 */
	setDurabilityShow(durabilityShow: boolean): void;

	/**
	 * Gets the color of the durability bar for the scripted item.
	 * 
	 * @return The durability bar color
	 */
	getDurabilityColor(): number;

	/**
	 * Sets the color of the durability bar for the scripted item.
	 * 
	 * @param durabilityColor The durability bar color
	 */
	setDurabilityColor(durabilityColor: number): void;

	/**
	 * Gets the color of the scripted item.
	 * 
	 * @return The item color
	 */
	getColor(): number;

	/**
	 * Sets the color of the scripted item.
	 * 
	 * @param color The item color
	 */
	setColor(color: number): void;

	/**
	 * Sets the rotation values for the scripted item.
	 * 
	 * @param rotationX The X-axis rotation
	 * @param rotationY The Y-axis rotation
	 * @param rotationZ The Z-axis rotation
	 */
	setRotation(rotationX: number, rotationY: number, rotationZ: number): void;

	/**
	 * Sets the rotation rate values for the scripted item. Spinning Speed
	 * 
	 * @param rotationXRate The X-axis rotation rate
	 * @param rotationYRate The Y-axis rotation rate
	 * @param rotationZRate The Z-axis rotation rate
	 */
	setRotationRate(rotationXRate: number, rotationYRate: number, rotationZRate: number): void;

	/**
	 * Sets the scale values for the scripted item.
	 * 
	 * @param scaleX The X-axis scale
	 * @param scaleY The Y-axis scale
	 * @param scaleZ The Z-axis scale
	 */
	setScale(scaleX: number, scaleY: number, scaleZ: number): void;

	/**
	 * Sets the translation values for the scripted item.
	 * 
	 * @param translateX The X-axis translation
	 * @param translateY The Y-axis translation
	 * @param translateZ The Z-axis translation
	 */
	setTranslate(translateX: number, translateY: number, translateZ: number): void;

	/**
	 * Gets the X-axis rotation for the scripted item.
	 * 
	 * @return The X-axis rotation
	 */
	getRotationX(): number;

	/**
	 * Gets the Y-axis rotation for the scripted item.
	 * 
	 * @return The Y-axis rotation
	 */
	getRotationY(): number;

	/**
	 * Gets the Z-axis rotation for the scripted item.
	 * 
	 * @return The Z-axis rotation
	 */
	getRotationZ(): number;

	/**
	 * Gets the X-axis rotation rate for the scripted item.
	 * 
	 * @return The X-axis rotation rate
	 */
	getRotationXRate(): number;

	/**
	 * Gets the Y-axis rotation rate for the scripted item.
	 * 
	 * @return The Y-axis rotation rate
	 */
	getRotationYRate(): number;

	/**
	 * Gets the Z-axis rotation rate for the scripted item.
	 * 
	 * @return The Z-axis rotation rate
	 */
	getRotationZRate(): number;

	/**
	 * Gets the X-axis scale for the scripted item.
	 * 
	 * @return The X-axis scale
	 */
	getScaleX(): number;

	/**
	 * Gets the Y-axis scale for the scripted item.
	 * 
	 * @return The Y-axis scale
	 */
	getScaleY(): number;

	/**
	 * Gets the Z-axis scale for the scripted item.
	 * 
	 * @return The Z-axis scale
	 */
	getScaleZ(): number;

	/**
	 * Gets the X-axis translation for the scripted item.
	 * 
	 * @return The X-axis translation
	 */
	getTranslateX(): number;

	/**
	 * Gets the Y-axis translation for the scripted item.
	 * 
	 * @return The Y-axis translation
	 */
	getTranslateY(): number;

	/**
	 * Gets the Z-axis translation for the scripted item.
	 * 
	 * @return The Z-axis translation
	 */
	getTranslateZ(): number;

	getHarvestLevel(toolClass: string): number;

	/**
	 * Sets the harvest level for a toolClass
	 * 
	 * @param toolClass vanilla tool classes include pickaxe, axe, shove, and hoe (hoe may only be in newer versions). Other mods may add their own toolClasses.
	 * @param level -1: Nothing; Same as mining with a stick, 0: wood/gold tools, 1: stone tools, 2: iron tools, 3: diamond tools
	 */
	setHarvestLevel(toolClass: string, level: number): void;

}
}
