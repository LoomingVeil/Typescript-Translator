// Generated from translator static/global namespaces.

// Do not edit manually.

declare namespace extAPI {
	/**
	 * Gets an array of the names of the registered entities in the game.
	 * These names can be used in functions like {@link #createIEntity(String, IWorld)}.
	 */
	function getEntityNameList(): string[];

	/**
	 * Creates an instance of an IEntity that can be spawned in the world with {@link IWorld#spawnEntityInWorld(noppes.npcs.api.entity.IEntity)}
	 * 
	 * @param entityName To see all valid names, call {@link #getEntityNameList()}
	 * @return An IEntity or null if entityName is invalid
	 */
	function createIEntity(entityName: string, world: IWorld): IEntity;

	/**
	 * Creates an instance of an ICustomProjectile that can be spawned in the world with {@link IWorld#spawnEntityInWorld(noppes.npcs.api.entity.IEntity)}
	 * Once spawned in, the entity will move as if it had been fired from the shooter.
	 */
	function createCustomProjectile(texture: string, shooter: IEntityLivingBase): ICustomProjectile;

	function createCustomProjectile(shooter: IEntityLivingBase): ICustomProjectile;

	/**
	 * Converts a hex code to an integer color that can be used for ScriptedItem's setColor {@link noppes.npcs.api.item.IItemCustomizable#setColor(Integer)} method.
	 * 
	 * @param hex A length six hex code (#'s are removed automatically)
	 * @return An integer color or -1 if wrong length and -2 if string is not a hex code.
	 */
	function hexToNpcColor(hex: string): number;

	function npcColorToHex(npcColor: number): string;

	function getAllServerPlayerNames(): string[];

	/**
	 * Registers a custom attribute that can both be applied via script or /kam attribute. Attributes are registered per world.
	 * 
	 * @param key This, by convention, is always lowercase and words are separated by _'s. This name is used within your scripts to denote your attribute.
	 * @param displayName This name will show up on your item.
	 * @param colorCode Takes one of Minecraft's 16 colors 0-9 and a-f. See {@link IColorCodes}.
	 * @param attributeType 0. Flat, 1. Percent, 2. Magic. See {@link IAttributeValueType}
	 * @param section 0. Base, 1. Modifier, 2. Stats, 3. Info, 4. Extra. The higher the number, the further down the section is. See {@link IAttributeSection}
	 */
	function registerAttribute(key: string, displayName: string, colorCode: string, attributeType: number, section: number): void;

	/**
	 * Unregisters a custom attribute. Unregistering an attribute also removes it from all items.
	 */
	function unregisterAttribute(key: string): boolean;

	function attributeExists(key: string): boolean;

	/**
	 * Gets a list of all the custom attributes' keys currently registered in your world.
	 */
	function getAttributeKeyList(): string[];

	/**
	 * Gets a list of only the custom attributes' keys that do not come natively with CustomNpcs+.
	 */
	function getCustomAttributeKeyList(): string[];

	function getAttributeDefinition(key: string): IAttributeDefinition;

	/**
	 * Creates an object which can be added to {@link com.veil.extendedscripts.extendedapi.item.IItemPotion} objects.
	 * 
	 * @param duration duration in ticks.
	 * @param amplifier 0 indexed so 0 is level I, 1 is level II, ect.
	 * @throws Exception when an invalid id is inputted.
	 */
	function getIPotionEffect(id: number, duration: number, amplifier: number): IPotionEffect;

	function getIPotionEffect(id: number): IPotionEffect;

	/**
	 * Gets the width of the string in pixels. This can be useful for centering {@link noppes.npcs.api.gui.ILabel}'s text.
	 * Having certain non-standard special characters may produce inaccurate results.
	 */
	function getStringPixelWidth(text: string): number;

}

declare namespace AnimationType {
	var NONE: number;
	var SITTING: number;
	var LYING: number;
	var SNEAKING: number;
	var DANCING: number;
	var AIMING: number;
	var CRAWLING: number;
	var HUGGING: number;
}

declare namespace AttributeSection {
	var BASE: number;
	var MODIFIER: number;
	var STATS: number;
	var INFO: number;
	var EXTRA: number;
	/**
	 * Gets the corresponding ordinal given a String representation.
	 * 
	 * @param value The name of the section as a string (e.g. "Base") not case sensitive.
	 * @return The corresponding ordinal, or -1 if not found.
	 */
	function getValue(value: string): number;

}

