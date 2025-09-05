import { IPlayer } from "./entity/IPlayer";
import { IBlock } from "./IBlock";
import { ITileEntity } from "./ITileEntity";
import { IObject } from "./../../../IObject";
import { IEntity } from "./entity/IEntity";
import { IScoreboard } from "./scoreboard/IScoreboard";
import { IPos } from "./IPos";
import { ISound } from "./handler/data/ISound";
import { IParticle } from "./IParticle";
import { IItemStack } from "./item/IItemStack";

import { WorldServer } from "./../../../missingTypes";

export interface IWorld extends IObject {
	/**
	 * @return The worlds time
	 */
	getTime(): number;

	/**
	 * @return The total world time
	 */
	getTotalTime(): number;

	areAllPlayersAsleep(): boolean;

	/**
	 * @param x World position x
	 * @param y World position y
	 * @param z World position z
	 * @return The block at the given position. Returns null if there isn't a block
	 */
	getBlock(x: number, y: number, z: number): IBlock;

	/**
	 * @param pos
	 * @return The block at the given position. Returns null if there isn't a block
	 */
	getBlock(pos: IPos): IBlock;

	/**
	 * @return The top-most block in the world as an IBlock object.
	 */
	getTopBlock(x: number, z: number): IBlock;

	getTopBlock(pos: IPos): IBlock;

	isBlockFreezable(pos: IPos): boolean;

	isBlockFreezable(x: number, y: number, z: number): boolean;

	isBlockFreezableNaturally(pos: IPos): boolean;

	isBlockFreezableNaturally(x: number, y: number, z: number): boolean;

	canBlockFreeze(pos: IPos, adjacentToWater: boolean): boolean;

	canBlockFreeze(x: number, y: number, z: number, adjacentToWater: boolean): boolean;

	canBlockFreezeBody(pos: IPos, adjacentToWater: boolean): boolean;

	canBlockFreezeBody(x: number, y: number, z: number, adjacentToWater: boolean): boolean;

	canSnowAt(pos: IPos, checkLight: boolean): boolean;

	canSnowAt(x: number, y: number, z: number, checkLight: boolean): boolean;

	canSnowAtBody(pos: IPos, checkLight: boolean): boolean;

	canSnowAtBody(x: number, y: number, z: number, checkLight: boolean): boolean;

	/**
	 * @return The Y-value of the world at this x & z value based on the height map of the world.
	 */
	getHeightValue(x: number, z: number): number;

	getHeightValue(pos: IPos): number;

	/**
	 * @return The minimum Y-value of the world at this x & z value based on the height map of the world.
	 */
	getChunkHeightMapMinimum(x: number, z: number): number;

	getChunkHeightMapMinimum(pos: IPos): number;

	/**
	 * @return The metadata of the block at this position.
	 */
	getBlockMetadata(x: number, y: number, z: number): number;

	getBlockMetadata(pos: IPos): number;

	setBlockMetadataWithNotify(x: number, y: number, z: number, metadata: number, flag: number): boolean;

	setBlockMetadataWithNotify(pos: IPos, metadata: number, flag: number): boolean;

	/**
	 * @param x
	 * @param y
	 * @param z
	 * @return can the block at this position see the sky or are there no blocks above this one
	 */
	canSeeSky(x: number, y: number, z: number): boolean;

	/**
	 * @param pos
	 * @return can the block at this position see the sky or are there no blocks above this one
	 */
	canSeeSky(pos: IPos): boolean;

	getFullBlockLightValue(x: number, y: number, z: number): number;

	getFullBlockLightValue(pos: IPos): number;

	getBlockLightValue(x: number, y: number, z: number): number;

	getBlockLightValue(pos: IPos): number;

	playSoundAtEntity(entity: IEntity, sound: string, volume: number, pitch: number): void;

	playSoundToNearExcept(player: IPlayer, sound: string, volume: number, pitch: number): void;

	playSound(id: number, sound: ISound): void;

	stopSound(id: number): void;

	pauseSounds(): void;

	continueSounds(): void;

	stopSounds(): void;

	getEntityByID(id: number): IEntity;

	spawnEntityInWorld(entity: IEntity): boolean;

	getClosestPlayerToEntity(entity: IEntity, range: number): IPlayer;

	getClosestPlayer(x: number, y: number, z: number, range: number): IPlayer;

	getClosestPlayer(pos: IPos, range: number): IPlayer;

	getClosestVulnerablePlayerToEntity(entity: IEntity, range: number): IPlayer;

	getClosestVulnerablePlayer(x: number, y: number, z: number, range: number): IPlayer;

