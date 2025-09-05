import { IFrame } from "./handler/data/IFrame";
import { ISkinOverlay } from "./ISkinOverlay";
import { IAnimationHandler } from "./handler/IAnimationHandler";
import { ISound } from "./handler/data/ISound";
import { INbt } from "./INbt";
import { ICustomNpc } from "./entity/ICustomNpc";
import { IDamageSource } from "./IDamageSource";
import { BlockPos } from "./../../../net/minecraft/util/math/BlockPos";
import { ICustomOverlay } from "./overlay/ICustomOverlay";
import { IBlock } from "./IBlock";
import { IEntity } from "./entity/IEntity";
import { IQuestHandler } from "./handler/IQuestHandler";
import { ICustomGui } from "./gui/ICustomGui";
import { IAnimation } from "./handler/data/IAnimation";
import { IRecipeHandler } from "./handler/IRecipeHandler";
import { IProfileHandler } from "./handler/IProfileHandler";
import { IPlayer } from "./entity/IPlayer";
import { IWorld } from "./IWorld";
import { IDialogHandler } from "./handler/IDialogHandler";
import { IParticle } from "./IParticle";
import { ICommand } from "./ICommand";
import { ITransportHandler } from "./handler/ITransportHandler";
import { IPartyHandler } from "./handler/IPartyHandler";
import { IContainer } from "./IContainer";
import { INaturalSpawnsHandler } from "./handler/INaturalSpawnsHandler";
import { ITileEntity } from "./ITileEntity";
import { IObject } from "./../../../IObject";
import { ICloneHandler } from "./handler/ICloneHandler";
import { ICustomEffectHandler } from "./handler/ICustomEffectHandler";
import { IFramePart } from "./handler/data/IFramePart";
import { IPos } from "./IPos";
import { IMagicHandler } from "./handler/IMagicHandler";
import { IItemStack } from "./item/IItemStack";
import { IFactionHandler } from "./handler/IFactionHandler";

import { TileEntity } from "./../../../missingTypes";
import { IInventory } from "./../../../missingTypes";
import { Entity } from "./../../../missingTypes";
import { Container } from "./../../../missingTypes";
import { DamageSource } from "./../../../missingTypes";
import { HashMap } from "./../../../missingTypes";
import { NBTTagCompound } from "./../../../missingTypes";
import { INpc } from "./../../../missingTypes";
import { EventBus } from "./../../../missingTypes";
import { ItemStack } from "./../../../missingTypes";
import { World } from "./../../../missingTypes";
import { File } from "./../../../missingTypes";

/**
 * This object stores functions available to all scripting handlers through the "API" keyword.
 */
export interface AbstractNpcAPI extends IObject {
	instance: AbstractNpcAPI;
	/**
	 * @param key Get temp data for this key
	 * @return Returns the stored temp data
	 */
	getTempData(key: string): any;

	/**
	 * Tempdata gets cleared when the server restarts. All worlds share the same temp data.
	 * 
	 * @param key The key for the data stored
	 * @param value The data stored
	 */
	setTempData(key: string, value: any): void;

	/**
	 * @param key The key thats going to be tested against the temp data
	 * @return Whether or not temp data containes the key
	 */
	hasTempData(key: string): boolean;

	/**
	 * @param key The key for the temp data to be removed
	 */
	removeTempData(key: string): void;

	/**
	 * Removes all tempdata
	 */
	clearTempData(): void;

	getTempDataKeys(): string[];

	/**
	 * @param key The key of the data to be returned
	 * @return Returns the stored data
	 */
	getStoredData(key: string): any;

	/**
	 * Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved
	 * 
	 * @param key The key for the data stored
	 * @param value The data stored. This data can be either a Number or a String. Other data is not stored
	 */
	setStoredData(key: string, value: any): void;

	/**
	 * @param key The key of the data to be checked
	 * @return Returns whether or not the stored data contains the key
	 */
	hasStoredData(key: string): boolean;

	/**
	 * @param key The key of the data to be removed
	 */
	removeStoredData(key: string): void;

	/**
	 * Remove all stored data
	 */
	clearStoredData(): void;

	getStoredDataKeys(): string[];

	registerICommand(command: ICommand): void;

	getICommand(commandName: string, priorityLevel: number): ICommand;

	addGlobalObject(key: string, obj: any): void;

	removeGlobalObject(key: string): void;

	hasGlobalObject(key: string): boolean;

	getEngineObjects(): HashMap;

	sizeOfObject(obj: any): number;

	stopServer(): void;

	getCurrentPlayerCount(): number;

	getMaxPlayers(): number;

	kickAllPlayers(): void;

	isHardcore(): boolean;

	getFile(path: string): File;

	getServerOwner(): string;

	getFactions(): IFactionHandler;

	getRecipes(): IRecipeHandler;

	getQuests(): IQuestHandler;

	getDialogs(): IDialogHandler;

	getClones(): ICloneHandler;

	getNaturalSpawns(): INaturalSpawnsHandler;

	getProfileHandler(): IProfileHandler;

	getCustomEffectHandler(): ICustomEffectHandler;

	getMagicHandler(): IMagicHandler;

	getPartyHandler(): IPartyHandler;

	getLocations(): ITransportHandler;

	getAnimations(): IAnimationHandler;

	getAllBiomeNames(): string[];

	createNPC(var1: IWorld): ICustomNpc;

	/**
	 * Spawns a new NPC in the world at the given coordinates and returns an ICustomNpc object of it.
	 */
	spawnNPC(var1: IWorld, var2: number, var3: number, var4: number): ICustomNpc;

	spawnNPC(world: IWorld, pos: IPos): ICustomNpc;