declare namespace AttributeValueType {
	var FLAT: number;
	var PERCENT: number;
	var MAGIC: number;
	function getValue(value: string): number;

}

declare namespace BlockSide {
	var BOTTOM: number;
	var TOP: number;
	var BACK: number;
	var FRONT: number;
	var LEFT: number;
	var RIGHT: number;
}

declare namespace Color {
	var BLACK: string;
	var DARK_BLUE: string;
	var DARK_GREEN: string;
	var DARK_AQUA: string;
	var DARK_RED: string;
	var DARK_PURPLE: string;
	var GOLD: string;
	var GRAY: string;
	var DARK_GRAY: string;
	var BLUE: string;
	var GREEN: string;
	var AQUA: string;
	var RED: string;
	var LIGHT_PURPLE: string;
	var YELLOW: string;
	var WHITE: string;
	/**
	 * Gets the color code character for a given color name.
	 * 
	 * @param name The name of the color as a string (e.g., "Red") not case sensitive.
	 * @return The corresponding color code character, or 'x' if not found.
	 */
	function getValue(name: string): string;

}

declare namespace Effect {
	var SPEED: number;
	var SLOWNESS: number;
	var HASTE: number;
	var MINING_FATIGUE: number;
	var STRENGTH: number;
	var INSTANT_HEALTH: number;
	var INSTANT_DAMAGE: number;
	var JUMP_BOOST: number;
	var NAUSEA: number;
	var REGENERATION: number;
	var RESISTANCE: number;
	var FIRE_RESISTANCE: number;
	var WATER_BREATHING: number;
	var INVISIBILITY: number;
	var BLINDNESS: number;
	var NIGHT_VISION: number;
	var HUNGER: number;
	var WEAKNESS: number;
	var POISON: number;
	var WITHER: number;
	var HEALTH_BOOST: number;
	var ABSORPTION: number;
	var SATURATION: number;
}

declare namespace EntityType {
	var ENTITY: number;
	var PLAYER: number;
	var NPC: number;
	var MONSTER: number;
	var ANIMAL: number;
	var LIVING: number;
	var ITEM: number;
	var PROJECTILE: number;
	var PIXELMON: number;
	var VILLAGER: number;
}

declare namespace ItemType {
	var DEFAULT: number;
	var BOOK: number;
	var BLOCK: number;
	var SWORD: number;
	var ARMOR: number;
	var PLANTABLE: number;
	var SCRIPTED_ITEM: number;
	var FOOD: number;
	var POTION: number;
	var TOOL: number;
}

declare namespace UseAction {
	var NONE: number;
	var BLOCK: number;
	var BOW: number;
	var EAT: number;
	var DRINK: number;
}

declare namespace Job {
	var NONE: number;
	var BARD: number;
	var HEALER: number;
	var GUARD: number;
	var ITEM_GIVER: number;
	var FOLLOWER: number;
	var SPAWNER: number;
	var CONVERSATION: number;
	var CHUNK_LOADER: number;
}

