import { IBlock } from "./../IBlock";
import { ITextPlane } from "./ITextPlane";
import { IItemStack } from "./../item/IItemStack";
import { ITimers } from "./../ITimers";


export interface IBlockScripted extends IBlock {
	/**
	 * @param item The item to be set as model
	 */
	setModel(item: IItemStack): void;

	setModel(name: string): void;

	getModel(): IItemStack;

	getTimers(): ITimers;

	/**
	 * @param strength Sets the strength of the redstone signal (0-15)
	 */
	setRedstonePower(strength: number): void;

	/**
	 * @return Returns the current redstone power (0-15) this block is giving off
	 */
	getRedstonePower(): number;

	setIsLadder(enabled: boolean): void;

	getIsLadder(): boolean;

	/**
	 * @param value Sets the light value (0-15)
	 */
	setLight(value: number): void;

	/**
	 * @return Returns the light value (0-15)
	 */
	getLight(): number;

	/**
	 * @param x Scale x (0-10)
	 * @param y Scale y (0-10)
	 * @param z Scale z (0-10)
	 */
	setScale(x: number, y: number, z: number): void;

	getScaleX(): number;

	getScaleY(): number;

	getScaleZ(): number;

	/**
	 * @param x Rotation x (0-359)
	 * @param y Rotation y (0-359)
	 * @param z Rotation z (0-359)
	 */
	setRotation(x: number, y: number, z: number): void;

	getRotationX(): number;

	getRotationY(): number;

	getRotationZ(): number;

	/**
	 * On servers the enable-command-block option in the server.properties needs to be set to true <br>
	 * Use /gamerule commandBlockOutput false/true to turn off/on command block feedback <br>
	 * Setting NpcUseOpCommands to true in the CustomNPCs.cfg should allow the npc to run op commands, be warned this could be a major security risk, use at own risk <br>
	 * For permission plugins the commands are run under uuid:c9c843f8-4cb1-4c82-aa61-e264291b7bd6 and name:[customnpcs]
	 * 
	 * @param command The command to be executed
	 */
	executeCommand(command: string): void;

	/**
	 * TYPO VERSION
	 */
	getIsPassible(): boolean;

	/**
	 * TYPO VERSION
	 */
	setIsPassible(bo: boolean): void;

	getIsPassable(): boolean;

	setIsPassable(bo: boolean): void;

	/**
	 * @return Harvesting hardness (-1 makes it unharvestable)
	 */
	getHardness(): number;

	setHardness(hardness: number): void;

	/**
	 * @return Explosion resistance (-1 makes it unexplodable)
	 */
	getResistance(): number;

	setResistance(resistance: number): void;

	getTextPlane(): ITextPlane;

	getTextPlane2(): ITextPlane;

	getTextPlane3(): ITextPlane;

	getTextPlane4(): ITextPlane;

	getTextPlane5(): ITextPlane;

	getTextPlane6(): ITextPlane;

	setStoredData(key: string, value: any): void;

	getStoredData(key: string): any;

	removeStoredData(key: string): void;

	hasStoredData(key: string): boolean;

	clearStoredData(): void;

	getStoredDataKeys(): string[];

	removeTempData(key: string): void;

	setTempData(key: string, value: any): void;

	hasTempData(key: string): boolean;

	getTempData(key: string): any;

	clearTempData(): void;

	getTempDataKeys(): string[];

}

