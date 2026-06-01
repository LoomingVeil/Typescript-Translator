
/**
 * This object stores functions available to all scripting handlers through the "API" keyword.
 */
declare namespace API {
	var instance: AbstractNpcAPI;
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