declare namespace Key {
	var K_NONE: number;
	var K_ESCAPE: number;
	var K_1: number;
	var K_2: number;
	var K_3: number;
	var K_4: number;
	var K_5: number;
	var K_6: number;
	var K_7: number;
	var K_8: number;
	var K_9: number;
	var K_0: number;
	var K_MINUS: number;
	var K_EQUALS: number;
	var K_BACK: number;
	var K_TAB: number;
	var K_Q: number;
	var K_W: number;
	var K_E: number;
	var K_R: number;
	var K_T: number;
	var K_Y: number;
	var K_U: number;
	var K_I: number;
	var K_O: number;
	var K_P: number;
	var K_LBRACKET: number;
	var K_RBRACKET: number;
	var K_RETURN: number;
	var K_LCONTROL: number;
	var K_A: number;
	var K_S: number;
	var K_D: number;
	var K_F: number;
	var K_G: number;
	var K_H: number;
	var K_J: number;
	var K_K: number;
	var K_L: number;
	var K_SEMICOLON: number;
	var K_APOSTROPHE: number;
	var K_GRAVE: number;
	var K_LSHIFT: number;
	var K_BACKSLASH: number;
	var K_Z: number;
	var K_X: number;
	var K_C: number;
	var K_V: number;
	var K_B: number;
	var K_N: number;
	var K_M: number;
	var K_COMMA: number;
	var K_PERIOD: number;
	var K_SLASH: number;
	var K_RSHIFT: number;
	var K_MULTIPLY: number;
	var K_LMENU: number;
	var K_SPACE: number;
	var K_CAPITAL: number;
	var K_F1: number;
	var K_F2: number;
	var K_F3: number;
	var K_F4: number;
	var K_F5: number;
	var K_F6: number;
	var K_F7: number;
	var K_F8: number;
	var K_F9: number;
	var K_F10: number;
	var K_NUMLOCK: number;
	var K_SCROLL: number;
	var K_NUMPAD7: number;
	var K_NUMPAD8: number;
	var K_NUMPAD9: number;
	var K_SUBTRACT: number;
	var K_NUMPAD4: number;
	var K_NUMPAD5: number;
	var K_NUMPAD6: number;
	var K_ADD: number;
	var K_NUMPAD1: number;
	var K_NUMPAD2: number;
	var K_NUMPAD3: number;
	var K_NUMPAD0: number;
	var K_DECIMAL: number;
	var K_F11: number;
	var K_F12: number;
	var K_F13: number;
	var K_F14: number;
	var K_F15: number;
	var K_F16: number;
	var K_F17: number;
	var K_F18: number;
	var K_KANA: number;
	var K_F19: number;
	var K_CONVERT: number;
	var K_NOCONVERT: number;
	var K_YEN: number;
	var K_NUMPADEQUALS: number;
	var K_CIRCUMFLEX: number;
	var K_AT: number;
	var K_COLON: number;
	var K_UNDERLINE: number;
	var K_KANJI: number;
	var K_STOP: number;
	var K_AX: number;
	var K_UNLABELED: number;
	var K_NUMPADENTER: number;
	var K_RCONTROL: number;
	var K_SECTION: number;
	var K_NUMPADCOMMA: number;
	var K_DIVIDE: number;
	var K_SYSRQ: number;
	var K_RMENU: number;
	var K_FUNCTION: number;
	var K_PAUSE: number;
	var K_HOME: number;
	var K_UP: number;
	var K_PRIOR: number;
	var K_LEFT: number;
	var K_RIGHT: number;
	var K_END: number;
	var K_DOWN: number;
	var K_NEXT: number;
	var K_INSERT: number;
	var K_DELETE: number;
	var K_CLEAR: number;
	var K_LMETA: number;
	var K_RMETA: number;
	var K_APPS: number;
	var K_POWER: number;
	var K_SLEEP: number;
}

declare namespace MouseButton {
	var SCROLL: number;
	var LEFT: number;
	var RIGHT: number;
	var MIDDLE: number;
	var MB4: number;
	var MB5: number;
}

declare namespace Particle {
	var HUGE_EXPLOSION: string;
	var LARGE_EXPLOSION: string;
	var FIREWORKS_SPARK: string;
	var BUBBLE: string;
	var SUSPENDED: string;
	var DEPTH_SUSPENDED: string;
	var TOWN_AURA: string;
	var CRIT: string;
	var MAGIC_CRIT: string;
	var SMOKE: string;
	var MOB_SPELL: string;
	var MOB_SPELL_AMBIENT: string;
	var SPELL: string;
	var INSTANT_SPELL: string;
	var WITCH_MAGIC: string;
	var NOTE: string;
	var PORTAL: string;
	var ENCHANTMENT_TABLE: string;
	var EXPLODE: string;
	var FLAME: string;
	var LAVA: string;
	var FOOTSTEP: string;
	var SPLASH: string;
	var WAKE: string;
	var LARGE_SMOKE: string;
	var CLOUD: string;
	var RED_DUST: string;
	var SNOWBALL_POOF: string;
	var DRIP_WATER: string;
	var DRIP_LAVA: string;
	var SNOW_SHOVEL: string;
	var SLIME: string;
	var HEART: string;
	var ANGRY_VILLAGER: string;
	var HAPPY_VILLAGER: string;
}

declare namespace Role {
	var NONE: number;
	var TRADER: number;
	var FOLLOWER: number;
	var BANK: number;
	var TRANSPORTER: number;
	var MAILMAN: number;
	var COMPANION: number;
}

declare namespace SkinType {
	var TEXTURE: number;
	var PLAYER: number;
	var URL: number;
	var URL64: number;
}

declare namespace ShapeMaker {
	function getBox(center: IPos, width: number, length: number, height: number): IPos[];

	function getBox(pos1: IPos, pos2: IPos): IPos[];

	function getHollowBox(center: IPos, width: number, length: number, height: number, thickness: number): IPos[];

	function getHollowBox(center: IPos, width: number, length: number, height: number): IPos[];

