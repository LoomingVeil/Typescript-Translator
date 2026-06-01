
/**
 * Handles storing and spawning cloned entities.
 * Clones are organized by numbered tabs (0-based) or named folders.
 */
export interface ICloneHandler extends IObject {
	/**
	 * Spawns a clone at the given coordinates.
	 * 
	 * @param x the x coordinate.
	 * @param y the y coordinate.
	 * @param z the z coordinate.
	 * @param tab the tab index.
	 * @param name the clone name.
	 * @param world the world to spawn in.
	 * @param ignoreProtection whether to bypass spawn protection.
	 * @return the spawned entity, or null on failure.
	 */
	spawn(x: number, y: number, z: number, tab: number, name: string, world: IWorld, ignoreProtection: boolean): IEntity;

	/**
	 * Spawns a clone at the given position.
	 * 
	 * @param pos the position.
	 * @param tab the tab index.
	 * @param name the clone name.
	 * @param world the world to spawn in.
	 * @param ignoreProtection whether to bypass spawn protection.
	 * @return the spawned entity, or null on failure.
	 */
	spawn(pos: IPos, tab: number, name: string, world: IWorld, ignoreProtection: boolean): IEntity;

	/**
	 * Spawns a clone at the given coordinates with default protection rules.
	 * 
	 * @param x the x coordinate.
	 * @param y the y coordinate.
	 * @param z the z coordinate.
	 * @param tab the tab index.
	 * @param name the clone name.
	 * @param world the world to spawn in.
	 * @return the spawned entity, or null on failure.
	 */
	spawn(x: number, y: number, z: number, tab: number, name: string, world: IWorld): IEntity;

	/**
	 * Spawns a clone at the given position with default protection rules.
	 * 
	 * @param pos the position.
	 * @param tab the tab index.
	 * @param name the clone name.
	 * @param world the world to spawn in.
	 * @return the spawned entity, or null on failure.
	 */
	spawn(pos: IPos, tab: number, name: string, world: IWorld): IEntity;

	/**
	 * Returns all clones stored in the specified tab.
	 * 
	 * @param tab the tab index.
	 * @param world the world context for entity creation.
	 * @return an array of entities in the tab.
	 */
	getTab(tab: number, world: IWorld): IEntity[];

	/**
	 * Returns a specific clone from a tab by name.
	 * 
	 * @param tab the tab index.
	 * @param name the clone name.
	 * @param world the world context for entity creation.
	 * @return the entity, or null if not found.
	 */
	get(tab: number, name: string, world: IWorld): IEntity;

	/**
	 * Checks whether a clone with the given name exists in the tab.
	 * 
	 * @param tab the tab index.
	 * @param name the clone name.
	 * @return true if the clone exists; false otherwise.
	 */
	has(tab: number, name: string): boolean;

	/**
	 * Stores an entity as a clone in the given tab with the specified name.
	 * 
	 * @param tab the tab index.
	 * @param name the clone name.
	 * @param entity the entity to store.
	 */
	set(tab: number, name: string, entity: IEntity): void;

	/**
	 * Removes a clone from the given tab.
	 * 
	 * @param tab the tab index.
	 * @param name the clone name.
	 */
	remove(tab: number, name: string): void;

	/**
	 * Returns all custom folder names.
	 * 
	 * @return an array of folder names.
	 */
	getFolders(): string[];

	/**
	 * Checks whether a custom folder exists.
	 * 
	 * @param folderName the folder name.
	 * @return true if the folder exists; false otherwise.
	 */
	hasFolder(folderName: string): boolean;

	/**
	 * Spawns a clone from a custom folder at the given coordinates.
	 * 
	 * @param x the x coordinate.
	 * @param y the y coordinate.
	 * @param z the z coordinate.
	 * @param folderName the folder name.
	 * @param name the clone name.
	 * @param world the world to spawn in.
	 * @param ignoreProtection whether to bypass spawn protection.
	 * @return the spawned entity, or null on failure.
	 */
	spawn(x: number, y: number, z: number, folderName: string, name: string, world: IWorld, ignoreProtection: boolean): IEntity;

	/**
	 * Spawns a clone from a custom folder at the given position.
	 * 
	 * @param pos the position.
	 * @param folderName the folder name.
	 * @param name the clone name.
	 * @param world the world to spawn in.
	 * @param ignoreProtection whether to bypass spawn protection.
	 * @return the spawned entity, or null on failure.
	 */
	spawn(pos: IPos, folderName: string, name: string, world: IWorld, ignoreProtection: boolean): IEntity;

	/**
	 * Spawns a clone from a custom folder with default protection rules.
	 * 
	 * @param x the x coordinate.
	 * @param y the y coordinate.
	 * @param z the z coordinate.
	 * @param folderName the folder name.
	 * @param name the clone name.
	 * @param world the world to spawn in.
	 * @return the spawned entity, or null on failure.
	 */
	spawn(x: number, y: number, z: number, folderName: string, name: string, world: IWorld): IEntity;

	/**
	 * Spawns a clone from a custom folder at the given position with default protection rules.
	 * 
	 * @param pos the position.
	 * @param folderName the folder name.
	 * @param name the clone name.
	 * @param world the world to spawn in.
	 * @return the spawned entity, or null on failure.
	 */
	spawn(pos: IPos, folderName: string, name: string, world: IWorld): IEntity;

	/**
	 * Returns all clones stored in the specified custom folder.
	 * 
	 * @param folderName the folder name.
	 * @param world the world context for entity creation.
	 * @return an array of entities in the folder.
	 */
	getFolder(folderName: string, world: IWorld): IEntity[];

	/**
	 * Returns a specific clone from a custom folder by name.
	 * 
	 * @param folderName the folder name.
	 * @param name the clone name.
	 * @param world the world context for entity creation.
	 * @return the entity, or null if not found.
	 */
	get(folderName: string, name: string, world: IWorld): IEntity;

	/**
	 * Checks whether a clone exists in a custom folder.
	 * 
	 * @param folderName the folder name.
	 * @param name the clone name.
	 * @return true if the clone exists; false otherwise.
	 */
	has(folderName: string, name: string): boolean;

	/**
	 * Stores an entity as a clone in a custom folder.
	 * 
	 * @param folderName the folder name.
	 * @param name the clone name.
	 * @param entity the entity to store.
	 */
	set(folderName: string, name: string, entity: IEntity): void;

	/**
	 * Removes a clone from a custom folder.
	 * 
	 * @param folderName the folder name.
	 * @param name the clone name.
	 */
	remove(folderName: string, name: string): void;
}