	getIEntity(var1: Entity): IEntity;

	getPlayer(username: string): IPlayer;

	getChunkLoadingNPCs(): INpc[];

	getLoadedEntities(): IEntity[];

	getIBlock(world: IWorld, x: number, y: number, z: number): IBlock;

	getIBlock(world: IWorld, pos: IPos): IBlock;

	getITileEntity(world: IWorld, pos: IPos): ITileEntity;

	getITileEntity(world: IWorld, x: number, y: number, z: number): ITileEntity;

	getITileEntity(tileEntity: TileEntity): ITileEntity;

	getIPos(pos: BlockPos): IPos;

	getIPos(x: number, y: number, z: number): IPos;

	getIPos(x: number, y: number, z: number): IPos;

	getIPos(x: number, y: number, z: number): IPos;

	getIPos(serializedPos: number): IPos;

	/**
	 * Forms a box with corners as the input IPos parameters, and returns all
	 * points inside the box as a list of IPos vectors.
	 * 
	 * @param from The starting IPos vector, first corner of the box.
	 * @param to The ending IPos vector, opposite corner of the box.
	 * @param sortByDistance Sorts the list by distance from the "from" IPos parameter.
	 * @return The list of all IPos vectors inside the box.
	 */
	getAllInBox(from: IPos, to: IPos, sortByDistance: boolean): IPos[];

	getAllInBox(from: IPos, to: IPos): IPos[];

	getIContainer(var1: IInventory): IContainer;

	getIContainer(var1: Container): IContainer;

	getIItemStack(var1: ItemStack): IItemStack;

	/**
	 * @return A single IWorld from Loaded IWorlds
	 */
	getIWorld(var1: World): IWorld;

	/**
	 * @return A single IWorld from Loaded IWorlds
	 */
	getIWorld(var1: number): IWorld;

	/**
	 * This will forcefully load the dimension if it is not loaded
	 * Forge sometimes automatically, unloads the End when all players
	 * are no longer present.
	 * 
	 * @return A single IWorld from Loaded/Unloaded IWorlds
	 */
	getIWorldLoad(var1: number): IWorld;

	/**
	 * @return The list of all LOADED IWorlds
	 */
	getIWorlds(): IWorld[];

	getIDamageSource(var1: DamageSource): IDamageSource;

	getIDamageSource(entity: IEntity): IDamageSource;

	events(): EventBus;

	getGlobalDir(): File;

	getWorldDir(): File;

	IsAvailable(): boolean;

	Instance(): AbstractNpcAPI;

	executeCommand(var1: IWorld, var2: string): void;

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
	 */
	getRandomName(dictionary: number, gender: number): string;

	getINbt(nbtTagCompound: NBTTagCompound): INbt;

	stringToNbt(str: string): INbt;

	getAllServerPlayers(): IPlayer[];

	getPlayerNames(): string[];

	createItemFromNBT(nbt: INbt): IItemStack;

	createItem(id: string, damage: number, size: number): IItemStack;

	playSoundAtEntity(entity: IEntity, sound: string, volume: number, pitch: number): void;

	playSoundToNearExcept(player: IPlayer, sound: string, volume: number, pitch: number): void;

	/**
	 * @return Returns the server's Message of The Day.
	 */
	getMOTD(): string;

	/**
	 * @param motd The server's new Message of The Day.
	 */
	setMOTD(motd: string): void;

	/**
	 * @return A new IParticle object initialized with the given texture.
	 */
	createParticle(directory: string): IParticle;

	createEntityParticle(directory: string): IParticle;

	createSound(directory: string): ISound;

	playSound(id: number, sound: ISound): void;

	playSound(sound: ISound): void;

	stopSound(id: number): void;

	pauseSounds(): void;

	continueSounds(): void;

	stopSounds(): void;

	/**
	 * @return The uptime of the server in MC ticks.
	 */
	getServerTime(): number;

	arePlayerScriptsEnabled(): boolean;

	areForgeScriptsEnabled(): boolean;

	areGlobalNPCScriptsEnabled(): boolean;

	enablePlayerScripts(enable: boolean): void;

	enableForgeScripts(enable: boolean): void;

	enableGlobalNPCScripts(enable: boolean): void;

	/**
	 * @param id The id of the custom GUI.
	 * @param width The width of the GUI in pixels.
	 * @param height The height of the GUI in pixels.
	 * @param pauseGame Whether the GUI pauses the game or not.
	 * @return A new ICustomGui object with the given attributes.
	 */
	createCustomGui(id: number, width: number, height: number, pauseGame: boolean): ICustomGui;

	/**
	 * @return A new ICustomOverlay overlay object with the given ID.
	 */
	createCustomOverlay(id: number): ICustomOverlay;

	/**
	 * @return A new ISkinOverlay object initialized with the given texture.
	 */
	createSkinOverlay(texture: string): ISkinOverlay;

	millisToTime(millis: number): string;

	ticksToTime(ticks: number): string;

	createAnimation(name: string): IAnimation;

	createAnimation(name: string, speed: number, smooth: number): IAnimation;

	createFrame(duration: number): IFrame;

	createFrame(duration: number, speed: number, smooth: number): IFrame;

	createPart(name: string): IFramePart;

	createPart(name: string, rotation: number[], pivot: number[]): IFramePart;

	createPart(name: string, rotation: number[], pivot: number[], speed: number, smooth: number): IFramePart;

	createPart(partId: number): IFramePart;

	createPart(partId: number, rotation: number[], pivot: number[]): IFramePart;

	createPart(partId: number, rotation: number[], pivot: number[], speed: number, smooth: number): IFramePart;

}


export const API: AbstractNpcAPI = {} as AbstractNpcAPI;