	function getHollowBox(pos1: IPos, pos2: IPos, thickness: number): IPos[];

	function getHollowBox(pos1: IPos, pos2: IPos): IPos[];

	function getEllipsoid(center: IPos, sizeX: number, sizeY: number, sizeZ: number): IPos[];

	function getHollowEllipsoid(center: IPos, sizeX: number, sizeY: number, sizeZ: number, thickness: number): IPos[];

	function getHollowEllipsoid(center: IPos, sizeX: number, sizeY: number, sizeZ: number): IPos[];

	function getSphere(center: IPos, radius: number): IPos[];

	function getHollowSphere(center: IPos, radius: number): IPos[];

	function getHollowSphere(center: IPos, radius: number, thickness: number): IPos[];

	function getCylinder(center: IPos, radius: number, height: number): IPos[];

	function getCylinder(pos1: IPos, pos2: IPos): IPos[];

	function getHollowCylinder(center: IPos, radius: number, height: number): IPos[];

	function getHollowCylinder(center: IPos, radius: number, height: number, thickness: number): IPos[];

	function getHollowCylinder(pos1: IPos, pos2: IPos): IPos[];

	function getHollowCylinder(pos1: IPos, pos2: IPos, thickness: number): IPos[];

	function getPyramid(center: IPos, baseWidth: number, baseLength: number, height: number): IPos[];

	function getPyramid(pos1: IPos, pos2: IPos): IPos[];

	function getHollowPyramid(center: IPos, baseWidth: number, baseLength: number, height: number, thickness: number): IPos[];

	function getHollowPyramid(center: IPos, baseWidth: number, baseLength: number, height: number): IPos[];

	function getCone(center: IPos, baseRadius: number, height: number): IPos[];

	function getCone(pos1: IPos, pos2: IPos): IPos[];

	function getHollowCone(center: IPos, baseRadius: number, height: number, thickness: number): IPos[];

	function getHollowCone(center: IPos, baseRadius: number, height: number): IPos[];

}

declare namespace Java {
    /**
     * Gets the java class from a string.
     * Ex: "java.lang.System" returns the class that allows you print to console
     * Java.type("java.lang.System").out.println("Hello, World")
     */
    function type<T>(className: string): any;
    function extend(baseType: any, impl: any): any;
    function isJavaFunction(obj: IObject)
    function isScriptObject(obj: IObject)
    function isScriptFunction(obj: IObject)
}

declare namespace API {
	var instance: typeof API;
	/**
	 * @param key Get temp data for this key
	 * @return Returns the stored temp data
	 */
	function getTempData(key: string): any;

	/**
	 * Tempdata gets cleared when the server restarts. All worlds share the same temp data.
	 * 
	 * @param key The key for the data stored
	 * @param value The data stored
	 */
	function setTempData(key: string, value: any): void;

	/**
	 * @param key The key thats going to be tested against the temp data
	 * @return Whether or not temp data containes the key
	 */
	function hasTempData(key: string): boolean;

	/**
	 * @param key The key for the temp data to be removed
	 */
	function removeTempData(key: string): void;

	/**
	 * Removes all tempdata
	 */
	function clearTempData(): void;

	function getTempDataKeys(): string[];

	/**
	 * @param key The key of the data to be returned
	 * @return Returns the stored data
	 */
	function getStoredData(key: string): any;

	/**
	 * Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved
	 * 
	 * @param key The key for the data stored
	 * @param value The data stored. This data can be either a Number or a String. Other data is not stored
	 */
	function setStoredData(key: string, value: any): void;

	/**
	 * @param key The key of the data to be checked
	 * @return Returns whether or not the stored data contains the key
	 */
	function hasStoredData(key: string): boolean;

	/**
	 * @param key The key of the data to be removed
	 */
	function removeStoredData(key: string): void;

	/**
	 * Remove all stored data
	 */
	function clearStoredData(): void;

	function getStoredDataKeys(): string[];

	function registerICommand(command: ICommand): void;

	function getICommand(commandName: string, priorityLevel: number): ICommand;

	function addGlobalObject(key: string, obj: any): void;

	function removeGlobalObject(key: string): void;

	function hasGlobalObject(key: string): boolean;

	function getEngineObjects(): HashMap;

	function sizeOfObject(obj: any): number;

	function stopServer(): void;

	function getCurrentPlayerCount(): number;

	function getMaxPlayers(): number;

	function kickAllPlayers(): void;