	getClosestVulnerablePlayer(pos: IPos, range: number): IPlayer;

	/**
	 * @param entity The entity whose type will be used as a parameter
	 * @return The amount of entities of the given type in the world.
	 */
	countEntities(entity: IEntity): number;

	getLoadedEntities(): IEntity[];

	getEntitiesNear(position: IPos, range: number): IEntity[];

	getEntitiesNear(x: number, y: number, z: number, range: number): IEntity[];

	/**
	 * Sets the block's tile entity at the given position.
	 */
	setTileEntity(x: number, y: number, z: number, tileEntity: ITileEntity): void;

	setTileEntity(pos: IPos, tileEntity: ITileEntity): void;

	/**
	 * Removes the block's tile entity at the given position.
	 */
	removeTileEntity(x: number, y: number, z: number): void;

	removeTileEntity(pos: IPos): void;

	/**
	 * @return True if the block at this position is of cubic shape. (Not a stair, slab, etc.)
	 */
	isBlockFullCube(x: number, y: number, z: number): boolean;

	isBlockFullCube(pos: IPos): boolean;

	getSeed(): number;

	setSpawnLocation(x: number, y: number, z: number): void;

	setSpawnLocation(pos: IPos): void;

	canLightningStrikeAt(x: number, y: number, z: number): boolean;

	canLightningStrikeAt(pos: IPos): boolean;

	isBlockHighHumidity(x: number, y: number, z: number): boolean;

	isBlockHighHumidity(pos: IPos): boolean;

	/**
	 * @param x World position x
	 * @param y World position y
	 * @param z World position z
	 * @return Text from signs
	 * @since 1.7.10d
	 */
	getSignText(x: number, y: number, z: number): string;

	getSignText(pos: IPos): string;

	/**
	 * @param x World position x
	 * @param y World position y
	 * @param z World position z
	 * @param item The block to be set
	 */
	setBlock(x: number, y: number, z: number, item: IItemStack): boolean;

	setBlock(pos: IPos, item: IItemStack): boolean;

	/**
	 * @param x World position x
	 * @param y World position y
	 * @param z World position z
	 * @param block The block to be set
	 */
	setBlock(x: number, y: number, z: number, block: IBlock): boolean;

	setBlock(pos: IPos, block: IBlock): boolean;

	/**
	 * @param x World position x
	 * @param y World position y
	 * @param z World position z
	 */
	removeBlock(x: number, y: number, z: number): void;

	removeBlock(pos: IPos): void;

	isPlaceCancelled(posX: number, posY: number, posZ: number): boolean;

	isPlaceCancelled(pos: IPos): boolean;

	isBreakCancelled(posX: number, posY: number, posZ: number): boolean;

	isBreakCancelled(pos: IPos): boolean;

