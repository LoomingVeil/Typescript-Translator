
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
	 * @param pos the block position
	 * @return The block at the given position. Returns null if there isn't a block
	 */
	getBlock(pos: IPos): IBlock;

	/**
	 * @param x X coordinate
	 * @param z Z coordinate
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
	 * @param x X coordinate
	 * @param z Z coordinate
	 * @return The Y-value of the world at this x &amp; z value based on the height map of the world.
	 */
	getHeightValue(x: number, z: number): number;

	getHeightValue(pos: IPos): number;

	/**
	 * @param x X coordinate
	 * @param z Z coordinate
	 * @return The minimum Y-value of the world at this x &amp; z value based on the height map of the world.
	 */
	getChunkHeightMapMinimum(x: number, z: number): number;

	getChunkHeightMapMinimum(pos: IPos): number;

	/**
	 * @param x X coordinate
	 * @param y Y coordinate
	 * @param z Z coordinate
	 * @return The metadata of the block at this position.
	 */
	getBlockMetadata(x: number, y: number, z: number): number;

	getBlockMetadata(pos: IPos): number;

	setBlockMetadataWithNotify(x: number, y: number, z: number, metadata: number, flag: number): boolean;

	setBlockMetadataWithNotify(pos: IPos, metadata: number, flag: number): boolean;

	/**
	 * @param x X coordinate
	 * @param y Y coordinate
	 * @param z Z coordinate
	 * @return can the block at this position see the sky or are there no blocks above this one
	 */
	canSeeSky(x: number, y: number, z: number): boolean;

	/**
	 * @param pos the block position
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
	 * 
	 * @param x X coordinate
	 * @param y Y coordinate
	 * @param z Z coordinate
	 * @param tileEntity the tile entity to place
	 */
	setTileEntity(x: number, y: number, z: number, tileEntity: ITileEntity): void;

	setTileEntity(pos: IPos, tileEntity: ITileEntity): void;

	/**
	 * Removes the block's tile entity at the given position.
	 * 
	 * @param x X coordinate
	 * @param y Y coordinate
	 * @param z Z coordinate
	 */
	removeTileEntity(x: number, y: number, z: number): void;

	removeTileEntity(pos: IPos): void;

	/**
	 * @param x X coordinate
	 * @param y Y coordinate
	 * @param z Z coordinate
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
	 * @return true if the block was successfully placed
	 */
	setBlock(x: number, y: number, z: number, item: IItemStack): boolean;

	setBlock(pos: IPos, item: IItemStack): boolean;

	/**
	 * @param x World position x
	 * @param y World position y
	 * @param z World position z
	 * @param block The block to be set
	 * @return true if the block was successfully placed
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
	 * @param startPos the ray origin as [x, y, z]
	 * @param lookVector should be a normalized direction vector
	 * @param maxDistance maximum ray distance in blocks
	 * @param stopOnBlock whether to stop on solid blocks
	 * @param stopOnLiquid whether to stop on liquid blocks
	 * @param stopOnCollision whether to stop on collision boundaries
	 * @return the first detected block but null if maxDistance is reached
	 */
	rayCastBlock(startPos: number[], lookVector: number[], maxDistance: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IBlock;

	rayCastBlock(startPos: number[], lookVector: number[], maxDistance: number): IBlock;

	rayCastBlock(startPos: IPos, lookVector: IPos, maxDistance: number, stopOnBlock: boolean, stopOnLiquid: boolean, stopOnCollision: boolean): IBlock;

	rayCastBlock(startPos: IPos, lookVector: IPos, maxDistance: number): IBlock;

	/**
	 * @param startPos the start position as [x, y, z]
	 * @param maxHeight maximum search height
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
	 * @param x Position x
	 * @param z Position z
	 * @return Returns the name of the biome
	 * @since 1.7.10c
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
	 * @return Returns minecraft world object
	 * @since 1.7.10c
	 * Expert use only
	 */
	getMCWorld(): WorldServer;

	/**
	 * @return The ID of this world's dimension. 0 for overworld, 1 for End, -1 for Nether, etc.
	 */
	getDimensionID(): number;

	/**
	 * Creates an energy orb projectile. Not spawned until fire() is called.
	 * 
	 * @param owner The entity that owns this projectile
	 * @param x Spawn X position
	 * @param y Spawn Y position
	 * @param z Spawn Z position
	 * @param size Orb size
	 * @return the energy orb entity
	 */
	createEnergyOrb(owner: IEntity, x: number, y: number, z: number, size: number): IEnergyOrb;

	/**
	 * Creates an energy beam projectile. Not spawned until fire() is called.
	 * 
	 * @param owner The entity that owns this projectile
	 * @param x Spawn X position
	 * @param y Spawn Y position
	 * @param z Spawn Z position
	 * @param beamWidth Width of the beam
	 * @param headSize Size of the beam head
	 * @return the energy beam entity
	 */
	createEnergyBeam(owner: IEntity, x: number, y: number, z: number, beamWidth: number, headSize: number): IEnergyBeam;

	/**
	 * Creates an energy disc projectile. Not spawned until fire() is called.
	 * 
	 * @param owner The entity that owns this projectile
	 * @param x Spawn X position
	 * @param y Spawn Y position
	 * @param z Spawn Z position
	 * @param radius Disc radius
	 * @param thickness Disc thickness
	 * @return the energy disc entity
	 */
	createEnergyDisc(owner: IEntity, x: number, y: number, z: number, radius: number, thickness: number): IEnergyDisc;

	/**
	 * Creates an energy laser projectile. Not spawned until fire() is called.
	 * 
	 * @param owner The entity that owns this projectile
	 * @param x Spawn X position
	 * @param y Spawn Y position
	 * @param z Spawn Z position
	 * @param laserWidth Width of the laser
	 * @return the energy laser entity
	 */
	createEnergyLaser(owner: IEntity, x: number, y: number, z: number, laserWidth: number): IEnergyLaser;

	broadcast(message: string): void;

	isThundering(): boolean;

	/**
	 * Use in conjunction with {@link noppes.npcs.api.IWorld#setRaining(boolean)} to make it storm.
	 * 
	 * @param thundering
	 */
	setThundering(thundering: boolean): void;

	fireProjectile(projectile: ICustomProjectile, velocity: number): void;

	fireProjectile(projectile: ICustomProjectile): void;

	/**
	 * Spawns an item on the ground in the world
	 */
	spawnItem(item: IItemStack, pos: IPos): IEntity;

	/**
	 * Get the block as a IBlockData object. Returns null if the target block is air.
	 */
	getBlockData(pos: IPos): IBlockData;

	setBlock(pos: IPos, state: IBlockData): void;

	removeAllBlocks(positions: IPos[]): void;

	setAllBlocks(positions: IPos[], state: BlockData): void;

	setAllBlocks(positions: IPos[], item: IItemStack): boolean;

	setAllBlocks(positions: IPos[], block: IBlock): boolean;
}