	function isHardcore(): boolean;

	function getFile(path: string): File;

	function getServerOwner(): string;

	function getFactions(): IFactionHandler;

	function getRecipes(): IRecipeHandler;

	function getQuests(): IQuestHandler;

	function getDialogs(): IDialogHandler;

	function getClones(): ICloneHandler;

	function getNaturalSpawns(): INaturalSpawnsHandler;

	function getProfileHandler(): IProfileHandler;

	function getCustomEffectHandler(): ICustomEffectHandler;

	function getMagicHandler(): IMagicHandler;

	function getPartyHandler(): IPartyHandler;

	function getLocations(): ITransportHandler;

	function getAnimations(): IAnimationHandler;

	function getLinkedItems(): ILinkedItemHandler;

	/**
	 * Get the script hook handler for registering custom hooks.
	 * Addon mods can use this to register hooks that will appear in script editor GUIs.
	 * 
	 * @return The script hook handler
	 */
	function getScriptHooks(): IScriptHookHandler;

	function getAbilities(): IAbilityHandler;

	function getTelegraphs(): ITelegraphHandler;

	/**
	 * Get the auction handler for managing auctions via scripts.
	 * 
	 * @return The auction handler, or null if auctions are disabled
	 */
	function getAuctions(): IAuctionHandler;

	/**
	 * Create a telegraph directly.
	 * Convenience method equivalent to getTelegraphs().create(type).
	 * 
	 * @param type Type name: "circle", "ring", "line", "cone", "point"
	 * @return A new telegraph configuration
	 */
	function createTelegraph(type: string): ITelegraph;

	function getAllBiomeNames(): string[];

	function createNPC(var1: IWorld): ICustomNpc;

	/**
	 * Spawns a new NPC in the world at the given coordinates and returns an ICustomNpc object of it.
	 * 
	 * @param var1 the world
	 * @param var2 X position
	 * @param var3 Y position
	 * @param var4 Z position
	 * @return the spawned NPC
	 */
	function spawnNPC(var1: IWorld, var2: number, var3: number, var4: number): ICustomNpc;

	function spawnNPC(world: IWorld, pos: IPos): ICustomNpc;

	function getIEntity(var1: Entity): IEntity;

	function getPlayer(username: string): IPlayer;

	function getChunkLoadingNPCs(): INpc[];

	function getLoadedEntities(): IEntity[];

	function getIBlock(world: IWorld, x: number, y: number, z: number): IBlock;

	function getIBlock(world: IWorld, pos: IPos): IBlock;

	function getITileEntity(world: IWorld, pos: IPos): ITileEntity;

	function getITileEntity(world: IWorld, x: number, y: number, z: number): ITileEntity;

	function getITileEntity(tileEntity: TileEntity): ITileEntity;

	function getIPos(pos: BlockPos): IPos;

	function getIPos(x: number, y: number, z: number): IPos;

	function getIPos(x: number, y: number, z: number): IPos;

	function getIPos(x: number, y: number, z: number): IPos;

	function getIPos(serializedPos: number): IPos;

	/**
	 * Forms a box with corners as the input IPos parameters, and returns all
	 * points inside the box as a list of IPos vectors.
	 * 
	 * @param from The starting IPos vector, first corner of the box.
	 * @param to The ending IPos vector, opposite corner of the box.
	 * @param sortByDistance Sorts the list by distance from the "from" IPos parameter.
	 * @return The list of all IPos vectors inside the box.
	 */
	function getAllInBox(from: IPos, to: IPos, sortByDistance: boolean): IPos[];

	function getAllInBox(from: IPos, to: IPos): IPos[];

	function getIContainer(var1: IInventory): IContainer;

	function getIContainer(var1: Container): IContainer;

	function getIItemStack(var1: ItemStack): IItemStack;

	/**
	 * @param var1 the Minecraft world
	 * @return A single IWorld from Loaded IWorlds
	 */
	function getIWorld(var1: World): IWorld;

	/**
	 * @param var1 the dimension ID
	 * @return A single IWorld from Loaded IWorlds
	 */
	function getIWorld(var1: number): IWorld;

	/**
	 * This will forcefully load the dimension if it is not loaded
	 * Forge sometimes automatically, unloads the End when all players
	 * are no longer present.
	 * 
	 * @param var1 the dimension ID
	 * @return A single IWorld from Loaded/Unloaded IWorlds
	 */
	function getIWorldLoad(var1: number): IWorld;