	rayCastPos(startPos: number[], lookVector: number[], maxDistance: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IPos;

	rayCastPos(startPos: number[], lookVector: number[], maxDistance: number): IPos;

	rayCastPos(startPos: IPos, lookVector: IPos, maxDistance: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IPos;

	rayCastPos(startPos: IPos, lookVector: IPos, maxDistance: number): IPos;

	/**
	 * starting at the start position, draw a line in the lookVector direction until a block is detected
	 * 
	 * @param startPos
	 * @param lookVector should be a normalized direction vector
	 * @param maxDistance
	 * @return the first detected block but null if maxDistance is reached
	 */
	rayCastBlock(startPos: number[], lookVector: number[], maxDistance: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IBlock;

	rayCastBlock(startPos: number[], lookVector: number[], maxDistance: number): IBlock;

	rayCastBlock(startPos: IPos, lookVector: IPos, maxDistance: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IBlock;

	rayCastBlock(startPos: IPos, lookVector: IPos, maxDistance: number): IBlock;

	/**
	 * @param startPos
	 * @param maxHeight
	 * @return the position of the closest block of air to startPos
	 */
	getNearestAir(startPos: IPos, maxHeight: number): IPos;

	rayCastEntities(startPos: number[], lookVector: number[], maxDistance: number, offset: number, range: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IEntity[];

	rayCastEntities(ignoreEntities: IEntity[], startPos: number[], lookVector: number[], maxDistance: number, offset: number, range: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IEntity[];

	rayCastEntities(startPos: IPos, lookVector: IPos, maxDistance: number, offset: number, range: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IEntity[];

	rayCastEntities(startPos: number[], lookVector: number[], maxDistance: number, offset: number, range: number): IEntity[];

	rayCastEntities(startPos: IPos, lookVector: IPos, maxDistance: number, offset: number, range: number): IEntity[];

	/**
	 * @param name The name of the player to be returned
	 * @return The Player with name. Null is returned when the player isnt found
	 */
	getPlayer(name: string): IPlayer;

	getPlayerByUUID(uuid: string): IPlayer;

	/**
	 * @param time The world time to be set
	 */
	setTime(time: number): void;

	/**
	 * @return Whether or not its daytime
	 */
	isDay(): boolean;

	/**
	 * @return Whether or not its currently raining
	 */
	isRaining(): boolean;

	/**
	 * @param bo Set if it's raining
	 */
	setRaining(bo: boolean): void;

	/**
	 * @param x The x position
	 * @param y The y position
	 * @param z The z position
	 */
	thunderStrike(x: number, y: number, z: number): void;

	thunderStrike(pos: IPos): void;

	/**
	 * Sends a packet from the server to the client everytime its called. Probably should not use this too much.
	 * 
	 * @param particle Particle name. Particle name list: http://minecraft.wiki/w/Particles
	 * @param x The x position
	 * @param y The y position
	 * @param z The z position
	 * @param dx Usually used for the x motion
	 * @param dy Usually used for the y motion
	 * @param dz Usually used for the z motion
	 * @param speed Speed of the particles, usually between 0 and 1
	 * @param count Particle count
	 */
	spawnParticle(particle: string, x: number, y: number, z: number, dx: number, dy: number, dz: number, speed: number, count: number): void;

	spawnParticle(particle: string, pos: IPos, dx: number, dy: number, dz: number, speed: number, count: number): void;

	/**
	 * @param id The items name
	 * @param damage The damage value
	 * @param size The number of items in the item
	 * @return Returns the item
	 */
	createItem(id: string, damage: number, size: number): IItemStack;

	/**
	 * @param directory The particle's texture directory. Use only forward slashes when writing a directory. Example: "customnpcs:textures/particle/tail.png"
	 * @return Returns IEntityParticle object
	 */
	createEntityParticle(directory: string): IParticle;

	getTempData(key: string): any;

	setTempData(key: string, value: any): void;

	hasTempData(key: string): boolean;

	removeTempData(key: string): void;

	clearTempData(): void;

	getTempDataKeys(): string[];

	getStoredData(key: string): any;

	setStoredData(key: string, value: any): void;

	hasStoredData(key: string): boolean;

	removeStoredData(key: string): void;

	clearStoredData(): void;

	getStoredDataKeys(): string[];

	/**
	 * @param x Position x
	 * @param y Position y
	 * @param z Position z
	 * @param range Range of the explosion
	 * @param fire Whether or not the explosion does fire damage
	 * @param grief Whether or not the explosion does damage to blocks
	 */
	explode(x: number, y: number, z: number, range: number, fire: boolean, grief: boolean): void;

	explode(pos: IPos, range: number, fire: boolean, grief: boolean): void;

	getAllServerPlayers(): IPlayer[];

	getPlayerNames(): string[];

	/**
	 * @since 1.7.10c
	 * @param x Position x
	 * @param z Position z
	 * @return Returns the name of the biome
	 */
	getBiomeName(x: number, z: number): string;

	getBiomeName(pos: IPos): string;

	/**
	 * Lets you spawn a server side cloned entity
	 * 
	 * @param x The x position the clone will be spawned at
	 * @param y The y position the clone will be spawned at
	 * @param z The z position the clone will be spawned at
	 * @param tab The tab in which the clone is
	 * @param name Name of the cloned entity
	 * @param ignoreProtection Whether the spawning of this clone skips protection checks.
	 * @return Returns the entity which was spawned
	 */
	spawnClone(x: number, y: number, z: number, tab: number, name: string, ignoreProtection: boolean): IEntity;

	spawnClone(pos: IPos, tab: number, name: string, ignoreProtection: boolean): IEntity;

	spawnClone(x: number, y: number, z: number, tab: number, name: string): IEntity;

	spawnClone(pos: IPos, tab: number, name: string): IEntity;

	getScoreboard(): IScoreboard;

	/**
	 * @since 1.7.10c
	 * Expert use only
	 * @return Returns minecraft world object
	 */
	getMCWorld(): WorldServer;

	/**
	 * @return The ID of this world's dimension. 0 for overworld, 1 for End, -1 for Nether, etc.
	 */
	getDimensionID(): number;

	broadcast(message: string): void;

	/**
	 * Spawns an item on the ground in the world
	 */
	spawnItem(item: IItemStack, pos: IPos): void;

	removeAllBlocks(positions: IPos[]): void;

	setAllBlocks(positions: IPos[], item: IItemStack): boolean;

	setAllBlocks(positions: IPos[], block: IBlock): boolean;

}
}