	/**
	 * @return The global IActionManager for the server
	 */
	function getActionManager(): IActionManager;

	/**
	 * @return The list of all LOADED IWorlds
	 */
	function getIWorlds(): IWorld[];

	function getIDamageSource(var1: DamageSource): IDamageSource;

	function getIDamageSource(entity: IEntity): IDamageSource;

	function getEnergyHandler(): IEnergyHandler;

	function events(): EventBus;

	function getGlobalDir(): File;

	function getWorldDir(): File;

	function IsAvailable(): boolean;

	function Instance(): AbstractNpcAPI;

	function executeCommand(var1: IWorld, var2: string): void;

	/**
	 * Generates a new name as a String using the Markov name generator.
	 * 
	 * @param dictionary An integer representing which dictionary to use:
	 *                   0: Roman
	 *                   1: Japanese
	 *                   2: Slavic
	 *                   3: Welsh
	 *                   4: Saami
	 *                   5: Old Norse
	 *                   6: Ancient Greek
	 *                   7: Aztec
	 *                   8: CustomNPCs Classic
	 *                   9: Spanish
	 * @param gender The gender of the name:
	 *                   0: Random
	 *                   1: Male
	 *                   2: Female
	 * @return a random name
	 */
	function getRandomName(dictionary: number, gender: number): string;

	function getINbt(nbtTagCompound: NBTTagCompound): INbt;

	function stringToNbt(str: string): INbt;

	function getAllServerPlayers(): IPlayer[];

	function getPlayerNames(): string[];

	function createItemFromNBT(nbt: INbt): IItemStack;

	function createItem(id: string, damage: number, size: number): IItemStack;

	function playSoundAtEntity(entity: IEntity, sound: string, volume: number, pitch: number): void;

	function playSoundToNearExcept(player: IPlayer, sound: string, volume: number, pitch: number): void;

	/**
	 * @return Returns the server's Message of The Day.
	 */
	function getMOTD(): string;

	/**
	 * @param motd The server's new Message of The Day.
	 */
	function setMOTD(motd: string): void;

	/**
	 * @param directory the particle texture directory
	 * @return A new IParticle object initialized with the given texture.
	 */
	function createParticle(directory: string): IParticle;

	function createEntityParticle(directory: string): IParticle;

	function createSound(directory: string): ISound;

	function playSound(id: number, sound: ISound): void;

	function playSound(sound: ISound): void;

	function stopSound(id: number): void;

	function pauseSounds(): void;

	function continueSounds(): void;

	function stopSounds(): void;

	/**
	 * @return The uptime of the server in MC ticks.
	 */
	function getServerTime(): number;

	function arePlayerScriptsEnabled(): boolean;

	function areForgeScriptsEnabled(): boolean;

	function areGlobalNPCScriptsEnabled(): boolean;

	function enablePlayerScripts(enable: boolean): void;

	function enableForgeScripts(enable: boolean): void;

	function enableGlobalNPCScripts(enable: boolean): void;

	/**
	 * @param id The id of the custom GUI.
	 * @param width The width of the GUI in pixels.
	 * @param height The height of the GUI in pixels.
	 * @param pauseGame Whether the GUI pauses the game or not.
	 * @return A new ICustomGui object with the given attributes.
	 */
	function createCustomGui(id: number, width: number, height: number, pauseGame: boolean): ICustomGui;

	/**
	 * @param id the overlay ID
	 * @return A new ICustomOverlay overlay object with the given ID.
	 */
	function createCustomOverlay(id: number): ICustomOverlay;

	/**
	 * @param texture the texture path
	 * @return A new ISkinOverlay object initialized with the given texture.
	 */
	function createSkinOverlay(texture: string): ISkinOverlay;

	function millisToTime(millis: number): string;

	function ticksToTime(ticks: number): string;

	function createAnimation(name: string): IAnimation;

	function createAnimation(name: string, speed: number, smooth: number): IAnimation;

	function createFrame(duration: number): IFrame;

	function createFrame(duration: number, speed: number, smooth: number): IFrame;

	function createPart(name: string): IFramePart;

	function createPart(name: string, rotation: number[], pivot: number[]): IFramePart;

	function createPart(name: string, rotation: number[], pivot: number[], speed: number, smooth: number): IFramePart;

	function createPart(partId: number): IFramePart;

	function createPart(partId: number, rotation: number[], pivot: number[]): IFramePart;

	function createPart(partId: number, rotation: number[], pivot: number[], speed: number, smooth: number): IFramePart;

}
